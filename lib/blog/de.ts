/* Ratgeber articles, German (the public wording). Rules: no prices, no subsidy figures, no promises the
   business has not made elsewhere on the site; {phone} is filled in from lib/site.ts; links are written
   as [label](/path or https://…) inside paragraphs and list items.
   Before launch the owner should read each article once: they speak in his name. */
import type { PostSlug, PostText } from '.';

export const de: Record<PostSlug, PostText> = {
  'heizung-winterfit-machen': {
    title: 'Heizung winterfit machen: Die Checkliste',
    description: 'Heizung winterfit machen in 8 Schritten: entlüften, Druck prüfen, Thermostate testen. Die Checkliste vom Mannheimer Meisterbetrieb mit Spartipps.',
    excerpt: 'Bevor es richtig kalt wird, lohnt sich ein kurzer Check der Heizung. Vieles prüfen Sie in einer halben Stunde selbst. Unsere Checkliste zeigt, worauf es ankommt und wann Sie besser uns anrufen.',
    alt: 'Hand stellt das Thermostat an einem Heizkörper ein',
    takeaways: [
      'Testen Sie die Heizung an einem milden Herbsttag: alle Thermostate auf, eine Stunde laufen lassen, dann durch alle Räume gehen.',
      'Erst entlüften, dann den Druck prüfen. In vielen Einfamilienhäusern liegt er zwischen 1,5 und 2 bar, maßgeblich ist der Wert des Herstellers.',
      'Arbeiten am Brenner, an Gasleitungen oder am Kältekreis einer Wärmepumpe gehören in Fachhände.',
    ],
    sections: [
      {
        heading: 'Warum sich der Heizungscheck im Herbst lohnt',
        text: [
          'Über den Sommer steht die Heizung still oder macht nur Warmwasser. In dieser Zeit setzen sich Ventile fest, Luft sammelt sich in den Leitungen, und der Druck sinkt langsam ab. Das merken Sie oft erst am ersten kalten Abend, wenn ein Heizkörper kalt bleibt.',
          'Mit einem kurzen Check im Oktober oder November finden Sie solche Kleinigkeiten, bevor sie lästig werden. Für die meisten Punkte brauchen Sie kein Werkzeug außer einem Entlüftungsschlüssel und einem Tuch.',
        ],
      },
      {
        heading: 'Heizung winterfit machen: die Checkliste in 8 Schritten',
        list: [
          'Testen Sie die Heizung an einem milden Tag. Drehen Sie alle Thermostate auf, lassen Sie die Heizung etwa eine Stunde laufen und gehen Sie dann durch alle Räume. So sehen Sie sofort, welcher Heizkörper nicht richtig warm wird.',
          'Drehen Sie jeden Thermostatkopf einmal ganz auf und wieder zu. Nach dem Sommer klemmt der Ventilstift darunter manchmal, und der Heizkörper bleibt trotz aufgedrehtem Thermostat kalt.',
          'Entlüften Sie Heizkörper, die gluckern oder oben kalt bleiben. Schalten Sie die Heizung dafür etwa eine halbe Stunde vorher aus, damit sich die Luft oben sammelt. Öffnen Sie dann mit dem Entlüftungsschlüssel das kleine Ventil oben an der Seite, halten Sie ein Tuch darunter und schließen Sie es, sobald Wasser statt Luft austritt. Vorsicht, das Wasser kann heiß sein.',
          'Prüfen Sie erst danach den Anlagendruck am Manometer. In vielen Einfamilienhäusern liegt er im Betrieb zwischen 1,5 und 2 bar, maßgeblich ist aber der Wert, den Hersteller oder Installateur vorgeben. Liegt er deutlich darunter, fehlt Wasser im System. Behalten Sie den Druck auch in den Tagen danach im Blick.',
          'Machen Sie die Heizkörper frei und wischen Sie den Staub zwischen den Lamellen ab. Lange Vorhänge, Sofas oder Wäscheständer direkt davor halten die Wärme zurück.',
          'Schauen Sie aufs Display der Heizung. Steht dort eine Störungs- oder Wartungsmeldung, notieren Sie den Code. Damit können wir am Telefon oft schon einschätzen, worum es geht.',
          'Prüfen Sie die Zeitprogramme. Nach der Zeitumstellung Ende Oktober stimmt die Uhr der Heizung nicht immer. Passt die Nachtabsenkung noch zu Ihrem Alltag, und ist die Sommerabschaltung aufgehoben?',
          'Kontrollieren Sie bei einer Wärmepumpe das Außengerät, und werfen Sie einen Blick unter Heizung, Speicher und Ventile. Laub darf die Luftansaugung nicht verdecken, und feuchte Stellen oder Tropfen deuten auf eine Undichtigkeit hin.',
        ],
        image: { src: '/assets/img/blog-heizungscheck-heizkoerper.jpg', alt: 'Weißer Heizkörper mit Thermostatkopf an einer hellen Wand', caption: 'Nach dem Sommer klemmt der Ventilstift unter dem Thermostatkopf manchmal. Einmal ganz auf- und zudrehen hilft oft.', credit: 'Patrycja Grobelny / Pexels' },
      },
      {
        heading: 'Heizung Wasser nachfüllen: so geht es richtig',
        text: [
          'Fehlt Druck, wird Wasser über den Füll- und Entleerhahn nachgefüllt, meist mit einem Schlauch vom Wasserhahn. Füllen Sie den Schlauch vorher mit Wasser, damit keine Luft ins System gelangt, und füllen Sie nur so lange nach, bis der Sollwert erreicht ist.',
          'Viele neuere Heizungen brauchen aufbereitetes Heizungswasser, weil Kalk und Sauerstoff dem Wärmetauscher schaden. Bei hartem Wasser wie in Mannheim ist das besonders wichtig. Mehr dazu lesen Sie in unserem Beitrag [Hartes Wasser in Mannheim](/ratgeber/hartes-wasser-mannheim-kalk). Wenn Sie unsicher sind, lassen Sie das Nachfüllen bei der Wartung erledigen.',
          'Müssen Sie häufig nachfüllen, zum Beispiel mehrmals im Jahr, verliert die Anlage irgendwo Wasser oder das Ausdehnungsgefäß arbeitet nicht mehr richtig. Das sollte sich eine Fachkraft ansehen.',
        ],
      },
      {
        heading: 'Einstellungen, die Heizkosten sparen',
        text: [
          'Eine Heizung arbeitet am sparsamsten, wenn sie das Wasser nur so warm macht wie nötig. Ob die Heizkurve passt, merken Sie daran, ob alle Räume mit aufgedrehtem Thermostat angenehm warm werden, ohne dass die Heizung ständig auf Hochtouren läuft.',
          'Werden einzelne Räume nie richtig warm, während andere überheizen, steckt oft ein fehlender hydraulischer Abgleich dahinter. Dann nützt es wenig, die Heizkurve einfach höher zu stellen.',
          'Bei Wärmepumpen und Fußbodenheizungen sind gleichmäßige Temperaturen oft sparsamer als eine starke Nachtabsenkung.',
          'Beim Warmwasser sollten Sie dagegen nicht zu viel sparen. Bei einer zentralen Warmwasserbereitung sollte das Wasser am Speicher mindestens 60 °C erreichen, damit sich keine Legionellen vermehren.',
        ],
      },
      {
        heading: 'Was in Fachhände gehört',
        text: ['Einige Arbeiten sollten Sie nicht selbst übernehmen, auch wenn es verlockend ist:'],
        list: [
          'alles am Brenner, an der Gasleitung und an der Abgasführung',
          'der Kältekreis einer Wärmepumpe',
          'ein tropfendes Sicherheitsventil oder ein Druck, der immer wieder abfällt',
          'Störungen, die nach einem Neustart sofort wiederkommen',
        ],
        more: [
          'Bei Gasgeruch gilt: keine Lichtschalter und keine Klingel betätigen, Fenster öffnen, das Haus verlassen und von draußen den Störungsdienst Ihres Gasnetzbetreibers anrufen.',
          'Der Check ersetzt keine Wartung, er zeigt Ihnen nur, ob alles normal läuft. Fällt die Heizung trotz allem aus, hilft Ihnen unser Beitrag [Heizung fällt aus](/ratgeber/heizung-faellt-aus-was-tun) weiter.',
        ],
        cta: {
          icon: 'wrench',
          title: 'Heizung läuft nicht rund?',
          text: 'Wir warten Gas- und Ölheizungen in Mannheim und Umgebung und kümmern uns um Störungen. Nennen Sie uns kurz den Fehlercode oder schicken Sie ein Foto vom Display, dann melden wir uns mit einer Einschätzung.',
          inquiry: 'Termin anfragen',
          more: { label: 'Zum Notdienst', href: '/notdienst' },
        },
      },
    ],
    faq: [
      { q: 'Wann sollte ich die Heizung winterfit machen?', a: 'Am besten im September oder Oktober, bevor es dauerhaft kalt wird. Dann bleibt Zeit, kleine Probleme in Ruhe zu beheben, und Fachbetriebe haben eher freie Termine als mitten im Winter.' },
      { q: 'Wie oft sollte ich Heizkörper entlüften?', a: 'In der Regel einmal zu Beginn der Heizperiode und immer dann, wenn ein Heizkörper gluckert oder oben kalt bleibt. Müssen Sie sehr häufig entlüften, gelangt laufend Luft ins System. Dann sollte eine Fachkraft nach der Ursache suchen.' },
      { q: 'Muss die Heizung zum Entlüften ausgeschaltet sein?', a: 'Am besten schalten Sie die Heizung etwa eine halbe Stunde vorher aus. Dann sammelt sich die Luft oben im Heizkörper, und es tritt weniger heißes Wasser aus. Danach schalten Sie die Heizung wieder ein und prüfen den Druck.' },
      { q: 'Welcher Druck ist bei der Heizung normal?', a: 'Bei vielen Einfamilienhäusern liegt der Betriebsdruck zwischen 1,5 und 2 bar. Der richtige Wert hängt aber von der Anlage und der Gebäudehöhe ab und ist oft am Manometer markiert oder in den Unterlagen vermerkt. Fällt der Druck immer wieder ab, sollte die Anlage geprüft werden.' },
      { q: 'Was tun, wenn ein Heizkörper trotz Entlüften kalt bleibt?', a: 'Prüfen Sie zuerst, ob der Ventilstift unter dem Thermostatkopf klemmt. Bleibt der Heizkörper trotzdem kalt, kann ein fehlender hydraulischer Abgleich, eine falsch eingestellte Pumpe oder ein defektes Ventil dahinterstecken. Das finden wir bei einem Termin vor Ort heraus.' },
      { q: 'Ersetzt der Heizungscheck die Wartung?', a: 'Nein. Der Check zeigt Ihnen, ob alles normal läuft. Bei der Wartung werden Brenner, Wärmetauscher und Sicherheitseinrichtungen gereinigt und geprüft und die Verbrennungswerte eingestellt. Das sollte eine Fachkraft übernehmen.' },
    ],
  },
  'f-gase-verordnung-2027': {
    title: 'F-Gase-Verordnung 2027: Wärmepumpe & Klima',
    description: 'Ab 2027 gelten strengere Regeln für Kältemittel in Wärmepumpen und Klimaanlagen. Was neu ist, was erlaubt bleibt und was das für Mannheim heißt.',
    excerpt: 'Zum 1. Januar 2027 wird die EU-F-Gase-Verordnung wieder strenger. Viele neue Wärmepumpen kommen dann nur noch mit klimafreundlichen Kältemitteln wie Propan in den Handel. Ihre vorhandene Anlage betrifft das nicht. Wir erklären, was sich ändert und worauf Sie in Mannheim achten sollten.',
    alt: 'Außengerät einer modernen Wärmepumpe im Garten vor einem Wohnhaus',
    takeaways: [
      'Neue Monoblock-Wärmepumpen bis 50 kW und neue Split-Wärmepumpen (Luft/Wasser) bis 12 kW dürfen ab 2027 nur noch Kältemittel mit einem GWP unter 150 enthalten. Meist ist das Propan (R290).',
      'Ihre vorhandene Wärmepumpe oder Klimaanlage darf weiterlaufen und wie gewohnt gewartet und repariert werden, auch mit R32 oder R410A.',
      'Für neue Split-Klimaanlagen bis 12 kW gilt die Grenze erst ab 2029. Geräte mit R32 bekommen Sie also noch bis Ende 2028.',
    ],
    sections: [
      {
        heading: 'Was regelt die F-Gase-Verordnung?',
        text: [
          'Die [Verordnung (EU) 2024/573](https://eur-lex.europa.eu/eli/reg/2024/573/oj) regelt fluorierte Treibhausgase, kurz F-Gase. Diese Gase stecken als Kältemittel in fast jeder Klimaanlage und in vielen Wärmepumpen. Die Verordnung gilt seit dem 11. März 2024 direkt in allen EU-Staaten, Deutschland muss dafür kein eigenes Gesetz erlassen. Sie ersetzt die Vorgängerregelung von 2014 und ist deutlich strenger.',
          'Wie klimaschädlich ein Kältemittel ist, zeigt der GWP-Wert (Global Warming Potential, auf Deutsch Treibhauspotenzial). Er gibt an, wie stark ein Kilogramm des Gases zur Erderwärmung beiträgt, verglichen mit einem Kilogramm CO₂. Diese drei Kältemittel begegnen uns in der Praxis am häufigsten:',
        ],
        list: [
          'R410A hat einen GWP von 2.088 und steckt in vielen älteren Klimaanlagen und Wärmepumpen.',
          'R32 hat einen GWP von 675 und ist heute Standard in Split-Klimaanlagen und vielen Split-Wärmepumpen.',
          'R290, also Propan, hat einen GWP von 3. Es ist ein natürliches Kältemittel und steckt schon in den meisten neuen Monoblock-Wärmepumpen.',
        ],
        more: ['Die Verordnung setzt an zwei Stellen an: Sie verbietet Schritt für Schritt den Verkauf neuer Geräte mit klimaschädlichen Kältemitteln und begrenzt, wie viel F-Gas überhaupt noch auf den Markt kommen darf.'],
      },
      {
        heading: 'Was ändert sich am 1. Januar 2027?',
        text: ['Ab diesem Tag dürfen die folgenden Geräte nur noch neu auf den Markt kommen, wenn ihr Kältemittel unter der jeweiligen GWP-Grenze liegt:'],
        table: {
          head: ['Gerät', 'Grenze ab 1. Januar 2027', 'Was das bedeutet'],
          rows: [
            ['Monoblock-Wärmepumpen und andere kompakte Klimageräte bis 50 kW, auch mobile Geräte für die Steckdose', 'GWP unter 150', 'Kein R32 mehr, meist kommt Propan zum Einsatz'],
            ['Split-Wärmepumpen (Luft/Wasser) bis 12 kW', 'GWP unter 150', 'Neue Split-Wärmepumpen mit R32 für das Einfamilienhaus gibt es nicht mehr'],
            ['Kaltwassersätze bis 12 kW', 'GWP unter 150', 'Betrifft vor allem Gewerbe'],
            ['Kaltwassersätze über 12 kW', 'GWP unter 750', 'R32 ist hier weiter möglich'],
          ],
        },
        more: [
          'Für kompakte Geräte und Split-Wärmepumpen gibt es eine Ausnahme, wenn ein Kältemittel mit niedrigem GWP die Sicherheitsvorgaben am Aufstellort nicht erfüllen kann. Bei kompakten Geräten gilt dann eine Grenze von 750. Die Ausnahme muss im Einzelfall begründet werden. Für den normalen Einbau im Einfamilienhaus spielt sie kaum eine Rolle.',
          'Wer ab 2027 eine neue Wärmepumpe für sein Einfamilienhaus kauft, bekommt also fast immer ein Gerät mit Propan oder einem anderen Kältemittel mit sehr niedrigem GWP. Bei Monoblock-Geräten ist das heute schon üblich. Am meisten ändert sich bei Split-Wärmepumpen, bei denen Kältemittelleitungen ins Haus führen. Viele davon arbeiten bisher mit R32.',
        ],
        image: { src: '/assets/img/blog-f-gase-monoblock.jpg', alt: 'Monoblock-Wärmepumpe auf dem Rasen vor einem modernen Gebäude', caption: 'Monoblock-Wärmepumpe: Ab 2027 kommen solche Geräte meist mit Propan.', credit: 'alpha innotec / Pexels' },
      },
      {
        heading: 'Was 2027 nicht verboten wird',
        text: ['Verboten wird das Inverkehrbringen, also der erste Verkauf neuer Geräte in der EU. Der Betrieb vorhandener Anlagen bleibt erlaubt. Für Sie bedeutet das:'],
        list: [
          'Ihre Anlage darf weiterlaufen. Niemand muss 2027 eine funktionierende Klimaanlage oder Wärmepumpe austauschen.',
          'Wartung und Reparatur bleiben erlaubt. Seit dem 1. Januar 2026 darf bei der Wartung von Klimaanlagen und Wärmepumpen zwar kein frisches Kältemittel mit einem GWP ab 2.500 mehr eingefüllt werden. R410A (2.088) und R32 (675) liegen aber darunter und dürfen weiter nachgefüllt werden. Auch Ersatzteile sind erlaubt, solange die Reparatur die Leistung oder die Kältemittelmenge der Anlage nicht erhöht.',
          'Split-Klimaanlagen mit R32 bekommen Sie weiterhin. Für Split-Klimaanlagen (Luft/Luft) bis 12 kW, also die typische Klimaanlage für Schlafzimmer, Büro oder Dachgeschoss, gilt die Grenze von 150 erst ab dem 1. Januar 2029. Wer 2027 oder 2028 eine Klimaanlage nachrüstet, kann also noch ein Gerät mit R32 wählen.',
        ],
        more: ['Geräte, die schon vor dem Stichtag in der EU auf den Markt gekommen sind, dürfen nach gängiger Auslegung auch danach noch verkauft und eingebaut werden. Lagerware ist also erlaubt.'],
        image: { src: '/assets/img/blog-f-gase-split-innengeraet.jpg', alt: 'Innengerät einer Split-Klimaanlage an der Wand', caption: 'Innengerät einer Split-Klimaanlage: Geräte mit R32 gibt es noch bis Ende 2028.', credit: 'NEOSiAM 18+ / Pexels' },
        cta: {
          icon: 'wrench',
          title: 'Ihre Anlage läuft mit R32 oder R410A?',
          text: 'Dann darf sie weiterlaufen. Damit das lange so bleibt, sollte sie regelmäßig gewartet werden. Wir warten Klimaanlagen und Wärmepumpen in Mannheim und Umgebung. Schicken Sie uns am besten ein Foto vom Typenschild mit.',
          inquiry: 'Wartung anfragen',
          more: { label: 'Mehr zu Klimaanlagen', href: '/klima' },
        },
      },
      {
        heading: 'Der Fahrplan bis 2035',
        text: ['Auf 2027 folgen weitere Stufen. Für Klimaanlagen und Wärmepumpen sieht der Zeitplan so aus:'],
        list: [
          '**Seit 2025:** Keine neuen Klimaanlagen mit nur einem Innengerät (Mono-Split), wenn sie weniger als 3 kg eines Kältemittels mit GWP ab 750 enthalten, zum Beispiel R410A.',
          '**Seit 2026:** Bei der Wartung von Klimaanlagen und Wärmepumpen darf kein frisches Kältemittel mit GWP ab 2.500 mehr eingefüllt werden.',
          '**2027:** Grenze von 150 für Monoblock-Geräte bis 50 kW und Split-Wärmepumpen (Luft/Wasser) bis 12 kW.',
          '**2029:** Grenze von 150 für Split-Klimaanlagen (Luft/Luft) bis 12 kW und Grenze von 750 für Split-Anlagen über 12 kW.',
          '**2030:** Grenze von 150 auch für kompakte Anlagen über 50 kW.',
          '**2032:** Mobile Klimageräte sowie Monoblock-Klimaanlagen und Monoblock-Wärmepumpen bis 12 kW nur noch ganz ohne F-Gase. Bei der Wartung ist dann auch aufbereitetes Kältemittel mit GWP ab 2.500 nicht mehr erlaubt.',
          '**2033:** Grenze von 150 für Split-Anlagen über 12 kW.',
          '**2035:** Neue Split-Klimaanlagen und Split-Wärmepumpen bis 12 kW nur noch ganz ohne F-Gase.',
        ],
        more: ['Bis 2030 überprüft die EU-Kommission, wie die Verbote wirken, und kann Änderungen vorschlagen. Einzelne Termine nach 2030 können sich also noch verschieben. Dass klimaschädliche Kältemittel nach und nach verschwinden, steht aber fest.'],
      },
      {
        heading: 'Warum Kältemittel ab 2027 knapper werden',
        text: [
          'Neben den Verboten legt die Verordnung fest, wie viel teilfluorierte Kältemittel (HFKW) insgesamt in der EU verkauft werden dürfen. In den Jahren 2025 und 2026 sind das rund 42,9 Millionen Tonnen CO₂-Äquivalent. Von 2027 bis 2029 sind es nur noch rund 21,7 Millionen Tonnen, also fast die Hälfte weniger. Bis 2050 sinkt die Menge auf null.',
          'Wenn Sie eine Anlage mit R32 oder R410A betreiben, dürfen Sie diese Kältemittel weiter nachfüllen lassen. Sie werden aber knapper, und die Branchenverbände rechnen mit steigenden Preisen. Eine dichte und regelmäßig gewartete Anlage, die kein Kältemittel verliert, spart deshalb ab 2027 bares Geld.',
        ],
        image: { src: '/assets/img/blog-f-gase-kaeltemittel.jpg', alt: 'Fachkraft befüllt eine Anlage mit Kältemittel aus einer Kältemittelflasche', caption: 'Kältemittel wird knapper und damit teurer.', credit: 'Bulat843 / Pexels' },
      },
      {
        heading: 'Dichtheitsprüfung: Betrifft das Ihre Anlage?',
        text: ['Eine regelmäßige Dichtheitsprüfung ist Pflicht, sobald eine Anlage Kältemittel im Umfang von mindestens 5 Tonnen CO₂-Äquivalent enthält. Bei hermetisch geschlossenen Geräten mit entsprechender Kennzeichnung liegt die Schwelle bei 10 Tonnen. Ab 5 Tonnen muss alle 12 Monate geprüft werden, mit einem fest eingebauten System zur Lecksuche alle 24 Monate. Ob Ihre Anlage betroffen ist, können Sie selbst ausrechnen. Multiplizieren Sie dazu die Füllmenge in Kilogramm vom Typenschild mit dem GWP-Wert des Kältemittels.'],
        list: [
          'Bei R32 liegt die Grenze bei rund 7,4 kg Füllmenge. Eine normale Split-Klimaanlage im Wohnhaus enthält deutlich weniger und muss deshalb nicht geprüft werden.',
          'Bei R410A ist die Grenze schon bei rund 2,4 kg erreicht. Ältere Anlagen mit mehreren Innengeräten (Multi-Split) können darüber liegen.',
        ],
        more: ['Wenn Sie unsicher sind, schauen Sie auf das Typenschild am Außengerät oder in die [Erläuterungen des Umweltbundesamts zu Dichtheitskontrollen](https://www.umweltbundesamt.de/themen/klima-energie/fluorierte-treibhausgase-fckw/rechtliche-regelungen/haeufig-gestellte-fragen-zur-f-gas-verordnung/abschnitt-2-dichtheitskontrollen). Wir empfehlen die regelmäßige Wartung auch dann, wenn sie nicht vorgeschrieben ist. Mit sauberen Filtern und einem dichten Kältekreis bleiben Leistung und Stromverbrauch so, wie sie sein sollen.'],
        image: { src: '/assets/img/blog-f-gase-dichtheit.jpg', alt: 'Monteur prüft den Kältekreis mit einer Manometer-Messbrücke', caption: 'Prüfung des Kältekreises mit der Manometer-Messbrücke.', credit: 'José Andrés Pacheco Cortes / Pexels' },
      },
      {
        heading: 'Was das für Hausbesitzer in Mannheim bedeutet',
        text: [
          'Viele Mannheimer Haushalte beschäftigen sich gerade ohnehin mit ihrer Heizung. Der [kommunale Wärmeplan](https://www.mannheim.de/de/service-bieten/mannheim-auf-klimakurs/waermeplanung), den der Gemeinderat im März 2024 beschlossen hat, setzt auf Fernwärme und Wärmepumpen. Der Energieversorger MVV will das Gasnetz bis 2035 stilllegen. Einen festen Termin dafür hat der Gemeinderat allerdings [nicht beschlossen](https://www.mannheim.de/de/nachrichten/gemeinderat-kein-fester-termin-fuer-gasausstieg). Wo keine Fernwärme anliegt, wird es für viele Ein- und Zweifamilienhäuser auf eine Wärmepumpe hinauslaufen. Mit welchem Kältemittel sie arbeitet, bestimmen die neuen Regeln ab 2027.',
          'Für ältere Häuser hat das einen Vorteil. Wärmepumpen mit Propan schaffen höhere Vorlauftemperaturen als viele ältere Geräte mit R32. Das hilft in Häusern mit klassischen Heizkörpern. Wie Sie selbst testen können, ob Ihr Haus für eine Wärmepumpe geeignet ist, lesen Sie in unserem Beitrag [Wärmepumpe im Altbau](/ratgeber/waermepumpe-im-altbau).',
          'Auch Klimaanlagen werden in der Rhein-Neckar-Region mit ihren heißen Sommern immer öfter nachgerüstet. Für sie ändert sich 2027 wenig, denn Split-Geräte mit R32 bleiben bis Ende 2028 erlaubt. Worauf Sie beim Nachrüsten achten sollten, lesen Sie in unserem Beitrag [Klimaanlage nachrüsten](/ratgeber/klimaanlage-nachruesten-split-anlage).',
        ],
        image: { src: '/assets/img/blog-f-gase-aufstellort.jpg', alt: 'Wärmepumpe neben dem Hauseingang zwischen Sträuchern', caption: 'Wo keine Fernwärme anliegt, ist die Wärmepumpe für viele Häuser in Mannheim die naheliegende Lösung.', credit: 'alpha innotec / Pexels' },
      },
      {
        heading: 'Jetzt kaufen oder warten?',
        text: ['Das hängt davon ab, was Sie vorhaben.'],
        list: [
          'Sie planen eine neue Wärmepumpe. Kaufen Sie kein Split-Gerät mit R32, nur um dem Stichtag zuvorzukommen. Mit einem Kältemittel unter GWP 150 sind Sie auch bei späteren Wartungen auf der sicheren Seite, wenn die alten Kältemittel knapper werden. Denken Sie außerdem an die Förderung. Die [KfW-Heizungsförderung (Programm 458)](https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestehende-Immobilie/F%C3%B6rderprodukte/Heizungsf%C3%B6rderung-f%C3%BCr-Privatpersonen-Wohngeb%C3%A4ude-(458)/) hat ihre Bedingungen im Juli 2026 geändert, und einzelne Bausteine werden ab dem 1. Februar 2027 schrittweise weniger. Wenn Sie ohnehin planen, fangen Sie deshalb lieber früh an. Den Antrag müssen Sie stellen, bevor die Arbeiten beginnen.',
          'Sie möchten eine Klimaanlage nachrüsten. Ein Split-Gerät mit R32 ist auch 2027 und 2028 eine gute Wahl. Fragen Sie trotzdem nach Geräten mit natürlichem Kältemittel, denn davon kommen immer mehr auf den Markt.',
          'Sie haben schon eine Anlage. Lassen Sie sie weiterlaufen und regelmäßig warten. Ist eine Anlage mit R410A 15 Jahre oder älter, planen Sie den Austausch besser in Ruhe als erst beim nächsten Ausfall. Reparaturen werden teurer, je knapper das Kältemittel wird.',
        ],
        cta: {
          icon: 'thermometer',
          title: 'Neue Wärmepumpe oder Klimaanlage geplant?',
          text: 'Wir beraten Sie, welches Gerät und welches Kältemittel zu Ihrem Haus passen, und erstellen Ihnen ein Angebot vom Meisterbetrieb. Ein paar Fotos vom geplanten Aufstellort helfen uns bei der ersten Einschätzung.',
          inquiry: 'Beratung anfragen',
          more: { label: 'Mehr zur Wärmepumpe', href: '/heizung#waermepumpe' },
        },
      },
      {
        heading: 'Wer darf an Kältemittelanlagen arbeiten?',
        text: ['Einbau, Wartung, Dichtheitsprüfung und das Absaugen von Kältemittel dürfen nur zertifizierte Fachkräfte und Betriebe übernehmen. Mit der neuen Verordnung gehören auch natürliche Kältemittel wie Propan und CO₂ ausdrücklich zur Ausbildung, weil für sie andere Sicherheitsregeln gelten. Händler dürfen Split-Geräte, die vor Ort befüllt oder angeschlossen werden müssen, an Privatkunden grundsätzlich nur verkaufen, wenn ein zertifizierter Betrieb den Einbau übernimmt und das nachgewiesen wird. Das gilt auch für Geräte mit vorbefüllten Leitungen, die im Internet angeboten werden.'],
      },
    ],
    faq: [
      { q: 'Ist R32 ab 2027 verboten?', a: 'Nein, nicht grundsätzlich. Ab 2027 dürfen neue Monoblock-Wärmepumpen bis 50 kW und neue Split-Wärmepumpen (Luft/Wasser) bis 12 kW kein R32 mehr enthalten. Split-Klimaanlagen mit R32 sind noch bis Ende 2028 erlaubt. Vorhandene Anlagen mit R32 dürfen ohne zeitliche Grenze weiterlaufen, gewartet und nachgefüllt werden.' },
      { q: 'Muss ich meine Klimaanlage oder Wärmepumpe 2027 austauschen?', a: 'Nein. Die F-Gase-Verordnung regelt den Verkauf neuer Geräte, nicht den Betrieb vorhandener Anlagen. Ihre Anlage darf weiterlaufen, gewartet und repariert werden. Ein Austausch lohnt sich erst, wenn das Gerät alt ist, oft ausfällt oder Reparaturen wegen teurer werdender Kältemittel unwirtschaftlich werden.' },
      { q: 'Darf meine R410A-Anlage noch nachgefüllt werden?', a: 'Ja. Seit 2026 ist bei der Wartung von Klimaanlagen und Wärmepumpen nur frisches Kältemittel mit einem GWP ab 2.500 verboten. R410A liegt mit 2.088 darunter. Weil die erlaubte Menge an F-Gasen ab 2027 fast halbiert wird, wird das Nachfüllen aber voraussichtlich teurer.' },
      { q: 'Welches Kältemittel ist zukunftssicher?', a: 'Natürliche Kältemittel wie Propan (R290, GWP 3) und CO₂ (R744, GWP 1). Sie fallen weder unter die Mengenbegrenzung noch unter die Verbote. Bei Monoblock-Wärmepumpen ist Propan schon heute üblich. Weil es brennbar ist, braucht es einen passenden Aufstellort und einen geschulten Fachbetrieb.' },
      { q: 'Gilt das auch für mobile Klimageräte?', a: 'Ja. Mobile Klimageräte für die Steckdose zählen zu den kompakten Geräten. Neue Geräte dürfen ab 2027 nur noch Kältemittel mit einem GWP unter 150 enthalten und ab 2032 gar keine F-Gase mehr. Die meisten mobilen Geräte im Handel arbeiten aber schon heute mit Propan.' },
      { q: 'Ist eine Wärmepumpe mit Propan gefährlich?', a: 'Nicht, wenn sie fachgerecht aufgestellt ist. Der Kältekreis ist geschlossen, und bei Monoblock-Geräten bleibt das Propan im Außengerät. Die Hersteller schreiben einen Schutzbereich vor, in dem keine Zündquellen, Kellerfenster oder Abläufe liegen dürfen. Deshalb legen wir den Aufstellort gemeinsam mit Ihnen fest, bevor das Gerät bestellt wird.' },
    ],
  },
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
        text: ['Vor jedem Angebot steht eine Heizlastberechnung. Sie zeigt, wie viel Wärme Ihr Haus tatsächlich braucht. Eine zu große Wärmepumpe schaltet ständig ein und aus und verschleißt schneller, eine zu kleine muss an Frosttagen elektrisch nachheizen. Bei Reihen- und Doppelhäusern kommt der Aufstellort des Außengeräts dazu: Die Abstände zum Nachbarn müssen passen, und unter dem Schlafzimmerfenster steht es besser nicht.', 'Warum neue Wärmepumpen ab 2027 meist mit Propan arbeiten, erklären wir im Beitrag zur [F-Gase-Verordnung 2027](/ratgeber/f-gase-verordnung-2027).'],
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
        more: ['Bei Gasgeruch gilt: keine Lichtschalter und keine Klingel betätigen, Fenster öffnen, das Haus verlassen und von draußen den Störungsdienst Ihres Gasnetzbetreibers anrufen. In allen anderen Fällen erreichen Sie unseren Notdienst rund um die Uhr unter {phone}.', 'Damit es gar nicht erst so weit kommt, hilft ein kurzer Check im Herbst. Wie das geht, lesen Sie in unserem Beitrag [Heizung winterfit machen](/ratgeber/heizung-winterfit-machen).'],
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
        text: ['Kälteanlagen dürfen nur von zertifizierten Fachbetrieben installiert und in Betrieb genommen werden. Nach dem Einbau reicht es, die Filter des Innengeräts regelmäßig zu reinigen und die Anlage in festen Abständen warten zu lassen. So bleibt die Luft hygienisch und die Leistung erhalten.', 'Welche Kältemittel ab 2027 noch erlaubt sind, lesen Sie in unserem Beitrag zur [F-Gase-Verordnung 2027](/ratgeber/f-gase-verordnung-2027).'],
      },
    ],
  },
};
