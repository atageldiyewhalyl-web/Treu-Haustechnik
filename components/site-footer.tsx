/* The dark footer panel. */
import Image from 'next/image';
import { Mark } from '@/components/brand';
import { ConsentLink } from '@/components/consent';
import { Link } from '@/components/cta';
import { Icon } from '@/components/icons';
import { fill } from '@/lib/i18n';
import { getCopy } from '@/lib/i18n/server';
import { SERVICES } from '@/lib/services';
import { CREDIT, SITE } from '@/lib/site';

export async function SiteFooter() {
  const { footer, client } = await getCopy();
  const { nav, names } = client;
  return (
    <footer className="ftr panel">
      <Image className="ftr__bg" src="/assets/img/footer.jpg" alt="" fill sizes="100vw" />
      <Mark className="ftr__mark" />
      <div className="ftr__inner wrap">
        <div className="ftr__grid">
          <div className="ftr__brand">
            <Link href="/" className="ftr__logo" aria-label={fill(nav.logo, { name: SITE.name })}>
              <Image src="/assets/brand/logo-light.png" alt="" width={441} height={378} />
            </Link>
            <p>{footer.text}</p>
          </div>

          <div>
            <h2 className="ftr__title">{footer.services}</h2>
            <ul className="ftr__links">
              {SERVICES.map(({ slug }) => <li key={slug}><Link href={`/${slug}`}>{names[slug]}</Link></li>)}
              <li><Link href="/ratgeber">{nav.guide}</Link></li>
              <li><Link href="/ueber-uns">{nav.about}</Link></li>
              <li><Link href="/kontakt">{nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="ftr__title">{footer.contact}</h2>
            <ul className="ftr__contact">
              <li><Icon name="phone" /><a href={SITE.phoneHref}>{SITE.phone}</a></li>
              <li><Icon name="mail" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><Icon name="pin" /><a href={SITE.mapsUrl} target="_blank" rel="noopener">{SITE.street}, {SITE.zip} {SITE.city}</a></li>
            </ul>
            <div className="social social--dark">
              <a href={SITE.instagram} target="_blank" rel="noopener" aria-label="Instagram"><Icon name="instagram" /></a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener" aria-label="WhatsApp"><Icon name="whatsapp" /></a>
            </div>
          </div>

          <div>
            <h2 className="ftr__title">{footer.emergency}</h2>
            <p className="ftr__note">{footer.emergencyNote}</p>
            <a className="ftr__hotline" href={SITE.phoneHref}>
              <span className="ftr__hotline-icon"><Icon name="phone" /></span>
              <span><small>24/7</small><b>{SITE.phone}</b></span>
            </a>
          </div>
        </div>

        <div className="ftr__bottom">
          <p>© {new Date().getFullYear()} {SITE.name}. {footer.rights} <span className="ftr__credit" lang="en">{CREDIT.label} <a href={CREDIT.url} target="_blank" rel="noopener noreferrer">{CREDIT.name}</a></span></p>
          <ul>
            <li><Link href="/impressum">{footer.imprint}</Link></li>
            <li><Link href="/datenschutz">{footer.privacy}</Link></li>
            <li><ConsentLink /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
