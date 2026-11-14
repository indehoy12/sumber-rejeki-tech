import { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import { portfolioItems, PORTFOLIO_CATEGORIES } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';

const PortfolioPage = () => {
  const { t, lang } = useLanguage();
  const p = t.portfolioPage;
  const [cat, setCat] = useState('All');
  const empty = portfolioItems.length === 0;
  const cats = ['All', ...PORTFOLIO_CATEGORIES.filter((c) => portfolioItems.some((i) => i.category === c))];
  const items = portfolioItems.filter((i) => cat === 'All' || i.category === cat);

  return (
    <div className="py-12 sm:py-16 bg-brand-soft min-h-[60vh]">
      <Seo title={p.title} description={p.desc} noindex={empty} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader title={p.title} desc={p.desc} />
        {lang !== 'id' && !empty && <p className="text-sm text-brand-muted italic mb-6 text-center">{t.productDetail.sections.idOnly}</p>}

        {empty ? (
          <div className="max-w-xl mx-auto text-center bg-white border border-brand-border rounded-lg p-8">
            <p className="text-brand-muted mb-5">{p.empty}</p>
            <Link to="/contact" className="inline-block px-6 py-3 bg-brand-navy text-white font-medium rounded-md hover:bg-brand-navy_light transition-colors">{t.nav.talk}</Link>
          </div>
        ) : (
          <>
            {cats.length > 2 && (
              <div role="group" aria-label={p.filter} className="flex flex-wrap gap-2 mb-8">
                {cats.map((c) => (
                  <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${cat === c ? 'bg-brand-navy text-white' : 'bg-white text-brand-navy border border-brand-border hover:bg-gray-50'}`}>
                    {c === 'All' ? t.productsPage.all : c}
                  </button>
                ))}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((it) => (
                <article key={it.slug} className="bg-white rounded-lg border border-brand-border overflow-hidden flex flex-col">
                  {it.images && it.images.length > 0 && (
                    <img src={it.images[0].src} alt={it.images[0].alt} loading="lazy" className="w-full h-auto bg-brand-soft" />
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-xs font-medium text-brand-orange mb-2">{it.category}{it.internal ? ` · ${p.internal}` : ''}</p>
                    <h2 className="text-lg font-semibold text-brand-navy mb-2">{it.name}</h2>
                    <p className="text-sm text-brand-muted mb-4">{it.desc}</p>
                    <dl className="text-sm space-y-2 mb-4">
                      {it.need && <div><dt className="font-semibold text-brand-navy">{p.need}</dt><dd className="text-brand-muted">{it.need}</dd></div>}
                      {it.solution && <div><dt className="font-semibold text-brand-navy">{p.solution}</dt><dd className="text-brand-muted">{it.solution}</dd></div>}
                    </dl>
                    {it.tech && it.tech.length > 0 && (
                      <ul className="flex flex-wrap gap-2 mb-4" aria-label={p.tech}>
                        {it.tech.map((x) => <li key={x} className="text-xs text-brand-navy bg-brand-soft border border-brand-border rounded-full px-2.5 py-1">{x}</li>)}
                      </ul>
                    )}
                    {it.link && (
                      <a href={it.link} target="_blank" rel="noopener noreferrer" className="mt-auto text-sm font-medium text-brand-orange hover:text-brand-navy transition-colors">
                        {p.visit} <span aria-hidden="true">→</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
