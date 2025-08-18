import { headers } from "next/headers";
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";

export default async function HealthPage() {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? (process.env.NODE_ENV === "development" ? "http" : "https");
  const baseUrl = `${proto}://${host}`;

  const res = await fetch(`${baseUrl}/api/health`, { cache: "no-store" });
  const data = await res.json();

  return (
    <div className="min-h-screen p-6">
      <NavBar title="Backend Status" />
      <main className="max-w-xl mx-auto space-y-6 mt-20 w-full px-4 items-center justify-items-center">
        <Card className="p-4 w-full">
          <pre className="w-full max-w-full bg-black/5 dark:bg-white/10 p-3 rounded overflow-x-auto whitespace-pre-wrap break-words text-xs sm:text-sm">
            {JSON.stringify(data, null, 2)}
          </pre>
        </Card>
      </main>
    </div>
  );
}