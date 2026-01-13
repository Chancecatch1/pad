/* CHANGE NOTE
Why: TeamVoid minimal style - no boxes, clean layout
What changed: Removed Card components, simplified styling
Behaviour/Assumptions: Clean text-based notes display
Rollback: Revert to previous version
— mj
*/

"use client";

import NewNoteForm from "@/components/NewNoteForm";

type Note = { _id: string; title: string; body?: string; createdAt?: string };

type Props = {
    notes: Note[];
};

export default function NotesContent({ notes }: Props) {
    return (
        <div style={{ padding: '27px 0' }}>
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
                                <div style={{ fontWeight: 500 }}>{n.title}</div>
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
