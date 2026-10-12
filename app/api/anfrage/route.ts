/* Receives the inquiry form and emails it to the owner through Resend, photos attached.
   Nothing is written to a database. Needs RESEND_API_KEY, INQUIRY_TO and INQUIRY_FROM (.env.example). */
import { Resend } from 'resend';
import { EMAIL_PATTERN, PHOTO_LIMITS, isPhone, isReason, reasonLabel } from '@/lib/inquiry';
import { SITE } from '@/lib/site';

export const runtime = 'nodejs';

const CALL_US = `Bitte rufen Sie uns an: ${SITE.phone}.`;

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!);
const fail = (status: number, error: string, fields?: Record<string, string>) => Response.json({ ok: false, error, fields }, { status });

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

  // Bots fill the hidden field: answer as if it worked and send nothing
  if (read('website', 200)) return Response.json({ ok: true });

  const reason = read('reason', 40);
  const name = read('name', 120);
  const phone = read('phone', 40);
  const email = read('email', 160);
  const street = read('street', 160);
  const zip = read('zip', 12);
  const town = read('town', 100);
  const address = `${street}, ${zip} ${town}`;
  const description = read('description', 4000);

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

  if (Object.keys(fields).length || !isReason(reason)) return fail(422, 'Bitte prüfen Sie Ihre Angaben.', fields);

  const rows: [string, string][] = [
    ['Grund der Anfrage', reasonLabel(reason)],
    ['Name', name],
    ['Telefon', phone],
    ['E-Mail', email],
    ['Anschrift', address],
    ['Beschreibung', description || '–'],
    ['Bilder', photos.length ? `${photos.length} im Anhang` : 'keine'],
  ];

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Local development without a key: show what would have been sent, so the form can still be tried out
    if (process.env.NODE_ENV !== 'production') {
      console.info('[anfrage] RESEND_API_KEY fehlt, nichts versendet:', Object.fromEntries(rows), photos.map((photo) => `${photo.name} (${Math.round(photo.size / 1024)} kB)`));
      return Response.json({ ok: true, preview: true });
    }
    console.error('[anfrage] RESEND_API_KEY fehlt: Anfrage konnte nicht versendet werden');
    return fail(503, `Der Versand ist gerade nicht möglich. ${CALL_US}`);
  }

  const { error } = await new Resend(apiKey).emails.send({
    from: process.env.INQUIRY_FROM ?? `${SITE.name} Website <anfrage@treu-haustechnik.de>`,
    to: process.env.INQUIRY_TO ?? SITE.email,
    replyTo: email,
    subject: `Anfrage: ${reasonLabel(reason)} – ${name}`,
    text: rows.map(([label, value]) => `${label}: ${value}`).join('\n'),
    html: `<table cellpadding="8" style="border-collapse:collapse;font:15px/1.5 Arial,sans-serif;color:#1f1a16">${rows
      .map(([label, value]) => `<tr><th align="left" valign="top" style="border-bottom:1px solid #e9e5df;white-space:nowrap">${label}</th><td style="border-bottom:1px solid #e9e5df;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`)
      .join('')}</table>`,
    attachments: await Promise.all(photos.map(async (photo, i) => ({
      filename: photo.name.replace(/[^\w.\- ]+/g, '_').slice(-80) || `foto-${i + 1}.jpg`,
      content: Buffer.from(await photo.arrayBuffer()),
    }))),
  });

  if (error) {
    console.error('[anfrage] Resend:', error);
    return fail(502, `Die Anfrage konnte nicht gesendet werden. ${CALL_US}`);
  }
  return Response.json({ ok: true });
}
