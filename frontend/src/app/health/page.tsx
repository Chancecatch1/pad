import { headers } from "next/headers";
import BackButton from "@/components/BackButton";

export default async function HealthPage() {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? (process.env.NODE_ENV === "development" ? "http" : "https");
  const baseUrl = `${proto}://${host}`;

  const res = await fetch(`${baseUrl}/api/health`, { cache: "no-store" });
  const data = await res.json();

  return (
    <div className="min-h-screen p-6">
      <main className="max-w-xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <BackButton />
        </div>
        <pre className="bg-black/5 dark:bg-white/10 p-3 rounded">
          {JSON.stringify(data, null, 2)}
        </pre>
      </main>
    </div>
  );
}