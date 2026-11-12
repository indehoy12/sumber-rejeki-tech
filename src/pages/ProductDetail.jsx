import { useParams, Link } from 'react-router-dom';
import Seo from '../components/Seo';
import StatusBadge from '../components/StatusBadge';
import { productsData, parseFeature } from '../data/products';
import { useLanguage } from '../hooks/useLanguage';
import { waLink } from '../config/site';
import { seoBySlug } from '../data/seo';

const Check = () => (
  <svg className="h-5 w-5 mt-0.5 shrink-0 text-brand-orange" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
  </svg>
);

const H2 = ({ children }) => <h2 className="text-xl font-semibold text-brand-navy mt-10 mb-4">{children}</h2>;

const WaButton = ({ href, children }) => (
  <a
    href={href}
    target="_blank" rel="noopener noreferrer"
    className="block w-full text-center px-6 py-3 bg-brand-orange text-brand-navy font-semibold rounded-md hover:bg-orange-400 transition-colors"
  >
    {children}
  </a>
);

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

  const sec = t.productDetail.sections;
  const title = product.title[lang];
  const desc = product.desc[lang];
  const related = productsData.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);
  const message = t.productDetail.waMessage.replace('{product}', title);
  const seo = seoBySlug[product.slug];
  const isId = lang === 'id';
  const features = product.features.map(parseFeature);

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
            {/* Hero produk */}
            <p className="text-sm font-medium text-brand-orange mb-2">{t.categories[product.category]}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 text-balance">{title}</h1>
            <p className="text-lg text-brand-muted mb-6">{desc}</p>

            {product.status !== 'Available' && (
              <p role="note" className="text-sm text-amber-900 bg-amber-50 border border-amber-200 rounded-md px-4 py-3 mb-2">
                {sec.devNotice}
              </p>
            )}
            {!isId && <p className="text-sm text-brand-muted italic mt-4">{sec.idOnly}</p>}

            <H2>{sec.about} {title}</H2>
            <p className="text-brand-muted leading-relaxed">{seo.intro}</p>

            <H2>{sec.benefits}</H2>
            <ul className="space-y-3">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-brand-muted"><Check /><span>{b}</span></li>
              ))}
            </ul>

            <H2>{sec.targets}</H2>
            <ul className="flex flex-wrap gap-2">
              {product.targets.map((u) => (
                <li key={u} className="text-sm text-brand-navy bg-brand-soft border border-brand-border rounded-full px-3 py-1">{u}</li>
              ))}
            </ul>

            {product.modules ? (
              <>
                <H2>{sec.modules}</H2>
                <div className="space-y-6">
                  {product.modules.map((m, i) => (
                    <div key={m.title} className="rounded-lg border border-brand-border p-5">
                      <h3 className="text-lg font-semibold text-brand-navy mb-3">{String.fromCharCode(65 + i)}. {m.title}</h3>
                      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                        {m.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-brand-muted"><Check />{f}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-brand-navy mt-8 mb-3">{sec.common}</h3>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {product.commonFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-brand-muted"><Check />{f}</li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <H2>{sec.features}</H2>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                  {features.map((f) => (
                    <li key={f.name} className="flex items-start gap-2 text-brand-muted">
                      <Check />
                      <span><strong className="font-semibold text-brand-navy">{f.name}</strong>{f.desc && <> — {f.desc}</>}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <H2>{sec.how}</H2>
            <ol className="space-y-3">
              {product.howItWorks.map((step, i) => (
                <li key={step} className="flex items-start gap-3 text-brand-muted">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-brand-navy text-white text-xs font-semibold flex items-center justify-center mt-0.5">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <H2>{sec.devices}</H2>
            <p className="text-brand-muted leading-relaxed">{product.devices}</p>

            <H2>{sec.internet}</H2>
            <p className="text-brand-muted leading-relaxed">{product.internet}</p>
            {product.notes && <p className="text-sm text-brand-muted mt-3 border-l-4 border-brand-orange pl-3">{product.notes}</p>}

            <H2>{sec.security}</H2>
            <p className="text-brand-muted leading-relaxed">{product.security}</p>

            <H2>{sec.screenshots}</H2>
            <p className="text-sm text-brand-muted">{sec.noScreenshots}</p>

            <H2>{sec.faq}</H2>
            <div className="space-y-3">
              {seo.faq.map(([q, a]) => (
                <details key={q} className="group rounded-lg border border-brand-border bg-white p-4">
                  <summary className="cursor-pointer font-medium text-brand-navy">{q}</summary>
                  <p className="mt-2 text-brand-muted leading-relaxed">{a}</p>
                </details>
              ))}
            </div>

            <div className="mt-10">
              <WaButton href={waLink(message)}>{t.productDetail.btnWA}</WaButton>
            </div>
          </div>

          <aside className="bg-brand-soft p-6 lg:p-8 rounded-lg border border-brand-border h-fit md:sticky md:top-24">
            <div className="mb-6">
              <span className="text-sm text-brand-muted block mb-1">{t.productDetail.status}</span>
              <StatusBadge status={product.status} className="!text-sm !px-3" />
            </div>
            <p className="text-sm text-brand-muted mb-6">{t.productDetail.sideDesc}</p>
            <WaButton href={waLink(message)}>{t.productDetail.btnWA}</WaButton>
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
                  <p className="text-sm text-brand-muted">{p.short[lang]}</p>
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
