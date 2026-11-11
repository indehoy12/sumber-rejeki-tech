import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.webp';
import tagImage from '../assets/tag.webp';

// Logo ikon + wordmark. Ukuran ditentukan lewat className tinggi (mis. "h-8 lg:h-10").
const BrandLogo = ({ heightClass = 'h-8 lg:h-10', onClick }) => (
  <Link to="/" onClick={onClick} aria-label="Sumber Rejeki Tech" className="inline-flex items-center gap-2 lg:gap-3">
    <img src={logoImage} alt="" width="244" height="160" className={`${heightClass} w-auto`} />
    <img src={tagImage} alt="Sumber Rejeki Tech" width="571" height="160" className={`${heightClass} w-auto`} />
  </Link>
);

export default BrandLogo;
