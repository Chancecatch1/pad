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
    <form onSubmit={onSubmit} className="space-y-3">
      <input
        className="w-full px-4 py-2 rounded-xl border border-gray-200 text-base focus:outline-none focus:border-gray-300"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="w-full px-4 py-2 rounded-xl border border-gray-200 text-base focus:outline-none focus:border-gray-300"
        placeholder="Body"
        rows={3}
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-xl border border-gray-200 text-base text-gray-700 hover:border-gray-300 transition-colors"
      >
        Add Note
      </button>
    </form>
  );
}