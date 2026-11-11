import Reveal from './Reveal';
import { useLanguage } from '../hooks/useLanguage';

const Introduction = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 lg:py-24 bg-brand-soft border-y border-brand-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <Reveal>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-navy mb-4 lg:mb-6">{t.intro.title}</h2>
              <div className="w-16 h-1 bg-brand-orange"></div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div>
              <p className="text-brand-muted leading-relaxed text-base lg:text-lg">
                {t.intro.desc}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
