'use client';
/* Consent for external content and statistics: the Google Maps frame (components/map-embed.tsx) and
   Google Analytics (components/analytics.tsx) load only after a yes. The choice is kept in the browser's
   localStorage, asked for again after a year or when the choice format changes (VERSION), and can be
   changed through the footer link. */
import { createContext, use, useCallback, useMemo, useState, useSyncExternalStore, type ReactNode } from 'react';
import { Link } from '@/components/cta';
import { useCopy } from '@/components/i18n';

const KEY = 'treu-consent';
const CHANGE = 'treu-consent-change';
const MAX_AGE = 365 * 24 * 60 * 60 * 1000;
/** Raised when the banner asks for something new, so earlier answers are asked again (2: Google Analytics added). */
const VERSION = 2;

/** The choice when storage is blocked (private mode): it then lasts for the visit. */
let memory: string | null = null;

/** The stored choice as text; null when there is none or it is more than a year old. */
function read(): string | null {
  let raw = memory;
  try { raw = localStorage.getItem(KEY) ?? memory; } catch { /* storage blocked */ }
  if (!raw) return null;
  try {
    const { at, v } = JSON.parse(raw) as { at?: string; v?: number };
    if (!at || v !== VERSION || Date.now() - Date.parse(at) > MAX_AGE) return null;
  } catch { return null; }
  return raw;
}

function write(maps: boolean, stats: boolean) {
  memory = JSON.stringify({ maps, stats, v: VERSION, at: new Date().toISOString() });
  try { localStorage.setItem(KEY, memory); } catch { /* storage blocked */ }
  window.dispatchEvent(new Event(CHANGE));
}

function subscribe(onChange: () => void) {
  window.addEventListener('storage', onChange);
  window.addEventListener(CHANGE, onChange);
  return () => {
    window.removeEventListener('storage', onChange);
    window.removeEventListener(CHANGE, onChange);
  };
}

const ConsentContext = createContext<{ maps: boolean; stats: boolean; allowMaps: () => void; open: () => void } | null>(null);

export function useConsent() {
  const context = use(ConsentContext);
  if (!context) throw new Error('ConsentProvider is missing');
  return context;
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  // undefined on the server and while hydrating: nothing is known yet, so no banner and no map
  const raw = useSyncExternalStore<string | null | undefined>(subscribe, read, () => undefined);
  const [reopened, setReopened] = useState(false);
  const { maps, stats } = useMemo(() => {
    const choice = raw ? JSON.parse(raw) as { maps?: boolean; stats?: boolean } : {};
    return { maps: choice.maps === true, stats: choice.stats === true };
  }, [raw]);

  // The banner's two buttons answer both questions at once: everything or nothing
  const decide = useCallback((value: boolean) => {
    write(value, value);
    setReopened(false);
  }, []);
  // The map's own button allows only the map and keeps the statistics choice as it was
  const allowMaps = useCallback(() => write(true, stats), [stats]);
  const value = useMemo(() => ({ maps, stats, allowMaps, open: () => setReopened(true) }), [maps, stats, allowMaps]);

  return (
    <ConsentContext value={value}>
      {children}
      {(raw === null || reopened) && <Banner onDecide={decide} />}
    </ConsentContext>
  );
}

/** Both answers are one click away and the same size; the page stays usable behind the banner. */
function Banner({ onDecide }: { onDecide: (maps: boolean) => void }) {
  const { consent } = useCopy();
  return (
    <section className="cookie" role="dialog" aria-modal="false" aria-labelledby="cookie-title" aria-describedby="cookie-text">
      <h2 className="cookie__title" id="cookie-title">{consent.title}</h2>
      <p id="cookie-text">{consent.text}</p>
      <p className="cookie__links">
        <Link href="/datenschutz">{consent.privacy}</Link>
        <Link href="/impressum">{consent.imprint}</Link>
      </p>
      <div className="cookie__actions">
        <button className="btn btn--light" type="button" onClick={() => onDecide(false)}>{consent.decline}</button>
        <button className="btn btn--dark" type="button" onClick={() => onDecide(true)}>{consent.accept}</button>
      </div>
    </section>
  );
}

/** Reopens the banner, so a choice can be changed or withdrawn (the footer carries it on every page). */
export function ConsentLink() {
  const { consent } = useCopy();
  const { open } = useConsent();
  return <button type="button" onClick={open}>{consent.settings}</button>;
}
