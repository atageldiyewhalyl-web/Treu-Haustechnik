/* The page sections shared between the homepage and the inner pages. Wording: lib/i18n. */
import Image from 'next/image';
import type { CSSProperties, ReactNode } from 'react';
import { Mark } from '@/components/brand';
import { Carousel, CarouselButtons, CarouselTrack } from '@/components/carousel';
import { Cta, Link, TextLink } from '@/components/cta';
import { Faq, type FaqItem } from '@/components/faq';
import { GoogleG, Icon, Stars, type IconName } from '@/components/icons';
import { InquiryForm } from '@/components/inquiry-form';
import { MapEmbed } from '@/components/map-embed';
import { fill } from '@/lib/i18n';
import { facts, getCopy } from '@/lib/i18n/server';
import type { ReasonKey } from '@/lib/inquiry';
import { REVIEWS, REVIEW_SUMMARY } from '@/lib/reviews';
import { SERVICE_CARDS } from '@/lib/services';
import { INQUIRY_ANCHOR, SITE } from '@/lib/site';
import { cx, idx } from '@/lib/ui';

/** A two-part headline; the second part is wrapped so it can be styled as an accent. */
export function Accent({ parts }: { parts: readonly string[] }) {
  return <>{parts[0]} <em>{parts[1]}</em></>;
}

export function SectionHead({ eyebrow, title, aside, children }: { eyebrow: string; title: readonly string[]; aside?: string; children?: ReactNode }) {
  return (
    <div className="shead" data-reveal>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h2"><Accent parts={title} /></h2>
      </div>
      {(aside || children) && (
        <div className="shead__aside">
          {aside && <p>{aside}</p>}
          {children}
        </div>
      )}
    </div>
  );
}

/** The Google rating in a white pill above a hero's headline, linking to the profile. */
export async function Rating() {
  const copy = await getCopy();
  return (
    <a className="rating" href={REVIEW_SUMMARY.url} target="_blank" rel="noopener">
      <span className="rating__logo"><GoogleG /></span>
      <Stars label={fill(copy.a11y.stars, { value: REVIEW_SUMMARY.rating })} />
      <b>{REVIEW_SUMMARY.rating}</b>
      <small>{facts(copy.rating.count)}</small>
    </a>
  );
}

/** The photo that opens a page, with the copy on its left. `children` sit along its bottom edge;
    `focus` is the part of the photo to keep in view when it is cropped (CSS object-position),
    `focusSm` the same for phones and tablets, where the crop is much narrower. `lift` raises the
    photo on desktop by that share of the hero's height (it is enlarged just enough to still fill it). */
export function Hero({ image, alt = '', focus, focusSm, lift, chips, title, lead, actions, children, compact }: {
  image: string; alt?: string; focus?: string; focusSm?: string; lift?: string; chips?: string[]; title: readonly string[]; lead: string; actions: ReactNode; children?: ReactNode; compact?: boolean;
}) {
  return (
    <section className={cx('hero', compact && 'hero--compact')}>
      <Image className="hero__img" src={image} alt={alt} fill priority sizes="100vw" style={{ '--focus': focus, '--focus-sm': focusSm, '--lift': lift } as CSSProperties} />
      <div className="hero__inner wrap">
        <Rating />
        <h1 className="h1"><Accent parts={title} /></h1>
        {chips && <ul className="chips chips--glass">{chips.map((chip) => <li key={chip}>{chip}</li>)}</ul>}
        <p className="hero__lead">{lead}</p>
        <div className="actions">{actions}</div>
      </div>
      {children && <div className="hero__below wrap">{children}</div>}
    </section>
  );
}

/** The two actions most pages open with: the inquiry form and the phone. */
export async function MainActions() {
  const { cta } = await getCopy();
  return <><Cta href={INQUIRY_ANCHOR}>{cta.inquiry}</Cta><TextLink href={SITE.phoneHref}>{cta.call}</TextLink></>;
}

// Same order as `trust` in the copy; the third is the Google rating
const TRUST_ICONS: (IconName | null)[] = ['award', 'clock', null, 'pin', 'users'];

export async function TrustStrip() {
  const copy = await getCopy();
  return (
    <div className="trust-band">{/* full width, so the sheet behind it reaches both edges (see `.hero + *`) */}
      <div className="wrap">
        <h2 className="h2 trust__title" data-reveal><Accent parts={copy.trustTitle} /></h2>
        <ul className="trust">
          {copy.trust.map(({ title, note }, i) => {
            const icon = TRUST_ICONS[i];
            return (
              <li key={title} data-reveal style={idx(i)}>
                <span className="trust__mark">{icon ? <Icon name={icon} animated duo /> : <GoogleG />}</span>
                <b>{facts(title)}</b>
                <small>{facts(note)}</small>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/* A carousel that moves on by itself shows its cards twice in a row, so it can run on without an end
   (components/carousel.tsx). The second set is a picture of the first: screen readers and the keyboard skip it. */
const twice = <T,>(items: readonly T[]) => [...items, ...items].map((item, n) => ({ item, i: n % items.length, clone: n >= items.length }));
const reveal = (i: number) => ({ 'data-reveal': true, style: idx(Math.min(i, 4)) });
const CLONE = { 'data-clone': true, 'aria-hidden': true } as const;

export async function ServicesCarousel() {
  const { carousel, cta, client } = await getCopy();
  return (
    <section className="section" id="leistungen">
      <Carousel auto>
        <div className="wrap">
          <SectionHead eyebrow={carousel.eyebrow} title={carousel.title} aside={carousel.aside}>
            <CarouselButtons label={carousel.label} />
          </SectionHead>
        </div>
        <CarouselTrack className="track--services">
          {twice(SERVICE_CARDS).map(({ item: { image, group, anchor, icon }, i, clone }) => (
            <li key={`${image}${clone}`} className="svc-card" {...(clone ? CLONE : reveal(i))}>
              <Image src={image} alt="" fill sizes="(max-width: 700px) 78vw, 384px" />
              <span className="chip">{client.names[group]}</span>
              <span className="svc-card__icon"><Icon name={icon} animated /></span>
              <div className="svc-card__body">
                <h3>{carousel.cards[i].title}</h3>
                <p>{carousel.cards[i].text}</p>
                <Cta href={`/${group}${anchor ? `#${anchor}` : ''}`} variant="light" tabIndex={clone ? -1 : undefined}>{cta.more}</Cta>
              </div>
            </li>
          ))}
        </CarouselTrack>
      </Carousel>
    </section>
  );
}

/** The client's Google reviews, always in their original German wording. */
export async function Reviews({ soft }: { soft?: boolean }) {
  const { reviews } = await getCopy();
  return (
    <section className={cx('section', soft && 'section--soft')} id="bewertungen">
      <Carousel auto>
        <div className="wrap">
          <SectionHead eyebrow={reviews.eyebrow} title={reviews.title} aside={facts(reviews.aside)}>
            <CarouselButtons label={reviews.label} />
          </SectionHead>
        </div>
        <CarouselTrack className="track--reviews">
          {twice(REVIEWS).map(({ item: { name, when, stars, text, photo }, i, clone }) => (
            <li key={`${name}${clone}`} className="review" lang="de" {...(clone ? CLONE : reveal(i))}>
              <div className="review__head">
                {photo
                  ? <Image className="review__avatar" src={photo} alt="" width={40} height={40} />
                  : <span className="review__avatar" aria-hidden="true">{name[0]}</span>}
                <span className="review__who"><b>{name}</b><small>{when}</small></span>
                <span className="review__score">{stars}.0</span>
              </div>
              <span className="review__quote" aria-hidden="true">“</span>
              <blockquote>{text}</blockquote>
              <div className="review__foot"><GoogleG /><Stars value={stars} /></div>
            </li>
          ))}
        </CarouselTrack>
        <div className="wrap reviews__more">
          <Cta href={REVIEW_SUMMARY.url} variant="light">{reviews.all}</Cta>
        </div>
      </Carousel>
    </section>
  );
}

// Same order as `emergency.cards` in the copy: each card's photo, and one icon for each of its points
const EMERGENCY_CARDS: { image: string; focus?: string; icons: IconName[] }[] = [
  { image: '/assets/img/notfall-heizung.jpg', icons: ['radiator', 'thermometer', 'alert'] },
  { image: '/assets/img/notfall-wasser.jpg', focus: '50% 30%', icons: ['droplets', 'waves', 'droplet'] },
  { image: '/assets/img/notfall-abfluss.jpg', focus: '50% 42%', icons: ['wrench', 'filter', 'bath'] },
];

/** The dark panel with the three emergency cards. */
export async function Emergency() {
  const { emergency, cta } = await getCopy();
  return (
    <section className="emergency panel" id="notdienst">
      <Image className="emergency__bg" src="/assets/img/texture-wall.jpg" alt="" fill sizes="100vw" />
      <div className="wrap">
        <div className="shead shead--dark" data-reveal>
          <div>
            <p className="eyebrow">{emergency.eyebrow}</p>
            <h2 className="h2"><Accent parts={emergency.title} /></h2>
          </div>
          <div className="shead__aside">
            <p>{emergency.aside}</p>
            <Cta href={SITE.phoneHref}>{SITE.phone}</Cta>
          </div>
        </div>
        <ul className="ecards">
          {emergency.cards.map(({ title, lead, points }, i) => {
            const { image, focus, icons } = EMERGENCY_CARDS[i];
            return (
              <li key={title} className="ecard" data-reveal style={idx(i)}>
                <div className="ecard__img"><Image src={image} alt="" fill sizes="(max-width: 860px) 100vw, 420px" style={focus ? { objectPosition: focus } : undefined} /></div>
                <p className="ecard__title">{title}</p>
                <p className="ecard__lead">{lead}</p>
                <ul className="ecard__points">
                  {points.map((point, j) => <li key={point}><Icon name={icons[j]} />{point}</li>)}
                </ul>
                <Cta href={SITE.phoneHref} variant="dark" className="btn--block">{cta.call}</Cta>
              </li>
            );
          })}
        </ul>
        <p className="emergency__more" data-reveal><TextLink href="/notdienst">{emergency.more}</TextLink></p>
      </div>
    </section>
  );
}

export async function FaqSection({ items, soft }: { items: FaqItem[]; soft?: boolean }) {
  const { faq, cta } = await getCopy();
  return (
    <section className={cx('section', soft && 'section--soft')} id="faq">
      <div className="wrap">
        <SectionHead eyebrow={faq.eyebrow} title={faq.title} aside={faq.aside} />
        <div className="faq-layout">
          <aside className="faq-aside" data-reveal>
            <span className="faq-aside__mark"><Mark /></span>
            <p className="faq-aside__title"><Accent parts={faq.boxTitle} /></p>
            <p>{faq.boxText}</p>
            <Cta href={INQUIRY_ANCHOR}>{cta.inquiry}</Cta>
          </aside>
          <Faq items={items.map(({ q, a }) => ({ q, a: facts(a) }))} open={1} />
        </div>
      </div>
    </section>
  );
}

/** The inquiry form at the end of a page. `preselect` starts it on that page's category;
    `direct={false}` leaves out the phone, mail and WhatsApp lines where the page already shows them. */
export async function Inquiry({ preselect, map, direct = true }: { preselect?: ReasonKey; map?: boolean; direct?: boolean }) {
  const { inquiry } = await getCopy();
  return (
    <section className="section inquiry">
      <div className="wrap">
        {/* The page's main call to action: the brand colour as a panel, the form as a white sheet on it */}
        <div className="inquiry__panel" id="anfrage">
          <Mark className="inquiry__mark" />
          <div className="inquiry__intro" data-reveal>
            <p className="eyebrow">{inquiry.eyebrow}</p>
            <h2 className="h2"><Accent parts={inquiry.title} /></h2>
            <p>{inquiry.text}</p>
            {direct && (
              <ul className="inquiry__direct">
                <li><Icon name="phone" /><span><small>{inquiry.hotline}</small><a href={SITE.phoneHref}>{SITE.phone}</a></span></li>
                <li><Icon name="mail" /><span><small>{inquiry.email}</small><a href={`mailto:${SITE.email}`}>{SITE.email}</a></span></li>
                <li><Icon name="whatsapp" /><span><small>{inquiry.whatsapp}</small><Link href={SITE.whatsapp}>{inquiry.write}</Link></span></li>
              </ul>
            )}
          </div>
          <div className="inquiry__form" data-reveal>
            <InquiryForm preselect={preselect} />
          </div>
        </div>
        {map && <div className="inquiry__map" data-reveal><MapEmbed /></div>}
      </div>
    </section>
  );
}
