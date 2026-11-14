import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { portfolioItems } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';

// Portofolio pilihan di beranda. Otomatis tersembunyi selama belum ada proyek di src/data/portfolio.js.
const PortfolioSection = () => {
  const { t } = useLanguage();
  if (portfolioItems.length === 0) return null;
  const items = portfolioItems.slice(0, 3);
  return (
    <section className="py-16 lg:py-24 bg-brand-soft border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">{t.portfolioPage.homeTitle}</h2>
              <p className="text-brand-muted text-sm md:text-base">{t.portfolioPage.homeDesc}</p>
            </div>
            <Link to="/portfolio" className="text-brand-orange font-medium hover:text-brand-navy transition-colors shrink-0">{t.portfolioPage.viewAll} <span aria-hidden="true">→</span></Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.slug} delay={i * 80} className="h-full">
              <Link to="/portfolio" className="bg-white rounded-lg border border-brand-border overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
                {it.images && it.images[0] && <img src={it.images[0].src} alt={it.images[0].alt} loading="lazy" className="w-full h-auto" />}
                <div className="p-5">
                  <p className="text-xs font-medium text-brand-orange mb-1">{it.category}</p>
                  <h3 className="font-semibold text-brand-navy mb-1">{it.name}</h3>
                  <p className="text-sm text-brand-muted">{it.desc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
