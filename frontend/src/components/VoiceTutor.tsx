"use client";

import { useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; text: string; correction?: string };

export default function VoiceTutor() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [recording, setRecording] = useState(false);
  const [busy, setBusy] = useState(false);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);

  async function sendToChat(userText: string) {
    const sid = await ensureSession();
    await saveMessage(sid, { role: "user", text: userText });
    setBusy(true);
    setMessages((m) => [...m, { role: "user", text: userText }]);
    try {
      const history = messages.map((m) => ({ role: m.role, content: m.text }));
      const r = await fetch("/api/tutor/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText, history }),
      });
      const data = await r.json();
      const reply = data?.reply ?? "";
      const correction = data?.correction ?? "";
      setMessages((m) => [...m, { role: "assistant", text: reply, correction }]);

      if (reply) {
        await saveMessage(sid, { role: "assistant", text: reply, correction });
        const ttsRes = await fetch("/api/tutor/tts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: reply }),
        });
        const blob = await ttsRes.blob();
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        audio.play();
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
    <div className="w-full max-w-xl space-y-3 border p-3 rounded">
      <div className="flex items-center gap-2">
        <button
          onClick={recording ? stopRec : startRec}
          className={`px-4 py-2 rounded ${recording ? "bg-red-600 text-white" : "border"}`}
          disabled={busy}
        >
          {recording ? "Stop" : "Hold to Talk"}
        </button>
        <button
          onClick={async () => {
            const text = prompt("Type to chat:");
            if (text) await sendToChat(text);
          }}
          className="border px-3 py-2 rounded"
          disabled={busy}
        >
          Type instead
        </button>
        {busy && <div className="text-sm opacity-70">Processing…</div>}
      </div>

      <div className="space-y-2">
        {messages.map((m, i) => (
          <div key={i} className="text-sm">
            <div className={m.role === "user" ? "font-medium" : "text-blue-700"}>
              {m.role === "user" ? "You" : "Tutor"}: {m.text}
            </div>
            {m.correction && (
              <div className="opacity-70">Correction: {m.correction}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}