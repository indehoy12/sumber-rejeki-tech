import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import { waLink } from '../config/site';
import { SERVICE_PAGES } from '../data/content';
import { useLanguage } from '../hooks/useLanguage';

const Check = () => (
  <svg className="h-5 w-5 mt-0.5 shrink-0 text-brand-orange" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
  </svg>
);

// Halaman layanan pendukung. Isi dari src/data/content.js (SERVICE_PAGES[slug]).
const ServicePage = ({ slug }) => {
  const { t, lang } = useLanguage();
  const page = SERVICE_PAGES[slug];

  return (
    <>
      <Seo title={page.seoTitle} description={page.seoDesc} keywords={page.keywords} />
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 text-balance">{page.title}</h1>
          <div className="w-16 h-1 bg-brand-orange mx-auto mb-6" />
          <p className="text-brand-muted leading-relaxed text-base lg:text-lg">{page.intro}</p>
          {lang !== 'id' && <p className="text-sm text-brand-muted italic mt-4">{t.productDetail.sections.idOnly}</p>}
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-brand-soft border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy text-center mb-10">{page.listTitle}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {page.items.map((it, i) => (
              <Reveal key={it} delay={i * 60} className="h-full">
                <li className="h-full flex items-start gap-3 bg-white p-5 rounded-lg border border-brand-border text-brand-muted">
                  <Check />
                  <span>{it}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <p className="text-sm text-brand-muted text-center mt-8">{page.note}</p>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a href={waLink(page.waMessage)} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3.5 bg-brand-orange text-brand-navy font-semibold rounded-md hover:bg-orange-400 transition-colors">
              {page.cta}
            </a>
            <Link to="/products" className="inline-block px-8 py-3.5 bg-transparent border border-gray-400 text-white font-semibold rounded-md hover:border-white transition-colors">
              {t.hero.btnExplore}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
