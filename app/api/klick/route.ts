/* Counts a click on a phone, WhatsApp or email link (sent by components/click-counter.tsx).
   Forwards only the link kind and the page path to the treu-klick Supabase function: no IP, no cookie. */
export const runtime = 'nodejs';

const KINDS = new Set(['phone', 'whatsapp', 'email']);
const DEFAULT_CLICK_ENDPOINT = 'https://srnynewvauzymnljqskj.supabase.co/functions/v1/treu-klick';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as { kind?: unknown; path?: unknown } | null;
  const kind = typeof body?.kind === 'string' ? body.kind : '';
  if (!KINDS.has(kind)) return new Response(null, { status: 204 });
  const path = typeof body?.path === 'string' ? body.path.split(/[?#]/)[0].slice(0, 300) : '';

  const secret = process.env.SUPABASE_INQUIRY_SECRET;
  if (!secret) return new Response(null, { status: 204 });

  try {
    await fetch(process.env.SUPABASE_CLICK_URL ?? DEFAULT_CLICK_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Treu-Inquiry-Secret': secret },
      body: JSON.stringify({ kind, path }),
      signal: AbortSignal.timeout(5_000),
      cache: 'no-store',
    });
  } catch (error) {
    console.error('[klick] not stored:', error);
  }
  return new Response(null, { status: 204 });
}
