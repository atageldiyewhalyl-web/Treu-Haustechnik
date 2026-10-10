import type { Metadata } from 'next';
import { PostCard } from '@/components/blog';
import { Accent, Inquiry } from '@/components/sections';
import { postsFor } from '@/lib/blog';
import { getCopy, getLang } from '@/lib/i18n/server';

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = (await getCopy()).blog.index;
  return { title: meta.title, description: meta.description, alternates: { canonical: '/ratgeber' } };
}

/** All Ratgeber articles. */
export default async function GuidePage() {
  const { blog } = await getCopy();
  const posts = postsFor(await getLang());
  return (
    <main id="main" className="plain-page">
      <div className="wrap">
        <header className="page-head">
          <p className="eyebrow">{blog.eyebrow}</p>
          <h1 className="h1 h1--dark"><Accent parts={blog.index.title} /></h1>
          <p className="page-head__lead">{blog.index.lead}</p>
        </header>
        <ul className="posts posts--index">
          {posts.map((post, i) => <PostCard key={post.slug} post={post} index={i} heading="h2" />)}
        </ul>
      </div>
      <Inquiry />
    </main>
  );
}
