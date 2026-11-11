import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { useLanguage } from '../hooks/useLanguage';

const NotFound = () => {
  const { t } = useLanguage();
  return (
    <div className="py-24 sm:py-32 bg-white text-center">
      <Seo title={t.notFound.title} noindex />
      <div className="max-w-xl mx-auto px-4">
        <p className="text-6xl sm:text-7xl font-bold text-brand-orange mb-4">404</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-3">{t.notFound.title}</h1>
        <p className="text-brand-muted mb-8">{t.notFound.desc}</p>
        <Link to="/" className="inline-block px-6 py-3 bg-brand-navy text-white font-medium rounded-md hover:bg-brand-navy_light transition-colors">
          {t.notFound.back}
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
