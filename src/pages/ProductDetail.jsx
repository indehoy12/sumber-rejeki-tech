import { useParams, Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { productsData } from '../data/products';
import { useLanguage } from '../hooks/useLanguage';
import { waLink } from '../config/site';
import { seoBySlug } from '../data/seo';

const ProductDetail = () => {
  const { slug } = useParams();
  const { t, lang } = useLanguage();
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="py-24 sm:py-32 text-center min-h-[60vh] px-4">
        <Seo title={t.productDetail.notFound} noindex />
        <h1 className="text-2xl font-bold text-brand-navy mb-4">{t.productDetail.notFound}</h1>
        <Link to="/products" className="text-brand-orange hover:underline">{t.productDetail.back}</Link>
      </div>
    );
  }

  const title = product.title[lang];
  const desc = product.desc[lang];
  const features = product.features[lang];
  const useCases = product.useCases[lang];
  const available = product.status === 'Available';
  const related = productsData.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);
  const message = t.productDetail.waMessage.replace('{product}', title);
  const seo = seoBySlug[product.slug];
  const isId = lang === 'id';

  return (
    <div className="py-10 sm:py-14 lg:py-16 bg-white">
      <Seo
        title={isId ? seo.title : title}
        description={isId ? seo.desc : desc}
        keywords={isId ? seo.keywords : undefined}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-brand-muted mb-6 sm:mb-8 flex flex-wrap items-center gap-x-2 gap-y-1">
          <Link to="/" className="hover:text-brand-navy">{t.productDetail.home}</Link><span aria-hidden="true">/</span>
          <Link to="/products" className="hover:text-brand-navy">{t.productDetail.products}</Link><span aria-hidden="true">/</span>
          <span className="text-brand-navy font-medium" aria-current="page">{title}</span>
        </nav>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="md:col-span-2">
            <p className="text-sm font-medium text-brand-orange mb-2">{t.categories[product.category]}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 text-balance">{title}</h1>
            <p className="text-lg text-brand-muted mb-8">{desc}</p>

            <h2 className="text-xl font-semibold text-brand-navy mb-4">{t.productDetail.features}</h2>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {features.map((feat) => (
                <li key={feat} className="flex items-start gap-2 text-brand-muted">
                  <svg className="h-5 w-5 mt-0.5 shrink-0 text-brand-orange" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-brand-navy mb-3">{t.productDetail.useCases}</h2>
            <p className="text-brand-muted leading-relaxed">{useCases}</p>

            {isId && (
              <>
                <h2 className="text-xl font-semibold text-brand-navy mt-10 mb-3">Tentang {title}</h2>
                <p className="text-brand-muted leading-relaxed">{seo.intro}</p>

                <h2 className="text-xl font-semibold text-brand-navy mt-10 mb-4">Pertanyaan yang sering diajukan</h2>
                <div className="space-y-3">
                  {seo.faq.map(([q, a]) => (
                    <details key={q} className="group rounded-lg border border-brand-border bg-white p-4">
                      <summary className="cursor-pointer font-medium text-brand-navy">{q}</summary>
                      <p className="mt-2 text-brand-muted leading-relaxed">{a}</p>
                    </details>
                  ))}
                </div>
              </>
            )}
          </div>

          <aside className="bg-brand-soft p-6 lg:p-8 rounded-lg border border-brand-border h-fit md:sticky md:top-24">
            <div className="mb-6">
              <span className="text-sm text-brand-muted block mb-1">{t.productDetail.status}</span>
              <span className={`inline-block px-3 py-1 font-semibold rounded-full text-sm ${
                available ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-700'
              }`}>
                {available ? t.productsPage.available : t.productsPage.comingSoon}
              </span>
            </div>
            <p className="text-sm text-brand-muted mb-6">{t.productDetail.sideDesc}</p>
            <a
              href={waLink(message)}
              target="_blank" rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3 bg-brand-orange text-brand-navy font-semibold rounded-md hover:bg-orange-400 transition-colors"
            >
              {t.productDetail.btnWA}
            </a>
            <Link to="/contact" className="block w-full text-center mt-3 px-6 py-3 border border-brand-border bg-white text-brand-navy font-medium rounded-md hover:border-brand-navy transition-colors">
              {t.productDetail.btnContact}
            </Link>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="mt-14 pt-10 border-t border-brand-border">
            <h2 className="text-xl font-semibold text-brand-navy mb-6">{t.productDetail.related}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((p) => (
                <Link key={p.slug} to={`/products/${p.slug}`} className="p-5 rounded-lg border border-brand-border hover:shadow-md transition-shadow group">
                  <h3 className="font-semibold text-brand-navy group-hover:text-brand-orange transition-colors mb-1">{p.title[lang]}</h3>
                  <p className="text-sm text-brand-muted">{p.desc[lang]}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
