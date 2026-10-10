/* The Ratgeber (guide): the card an article is shown as, and the homepage section with all of them.
   Articles: lib/blog. Pages: app/ratgeber. */
import Image from 'next/image';
import { Link, TextLink } from '@/components/cta';
import { Icon } from '@/components/icons';
import { SectionHead } from '@/components/sections';
import { postsFor, type Post } from '@/lib/blog';
import { fill } from '@/lib/i18n';
import { getCopy, getLang } from '@/lib/i18n/server';
import { cx, idx } from '@/lib/ui';

/** `lead` is the large card; `heading` is the level its title has on the page it stands on. */
export async function PostCard({ post, lead, index = 0, heading: Heading = 'h3' }: { post: Post; lead?: boolean; index?: number; heading?: 'h2' | 'h3' }) {
  const { blog, client } = await getCopy();
  return (
    <li className={cx('post', lead && 'post--lead')} data-reveal style={idx(Math.min(index, 4))}>
      <Link className="post__link" href={`/ratgeber/${post.slug}`}>
        <div className="post__img"><Image src={post.image} alt={post.alt} fill sizes={lead ? '(max-width: 1000px) 100vw, 480px' : '(max-width: 620px) 100vw, 400px'} /></div>
        <div className="post__body">
          <p className="post__meta"><b>{client.names[post.service]}</b><span>{fill(blog.minutes, { n: post.minutes })}</span></p>
          <Heading className="post__title">{post.title}</Heading>
          <p className="post__excerpt">{post.excerpt}</p>
          <p className="post__more"><span>{blog.read}</span><Icon name="right" /></p>
        </div>
      </Link>
    </li>
  );
}

/** Homepage: the first article large, the others beside it. */
export async function BlogTeaser() {
  const { blog } = await getCopy();
  const posts = postsFor(await getLang());
  return (
    <section className="section section--soft" id="ratgeber">
      <div className="wrap">
        <SectionHead eyebrow={blog.eyebrow} title={blog.title} aside={blog.aside}>
          <TextLink href="/ratgeber">{blog.all}</TextLink>
        </SectionHead>
        <ul className="posts posts--home">
          {posts.map((post, i) => <PostCard key={post.slug} post={post} lead={i === 0} index={i} />)}
        </ul>
      </div>
    </section>
  );
}
