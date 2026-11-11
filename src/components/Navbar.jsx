import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import BrandLogo from './BrandLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();
  const { pathname } = useLocation();

  const navLinks = [
    { name: t.nav.home, to: '/' },
    { name: t.nav.about, to: '/about' },
    { name: t.nav.products, to: '/products' },
    { name: t.nav.solutions, to: '/solutions' },
    { name: t.nav.contact, to: '/contact' },
  ];

  // Tutup menu mobile saat pindah halaman atau menekan Escape
  useEffect(() => {
    const id = setTimeout(() => setIsOpen(false), 0);
    return () => clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const navLinkClass = ({ isActive }) =>
    `text-sm lg:text-base font-medium transition-colors ${
      isActive ? 'text-brand-orange' : 'text-brand-muted hover:text-brand-navy'
    }`;

  const langBtn = (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t.nav.switchLang}
      className="text-sm font-bold text-brand-navy border border-brand-border px-3 py-1.5 rounded-md hover:bg-brand-soft transition-colors"
    >
      {lang === 'id' ? 'EN' : 'ID'}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-border">
      <nav aria-label={t.nav.main} className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex-1 flex justify-start min-w-0">
            <BrandLogo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-none justify-center items-center space-x-8">
            {navLinks.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={navLinkClass}>
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex flex-1 justify-end items-center space-x-4">
            {langBtn}
            <Link to="/contact" className="px-5 py-2 bg-brand-navy text-white text-sm font-medium rounded-md hover:bg-brand-navy_light transition-colors">
              {t.nav.talk}
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-2 sm:gap-3">
            {langBtn}
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? t.nav.closeMenu : t.nav.menu}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="text-brand-navy p-2 -mr-2 rounded-md"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="lg:hidden absolute inset-x-0 top-full bg-white border-b border-brand-border px-4 sm:px-6 pt-2 pb-6 space-y-1 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `block px-3 py-3 text-base font-medium rounded-md transition-colors ${
                  isActive ? 'bg-brand-soft text-brand-orange' : 'text-brand-text hover:text-brand-orange hover:bg-brand-soft'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Link to="/contact" className="block mt-4 px-3 py-3 bg-brand-navy text-white text-center font-medium rounded-md">
            {t.nav.talk}
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
