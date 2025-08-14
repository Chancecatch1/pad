"use client";

import { useState } from "react";
import VoiceTutor from "@/components/VoiceTutor";
import BackButton from "@/components/BackButton";

type Msg = { role: "user" | "assistant"; text: string; correction?: string };

export default function TutorPage() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [roleOpen, setRoleOpen] = useState(false);
  const [roleConfig, setRoleConfig] = useState({
    persona: "",
    scenario: "",
    materials: "",
    level: "B2",
    targetPhrases: [] as string[],
  });

  const applyPreset = (p: string) => {
    if (p === "cafe") {
      setRoleConfig({
        persona: "Barista at a cafe in NYC",
        scenario: "Ordering coffee and pastry during a busy morning",
        materials: "",
        level: "B1",
        targetPhrases: ["I'd like", "Could I get", "to go", "extra shot"],
      });
    } else if (p === "interview") {
      setRoleConfig({
        persona: "US tech recruiter",
        scenario: "Mock PM interview for an AI notebook startup",
        materials: "",
        level: "B2",
        targetPhrases: ["trade-off", "impact", "stakeholders", "I led"],
      });
    } else if (p === "hotel") {
      setRoleConfig({
        persona: "Hotel front desk agent",
        scenario: "Check-in and room issue resolution",
        materials: "",
        level: "A2",
        targetPhrases: ["reservation", "check-in", "available", "upgrade"],
      });
    }
  };

  return (
    <div className="min-h-screen p-6">
      <main className="max-w-xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <BackButton />
        </div>

        <div className="space-y-2">
          <button className="text-xs underline opacity-80" onClick={() => setRoleOpen(v => !v)}>
            {roleOpen ? "Hide role-play settings" : "Role-play settings"}
          </button>

          {roleOpen && (
            <div className="border p-3 rounded space-y-2 text-sm">
              <div className="flex gap-2">
                <select className="border p-2 rounded"
                  onChange={(e) => applyPreset(e.target.value)} defaultValue="">
                  <option value="">Choose a preset…</option>
                  <option value="cafe">Cafe order</option>
                  <option value="interview">Job interview (PM)</option>
                  <option value="hotel">Hotel check-in</option>
                </select>
                <select className="border p-2 rounded"
                  value={roleConfig.level}
                  onChange={(e) => setRoleConfig(rc => ({ ...rc, level: e.target.value }))}>
                  <option value="A2">A2</option>
                  <option value="B1">B1</option>
                  <option value="B2">B2</option>
                  <option value="C1">C1</option>
                </select>
              </div>
              <input className="w-full border p-2 rounded" placeholder="Persona"
                value={roleConfig.persona}
                onChange={(e) => setRoleConfig(rc => ({ ...rc, persona: e.target.value }))} />
              <input className="w-full border p-2 rounded" placeholder="Scenario"
                value={roleConfig.scenario}
                onChange={(e) => setRoleConfig(rc => ({ ...rc, scenario: e.target.value }))} />
              <textarea className="w-full border p-2 rounded" placeholder="Materials (notes, job desc, etc.)"
                value={roleConfig.materials}
                onChange={(e) => setRoleConfig(rc => ({ ...rc, materials: e.target.value }))} />
              <input className="w-full border p-2 rounded" placeholder="Target phrases (comma-separated)"
                onChange={(e) =>
                  setRoleConfig(rc => ({ ...rc, targetPhrases: e.target.value.split(",").map(s => s.trim()).filter(Boolean) }))
                } />
            </div>
          )}
        </div>

        <section className="space-y-3">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-sm ${
                m.role === "user" ? "bg-[#007AFF] text-white rounded-br-md" : "bg-gray-200 dark:bg-white/10 text-black dark:text-white rounded-bl-md"}`}>
                <div>{m.text}</div>
                {m.correction && m.role === "assistant" && (
                  <div className="mt-1 text-xs opacity-80">Correction: {m.correction}</div>
                )}
              </div>
            </div>
          ))}
        </section>

        <VoiceTutor
          sessionId={sessionId}
          onSession={(id) => setSessionId(id)}
          history={messages}
          onMessage={(msg) => setMessages((m) => [...m, msg])}
          hideMessages
          compact
          roleConfig={roleConfig}
        />
      </main>
    </div>
  );
}