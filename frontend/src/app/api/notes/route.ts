export async function GET() {
    const base = process.env.BACKEND_API_BASE ?? "http://localhost:4000";
    const r = await fetch(`${base}/notes`, { cache: "no-store" });
    const data = await r.json();
    return Response.json(data, { status: r.status });
  }
  
  export async function POST(req: Request) {
    const base = process.env.BACKEND_API_BASE ?? "http://localhost:4000";
    const body = await req.json();
    const r = await fetch(`${base}/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await r.json();
    return Response.json(data, { status: r.status });
  }