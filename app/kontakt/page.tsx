import type { Metadata } from 'next';
import { Link } from '@/components/cta';
import { Icon, type IconName } from '@/components/icons';
import { Accent, Inquiry } from '@/components/sections';
import { facts, getCopy } from '@/lib/i18n/server';
import { SITE } from '@/lib/site';
import { cx, idx } from '@/lib/ui';

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = (await getCopy()).contact;
  return { title: meta.title, description: facts(meta.description), alternates: { canonical: '/kontakt' } };
}

export default async function ContactPage() {
  const { contact, inquiry } = await getCopy();
  const ways: { icon: IconName; label: string; value: string; href: string }[] = [
    { icon: 'phone', label: contact.ways.call, value: SITE.phone, href: SITE.phoneHref },
    { icon: 'whatsapp', label: contact.ways.whatsapp, value: inquiry.write, href: SITE.whatsapp },
    { icon: 'mail', label: contact.ways.email, value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: 'pin', label: contact.ways.address, value: `${SITE.street}, ${SITE.zip} ${SITE.city}`, href: SITE.mapsUrl },
  ];

  return (
    <main id="main" className="plain-page">
      <section className="page-head wrap" data-reveal>
        <p className="eyebrow">{contact.eyebrow}</p>
        <h1 className="h1 h1--dark"><Accent parts={contact.title} /></h1>
        <p className="page-head__lead">{contact.lead}</p>
      </section>

      <ul className="ways wrap">
        {ways.map(({ icon, label, value, href }, i) => (
          <li key={label} data-reveal style={idx(i)}>
            <Link href={href} className="way">
              <span className={cx('glyph', icon === 'whatsapp' && 'glyph--wa')}><Icon name={icon} animated duo /></span>
              <span className="way__text"><small>{label}</small><b>{value}</b></span>
              <span className="arrow-badge"><Icon name="arrow" /></span>
            </Link>
          </li>
        ))}
      </ul>

      <Inquiry map direct={false} />
    </main>
  );
}
