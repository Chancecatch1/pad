import { backendUnavailableResponse, proxyJsonResponse, resolveBackendBase } from "@/lib/backendProxy";

export async function GET() {
  const base = resolveBackendBase();
  try {
    const response = await fetch(`${base}/chat/sessions`, { cache: "no-store" });
    return proxyJsonResponse(response);
  } catch (error) {
    return backendUnavailableResponse(error, "GET /chat/sessions");
  }
}

export async function POST(req: Request) {
  const base = resolveBackendBase();
  try {
    const body = await req.json();
    const response = await fetch(`${base}/chat/sessions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return proxyJsonResponse(response);
  } catch (error) {
    return backendUnavailableResponse(error, "POST /chat/sessions");
  }
}
