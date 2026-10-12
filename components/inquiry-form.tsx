'use client';
/* The inquiry form, in three steps: what it is about, the details with optional photos, and how to
   reach the customer. Nothing is stored: app/api/anfrage/route.ts emails it to the owner.
   A service page starts it with its own category already chosen (`preselect`). */
import Image from 'next/image';
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type InputHTMLAttributes, type ReactNode } from 'react';
import { Mark } from '@/components/brand';
import { useCopy } from '@/components/i18n';
import { Icon } from '@/components/icons';
import { fill } from '@/lib/i18n';
import { EMAIL_PATTERN, PHOTO_LIMITS, REASONS, isPhone, type ReasonKey } from '@/lib/inquiry';
import { SITE } from '@/lib/site';
import { cx } from '@/lib/ui';

const FIELDS = { name: '', phone: '', email: '', street: '', zip: '', town: '' };
type Field = keyof typeof FIELDS;
type ErrorKey = Field | 'reason' | 'consent' | 'photos' | 'form';
type Errors = Partial<Record<ErrorKey, string>>;

interface Photo { id: string; file: File; url: string }

/** A JPEG no larger than PHOTO_LIMITS.maxEdge. Falls back to the original if the browser cannot decode it. */
async function shrink(file: File): Promise<File> {
  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, PHOTO_LIMITS.maxEdge / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    canvas.getContext('2d')!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.8));
    return blob ? new File([blob], `${file.name.replace(/\.[^.]+$/, '')}.jpg`, { type: 'image/jpeg' }) : file;
  } catch {
    return file;
  }
}

export function InquiryForm({ preselect }: { preselect?: ReasonKey }) {
  const { form: t } = useCopy();
  const [step, setStep] = useState(0);
  const [reason, setReason] = useState<ReasonKey | ''>(preselect ?? '');
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [fields, setFields] = useState(FIELDS);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'busy' | 'sending' | 'done'>('idle');
  const [preview, setPreview] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const moved = useRef(false);

  // Moving between steps puts the keyboard and screen readers at the new step's heading,
  // and brings the top of the form back into view if the last step left it above the header
  useEffect(() => {
    if (!moved.current || status === 'busy' || status === 'sending') return;
    heading.current?.focus({ preventScroll: true });
    const form = root.current;
    if (form && form.getBoundingClientRect().top < 96) form.scrollIntoView({ block: 'start' });
  }, [step, status]);

  // Release the preview images when the form goes away
  const live = useRef<Photo[]>([]);
  useEffect(() => { live.current = photos; }, [photos]);
  useEffect(() => {
    const shown = live;
    return () => shown.current.forEach(({ url }) => URL.revokeObjectURL(url));
  }, []);

  const go = (next: number) => { moved.current = true; setErrors({}); setStep(next); };
  const set = (field: Field) => (event: ChangeEvent<HTMLInputElement>) => {
    setFields((prev) => ({ ...prev, [field]: event.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  async function addPhotos(event: ChangeEvent<HTMLInputElement>) {
    const picked = Array.from(event.target.files ?? []);
    event.target.value = '';
    if (!picked.length) return;
    setStatus('busy');
    const room = PHOTO_LIMITS.maxCount - photos.length;
    let total = photos.reduce((sum, { file }) => sum + file.size, 0);
    const added: Photo[] = [];
    let problem = picked.length > room ? fill(t.errors.tooMany, { max: PHOTO_LIMITS.maxCount }) : '';
    for (const original of picked.slice(0, room)) {
      if (!original.type.startsWith('image/')) { problem = t.errors.notImage; continue; }
      const file = await shrink(original);
      if (total + file.size > PHOTO_LIMITS.maxTotalBytes) { problem = t.errors.tooLarge; break; }
      total += file.size;
      added.push({ id: crypto.randomUUID(), file, url: URL.createObjectURL(file) });
    }
    setPhotos((prev) => [...prev, ...added]);
    setErrors((prev) => ({ ...prev, photos: problem || undefined }));
    setStatus('idle');
  }

  function removePhoto(id: string) {
    setPhotos((prev) => prev.filter((photo) => {
      if (photo.id === id) URL.revokeObjectURL(photo.url);
      return photo.id !== id;
    }));
    setErrors((prev) => ({ ...prev, photos: undefined }));
  }

  function validateContact(): Errors {
    const found: Errors = {};
    const phone = fields.phone.trim();
    const email = fields.email.trim();
    const street = fields.street.trim();
    const zip = fields.zip.trim();
    const town = fields.town.trim();
    if (fields.name.trim().length < 2) found.name = t.errors.name;
    if (!phone || !isPhone(phone)) found.phone = t.errors.phone;
    if (!email || !EMAIL_PATTERN.test(email)) found.email = t.errors.email;
    if (!street) found.street = t.errors.street;
    if (!/^\d{5}$/.test(zip)) found.zip = t.errors.zip;
    if (!town) found.town = t.errors.town;
    if (!consent) found.consent = t.errors.consent;
    return found;
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step === 0) {
      if (!reason) return setErrors({ reason: t.errors.reason });
      return go(1);
    }
    if (step === 1) return go(2);

    const found = validateContact();
    if (Object.keys(found).length) return setErrors(found);

    setStatus('sending');
    setErrors({});
    const body = new FormData(event.currentTarget);   // carries the hidden spam trap
    body.set('reason', reason);
    body.set('description', description);
    for (const [key, value] of Object.entries(fields)) body.set(key, value);
    body.set('consent', 'yes');
    body.delete('photos');
    photos.forEach(({ file }) => body.append('photos', file));

    try {
      const response = await fetch('/api/anfrage', { method: 'POST', body });
      const result = await response.json().catch(() => null) as { ok?: boolean; fields?: Errors; preview?: boolean } | null;
      if (!response.ok || !result?.ok) {
        // The route answers in German; show this language's wording for the fields it names
        const known = t.errors as Record<string, string>;
        const named = Object.fromEntries(Object.entries(result?.fields ?? {}).map(([key, message]) => [key, known[key] ?? message]));
        setErrors({ ...named, form: t.errors.failed });
        return setStatus('idle');
      }
      setPreview(!!result.preview);
      moved.current = true;
      setStatus('done');
    } catch {
      setErrors({ form: t.errors.offline });
      setStatus('idle');
    }
  }

  function reset() {
    photos.forEach(({ url }) => URL.revokeObjectURL(url));
    setPhotos([]);
    setDescription('');
    setFields(FIELDS);
    setConsent(false);
    setReason(preselect ?? '');
    setStatus('idle');
    go(0);
  }

  // The form's letterhead: who the inquiry goes to, and how far along it is
  const letterhead = (
    <div className="iform__head">
      <Mark />
      <b>{fill(t.title, { name: SITE.name })}</b>
      {status !== 'done' && <span>{fill(t.count, { n: step + 1, total: t.steps.length })}</span>}
    </div>
  );

  if (status === 'done') {
    const how = t.done.byBoth;
    return (
      <div ref={root} className="iform" role="status">
        {letterhead}
        <div className="iform__body iform__body--done">
          <span className="iform__done-icon"><Icon name="check" /></span>
          <h3 ref={heading} tabIndex={-1}>{fill(t.done.title, { name: fields.name.trim().split(/\s+/)[0] })}</h3>
          <p>{fill(t.done.text, { how })}</p>
          <p className="iform__hint">{t.done.urgent} <a href={SITE.phoneHref}>{SITE.phone}</a>.</p>
          {preview && <p className="iform__preview">{t.done.preview}</p>}
          <button className="btn btn--dark" type="button" onClick={reset}><span className="btn__icon"><Icon name="send" /></span><span>{t.done.again}</span></button>
        </div>
      </div>
    );
  }

  const sending = status === 'sending';
  return (
    <div ref={root} className="iform">
      {letterhead}
      <form className="iform__body" onSubmit={submit} noValidate>
        <ol className="iform__steps" aria-label={t.progress}>
          {t.steps.map((label, i) => (
            <li key={label} className={cx(i === step && 'is-current', i < step && 'is-done')} aria-current={i === step ? 'step' : undefined}>
              <span className="iform__dot">{i < step ? <Icon name="check" /> : i + 1}</span>
              <span>{label}</span>
            </li>
          ))}
        </ol>

        {/* Spam trap: people never see or fill this field */}
        <div className="iform__trap" aria-hidden="true">
          <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
        </div>

        {step === 0 && (
          <fieldset className="iform__panel">
            <legend><h3 ref={heading} tabIndex={-1}>{t.reasonTitle} <span className="req">*</span></h3></legend>
            <div className="reasons" role="radiogroup" aria-required="true">
              {REASONS.map(({ key, image, focus }) => (
                <label key={key} className={cx('reason', reason === key && 'is-on')}>
                  <input type="radio" name="reason" value={key} checked={reason === key} onChange={() => { setReason(key); setErrors({}); }} />
                  <Image className="reason__img" src={image} alt="" fill sizes="(max-width: 620px) 46vw, 260px" style={{ objectPosition: focus }} />
                  <span className="reason__check" aria-hidden="true"><Icon name="check" /></span>
                  <span className="reason__text"><b>{t.reasons[key].label}</b><small>{t.reasons[key].hint}</small></span>
                </label>
              ))}
            </div>
            {errors.reason && <p className="iform__error" role="alert">{errors.reason}</p>}
          </fieldset>
        )}

        {step === 1 && (
          <div className="iform__panel">
            <h3 ref={heading} tabIndex={-1}>{t.detailsTitle}</h3>
            <label className="field">
              <span>{t.description}</span>
              <textarea name="description" rows={5} maxLength={4000} value={description} onChange={(event) => setDescription(event.target.value)} placeholder={t.descriptionPlaceholder} />
            </label>

            <div className="photos">
              <p className="photos__label">{t.photos} <small>{fill(t.photosNote, { max: PHOTO_LIMITS.maxCount })}</small></p>
              <p className="photos__hint">{t.photosHint}</p>
              <ul className="photos__list">
                {photos.map(({ id, url, file }) => (
                  <li key={id}>
                    {/* A local preview of the visitor's own file: nothing for next/image to optimise */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={url} alt={file.name} />
                    <button type="button" aria-label={fill(t.remove, { name: file.name })} onClick={() => removePhoto(id)}><Icon name="close" /></button>
                  </li>
                ))}
                {photos.length < PHOTO_LIMITS.maxCount && (
                  <li>
                    <label className={cx('photos__add', status === 'busy' && 'is-busy')}>
                      <input type="file" accept="image/*" multiple onChange={addPhotos} disabled={status === 'busy'} />
                      <Icon name={status === 'busy' ? 'clock' : 'camera'} />
                      <span>{status === 'busy' ? t.preparing : t.addPhotos}</span>
                    </label>
                  </li>
                )}
              </ul>
              {errors.photos && <p className="iform__error" role="alert">{errors.photos}</p>}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="iform__panel">
            <h3 ref={heading} tabIndex={-1}>{t.contactTitle}</h3>
            <div className="iform__grid">
              <TextField label={<>{t.name}<span className="req"> *</span></>} required name="name" autoComplete="name" value={fields.name} onChange={set('name')} error={errors.name} wide />
              <TextField label={<>{t.phone}<span className="req"> *</span></>} required name="phone" type="tel" autoComplete="tel" inputMode="tel" value={fields.phone} onChange={set('phone')} error={errors.phone} />
              <TextField label={<>{t.email}<span className="req"> *</span></>} required name="email" type="email" autoComplete="email" inputMode="email" value={fields.email} onChange={set('email')} error={errors.email} />
              <TextField label={<>{t.street}<span className="req"> *</span></>} required name="street" autoComplete="street-address" value={fields.street} onChange={set('street')} error={errors.street} wide />
              <TextField label={<>{t.zip}<span className="req"> *</span></>} required name="zip" autoComplete="postal-code" inputMode="numeric" value={fields.zip} onChange={set('zip')} error={errors.zip} />
              <TextField label={<>{t.town}<span className="req"> *</span></>} required name="town" autoComplete="address-level2" value={fields.town} onChange={set('town')} error={errors.town} />
            </div>

            <label className={cx('consent', errors.consent && 'has-error')}>
              <input type="checkbox" name="consent" checked={consent} onChange={(event) => { setConsent(event.target.checked); setErrors((prev) => ({ ...prev, consent: undefined })); }} aria-invalid={!!errors.consent} />
              <span>{t.consentBefore} <a href="/datenschutz" target="_blank">{t.consentLink}</a> {t.consentAfter} <span className="req">*</span></span>
            </label>
            {errors.consent && <p className="iform__error" role="alert">{errors.consent}</p>}
            {errors.form && <p className="iform__error iform__error--box" role="alert">{errors.form}</p>}
          </div>
        )}

        <div className="iform__nav">
          {step > 0 && <button className="btn btn--ghost" type="button" onClick={() => go(step - 1)} disabled={sending}><span className="btn__icon"><Icon name="left" /></span><span>{t.back}</span></button>}
          <button className="btn btn--accent" type="submit" disabled={sending || status === 'busy'}>
            <span className="btn__icon"><Icon name={step < 2 ? 'right' : 'send'} /></span>
            <span>{step < 2 ? t.next : sending ? t.sending : t.send}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

function TextField({ label, error, wide, ...input }: {
  label: ReactNode; error?: string; wide?: boolean;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={cx('field', wide && 'iform__wide', error && 'has-error')}>
      <span>{label}</span>
      <input type="text" aria-invalid={!!error} {...input} />
      {error && <span className="field__error" role="alert">{error}</span>}
    </label>
  );
}
