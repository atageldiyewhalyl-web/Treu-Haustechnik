'use client';
/* The header: transparent over the page's hero photo, a solid white bar once the page scrolls
   (and on pages without a hero). Logo, navigation with the services menu, the inquiry button and
   the emergency line. Below 1000px the links move into a panel under the bar. */
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Cta, Link } from '@/components/cta';
import { useCopy } from '@/components/i18n';
import { Icon } from '@/components/icons';
import { fill } from '@/lib/i18n';
import { SERVICES } from '@/lib/services';
import { INQUIRY_ANCHOR, SITE } from '@/lib/site';
import { cx } from '@/lib/ui';

// Pages without the inquiry form at their end
const NO_FORM = ['/impressum', '/datenschutz'];

export function SiteHeader() {
  const pathname = usePathname();
  const { nav, names } = useCopy();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onService = SERVICES.some(({ slug }) => pathname === `/${slug}`);
  const inquiryHref = NO_FORM.includes(pathname) ? `/kontakt${INQUIRY_ANCHOR}` : INQUIRY_ANCHOR;

  useEffect(() => {
    const update = () => setScrolled(scrollY > 24);
    update();
    addEventListener('scroll', update, { passive: true });
    return () => removeEventListener('scroll', update);
  }, []);

  // The open panel locks the page behind it and closes on Escape or when the layout turns wide
  useEffect(() => {
    document.documentElement.classList.toggle('is-locked', open);
    if (!open) return;
    const close = () => setOpen(false);
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') close(); };
    const wide = matchMedia('(min-width: 1000px)');
    addEventListener('keydown', onKey);
    wide.addEventListener('change', close);
    return () => {
      removeEventListener('keydown', onKey);
      wide.removeEventListener('change', close);
      document.documentElement.classList.remove('is-locked');
    };
  }, [open]);

  const close = () => setOpen(false);
  const link = (href: string, label: string, active: boolean) => (
    <Link href={href} className={cx('hdr__link', active && 'is-active')}>{label}</Link>
  );

  return (
    <header className={cx('hdr', (scrolled || open) && 'is-solid', open && 'is-open')}>
      <div className="hdr__bar wrap">
        <Link href="/" className="hdr__logo" aria-label={fill(nav.logo, { name: SITE.name })} onClick={close}>
          {/* White lettering over the hero photo, the original on the solid bar */}
          <Image className="hdr__logo-light" src="/assets/brand/logo-light.png" alt="" width={441} height={378} priority />
          <Image className="hdr__logo-dark" src="/assets/brand/logo.png" alt="" width={441} height={378} priority />
        </Link>

        <nav className="hdr__nav" aria-label={nav.main}>
          {link('/', nav.home, pathname === '/')}
          <div className="hdr__drop">
            <Link href="/#leistungen" className={cx('hdr__link', onService && 'is-active')}><span>{nav.services}</span><Icon name="chevron" /></Link>
            <ul className="hdr__menu">
              {SERVICES.map(({ slug, icon }) => (
                <li key={slug}>
                  <Link href={`/${slug}`} className={cx(pathname === `/${slug}` && 'is-active')}><Icon name={icon} /><span>{names[slug]}</span></Link>
                </li>
              ))}
            </ul>
          </div>
          {link('/ratgeber', nav.guide, pathname.startsWith('/ratgeber'))}
          {link('/ueber-uns', nav.about, pathname === '/ueber-uns')}
          {link('/kontakt', nav.contact, pathname === '/kontakt')}
        </nav>

        <div className="hdr__actions">
          <Cta href={inquiryHref} variant="light" className="btn--sm hdr__cta">{nav.inquiry}</Cta>
          <a className="btn btn--outline btn--sm hdr__phone" href={SITE.phoneHref} aria-label={`${nav.hotline}: ${SITE.phone}`}>
            <span className="btn__icon"><Icon name="phone" /></span>
            <span>{SITE.phone}</span>
          </a>
          <button className="hdr__burger" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? nav.close : nav.open} onClick={() => setOpen(!open)}>
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      <div className="hdr__panel wrap" id="mobile-menu" hidden={!open}>
        <nav aria-label={nav.mobile}>
          <Link href="/" className={cx(pathname === '/' && 'is-active')} onClick={close}>{nav.home}</Link>
          <p className="hdr__panel-label">{nav.services}</p>
          <ul>
            {SERVICES.map(({ slug, icon }) => (
              <li key={slug}><Link href={`/${slug}`} className={cx(pathname === `/${slug}` && 'is-active')} onClick={close}><Icon name={icon} /><span>{names[slug]}</span></Link></li>
            ))}
          </ul>
          <Link href="/ratgeber" className={cx(pathname.startsWith('/ratgeber') && 'is-active')} onClick={close}>{nav.guide}</Link>
          <Link href="/ueber-uns" className={cx(pathname === '/ueber-uns' && 'is-active')} onClick={close}>{nav.about}</Link>
          <Link href="/kontakt" className={cx(pathname === '/kontakt' && 'is-active')} onClick={close}>{nav.contact}</Link>
        </nav>
        <div className="hdr__panel-actions" onClick={close}>
          <Cta href={inquiryHref}>{nav.inquiry}</Cta>
          <Cta href={SITE.phoneHref} variant="dark">{fill(nav.emergency, { phone: SITE.phone })}</Cta>
        </div>
      </div>
    </header>
  );
}
