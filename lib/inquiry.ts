/* The inquiry form's categories and rules, shared by the form (components/inquiry-form.tsx)
   and the route that emails it (app/api/anfrage/route.ts). Categories are the client's own list. */
const IMG = '/assets/img';

/** `label` is the German name the owner reads in the email; the form shows the wording from lib/i18n.
    `image` fills the choice's tile: a photo of the work it stands for, shared with the service cards
    (sources in public/assets/img/SOURCES.md). `focus` is the part of it to keep in view (CSS object-position). */
export const REASONS = [
  { key: 'badsanierung', label: 'Badsanierung', image: `${IMG}/svc-bad.jpg`, focus: '50% 78%' },
  { key: 'heizungsaustausch', label: 'Heizungsaustausch', image: `${IMG}/svc-heizung.jpg`, focus: '50% 62%' },
  { key: 'waermepumpe', label: 'Wärmepumpe', image: `${IMG}/svc-waermepumpe-indoor.png`, focus: '68% 50%' },
  { key: 'klima', label: 'Klima', image: `${IMG}/hero-klima.jpg`, focus: '70% 20%' },
  { key: 'service', label: 'Service und Reparatur', image: `${IMG}/svc-wartung.jpg`, focus: '50% 40%' },
  { key: 'sonstige', label: 'Sonstige', image: `${IMG}/footer.jpg`, focus: '50% 50%' },
] as const satisfies readonly { key: string; label: string; image: string; focus: string }[];

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
