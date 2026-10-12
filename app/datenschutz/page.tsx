import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = { title: 'Datenschutzerklärung', alternates: { canonical: '/datenschutz' }, robots: { index: false } };

/* DRAFT. This describes what the rebuilt site actually does (inquiry form by email through Resend,
   Google Maps only after consent, self-hosted fonts, no cookies or analytics). The old WordPress policy
   covered other tools (webgo, WP Statistics, reCAPTCHA, newsletter) and no longer fits.
   Before launch: fill in the hosting provider and have the text generated or checked (eRecht24 / lawyer). */
export default function PrivacyPage() {
  return (
    <main id="main" className="plain-page">
      <article className="legal wrap">
        <h1 className="h1 h1--dark">Datenschutzerklärung</h1>
        <p className="legal__draft">Entwurf: Diese Fassung beschreibt die neue Website und wird vor dem Livegang rechtlich geprüft und um den Hosting-Anbieter ergänzt.</p>

        <h2>1. Verantwortliche Stelle</h2>
        <p>
          {SITE.owner}<br />
          {SITE.name}<br />
          {SITE.street}<br />
          {SITE.zip} {SITE.city}
        </p>
        <p>
          Telefon: <a href={SITE.phoneHref}>{SITE.phone}</a><br />
          E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>

        <h2>2. Hosting und Server-Logfiles</h2>
        <p>Beim Aufruf dieser Website verarbeitet der Hosting-Anbieter technisch notwendige Daten (zum Beispiel IP-Adresse, Datum und Uhrzeit des Abrufs, aufgerufene Seite, Browsertyp), um die Website auszuliefern und ihren sicheren Betrieb zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>

        <h2>3. Anfrageformular</h2>
        <p>Wenn Sie uns über das Anfrageformular schreiben, verarbeiten wir die von Ihnen eingegebenen Angaben (Name, Grund der Anfrage, Telefonnummer, E-Mail-Adresse und Anschrift sowie gegebenenfalls Beschreibung und Fotos), um Ihre Anfrage zu bearbeiten und Ihnen ein Angebot zu erstellen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf einen Vertrag gerichtet ist, im Übrigen Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO.</p>
        <p>Die Angaben werden nicht in einer Datenbank der Website gespeichert, sondern per E-Mail an uns übermittelt. Für den Versand nutzen wir den Dienst Resend (Resend, Inc., USA) als Auftragsverarbeiter. Die Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung widerrufen oder der Zweck der Speicherung entfällt; gesetzliche Aufbewahrungsfristen bleiben unberührt.</p>

        <h2>4. Kontakt per E-Mail, Telefon oder WhatsApp</h2>
        <p>Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung Ihres Anliegens (Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO). Bei der Nutzung von WhatsApp gelten zusätzlich die Datenschutzbestimmungen des Anbieters (WhatsApp Ireland Limited).</p>

        <h2>5. Google Maps</h2>
        <p>Die Karte von Google Maps wird erst geladen, wenn Sie dem zugestimmt haben: über „Akzeptieren“ im Einwilligungsfenster oder über die Schaltfläche „Karte laden“ an der Karte. Erst dann wird eine Verbindung zu Google (Google Ireland Limited) hergestellt und unter anderem Ihre IP-Adresse übertragen; Google kann dabei auch Cookies setzen. Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Sie können Ihre Einwilligung jederzeit über „Cookie-Einstellungen“ am Ende jeder Seite widerrufen.</p>

        <h2>6. Schriftarten, Cookies und Analyse</h2>
        <p>Die verwendeten Schriftarten sind lokal eingebunden; eine Verbindung zu Servern von Google findet dabei nicht statt. Diese Website setzt keine Cookies zu Analyse- oder Werbezwecken und verwendet keine Tracking-Tools.</p>
        <p>Ihre Auswahl im Einwilligungsfenster speichern wir im lokalen Speicher Ihres Browsers (Eintrag „treu-consent“), damit wir Sie nicht bei jedem Seitenaufruf erneut fragen müssen. Nach zwölf Monaten fragen wir erneut. Diese Speicherung ist technisch erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG, Art. 6 Abs. 1 lit. f DSGVO).</p>

        <h2>7. Ihre Rechte</h2>
        <p>Sie haben das Recht auf Auskunft über Ihre bei uns gespeicherten Daten, auf Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit sowie das Recht, einer Verarbeitung zu widersprechen und eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen. Außerdem steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu.</p>
        <p>Wenden Sie sich dazu an die oben genannte verantwortliche Stelle.</p>
      </article>
    </main>
  );
}
