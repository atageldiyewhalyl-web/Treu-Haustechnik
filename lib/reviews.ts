/* The client's Google reviews, word for word (Google Business profile, read on 10 Oct 2026).
   Never edit or add a review here by hand: copy it from the profile. Surnames are shortened to an initial.
   `photo` is the reviewer's own profile picture from the same profile (public/assets/reviews); reviewers
   without one keep Google's default, a disc with their initial. */

export const REVIEW_SUMMARY = {
  rating: '4.8',   // written with a point at Raemer's request (German usage would be 4,8)
  count: 19,
  url: 'https://g.page/r/CV0izIXHjIWrEBM/review',
} as const;

export interface Review {
  name: string;
  when: string;
  stars: number;
  text: string;
  photo?: string;
}

export const REVIEWS: Review[] = [
  {
    name: 'Jörg V.',
    when: 'vor einem Jahr',
    stars: 5,
    text: 'Vielen Dank an die Treu Haustechnik.\nUnsere Heizungsanlage ist ausgefallen. Anfragen an über 6 Installationsbetriebe für die Montage einer neuen Heizungsanlage bei Temperaturen zwischen 1 und 15 Grad C. wurden abgelehnt.\nDie Firma Treu war nach kurzer Zeit bei uns und hat und perfekt  und ausführlich beraten und übers Wochende eine neue Heizung bestellt und sofort eingebaut. Es lief alles problemlos. Dieser Betrieb ist bestens zu empfehlen.\nDanke an den Betrieb !!!',
  },
  {
    name: 'M. K.',
    when: 'vor 11 Monaten',
    stars: 5,
    text: 'Ich bin rundum zufrieden! Der Herr Kumru war sehr freundlich, pünktlich und zuverlässig. Die Arbeit wurde schnell, sauber und professionell erledigt. Man merkt sofort, dass hier jemand mit Fachwissen und Erfahrung arbeitet. Auch der Preis war absolut fair. Ich kann den Service uneingeschränkt weiterempfehlen vielen Dank für die tolle Arbeit!',
  },
  {
    name: 'Thomas V.',
    when: 'vor 2 Jahren',
    stars: 5,
    photo: '/assets/reviews/thomas-v.jpg',
    text: 'Alles TOP!\nAuftrag war ein Bad und ein Gäste-WC zu sanieren, sowie alte Leitungen auf Notwendigkeit zu prüfen und deren Verlauf neu anzuordnen.\nDie Arbeiten wurden sehr zügig, zuverlässig und ordentlich ausgeführt. Sämtliche Schritte wurden erläutert, fachmännisch genau ausgeführt und dokumentiert. Hilfsbereit auch bei kleineren, nicht geplanten Nebenaufgaben. Wichtig für mich, dass die Absprachen stattfanden und eingehalten wurden. Auch als Mensch ein prima Kerl, danke nochmal.',
  },
  {
    name: 'Anna',
    when: 'vor 2 Jahren',
    stars: 5,
    photo: '/assets/reviews/anna.jpg',
    text: 'Zuverlässig, hervorragender Kundenservice und top Qualität! Von der einfachen Kontaktaufnahme bis hin zur finalen Installation, war alles erstklassig. Im ersten Gespräch wurden mir verschiedene Optionen erklärt und auch alle meine Fragen beantwortet. Die Heizung wurde schnell und äußerst professionell getauscht. Es wurde sauber gearbeitet und abschließend wurde mir sogar die Wartung erklärt.\nVielen Dank für die großartige Arbeit!',
  },
  {
    name: 'JL',
    when: 'vor einem Jahr',
    stars: 5,
    text: 'Schnelle und kompetente Hilfe bei einem Problem mit der Heizungsanlage.\nSehr empfehlenswerter und freundlicher Service. Gebe normalerweise keine Rezension ab, aber wir sind unglaublich begeistert und beeindruckt. In der heutigen Zeit schwer einen so guten und schnellen Service zu finden.',
  },
  {
    name: 'Mauro',
    when: 'vor einem Jahr',
    stars: 5,
    text: 'Starke Leistung!\n\nHeizungstausch in Altbau.\nSchnell, unkompliziert, gutes Preis-Leistungsverhältnis.\n\nAlles nicht mehr selbstverständlich!',
  },
  {
    name: 'Mehmet E.',
    when: 'vor einem Jahr',
    stars: 5,
    text: 'Kam auf Empfehlung zu diesem Betrieb, im Notfall super Erreichbarkeit, schnell vor Ort, Top Arbeit. Super Preis - Leistungsverhältnis. Gerne immer wieder',
  },
  {
    name: 'Ahmet D.',
    when: 'vor 2 Jahren',
    stars: 5,
    text: 'Die Wärmepumpe & Klimainstallation war perfekt! Vom professionellen Team bis zum effizienten Service - alles wie versprochen. Ich bin äußerst zufrieden und kann es nur wärmstens empfehlen!',
  },
  {
    name: 'M B',
    when: 'vor 2 Jahren',
    stars: 5,
    text: 'Schneller hätte man nicht reagieren können , als ich sie angerufen habe wegen meinem Rohrbruch zuhause sind sie am gleichen Tag gekommen und haben mein problem gelöst danke an das tolle Team 👍🏻',
  },
  {
    name: 'S. Reiter',
    when: 'vor 2 Jahren',
    stars: 5,
    text: 'Zuverlässig, sauber und freundlich. Dies war der Erste, aber sicher nicht der letzte Auftrag von uns!',
  },
];
