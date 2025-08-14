"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

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
    <form onSubmit={onSubmit} className="w-full max-w-xl space-y-2">
      <input
        className="w-full border p-2 rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="w-full border p-2 rounded"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <Button type="submit" variant="apple">Add Note</Button>
    </form>
  );
}