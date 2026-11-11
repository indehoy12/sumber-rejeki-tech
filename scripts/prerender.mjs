// Jalankan setelah `vite build`. Membuat HTML statis per halaman (judul, meta, canonical,
// JSON-LD, dan isi teks) supaya Google & pratinjau sosmed langsung melihat konten tanpa menunggu JavaScript.
// Juga menulis ulang sitemap.xml. React tetap mengambil alih (createRoot) saat halaman dibuka di browser.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { productsData } from '../src/data/products.js';
import { seoBySlug } from '../src/data/seo.js';
import {
  buildOrganizationJsonLd, buildWebSiteJsonLd, buildProductJsonLd, buildBreadcrumbJsonLd,
} from '../src/data/jsonld.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const SITE_URL = (process.env.VITE_SITE_URL || 'https://sumberrejekitech.web.id').replace(/\/$/, '');
const EMAIL = process.env.VITE_CONTACT_EMAIL || 'sumberrejekitechofficial@gmail.com';
const SITE_NAME = 'Sumber Rejeki Tech';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const jsonScript = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;

const template = readFileSync(join(dist, 'index.html'), 'utf8');

const HOME = {
  path: '/',
  title: 'Software Event Organizer, Registrasi Event & QR Check-in | Sumber Rejeki Tech',
  desc: 'Sumber Rejeki Tech menyediakan sistem registrasi event online, aplikasi QR check-in, tiket event, undangan digital RSVP wedding, e-sertifikat otomatis, buku tamu digital, dan lucky draw.',
  keywords: ['software event organizer', 'sistem registrasi event', 'aplikasi QR check-in', 'undangan digital RSVP', 'sistem tiket event', 'e-sertifikat otomatis', 'buku tamu digital', 'lucky draw digital'],
  h1: 'Solusi Teknologi Event: Registrasi, QR Check-in, Tiket, RSVP & E-Sertifikat',
  body: `<p>Sumber Rejeki Tech membantu event organizer, wedding organizer, perusahaan, dan institusi mengelola acara dengan lebih rapi: dari pendaftaran peserta sampai laporan akhir.</p>`,
  jsonLd: [buildOrganizationJsonLd(SITE_URL, { email: EMAIL }), buildWebSiteJsonLd(SITE_URL)],
};

const pages = [
  HOME,
  {
    path: '/products',
    title: 'Katalog Produk: 24 Sistem untuk Event Organizer | Sumber Rejeki Tech',
    desc: 'Katalog 24 sistem teknologi event: registrasi, QR check-in, tiket, e-badge, undangan RSVP, buku tamu digital, lucky draw, e-sertifikat, dashboard, dan analitik.',
    h1: 'Katalog Produk Sumber Rejeki Tech',
    body: '',
    jsonLd: [buildBreadcrumbJsonLd(SITE_URL, [['Beranda', '/'], ['Produk', '/products']])],
  },
  {
    path: '/solutions',
    title: 'Solusi Event: Registrasi, Experience, Operasional & Laporan | Sumber Rejeki Tech',
    desc: 'Empat kategori solusi untuk acara Anda: registrasi & kehadiran, event experience, operasional acara, serta pelaporan dan bisnis.',
    h1: 'Solusi Sumber Rejeki Tech',
    body: '',
    jsonLd: [buildBreadcrumbJsonLd(SITE_URL, [['Beranda', '/'], ['Solusi', '/solutions']])],
  },
  {
    path: '/about',
    title: 'Tentang Kami | Sumber Rejeki Tech',
    desc: 'Sumber Rejeki Tech adalah penyedia solusi teknologi untuk event organizer, wedding organizer, perusahaan, dan institusi di Indonesia.',
    h1: 'Tentang Sumber Rejeki Tech',
    body: '',
    jsonLd: [buildBreadcrumbJsonLd(SITE_URL, [['Beranda', '/'], ['Tentang', '/about']])],
  },
  {
    path: '/contact',
    title: 'Hubungi Kami | Konsultasi Gratis Sistem Event | Sumber Rejeki Tech',
    desc: 'Hubungi Sumber Rejeki Tech untuk konsultasi sistem registrasi event, QR check-in, tiket, undangan digital, dan kebutuhan acara lainnya.',
    h1: 'Hubungi Kami',
    body: '',
    jsonLd: [buildBreadcrumbJsonLd(SITE_URL, [['Beranda', '/'], ['Kontak', '/contact']])],
  },
  { path: '/privacy', title: 'Kebijakan Privasi | Sumber Rejeki Tech', desc: 'Kebijakan privasi Sumber Rejeki Tech.', h1: 'Kebijakan Privasi', body: '', jsonLd: [] },
  { path: '/terms', title: 'Syarat & Ketentuan | Sumber Rejeki Tech', desc: 'Syarat dan ketentuan penggunaan situs Sumber Rejeki Tech.', h1: 'Syarat & Ketentuan', body: '', jsonLd: [] },
  ...productsData.map((p) => {
    const seo = seoBySlug[p.slug];
    return {
      path: `/products/${p.slug}`,
      title: `${seo.title} | ${SITE_NAME}`,
      desc: seo.desc,
      keywords: seo.keywords,
      h1: seo.title,
      body:
        `<p>${esc(seo.intro)}</p>` +
        `<h2>Fitur utama</h2><ul>${p.features.id.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>` +
        `<h2>Cocok untuk</h2><p>${esc(p.useCases.id)}</p>` +
        `<h2>Pertanyaan yang sering diajukan</h2>` +
        seo.faq.map(([q, a]) => `<h3>${esc(q)}</h3><p>${esc(a)}</p>`).join(''),
      jsonLd: buildProductJsonLd(p, seo, SITE_URL),
    };
  }),
];

// Bagian halaman Home & Products: daftar tautan internal (statis) agar crawler menemukan semua produk.
const productLinks = `<nav aria-label="Produk"><ul>${productsData
  .map((p) => `<li><a href="/products/${p.slug}">${esc(seoBySlug[p.slug].title)}</a></li>`)
  .join('')}</ul></nav>`;

const render = (page) => {
  const url = `${SITE_URL}${page.path === '/' ? '' : page.path}`;
  const image = `${SITE_URL}/og-image.png`;
  const head = [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.desc)}" />`,
    page.keywords ? `<meta name="keywords" content="${esc(page.keywords.join(', '))}" />` : '',
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.desc)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:locale" content="id_ID" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(page.title)}" />`,
    `<meta name="twitter:description" content="${esc(page.desc)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    ...page.jsonLd.map(jsonScript),
  ].filter(Boolean).join('\n    ');

  let html = template
    // buang title/description/JSON-LD default agar tidak dobel
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, '')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, '')
    .replace('</head>', `    ${head}\n  </head>`);

  const extra = page.path === '/' || page.path === '/products' ? productLinks : '';
  const staticBody = `<main><h1>${esc(page.h1)}</h1>${page.body}${extra}</main>`;
  html = html.replace('<div id="root"></div>', `<div id="root">${staticBody}</div>`);
  return html;
};

for (const page of pages) {
  const html = render(page);
  if (page.path === '/') {
    writeFileSync(join(dist, 'index.html'), html);
  } else {
    // /products/qr-checkin -> dist/products/qr-checkin.html
    // (Cloudflare menyajikan di /products/qr-checkin tanpa redirect trailing slash)
    const file = join(dist, `${page.path.slice(1)}.html`);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, html);
  }
}

const today = new Date().toISOString().slice(0, 10);
const priority = (p) => (p === '/' ? '1.0' : p.startsWith('/products/') ? '0.8' : p === '/privacy' || p === '/terms' ? '0.2' : '0.6');
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  pages
    .map((p) => `  <url><loc>${SITE_URL}${p.path === '/' ? '/' : p.path}</loc><lastmod>${today}</lastmod><priority>${priority(p.path)}</priority></url>`)
    .join('\n') +
  `\n</urlset>\n`;
writeFileSync(join(dist, 'sitemap.xml'), sitemap);

console.log(`Prerender selesai: ${pages.length} halaman + sitemap.xml`);
