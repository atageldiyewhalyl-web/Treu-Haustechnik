import { Cta, TextLink } from '@/components/cta';
import { Accent } from '@/components/sections';
import { getCopy } from '@/lib/i18n/server';
import { SITE } from '@/lib/site';

export default async function NotFound() {
  const { notFound, cta } = await getCopy();
  return (
    <main id="main" className="plain-page">
      <section className="page-head wrap">
        <p className="eyebrow">{notFound.eyebrow}</p>
        <h1 className="h1 h1--dark"><Accent parts={notFound.title} /></h1>
        <p className="page-head__lead">{notFound.lead}</p>
        <div className="actions"><Cta href="/">{cta.home}</Cta><TextLink href={SITE.phoneHref}>{cta.call}</TextLink></div>
      </section>
    </main>
  );
}
