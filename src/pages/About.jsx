import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import { useLanguage } from '../hooks/useLanguage';

const About = () => {
  const { t } = useLanguage();
  const a = t.aboutPage;

  return (
    <>
      <Seo title={a.seoTitle} description={a.desc} />
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 text-balance">{a.title}</h1>
          <div className="w-16 h-1 bg-brand-orange mx-auto mb-6" />
          <p className="text-brand-muted leading-relaxed text-base lg:text-lg">{a.desc}</p>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-brand-soft border-y border-brand-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy text-center mb-10">{a.whoTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {a.who.map((w, i) => (
              <Reveal key={w.title} delay={i * 100} className="h-full">
                <div className="h-full bg-white p-6 lg:p-8 rounded-lg border border-brand-border">
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">{w.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy text-center mb-10">{a.approachTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {a.approach.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="h-full">
                <div className="h-full p-6 border border-brand-border rounded-lg">
                  <div className="text-brand-orange font-bold text-xl mb-3">0{i + 1}</div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">{p.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-balance">{a.ctaTitle}</h2>
          <Link to="/contact" className="inline-block px-8 py-3.5 bg-brand-orange text-brand-navy font-semibold rounded-md hover:bg-orange-400 transition-colors">
            {a.ctaBtn}
          </Link>
        </div>
      </section>
    </>
  );
};
export default About;
