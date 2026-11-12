import { useLanguage } from '../hooks/useLanguage';

const STYLE = {
  Available: 'bg-green-50 text-green-700',
  InDevelopment: 'bg-amber-50 text-amber-800',
  ComingSoon: 'bg-brand-soft text-brand-muted',
};

// Label status produk: Siap Digunakan / Dalam Pengembangan / Coming Soon.
const StatusBadge = ({ status, className = '' }) => {
  const { t } = useLanguage();
  const label =
    status === 'Available' ? t.productsPage.available
    : status === 'ComingSoon' ? t.productsPage.comingSoon
    : t.productsPage.inDevelopment;
  return (
    <span className={`inline-block shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${STYLE[status] || STYLE.InDevelopment} ${className}`}>
      {label}
    </span>
  );
};

export default StatusBadge;
