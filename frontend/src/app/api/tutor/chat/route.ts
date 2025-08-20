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
  learner?: string;
  targetPhrases?: string[];
};

export async function POST(req: Request) {
  try {
    const { message, history = [], persona, scenario, materials, level, targetPhrases = [], learner } = (await req.json()) as ClientBody;

    const parts: string[] = [
      "You are an English speaking tutor and conversation partner.",
      "Keep replies short (1-3 sentences), conversational, and always in English.",
      "Always end with a brief question to keep the conversation going.",
      "Provide a natural correction of the learner's last utterance.",
      'Return only JSON with keys \"reply\" and \"correction\".',
    ];
    if (persona) parts.push(`Persona: ${persona}. Stay in character.`);
    if (learner) parts.push(`Learner persona: ${learner}. Address the learner accordigly and tailor your responses to that role.`);
    if (scenario) parts.push(`Scenario: ${scenario}. Keep the conversation aligned with it.`);
    if (level) parts.push(`Learner level: ${level}. Adjust vocabulary and complexity accordingly.`);

    // Normalize and bound target phrases for prompt hygiene
    const normalizedPhrases = (Array.isArray(targetPhrases) ? targetPhrases : [])
      .map((s) => (typeof s === "string" ? s.trim() : ""))
      .filter(Boolean)
      .slice(0, 12);
    if (normalizedPhrases.length) parts.push(`Encourage using: ${normalizedPhrases.join(", ")}.`);

    // Normalize and truncate materials (accept string or string[])
    if (materials) {
      const MAX_MATERIAL_CHARS = 2000; // adjust as needed
      const mats = Array.isArray(materials) ? materials : [materials];
      const cleaned = mats
        .map((s) => (typeof s === "string" ? s.trim() : ""))
        .filter(Boolean)
        .slice(0, 10); // cap sections
      let joined = cleaned.join("\\n\\n");
      if (joined.length > MAX_MATERIAL_CHARS) joined = joined.slice(0, MAX_MATERIAL_CHARS) + "…";
      if (joined) parts.push(`Reference materials (use when relevant):\\n${joined}`);
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