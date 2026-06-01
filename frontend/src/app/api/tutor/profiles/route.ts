/* CHANGE NOTE
Why: Let the tutor frontend create and list learner profiles
What changed: Added Next.js proxy routes for the backend MongoDB learner-profile API
Behaviour/Assumptions: BACKEND_API_BASE points to the PAD Express server
Rollback: rm src/app/api/tutor/profiles/route.ts
- mj
*/

export async function GET() {
  const base = process.env.TUTOR_BACKEND_API_BASE ?? "http://localhost:4000";
  const response = await fetch(`${base}/tutor/profiles`, { cache: "no-store" });
  return proxyJson(response);
}

export async function POST(req: Request) {
  const base = process.env.TUTOR_BACKEND_API_BASE ?? "http://localhost:4000";
  const body = await req.json();
  const response = await fetch(`${base}/tutor/profiles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return proxyJson(response);
}

async function proxyJson(response: Response) {
  const text = await response.text();
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    data = { raw: text };
  }
  return Response.json(data, { status: response.status });
}
