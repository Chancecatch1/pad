export async function GET() {
    const base = process.env.BACKEND_API_BASE ?? "http://localhost:4000";
    const res = await fetch(`${base}/health`, { cache: "no-store" });
    const data = await res.json();
    return Response.json(data, { status: res.status });
  }