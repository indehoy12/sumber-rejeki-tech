import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { SITE } from '../config/site';
import BrandLogo from './BrandLogo';

const linkCls = 'hover:text-brand-orange transition-colors';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white pt-14 lg:pt-16 pb-8 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          <div className="sm:col-span-2">
            <div className="mb-6"><BrandLogo heightClass="h-10 lg:h-12" /></div>
            <p className="text-brand-muted text-sm max-w-sm leading-relaxed">{t.footer.desc}</p>
          </div>
          <nav aria-label={t.footer.nav}>
            <h2 className="font-semibold text-brand-navy mb-4">{t.footer.nav}</h2>
            <ul className="space-y-3 text-sm text-brand-muted">
              <li><Link to="/" className={linkCls}>{t.nav.home}</Link></li>
              <li><Link to="/about" className={linkCls}>{t.nav.about}</Link></li>
              <li><Link to="/products" className={linkCls}>{t.nav.products}</Link></li>
              <li><Link to="/solutions" className={linkCls}>{t.nav.solutions}</Link></li>
              <li><Link to="/contact" className={linkCls}>{t.nav.contact}</Link></li>
            </ul>
          </nav>
          <div>
            <h2 className="font-semibold text-brand-navy mb-4">{t.footer.contact}</h2>
            <ul className="space-y-3 text-sm text-brand-muted">
              <li><a href={`mailto:${SITE.email}`} className={`${linkCls} break-all`}>{SITE.email}</a></li>
              <li><a href={`tel:+${SITE.whatsapp}`} className={linkCls}>{SITE.phoneDisplay}</a></li>
              <li className="pt-2"><Link to="/privacy" className={linkCls}>{t.footer.privacy}</Link></li>
              <li><Link to="/terms" className={linkCls}>{t.footer.terms}</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
          <p className="text-sm text-brand-muted text-center md:text-left">
            &copy; {new Date().getFullYear()} {SITE.name}. {t.footer.rights}
          </p>
          <p className="text-sm text-brand-muted">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
