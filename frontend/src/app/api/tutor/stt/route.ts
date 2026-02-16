import OpenAI from "openai";
import { toFile } from "openai/uploads";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("audio");
    const apiKey = formData.get("apiKey") as string | null;

    if (!apiKey) {
      return Response.json({ error: "api_key_required" }, { status: 401 });
    }
    if (!(file instanceof File)) {
      return Response.json({ error: "audio file missing" }, { status: 400 });
    }

    const openai = new OpenAI({ apiKey });

    const nodeFile = await toFile(
      Buffer.from(await file.arrayBuffer()),
      (file as File).name || "audio.webm",
      { type: (file as File).type || "audio/webm" }
    );

    const tr = await openai.audio.transcriptions.create({
      model: "gpt-4o-mini-transcribe",
      file: nodeFile,
    });

    const text = typeof tr === "string" ? tr : (tr.text ?? "");
    return Response.json({ text });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "stt_failed" }, { status: 500 });
  }
}