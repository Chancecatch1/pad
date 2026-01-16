/* CHANGE NOTE
Why: Add DELETE API route for removing notes
What changed: New dynamic route for DELETE /api/notes/[id]
Behaviour/Assumptions: Proxies delete request to backend
Rollback: Delete this folder
— mj
*/

import { NextRequest } from "next/server";

export async function DELETE(
    _req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    // Use localhost in development, production URL otherwise
    const isDev = process.env.NODE_ENV === "development";
    const base = isDev ? "http://localhost:4000" : (process.env.BACKEND_API_BASE ?? "http://localhost:4000");
    const { id } = await context.params;

    const r = await fetch(`${base}/notes/${id}`, {
        method: "DELETE",
    });
    const data = await r.json();
    return Response.json(data, { status: r.status });
}

