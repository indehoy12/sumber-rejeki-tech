import Reveal from './Reveal';
import { useLanguage } from '../hooks/useLanguage';

const HowItWorks = () => {
  const { t } = useLanguage();
  const stepNumbers = t.howItWorks.steps.map((_, i) => String(i + 1).padStart(2, "0"));

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">{t.howItWorks.title}</h2>
            <p className="text-brand-muted text-sm md:text-base">{t.howItWorks.desc}</p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Garis Tengah (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-border -translate-x-1/2"></div>
          {/* Garis Kiri (Mobile) */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-brand-border -translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-12">
            {t.howItWorks.steps.map((step, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className={`relative flex items-center w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Titik Nomor */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border border-brand-border bg-white text-brand-navy font-bold text-sm shrink-0 shadow-sm z-10">
                    {stepNumbers[idx]}
                  </div>

                  {/* Kartu Konten */}
                  <div className={`w-[calc(100%-4rem)] ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] p-6 bg-white border border-brand-border rounded-lg shadow-sm ${
                    idx % 2 === 0 
                      ? 'md:mr-auto md:text-right' 
                      : 'md:ml-auto md:text-left'
                  }`}>
                    <h3 className="font-semibold text-brand-navy text-base lg:text-lg mb-2">{step.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
