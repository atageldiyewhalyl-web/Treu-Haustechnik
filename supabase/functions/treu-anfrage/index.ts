import { createClient } from "jsr:@supabase/supabase-js@2.49.8";

const FROM_EMAIL = "Treu Haustechnik <anfrage@forms.xn--nll-hoa.com>";
const TO_EMAIL = "halyl@xn--nll-hoa.com";
const MAX_PHOTOS = 6;
const MAX_PHOTO_BYTES = Math.floor(3.8 * 1024 * 1024);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+\d][\d\s()/.-]*$/;
const REASONS: Record<string, string> = {
  badsanierung: "Badsanierung",
  heizungsaustausch: "Heizungsaustausch",
  waermepumpe: "Wärmepumpe",
  klima: "Klima",
  service: "Service und Reparatur",
  sonstige: "Sonstige",
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type ValidLead = {
  reason: string;
  name: string;
  phone: string;
  email: string;
  street: string;
  zip: string;
  town: string;
  description: string;
  language: string;
  pageUrl: string;
  userAgent: string;
  photos: File[];
};

function clean(value: FormDataEntryValue | null, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeFilename(name: string, index: number) {
  return name.replace(/[^\w.\- ]+/g, "_").slice(-80) || `foto-${index + 1}.jpg`;
}

function toBase64(buffer: ArrayBuffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunkSize = 0x8000;
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
  }
  return btoa(binary);
}

function validate(form: FormData): { lead?: ValidLead; fields?: Record<string, string> } {
  const reason = clean(form.get("reason"), 40);
  const name = clean(form.get("name"), 120);
  const phone = clean(form.get("phone"), 40);
  const email = clean(form.get("email"), 160).toLowerCase();
  const street = clean(form.get("street"), 160);
  const zip = clean(form.get("zip"), 12);
  const town = clean(form.get("town"), 100);
  const fields: Record<string, string> = {};

  if (!REASONS[reason]) fields.reason = "Bitte wählen Sie aus, worum es geht.";
  if (name.length < 2) fields.name = "Bitte geben Sie Ihren Vor- und Nachnamen an.";
  if (!PHONE_PATTERN.test(phone) || phone.replace(/\D/g, "").length < 6) fields.phone = "Bitte geben Sie eine gültige Telefonnummer an.";
  if (!EMAIL_PATTERN.test(email)) fields.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
  if (!street) fields.street = "Bitte geben Sie Straße und Hausnummer an.";
  if (!/^\d{5}$/.test(zip)) fields.zip = "Bitte geben Sie eine gültige fünfstellige PLZ an.";
  if (!town) fields.town = "Bitte geben Sie Ihren Ort an.";
  if (clean(form.get("consent"), 5) !== "yes") fields.consent = "Bitte stimmen Sie der Datenschutzerklärung zu.";

  const photos = form.getAll("photos").filter((entry): entry is File => entry instanceof File && entry.size > 0);
  if (photos.length > MAX_PHOTOS) fields.photos = `Sie können bis zu ${MAX_PHOTOS} Fotos hochladen.`;
  else if (photos.some((photo) => !photo.type.startsWith("image/"))) fields.photos = "Bitte laden Sie nur Bilddateien hoch.";
  else if (photos.reduce((sum, photo) => sum + photo.size, 0) > MAX_PHOTO_BYTES) fields.photos = "Die Fotos sind zusammen zu groß.";

  if (Object.keys(fields).length) return { fields };

  return {
    lead: {
      reason,
      name,
      phone,
      email,
      street,
      zip,
      town,
      description: clean(form.get("description"), 4000),
      language: clean(form.get("language"), 10) || "de",
      pageUrl: clean(form.get("pageUrl"), 1000),
      userAgent: clean(form.get("userAgent"), 500),
      photos,
    },
  };
}

function emailRows(lead: ValidLead): [string, string][] {
  return [
    ["Grund der Anfrage", REASONS[lead.reason]],
    ["Name", lead.name],
    ["Telefon", lead.phone],
    ["E-Mail", lead.email],
    ["Anschrift", `${lead.street}, ${lead.zip} ${lead.town}`],
    ["Beschreibung", lead.description || "–"],
    ["Bilder", lead.photos.length ? `${lead.photos.length} im Anhang` : "keine"],
    ["Sprache", lead.language],
    ["Seite", lead.pageUrl || "–"],
  ];
}

function renderHtml(rows: [string, string][]) {
  return `
    <div style="font-family:Arial,sans-serif;color:#1f1a16;line-height:1.5;max-width:760px">
      <div style="background:#ff7417;color:#1f1a16;padding:22px 26px;border-radius:18px 18px 0 0">
        <p style="font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;margin:0 0 6px">Treu Haustechnik</p>
        <h1 style="font-size:24px;margin:0">Neue Website-Anfrage</h1>
      </div>
      <table cellpadding="10" style="border-collapse:collapse;width:100%;font:15px/1.5 Arial,sans-serif">
        ${rows.map(([label, value]) => `
          <tr>
            <th align="left" valign="top" style="border:1px solid #e9e5df;background:#f8f6f2;white-space:nowrap">${escapeHtml(label)}</th>
            <td style="border:1px solid #e9e5df;white-space:pre-wrap">${escapeHtml(value)}</td>
          </tr>`).join("")}
      </table>
    </div>`;
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return Response.json({ ok: false, error: "Method not allowed" }, { status: 405, headers: corsHeaders });

  let leadId = "";
  try {
    const inquirySecret = Deno.env.get("TREU_INQUIRY_SECRET");
    if (!inquirySecret || request.headers.get("x-treu-inquiry-secret") !== inquirySecret) {
      return Response.json({ ok: false, error: "Unauthorized" }, { status: 401, headers: corsHeaders });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!supabaseUrl || !serviceRoleKey || !resendApiKey) throw new Error("Missing required server configuration.");

    const form = await request.formData();
    const result = validate(form);
    if (!result.lead) {
      return Response.json({ ok: false, error: "Validation failed", fields: result.fields }, { status: 422, headers: corsHeaders });
    }
    const lead = result.lead;
    const supabase = createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false } });

    const { data, error } = await supabase
      .from("treu_anfragen")
      .insert({
        reason: REASONS[lead.reason],
        name: lead.name,
        phone: lead.phone,
        email: lead.email,
        street: lead.street,
        zip: lead.zip,
        town: lead.town,
        description: lead.description || null,
        photo_count: lead.photos.length,
        language: lead.language,
        page_url: lead.pageUrl || null,
        user_agent: lead.userAgent || null,
      })
      .select("id")
      .single();

    if (error) throw error;
    leadId = data.id as string;

    const rows = emailRows(lead);
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${resendApiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        reply_to: lead.email,
        subject: `Neue Anfrage: ${REASONS[lead.reason]} – ${lead.name}`,
        text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
        html: renderHtml(rows),
        attachments: await Promise.all(lead.photos.map(async (photo, index) => ({
          filename: safeFilename(photo.name, index),
          content: toBase64(await photo.arrayBuffer()),
        }))),
      }),
    });

    const emailResult = await emailResponse.json().catch(() => ({})) as { id?: string; message?: string };
    if (!emailResponse.ok) {
      const emailError = emailResult.message || `Resend returned ${emailResponse.status}`;
      await supabase.from("treu_anfragen").update({ status: "email_failed", email_error: emailError.slice(0, 1000) }).eq("id", leadId);
      return Response.json({ ok: false, error: "Email delivery failed" }, { status: 502, headers: corsHeaders });
    }

    await supabase.from("treu_anfragen").update({
      status: "email_sent",
      email_sent_at: new Date().toISOString(),
      resend_email_id: emailResult.id || null,
      email_error: null,
    }).eq("id", leadId);

    return Response.json({ ok: true, id: leadId }, { headers: corsHeaders });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("[treu-anfrage]", message, leadId ? `lead=${leadId}` : "");
    return Response.json({ ok: false, error: "Inquiry processing failed" }, { status: 500, headers: corsHeaders });
  }
});
