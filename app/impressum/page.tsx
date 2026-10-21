import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Impressum',
  description: `Impressum von ${SITE.legalName}, Meisterbetrieb für Sanitär, Heizung und Klima in Mannheim.`,
  alternates: { canonical: '/impressum' },
  robots: { index: false },
};

/* Based on the client's eRecht24 imprint, completed on 2026-10-21: registered company name (HRA entry),
   chamber and trade-law details for a Handwerksbetrieb (§ 5 Abs. 1 Nr. 3 and 5 DDG), the EU online dispute
   platform removed (shut down on 20 July 2025). Before going live, check the company name against the
   Handelsregister extract and the title against the Meisterbrief. */
export default function ImprintPage() {
  return (
    <main id="main" className="plain-page">
      <article className="legal wrap">
        <h1 className="h1 h1--dark">Impressum</h1>

        <p>
          {SITE.legalName}<br />
          Inhaber: {SITE.owner}<br />
          {SITE.street}<br />
          {SITE.zip} {SITE.city}
        </p>
        <p>
          Handelsregister: HRA 711406<br />
          Registergericht: Amtsgericht Mannheim
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: <a href={SITE.phoneHref}>{SITE.phone}</a><br />
          E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>

        <h2>Umsatzsteuer-ID</h2>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />DE364271952</p>

        <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
        <p>
          Berufsbezeichnung: Installateur- und Heizungsbauermeister<br />
          Verliehen in: Deutschland
        </p>
        <p>
          Eingetragen in die Handwerksrolle der zuständigen Kammer:<br />
          Handwerkskammer Mannheim Rhein-Neckar-Odenwald<br />
          B 1, 1–2<br />
          68159 Mannheim
        </p>
        <p>
          Es gelten folgende berufsrechtliche Regelungen: Gesetz zur Ordnung des Handwerks (Handwerksordnung), einsehbar unter{' '}
          <a href="https://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener">www.gesetze-im-internet.de/hwo</a>.
        </p>

        <h2>Angaben zur Berufshaftpflichtversicherung</h2>
        <p>
          <strong>Name und Sitz des Versicherers:</strong><br />
          HDI Versicherung AG<br />
          HDI Platz 1<br />
          30659 Hannover
        </p>
        <p><strong>Geltungsraum der Versicherung:</strong><br />Deutschland</p>

        <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

        <h2>Zentrale Kontaktstelle nach dem Digital Services Act – DSA (Verordnung (EU) 2022/2065)</h2>
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
