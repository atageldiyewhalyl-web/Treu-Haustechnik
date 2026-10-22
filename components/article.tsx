/* The building blocks of a Ratgeber article beyond plain paragraphs and lists: links inside the text,
   a comparison table, a photo with its credit and a call to action that fits the section.
   Article data: lib/blog. Page: app/ratgeber/[slug]. */
import Image from 'next/image';
import { Fragment, type ReactNode } from 'react';
import { Cta, Link, TextLink } from '@/components/cta';
import { Icon } from '@/components/icons';
import type { PostCta, PostSection } from '@/lib/blog';
import { INQUIRY_ANCHOR, SITE } from '@/lib/site';

/* [label](href): the label is plain text, the href a path on the site or an outside address. The href may
   hold one pair of parentheses (the KfW address does). */
const LINK = /\[([^\]]+)\]\(((?:[^()\s]|\([^()\s]*\))+)\)/g;

/* **bold**: a short lead-in such as the year in a timeline. */
const BOLD = /\*\*([^*]+)\*\*/g;
const TOKENS = new RegExp(`${LINK.source}|${BOLD.source}`, 'g');

/** Text with its [label](href) links and **bold** lead-ins turned into markup. */
export function Rich({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(TOKENS)) {
    const [whole, label, href, bold] = match;
    parts.push(text.slice(last, match.index));
    parts.push(bold
      ? <strong key={match.index}>{bold}</strong>
      : <Link key={match.index} href={href} className="article__link">{label}</Link>);
    last = match.index + whole.length;
  }
  parts.push(text.slice(last));
  return <>{parts.map((part, i) => <Fragment key={i}>{part}</Fragment>)}</>;
}

/** Strip the markup for places that need plain text, such as structured data. */
export const plain = (text: string) => text.replace(LINK, '$1').replace(BOLD, '$1');

export function ArticleTable({ table }: { table: NonNullable<PostSection['table']> }) {
  return (
    <div className="article__table" role="region" aria-label={table.head[0]} tabIndex={0}>
      <table>
        <thead><tr>{table.head.map((cell) => <th key={cell} scope="col">{cell}</th>)}</tr></thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row[0]}>{row.map((cell, i) => (i === 0 ? <th key={i} scope="row">{cell}</th> : <td key={i} data-label={table.head[i]}>{cell}</td>))}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ArticleFigure({ image, label }: { image: NonNullable<PostSection['image']>; label: string }) {
  return (
    <figure className="article__figure" data-reveal>
      <div><Image src={image.src} alt={image.alt} fill sizes="(max-width: 860px) 100vw, 780px" /></div>
      <figcaption>
        {image.caption}
        {image.credit && <span>{label}: {image.credit}</span>}
      </figcaption>
    </figure>
  );
}

/** A call to action between two sections: the inquiry form first, a quieter second link beside it. */
export function ArticleCta({ cta, call }: { cta: PostCta; call: string }) {
  return (
    <aside className="article__aside" data-reveal>
      <span className="article__aside-icon" aria-hidden="true"><Icon name={cta.icon} /></span>
      <div>
        <p className="article__aside-title">{cta.title}</p>
        <p>{cta.text}</p>
        <div className="actions">
          <Cta href={INQUIRY_ANCHOR}>{cta.inquiry}</Cta>
          {cta.more
            ? <TextLink href={cta.more.href}>{cta.more.label}</TextLink>
            : <TextLink href={SITE.phoneHref}>{call}</TextLink>}
        </div>
      </div>
    </aside>
  );
}
