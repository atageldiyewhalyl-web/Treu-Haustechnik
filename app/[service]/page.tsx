import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Cta, Link, TextLink } from '@/components/cta';
import { GoogleG, Icon, type IconName } from '@/components/icons';
import { Accent, Emergency, FaqSection, Hero, Inquiry, MainActions, Reviews, SectionHead } from '@/components/sections';
import { facts, getCopy } from '@/lib/i18n/server';
import { SERVICES, getService, itemCopy } from '@/lib/services';
import { INQUIRY_ANCHOR, SITE } from '@/lib/site';
import { cx, idx } from '@/lib/ui';

// Only the four service pages exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map(({ slug }) => ({ service: slug }));
}

/* The scene on a sub-service card: its icon, large and two-tone, in one of six settings, so that no two
   cards on a page look alike (a page has at most six). Decoration only; styles: `.art` in globals.css.
   scatter: the neighbouring sub-services' icons float around it   tree: they hang below it like a chart
   row: the icon repeats to both sides                             rings: two neighbours circle it
   frame: corner marks and a scanning line                         ripple: circles spread out from it */
const ART_KINDS = ['scatter', 'tree', 'row', 'rings', 'frame', 'ripple'] as const;
const ART_FILL: IconName[] = ['wrench', 'shield', 'clock', 'sparkles'];
/** Which of the trust facts is the Google rating: it carries Google's mark instead of a tick. */
const GOOGLE_FACT = 2;

function Art({ icon, around, kind }: { icon: IconName; around: IconName[]; kind: (typeof ART_KINDS)[number] }) {
  const mark = (name: IconName, i: number) => <span key={`${name}-${i}`} className="art__sat"><Icon name={name} /></span>;
  return (
    <div className={`art art--${kind}`} aria-hidden="true">
      {kind === 'scatter' && around.map(mark)}
      {kind === 'row' && [icon, icon, icon, icon].map(mark)}
      {kind === 'rings' && <div className="art__orbit">{around.slice(0, 2).map(mark)}</div>}
      {kind === 'frame' && <i className="art__frame" />}
      {kind === 'ripple' && [0, 1, 2].map((n) => <i key={n} className="art__ripple" />)}
      <span className="art__main"><Icon name={icon} animated duo /></span>
      {kind === 'tree' && <div className="art__branch">{around.map(mark)}</div>}
    </div>
  );
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
  const count = service.items.length;

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
          <div className={cx('offers', count < 3 && 'offers--few', count > 4 && 'offers--long')}>
            <ul className="offers__grid" data-lenis-prevent-horizontal>
              {service.items.map(({ id, icon }, i) => {
                const item = itemCopy(copy, service.slug, id);
                // the other sub-services' icons surround this card's own (general ones fill up a short list)
                const around = [...service.items.map((other) => other.icon), ...ART_FILL].filter((name, k, all) => name !== icon && all.indexOf(name) === k).slice(0, 4);
                return (
                  <li key={id} id={id} className="offer" data-reveal style={idx(Math.min(i, 4))}>
                    <Art icon={icon} around={around} kind={ART_KINDS[i % ART_KINDS.length]} />
                    <div className="offer__text">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <aside className="offers__aside">
              {/* The way to us: the four steps from inquiry to handover; on the emergency page the cases we come out for */}
              <div className="offers__way" data-reveal>
                <ol className="offers__steps">
                  {urgent
                    ? copy.emergency.cards.map(({ lead }) => <li key={lead}><b><Icon name="alert" /></b><span>{lead}</span></li>)
                    : copy.home.process.steps.map(({ title }, i) => <li key={title}><b>{i + 1}</b><span>{title}</span></li>)}
                </ol>
                <h3>{(urgent ? copy.emergency.title : copy.inquiry.title).join(' ')}</h3>
                <p>{urgent ? copy.emergency.aside : copy.inquiry.text}</p>
                {urgent ? <Cta href={SITE.phoneHref}>{SITE.phone}</Cta> : <Cta href={INQUIRY_ANCHOR}>{cta.inquiry}</Cta>}
              </div>
              <div className="offers__trust" data-reveal style={idx(1)}>
                <h3>{copy.trustTitle.join(' ')}</h3>
                <ul>
                  {copy.trust.map(({ title }, i) => (
                    <li key={title}>{i === GOOGLE_FACT ? <i className="is-plain"><GoogleG /></i> : <i><Icon name="check" /></i>}{facts(title)}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
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
                  <span className="glyph"><Icon name={icon} animated duo /></span>
                  <span className="more-card__text"><b>{client.names[slug]}</b><small>{copy.home.hero.services[slug]}</small></span>
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
