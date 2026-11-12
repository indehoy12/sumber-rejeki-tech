import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { SITE, waLink } from '../config/site';
import { SOCIAL_HANDLES } from '../config/social';
import { BrandIcon, MailIcon } from './SocialIcons';
import BrandLogo from './BrandLogo';

const linkCls = 'hover:text-brand-orange transition-colors';
const iconBtnCls =
  'inline-flex items-center justify-center w-10 h-10 rounded-full border border-brand-border text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-colors';
const extProps = { target: '_blank', rel: 'noopener noreferrer' };

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white pt-14 lg:pt-16 pb-8 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          <div className="sm:col-span-2">
            <div className="mb-6"><BrandLogo heightClass="h-10 lg:h-12" /></div>
            <p className="text-brand-muted text-sm max-w-sm leading-relaxed">{t.footer.desc}</p>
            <ul className="flex flex-wrap gap-3 mt-5" aria-label={t.footer.follow}>
              <li>
                <a href={waLink()} {...extProps} className={iconBtnCls} aria-label={`WhatsApp ${SITE.phoneDisplay}`} title="WhatsApp">
                  <BrandIcon name="whatsapp" />
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className={iconBtnCls} aria-label={`Email ${SITE.email}`} title="Email">
                  <MailIcon />
                </a>
              </li>
              <li>
                <a href={SITE.social.instagram} {...extProps} className={iconBtnCls} aria-label={`Instagram ${SOCIAL_HANDLES.instagram}`} title="Instagram">
                  <BrandIcon name="instagram" />
                </a>
              </li>
              <li>
                <a href={SITE.social.tiktok} {...extProps} className={iconBtnCls} aria-label={`TikTok ${SOCIAL_HANDLES.tiktok}`} title="TikTok">
                  <BrandIcon name="tiktok" />
                </a>
              </li>
              <li>
                <a href={SITE.social.threads} {...extProps} className={iconBtnCls} aria-label={`Threads ${SOCIAL_HANDLES.threads}`} title="Threads">
                  <BrandIcon name="threads" />
                </a>
              </li>
            </ul>
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
              <li>
                <a href={`mailto:${SITE.email}`} className={`${linkCls} break-all inline-flex items-center gap-2`}>
                  <MailIcon className="w-4 h-4 shrink-0" />{SITE.email}
                </a>
              </li>
              <li>
                <a href={waLink()} {...extProps} className={`${linkCls} inline-flex items-center gap-2`} aria-label={`WhatsApp ${SITE.phoneDisplay}`}>
                  <BrandIcon name="whatsapp" className="w-4 h-4 shrink-0" />{SITE.phoneDisplay}
                </a>
              </li>
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
