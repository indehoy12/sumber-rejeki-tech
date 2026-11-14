import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import BrandLogo from './BrandLogo';
import { portfolioItems } from '../data/portfolio';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();
  const { pathname } = useLocation();

  // Menu dengan submenu: Produk (katalog + paket fleksibel) dan Layanan (website + software khusus).
  // Menu Portofolio hanya muncul bila src/data/portfolio.js sudah berisi proyek.
  const navLinks = [
    { name: t.nav.home, to: '/' },
    { name: t.nav.about, to: '/about' },
    {
      name: t.nav.products, match: ['/products', '/solutions'],
      children: [
        { name: t.nav.catalog, to: '/products' },
        { name: t.nav.flex, to: '/solutions' },
      ],
    },
    {
      name: t.nav.services, match: ['/website-development', '/custom-software-development'],
      children: [
        { name: t.nav.websiteDev, to: '/website-development' },
        { name: t.nav.customSoft, to: '/custom-software-development' },
      ],
    },
    ...(portfolioItems.length > 0 ? [{ name: t.nav.portfolio, to: '/portfolio' }] : []),
    { name: t.nav.contact, to: '/contact' },
  ];
  const [openMenu, setOpenMenu] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const id = setTimeout(() => setOpenMenu(null), 0);
    return () => clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    if (!openMenu) return undefined;
    const onDown = (e) => navRef.current && !navRef.current.contains(e.target) && setOpenMenu(null);
    const onKey = (e) => e.key === 'Escape' && setOpenMenu(null);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey); };
  }, [openMenu]);

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
          <div ref={navRef} className="hidden lg:flex flex-none justify-center items-center space-x-8">
            {navLinks.map((item) => {
              if (!item.children) {
                return (
                  <NavLink key={item.to} to={item.to} end={item.to === '/'} className={navLinkClass}>
                    {item.name}
                  </NavLink>
                );
              }
              const active = item.match.some((m) => pathname === m || pathname.startsWith(`${m}/`));
              const isOpen = openMenu === item.name;
              return (
                <div key={item.name} className="relative" onMouseEnter={() => setOpenMenu(item.name)} onMouseLeave={() => setOpenMenu(null)}>
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onClick={() => setOpenMenu(isOpen ? null : item.name)}
                    className={`inline-flex items-center gap-1 text-sm lg:text-base font-medium transition-colors ${active ? 'text-brand-orange' : 'text-brand-muted hover:text-brand-navy'}`}
                  >
                    {item.name}
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z" clipRule="evenodd" /></svg>
                  </button>
                  {isOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
                      <ul className="w-60 bg-white border border-brand-border rounded-md shadow-lg py-2">
                        {item.children.map((c) => (
                          <li key={c.to}>
                            <NavLink to={c.to} className={({ isActive }) => `block px-4 py-2.5 text-sm font-medium transition-colors ${isActive ? 'text-brand-orange bg-brand-soft' : 'text-brand-muted hover:text-brand-navy hover:bg-brand-soft'}`}>
                              {c.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
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
          {navLinks.flatMap((item) => {
            const linkCls = ({ isActive }) =>
              `block px-3 py-3 text-base font-medium rounded-md transition-colors ${
                isActive ? 'bg-brand-soft text-brand-orange' : 'text-brand-text hover:text-brand-orange hover:bg-brand-soft'
              }`;
            if (!item.children) {
              return [<NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkCls}>{item.name}</NavLink>];
            }
            return [
              <p key={`${item.name}-label`} className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-wide text-brand-muted">{item.name}</p>,
              ...item.children.map((c) => (
                <NavLink key={c.to} to={c.to} className={(st) => `${linkCls(st)} !pl-6`}>{c.name}</NavLink>
              )),
            ];
          })}
          <Link to="/contact" className="block mt-4 px-3 py-3 bg-brand-navy text-white text-center font-medium rounded-md">
            {t.nav.talk}
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
