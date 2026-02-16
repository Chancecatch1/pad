/* CHANGE NOTE
Why: Redesigned tutor page — collapsible settings, improved option UI, chat layout
What changed: API key moved into Settings accordion, options use underline active state,
  chat messages have left/right alignment, progressive disclosure flow
Behaviour/Assumptions: Minimal aesthetic matching rest of PAD site
Rollback: git checkout -- src/app/tutor/page.tsx
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
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [apiKey, setApiKey] = useState("");

  const levelOptions = ["A2", "B1", "B2", "C1"];
  const personaOptions = ["Ordinary Person", "Interviewer", "Superviser", "Audience"];
  const learnerOptions = ["Random Person", "Interviewee", "Master Student", "Presenter"];
  const scenarioOptions = ["General Conversation", "Job Interview", "Lab Meeting", "Presentation"];

  const [selectedLevel, setSelectedLevel] = useState<string>("B2");
  const [selectedPersona, setSelectedPersona] = useState<string>("Ordinary Person");
  const [selectedScenario, setSelectedScenario] = useState<string>("General Conversation");
  const [selectedLearner, setSelectedLearner] = useState<string>("Random Person");

  /* Auto-collapse settings once conversation starts */
  const hasMessages = messages.length > 0;

  return (
    <div style={{ padding: '27px 0', maxWidth: 560 }}>
      <h1 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '40px' }}>Tutor</h1>

      {/* ── Settings ── */}
      <section style={{ marginBottom: '32px' }}>
        <button
          onClick={() => setSettingsOpen(v => !v)}
          className="hover:opacity-60"
          style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <span style={{
            display: 'inline-block',
            width: 0, height: 0,
            borderLeft: '4px solid currentColor',
            borderTop: '3px solid transparent',
            borderBottom: '3px solid transparent',
            transform: settingsOpen ? 'rotate(90deg)' : 'none',
            transition: 'transform 0.15s ease',
          }} />
          settings
          {apiKey && !settingsOpen && (
            <span style={{ opacity: 0.35, fontSize: '11px', textTransform: 'none' as const, letterSpacing: 0 }}>
              · key set
            </span>
          )}
        </button>

        {settingsOpen && (
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '20px', paddingLeft: '10px' }}>
            {/* API Key */}
            <div>
              <label style={labelStyle}>OpenAI API Key</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="password"
                  className="w-full bg-transparent focus:outline-none"
                  placeholder="sk-..."
                  value={apiKey}
                  onChange={e => setApiKey(e.target.value)}
                  style={{
                    borderBottom: '1px solid rgba(128,128,128,0.2)',
                    paddingBottom: '4px',
                    fontSize: '14px',
                    paddingRight: apiKey ? '24px' : '0',
                  }}
                />
                {apiKey && (
                  <span style={{ position: 'absolute', right: 0, bottom: '4px', opacity: 0.4, fontSize: '13px' }}>✓</span>
                )}
              </div>
              {!apiKey && (
                <div style={{ color: 'rgba(128,128,128,0.5)', fontSize: '11px', marginTop: '4px' }}>
                  Required to use the tutor
                </div>
              )}
            </div>

            {/* Level */}
            <OptionRow label="Level" options={levelOptions} selected={selectedLevel} onSelect={setSelectedLevel} />

            {/* Tutor Persona */}
            <OptionRow label="Tutor Persona" options={personaOptions} selected={selectedPersona} onSelect={setSelectedPersona} />

            {/* Learner Persona */}
            <OptionRow label="Learner Persona" options={learnerOptions} selected={selectedLearner} onSelect={setSelectedLearner} />

            {/* Scenario */}
            <OptionRow label="Scenario" options={scenarioOptions} selected={selectedScenario} onSelect={setSelectedScenario} />

            {/* Materials */}
            <div>
              <label style={labelStyle}>Materials</label>
              <textarea
                className="w-full bg-transparent focus:outline-none"
                placeholder="Briefly describe the situation/topic..."
                rows={2}
                value={materials}
                onChange={e => setMaterials(e.target.value)}
                style={{ borderBottom: '1px solid rgba(128,128,128,0.2)', paddingBottom: '4px', fontSize: '14px', resize: 'none' }}
              />
            </div>

            {/* Target phrases */}
            <div>
              <label style={labelStyle}>Target phrases</label>
              <input
                className="w-full bg-transparent focus:outline-none"
                placeholder="Comma-separated, e.g., trade-off, turn-taking"
                onChange={(e) => setTargetPhrases(
                  e.target.value.split(",").map((s) => s.trim()).filter(Boolean)
                )}
                style={{ borderBottom: '1px solid rgba(128,128,128,0.2)', paddingBottom: '4px', fontSize: '14px' }}
              />
            </div>
          </div>
        )}
      </section>

      {/* ── Conversation ── */}
      <section>
        {/* Chat messages */}
        {messages.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: m.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <span style={{ fontSize: '11px', opacity: 0.35, marginBottom: '2px' }}>
                  {m.role === 'user' ? 'You' : 'Tutor'}
                </span>
                <span style={{ fontSize: '14px', maxWidth: '85%' }}>{m.text}</span>
                {m.correction && m.role === 'assistant' && (
                  <span style={{ fontSize: '12px', opacity: 0.45, fontStyle: 'italic', marginTop: '4px', maxWidth: '85%' }}>
                    {m.correction}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Controls */}
        <VoiceTutor
          sessionId={sessionId}
          onSession={(id) => setSessionId(id)}
          history={messages}
          onMessage={(msg) => {
            setMessages((m) => [...m, msg]);
            if (settingsOpen && hasMessages) setSettingsOpen(false);
          }}
          hideMessages
          compact
          apiKey={apiKey}
          roleConfig={{
            level: selectedLevel,
            materials: materials.split(/\n\n+/).map((s) => s.trim()).filter(Boolean),
            persona: selectedPersona,
            learner: selectedLearner,
            scenario: selectedScenario,
            targetPhrases,
          }}
        />
      </section>
    </div>
  );
}

/* ── Sub-components ── */

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '12px',
  fontWeight: 500,
  marginBottom: '6px',
  opacity: 0.55,
  letterSpacing: '0.02em',
};

function OptionRow({
  label,
  options,
  selected,
  onSelect,
}: {
  label: string;
  options: string[];
  selected: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(selected === opt ? "" : opt)}
            className="hover:opacity-60"
            style={{
              fontSize: '14px',
              paddingBottom: '2px',
              borderBottom: selected === opt ? '1.5px solid currentColor' : '1.5px solid transparent',
              transition: 'border-color 0.15s ease',
            }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}