import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import { useLanguage } from '../hooks/useLanguage';
import { waLink } from '../config/site';

const SolutionsPage = () => {
  const { t } = useLanguage();
  const s = t.solutionsPage;
  return (
    <div className="py-12 sm:py-16 bg-white">
      <Seo title={s.title} description={s.desc} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader title={s.title} desc={s.desc} />

        <section aria-labelledby="flex-title" className="mb-12 rounded-lg border border-brand-border bg-white p-6 lg:p-8">
          <h2 id="flex-title" className="text-xl font-semibold text-brand-navy mb-3">{s.flexTitle}</h2>
          <p className="text-brand-muted text-sm leading-relaxed mb-6 max-w-3xl">{s.flexDesc}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {s.methods.map((m, i) => (
              <li key={m.title} className="bg-brand-soft p-4 rounded-lg border border-brand-border">
                <div className="text-brand-orange font-bold mb-1">0{i + 1}</div>
                <h3 className="font-semibold text-brand-navy">{m.title}</h3>
                <p className="text-sm text-brand-muted">{m.desc}</p>
              </li>
            ))}
          </ul>
          <p className="text-xs text-brand-muted mb-5">{s.flexNote}</p>
          <a href={waLink(s.flexWa)} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-brand-orange text-brand-navy font-semibold rounded-md hover:bg-orange-400 transition-colors">
            {s.flexBtn}
          </a>
        </section>

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
