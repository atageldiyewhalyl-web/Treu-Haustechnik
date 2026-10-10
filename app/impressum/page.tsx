import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = { title: 'Impressum', alternates: { canonical: '/impressum' }, robots: { index: false } };

/* Taken over unchanged from the client's current site (source: eRecht24). */
export default function ImprintPage() {
  return (
    <main id="main" className="plain-page">
      <article className="legal wrap">
        <h1 className="h1 h1--dark">Impressum</h1>

        <p>
          {SITE.owner}<br />
          Installateur &amp; Heizungsbaumeister<br />
          {SITE.street}<br />
          {SITE.zip} {SITE.city}
        </p>
        <p>
          Handelsregister: HRA 711406<br />
          Registergericht: Amtsgericht Mannheim
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: <a href={SITE.phoneHref}>0179 6952277</a><br />
          E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>

        <h2>Umsatzsteuer-ID</h2>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />DE364271952</p>

        <h2>Angaben zur Berufshaftpflichtversicherung</h2>
        <p>
          <strong>Name und Sitz des Versicherers:</strong><br />
          HDI Versicherung AG<br />
          HDI Platz 1<br />
          30659 Hannover
        </p>
        <p><strong>Geltungsraum der Versicherung:</strong><br />Deutschland</p>

        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr/</a>.<br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

        <h2>Zentrale Kontaktstelle nach dem Digital Services Act – DSA (Verordnung (EU) 2022/265)</h2>
        <p>
          Unsere zentrale Kontaktstelle für Nutzer und Behörden nach Art. 11, 12 DSA erreichen Sie wie folgt:<br />
          E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a><br />
          Telefon: <a href={SITE.phoneHref}>{SITE.phone}</a>
        </p>
        <p>Die für den Kontakt zur Verfügung stehenden Sprachen sind: deutsch, englisch, türkisch.</p>

        <p className="legal__source">Quelle: eRecht24</p>
      </article>
    </main>
  );
}
