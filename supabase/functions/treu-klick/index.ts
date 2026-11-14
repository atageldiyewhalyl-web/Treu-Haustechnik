// Stores one click on a phone, WhatsApp or email link of treu-haustechnik.de.
// Called only by the site's /api/klick route, which sends the same secret as the inquiry workflow.
import { createClient } from "jsr:@supabase/supabase-js@2.49.8";

const KINDS = new Set(["phone", "whatsapp", "email"]);

Deno.serve(async (request) => {
  if (request.method !== "POST") return new Response("Method not allowed", { status: 405 });

  const secret = Deno.env.get("TREU_INQUIRY_SECRET");
  if (!secret || request.headers.get("x-treu-inquiry-secret") !== secret) {
    return Response.json({ ok: false }, { status: 401 });
  }

  const body = await request.json().catch(() => null) as { kind?: unknown; path?: unknown } | null;
  const kind = typeof body?.kind === "string" ? body.kind : "";
  if (!KINDS.has(kind)) return Response.json({ ok: false }, { status: 422 });
  const path = typeof body?.path === "string" ? body.path.split(/[?#]/)[0].slice(0, 300) : null;

  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
    auth: { persistSession: false },
  });
  const { error } = await supabase.from("treu_klicks").insert({ kind, path });
  if (error) {
    console.error("[treu-klick] insert failed:", error.message);
    return Response.json({ ok: false }, { status: 500 });
  }
  return Response.json({ ok: true });
});
