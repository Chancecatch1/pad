/* CHANGE NOTE
Why: Keep backend proxy routes working in deployed environments that configure BACKEND_API_BASE
What changed: Added shared backend-base resolution and JSON-safe proxy helpers
Behaviour/Assumptions: BACKEND_API_BASE points to the PAD Express backend
Rollback: rm src/lib/backendProxy.ts
- mj
*/

export function resolveBackendBase() {
  const base = process.env.BACKEND_API_BASE || "http://localhost:4000";
  return base.replace(/\/+$/, "");
}

export async function proxyJsonResponse(response: Response) {
  const text = await response.text();
  let data: unknown;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { raw: text };
  }
  return Response.json(data, { status: response.status });
}

export function backendUnavailableResponse(error: unknown, target: string) {
  console.error(`[backend-proxy] ${target} failed:`, error);
  return Response.json(
    {
      error: "backend_unavailable",
      message: "The PAD backend is not reachable. Check the backend API base URL and service status.",
      target,
      details: error instanceof Error ? error.message : String(error),
    },
    { status: 502 }
  );
}
