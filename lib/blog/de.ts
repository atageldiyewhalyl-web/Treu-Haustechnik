/* Ratgeber articles, German (the public wording). Rules: no prices, no subsidy figures, no promises the
   business has not made elsewhere on the site; {phone} is filled in from lib/site.ts.
   Before launch the owner should read each article once: they speak in his name. */
import type { PostSlug, PostText } from '.';

export const de: Record<PostSlug, PostText> = {
  'waermepumpe-im-altbau': {
    title: 'Wärmepumpe im Altbau: Wann lohnt sie sich wirklich?',
    description: 'Funktioniert eine Wärmepumpe im Altbau? Worauf es bei Vorlauftemperatur, Heizkörpern und Dämmung ankommt und wie Sie Ihr Haus selbst testen.',
    excerpt: 'Eine Wärmepumpe braucht weder Fußbodenheizung noch ein frisch gedämmtes Haus. Entscheidend ist eine Zahl, die Sie selbst testen können.',
    alt: 'Installateur wartet das Außengerät einer Wärmepumpe an einer Hauswand',
    takeaways: [
      'Entscheidend ist die Vorlauftemperatur: Wird Ihr Haus mit rund 55 °C warm, ist es in der Regel für eine Wärmepumpe geeignet.',
      'Oft reichen einzelne größere Heizkörper und ein hydraulischer Abgleich statt einer Komplettsanierung.',
      'Eine Heizlastberechnung verhindert, dass die Anlage zu groß oder zu klein ausgelegt wird.',
    ],
    sections: [
      {
        heading: 'Der Mythos vom unsanierten Altbau',
        text: ['Lange galt: Wärmepumpen sind etwas für Neubauten mit Fußbodenheizung. In der Praxis laufen sie heute auch in vielen älteren Häusern zuverlässig, wie sie in Mannheim und der Region zu Tausenden stehen. Ob es passt, hängt weniger vom Baujahr ab als von einer Frage: Wie heiß muss das Heizungswasser sein, damit es im Haus warm wird?'],
      },
      {
        heading: 'Die entscheidende Zahl: die Vorlauftemperatur',
        text: [
          'Eine Wärmepumpe arbeitet umso sparsamer, je niedriger die Vorlauftemperatur ist, also die Temperatur, mit der das Wasser in die Heizkörper fließt. Als Faustregel gilt: Kommt das Haus auch an kalten Tagen mit rund 55 °C oder weniger aus, lässt sich eine Wärmepumpe wirtschaftlich betreiben.',
          'Das können Sie selbst ausprobieren. Stellen Sie an einem kalten Wintertag die Vorlauftemperatur Ihrer bestehenden Heizung auf 55 °C und drehen Sie die Thermostate auf. Bleiben alle Räume angenehm warm, ist das ein gutes Zeichen. Wird es in einzelnen Zimmern kühl, wissen Sie zugleich, wo nachgebessert werden muss.',
        ],
      },
      {
        heading: 'Was sich mit wenig Aufwand verbessern lässt',
        list: [
          'Einzelne Heizkörper gegen größere tauschen: Mehr Fläche bringt mehr Wärme bei niedrigerer Temperatur.',
          'Hydraulischer Abgleich: Jeder Heizkörper bekommt genau die Wassermenge, die er braucht.',
          'Oberste Geschossdecke oder Kellerdecke dämmen: vergleichsweise schnell gemacht und sofort spürbar.',
          'Fenster abdichten oder tauschen, wo es zieht.',
        ],
      },
      {
        heading: 'Planung: Heizlast, Aufstellort und Schall',
        text: ['Vor jedem Angebot steht eine Heizlastberechnung. Sie zeigt, wie viel Wärme Ihr Haus tatsächlich braucht. Eine zu große Wärmepumpe schaltet ständig ein und aus und verschleißt schneller, eine zu kleine muss an Frosttagen elektrisch nachheizen. Bei Reihen- und Doppelhäusern kommt der Aufstellort des Außengeräts dazu: Die Abstände zum Nachbarn müssen passen, und unter dem Schlafzimmerfenster steht es besser nicht.'],
      },
      {
        heading: 'Und die Förderung?',
        text: ['Für den Heizungstausch gibt es staatliche Förderung, deren Bedingungen sich immer wieder ändern. Wir nennen deshalb hier keine Zahlen, sondern prüfen im Gespräch den aktuellen Stand für Ihr Vorhaben. Wichtig: Klären Sie die Förderung, bevor Sie einen Auftrag verbindlich vergeben.'],
      },
    ],
  },

  'heizung-faellt-aus-was-tun': {
    title: 'Heizung fällt aus: 7 Dinge, die Sie selbst prüfen können',
    description: 'Heizung kalt? Diese sieben Punkte prüfen Sie selbst, bevor Sie den Notdienst rufen. Und bei diesen Warnzeichen sollten Sie sofort anrufen.',
    excerpt: 'Kalte Heizkörper am Sonntagabend: Oft steckt eine Kleinigkeit dahinter. Diese sieben Punkte prüfen Sie in wenigen Minuten selbst.',
    alt: 'Frau in einer Decke wärmt ihre Hände an einem Heizkörper',
    takeaways: [
      'Thermostat, Wasserdruck und Sicherung sind die häufigsten Ursachen und schnell geprüft.',
      'Die Entstörtaste nur einmal drücken. Springt die Heizung nicht an, liegt ein Defekt vor.',
      'Bei Gasgeruch nichts schalten, Fenster öffnen, das Haus verlassen und von draußen den Störungsdienst rufen.',
    ],
    sections: [
      {
        heading: 'Erst prüfen, dann anrufen',
        text: ['Wenn die Heizung ausfällt, ist nicht immer gleich die Anlage defekt. Mit den folgenden Punkten finden Sie die häufigsten Ursachen selbst. Und falls nicht, können Sie uns am Telefon genau sagen, was Sie schon geprüft haben. Das spart Zeit bei der Fehlersuche.'],
      },
      {
        heading: 'Die 7-Punkte-Checkliste',
        list: [
          'Thermostate: Sind Raumthermostat und Heizkörperventile aufgedreht? Bei Funkthermostaten die Batterien prüfen.',
          'Betriebsart: Steht die Regelung versehentlich auf Sommerbetrieb, Absenkung oder Urlaub?',
          'Strom: Ist der Heizungsnotschalter eingeschaltet und die Sicherung im Sicherungskasten drin?',
          'Wasserdruck: Zeigt das Manometer am Kessel einen Wert im grünen Bereich? Im Einfamilienhaus liegt er meist zwischen 1 und 2 bar.',
          'Luft im System: Gluckern die Heizkörper oder werden sie nur unten warm, hilft Entlüften.',
          'Störcode: Zeigt das Display einen Fehlercode? Notieren Sie ihn, er hilft bei der Diagnose.',
          'Brennstoff: Ist bei einer Ölheizung noch Öl im Tank? Ist bei einer Gasheizung der Gashahn geöffnet?',
        ],
      },
      {
        heading: 'Die Entstörtaste: einmal, nicht öfter',
        text: ['Viele Heizungen haben eine Entstörtaste. Drücken Sie sie einmal und warten Sie einige Minuten. Geht die Anlage wieder auf Störung, hat das einen Grund. Mehrfaches Entstören kann den Schaden vergrößern.'],
      },
      {
        heading: 'Wann Sie sofort anrufen sollten',
        list: [
          'Es riecht nach Gas oder Abgas.',
          'Wasser tritt an Kessel, Leitungen oder Heizkörpern aus.',
          'Der Wasserdruck fällt immer wieder ab.',
          'Die Heizung geht nach dem Entstören erneut auf Störung.',
        ],
        more: ['Bei Gasgeruch gilt: keine Lichtschalter und keine Klingel betätigen, Fenster öffnen, das Haus verlassen und von draußen den Störungsdienst Ihres Gasnetzbetreibers anrufen. In allen anderen Fällen erreichen Sie unseren Notdienst rund um die Uhr unter {phone}.'],
      },
    ],
  },

  'badsanierung-ablauf-dauer-fehler': {
    title: 'Badsanierung: Ablauf, Dauer und die häufigsten Fehler',
    description: 'So läuft eine Badsanierung ab: von der Planung über Leitungen und Abdichtung bis zur Abnahme. Mit den Fehlern, die später teuer werden.',
    excerpt: 'Ein neues Bad soll Jahrzehnte halten. Umso wichtiger ist, was vor dem Fliesen passiert und später niemand mehr sieht.',
    alt: 'Freistehende weiße Badewanne mit Standarmatur in einem grau gefliesten Bad',
    takeaways: [
      'Die Reihenfolge zählt: erst Planung und Leitungen, dann Abdichtung, dann Fliesen und Endmontage.',
      'Alte Leitungen gehören geprüft, solange die Wand offen ist. Später wird es teuer.',
      'Wer heute bodengleich und mit Reserven plant, muss später nicht noch einmal umbauen.',
    ],
    sections: [
      {
        heading: 'So läuft eine Badsanierung ab',
        list: [
          'Bestandsaufnahme vor Ort: Maße, Leitungen, Wünsche und Budget.',
          'Planung und Angebot: Grundriss, Ausstattung und ein klarer Ablauf.',
          'Demontage: Das alte Bad kommt raus, Flur und Treppenhaus werden geschützt.',
          'Rohinstallation: Wasser-, Abwasser- und Heizungsleitungen werden geprüft und erneuert.',
          'Abdichtung: Dusch- und Wannenbereich werden fachgerecht abgedichtet.',
          'Fliesen und Oberflächen.',
          'Endmontage: Sanitärobjekte, Armaturen und Heizkörper.',
          'Abnahme: Wir erklären Ihnen alles und dokumentieren die Arbeiten.',
        ],
      },
      {
        heading: 'Wie lange dauert das?',
        text: ['Das hängt vom Umfang ab. Ein Komplettbad mit neuen Leitungen dauert länger als der Tausch von Wanne gegen Dusche. Trocknungszeiten für Estrich, Putz und Abdichtung lassen sich nicht abkürzen, und die Lieferzeiten für Sanitärobjekte sollten vor dem ersten Abrisstag geklärt sein. Einen Zeitplan für Ihr Bad bekommen Sie von uns mit dem Angebot.'],
      },
      {
        heading: 'Die häufigsten Fehler',
        list: [
          'Alte Leitungen bleiben in der Wand, obwohl sie am Ende ihrer Lebensdauer sind.',
          'An der Abdichtung wird gespart. Feuchteschäden zeigen sich oft erst nach Jahren.',
          'Zu wenig Steckdosen, Stauraum und Licht eingeplant.',
          'Die Lüftung wird vergessen, vor allem in innenliegenden Bädern.',
          'Barrierefreiheit wird auf später verschoben.',
        ],
      },
      {
        heading: 'Barrierefrei gleich mitdenken',
        text: ['Eine bodengleiche Dusche, eine breitere Tür und Wandverstärkungen für spätere Haltegriffe machen bei einer Sanierung wenig Mehraufwand. Nachträglich wird es deutlich aufwendiger. Auch wenn Sie heute keinen Bedarf haben: Ihr Bad soll in zwanzig Jahren noch zu Ihnen passen.'],
      },
      {
        heading: 'Früh klären, wer was macht',
        text: ['Bei einer Badsanierung greifen Sanitär, Heizung, Elektro und Fliesen ineinander. Klären Sie vor dem Start, wer welche Arbeiten übernimmt und in welcher Reihenfolge. Wir besprechen das mit Ihnen bei der Besichtigung und halten den Ablauf im Angebot fest.'],
      },
    ],
  },

  'hartes-wasser-mannheim-kalk': {
    title: 'Hartes Wasser in Mannheim: Was Kalk im Haus anrichtet',
    description: 'Mannheimer Trinkwasser ist hart. Was Kalk mit Armaturen, Leitungen und Warmwasserbereitern macht und wann sich eine Enthärtungsanlage lohnt.',
    excerpt: 'Weiße Ränder an der Armatur sind nur der sichtbare Teil. Was Kalk in Leitungen und Geräten anrichtet und was wirklich dagegen hilft.',
    alt: 'Nahaufnahme des Strahlreglers an einem Wasserhahn',
    takeaways: [
      'Das Trinkwasser in Mannheim liegt nach Angaben des Versorgers MVV bei rund 20 °dH und damit im Härtebereich „hart“.',
      'Kalk fällt vor allem dort aus, wo Wasser erwärmt wird: im Warmwasserbereiter, in der Waschmaschine, am Duschkopf.',
      'Eine Enthärtungsanlage schützt die Installation, braucht aber regelmäßige Wartung.',
    ],
    sections: [
      {
        heading: 'Wie hart ist das Wasser in Mannheim?',
        text: [
          'Die Wasserhärte gibt an, wie viel Calcium und Magnesium im Wasser gelöst sind. In Deutschland gelten drei Härtebereiche: weich (unter 8,4 °dH), mittel (8,4 bis 14 °dH) und hart (über 14 °dH). Die MVV gibt für Mannheim eine Gesamthärte von rund 20 °dH an. Den aktuellen Wert für Ihre Adresse finden Sie auf der Website des Versorgers.',
          'Hartes Wasser ist gesundheitlich unbedenklich. Für die Hausinstallation ist es aber eine Dauerbelastung.',
        ],
      },
      {
        heading: 'Was Kalk anrichtet',
        list: [
          'Warmwasserbereiter und Heizstäbe verkalken und brauchen mehr Energie.',
          'Strahlregler und Duschköpfe setzen sich zu, der Wasserstrahl wird schwächer.',
          'Armaturen und Thermostatventile werden schwergängig.',
          'Waschmaschine, Spülmaschine und Kaffeemaschine verschleißen schneller.',
          'Auf Fliesen, Glas und Armaturen bleiben weiße Ränder zurück.',
        ],
      },
      {
        heading: 'Was Sie selbst tun können',
        text: ['Strahlregler und Duschköpfe lassen sich abschrauben und in Essig- oder Zitronensäure entkalken. Dosieren Sie Waschmittel nach dem Härtebereich „hart“ und entkalken Sie Geräte nach Herstellerangabe. Warmwasserspeicher sollten regelmäßig gewartet und bei Bedarf entkalkt werden.'],
      },
      {
        heading: 'Wann sich eine Enthärtungsanlage lohnt',
        text: [
          'Eine Enthärtungsanlage wird hinter dem Hauswasserfilter eingebaut und tauscht Calcium und Magnesium gegen Natrium aus. Sie schützt die gesamte Installation und alle angeschlossenen Geräte. Sinnvoll ist sie vor allem bei hartem Wasser in Verbindung mit neuen Leitungen, einer neuen Heizung mit Warmwasserspeicher oder einem frisch sanierten Bad.',
          'Wichtig zu wissen: Die Anlage braucht Regeneriersalz und eine regelmäßige Wartung. Das Wasser wird dabei nicht auf null enthärtet, sondern auf einen mittleren Wert eingestellt. Welche Größe und welches Verfahren zu Ihrem Haushalt passen, klären wir bei einem Termin vor Ort.',
        ],
      },
    ],
  },

  'klimaanlage-nachruesten-split-anlage': {
    title: 'Klimaanlage nachrüsten: Das sollten Sie vorher wissen',
    description: 'Split-Klimaanlage nachrüsten: Split oder Monoblock, der richtige Platz für das Außengerät, Zustimmung von Vermieter oder WEG, Einbau und Wartung.',
    excerpt: 'Dachgeschoss, Homeoffice, Schlafzimmer: Wer im Sommer nicht mehr schwitzen will, sollte vor dem Kauf fünf Fragen klären.',
    alt: 'Frau steuert eine Wandklimaanlage im Schlafzimmer mit einem Tablet',
    takeaways: [
      'Fest installierte Split-Anlagen kühlen leiser und sparsamer als mobile Monoblockgeräte.',
      'Der Einbau gehört in die Hand eines zertifizierten Fachbetriebs, weil mit Kältemittel gearbeitet wird.',
      'Mieter und Wohnungseigentümer brauchen vor dem Einbau die Zustimmung von Vermieter oder Eigentümergemeinschaft.',
    ],
    sections: [
      {
        heading: 'Split-Anlage oder mobiles Gerät?',
        text: ['Mobile Monoblockgeräte sind schnell gekauft, aber laut, und der Abluftschlauch im gekippten Fenster lässt warme Luft wieder herein. Eine Split-Anlage besteht aus einem leisen Innengerät und einem Außengerät, die über eine dünne Kältemittelleitung verbunden sind. Sie kühlt gleichmäßiger, verbraucht für dieselbe Leistung weniger Strom und ist im Schlafzimmer kaum zu hören.'],
      },
      {
        heading: 'Der richtige Platz für Innen- und Außengerät',
        text: ['Das Innengerät sollte die Luft frei in den Raum blasen können und nicht direkt auf Bett oder Schreibtisch gerichtet sein. Das Außengerät braucht einen festen, gut belüfteten Platz an der Fassade, auf dem Balkon oder am Boden. Wir achten auf kurze Leitungswege und darauf, dass das Gerät weder Sie noch Ihre Nachbarn stört.'],
      },
      {
        heading: 'Brauche ich eine Genehmigung?',
        text: ['Im eigenen Einfamilienhaus in der Regel nicht. In einer Eigentumswohnung muss die Eigentümergemeinschaft zustimmen, weil die Fassade verändert wird. Mieter brauchen die Erlaubnis des Vermieters, und bei denkmalgeschützten Gebäuden gelten zusätzliche Auflagen. Klären Sie das vor der Bestellung. Die nötigen Angaben zum Gerät bekommen Sie von uns.'],
      },
      {
        heading: 'Kühlen und heizen mit einem Gerät',
        text: ['Moderne Split-Anlagen sind Luft-Luft-Wärmepumpen. Sie kühlen im Sommer und können in der Übergangszeit auch heizen. Das ist praktisch für Dachgeschoss, Wintergarten oder Büro, wenn die Zentralheizung noch aus ist.'],
      },
      {
        heading: 'Einbau und Wartung',
        text: ['Kälteanlagen dürfen nur von zertifizierten Fachbetrieben installiert und in Betrieb genommen werden. Nach dem Einbau reicht es, die Filter des Innengeräts regelmäßig zu reinigen und die Anlage in festen Abständen warten zu lassen. So bleibt die Luft hygienisch und die Leistung erhalten.'],
      },
    ],
  },
};
