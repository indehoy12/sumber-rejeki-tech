// Semua data kontak & kredensial dibaca dari environment (.env) agar tidak hardcoded.
// Lihat .env.example untuk daftar variabel.
const env = import.meta.env;

const waNumber = (env.VITE_WHATSAPP_NUMBER || '6281234567890').replace(/\D/g, '');

const formatPhone = (n) => {
  if (n.startsWith('62')) {
    const rest = n.slice(2);
    return `+62 ${rest.slice(0, 3)}-${rest.slice(3, 7)}-${rest.slice(7)}`;
  }
  return `+${n}`;
};

export const SITE = {
  name: 'Sumber Rejeki Tech',
  url: (env.VITE_SITE_URL || 'https://sumberrejekitech.com').replace(/\/$/, ''),
  email: env.VITE_CONTACT_EMAIL || 'info@sumberrejekitech.com',
  whatsapp: waNumber,
  phoneDisplay: formatPhone(waNumber),
  web3formsKey: env.VITE_WEB3FORMS_ACCESS_KEY || '',
};

export const formServiceConfigured = Boolean(SITE.web3formsKey);

export const waLink = (text) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
