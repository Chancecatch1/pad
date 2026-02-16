import OpenAI from "openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { text, voice = "alloy", instructions, speed = 1, apiKey } = body || {};

    if (!apiKey) {
      return new Response("api_key_required", { status: 401 });
    }
    const openai = new OpenAI({ apiKey });
    if (!text || typeof text !== "string") {
      return new Response("text required", { status: 400 });
    }

    const speech = await openai.audio.speech.create({
      model: "gpt-4o-mini-tts",
      voice,
      input: text,
      instructions,
      speed
    });

    const buf = Buffer.from(await speech.arrayBuffer());
    return new Response(buf, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "no-store",
      },
    });
  } catch (e) {
    console.error(e);
    return new Response("tts_failed", { status: 500 });
  }
}