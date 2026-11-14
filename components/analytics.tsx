'use client';
/* Google Analytics 4 (property "Treu Haustechnik Website" in the nüll tracking account). Loads only after the
   visitor accepts in the consent banner (components/consent.tsx); before that no request goes to Google.
   Key events, set up in GA4: anfrage_submit (inquiry-form.tsx), phone_click, whatsapp_click, email_click
   (click-counter.tsx). If the visitor withdraws consent, tracking stops and the _ga cookies are removed. */
import Script from 'next/script';
import { useEffect } from 'react';
import { useConsent } from '@/components/consent';

export const GA_ID = 'G-GLT65Z7QTG';

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window { gtag?: Gtag; dataLayer?: unknown[] }
}

/** Sends an event to Google Analytics; does nothing while GA is not loaded (no consent). */
export function track(name: string, params: Record<string, string> = {}) {
  window.gtag?.('event', name, params);
}

function clearGaCookies() {
  const host = location.hostname.replace(/^www\./, '');
  for (const part of document.cookie.split(';')) {
    const name = part.split('=')[0].trim();
    if (!name.startsWith('_ga')) continue;
    for (const domain of ['', `; domain=${host}`, `; domain=.${host}`]) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
    }
  }
}

export function Analytics() {
  const { stats } = useConsent();

  useEffect(() => {
    (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = !stats;
    if (!stats && window.gtag) {
      // Consent withdrawn after GA had loaded in this visit
      window.gtag('consent', 'update', { analytics_storage: 'denied' });
      clearGaCookies();
    }
  }, [stats]);

  if (!stats) return null;
  return (
    <>
      <Script id="ga-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'granted' });
        gtag('js', new Date());
        gtag('config', '${GA_ID}', { allow_google_signals: false, allow_ad_personalization_signals: false });
      `}</Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
    </>
  );
}
