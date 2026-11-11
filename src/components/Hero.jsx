import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { useLanguage } from '../hooks/useLanguage';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-brand-soft to-white pt-12 pb-16 sm:pb-20 lg:pt-24 lg:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[42rem] max-w-[140%] rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white px-3.5 py-1.5 text-xs sm:text-sm font-medium text-brand-navy shadow-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-brand-orange" aria-hidden="true" />
            {t.hero.badge}
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy tracking-tight leading-tight mb-6 text-balance">
            {t.hero.title1} <br className="hidden md:block" /> {t.hero.title2}
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-base sm:text-lg md:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.hero.desc}
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link to="/products" className="px-6 py-3.5 lg:px-8 bg-brand-navy text-white font-medium rounded-md hover:bg-brand-navy_light transition-colors">
              {t.hero.btnExplore}
            </Link>
            <Link to="/contact" className="px-6 py-3.5 lg:px-8 bg-white text-brand-navy border border-brand-border font-medium rounded-md hover:border-brand-navy transition-colors">
              {t.hero.btnDiscuss}
            </Link>
          </div>
        </Reveal>
        <Reveal delay={400}>
          <dl className="mt-12 lg:mt-16 grid grid-cols-3 gap-2 sm:gap-6 max-w-xl mx-auto">
            {t.hero.stats.map((s) => (
              <div key={s.label} className="rounded-lg bg-white/80 border border-brand-border px-2 py-4 sm:px-4">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl sm:text-3xl font-bold text-brand-navy">{s.value}</dd>
                <dd className="text-[11px] sm:text-sm text-brand-muted leading-snug mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
