import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { waLink } from '../config/site';

const CTA = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 lg:py-24 bg-brand-navy text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-balance">{t.cta.title}</h2>
        <p className="text-gray-200 mb-10 max-w-2xl mx-auto text-base lg:text-lg">{t.cta.desc}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a href={waLink(t.contactPage.waIntro)} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 lg:px-8 lg:py-4 bg-brand-orange text-brand-navy font-semibold rounded-md hover:bg-orange-400 transition-colors">
            {t.cta.wa}
          </a>
          <Link to="/contact" className="px-6 py-3.5 lg:px-8 lg:py-4 bg-transparent border border-gray-400 text-white font-semibold rounded-md hover:border-white transition-colors">
            {t.cta.email}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
