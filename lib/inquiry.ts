/* The inquiry form's categories and rules, shared by the form (components/inquiry-form.tsx)
   and the route that emails it (app/api/anfrage/route.ts). Categories are the client's own list. */
const IMG = '/assets/img/form';

/** `label` is the German name the owner reads in the email; the form shows the wording from lib/i18n.
    `image` is a photo of the thing the choice is about (400 × 300, sources in public/assets/img/SOURCES.md). */
export const REASONS = [
  { key: 'badsanierung', label: 'Badsanierung', image: `${IMG}/bad.jpg` },
  { key: 'heizungsaustausch', label: 'Heizungsaustausch', image: `${IMG}/heizung.jpg` },
  { key: 'waermepumpe', label: 'Wärmepumpe', image: `${IMG}/waermepumpe.jpg` },
  { key: 'klima', label: 'Klima', image: `${IMG}/klima.jpg` },
  { key: 'service', label: 'Service und Reparatur', image: `${IMG}/service.jpg` },
  { key: 'sonstige', label: 'Sonstige', image: `${IMG}/sonstige.jpg` },
] as const satisfies readonly { key: string; label: string; image: string }[];

export type ReasonKey = (typeof REASONS)[number]['key'];

export const isReason = (value: unknown): value is ReasonKey => REASONS.some(({ key }) => key === value);
export const reasonLabel = (key: ReasonKey) => REASONS.find((reason) => reason.key === key)!.label;

/* Photos are optional. The form shrinks them in the browser before sending, so the whole
   request stays under the 4.5 MB body limit of serverless hosts. */
export const PHOTO_LIMITS = {
  maxCount: 6,
  maxEdge: 1600,          // px, longest side after shrinking
  maxTotalBytes: 3.8 * 1024 * 1024,
} as const;

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** A phone number: digits with the usual separators, at least 6 digits. */
export const isPhone = (value: string) => /^[+\d][\d\s()/.-]*$/.test(value) && value.replace(/\D/g, '').length >= 6;
