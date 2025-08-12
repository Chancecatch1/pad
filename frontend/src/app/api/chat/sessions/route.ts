export async function GET() {
  const base = process.env.BACKEND_API_BASE ?? "http://localhost:4000";
  const r = await fetch(`${base}/chat/sessions`, { cache: "no-store" });
  const text = await r.text();
  let data: unknown;
  try { data = JSON.parse(text); } catch { data = { raw: text } as const; }
  return Response.json(data, { status: r.status });
}

export async function POST(req: Request) {
  const base = process.env.BACKEND_API_BASE ?? "http://localhost:4000";
  const body = await req.json();
  const r = await fetch(`${base}/chat/sessions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const text = await r.text();
  let data: unknown;
  try { data = JSON.parse(text); } catch { data = { raw: text } as const; }
  return Response.json(data, { status: r.status });
}