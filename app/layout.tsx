import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { ConsentProvider } from '@/components/consent';
import { DevBar } from '@/components/dev-bar';
import { I18nProvider } from '@/components/i18n';
import { Icon } from '@/components/icons';
import { Motion } from '@/components/motion';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { SmoothScroll } from '@/components/smooth-scroll';
import { getCopy, getLang } from '@/lib/i18n/server';
import { SITE } from '@/lib/site';
import './globals.css';

// Self-hosted by next/font: no request goes to Google
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
// Stand-in for the serif heading accents until the licensed Gooper web fonts are added (--font-serif in globals.css)
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', axes: ['SOFT', 'opsz'] });

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = await getCopy();
  return {
    metadataBase: new URL(SITE.url),
    title: { default: meta.title, template: `%s | ${SITE.name}` },
    description: meta.description,
    openGraph: { type: 'website', locale: 'de_DE', siteName: SITE.name, images: ['/assets/img/hero-installer-wide.jpg'] },
  };
}

export const viewport: Viewport = { themeColor: '#ffffff' };

// What search engines learn about the business (schema.org)
const BUSINESS = {
  '@context': 'https://schema.org',
  '@type': ['Plumber', 'HVACBusiness'],
  name: SITE.name,
  url: SITE.url,
  image: `${SITE.url}/assets/brand/logo.png`,
  telephone: SITE.phone,
  email: SITE.email,
  address: { '@type': 'PostalAddress', streetAddress: SITE.street, postalCode: SITE.zip, addressLocality: SITE.city, addressCountry: 'DE' },
  areaServed: SITE.city,
  sameAs: [SITE.instagram],
};

// Runs before first paint: enables the hidden-until-revealed states, and drops them again
// if the app never reports `is-ready` (script error, very slow network).
const BOOT_SCRIPT = "document.documentElement.classList.add('js');setTimeout(function(){var h=document.documentElement;if(!h.classList.contains('is-ready'))h.classList.remove('js')},4000)";

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  const lang = await getLang();
  const copy = await getCopy();

  return (
    <html lang={lang} className={`${inter.variable} ${fraunces.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BUSINESS) }} />
      </head>
      <body id="top">
        <I18nProvider lang={lang} copy={copy.client}>
          <ConsentProvider>
            <a className="skip-link" href="#main">{copy.a11y.skip}</a>
            <SiteHeader />
            {children}
            <SiteFooter />
            <a className="wa-fab" href={SITE.whatsapp} target="_blank" rel="noopener" aria-label={copy.a11y.whatsapp}>
              <Icon name="whatsapp" /><span>WhatsApp</span>
            </a>
            {process.env.NODE_ENV === 'development' && <DevBar />}
            <Motion />
            <SmoothScroll />
          </ConsentProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
