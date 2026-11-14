import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import ProductsPage from './pages/ProductsPage';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import SolutionsPage from './pages/SolutionsPage';
import ServicePage from './pages/ServicePage';
import FaqPage from './pages/FaqPage';
import PortfolioPage from './pages/PortfolioPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:slug" element={<ProductDetail />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="website-development" element={<ServicePage slug="website-development" />} />
          <Route path="custom-software-development" element={<ServicePage slug="custom-software-development" />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
