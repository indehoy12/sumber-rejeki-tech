import Reveal from './Reveal';
import { useLanguage } from '../hooks/useLanguage';

const Solutions = () => {
  const { t } = useLanguage();

  return (
    <section id="solutions" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">{t.solutions.title}</h2>
            <p className="text-brand-muted max-w-2xl mx-auto text-sm md:text-base">{t.solutions.desc}</p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.solutions.items.map((cat, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="p-6 lg:p-8 border border-brand-border rounded-lg hover:border-brand-navy transition-colors bg-white group h-full">
                <div className="text-brand-orange font-bold text-xl mb-4">0{idx + 1}</div>
                <h3 className="text-lg font-semibold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">{cat.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{cat.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
