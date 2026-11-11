import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import Solutions from '../components/Solutions';
import Products from '../components/Products';
import HowItWorks from '../components/HowItWorks';
import CTA from '../components/CTA';
import Seo from '../components/Seo';

const Home = () => (
  <>
    <Seo />
    <Hero />
    <Introduction />
    <Solutions />
    <Products />
    <HowItWorks />
    <CTA />
  </>
);

export default Home;
