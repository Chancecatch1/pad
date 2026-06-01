/* CHANGE NOTE
Why: Let existing tutor learners unlock their saved profile with a lightweight PIN
What changed: Added a Next.js proxy route for learner profile login
Behaviour/Assumptions: The backend verifies the 4-digit PIN and returns a sanitized profile
Rollback: rm src/app/api/tutor/profiles/login/route.ts
- mj
*/

import { backendUnavailableResponse, proxyJsonResponse, resolveBackendBase } from "@/lib/backendProxy";

export async function POST(req: Request) {
  const base = resolveBackendBase();
  try {
    const body = await req.json();
    const response = await fetch(`${base}/tutor/profiles/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return proxyJsonResponse(response);
  } catch (error) {
    return backendUnavailableResponse(error, "POST /tutor/profiles/login");
  }
}
