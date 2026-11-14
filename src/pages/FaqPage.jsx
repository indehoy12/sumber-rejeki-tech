import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import { waLink } from '../config/site';
import { FAQ_PAGE } from '../data/content';
import { buildFaqJsonLd } from '../data/jsonld';
import { useLanguage } from '../hooks/useLanguage';

const FaqPage = () => {
  const { t, lang } = useLanguage();
  const f = FAQ_PAGE;

  return (
    <div className="py-12 sm:py-16 bg-white">
      <Seo title={f.seoTitle} description={f.seoDesc} jsonLd={buildFaqJsonLd(f.items)} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader title={f.title} desc={f.desc} />
        {lang !== 'id' && <p className="text-sm text-brand-muted italic mb-6 text-center">{t.productDetail.sections.idOnly}</p>}
        <div className="space-y-3">
          {f.items.map(([q, a]) => (
            <details key={q} className="group rounded-lg border border-brand-border bg-white p-4">
              <summary className="cursor-pointer font-medium text-brand-navy">{q}</summary>
              <p className="mt-2 text-brand-muted leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center bg-brand-soft border border-brand-border rounded-lg p-6">
          <p className="text-brand-muted mb-4">{f.cta}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href={waLink(f.waMessage)} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-brand-orange text-brand-navy font-semibold rounded-md hover:bg-orange-400 transition-colors">
              {f.ctaBtn}
            </a>
            <Link to="/contact" className="px-6 py-3 border border-brand-border bg-white text-brand-navy font-medium rounded-md hover:border-brand-navy transition-colors">
              {t.productDetail.btnContact}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
