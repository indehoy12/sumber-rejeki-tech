// Analytics OPSIONAL & ramah privasi. Aktif hanya bila variabel lingkungan diisi (Cloudflare Pages -> Environment variables):
//   VITE_CF_ANALYTICS_TOKEN      token Cloudflare Web Analytics (tanpa cookie), atau
//   VITE_GA_MEASUREMENT_ID       ID Google Analytics 4, mis. G-XXXXXXXXXX
// Bila keduanya kosong, tidak ada skrip pelacakan yang dimuat sama sekali.
// Klik tombol WhatsApp & CTA konsultasi dicatat sebagai event ke GA4 (jika aktif).
const env = import.meta.env;

const addScript = (attrs) => {
  const s = document.createElement('script');
  Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
  document.head.appendChild(s);
};

export const initAnalytics = () => {
  const cf = env.VITE_CF_ANALYTICS_TOKEN;
  const ga = env.VITE_GA_MEASUREMENT_ID;

  if (cf) {
    addScript({ defer: '', src: 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': JSON.stringify({ token: cf }) });
  }

  if (ga && /^G-[A-Z0-9]+$/i.test(ga)) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', ga, { anonymize_ip: true });
    addScript({ async: '', src: `https://www.googletagmanager.com/gtag/js?id=${ga}` });
  }

  // Event klik WhatsApp & CTA konsultasi (delegasi, tidak perlu mengubah tiap tombol)
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a');
    if (!a || typeof window.gtag !== 'function') return;
    const href = a.getAttribute('href') || '';
    if (href.startsWith('https://wa.me/')) {
      window.gtag('event', 'whatsapp_click', { page_path: location.pathname });
    } else if (href === '/contact') {
      window.gtag('event', 'cta_contact_click', { page_path: location.pathname });
    }
  });
};
