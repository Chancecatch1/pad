/* CHANGE NOTE
Why: TeamVoid minimal style - no boxes on form
What changed: Removed rounded/border styling, clean text inputs
Behaviour/Assumptions: Simple form without decorative boxes
Rollback: Revert to previous version
— mj
*/

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewNoteForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    });
    setTitle("");
    setBody("");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <input
        className="bg-transparent focus:outline-none"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="bg-transparent focus:outline-none"
        placeholder="Body"
        rows={2}
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button
        type="submit"
        className="self-start hover:opacity-60"
      >
        Add Note →
      </button>
    </form>
  );
}