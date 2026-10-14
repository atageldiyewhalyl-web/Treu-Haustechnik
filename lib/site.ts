/* Company facts, taken from the client's Impressum and Google Business profile. */

const ADDRESS_QUERY = encodeURIComponent('Treu Haustechnik, Morgenröte 14, 68305 Mannheim');

export const SITE = {
  name: 'Treu Haustechnik',
  legalName: 'Treu Haustechnik e.K.',
  url: 'https://www.treu-haustechnik.de',
  owner: 'Emircan Kumru',
  ownerTitle: 'Installateur- und Heizungsbaumeister',
  masterSince: 2023,
  street: 'Morgenröte 14',
  zip: '68305',
  city: 'Mannheim',
  district: 'Mannheim-Gartenstadt',
  phone: '+49 179 6952277',
  phoneHref: 'tel:+491796952277',
  email: 'info@treuhaustechnik.de',
  whatsapp: 'https://wa.me/491796952277',
  instagram: 'https://www.instagram.com/treuhaustechnik',
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${ADDRESS_QUERY}`,
  mapsEmbed: `https://www.google.com/maps?q=${ADDRESS_QUERY}&z=15&output=embed`,
} as const;

/** Agency credit in the footer, in English on every language version. */
export const CREDIT = {
  label: 'Site made by',
  name: 'nüll.',
  url: 'https://xn--nll-hoa.com/',
} as const;

/** The site-wide "Anfrage stellen" target: the inquiry form at the end of the current page. */
export const INQUIRY_ANCHOR = '#anfrage';
