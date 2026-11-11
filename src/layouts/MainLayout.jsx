import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import PageLoader from '../components/PageLoader';
import { useLanguage } from '../hooks/useLanguage';

const PAGE_LOAD_MS = 500;

const MainLayout = () => {
  const { pathname } = useLocation();
  const { t } = useLanguage();
  // Halaman dianggap "sedang dimuat" sampai loadedPath sama dengan pathname aktif
  const [loadedPath, setLoadedPath] = useState(null);
  const isLoading = loadedPath !== pathname;

  useEffect(() => {
    const timer = setTimeout(() => setLoadedPath(pathname), PAGE_LOAD_MS);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-brand-navy focus:text-white focus:px-4 focus:py-2 focus:rounded-md">
        {t.nav.skip}
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main" className="flex-grow">
        {isLoading ? <PageLoader /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
