/* Treu Haustechnik: translations.
   German is the only public language. English is a development aid: the DEV switch sets a cookie
   that only `next dev` reads (lib/i18n/server.ts), so production pages stay static and German.
   Not translated on purpose: the Google reviews (quoted word for word), the legal pages, and the
   inquiry email with the server's own error messages (the owner reads German). */
import { de } from './de';
import { en } from './en';

export type Lang = 'de' | 'en';
export type Copy = typeof de;
/** The part of the copy that Client Components use at runtime. */
export type ClientCopy = Copy['client'];

export const LANG_COOKIE = 'treu-lang';

const dictionaries: Record<Lang, Copy> = { de, en };

export const copyFor = (lang: Lang): Copy => dictionaries[lang];

/** Fill {placeholders} in a translation ("Schritt {n} von {total}"). */
export const fill = (text: string, vars: Record<string, string | number>) =>
  text.replace(/\{(\w+)\}/g, (match, key: string) => (key in vars ? String(vars[key]) : match));
