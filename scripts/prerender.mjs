// Jalankan setelah `vite build`. Membuat HTML statis per halaman (judul, meta, canonical,
// JSON-LD, dan isi teks) supaya Google & pratinjau sosmed langsung melihat konten tanpa menunggu JavaScript.
// Juga menulis ulang sitemap.xml. React tetap mengambil alih (createRoot) saat halaman dibuka di browser.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { productsData, parseFeature } from '../src/data/products.js';
import { seoBySlug, STATUS_LABEL_ID } from '../src/data/seo.js';
import { SERVICE_PAGES, FAQ_PAGE } from '../src/data/content.js';
import { portfolioItems } from '../src/data/portfolio.js';
import {
  buildFaqJsonLd, buildOrganizationJsonLd, buildWebSiteJsonLd, buildProductJsonLd, buildBreadcrumbJsonLd, buildItemListJsonLd,
} from '../src/data/jsonld.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const SITE_URL = (process.env.VITE_SITE_URL || 'https://sumberrejekitech.web.id').replace(/\/$/, '');
const EMAIL = process.env.VITE_CONTACT_EMAIL || 'sumberrejekitechofficial@gmail.com';
const PHONE = '+' + (process.env.VITE_WHATSAPP_NUMBER || '6285931418013').replace(/\D/g, '');
const SITE_NAME = 'Sumber Rejeki Tech';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const jsonScript = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;

const template = readFileSync(join(dist, 'index.html'), 'utf8');

const HOME = {
  path: '/',
  title: 'Sumber Rejeki Tech | Software Event Organizer & EO Pekalongan',
  desc: 'Sumber Rejeki Tech: software untuk event organizer (EO) Pekalongan dan seluruh Indonesia. Sistem registrasi event online, QR check-in, tiket, undangan digital RSVP, e-sertifikat, buku tamu digital, dan lucky draw.',
  keywords: ['sumber rejeki tech', 'sumber rejeki', 'sumber', 'event organizer pekalongan', 'eo pekalongan', 'software event organizer', 'sistem registrasi event', 'aplikasi QR check-in', 'undangan digital RSVP', 'sistem tiket event', 'e-sertifikat otomatis', 'buku tamu digital', 'lucky draw digital'],
  h1: 'Solusi Teknologi Event: Registrasi, QR Check-in, Tiket, RSVP & E-Sertifikat',
  body: `<p>Sumber Rejeki Tech membantu event organizer, wedding organizer, perusahaan, dan institusi mengelola acara dengan lebih rapi: dari pendaftaran peserta sampai laporan akhir.</p><h2>Teknologi Event untuk EO &amp; Wedding Organizer di Pekalongan</h2><p>Kami melayani event organizer (EO) Pekalongan, wedding organizer, sekolah, kampus, dan perusahaan di Pekalongan, Jawa Tengah, serta seluruh Indonesia, dengan sistem registrasi, QR check-in, tiket, undangan digital, dan e-sertifikat. Temukan kami di Instagram, TikTok, dan Threads: @sumberrejekitech.</p>`,
  jsonLd: [buildOrganizationJsonLd(SITE_URL, { email: EMAIL, phone: PHONE }), buildWebSiteJsonLd(SITE_URL)],
};

const pages = [
  HOME,
  {
    path: '/products',
    title: 'Katalog Produk: 13 Software untuk Event Organizer | Sumber Rejeki Tech',
    desc: 'Katalog 13 software event dalam 4 kategori: registrasi & QR check-in, buku tamu digital, e-certificate, undangan RSVP, event game, photobooth, ticketing, anggaran, vendor, dan inventaris.',
    h1: 'Katalog Produk Sumber Rejeki Tech',
    body: '',
    jsonLd: [
      buildBreadcrumbJsonLd(SITE_URL, [['Beranda', '/'], ['Produk', '/products']]),
      buildItemListJsonLd(SITE_URL, productsData.map((p) => [p.title.id, `/products/${p.slug}`])),
    ],
  },
  {
    path: '/solutions',
    title: 'Solusi Event: Registrasi, Experience, Operasional & Laporan | Sumber Rejeki Tech',
    desc: 'Empat kategori solusi untuk acara Anda: Event Operation, Event Engagement, Event Creative & Entertainment, dan Event Business Management.',
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
  ...Object.values(SERVICE_PAGES).map((sp) => ({
    path: sp.path,
    title: `${sp.seoTitle} | ${SITE_NAME}`,
    desc: sp.seoDesc,
    keywords: sp.keywords,
    h1: sp.title,
    body: `<p>${esc(sp.intro)}</p><h2>${esc(sp.listTitle)}</h2><ul>${sp.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul><p>${esc(sp.note)}</p>`,
    jsonLd: [buildBreadcrumbJsonLd(SITE_URL, [['Beranda', '/'], [sp.title, sp.path]])],
  })),
  {
    path: FAQ_PAGE.path,
    title: `${FAQ_PAGE.seoTitle} | ${SITE_NAME}`,
    desc: FAQ_PAGE.seoDesc,
    h1: FAQ_PAGE.title,
    body: FAQ_PAGE.items.map(([q, a]) => `<h3>${esc(q)}</h3><p>${esc(a)}</p>`).join(''),
    jsonLd: [buildBreadcrumbJsonLd(SITE_URL, [['Beranda', '/'], ['FAQ', FAQ_PAGE.path]]), buildFaqJsonLd(FAQ_PAGE.items)],
  },
  {
    path: '/portfolio',
    title: `Portofolio Proyek | ${SITE_NAME}`,
    desc: 'Proyek pilihan yang dikerjakan Sumber Rejeki Tech di bidang event technology, sistem bisnis, website, dan software khusus.',
    h1: 'Portofolio',
    noindex: portfolioItems.length === 0,
    body: portfolioItems.map((i) => `<h2>${esc(i.name)}</h2><p>${esc(i.category)}${i.internal ? ' (pengembangan internal)' : ''}. ${esc(i.desc)}</p>`).join(''),
    jsonLd: [buildBreadcrumbJsonLd(SITE_URL, [['Beranda', '/'], ['Portofolio', '/portfolio']])],
  },
  ...productsData.map((p) => {
    const seo = seoBySlug[p.slug];
    return {
      path: `/products/${p.slug}`,
      title: `${seo.title} | ${SITE_NAME}`,
      desc: seo.desc,
      keywords: seo.keywords,
      h1: seo.title,
      body:
        `<p>${esc(p.desc.id)}</p><p><strong>Status:</strong> ${esc(STATUS_LABEL_ID[p.status] || STATUS_LABEL_ID.InDevelopment)}</p>` +
        (p.problem ? `<h2>Masalah yang diselesaikan</h2><p>${esc(p.problem)}</p>` : '') +
        `<h2>Tentang ${esc(p.title.id)}</h2><p>${esc(seo.intro)}</p>` +
        `<h2>Tujuan dan manfaat</h2><ul>${p.benefits.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>` +
        `<h2>Target pengguna</h2><ul>${p.targets.map((u) => `<li>${esc(u)}</li>`).join('')}</ul>` +
        (p.modules
          ? `<h2>Lima modul permainan</h2>` +
            p.modules.map((m) => `<h3>${esc(m.title)}</h3><ul>${m.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>`).join('') +
            `<h3>Fitur umum</h3><ul>${p.commonFeatures.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>`
          : `<h2>Fitur lengkap</h2><ul>${p.features.map((f) => { const x = parseFeature(f); return `<li><strong>${esc(x.name)}</strong>${x.desc ? ` — ${esc(x.desc)}` : ''}</li>`; }).join('')}</ul>`) +
        `<h2>Alur penggunaan</h2><ol>${p.howItWorks.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>` +
        `<h2>Kebutuhan perangkat</h2><p>${esc(p.devices)}</p>` +
        `<h2>Kebutuhan koneksi internet</h2><p>${esc(p.internet)}</p>` +
        `<h2>Keamanan dan penyimpanan data</h2><p>${esc(p.security)}</p>` +
        (p.notes ? `<p>${esc(p.notes)}</p>` : '') +
        `<h2>Estimasi pengerjaan</h2><p>${p.estimate ? `Estimasi Pengerjaan: ${p.estimate.min}–${p.estimate.max} Hari Kerja.` : 'Estimasi disampaikan setelah konsultasi.'} Estimasi bergantung pada kebutuhan, tingkat konfigurasi, kelengkapan data, dan penyesuaian yang disepakati; estimasi final dikonfirmasi melalui penawaran.</p>` +
        (p.demoUrl ? `<h2>Coba demo</h2><p>Demo ${esc(p.title.id)} tersedia untuk dicoba.</p>` : '') +
        `<h2>Layanan dan deployment</h2><p>Setiap implementasi sistem dipersiapkan secara terpisah untuk masing-masing klien. Pengelolaan deployment dan hosting dapat ditangani oleh Sumber Rejeki Tech.</p>` +
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
    page.noindex ? `<meta name="robots" content="noindex" />` : '',
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
const priority = (p) => (p === '/' ? '1.0' : p === '/faq' || p === '/portfolio' || p === '/website-development' || p === '/custom-software-development' ? '0.6' : p.startsWith('/products/') ? '0.8' : p === '/privacy' || p === '/terms' ? '0.2' : '0.6');
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  pages
    .filter((p) => !p.noindex)
    .map((p) => `  <url><loc>${SITE_URL}${p.path === '/' ? '/' : p.path}</loc><lastmod>${today}</lastmod><priority>${priority(p.path)}</priority></url>`)
    .join('\n') +
  `\n</urlset>\n`;
writeFileSync(join(dist, 'sitemap.xml'), sitemap);

console.log(`Prerender selesai: ${pages.length} halaman + sitemap.xml`);
