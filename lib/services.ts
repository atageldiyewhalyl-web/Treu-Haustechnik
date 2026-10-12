/* The four service groups, each with its own landing page (app/[service]/page.tsx), and every
   sub-service the client offers. Structure only: the wording lives in lib/i18n (services.<slug>). */
import type { IconName } from '@/components/icons';
import type { Copy } from './i18n';
import type { ReasonKey } from './inquiry';

export type ServiceSlug = keyof Copy['services'];

export interface Service {
  slug: ServiceSlug;
  icon: IconName;
  hero: string;
  /** Photo on the service's card in the homepage hero */
  card: string;
  /** Part of the hero photo to keep in view when cropped (CSS object-position) */
  heroFocus?: string;
  /** Inquiry category the form starts with on this page */
  reason: ReasonKey;
  /** Sub-services: `id` is the anchor on the page and the key of its wording */
  items: { id: string; icon: IconName }[];
  /** Photo of the photo-with-text band below the list */
  bandImage: string;
}

const IMG = '/assets/img';

export const SERVICES: Service[] = [
  {
    slug: 'heizung',
    icon: 'flame',
    hero: `${IMG}/hero-heizung.jpg`,
    card: `${IMG}/svc-heizung.jpg`,
    reason: 'heizungsaustausch',
    items: [
      { id: 'heizungsmodernisierung', icon: 'radiator' },
      { id: 'waermepumpe', icon: 'fan' },
      { id: 'gasheizung', icon: 'flame' },
      { id: 'oelheizung', icon: 'fuel' },
    ],
    bandImage: `${IMG}/svc-wartung.jpg`,
  },
  {
    slug: 'sanitaer-bad',
    icon: 'bath',
    hero: `${IMG}/hero-sanitaer-bad.jpg`,
    card: `${IMG}/svc-bad.jpg`,
    reason: 'badsanierung',
    items: [
      { id: 'badsanierung', icon: 'bath' },
      { id: 'luxusbad', icon: 'sparkles' },
      { id: 'barrierefrei', icon: 'accessibility' },
      { id: 'trinkwasser', icon: 'glass' },
      { id: 'abwasser', icon: 'waves' },
      { id: 'wasseraufbereitung', icon: 'filter' },
    ],
    bandImage: `${IMG}/svc-barrierefrei.jpg`,
  },
  {
    slug: 'klima',
    icon: 'snowflake',
    hero: `${IMG}/hero-klima.jpg`,
    card: `${IMG}/svc-klima.jpg`,
    heroFocus: '70% 8%',
    reason: 'klima',
    items: [
      { id: 'split-klimaanlagen', icon: 'airvent' },
      { id: 'wartung-reinigung', icon: 'sparkles' },
    ],
    bandImage: `${IMG}/svc-klima.jpg`,
  },
  {
    slug: 'notdienst',
    icon: 'alert',
    hero: `${IMG}/hero-notdienst.jpg`,
    card: `${IMG}/svc-notdienst.jpg`,
    reason: 'service',
    items: [
      { id: 'heizungsausfall', icon: 'thermometer' },
      { id: 'wasserschaden', icon: 'droplets' },
      { id: 'rohrbruch', icon: 'alert' },
      { id: 'kein-warmwasser', icon: 'droplet' },
      { id: 'verstopfung', icon: 'waves' },
    ],
    bandImage: `${IMG}/svc-notdienst.jpg`,
  },
];

export const getService = (slug: string) => SERVICES.find((service) => service.slug === slug);

/** A sub-service's title and text in the given copy. */
export const itemCopy = (copy: Copy, slug: ServiceSlug, id: string) =>
  (copy.services[slug].items as Record<string, { title: string; text: string }>)[id];

/** The image cards of the homepage carousel: the most asked-for services, each leading to its group's page.
    Same order as `carousel.cards` in the copy. */
export const SERVICE_CARDS: { image: string; group: ServiceSlug; anchor?: string; icon: IconName }[] = [
  { image: `${IMG}/svc-waermepumpe-indoor.png`, group: 'heizung', anchor: 'waermepumpe', icon: 'fan' },
  { image: `${IMG}/svc-heizung.jpg`, group: 'heizung', anchor: 'heizungsmodernisierung', icon: 'radiator' },
  { image: `${IMG}/svc-bad.jpg`, group: 'sanitaer-bad', anchor: 'badsanierung', icon: 'bath' },
  { image: `${IMG}/svc-barrierefrei.jpg`, group: 'sanitaer-bad', anchor: 'barrierefrei', icon: 'accessibility' },
  { image: `${IMG}/svc-klima.jpg`, group: 'klima', icon: 'snowflake' },
  { image: `${IMG}/svc-wasser.jpg`, group: 'sanitaer-bad', anchor: 'trinkwasser', icon: 'droplet' },
  { image: `${IMG}/svc-wartung.jpg`, group: 'heizung', anchor: 'gasheizung', icon: 'flame' },
  { image: `${IMG}/svc-notdienst.jpg`, group: 'notdienst', icon: 'alert' },
];
