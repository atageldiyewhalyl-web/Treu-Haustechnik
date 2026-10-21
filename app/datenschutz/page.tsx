import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: `Datenschutzerklärung von ${SITE.legalName}: welche Daten die Website und das Anfrageformular verarbeiten und welche Rechte Sie haben.`,
  alternates: { canonical: '/datenschutz' },
  robots: { index: false },
};

/* Describes what the site actually does as of 2026-10-21 (checked against the code):
   - hosting on Vercel, functions pinned to Frankfurt (vercel.json `regions: ["fra1"]`);
   - inquiry form: app/api/anfrage -> Supabase Edge Function `treu-anfrage`, which stores the inquiry in the
     table `treu_anfragen` (Supabase project in us-east-1; there is NO automatic deletion: the agency deletes
     rows older than 90 days by hand, at the latest with each monthly report) and emails it via Resend to
     the client and to the agency (copy used for the monthly report);
   - Google Maps only after consent, self-hosted fonts, no analytics.
   If any of this changes (Supabase moved to an EU region, agency copy dropped, retention changed), update
   sections 2, 3 and 4 in the same commit. Have the final text checked by a lawyer or eRecht24. */

const UPDATED = '21. Oktober 2026';

export default function PrivacyPage() {
  return (
    <main id="main" className="plain-page">
      <article className="legal wrap">
        <h1 className="h1 h1--dark">Datenschutzerklärung</h1>
        <p>Stand: {UPDATED}</p>

        <h2>1. Verantwortlicher</h2>
        <p>
          {SITE.legalName}<br />
          Inhaber: {SITE.owner}<br />
          {SITE.street}<br />
          {SITE.zip} {SITE.city}
        </p>
        <p>
          Telefon: <a href={SITE.phoneHref}>{SITE.phone}</a><br />
          E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
        <p>Ein Datenschutzbeauftragter ist für unseren Betrieb gesetzlich nicht vorgeschrieben und nicht benannt.</p>

        <h2>2. Hosting und Server-Logfiles</h2>
        <p>
          Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Die Server, auf denen die Seiten
          und das Anfrageformular laufen, stehen in Frankfurt am Main. Beim Aufruf der Website verarbeitet Vercel technisch notwendige Daten
          (IP-Adresse, Datum und Uhrzeit des Abrufs, aufgerufene Seite, Browsertyp und Betriebssystem), um die Website auszuliefern und
          Angriffe abzuwehren. Diese Server-Logfiles werden nur kurzfristig gespeichert und anschließend automatisch gelöscht.
        </p>
        <p>
          Rechtsgrundlage ist unser berechtigtes Interesse an einer sicheren und stabilen Bereitstellung der Website (Art. 6 Abs. 1 lit. f DSGVO).
          Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung (Art. 28 DSGVO). Da Vercel seinen Sitz in den USA hat, ist ein Zugriff aus den USA
          nicht ausgeschlossen. Die Übermittlung stützt sich auf den Angemessenheitsbeschluss der EU-Kommission zum EU-US Data Privacy Framework
          (Art. 45 DSGVO), nach dem Vercel zertifiziert ist, und ergänzend auf die Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO).
        </p>

        <h2>3. Anfrageformular</h2>
        <p>
          Wenn Sie uns über das Anfrageformular schreiben, verarbeiten wir die von Ihnen eingegebenen Angaben: Grund der Anfrage, Name,
          Telefonnummer, E-Mail-Adresse, Anschrift sowie gegebenenfalls Ihre Beschreibung und Fotos. Zusätzlich speichern wir den Zeitpunkt
          Ihrer Zustimmung, die Seite, von der Sie die Anfrage gesendet haben, und die technische Kennung Ihres Browsers (User-Agent), um
          die Anfrage nachvollziehen und Missbrauch erkennen zu können. Wir nutzen diese Angaben, um Ihre Anfrage zu bearbeiten, Sie zu
          kontaktieren und Ihnen ein Angebot zu erstellen.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung eines Vertrags auf Ihre Anfrage hin), für die technischen Zusatzangaben
          unser berechtigtes Interesse an einer zuverlässigen und missbrauchssicheren Bearbeitung (Art. 6 Abs. 1 lit. f DSGVO). Die
          Pflichtfelder brauchen wir, um Ihre Anfrage bearbeiten zu können; ohne sie können wir Ihnen kein Angebot erstellen.
        </p>
        <p>Für die technische Abwicklung setzen wir folgende Dienstleister als Auftragsverarbeiter ein (Art. 28 DSGVO):</p>
        <ul>
          <li>
            <strong>Supabase Pte. Ltd.</strong>, 65 Chulia Street #38-02/03, OCBC Centre, Singapur 049513: Entgegennahme der Anfrage und
            Speicherung der Textangaben (ohne Fotos) in einer Datenbank auf Servern in den USA.
          </li>
          <li>
            <strong>Plus Five Five, Inc.</strong> (Dienst „Resend“), San Francisco, USA: Versand der Anfrage einschließlich der Fotos per
            E-Mail an uns.
          </li>
          <li>
            <strong>HB Smart Software Solutions Inc.</strong> (Webagentur „nüll.“), 69 Brown Street #2260, Providence, RI 02912, USA: technische
            Betreuung der Website und des Formulars. Die Agentur erhält eine Kopie jeder Anfrage-E-Mail, um die Zustellung zu kontrollieren
            und uns einen monatlichen Bericht über die eingegangenen Anfragen zu erstellen. Sie löscht diese Kopien nach Erstellung des
            Monatsberichts, spätestens 90 Tage nach Eingang.
          </li>
        </ul>
        <p>
          Dabei werden Daten an Unternehmen außerhalb der EU und auf Server in den USA übermittelt. Grundlage ist bei Supabase und der Webagentur
          die Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO), bei Resend der Angemessenheitsbeschluss der
          EU-Kommission zum EU-US Data Privacy Framework (Art. 45 DSGVO), nach dem der Anbieter zertifiziert ist.
        </p>
        <p>
          <strong>Speicherdauer:</strong> Die Kopie Ihrer Anfrage in der Datenbank wird spätestens 90 Tage nach Eingang gelöscht. Die E-Mail mit Ihrer
          Anfrage löschen wir spätestens zwölf Monate nach dem letzten Kontakt, wenn daraus kein Auftrag entsteht. Kommt ein Auftrag zustande,
          bewahren wir die Unterlagen so lange auf, wie es die gesetzlichen Aufbewahrungspflichten verlangen (in der Regel sechs bzw. zehn
          Jahre nach § 257 HGB und § 147 AO).
        </p>

        <h2>4. Kontakt per E-Mail, Telefon oder WhatsApp</h2>
        <p>
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung Ihres Anliegens (Art. 6 Abs. 1 lit. b
          DSGVO, bei allgemeinen Anfragen Art. 6 Abs. 1 lit. f DSGVO). Für die Speicherdauer gilt dasselbe wie beim Anfrageformular.
        </p>
        <p>
          Wenn Sie uns über WhatsApp schreiben, verarbeitet zusätzlich der Anbieter WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal
          Harbour, Dublin 2, Irland, Ihre Daten, darunter Ihre Telefonnummer und die Metadaten der Kommunikation. Dabei können Daten an die
          Muttergesellschaft Meta Platforms, Inc. in den USA übermittelt werden; Meta ist nach dem EU-US Data Privacy Framework zertifiziert.
          Der Link auf unserer Website öffnet WhatsApp erst, wenn Sie ihn anklicken. Nutzen Sie WhatsApp nicht, wenn Sie das nicht möchten, und
          erreichen Sie uns stattdessen per Telefon, E-Mail oder Formular.
        </p>

        <h2>5. Google Maps</h2>
        <p>
          Die Karte von Google Maps wird erst geladen, wenn Sie dem zugestimmt haben: über „Akzeptieren“ im Einwilligungsfenster oder über die
          Schaltfläche „Karte laden“ an der Karte. Erst dann wird eine Verbindung zu Google (Google Ireland Limited, Gordon House, Barrow Street,
          Dublin 4, Irland) hergestellt und unter anderem Ihre IP-Adresse übertragen; Google kann dabei auch Cookies setzen und Daten an Google LLC
          in den USA übermitteln, die nach dem EU-US Data Privacy Framework zertifiziert ist. Rechtsgrundlage ist Ihre Einwilligung nach Art. 6
          Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Sie können Ihre Einwilligung jederzeit über „Cookie-Einstellungen“ am Ende jeder Seite
          widerrufen.
        </p>

        <h2>6. Schriftarten, Cookies und Analyse</h2>
        <p>
          Die verwendeten Schriftarten sind lokal eingebunden; eine Verbindung zu Servern von Google findet dabei nicht statt. Diese Website
          setzt keine Cookies zu Analyse- oder Werbezwecken und verwendet keine Tracking-Tools.
        </p>
        <p>
          Ihre Auswahl im Einwilligungsfenster speichern wir im lokalen Speicher Ihres Browsers (Eintrag „treu-consent“), damit wir Sie nicht
          bei jedem Seitenaufruf erneut fragen müssen. Nach zwölf Monaten fragen wir erneut. Diese Speicherung ist technisch erforderlich
          (§ 25 Abs. 2 Nr. 2 TDDDG, Art. 6 Abs. 1 lit. f DSGVO).
        </p>

        <h2>7. Links zu Google-Bewertungen und Instagram</h2>
        <p>
          Die Bewertungen auf dieser Website sind als Text übernommen; beim Ansehen der Seite wird keine Verbindung zu Google hergestellt. Erst
          wenn Sie einen Link zu unserem Google-Profil oder zu Instagram anklicken, verlassen Sie unsere Website, und es gelten die
          Datenschutzbestimmungen des jeweiligen Anbieters.
        </p>

        <h2>8. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO), auf Berichtigung (Art. 16), Löschung (Art. 17),
          Einschränkung der Verarbeitung (Art. 18) und Datenübertragbarkeit (Art. 20). Eine erteilte Einwilligung können Sie jederzeit mit
          Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3 DSGVO). Wenden Sie sich dazu an die oben genannte Stelle.
        </p>
        <p>
          <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Soweit wir Ihre Daten auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1
          lit. f DSGVO) verarbeiten, können Sie dieser Verarbeitung aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit
          widersprechen. Wir verarbeiten Ihre Daten dann nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe nachweisen, die
          Ihre Interessen überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
        </p>
        <p>
          Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Für uns zuständig ist der
          Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg, Lautenschlagerstraße 20, 70173 Stuttgart,{' '}
          <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener">www.baden-wuerttemberg.datenschutz.de</a>.
        </p>
        <p>Eine automatisierte Entscheidungsfindung einschließlich Profiling findet nicht statt.</p>
      </article>
    </main>
  );
}
