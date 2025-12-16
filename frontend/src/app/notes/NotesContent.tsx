/* CHANGE NOTE
Why: Client component for Notes page with translations
What changed: Extracted client side content from server page
Behaviour/Assumptions: Receives notes as prop, handles translations
Rollback: Delete this file, revert notes/page.tsx
— mj
*/

"use client";

import NewNoteForm from "@/components/NewNoteForm";
import Card from "@/components/Card";
import { useLanguage } from "@/context/LanguageContext";

type Note = { _id: string; title: string; body?: string; createdAt?: string };

type Props = {
    notes: Note[];
};

export default function NotesContent({ notes }: Props) {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen px-6 pt-24 pb-16">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-base font-bold text-gray-900 mb-6">
                    {t.guestbookTitle}
                </h1>

                <div className="max-w-2xl space-y-4">
                    <Card className="p-4">
                        <h2 className="text-base font-bold text-gray-900 mb-4">{t.leaveMessage}</h2>
                        <NewNoteForm />
                    </Card>

                    <section>
                        <h2 className="text-base font-bold text-gray-900 mb-4">
                            {t.allMessages} ({notes.length})
                        </h2>
                        {Array.isArray(notes) && notes.length > 0 ? (
                            <div className="space-y-3">
                                {notes.map((n) => (
                                    <Card key={n._id} className="p-4">
                                        <div className="text-base font-bold text-gray-900">{n.title}</div>
                                        {n.body && <div className="text-base text-gray-600 mt-1">{n.body}</div>}
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="text-base text-gray-500">
                                {t.noMessages}
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
}
