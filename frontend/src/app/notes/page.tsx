/* CHANGE NOTE
Why: Update Notes/Guestbook page with i18n translations (English default)
What changed: Added translations using client wrapper component
Behaviour/Assumptions: Server component for data fetch, client wrapper for translations
Rollback: Revert to previous version
— mj
*/

import { headers } from "next/headers";
import NewNoteForm from "@/components/NewNoteForm";
import Card from "@/components/Card";
import NotesContent from "./NotesContent";

type Note = { _id: string; title: string; body?: string; createdAt?: string };

export const metadata = {
  title: 'Notes | PAD',
  description: 'Leave a message for the PAD team',
};

export default async function NotesPage() {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? (process.env.NODE_ENV === "development" ? "http" : "https");
  const baseUrl = `${proto}://${host}`;

  const notesRes = await fetch(`${baseUrl}/api/notes`, { cache: "no-store" });
  const notes = (await notesRes.json()) as Note[];

  return <NotesContent notes={notes} />;
}