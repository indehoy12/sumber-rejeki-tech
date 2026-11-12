import { Link } from 'react-router-dom';
import { productsData } from '../data/products';
import { featuredKeywordSlugs, seoBySlug } from '../data/seo';
import { useLanguage } from '../hooks/useLanguage';

// Blok tautan internal berbasis kata kunci (Bahasa Indonesia) untuk membantu Google memahami halaman produk.
const PopularSearches = () => {
  const { lang } = useLanguage();
  if (lang !== 'id') return null;

  const items = featuredKeywordSlugs
    .map((slug) => productsData.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <section className="py-14 sm:py-20 bg-white" aria-labelledby="popular-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="popular-title" className="text-2xl sm:text-3xl font-bold text-brand-navy text-center mb-3 text-balance">
          Software & Aplikasi untuk Event Organizer dan Wedding
        </h2>
        <p className="text-brand-muted text-center max-w-2xl mx-auto mb-10">
          Dari registrasi event online sampai e-sertifikat otomatis, pilih sistem yang sesuai kebutuhan acara Anda.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((p) => (
            <Link
              key={p.slug}
              to={`/products/${p.slug}`}
              className="p-5 rounded-lg border border-brand-border hover:shadow-md transition-shadow group"
            >
              <h3 className="font-semibold text-brand-navy group-hover:text-brand-orange transition-colors mb-1">
                {seoBySlug[p.slug].title}
              </h3>
              <p className="text-sm text-brand-muted">{p.short.id}</p>
            </Link>
          ))}
        </div>
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3 text-balance">
            Teknologi Event untuk EO & Wedding Organizer di Pekalongan
          </h2>
          <p className="text-brand-muted leading-relaxed">
            Sumber Rejeki Tech melayani event organizer (EO) Pekalongan, wedding organizer, sekolah, kampus, dan
            perusahaan di Pekalongan, Jawa Tengah, serta seluruh Indonesia. Kelola registrasi, QR check-in, tiket,
            undangan digital, hingga e-sertifikat dalam satu sistem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PopularSearches;
