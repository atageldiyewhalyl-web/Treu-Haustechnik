import 'server-only';
import { cache } from 'react';
import { cookies } from 'next/headers';
import { REVIEW_SUMMARY } from '@/lib/reviews';
import { SITE } from '@/lib/site';
import { LANG_COOKIE, copyFor, fill, type Lang } from '.';

/** German everywhere; `next dev` also honours the DEV switch cookie. The check is compiled out of
    production builds, so no page reads request data and every route is prerendered. */
export const getLang = cache(async (): Promise<Lang> => {
  if (process.env.NODE_ENV !== 'development') return 'de';
  return (await cookies()).get(LANG_COOKIE)?.value === 'en' ? 'en' : 'de';
});

export async function getCopy() {
  return copyFor(await getLang());
}

/** The company facts that translations refer to by {placeholder}. */
const FACTS = {
  phone: SITE.phone, year: SITE.masterSince, district: SITE.district, owner: SITE.owner, ownerTitle: SITE.ownerTitle, name: SITE.name,
  rating: REVIEW_SUMMARY.rating, count: REVIEW_SUMMARY.count,
};

/** Fill the company facts into a translation. */
export const facts = (text: string) => fill(text, FACTS);
