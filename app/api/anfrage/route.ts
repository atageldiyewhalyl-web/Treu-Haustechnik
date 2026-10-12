/* Receives the public inquiry form, validates it, and forwards it to the dedicated
   Supabase Edge Function. The function stores the lead before Resend attempts delivery,
   so a temporary email problem never loses the customer's inquiry. */
import { EMAIL_PATTERN, PHOTO_LIMITS, isPhone, isReason } from '@/lib/inquiry';
import { SITE } from '@/lib/site';

export const runtime = 'nodejs';
export const maxDuration = 30;

const DEFAULT_INQUIRY_ENDPOINT = 'https://srnynewvauzymnljqskj.supabase.co/functions/v1/treu-anfrage';
const CALL_US = `Bitte rufen Sie uns an: ${SITE.phone}.`;

const fail = (status: number, error: string, fields?: Record<string, string>) =>
  Response.json({ ok: false, error, fields }, { status });

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return fail(400, 'Die Anfrage konnte nicht gelesen werden. Bitte versuchen Sie es erneut.');
  }

  const read = (key: string, max: number) => {
    const value = form.get(key);
    return typeof value === 'string' ? value.trim().slice(0, max) : '';
  };

  // Bots fill the hidden field: answer as if it worked and send/store nothing.
  if (read('website', 200)) return Response.json({ ok: true });

  const reason = read('reason', 40);
  const name = read('name', 120);
  const phone = read('phone', 40);
  const email = read('email', 160).toLowerCase();
  const street = read('street', 160);
  const zip = read('zip', 12);
  const town = read('town', 100);

  const fields: Record<string, string> = {};
  if (!isReason(reason)) fields.reason = 'Bitte wählen Sie aus, worum es geht.';
  if (name.length < 2) fields.name = 'Bitte geben Sie Ihren Vor- und Nachnamen an.';
  if (!phone || !isPhone(phone)) fields.phone = 'Bitte geben Sie eine gültige Telefonnummer an.';
  if (!email || !EMAIL_PATTERN.test(email)) fields.email = 'Bitte geben Sie eine gültige E-Mail-Adresse an.';
  if (!street) fields.street = 'Bitte geben Sie Straße und Hausnummer an.';
  if (!/^\d{5}$/.test(zip)) fields.zip = 'Bitte geben Sie eine gültige fünfstellige PLZ an.';
  if (!town) fields.town = 'Bitte geben Sie Ihren Ort an.';
  if (read('consent', 5) !== 'yes') fields.consent = 'Bitte stimmen Sie der Datenschutzerklärung zu.';

  const photos = form.getAll('photos').filter((entry): entry is File => entry instanceof File && entry.size > 0);
  if (photos.length > PHOTO_LIMITS.maxCount) fields.photos = `Sie können bis zu ${PHOTO_LIMITS.maxCount} Fotos hochladen.`;
  else if (photos.some((photo) => !photo.type.startsWith('image/'))) fields.photos = 'Bitte laden Sie nur Bilddateien hoch.';
  else if (photos.reduce((sum, photo) => sum + photo.size, 0) > PHOTO_LIMITS.maxTotalBytes) fields.photos = 'Die Fotos sind zusammen zu groß.';

  if (Object.keys(fields).length || !isReason(reason)) {
    return fail(422, 'Bitte prüfen Sie Ihre Angaben.', fields);
  }

  // Forward only normalized values and the checked files to the lead workflow.
  const payload = new FormData();
  payload.set('reason', reason);
  payload.set('name', name);
  payload.set('phone', phone);
  payload.set('email', email);
  payload.set('street', street);
  payload.set('zip', zip);
  payload.set('town', town);
  payload.set('description', read('description', 4000));
  payload.set('consent', 'yes');
  payload.set('language', read('language', 10) || 'de');
  payload.set('pageUrl', read('pageUrl', 1000) || request.headers.get('referer')?.slice(0, 1000) || '');
  payload.set('userAgent', request.headers.get('user-agent')?.slice(0, 500) || '');
  photos.forEach((photo) => payload.append('photos', photo, photo.name));

  const endpoint = process.env.SUPABASE_INQUIRY_URL ?? DEFAULT_INQUIRY_ENDPOINT;
  const workflowSecret = process.env.SUPABASE_INQUIRY_SECRET;
  if (!workflowSecret) {
    console.error('[anfrage] SUPABASE_INQUIRY_SECRET fehlt');
    return fail(503, `Der Versand ist gerade nicht möglich. ${CALL_US}`);
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'X-Treu-Inquiry-Secret': workflowSecret },
      body: payload,
      signal: AbortSignal.timeout(25_000),
      cache: 'no-store',
    });
    const result = await response.json().catch(() => null) as {
      ok?: boolean;
      error?: string;
      fields?: Record<string, string>;
    } | null;

    if (!response.ok || !result?.ok) {
      console.error('[anfrage] Supabase workflow failed:', response.status, result?.error ?? 'Unknown error');
      return fail(
        response.status === 422 ? 422 : 502,
        response.status === 422 ? 'Bitte prüfen Sie Ihre Angaben.' : `Die Anfrage konnte nicht gesendet werden. ${CALL_US}`,
        result?.fields,
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error('[anfrage] Supabase workflow unavailable:', error);
    return fail(503, `Der Versand ist gerade nicht möglich. ${CALL_US}`);
  }
}
