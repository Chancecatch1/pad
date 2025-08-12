export async function POST(req: Request, ctx: unknown) {
  const params =
    ctx && typeof ctx === "object" && "params" in ctx
      ? (ctx as { params?: { id?: string } }).params
      : undefined;

  const id = params?.id;
  if (!id) return Response.json({ error: "missing_id" }, { status: 400 });

  const base = process.env.BACKEND_API_BASE ?? "http://localhost:4000";
  const body = await req.json();

  const r = await fetch(`${base}/chat/sessions/${id}/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const text = await r.text();
  let data: unknown;
  try { data = JSON.parse(text); } catch { data = { raw: text } as const; }

  return Response.json(data, { status: r.status });
}