import { headers } from "next/headers";
import NewNoteForm from "@/components/NewNoteForm";
import VoiceTutor from "@/components/VoiceTutor";
type Note = { _id: string; title: string; body?: string };

export default async function Page() {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? (process.env.NODE_ENV === "development" ? "http" : "https");
  const baseUrl = `${proto}://${host}`;

  const res = await fetch(`${baseUrl}/api/health`, { cache: "no-store" });
  const data = await res.json();

  const notesRes = await fetch(`${baseUrl}/api/notes`, { cache: "no-store" });
  const notes = (await notesRes.json()) as Note[];

  return (
    <div className="min-h-screen p-6">
      <header className="max-w-xl mx-auto mb-6">
        <h1 className="text-2xl font-bold">PAD English Tutor</h1>
        <p className="text-sm opacity-70">Practice speaking with AI tutor</p>
      </header>

      <main className="max-w-xl mx-auto space-y-8">
        <section>
          <VoiceTutor />
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Add a note</h2>
          <NewNoteForm />
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Notes</h2>
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

        <section>
          <h2 className="text-lg font-semibold">Backend Health</h2>
          <pre className="bg-black/5 dark:bg-white/10 p-3 rounded">
            {JSON.stringify(data, null, 2)}
          </pre>
        </section>
      </main>
    </div>
  );
}