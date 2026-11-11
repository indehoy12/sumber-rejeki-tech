import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import Skeleton from './Skeleton';
import { useLanguage } from '../hooks/useLanguage';
import { productsData } from '../data/products';

// Sistem unggulan: campuran dari setiap kategori
const FEATURED = ['event-registration', 'qr-checkin', 'e-badge', 'lucky-draw', 'event-dashboard', 'e-certificate'];

const Products = () => {
  const { t, lang } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const featuredProducts = FEATURED.map((slug) => productsData.find((p) => p.slug === slug)).filter(Boolean);

  return (
    <section id="products" className="py-16 lg:py-24 bg-brand-soft border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10 lg:mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">{t.products.title}</h2>
              <p className="text-brand-muted text-sm md:text-base">{t.products.desc}</p>
            </div>
            <Link to="/products" className="text-brand-orange font-medium hover:text-brand-navy transition-colors flex items-center gap-2 text-sm md:text-base shrink-0">
              {t.products.viewAll} <span aria-hidden="true" className="text-lg">→</span>
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            Array.from({ length: 6 }, (_, idx) => (
              <div key={idx} className="bg-white p-6 lg:p-8 rounded-lg border border-brand-border flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <Skeleton className="h-6 w-2/3" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                </div>
                <div className="space-y-2 mb-6 flex-grow">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/6" />
                </div>
                <Skeleton className="h-5 w-24" />
              </div>
            ))
          ) : featuredProducts.map((prod, idx) => (
            <Reveal key={prod.slug} delay={idx * 80} className="h-full">
              <Link to={`/products/${prod.slug}`} className="bg-white p-6 lg:p-8 rounded-lg border border-brand-border flex flex-col h-full hover:shadow-md transition-shadow group">
                <div className="flex justify-between items-start gap-3 mb-4">
                  <h3 className="text-lg font-semibold text-brand-navy group-hover:text-brand-orange transition-colors">{prod.title[lang]}</h3>
                  <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${
                    prod.status === 'Available' ? 'bg-green-50 text-green-700' : 'bg-brand-soft text-brand-muted'
                  }`}>
                    {prod.status === 'Available' ? t.products.statusAvailable : t.products.statusComingSoon}
                  </span>
                </div>
                <p className="text-sm text-brand-muted leading-relaxed mb-6 flex-grow">{prod.desc[lang]}</p>
                <span className="text-sm font-medium text-brand-navy group-hover:text-brand-orange transition-colors">
                  {t.products.viewDetails} <span aria-hidden="true">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
