import OpenAI from "openai";
import { toFile } from "openai/uploads";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("audio");
    if (!(file instanceof File)) {
      return Response.json({ error: "audio file missing" }, { status: 400 });
    }

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