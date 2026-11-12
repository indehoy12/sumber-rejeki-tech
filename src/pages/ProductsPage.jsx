import { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import StatusBadge from '../components/StatusBadge';
import { productsData, CATEGORIES, getHighlights } from '../data/products';
import { waLink } from '../config/site';
import { useLanguage } from '../hooks/useLanguage';

const categories = ['All', ...CATEGORIES];

const ProductsPage = () => {
  const { t, lang } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const q = searchTerm.trim().toLowerCase();
  const filteredProducts = productsData.filter((product) => {
    const matchSearch = !q || product.title[lang].toLowerCase().includes(q) || product.short[lang].toLowerCase().includes(q) || product.desc[lang].toLowerCase().includes(q);
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
            <article key={prod.slug} className="bg-white p-6 rounded-lg border border-brand-border hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="flex justify-between items-start gap-3 mb-2">
                <h2 className="text-lg font-semibold text-brand-navy">
                  <Link to={`/products/${prod.slug}`} className="hover:text-brand-orange transition-colors">{prod.title[lang]}</Link>
                </h2>
                <StatusBadge status={prod.status} />
              </div>
              <p className="text-xs font-medium text-brand-orange mb-3">{t.categories[prod.category]}</p>
              <p className="text-sm text-brand-muted mb-4">{prod.short[lang]}</p>
              <ul className="flex flex-wrap gap-2 mb-6 flex-grow content-start" aria-label={t.productsPage.highlights}>
                {getHighlights(prod).map((h) => (
                  <li key={h} className="text-xs text-brand-navy bg-brand-soft border border-brand-border rounded-full px-2.5 py-1">{h}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 items-center">
                <Link to={`/products/${prod.slug}`} className="text-sm font-medium text-brand-navy border border-brand-border rounded-md px-4 py-2 hover:border-brand-navy transition-colors">
                  {t.productsPage.btnDetail} <span aria-hidden="true">→</span>
                </Link>
                <a
                  href={waLink(t.productDetail.waMessage.replace('{product}', prod.title[lang]))}
                  target="_blank" rel="noopener noreferrer"
                  className="text-sm font-semibold text-brand-navy bg-brand-orange rounded-md px-4 py-2 hover:bg-orange-400 transition-colors"
                >
                  {t.productsPage.btnWA}
                </a>
              </div>
            </article>
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
