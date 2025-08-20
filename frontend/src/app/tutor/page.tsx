"use client";
import { useState } from "react";
import VoiceTutor from "@/components/VoiceTutor";
import NavBar from "@/components/NavBar";
import Card from "@/components/Card";

type Msg = { role: "user" | "assistant"; text: string; correction?: string };

export default function TutorPage() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [materials, setMaterials] = useState("");
  const [targetPhrases, setTargetPhrases] = useState<string[]>([]);
  const [optionsOpen, setOptionsOpen] = useState(false);

  // Options inspired by Basic Lo-fi Kit layout (customizable)
  const levelOptions = ["A2", "B1", "B2", "C1"];
  const personaOptions = [
    "Ordinary Person",
    "Interviewer",
    "Superviser",
    "Audience",
  ];
  const learnerOptions = [
    "Random Person",
    "Interviewee",
    "Master Student",
    "Presenter",
  ];
  const scenarioOptions = [
    "General Conversation",
    "Job Interview",
    "Lab Meeting",
    "Presentation",
  ];

  // Single-select states
  const [selectedLevel, setSelectedLevel] = useState<string>("B2");
  const [selectedPersona, setSelectedPersona] = useState<string>("");
  const [selectedScenario, setSelectedScenario] = useState<string>("");
  const [selectedLearner, setSelectedLearner] = useState<string>("");

  return (
    <div className="min-h-screen p-6">
      <NavBar title="Tutor" />
      <main className="max-w-xl mx-auto grid grid-cols-1 gap-6 items-start mt-20 w-full px-4 justify-items-center">
        {/* Role-play options (collapsed by default) */}
        <Card className="p-4 w-full">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Role-play options</div>
            <button type="button" className="text-xs underline" onClick={() => setOptionsOpen(v => !v)}>
              {optionsOpen ? "Hide" : "Show"}
            </button>
          </div>
          {optionsOpen && (
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Level</label>
                <div className="grid grid-cols-2 gap-2">
                  {levelOptions.map(lv => (
                    <button key={lv} type="button" onClick={() => setSelectedLevel(lv)}
                      className={`px-3 py-2 rounded-md border-2 text-xs ${selectedLevel === lv ? "bg-[#C5CED8] border-[#C5CED8] text-[#262E3A]" : "bg-white border-[#C5CED8] text-[#4E5C6A]"}`}>{lv}</button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Tutor Persona</label>
                <div className="grid grid-cols-2 gap-2">
                  {personaOptions.map(ps => (
                    <button key={ps} type="button" onClick={() => setSelectedPersona(ps)}
                      className={`px-3 py-2 rounded-md border-2 text-xs ${selectedPersona === ps ? "bg-[#C5CED8] border-[#C5CED8] text-[#262E3A]" : "bg-white border-[#C5CED8] text-[#4E5C6A]"}`}>{ps}</button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Learner Persona</label>
                <div className="grid grid-cols-2 gap-2">
                  {learnerOptions.map(ps => (
                    <button key={ps} type="button" onClick={() => setSelectedLearner(ps)}
                      className={`px-3 py-2 rounded-md border-2 text-xs ${selectedLearner === ps ? "bg-[#C5CED8] border-[#C5CED8] text-[#262E3A]" : "bg-white border-[#C5CED8] text-[#4E5C6A]"}`}>{ps}</button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Scenario</label>
                <div className="grid grid-cols-2 gap-2">
                  {scenarioOptions.map(sc => (
                    <button key={sc} type="button" onClick={() => setSelectedScenario(sc)}
                      className={`px-3 py-2 rounded-md border-2 text-xs ${selectedScenario === sc ? "bg-[#C5CED8] border-[#C5CED8] text-[#262E3A]" : "bg-white border-[#C5CED8] text-[#4E5C6A]"}`}>{sc}</button>
                  ))}
                </div>
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-sm font-medium">Materials</label>
                <textarea className="w-full border-2 border-[#C5CED8] rounded-md p-2 text-xs"
                  placeholder="Briefly describe the situation/topic, paste any relevant text, and list expressions you want to practice. Use blank lines to separate sections."
                  rows={5}
                  value={materials}
                  onChange={e => setMaterials(e.target.value)} />
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-sm font-medium">Target phrases (comma-separated)</label>
                <input
                  className="w-full border-2 border-[#C5CED8] rounded-md p-2 text-xs"
                  placeholder="Comma‑separated, e.g., trade-off, turn-taking, politely disagree, I'd like to."
                  onChange={(e) => setTargetPhrases(
                    e.target.value
                      .split(",")
                      .map((s) => s.trim())
                      .filter(Boolean)
                  )}
                />
              </div>
            </div>
          )}
        </Card>

        {/* Chat area beneath options */}
        <Card className="p-4 space-y-3 w-full">
          <section className="space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-md px-4 py-2 text-sm leading-relaxed border-2 ${
                  m.role === "user"
                    ? "bg-[#C5CED8] border-[#C5CED8] text-[#262E3A]"
                    : "bg-white border-[#C5CED8] text-[#4E5C6A]"}`}>
                  <div>{m.text}</div>
                  {m.correction && m.role === "assistant" && (
                    <div className="mt-1 text-xs opacity-80">{m.correction}</div>
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
            roleConfig={{
              level: selectedLevel,
              materials: materials
                .split(/\n\n+/) // split by blank lines to form sections
                .map((s) => s.trim())
                .filter(Boolean),
              persona: selectedPersona,
              learner: selectedLearner,
              scenario: selectedScenario,
              targetPhrases,
            }}
          />
        </Card>
      </main>
    </div>
  );
}