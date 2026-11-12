import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import Solutions from '../components/Solutions';
import Products from '../components/Products';
import HowItWorks from '../components/HowItWorks';
import CTA from '../components/CTA';
import Seo from '../components/Seo';
import PopularSearches from '../components/PopularSearches';

const Home = () => (
  <>
    <Seo keywords={['sumber rejeki tech', 'sumber rejeki', 'event organizer pekalongan', 'eo pekalongan', 'software event organizer', 'sistem registrasi event', 'aplikasi QR check-in']} />
    <Hero />
    <Introduction />
    <Solutions />
    <Products />
    <PopularSearches />
    <HowItWorks />
    <CTA />
  </>
);

export default Home;
