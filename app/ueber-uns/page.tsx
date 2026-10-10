import type { Metadata } from 'next';
import Image from 'next/image';
import { Icon, type IconName } from '@/components/icons';
import { Accent, Hero, Inquiry, MainActions, Reviews, SectionHead, TrustStrip } from '@/components/sections';
import { facts, getCopy } from '@/lib/i18n/server';
import { idx } from '@/lib/ui';

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = (await getCopy()).about;
  return { ...meta, alternates: { canonical: '/ueber-uns' } };
}

// Same order as `about.mission.values` in the copy
const VALUE_ICONS: IconName[] = ['award', 'shield', 'users'];

export default async function AboutPage() {
  const { hero, story, mission, why } = (await getCopy()).about;
  return (
    <main id="main">
      <Hero compact image="/assets/img/ueber-uns.jpg" chips={hero.chips.map(facts)} title={hero.title} lead={hero.lead} actions={<MainActions />} />

      <TrustStrip />

      <section className="section">
        <div className="wrap band">
          <div className="band__img" data-reveal><Image src="/assets/img/about-wide.jpg" alt={story.alt} fill sizes="(max-width: 800px) 100vw, 480px" /></div>
          <div className="band__body" data-reveal>
            <p className="eyebrow">{story.eyebrow}</p>
            <h2 className="h2"><Accent parts={story.title} /></h2>
            <p>{story.text}</p>
            <p>{facts(story.owner)}</p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="wrap">
          <SectionHead eyebrow={mission.eyebrow} title={mission.title} aside={mission.aside} />
          <ul className="sub-grid">
            {mission.values.map(({ title, text }, i) => (
              <li key={title} className="sub-card" data-reveal style={idx(i)}>
                <span className="sub-card__icon"><Icon name={VALUE_ICONS[i]} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow={why.eyebrow} title={why.title} aside={why.aside} />
          <ol className="why-grid">
            {why.reasons.map(({ title, text }, i) => (
              <li key={title} data-reveal style={idx(i % 3)}>
                <span className="why-grid__no">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Reviews soft />
      <Inquiry />
    </main>
  );
}
