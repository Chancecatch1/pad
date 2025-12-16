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
    <div className="min-h-screen px-6 pt-24 pb-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-base font-bold text-gray-900 mb-6">Tutor</h1>

        <div className="max-w-2xl space-y-4">
          {/* Role-play options (collapsed by default) */}
          <div className="p-4 rounded-xl border border-gray-200 bg-white">
            <div className="flex items-center justify-between">
              <div className="text-base font-bold text-gray-900">Role-play options</div>
              <button type="button" className="text-base text-gray-500 underline" onClick={() => setOptionsOpen(v => !v)}>
                {optionsOpen ? "Hide" : "Show"}
              </button>
            </div>
            {optionsOpen && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-base font-bold text-gray-900">Level</label>
                  <div className="flex flex-wrap gap-2">
                    {levelOptions.map(lv => (
                      <button key={lv} type="button" onClick={() => setSelectedLevel(lv)}
                        className={`px-3 py-1 rounded-xl border text-base transition-colors ${selectedLevel === lv ? "border-gray-400 bg-gray-100" : "border-gray-200 hover:border-gray-300"}`}>{lv}</button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-base font-bold text-gray-900">Tutor Persona</label>
                  <div className="flex flex-wrap gap-2">
                    {personaOptions.map(ps => (
                      <button key={ps} type="button" onClick={() => setSelectedPersona(ps)}
                        className={`px-3 py-1 rounded-xl border text-base transition-colors ${selectedPersona === ps ? "border-gray-400 bg-gray-100" : "border-gray-200 hover:border-gray-300"}`}>{ps}</button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-base font-bold text-gray-900">Learner Persona</label>
                  <div className="flex flex-wrap gap-2">
                    {learnerOptions.map(ps => (
                      <button key={ps} type="button" onClick={() => setSelectedLearner(ps)}
                        className={`px-3 py-1 rounded-xl border text-base transition-colors ${selectedLearner === ps ? "border-gray-400 bg-gray-100" : "border-gray-200 hover:border-gray-300"}`}>{ps}</button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-base font-bold text-gray-900">Scenario</label>
                  <div className="flex flex-wrap gap-2">
                    {scenarioOptions.map(sc => (
                      <button key={sc} type="button" onClick={() => setSelectedScenario(sc)}
                        className={`px-3 py-1 rounded-xl border text-base transition-colors ${selectedScenario === sc ? "border-gray-400 bg-gray-100" : "border-gray-200 hover:border-gray-300"}`}>{sc}</button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-base font-bold text-gray-900">Materials</label>
                  <textarea className="w-full px-4 py-2 rounded-xl border border-gray-200 text-base focus:outline-none focus:border-gray-300"
                    placeholder="Briefly describe the situation/topic..."
                    rows={4}
                    value={materials}
                    onChange={e => setMaterials(e.target.value)} />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-base font-bold text-gray-900">Target phrases</label>
                  <input
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 text-base focus:outline-none focus:border-gray-300"
                    placeholder="Comma-separated, e.g., trade-off, turn-taking"
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
          </div>

          {/* Chat area */}
          <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-3">
            <section className="space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] px-4 py-2 rounded-xl border text-base ${m.role === "user"
                      ? "border-gray-300 bg-gray-100"
                      : "border-gray-200 bg-white"}`}>
                    <div>{m.text}</div>
                    {m.correction && m.role === "assistant" && (
                      <div className="mt-1 text-base text-gray-500">{m.correction}</div>
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
                  .split(/\n\n+/)
                  .map((s) => s.trim())
                  .filter(Boolean),
                persona: selectedPersona,
                learner: selectedLearner,
                scenario: selectedScenario,
                targetPhrases,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}