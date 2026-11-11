import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import { useLanguage } from '../hooks/useLanguage';

const SolutionsPage = () => {
  const { t } = useLanguage();
  const s = t.solutionsPage;
  return (
    <div className="py-12 sm:py-16 bg-white">
      <Seo title={s.title} description={s.desc} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader title={s.title} desc={s.desc} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {s.items.map((item) => (
            <div key={item.title} className="bg-brand-soft p-6 lg:p-8 rounded-lg border border-brand-border hover:shadow-md transition-shadow flex flex-col">
              <h2 className="text-xl font-semibold text-brand-navy mb-3">{item.title}</h2>
              <p className="text-brand-muted text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
              <Link to="/contact" className="text-sm font-medium text-brand-orange hover:text-brand-navy transition-colors">
                {s.cta} <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SolutionsPage;
