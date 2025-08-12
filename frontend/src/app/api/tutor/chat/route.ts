import OpenAI from "openai";
const MODEL = process.env.OPENAI_CHAT_MODEL || "gpt-5-nano";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

type Turn = { role: "user" | "assistant"; content: string };
type ClientBody = { message: string; history?: Turn[] };

export async function POST(req: Request) {
  try {
    const { message, history = [] } = (await req.json()) as ClientBody;

    const messages: { role: "system" | "user" | "assistant"; content: string }[] = [
      {
        role: "system",
        content:
          "You are a friendly English speaking tutor. Keep replies short and conversational. Respond in English. Also provide a natural correction of the student's last utterance. Return JSON with keys reply and correction only.",
      },
      ...history.filter((m) => m.role === "user" || m.role === "assistant"),
      { role: "user", content: message },
    ];

    const completion = await openai.chat.completions.create({
      model: MODEL,
      messages,
      response_format: { type: "json_object" },
    });

    const raw = completion.choices[0]?.message?.content ?? "{}";
    const json = JSON.parse(raw);
    return Response.json(json);
  } catch (err) {
    console.error(err);
    return Response.json({ error: "chat_failed" }, { status: 500 });
  }
}