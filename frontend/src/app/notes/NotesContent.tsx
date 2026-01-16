/* CHANGE NOTE
Why: TeamVoid minimal style - no boxes, clean layout + delete feature
What changed: Added delete button for each note
Behaviour/Assumptions: Clean text-based notes display with delete functionality
Rollback: Revert to previous version
— mj
*/

"use client";

import { useRouter } from "next/navigation";
import NewNoteForm from "@/components/NewNoteForm";

type Note = { _id: string; title: string; body?: string; createdAt?: string };

type Props = {
    notes: Note[];
};

export default function NotesContent({ notes }: Props) {
    const router = useRouter();

    async function handleDelete(id: string) {
        if (!confirm("Delete this note?")) return;
        await fetch(`/api/notes/${id}`, { method: "DELETE" });
        router.refresh();
    }

    return (
        <div style={{ padding: '27px 0', maxWidth: '800px' }}>
            <h1 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>Notes</h1>

            {/* Form */}
            <section style={{ marginBottom: '50px' }}>
                <NewNoteForm />
            </section>

            {/* Notes list */}
            <section>
                {Array.isArray(notes) && notes.length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '17px' }}>
                        {notes.map((n) => (
                            <div key={n._id}>
                                <div style={{ display: 'inline' }}>
                                    <span style={{ fontWeight: 500 }}>{n.title}</span>
                                    <button
                                        onClick={() => handleDelete(n._id)}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            color: '#999',
                                            fontSize: '11px',
                                            padding: '0 4px',
                                            marginLeft: '6px'
                                        }}
                                        className="hover:opacity-60"
                                        title="Delete note"
                                    >
                                        ✕
                                    </button>
                                </div>
                                {n.body && <div style={{ color: '#666' }}>{n.body}</div>}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{ color: '#666' }}>No notes yet.</div>
                )}
            </section>
        </div>
    );
}

