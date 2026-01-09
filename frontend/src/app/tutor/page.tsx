/* CHANGE NOTE
Why: TeamVoid minimal style - clean tutor with proper spacing (gap 17px)
What changed: Adjusted button gap, removed boxes
Behaviour/Assumptions: Buttons close together as per Figma
Rollback: Revert to previous version
— mj
*/

"use client";
import { useState } from "react";
import VoiceTutor from "@/components/VoiceTutor";

type Msg = { role: "user" | "assistant"; text: string; correction?: string };

export default function TutorPage() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [materials, setMaterials] = useState("");
  const [targetPhrases, setTargetPhrases] = useState<string[]>([]);
  const [optionsOpen, setOptionsOpen] = useState(false);

  const levelOptions = ["A2", "B1", "B2", "C1"];
  const personaOptions = ["Ordinary Person", "Interviewer", "Superviser", "Audience"];
  const learnerOptions = ["Random Person", "Interviewee", "Master Student", "Presenter"];
  const scenarioOptions = ["General Conversation", "Job Interview", "Lab Meeting", "Presentation"];

  const [selectedLevel, setSelectedLevel] = useState<string>("B2");
  const [selectedPersona, setSelectedPersona] = useState<string>("");
  const [selectedScenario, setSelectedScenario] = useState<string>("");
  const [selectedLearner, setSelectedLearner] = useState<string>("");

  return (
    <div className="py-8">
      <h1 className="font-bold mb-4">Tutor</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '17px' }}>
        {/* Role-play options */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <span className="font-bold">Role-play options</span>
            <button onClick={() => setOptionsOpen(v => !v)} className="hover:opacity-60">
              {optionsOpen ? "Hide" : "Show"}
            </button>
          </div>

          {optionsOpen && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '17px' }}>
              <div>
                <div className="font-medium mb-1">Level</div>
                <div className="flex gap-3">
                  {levelOptions.map(lv => (
                    <button
                      key={lv}
                      onClick={() => setSelectedLevel(lv)}
                      className={`hover:opacity-60 ${selectedLevel === lv ? 'font-bold' : ''}`}
                    >
                      {lv}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-medium mb-1">Tutor Persona</div>
                <div className="flex flex-wrap gap-3">
                  {personaOptions.map(ps => (
                    <button
                      key={ps}
                      onClick={() => setSelectedPersona(ps)}
                      className={`hover:opacity-60 ${selectedPersona === ps ? 'font-bold' : ''}`}
                    >
                      {ps}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-medium mb-1">Learner Persona</div>
                <div className="flex flex-wrap gap-3">
                  {learnerOptions.map(ps => (
                    <button
                      key={ps}
                      onClick={() => setSelectedLearner(ps)}
                      className={`hover:opacity-60 ${selectedLearner === ps ? 'font-bold' : ''}`}
                    >
                      {ps}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-medium mb-1">Scenario</div>
                <div className="flex flex-wrap gap-3">
                  {scenarioOptions.map(sc => (
                    <button
                      key={sc}
                      onClick={() => setSelectedScenario(sc)}
                      className={`hover:opacity-60 ${selectedScenario === sc ? 'font-bold' : ''}`}
                    >
                      {sc}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-medium mb-1">Materials</div>
                <textarea
                  className="w-full bg-transparent focus:outline-none"
                  placeholder="Briefly describe the situation/topic..."
                  rows={3}
                  value={materials}
                  onChange={e => setMaterials(e.target.value)}
                />
              </div>
              <div>
                <div className="font-medium mb-1">Target phrases</div>
                <input
                  className="w-full bg-transparent focus:outline-none"
                  placeholder="Comma-separated, e.g., trade-off, turn-taking"
                  onChange={(e) => setTargetPhrases(
                    e.target.value.split(",").map((s) => s.trim()).filter(Boolean)
                  )}
                />
              </div>
            </div>
          )}
        </section>

        {/* Chat area */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {messages.map((m, i) => (
            <div key={i} className={m.role === "user" ? "text-right" : ""}>
              <span className="text-gray-400 text-xs mr-2">
                {m.role === "user" ? "You" : "Tutor"}
              </span>
              <span>{m.text}</span>
              {m.correction && m.role === "assistant" && (
                <div className="text-gray-500 text-sm mt-1">{m.correction}</div>
              )}
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
            materials: materials.split(/\n\n+/).map((s) => s.trim()).filter(Boolean),
            persona: selectedPersona,
            learner: selectedLearner,
            scenario: selectedScenario,
            targetPhrases,
          }}
        />
      </div>
    </div>
  );
}