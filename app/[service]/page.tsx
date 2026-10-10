import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { CSSProperties } from 'react';
import { Cta, Link, TextLink } from '@/components/cta';
import { Icon } from '@/components/icons';
import { Accent, Emergency, FaqSection, Hero, Inquiry, MainActions, Reviews, SectionHead } from '@/components/sections';
import { facts, getCopy } from '@/lib/i18n/server';
import { SERVICES, getService, itemCopy } from '@/lib/services';
import { INQUIRY_ANCHOR, SITE } from '@/lib/site';
import { idx } from '@/lib/ui';

// Only the four service pages exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map(({ slug }) => ({ service: slug }));
}

async function load(props: PageProps<'/[service]'>) {
  const service = getService((await props.params).service);
  if (!service) notFound();
  return service;
}

export async function generateMetadata(props: PageProps<'/[service]'>): Promise<Metadata> {
  const { slug, hero } = await load(props);
  const { meta } = (await getCopy()).services[slug];
  return { title: meta.title, description: facts(meta.description), alternates: { canonical: `/${slug}` }, openGraph: { images: [hero] } };
}

export default async function ServicePage(props: PageProps<'/[service]'>) {
  const service = await load(props);
  const copy = await getCopy();
  const text = copy.services[service.slug];
  const { servicePage: page, cta, client } = copy;
  const name = client.names[service.slug];
  const urgent = service.slug === 'notdienst';
  const others = SERVICES.filter(({ slug }) => slug !== service.slug);
  // Four cards sit in one row, two share it, anything else goes three across
  const count = service.items.length;
  const cols = count === 4 ? 4 : count < 3 ? 2 : 3;

  // On the emergency page the phone comes first; everywhere else the inquiry form does
  const actions = urgent
    ? <><Cta href={SITE.phoneHref}>{SITE.phone}</Cta><TextLink href={INQUIRY_ANCHOR}>{cta.inquiry}</TextLink></>
    : <MainActions />;

  return (
    <main id="main">
      <Hero compact image={service.hero} focus={service.heroFocus} chips={[name, ...page.chips]} title={text.headline} lead={text.intro} actions={actions} />

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow={name} title={text.listTitle} aside={text.listIntro} />
          <ul className="sub-grid" style={{ '--cols': cols } as CSSProperties}>
            {service.items.map(({ id, icon }, i) => {
              const item = itemCopy(copy, service.slug, id);
              return (
                <li key={id} id={id} className="sub-card" data-reveal style={idx(i)}>
                  <span className="sub-card__icon"><Icon name={icon} animated /></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <TextLink href={INQUIRY_ANCHOR}>{cta.inquiry}</TextLink>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section section--soft">
        <div className="wrap band">
          <div className="band__img" data-reveal><Image src={service.bandImage} alt={text.band.alt} fill sizes="(max-width: 800px) 100vw, 480px" /></div>
          <div className="band__body" data-reveal>
            <p className="eyebrow">{urgent ? page.bandEyebrowUrgent : page.bandEyebrow}</p>
            <h2 className="h2"><Accent parts={text.band.title} /></h2>
            <p>{text.band.text}</p>
            <ul className="ticks">
              {text.band.points.map((point) => <li key={point}><span><Icon name="check" /></span>{facts(point)}</li>)}
            </ul>
            <div className="actions">{actions}</div>
          </div>
        </div>
      </section>

      <Reviews />
      {!urgent && <Emergency />}
      <FaqSection items={text.faq} />

      <section className="section section--soft">
        <div className="wrap">
          <SectionHead eyebrow={page.moreEyebrow} title={page.moreTitle} />
          <ul className="more-grid">
            {others.map(({ slug, icon }, i) => (
              <li key={slug} data-reveal style={idx(i)}>
                <Link className="more-card" href={`/${slug}`}>
                  <span className="sub-card__icon"><Icon name={icon} animated /></span>
                  <span className="more-card__text"><b>{client.names[slug]}</b><small>{copy.services[slug].intro}</small></span>
                  <span className="arrow-badge"><Icon name="arrow" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Inquiry preselect={service.reason} />
    </main>
  );
}
