/* German: the source language and the only public one. Its shape defines `Copy`; en.ts must match it.
   {placeholders} are filled by `fill` (lib/i18n). Headlines are pairs: the second part can be styled as an accent (`em` in globals.css). */
export const de = {
  meta: {
    // Search terms first, the brand last: this is what Google shows as the result's headline
    title: 'Sanitär, Heizung & Klima in Mannheim | Treu Haustechnik',
    description: 'Meisterbetrieb für Sanitär, Heizung und Klima in Mannheim: Heizungstausch, Wärmepumpe, Badsanierung, Klimaanlagen und 24/7-Notdienst. Jetzt anfragen.',
  },
  a11y: {
    skip: 'Zum Inhalt springen',
    whatsapp: 'WhatsApp-Chat öffnen',
    stars: '{value} von 5 Sternen',
    toForm: 'Zum Anfrageformular',
  },
  cta: { inquiry: 'Anfrage stellen', call: 'Jetzt anrufen', more: 'Mehr erfahren', aboutUs: 'Mehr über uns', home: 'Zur Startseite' },
  rating: { count: '{count} Google-Rezensionen' },

  // The client's own tagline, as the headline over the trust facts
  trustTitle: ['Ihr Wohlbefinden', 'in treuen Händen'],
  trust: [
    { title: 'Meisterbetrieb', note: 'seit {year}' },
    { title: '24/7 Notdienst', note: 'rund um die Uhr' },
    { title: '{rating} von 5', note: '{count} Google-Rezensionen' },
    { title: 'Mannheim', note: 'und Umgebung' },
    { title: 'Privat & Gewerbe', note: 'ein Ansprechpartner' },
  ],

  home: {
    hero: {
      // The page's one h1: the trade and the town people search for, then the trust word
      title: ['Ihr Meisterbetrieb aus Mannheim für', 'Sanitär, Heizung & Klimatechnik'],
      lead: 'Wärmepumpen, Heizungstausch, Badsanierung und Klimaanlagen aus einer Hand. Notdienst rund um die Uhr.',
      // One line under each service in the cards below the headline
      services: {
        heizung: 'Modernisierung, Wärmepumpe, Gas & Öl',
        'sanitaer-bad': 'Badsanierung, Trinkwasser & Abwasser',
        klima: 'Split-Anlagen, Wartung, Reinigung',
        notdienst: 'Rund um die Uhr erreichbar',
      },
    },
    about: {
      eyebrow: 'Über Treu Haustechnik',
      alt: 'Installateur bei der Arbeit an einer Leitung',
      text: 'Treu Haustechnik ist Ihr Sanitär- und Heizungs-Meisterbetrieb aus {district}. Aus einem Ein-Mann-Betrieb ist ein Team geworden, das Heizungen modernisiert, Wärmepumpen und Klimaanlagen installiert, Bäder saniert und im Notfall rund um die Uhr für Sie da ist.',
    },
    process: {
      eyebrow: 'Unser Ablauf',
      title: ['So arbeiten wir,', 'von der Anfrage bis zur Abnahme'],
      aside: 'Klare Schritte, feste Absprachen und ein Ansprechpartner vom ersten Kontakt bis zur Einweisung.',
      step: 'Schritt {n}',
      steps: [
        { title: 'Anfrage mit Fotos stellen', text: 'Sie wählen Ihr Anliegen, beschreiben es kurz und laden auf Wunsch Fotos hoch. So wissen wir von Anfang an, worum es geht.' },
        { title: 'Angebot vom Meisterbetrieb', text: 'Wir melden uns bei Ihnen, klären offene Fragen und erstellen Ihr Angebot.' },
        { title: 'Termin und Ausführung', text: 'Nach Ihrer Zusage stimmen wir den Termin ab und führen die Arbeiten sauber und zuverlässig aus.' },
        { title: 'Abnahme und Einweisung', text: 'Zum Abschluss gehen wir die Arbeiten mit Ihnen durch und erklären Bedienung und Wartung.' },
      ],
      scope: ['Heizung', 'Wärmepumpe', 'Badsanierung', 'Klima', 'Trinkwasser', 'Abwasser', 'Service', 'Notdienst'],
      badge: 'Erklärt und dokumentiert',
      checklistTitle: ['Abnahme-', 'Checkliste'],
      checklist: ['Montage abgeschlossen', 'Anlage geprüft', 'In Betrieb genommen', 'Bedienung erklärt'],
    },
    local: {
      eyebrow: 'Vor Ort',
      title: ['Haustechnik für', 'Mannheim und die Region'],
      alt: 'Der Mannheimer Wasserturm',
      paragraphs: [
        'Mannheim ist eine Stadt der Gegensätze: Gründerzeit-Altbauten in den Quadraten und der Neckarstadt, Siedlungshäuser in der Gartenstadt, Neubauten auf den Konversionsflächen. Jedes dieser Gebäude stellt andere Anforderungen an Heizung, Leitungen und Bad. Eine Lösung von der Stange passt selten.',
        'Im Altbau entscheidet eine saubere Planung darüber, ob eine neue Heizung effizient läuft: Heizkörper, Leitungen und Regelung müssen zum neuen Wärmeerzeuger passen. Deshalb sehen wir uns die bestehende Anlage genau an, bevor wir ein System empfehlen, ob Wärmepumpe, Gas oder Öl.',
        'Die Rheinebene gehört zu den wärmsten Regionen Deutschlands. Wer im Sommer unter dem Dach schläft oder im Büro arbeitet, weiß eine richtig ausgelegte Klimaanlage zu schätzen. Wir installieren Split-Anlagen und halten sie mit Wartung und Reinigung in Schuss.',
        'Dazu kommt das Wasser: In der Region ist es vielerorts hart. Kalk setzt Armaturen, Leitungen und Geräten zu. Mit der passenden Wasseraufbereitung lässt sich das vermeiden, und wir beraten Sie dazu, welche Lösung sich für Ihr Haus lohnt.',
        'Als Meisterbetrieb aus der Gartenstadt sind wir für Sie da, im Notfall rund um die Uhr.',
      ],
    },
    faq: [
      { q: 'Wie stelle ich eine Anfrage?', a: 'Über das Formular auf dieser Seite: Sie wählen Ihr Anliegen, beschreiben es kurz, laden auf Wunsch Fotos hoch und hinterlassen Ihre Kontaktdaten. Wir melden uns per E-Mail oder Telefon bei Ihnen.' },
      { q: 'In welchem Gebiet sind Sie tätig?', a: 'Unser Betrieb sitzt in {district}. Wir arbeiten in Mannheim und Umgebung. Wenn Sie unsicher sind, ob wir zu Ihnen kommen, fragen Sie einfach an.' },
      { q: 'Warum soll ich Fotos hochladen?', a: 'Mit Fotos Ihres Bads, Ihrer Heizung oder des Schadens können wir die Situation besser einschätzen und ein genaueres Angebot erstellen. Die Fotos sind freiwillig.' },
      { q: 'Bieten Sie einen Notdienst an?', a: 'Ja. Bei Rohrbruch, Heizungsausfall und anderen Notfällen erreichen Sie uns rund um die Uhr unter {phone}.' },
      { q: 'Arbeiten Sie auch für Gewerbekunden?', a: 'Ja, wir arbeiten für private und gewerbliche Kunden.' },
      { q: 'Welche Leistungen bieten Sie an?', a: 'Heizung (Modernisierung, Wärmepumpen, Gas- und Ölheizungen), Sanitär und Bad (Badsanierung, barrierefreie Bäder, Trinkwasser, Abwasser, Wasseraufbereitung), Klimatechnik (Split-Anlagen, Wartung und Reinigung) und den Notdienst.' },
    ],
  },

  carousel: {
    eyebrow: 'Unsere Leistungen',
    title: ['Alles für Ihr', 'Wohlbefinden'],
    aside: 'Heizung, Bad, Klima und Notdienst aus einer Hand, ohne mehrere Betriebe koordinieren zu müssen.',
    label: 'Leistungen',
    // Same order as SERVICE_CARDS (lib/services.ts)
    cards: [
      { title: 'Wärmepumpe', text: 'Beratung, Auslegung und Installation aus einer Hand.' },
      { title: 'Heizungsmodernisierung', text: 'Alte Anlage raus, effizientes System rein.' },
      { title: 'Badsanierung', text: 'Vom Gäste-WC bis zum Komplettbad.' },
      { title: 'Barrierefreies Bad', text: 'Bodengleich, sicher und komfortabel.' },
      { title: 'Klimaanlagen', text: 'Split-Anlagen installieren, warten, reinigen.' },
      { title: 'Trinkwasser & Abwasser', text: 'Leitungen, Anschlüsse, Wasseraufbereitung.' },
      { title: 'Gas- & Ölheizung', text: 'Installation, Wartung und Reparatur.' },
      { title: 'Notdienst', text: 'Rohrbruch, Heizungsausfall, Verstopfung: 24/7.' },
    ],
  },

  reviews: {
    eyebrow: 'Bewertungen',
    title: ['Was unsere', 'Kunden sagen'],
    aside: '{rating} von 5 Sternen aus {count} Rezensionen auf Google, im Wortlaut übernommen.',
    label: 'Bewertungen',
    all: 'Alle Rezensionen auf Google ansehen',
  },

  emergency: {
    eyebrow: 'Notdienst',
    title: ['Schnelle Hilfe,', 'rund um die Uhr'],
    aside: 'Im Notfall sind wir 24 Stunden am Tag, 7 Tage die Woche für Sie erreichbar.',
    cards: [
      { title: 'Heizung & Warmwasser', lead: 'Heizung kalt?', points: ['Heizungsausfall', 'Kein Warmwasser', 'Störung an der Anlage'] },
      { title: 'Rohrbruch & Wasserschaden', lead: 'Wasser tritt aus?', points: ['Rohrbruch', 'Wasserschaden', 'Undichte Leitungen'] },
      { title: 'Rohre & Abflüsse', lead: 'Nichts läuft ab?', points: ['Verstopfte Rohre', 'Verstopfte Abflüsse', 'Rückstau in Bad oder Küche'] },
    ],
    more: 'Mehr zum Notdienst',
  },

  faq: {
    eyebrow: 'FAQ',
    title: ['Häufig gestellte', 'Fragen'],
    aside: 'Klare Antworten zu Anfrage, Ablauf und Notdienst.',
    boxTitle: ['Klare Antworten.', 'Ohne Umwege.'],
    boxText: 'Ihre Frage ist nicht dabei? Schreiben Sie uns oder rufen Sie an, wir helfen gern weiter.',
  },

  inquiry: {
    eyebrow: 'Kontakt',
    title: ['Stellen Sie Ihre', 'Anfrage'],
    text: 'Sagen Sie uns, worum es geht, und laden Sie auf Wunsch Fotos hoch. Wir melden uns mit einem Angebot oder einem Terminvorschlag bei Ihnen.',
    chips: ['In drei Schritten', 'Fotos optional', 'Antwort per E-Mail oder Telefon'],
    hotline: 'Notdienst 24/7',
    email: 'E-Mail',
    whatsapp: 'WhatsApp',
    write: 'Nachricht schreiben',
  },

  servicePage: {
    chips: ['Meisterbetrieb', 'Mannheim'],
    bandEyebrow: 'So arbeiten wir',
    bandEyebrowUrgent: 'Erste Hilfe',
    moreEyebrow: 'Weitere Leistungen',
    moreTitle: ['Auch das übernehmen', 'wir für Sie'],
  },

  services: {
    heizung: {
      headline: ['Heizung, die zu Ihrem Haus', 'wirklich passt'],
      intro: 'Vom Heizungstausch im Altbau bis zur neuen Wärmepumpe: Als Meisterbetrieb planen, installieren und warten wir Ihre Heizungsanlage in Mannheim und Umgebung.',
      meta: {
        title: 'Heizung in Mannheim: Modernisierung, Wärmepumpe, Gas & Öl',
        description: 'Heizungsmodernisierung, Wärmepumpen-Installation, Gas- und Ölheizungen vom Meisterbetrieb in Mannheim. Jetzt Anfrage mit Fotos stellen.',
      },
      listTitle: ['Unsere Leistungen rund um die', 'Heizung'],
      listIntro: 'Vier Schwerpunkte, ein Ansprechpartner: Wir beraten Sie zu dem System, das zu Gebäude, Verbrauch und Budget passt.',
      items: {
        heizungsmodernisierung: { title: 'Heizungsmodernisierung', text: 'Wir ersetzen Ihre alte Anlage durch ein effizientes System, stimmen Heizkörper und Regelung darauf ab und nehmen alles sauber in Betrieb.' },
        waermepumpe: { title: 'Wärmepumpen-Installation', text: 'Beratung, Auslegung und Einbau Ihrer Wärmepumpe aus einer Hand, inklusive Einweisung in die Bedienung.' },
        gasheizung: { title: 'Gasheizung', text: 'Installation, Austausch und Wartung von Gasheizungen und Gasthermen, fachgerecht und nach den geltenden Vorschriften.' },
        oelheizung: { title: 'Ölheizung', text: 'Wartung, Reparatur und Erneuerung von Ölheizungen. Auf Wunsch planen wir mit Ihnen den Umstieg auf ein anderes System.' },
      },
      band: {
        alt: 'Heizungsanlage wird gewartet',
        title: ['Sauber geplant,', 'sauber eingebaut'],
        text: 'Eine neue Heizung ist eine Entscheidung für viele Jahre. Deshalb erklären wir Ihnen die Möglichkeiten verständlich, bevor wir ein Angebot schreiben, und weisen Sie nach dem Einbau in Bedienung und Wartung ein.',
        points: ['Beratung zu den passenden Systemen', 'Installation durch den Meisterbetrieb', 'Einweisung in Bedienung und Wartung', 'Auch im Notfall erreichbar'],
      },
      faq: [
        { q: 'Welche Heizsysteme bauen Sie ein?', a: 'Wir installieren und warten Wärmepumpen, Gasheizungen und Ölheizungen und modernisieren bestehende Anlagen. Welches System für Ihr Gebäude sinnvoll ist, klären wir gemeinsam in der Beratung.' },
        { q: 'Tauschen Sie auch Heizungen im Altbau?', a: 'Ja, wir tauschen Heizungen auch im Bestand und im Altbau. Schicken Sie uns am besten Fotos der bestehenden Anlage mit, dann können wir den Aufwand besser einschätzen.' },
        { q: 'Meine Heizung ist ausgefallen. Was jetzt?', a: 'Rufen Sie uns direkt an: Unser Notdienst ist rund um die Uhr unter {phone} erreichbar.' },
      ],
    },
    'sanitaer-bad': {
      headline: ['Ihr neues Bad,', 'fachgerecht umgesetzt'],
      intro: 'Badsanierung, barrierefreie Umbauten und alles rund ums Wasser: Wir renovieren Bäder und kümmern uns um Trinkwasser, Abwasser und Wasseraufbereitung.',
      meta: {
        title: 'Badsanierung & Sanitär in Mannheim vom Meisterbetrieb',
        description: 'Badsanierung, Luxusbäder, barrierefreie Bäder, Trinkwasser, Abwasser und Wasseraufbereitung in Mannheim. Anfrage mit Fotos Ihres Bads stellen.',
      },
      listTitle: ['Unsere Leistungen für', 'Bad und Sanitär'],
      listIntro: 'Vom Gäste-WC bis zum Komplettbad, von der Trinkwasserleitung bis zur Wasseraufbereitung.',
      items: {
        badsanierung: { title: 'Badsanierung', text: 'Ob Teilsanierung oder komplett neues Bad: Wir erneuern Sanitärobjekte und Leitungen und stimmen die Arbeiten mit Ihnen ab.' },
        luxusbad: { title: 'Luxusbäder', text: 'Hochwertige Ausstattung, bodenebene Duschen, freistehende Wannen: Wir setzen Ihr Wunschbad mit Sorgfalt im Detail um.' },
        barrierefrei: { title: 'Barrierefreie Bäder', text: 'Bodengleiche Duschen, Haltegriffe und gut erreichbare Armaturen für ein Bad, das in jeder Lebensphase sicher bleibt.' },
        trinkwasser: { title: 'Trinkwasser', text: 'Installation und Erneuerung von Trinkwasserleitungen und Armaturen für sauberes Wasser an jeder Zapfstelle.' },
        abwasser: { title: 'Abwasser', text: 'Abwasserleitungen und Anschlüsse fachgerecht verlegt, geprüft und instand gesetzt.' },
        wasseraufbereitung: { title: 'Wasseraufbereitung', text: 'Filter- und Enthärtungsanlagen, die Leitungen und Geräte vor Kalk schützen. Wir beraten Sie zur passenden Lösung.' },
      },
      band: {
        alt: 'Modernes Bad mit bodenebener Dusche',
        title: ['Fotos schicken,', 'Angebot erhalten'],
        text: 'Damit wir Ihr Bad richtig einschätzen können, laden Sie bei Ihrer Anfrage einfach ein paar Fotos hoch. So sehen wir Raum, Anschlüsse und Zustand und können Ihnen ein genaueres Angebot machen.',
        points: ['Fotos direkt im Anfrageformular hochladen', 'Abstimmung aller Schritte vorab', 'Saubere, dokumentierte Ausführung', 'Prüfung alter Leitungen auf Wunsch'],
      },
      faq: [
        { q: 'Wie läuft eine Badsanierung bei Ihnen ab?', a: 'Sie stellen eine Anfrage, am besten mit Fotos Ihres Bads. Wir melden uns bei Ihnen, klären die Details und erstellen ein Angebot. Nach Ihrer Zusage stimmen wir Termin und Ablauf ab und setzen die Arbeiten um.' },
        { q: 'Bauen Sie Bäder auch barrierefrei um?', a: 'Ja. Bodengleiche Duschen, Haltegriffe und angepasste Sanitärobjekte gehören zu unseren Leistungen.' },
        { q: 'Kümmern Sie sich auch um alte Leitungen?', a: 'Ja. Auf Wunsch prüfen wir bestehende Trinkwasser- und Abwasserleitungen und erneuern sie, wenn es nötig ist.' },
      ],
    },
    klima: {
      headline: ['Angenehm kühl,', 'wenn es draußen heiß wird'],
      intro: 'Wir installieren Split-Klimaanlagen für Wohnräume und Gewerbe und halten sie mit regelmäßiger Wartung und Reinigung leistungsfähig.',
      meta: {
        title: 'Klimaanlagen in Mannheim: Installation, Wartung & Reinigung',
        description: 'Split-Klimaanlagen vom Meisterbetrieb in Mannheim: Beratung, Installation, Wartung und Reinigung für Zuhause und Gewerbe.',
      },
      listTitle: ['Unsere Leistungen in der', 'Klimatechnik'],
      listIntro: 'Von der ersten Beratung bis zur jährlichen Wartung.',
      items: {
        'split-klimaanlagen': { title: 'Split-Klimaanlagen', text: 'Beratung, Planung und Installation von Split-Geräten für einzelne Räume oder mehrere Zonen, zu Hause oder im Betrieb.' },
        'wartung-reinigung': { title: 'Wartung & Reinigung', text: 'Regelmäßige Wartung und gründliche Reinigung, damit Ihre Anlage hygienisch, leise und effizient läuft.' },
      },
      band: {
        alt: 'Split-Klimagerät an der Wand eines Wohnraums',
        title: ['Kühlen im Sommer,', 'gepflegt das ganze Jahr'],
        text: 'Eine Klimaanlage arbeitet nur dann sparsam und hygienisch, wenn sie richtig ausgelegt und regelmäßig gereinigt wird. Wir übernehmen beides.',
        points: ['Für Wohnung, Haus und Gewerbe', 'Installation durch den Meisterbetrieb', 'Wartung und Reinigung bestehender Anlagen'],
      },
      faq: [
        { q: 'Installieren Sie Klimaanlagen auch in Wohnungen?', a: 'Ja, wir installieren Split-Klimaanlagen in Wohnungen, Häusern und Gewerberäumen. Schicken Sie uns gern Fotos der Räume und des möglichen Standorts für das Außengerät.' },
        { q: 'Warten Sie auch Anlagen, die Sie nicht eingebaut haben?', a: 'Stellen Sie einfach eine Anfrage mit Angaben zu Ihrer Anlage. Wir melden uns und klären, wie wir Ihnen helfen können.' },
      ],
    },
    notdienst: {
      headline: ['Notdienst,', 'rund um die Uhr'],
      intro: 'Heizung ausgefallen, Rohr gebrochen, kein warmes Wasser? Rufen Sie uns an. Wir sind 24 Stunden am Tag, 7 Tage die Woche für Sie erreichbar.',
      meta: {
        title: 'Notdienst Sanitär & Heizung Mannheim: 24/7 erreichbar',
        description: 'Heizungsausfall, Rohrbruch, Wasserschaden oder Verstopfung? Der Notdienst von Treu Haustechnik in Mannheim ist rund um die Uhr erreichbar: {phone}.',
      },
      listTitle: ['Wobei unser Notdienst', 'sofort hilft'],
      listIntro: 'Im Notfall zählt jede Minute. Am schnellsten erreichen Sie uns telefonisch.',
      items: {
        heizungsausfall: { title: 'Heizungsausfall', text: 'Die Heizung bleibt kalt oder zeigt eine Störung? Wir suchen den Fehler und bringen die Anlage wieder zum Laufen.' },
        wasserschaden: { title: 'Wasserschaden', text: 'Wasser tritt aus und Sie wissen nicht woher? Wir finden die Ursache und stoppen den Schaden.' },
        rohrbruch: { title: 'Rohrbruch', text: 'Bei einem Rohrbruch schließen Sie den Haupthahn und rufen uns an. Wir reparieren die Leitung fachgerecht.' },
        'kein-warmwasser': { title: 'Kein Warmwasser', text: 'Kaltes Wasser aus allen Hähnen? Wir prüfen Warmwasserbereitung und Heizung und beheben den Fehler.' },
        verstopfung: { title: 'Verstopfte Rohre und Abflüsse', text: 'Wenn nichts mehr abläuft, machen wir Rohre und Abflüsse wieder frei.' },
      },
      band: {
        alt: 'Reparatur an einer Wasserleitung unter der Spüle',
        title: ['Was Sie tun können,', 'bis wir da sind'],
        text: 'Ein paar Handgriffe helfen, den Schaden klein zu halten, bis unser Notdienst bei Ihnen ist.',
        points: ['Bei austretendem Wasser den Haupthahn schließen', 'Strom in betroffenen Räumen abschalten, wenn Wasser in die Nähe von Elektrik gelangt', 'Schaden fotografieren, zum Beispiel für die Versicherung', 'Uns anrufen: {phone}'],
      },
      faq: [
        { q: 'Wann ist der Notdienst erreichbar?', a: 'Rund um die Uhr, auch nachts, am Wochenende und an Feiertagen, unter {phone}.' },
        { q: 'Kann ich im Notfall auch das Formular nutzen?', a: 'Im Notfall rufen Sie bitte an, das geht am schnellsten. Das Anfrageformular ist für alles gedacht, was nicht sofort erledigt werden muss.' },
      ],
    },
  },

  about: {
    meta: {
      title: 'Über uns: Meisterbetrieb aus Mannheim-Gartenstadt',
      description: 'Vom Ein-Mann-Betrieb zum Expertenteam: Lernen Sie Treu Haustechnik kennen, Ihren Sanitär- und Heizungs-Meisterbetrieb in Mannheim.',
    },
    hero: {
      chips: ['Über uns', 'Meisterbetrieb seit {year}'],
      title: ['Vom Ein-Mann-Betrieb', 'zum Expertenteam'],
      lead: 'Engagierte Lösungen für Ihr Zuhause: Erfahren Sie mehr über unsere Geschichte und unsere Verpflichtung zu Qualität und Service.',
    },
    story: {
      eyebrow: 'Unsere Geschichte',
      title: ['Gewachsen mit', 'jedem Auftrag'],
      alt: 'Installateur bei der Arbeit',
      text: 'Unsere Geschichte begann mit einem Ein-Mann-Betrieb, der engagierte Lösungen anbot. Seitdem sind wir zu einem Expertenteam gewachsen, das ein breiteres Spektrum an Dienstleistungen zu erschwinglichen Preisen anbietet. Egal ob Reparatur oder Austausch: Wir stellen sicher, dass jede Aufgabe mit höchster Qualität ausgeführt wird.',
      owner: 'Geführt wird der Betrieb von {owner}, {ownerTitle}.',
    },
    mission: {
      eyebrow: 'Unsere Mission',
      title: ['Zuverlässigkeit, Qualität und', 'zufriedene Kunden'],
      aside: 'Wir möchten Ihre Erwartungen übertreffen und Ihnen ein Höchstmaß an Komfort und Sicherheit in Ihrem Zuhause oder Unternehmen bieten.',
      values: [
        { title: 'Qualität an erster Stelle', text: 'Höchste Standards in allem, was wir tun.' },
        { title: 'Integrität', text: 'Ehrlich, verantwortungsbewusst und verlässlich.' },
        { title: 'Kundenzufriedenheit', text: 'Unser oberstes Ziel bei jedem Auftrag.' },
      ],
    },
    why: {
      eyebrow: 'Warum wir?',
      title: ['Der Extra-Schritt', 'für Sie'],
      aside: 'Wir zeigen Ihnen unsere Wertschätzung, indem wir den Extra-Schritt gehen.',
      reasons: [
        { title: 'Qualitätsgarantie', text: 'Ihre Zufriedenheit steht bei uns an erster Stelle.' },
        { title: 'Fachkräfte', text: 'Erfahrene Profis für zuverlässige Ergebnisse.' },
        { title: 'Klare Kommunikation', text: 'Wir halten Sie immer auf dem Laufenden.' },
        { title: 'Schnelle Hilfe', text: 'Wir sind schnell vor Ort, um Probleme zu lösen.' },
        { title: 'Fair und transparent', text: 'Erschwingliche Preise und verlässliche Vereinbarungen.' },
        { title: 'Umfangreiche Leistungen', text: 'Von der Installation bis zur Wartung alles für Ihr Zuhause oder Unternehmen.' },
      ],
    },
  },

  contact: {
    meta: {
      title: 'Kontakt & Anfrage',
      description: 'Stellen Sie Ihre Anfrage an Treu Haustechnik in Mannheim: Anliegen wählen, beschreiben, Fotos hochladen. Notdienst rund um die Uhr unter {phone}.',
    },
    eyebrow: 'Kontakt',
    title: ['Wir sind für Sie da,', 'schreiben oder rufen Sie an'],
    lead: 'Für Fragen, Termine und Angebote nutzen Sie am besten das Anfrageformular. Im Notfall rufen Sie uns bitte direkt an.',
    ways: { call: 'Anrufen (Notdienst 24/7)', whatsapp: 'WhatsApp', email: 'E-Mail', address: 'Adresse' },
  },

  notFound: {
    eyebrow: 'Fehler 404',
    title: ['Diese Seite gibt es', 'leider nicht'],
    lead: 'Vielleicht wurde sie verschoben. Auf der Startseite finden Sie alle unsere Leistungen.',
  },

  blog: {
    eyebrow: 'Ratgeber',
    title: ['Wissen vom', 'Meisterbetrieb'],
    aside: 'Antworten auf die Fragen, die uns Kunden in Mannheim am häufigsten stellen.',
    all: 'Alle Beiträge',
    read: 'Weiterlesen',
    minutes: '{n} Min. Lesezeit',
    by: 'Von {name}',
    takeaways: 'Das Wichtigste in Kürze',
    related: ['Weitere', 'Beiträge'],
    service: 'Zur Leistung {name}',
    crumbs: 'Sie sind hier',
    home: 'Start',
    ctaTitle: 'Sie haben eine Frage zu Ihrem Vorhaben?',
    ctaText: 'Schildern Sie uns kurz, worum es geht. Wir melden uns mit einer Einschätzung oder einem Terminvorschlag.',
    index: {
      title: ['Ratgeber für', 'Heizung, Bad & Klima'],
      lead: 'Praxiswissen aus dem Meisterbetrieb: verständlich erklärt, ohne Fachchinesisch und mit Blick auf Häuser in Mannheim und der Region.',
      meta: {
        title: 'Ratgeber: Heizung, Bad & Klima in Mannheim',
        description: 'Ratgeber vom Meisterbetrieb aus Mannheim: Wärmepumpe im Altbau, Heizungsausfall, Badsanierung, hartes Wasser und Klimaanlagen verständlich erklärt.',
      },
    },
  },

  footer: {
    text: 'Ihr Sanitär- und Heizungs-Meisterbetrieb in Mannheim: Heizung, Bad, Klima und Notdienst rund um die Uhr.',
    services: 'Leistungen',
    contact: 'Kontakt',
    emergency: 'Notdienst',
    emergencyNote: 'Heizungsausfall, Rohrbruch oder Wasserschaden? Wir sind rund um die Uhr erreichbar.',
    rights: 'Alle Rechte vorbehalten.',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
  },

  /* What Client Components need at runtime (handed over by I18nProvider in app/layout.tsx) */
  client: {
    names: { heizung: 'Heizung', 'sanitaer-bad': 'Sanitär', klima: 'Klima', notdienst: 'Notdienst' },
    nav: {
      home: 'Start', services: 'Leistungen', guide: 'Ratgeber', about: 'Über uns', contact: 'Kontakt',
      hotline: 'Notdienst 24/7', inquiry: 'Anfrage stellen', emergency: 'Notdienst {phone}',
      logo: '{name}: zur Startseite', main: 'Hauptnavigation', mobile: 'Mobile Navigation', open: 'Menü öffnen', close: 'Menü schließen',
    },
    carousel: { prev: '{label}: zurück', next: '{label}: weiter' },
    map: {
      load: 'Karte laden', route: 'Route planen', title: 'Karte: {address}',
      note: 'Beim Laden der Karte werden Daten an Google übertragen. Mehr dazu in der', privacy: 'Datenschutzerklärung',
    },
    consent: {
      title: 'Cookies & externe Inhalte',
      text: 'Diese Website verwendet keine Analyse- oder Werbe-Cookies. Nur für die Karte von Google Maps bitten wir um Ihre Einwilligung: Beim Laden werden Daten wie Ihre IP-Adresse an Google übertragen, und Google kann Cookies setzen. Ihre Auswahl können Sie jederzeit unten auf der Seite unter „Cookie-Einstellungen“ ändern.',
      accept: 'Akzeptieren', decline: 'Ablehnen', privacy: 'Datenschutzerklärung', imprint: 'Impressum', settings: 'Cookie-Einstellungen',
    },
    form: {
      title: 'Ihre Anfrage an {name}',
      steps: ['Anliegen', 'Details', 'Kontakt'],
      progress: 'Fortschritt',
      count: 'Schritt {n} von {total}',
      reasonTitle: 'Worum geht es?',
      reasons: {
        badsanierung: { label: 'Badsanierung', hint: 'Neues Bad, Umbau, barrierefrei' },
        heizungsaustausch: { label: 'Heizungsaustausch', hint: 'Modernisierung, Gas, Öl' },
        waermepumpe: { label: 'Wärmepumpe', hint: 'Beratung und Installation' },
        klima: { label: 'Klima', hint: 'Split-Anlagen, Wartung, Reinigung' },
        service: { label: 'Service und Reparatur', hint: 'Wartung, Störung, Reparatur' },
        sonstige: { label: 'Sonstige', hint: 'Alles andere rund ums Haus' },
      },
      detailsTitle: 'Beschreiben Sie Ihr Anliegen',
      description: 'Beschreibung',
      descriptionPlaceholder: 'Was soll gemacht werden? Seit wann besteht das Problem? Gibt es Besonderheiten?',
      photos: 'Bilder',
      photosNote: 'optional, bis zu {max} Fotos',
      photosHint: 'Fotos Ihres Bads, Ihrer Heizung oder des Schadens helfen uns, ein genaues Angebot zu erstellen.',
      addPhotos: 'Fotos hinzufügen',
      preparing: 'Wird vorbereitet …',
      remove: '{name} entfernen',
      contactTitle: 'Wie erreichen wir Sie?',
      name: 'Vor- und Nachname',
      phone: 'Telefon',
      email: 'E-Mail',
      street: 'Straße und Hausnummer',
      zip: 'PLZ',
      town: 'Ort',
      consentBefore: 'Ich stimme der',
      consentLink: 'Datenschutzerklärung',
      consentAfter: 'zu.',
      back: 'Zurück',
      next: 'Weiter',
      send: 'Anfrage senden',
      sending: 'Wird gesendet …',
      errors: {
        reason: 'Bitte wählen Sie aus, worum es geht.',
        name: 'Bitte geben Sie Ihren Vor- und Nachnamen an.',
        phone: 'Bitte geben Sie eine gültige Telefonnummer an.',
        email: 'Bitte geben Sie eine gültige E-Mail-Adresse an.',
        street: 'Bitte geben Sie Straße und Hausnummer an.',
        zip: 'Bitte geben Sie eine gültige fünfstellige PLZ an.',
        town: 'Bitte geben Sie Ihren Ort an.',
        consent: 'Bitte stimmen Sie der Datenschutzerklärung zu.',
        tooMany: 'Sie können bis zu {max} Fotos hochladen.',
        notImage: 'Bitte laden Sie nur Bilddateien hoch.',
        tooLarge: 'Die Fotos sind zusammen zu groß. Bitte wählen Sie weniger oder kleinere Bilder.',
        failed: 'Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder rufen Sie uns an.',
        offline: 'Keine Verbindung. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.',
      },
      done: {
        title: 'Vielen Dank, {name}!',
        text: 'Ihre Anfrage ist bei uns eingegangen. Wir melden uns so bald wie möglich {how} bei Ihnen.',
        byBoth: 'per E-Mail oder Telefon',
        byEmail: 'per E-Mail',
        byPhone: 'telefonisch',
        urgent: 'Im Notfall erreichen Sie uns rund um die Uhr unter',
        preview: 'Testmodus: Der E-Mail-Versand ist noch nicht eingerichtet (RESEND_API_KEY fehlt). Es wurde nichts verschickt.',
        again: 'Weitere Anfrage stellen',
      },
    },
    dev: { label: 'Sprache wechseln (Entwicklung)' },
  },
};
