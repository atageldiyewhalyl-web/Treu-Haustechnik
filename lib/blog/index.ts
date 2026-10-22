/* The Ratgeber (guide) articles: app/ratgeber. The structure lives here; the wording is in de.ts (the
   public language) and en.ts (a development aid, like the rest of the English copy). */
import type { IconName } from '@/components/icons';
import type { Lang } from '@/lib/i18n';
import type { ReasonKey } from '@/lib/inquiry';
import type { ServiceSlug } from '@/lib/services';
import { de } from './de';
import { en } from './en';

export interface PostText {
  /** The page's h1 and its title in search results */
  title: string;
  /** Meta description: what the search result says under the title */
  description: string;
  /** The teaser on the cards */
  excerpt: string;
  alt: string;
  takeaways: string[];
  /** `text` comes before the list, `more` after it, then `table`, `image` and `cta` in that order.
      Paragraphs and list items may contain links written as [label](/path or https://…). */
  sections: PostSection[];
  /** Questions answered at the end of the article; also published as FAQPage structured data */
  faq?: { q: string; a: string }[];
}

export interface PostSection {
  heading: string;
  text?: string[];
  list?: string[];
  more?: string[];
  table?: { head: string[]; rows: string[][] };
  /** A photo shown after the section's text; `credit` names the photographer */
  image?: { src: string; alt: string; caption: string; credit?: string };
  /** A call to action inside the article, matched to what the section is about */
  cta?: PostCta;
}

export interface PostCta {
  icon: IconName;
  title: string;
  text: string;
  /** The main button goes to the inquiry form at the end of the page */
  inquiry: string;
  /** A second, quieter link: a service page or the phone number */
  more?: { label: string; href: string };
}

const IMG = '/assets/img';

/** Newest first. `service` is the group the article belongs to, `href` where its "more about this" link goes,
    `reason` the inquiry category the form under the article starts with. */
export const POSTS = [
  { slug: 'f-gase-verordnung-2027', image: `${IMG}/blog-f-gase-2027.jpg`, service: 'klima', href: '/klima', reason: 'klima', date: '2026-10-22' },
  { slug: 'waermepumpe-im-altbau', image: `${IMG}/hero-service.jpg`, service: 'heizung', href: '/heizung#waermepumpe', reason: 'waermepumpe', date: '2026-10-10' },
  { slug: 'heizung-faellt-aus-was-tun', image: `${IMG}/blog-heizung-ausfall.jpg`, service: 'notdienst', href: '/notdienst', reason: 'service', date: '2026-10-10' },
  { slug: 'badsanierung-ablauf-dauer-fehler', image: `${IMG}/blog-badsanierung.jpg`, service: 'sanitaer-bad', href: '/sanitaer-bad#badsanierung', reason: 'badsanierung', date: '2026-10-10' },
  { slug: 'hartes-wasser-mannheim-kalk', image: `${IMG}/blog-kalk.jpg`, service: 'sanitaer-bad', href: '/sanitaer-bad#wasseraufbereitung', reason: 'sonstige', date: '2026-10-10' },
  { slug: 'klimaanlage-nachruesten-split-anlage', image: `${IMG}/blog-klimaanlage.jpg`, service: 'klima', href: '/klima', reason: 'klima', date: '2026-10-10' },
] as const satisfies readonly { slug: string; image: string; service: ServiceSlug; href: string; reason: ReasonKey; date: string }[];

export type PostSlug = (typeof POSTS)[number]['slug'];
export type Post = (typeof POSTS)[number] & PostText & { minutes: number };

const TEXTS: Record<Lang, Record<PostSlug, PostText>> = { de, en };

/** Reading time at about 200 words a minute. */
function minutes({ excerpt, takeaways, sections, faq = [] }: PostText) {
  const words = [
    excerpt, ...takeaways,
    ...sections.flatMap(({ heading, text = [], list = [], more = [], table }) => [heading, ...text, ...list, ...more, ...(table?.rows.flat() ?? [])]),
    ...faq.flatMap(({ q, a }) => [q, a]),
  ].join(' ').replace(/\]\([^)\s]+\)/g, ']').split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}

export const postsFor = (lang: Lang): Post[] => POSTS.map((post) => ({ ...post, ...TEXTS[lang][post.slug], minutes: minutes(TEXTS[lang][post.slug]) }));
export const getPost = (lang: Lang, slug: string) => postsFor(lang).find((post) => post.slug === slug);

export const formatDate = (lang: Lang, date: string) =>
  new Intl.DateTimeFormat(lang === 'de' ? 'de-DE' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(date));
