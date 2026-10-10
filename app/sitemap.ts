import type { MetadataRoute } from 'next';
import { POSTS } from '@/lib/blog';
import { SERVICES } from '@/lib/services';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', ...SERVICES.map(({ slug }) => `/${slug}`), '/ueber-uns', '/kontakt', '/ratgeber'];
  return [
    ...pages.map((path) => ({ url: `${SITE.url}${path}`, changeFrequency: 'monthly' as const, priority: path ? 0.8 : 1 })),
    ...POSTS.map(({ slug, date }) => ({ url: `${SITE.url}/ratgeber/${slug}`, lastModified: date, changeFrequency: 'yearly' as const, priority: 0.6 })),
  ];
}
