import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { SERVICE_PAGES, SERVICES_HOME } from '../data/content';

// Blok "Layanan Pengembangan Lainnya" di beranda: ditampilkan terpisah dari 13 produk Event Technology.
const ServicesSection = () => {
  const s = SERVICES_HOME;
  const pages = Object.values(SERVICE_PAGES);
  return (
    <section id="services" className="py-16 lg:py-24 bg-white border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">{s.title}</h2>
            <p className="text-brand-muted max-w-2xl mx-auto text-sm md:text-base">{s.desc}</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pages.map((p, i) => (
            <Reveal key={p.path} delay={i * 100} className="h-full">
              <Link to={p.path} className="bg-brand-soft p-6 lg:p-8 rounded-lg border border-brand-border flex flex-col h-full hover:shadow-md transition-shadow group">
                <h3 className="text-lg font-semibold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">{p.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-6 flex-grow">{p.intro}</p>
                <span className="text-sm font-medium text-brand-navy group-hover:text-brand-orange transition-colors">{s.more} <span aria-hidden="true">→</span></span>
              </Link>
            </Reveal>
          ))}
          <Reveal delay={200} className="h-full">
            <Link to="/faq" className="bg-brand-soft p-6 lg:p-8 rounded-lg border border-brand-border flex flex-col h-full hover:shadow-md transition-shadow group">
              <h3 className="text-lg font-semibold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">{s.faqTitle}</h3>
              <p className="text-sm text-brand-muted leading-relaxed mb-6 flex-grow">{s.faqDesc}</p>
              <span className="text-sm font-medium text-brand-navy group-hover:text-brand-orange transition-colors">{s.faqLink} <span aria-hidden="true">→</span></span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
