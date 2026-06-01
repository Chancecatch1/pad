import { backendUnavailableResponse, proxyJsonResponse, resolveBackendBase } from "@/lib/backendProxy";

export async function POST(req: Request, ctx: { params: Promise<{ id?: string }> }) {
  const { id } = await ctx.params;
  if (!id) return Response.json({ error: "missing_id" }, { status: 400 });

  const base = resolveBackendBase();
  try {
    const body = await req.json();
    const response = await fetch(`${base}/chat/sessions/${id}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return proxyJsonResponse(response);
  } catch (error) {
    return backendUnavailableResponse(error, `POST /chat/sessions/${id}/messages`);
  }
}
