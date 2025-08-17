import { headers } from "next/headers";
import NewNoteForm from "@/components/NewNoteForm";
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";

type Note = { _id: string; title: string; body?: string };

export default async function NotesPage() {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? (process.env.NODE_ENV === "development" ? "http" : "https");
  const baseUrl = `${proto}://${host}`;

  const notesRes = await fetch(`${baseUrl}/api/notes`, { cache: "no-store" });
  const notes = (await notesRes.json()) as Note[];

  return (
    <div className="min-h-screen p-6">
      <NavBar title="Some Notes" />
      {/* Spacing between Nav and contents: adjust mt-* on <main> to control the gap */}
      <main className="max-w-xl mx-auto w-full px-4 mt-20 space-y-6 items-center justify-items-center">
        <Card className="p-4 w-full">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold">Add a note</h2>
            <NewNoteForm />
          </section>
        </Card>

        <Card className="p-4 w-full">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold">All notes</h2>
            {Array.isArray(notes) && notes.length > 0 ? (
              notes.map((n) => (
                <div key={n._id} className="border p-2 rounded">
                  <div className="font-medium">{n.title}</div>
                  {n.body && <div className="text-sm opacity-80">{n.body}</div>}
                </div>
              ))
            ) : (
              <div className="opacity-70">No notes yet</div>
            )}
          </section>
        </Card>
      </main>
    </div>
  );
}