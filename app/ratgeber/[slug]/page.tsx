import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArticleCta, ArticleFigure, ArticleTable, Rich, plain } from '@/components/article';
import { PostCard } from '@/components/blog';
import { Cta, Link, TextLink } from '@/components/cta';
import { Faq } from '@/components/faq';
import { Icon } from '@/components/icons';
import { Accent, Inquiry } from '@/components/sections';
import { POSTS, formatDate, getPost, postsFor } from '@/lib/blog';
import { fill } from '@/lib/i18n';
import { facts, getCopy, getLang } from '@/lib/i18n/server';
import { INQUIRY_ANCHOR, SITE } from '@/lib/site';

// Only the articles in lib/blog exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map(({ slug }) => ({ slug }));
}

async function load(props: PageProps<'/ratgeber/[slug]'>) {
  const post = getPost(await getLang(), (await props.params).slug);
  if (!post) notFound();
  return post;
}

export async function generateMetadata(props: PageProps<'/ratgeber/[slug]'>): Promise<Metadata> {
  const { slug, title, description, image, date } = await load(props);
  return {
    title,
    description,
    alternates: { canonical: `/ratgeber/${slug}` },
    openGraph: { type: 'article', title, description, images: [image], publishedTime: date, authors: [SITE.name] },
  };
}

export default async function PostPage(props: PageProps<'/ratgeber/[slug]'>) {
  const post = await load(props);
  const lang = await getLang();
  const { blog, cta, client } = await getCopy();
  const others = postsFor(lang).filter(({ slug }) => slug !== post.slug).slice(0, 3);
  const url = `${SITE.url}/ratgeber/${post.slug}`;
  const business = { '@type': 'Organization', name: SITE.name, url: SITE.url };

  // What search engines learn about the article (schema.org): the article itself and where it sits on the site
  const structured = [
    {
      '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title, description: post.description, image: `${SITE.url}${post.image}`,
      datePublished: post.date, dateModified: post.date, inLanguage: lang, mainEntityOfPage: url, author: business, publisher: business,
    },
    {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [[blog.home, SITE.url], [blog.eyebrow, `${SITE.url}/ratgeber`], [post.title, url]].map(([name, item], i) => ({ '@type': 'ListItem', position: i + 1, name, item })),
    },
    ...(post.faq ? [{
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: post.faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: plain(a) } })),
    }] : []),
  ];

  return (
    <main id="main" className="plain-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }} />

      <article className="article">
        <header className="article__head wrap">
          <nav className="crumbs" aria-label={blog.crumbs}>
            <Link href="/">{blog.home}</Link><span aria-hidden="true">/</span><Link href="/ratgeber">{blog.eyebrow}</Link><span aria-hidden="true">/</span><span>{client.names[post.service]}</span>
          </nav>
          <h1 className="h1 h1--dark">{post.title}</h1>
          <p className="article__lead">{post.excerpt}</p>
          <p className="article__meta">
            <span>{fill(blog.by, { name: SITE.name })}</span>
            <time dateTime={post.date}>{formatDate(lang, post.date)}</time>
            <span>{fill(blog.minutes, { n: post.minutes })}</span>
          </p>
        </header>

        <div className="article__img wrap">
          <div><Image src={post.image} alt={post.alt} fill priority sizes="(max-width: 1100px) 100vw, 1040px" /></div>
        </div>

        <div className="article__body wrap">
          <aside className="takeaways">
            <h2>{blog.takeaways}</h2>
            <ul>{post.takeaways.map((item) => <li key={item}><Icon name="check" /><span>{item}</span></li>)}</ul>
          </aside>

          {post.sections.map(({ heading, text, list, more, table, image, cta: aside }) => (
            <section key={heading}>
              <h2>{heading}</h2>
              {text?.map((paragraph) => <p key={paragraph}><Rich text={facts(paragraph)} /></p>)}
              {list && <ul>{list.map((item) => <li key={item}><Rich text={facts(item)} /></li>)}</ul>}
              {table && <ArticleTable table={table} />}
              {more?.map((paragraph) => <p key={paragraph}><Rich text={facts(paragraph)} /></p>)}
              {image && <ArticleFigure image={image} label={blog.photo} />}
              {aside && <ArticleCta cta={aside} call={cta.call} />}
            </section>
          ))}

          {post.faq && (
            <section className="article__faq">
              <h2>{blog.faq}</h2>
              <Faq items={post.faq.map(({ q, a }) => ({ q, a: plain(a) }))} open={-1} />
            </section>
          )}

          <div className="article__cta">
            <h2>{blog.ctaTitle}</h2>
            <p>{blog.ctaText}</p>
            <div className="actions">
              <Cta href={INQUIRY_ANCHOR}>{cta.inquiry}</Cta>
              <TextLink href={post.href}>{fill(blog.service, { name: client.names[post.service] })}</TextLink>
            </div>
          </div>
        </div>
      </article>

      <section className="section section--soft">
        <div className="wrap">
          <div className="shead">
            <h2 className="h2"><Accent parts={blog.related} /></h2>
            <TextLink href="/ratgeber">{blog.all}</TextLink>
          </div>
          <ul className="posts posts--index">
            {others.map((other, i) => <PostCard key={other.slug} post={other} index={i} />)}
          </ul>
        </div>
      </section>

      <Inquiry preselect={post.reason} />
    </main>
  );
}
