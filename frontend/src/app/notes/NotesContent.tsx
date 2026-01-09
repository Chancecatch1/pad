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
        <div className="py-8">
            <h1 className="font-bold mb-4">Notes</h1>

            {/* Form */}
            <section className="mb-8">
                <NewNoteForm />
            </section>

            {/* Notes list */}
            <section>
                {Array.isArray(notes) && notes.length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '17px' }}>
                        {notes.map((n) => (
                            <div key={n._id}>
                                <div className="font-medium">{n.title}</div>
                                {n.body && <div className="text-gray-500">{n.body}</div>}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-gray-500">No notes yet.</div>
                )}
            </section>
        </div>
    );
}
