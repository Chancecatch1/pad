/* CHANGE NOTE
Why: Redesigned control bar — recording indicator, cleaner type box, better spacing
What changed: Controls have dot indicator for recording, separator dots, refined layout
Behaviour/Assumptions: Minimal text-only buttons matching PAD aesthetic
Rollback: git checkout -- src/components/VoiceTutor.tsx
— mj
*/

"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; text: string; correction?: string };
type Props = {
  sessionId?: string | null;
  onSession?: (id: string) => void;
  history?: Msg[];
  onMessage?: (msg: Msg) => void;
  hideMessages?: boolean;
  compact?: boolean;
  apiKey?: string;
  roleConfig?: {
    persona?: string;
    scenario?: string;
    materials?: string | string[];
    level?: string;
    learner?: string;
    targetPhrases?: string[];
  };
};

export default function VoiceTutor({ sessionId: extSessionId = null, onSession, history: extHistory, onMessage, hideMessages = false, compact: _compact = false, apiKey, roleConfig }: Props) {
  const [pendingAudioUrl, setPendingAudioUrl] = useState<string | null>(null);
  const [lastTutorAudioUrl, setLastTutorAudioUrl] = useState<string | null>(null);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [recording, setRecording] = useState(false);
  const [busy, setBusy] = useState(false);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(extSessionId);
  const [showTypeBox, setShowTypeBox] = useState(false);
  const [manualText, setManualText] = useState("");

  useEffect(() => {
    if (extSessionId && extSessionId !== sessionId) setSessionId(extSessionId);
  }, [extSessionId]); // eslint-disable-line react-hooks/exhaustive-deps

  async function sendToChat(userText: string) {
    const sid = await ensureSession();
    await saveMessage(sid, { role: "user", text: userText });
    onMessage?.({ role: "user", text: userText });
    setBusy(true);
    setMessages((m) => [...m, { role: "user", text: userText }]);
    try {
      const historyTurns = (extHistory ?? messages).map((m) => ({ role: m.role, content: m.text }));
      const r = await fetch("/api/tutor/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText, history: historyTurns, apiKey, ...(roleConfig || {}) }),
      });
      const data = await r.json();
      const reply = data?.reply ?? "";
      const correction = data?.correction ?? "";
      setMessages((m) => [...m, { role: "assistant", text: reply, correction }]);
      onMessage?.({ role: "assistant", text: reply, correction });

      if (reply) {
        await saveMessage(sid, { role: "assistant", text: reply, correction });
        const ttsRes = await fetch("/api/tutor/tts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: reply, apiKey }),
        });
        const blob = await ttsRes.blob();
        const url = URL.createObjectURL(blob);

        if (lastTutorAudioUrl) {
          URL.revokeObjectURL(lastTutorAudioUrl);
        }
        setLastTutorAudioUrl(url);

        try {
          await new Audio(url).play();
        } catch {
          setPendingAudioUrl(url);
        }
      }
    } finally {
      setBusy(false);
    }
  }

  async function handleBlob(blob: Blob) {
    setBusy(true);
    try {
      const form = new FormData();
      form.append("audio", blob, "speech.webm");
      form.append("apiKey", apiKey || "");
      const r = await fetch("/api/tutor/stt", { method: "POST", body: form });
      const data = await r.json();
      const text = data?.text?.trim?.() ?? "";
      if (text) await sendToChat(text);
    } finally {
      setBusy(false);
    }
  }

  async function startRec() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const rec = new MediaRecorder(stream, { mimeType: "audio/webm" });
    rec.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) chunksRef.current.push(e.data);
    };
    rec.onstop = async () => {
      const blob = new Blob(chunksRef.current, { type: "audio/webm" });
      chunksRef.current = [];
      stream.getTracks().forEach((t) => t.stop());
      await handleBlob(blob);
    };
    rec.start();
    recorderRef.current = rec;
    setRecording(true);
  }

  function stopRec() {
    recorderRef.current?.stop();
    setRecording(false);
  }

  async function ensureSession() {
    if (sessionId) return sessionId;
    const r = await fetch("/api/chat/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: new Date().toLocaleString() }),
    });
    const text = await r.text();
    let parsed: unknown;
    try { parsed = JSON.parse(text); } catch { /* empty */ }
    const id =
      parsed && typeof parsed === "object" && "_id" in parsed && typeof (parsed as { _id: unknown })._id === "string"
        ? (parsed as { _id: string })._id
        : undefined;
    if (!r.ok || !id) throw new Error("Failed to create chat session");
    setSessionId(id);
    onSession?.(id);
    return id;
  }

  async function saveMessage(sid: string, msg: { role: "user" | "assistant"; text: string; correction?: string }) {
    await fetch(`/api/chat/sessions/${sid}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(msg),
    });
  }

  const canPlay = !busy && (!!pendingAudioUrl || !!lastTutorAudioUrl);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* ── Control bar ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
        <button
          onClick={recording ? stopRec : startRec}
          disabled={busy}
          className="hover:opacity-60 disabled:opacity-30"
          style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
        >
          {recording && (
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#e55',
              display: 'inline-block',
              animation: 'pulse 1.2s ease-in-out infinite',
            }} />
          )}
          {recording ? "stop" : "record"}
        </button>

        <span style={{ opacity: 0.15 }}>·</span>

        <button
          onClick={async () => {
            const audioUrl = pendingAudioUrl || lastTutorAudioUrl;
            if (audioUrl) {
              try {
                const a = new Audio(audioUrl);
                await a.play();
              } finally {
                if (pendingAudioUrl) setPendingAudioUrl(null);
              }
            }
          }}
          disabled={!canPlay}
          className="hover:opacity-60 disabled:opacity-30"
        >
          play
        </button>

        <span style={{ opacity: 0.15 }}>·</span>

        <button
          onClick={() => setShowTypeBox((v) => !v)}
          disabled={busy}
          className="hover:opacity-60 disabled:opacity-30"
          style={{
            borderBottom: showTypeBox ? '1.5px solid currentColor' : '1.5px solid transparent',
            paddingBottom: '1px',
            transition: 'border-color 0.15s ease',
          }}
        >
          type
        </button>

        {busy && <span style={{ opacity: 0.35, fontSize: '12px', marginLeft: '8px' }}>processing…</span>}
      </div>

      {/* ── Type box ── */}
      {showTypeBox && (
        <form
          style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
          onSubmit={async (e) => {
            e.preventDefault();
            const t = manualText.trim();
            if (!t || busy) return;
            setManualText("");
            await sendToChat(t);
          }}
        >
          <input
            className="flex-1 bg-transparent focus:outline-none"
            placeholder="Type a message..."
            value={manualText}
            onChange={(e) => setManualText(e.target.value)}
            style={{ borderBottom: '1px solid rgba(128,128,128,0.2)', paddingBottom: '4px', fontSize: '14px' }}
            autoFocus
          />
          <button
            disabled={busy || !manualText.trim()}
            type="submit"
            className="hover:opacity-60 disabled:opacity-30"
            style={{ fontSize: '14px' }}
          >
            →
          </button>
        </form>
      )}

      {/* ── Messages (only shown when hideMessages is false) ── */}
      {!hideMessages && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
                {m.role === "user" ? "You" : "Tutor"}
              </span>
              <span style={{ fontSize: '14px' }}>{m.text}</span>
              {m.correction && (
                <span style={{ fontSize: '12px', opacity: 0.45, fontStyle: 'italic', marginTop: '3px' }}>
                  {m.correction}
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Recording pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}