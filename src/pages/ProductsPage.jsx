import { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import { productsData } from '../data/products';
import { useLanguage } from '../hooks/useLanguage';

const categories = ['All', 'Registration & Attendance', 'Event Experience', 'Event Operations', 'Reporting & Business'];

const ProductsPage = () => {
  const { t, lang } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const q = searchTerm.trim().toLowerCase();
  const filteredProducts = productsData.filter((product) => {
    const matchSearch = !q || product.title[lang].toLowerCase().includes(q) || product.desc[lang].toLowerCase().includes(q);
    const matchCategory = filterCategory === 'All' || product.category === filterCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="py-12 sm:py-16 bg-brand-soft min-h-screen">
      <Seo title={t.productsPage.title} description={t.productsPage.desc} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader title={t.productsPage.title} desc={t.productsPage.desc} />

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-8">
          <div role="group" aria-label={t.productsPage.filterLabel} className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={filterCategory === cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  filterCategory === cat ? 'bg-brand-navy text-white' : 'bg-white text-brand-navy border border-brand-border hover:bg-gray-50'
                }`}
              >
                {cat === 'All' ? t.productsPage.all : t.categories[cat]}
              </button>
            ))}
          </div>
          <div className="w-full lg:w-72">
            <label htmlFor="product-search" className="sr-only">{t.productsPage.searchLabel}</label>
            <input
              id="product-search"
              type="search"
              placeholder={t.productsPage.search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2.5 bg-white border border-brand-border rounded-md focus:outline-none focus:border-brand-navy"
            />
          </div>
        </div>

        <p className="text-sm text-brand-muted mb-6" aria-live="polite">
          {filteredProducts.length} / {productsData.length} {t.productsPage.resultCount}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <Link key={prod.slug} to={`/products/${prod.slug}`} className="bg-white p-6 rounded-lg border border-brand-border hover:shadow-lg transition-shadow group flex flex-col h-full">
              <div className="flex justify-between items-start gap-3 mb-2">
                <h2 className="text-lg font-semibold text-brand-navy group-hover:text-brand-orange transition-colors">{prod.title[lang]}</h2>
                <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${
                  prod.status === 'Available' ? 'bg-green-50 text-green-700' : 'bg-brand-soft text-brand-muted'
                }`}>
                  {prod.status === 'Available' ? t.productsPage.available : t.productsPage.comingSoon}
                </span>
              </div>
              <p className="text-xs text-brand-muted mb-4">{t.categories[prod.category]}</p>
              <p className="text-sm text-brand-muted mb-6 flex-grow">{prod.desc[lang]}</p>
              <span className="text-sm font-medium text-brand-orange">{t.products.viewDetails} <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <p className="text-center text-brand-muted mt-10">{t.productsPage.noResult}</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
