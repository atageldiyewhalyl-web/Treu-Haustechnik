import Image from 'next/image';
import { AutoCarousel } from '@/components/auto-carousel';
import { BlogTeaser } from '@/components/blog';
import { Cta, Link, TextLink } from '@/components/cta';
import { GoogleG, Icon, Stars } from '@/components/icons';
import { Emergency, FaqSection, Hero, Inquiry, MainActions, Reviews, SectionHead, ServicesCarousel, TrustStrip } from '@/components/sections';
import { fill } from '@/lib/i18n';
import { facts, getCopy } from '@/lib/i18n/server';
import { REVIEW_SUMMARY } from '@/lib/reviews';
import { SERVICES } from '@/lib/services';
import { INQUIRY_ANCHOR } from '@/lib/site';
import { idx } from '@/lib/ui';

const IMG = '/assets/img';

export default async function HomePage() {
  const { home, cta, a11y, client } = await getCopy();
  const { hero, about, process } = home;
  const step = (n: number) => {
    const { title, text } = process.steps[n - 1];
    return { label: fill(process.step, { n: `0${n}` }), title, text };
  };
  const [one, two, three, four] = [1, 2, 3, 4].map(step);

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

          <div className="bento">
            <article className="bento__card bento__card--tall" data-reveal>
              <div className="bento__text">
                <p className="step">{one.label}</p>
                <h3>{one.title}</h3>
                <p>{one.text}</p>
              </div>
              <div className="bento__img">
                <Image src={`${IMG}/process-anfrage.jpg`} alt="" fill sizes="(max-width: 800px) 100vw, 400px" />
              </div>
            </article>

            <article className="bento__card" data-reveal style={idx(1)}>
              <div className="bento__text">
                <p className="step">{two.label}</p>
                <h3>{two.title}</h3>
                <p>{two.text}</p>
              </div>
              <div className="bento__img bento__img--low bento__img--right"><Image src={`${IMG}/technician-heat-pump.jpg`} alt="" fill sizes="(max-width: 800px) 100vw, 540px" /></div>
            </article>

            <article className="bento__card" data-reveal style={idx(2)}>
              <div className="bento__text">
                <p className="step">{three.label}</p>
                <h3>{three.title}</h3>
                <p>{three.text}</p>
              </div>
              <div className="bento__img bento__img--low"><Image src={`${IMG}/process-ausfuehrung.jpg`} alt="" fill sizes="(max-width: 800px) 100vw, 400px" /></div>
            </article>

            <article className="bento__card bento__card--wide" data-reveal style={idx(3)}>
              <Image className="bento__bg" src={`${IMG}/process-abnahme.jpg`} alt="" fill sizes="(max-width: 800px) 100vw, 820px" />
              <div className="bento__text">
                <p className="step">{four.label}</p>
                <h3>{four.title}</h3>
                <p>{four.text}</p>
                <Cta href={INQUIRY_ANCHOR}>{cta.inquiry}</Cta>
              </div>
              <div className="checklist" aria-hidden="true">
                <span className="checklist__rating"><GoogleG /><Stars /><b>{REVIEW_SUMMARY.rating}</b></span>
                <p className="checklist__title">{process.checklistTitle[0]}<em>{process.checklistTitle[1]}</em></p>
                <ul>{process.checklist.map((item) => <li key={item}><span><Icon name="check" /></span>{item}</li>)}</ul>
                <span className="checklist__seal"><Icon name="shield" /></span>
              </div>
            </article>
          </div>
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
