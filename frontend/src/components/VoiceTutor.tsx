"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";

type Msg = { role: "user" | "assistant"; text: string; correction?: string };
type Props = {
  sessionId?: string | null;
  onSession?: (id: string) => void;
  history?: Msg[];
  onMessage?: (msg: Msg) => void;
  hideMessages?: boolean;
  compact?: boolean;
  roleConfig?: {
    persona?: string;
    scenario?: string;
    materials?: string | string[];
    level?: string;
    learner?: string;
    targetPhrases?: string[];
  };
};

export default function VoiceTutor({ sessionId: extSessionId = null, onSession, history: extHistory, onMessage, hideMessages = false, compact = false, roleConfig }: Props) {
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
        body: JSON.stringify({ message: userText, history: historyTurns, ...(roleConfig || {})}),
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
          body: JSON.stringify({ text: reply }),
        });
        const blob = await ttsRes.blob();
        const url = URL.createObjectURL(blob);

        // Clean up previous tutor audio URL
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
    try { parsed = JSON.parse(text); } catch {}
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

  return (
    <div className={compact ? "w-full space-y-2" : "w-full max-w-xl space-y-3 border p-3 rounded"}>
      <div className="flex items-center gap-2">
        <Button 
          onClick={recording ? stopRec : startRec} 
          disabled={busy} 
          variant="lofi"
          responsive
        >
          {recording ? "Stop" : "record"}
        </Button>
        
        <Button 
          onClick={async () => {
            const audioUrl = pendingAudioUrl || lastTutorAudioUrl;
            if (audioUrl) {
              try {
                const a = new Audio(audioUrl);
                await a.play();
              } finally {
                if (pendingAudioUrl) {
                  setPendingAudioUrl(null);
                }
              }
            }
          }}
          disabled={busy || (!pendingAudioUrl && !lastTutorAudioUrl)}
          variant="lofi"
          responsive
        >
          play
        </Button>

        <Button 
          onClick={() => setShowTypeBox((v) => !v)} 
          disabled={busy} 
          variant="lofi"
          responsive
        >
          type
        </Button>
        
        {busy && <div className={compact ? "text-xs opacity-70" : "text-sm opacity-70"}>Processing…</div>}
      </div>

      {showTypeBox && (
        <form
          className="flex items-center gap-2"
          onSubmit={async (e) => {
            e.preventDefault();
            const t = manualText.trim();
            if (!t || busy) return;
            setManualText("");
            await sendToChat(t);
          }}
        >
          <input
            className="flex-1 border p-2 rounded"
            placeholder="Type a message..."
            value={manualText}
            onChange={(e) => setManualText(e.target.value)}
          />
          <Button disabled={busy || !manualText.trim()} type="submit" variant="lofi" responsive>Send</Button>
        </form>
      )}

      {!hideMessages && (
        <div className="space-y-2">
          {messages.map((m, i) => (
            <div key={i} className="text-sm">
              <div className={m.role === "user" ? "font-medium" : "text-blue-700"}>
                {m.role === "user" ? "You" : "Tutor"}: {m.text}
              </div>
              {m.correction && (
                <div className="opacity-70">{m.correction}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}