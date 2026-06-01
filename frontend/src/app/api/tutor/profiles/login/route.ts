/* CHANGE NOTE
Why: Let existing tutor learners unlock their saved profile with a lightweight PIN
What changed: Added a Next.js proxy route for learner profile login
Behaviour/Assumptions: The backend verifies the 4-digit PIN and returns a sanitized profile
Rollback: rm src/app/api/tutor/profiles/login/route.ts
- mj
*/

export async function POST(req: Request) {
  const base = process.env.TUTOR_BACKEND_API_BASE ?? "http://localhost:4000";
  const body = await req.json();
  const response = await fetch(`${base}/tutor/profiles/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const text = await response.text();
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    data = { raw: text };
  }
  return Response.json(data, { status: response.status });
}
