// Data kontak dibaca dari environment (.env / Build variables Cloudflare).
// Nilai setelah "||" adalah cadangan jika variabel tidak terisi.
// Semua nilai ini bersifat publik (tampil di situs / access key Web3Forms bersifat public).
const env = import.meta.env;

const waNumber = (env.VITE_WHATSAPP_NUMBER || '6285931418013').replace(/\D/g, '');

const formatPhone = (n) => {
  if (n.startsWith('62')) {
    const rest = n.slice(2);
    return `+62 ${rest.slice(0, 3)}-${rest.slice(3, 7)}-${rest.slice(7)}`;
  }
  return `+${n}`;
};

export const SITE = {
  name: 'Sumber Rejeki Tech',
  url: (env.VITE_SITE_URL || 'https://sumberrejekitech.web.id').replace(/\/$/, ''),
  email: env.VITE_CONTACT_EMAIL || 'sumberrejekitechofficial@gmail.com',
  whatsapp: waNumber,
  phoneDisplay: formatPhone(waNumber),
  web3formsKey: env.VITE_WEB3FORMS_ACCESS_KEY || '075f43e9-6012-4356-b0fb-f67adb6609b9',
};

export const formServiceConfigured = Boolean(SITE.web3formsKey);

export const waLink = (text) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
