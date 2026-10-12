import Image from 'next/image';
import { AutoCarousel } from '@/components/auto-carousel';
import { BlogTeaser } from '@/components/blog';
import { Mark } from '@/components/brand';
import { Cta, Link, TextLink } from '@/components/cta';
import { GoogleG, Icon, Stars } from '@/components/icons';
import { ProcessSteps } from '@/components/process';
import { Emergency, FaqSection, Hero, Inquiry, MainActions, Reviews, SectionHead, ServicesCarousel, TrustStrip } from '@/components/sections';
import { fill } from '@/lib/i18n';
import { facts, getCopy } from '@/lib/i18n/server';
import { REVIEW_SUMMARY } from '@/lib/reviews';
import { SERVICES } from '@/lib/services';
import { INQUIRY_ANCHOR } from '@/lib/site';

const IMG = '/assets/img';

// Same order as `home.process.steps` in the copy: each step's photo and the part of it to keep in view
const STEP_PHOTOS = [
  { image: `${IMG}/process-anfrage.jpg`, focus: '50% 10%' },
  { image: `${IMG}/technician-heat-pump.jpg`, focus: '82% 40%' },
  { image: `${IMG}/process-ausfuehrung.jpg`, focus: '78% 50%' },
  { image: `${IMG}/process-abnahme.jpg`, focus: '72% 40%' },
];

export default async function HomePage() {
  const { home, cta, a11y, client } = await getCopy();
  const { hero, about, process } = home;

  return (
    <main id="main">
      <Hero image={`${IMG}/hero-installer-wide.jpg`} focus="0% 40%" focusSm="47% 40%" lift="9%" title={hero.title} lead={hero.lead} actions={<MainActions />}>
        {/* The four services as photo cards: a fan rising from the hero's bottom edge, on phones a row that moves on by itself */}
        <AutoCarousel className="fan">
          {SERVICES.map(({ slug, icon, card }) => (
            <li key={slug}>
              <Link href={`/${slug}`} className="fan__card">
                <span className="fan__face">
                  <Image src={card} alt="" fill sizes="(max-width: 760px) 62vw, 380px" />
                  <span className="fan__icon"><Icon name={icon} animated duo /></span>
                  <span className="fan__text"><b>{client.names[slug]}</b><small>{hero.services[slug]}</small></span>
                </span>
              </Link>
            </li>
          ))}
        </AutoCarousel>
      </Hero>

      <TrustStrip />

      <section className="section about">
        <div className="wrap">
          {/* One wide photo with the description inside it */}
          <div className="about__panel" data-reveal>
            <Image className="about__bg" src={`${IMG}/about-wide.jpg`} alt={about.alt} fill sizes="(max-width: 1300px) 100vw, 1240px" />
            <p className="eyebrow">{about.eyebrow}</p>
            <p className="about__text">{facts(about.text)}</p>
            <div className="actions">
              <Cta href={INQUIRY_ANCHOR}>{cta.inquiry}</Cta>
              <TextLink href="/ueber-uns">{cta.aboutUs}</TextLink>
            </div>
          </div>
        </div>
      </section>

      <ServicesCarousel />

      <section className="section section--soft" id="ablauf">
        <div className="wrap">
          <SectionHead eyebrow={process.eyebrow} title={process.title} aside={process.aside}>
            <a className="round-btn round-btn--dark" href={INQUIRY_ANCHOR} aria-label={a11y.toForm}><Icon name="down" /></a>
          </SectionHead>

          <ProcessSteps
            steps={process.steps.map(({ title, text }, i) => ({ title, text, label: fill(process.step, { n: `0${i + 1}` }), ...STEP_PHOTOS[i] }))}
            extra={
              <div className="checklist">
                <span className="checklist__rating"><GoogleG /><Stars /><b>{REVIEW_SUMMARY.rating}</b></span>
                <Mark className="checklist__logo" />
                <p className="checklist__title">{process.checklistTitle[0]}<em>{process.checklistTitle[1]}</em></p>
                <ul>{process.checklist.map((item) => <li key={item}><span><Icon name="check" /></span>{item}</li>)}</ul>
                <span className="checklist__seal"><Icon name="shield" /></span>
              </div>
            }
          >
            <Cta href={INQUIRY_ANCHOR}>{cta.inquiry}</Cta>
          </ProcessSteps>
        </div>
      </section>

      <Reviews />
      <Emergency />
      <BlogTeaser />
      <FaqSection items={home.faq} />

      <Inquiry map />
    </main>
  );
}
