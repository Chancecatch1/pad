export async function POST(req: Request, { params }: { params: { id: string } }) {
    const base = process.env.BACKEND_API_BASE ?? "http://localhost:4000";
    const body = await req.json();
    const r = await fetch(`${base}/chat/sessions/${params.id}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const d = await r.json();
    return Response.json(d, { status: r.status });
  }