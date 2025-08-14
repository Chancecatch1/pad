"use client";

import { useState } from "react";
import VoiceTutor from "@/components/VoiceTutor";
import BackButton from "@/components/BackButton";

type Msg = { role: "user" | "assistant"; text: string; correction?: string };

export default function TutorPage() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Msg[]>([]);

  return (
    <div className="min-h-screen p-6">
      <main className="max-w-xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <BackButton />
        </div>

        <section className="space-y-3">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-sm ${
                  m.role === "user"
                    ? "bg-[#007AFF] text-white rounded-br-md"
                    : "bg-gray-200 dark:bg-white/10 text-black dark:text-white rounded-bl-md"
                }`}
              >
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
        />
      </main>
    </div>
  );
}