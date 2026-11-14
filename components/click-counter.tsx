'use client';
/* Counts clicks on phone, WhatsApp and email links anywhere on the site, for the monthly report.
   Sends only the link kind and the page path; nothing is stored in the browser, so no consent is needed. */
import { useEffect } from 'react';

function kindOf(href: string) {
  if (href.startsWith('tel:')) return 'phone';
  if (href.startsWith('mailto:')) return 'email';
  if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) return 'whatsapp';
  return null;
}

export function ClickCounter() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href]');
      const kind = link && kindOf(link.getAttribute('href') ?? '');
      if (!kind) return;
      const body = JSON.stringify({ kind, path: location.pathname });
      // sendBeacon survives the page switching to the phone, WhatsApp or mail app
      if (!navigator.sendBeacon?.('/api/klick', new Blob([body], { type: 'application/json' }))) {
        fetch('/api/klick', { method: 'POST', body, headers: { 'Content-Type': 'application/json' }, keepalive: true }).catch(() => {});
      }
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);
  return null;
}
