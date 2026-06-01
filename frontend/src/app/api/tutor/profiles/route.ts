/* CHANGE NOTE
Why: Let the tutor frontend create and list learner profiles
What changed: Added Next.js proxy routes for the backend MongoDB learner-profile API
Behaviour/Assumptions: BACKEND_API_BASE points to the PAD Express server
Rollback: rm src/app/api/tutor/profiles/route.ts
- mj
*/

import { backendUnavailableResponse, proxyJsonResponse, resolveBackendBase } from "@/lib/backendProxy";

export async function GET() {
  const base = resolveBackendBase();
  try {
    const response = await fetch(`${base}/tutor/profiles`, { cache: "no-store" });
    return proxyJsonResponse(response);
  } catch (error) {
    return backendUnavailableResponse(error, "GET /tutor/profiles");
  }
}

export async function POST(req: Request) {
  const base = resolveBackendBase();
  try {
    const body = await req.json();
    const response = await fetch(`${base}/tutor/profiles`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return proxyJsonResponse(response);
  } catch (error) {
    return backendUnavailableResponse(error, "POST /tutor/profiles");
  }
}
