import Seo from '../components/Seo';
import { SITE } from '../config/site';

const LegalPage = ({ content }) => (
  <div className="py-12 sm:py-16 lg:py-20 bg-white">
    <Seo title={content.title} description={content.intro} />
    <article className="max-w-3xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-2">{content.title}</h1>
      <p className="text-sm text-brand-muted mb-8">{content.updated}</p>
      <p className="text-brand-muted leading-relaxed mb-10">{content.intro}</p>
      {content.sections.map((s) => (
        <section key={s.h} className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-brand-navy mb-3">{s.h}</h2>
          {s.p.map((para) => (
            <p key={para} className="text-brand-muted leading-relaxed mb-3">{para}</p>
          ))}
        </section>
      ))}
      <p className="text-brand-muted leading-relaxed pt-6 border-t border-brand-border">
        {content.contactNote}{' '}
        <a href={`mailto:${SITE.email}`} className="text-brand-orange font-medium hover:underline break-all">{SITE.email}</a>.
      </p>
    </article>
  </div>
);

export default LegalPage;
