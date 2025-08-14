import OpenAI from "openai";
const MODEL = process.env.OPENAI_CHAT_MODEL || "gpt-5-nano";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

type Turn = { role: "user" | "assistant"; content: string };
type ClientBody = {
  message: string;
  history?: Turn[];
  persona?: string;
  scenario?: string;
  materials?: string | string[];
  level?: string;
  targetPhrases?: string[];
};

export async function POST(req: Request) {
  try {
    const { message, history = [], persona, scenario, materials, level, targetPhrases = [] } = (await req.json()) as ClientBody;

    const parts: string[] = [
      "You are an English speaking tutor and conversation partner.",
      "Keep replies short (1–3 sentences), conversational, and always in English.",
      "Always end with a brief question to keep the conversation going.",
      "Provide a natural correction of the learner's last utterance.",
      'Return only JSON with keys \"reply\" and \"correction\".',
    ];
    if (persona) parts.push(`Persona: ${persona}. Stay in character.`);
    if (scenario) parts.push(`Scenario: ${scenario}. Keep the conversation aligned with it.`);
    if (level) parts.push(`Learner level: ${level}. Adjust vocabulary and complexity accordingly.`);
    if (targetPhrases.length) parts.push(`Encourage using: ${targetPhrases.join(", ")}.`);
    if (materials) {
      const mat = Array.isArray(materials) ? materials.join("\\n\\n") : materials;
      parts.push(`Reference materials (use when relevant):\\n${mat}`);
    }

    const messages: { role: "system" | "user" | "assistant"; content: string }[] = [
      { role: "system", content: parts.join("\\n\\n") },
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