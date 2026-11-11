// Pembangun data terstruktur (JSON-LD). Dipakai di React (Seo.jsx) dan scripts/prerender.mjs.
export const ORG_ID = (siteUrl) => `${siteUrl}/#organization`;

export const buildOrganizationJsonLd = (siteUrl, { email, phone } = {}) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID(siteUrl),
  name: 'Sumber Rejeki Tech',
  url: siteUrl,
  logo: `${siteUrl}/apple-touch-icon.png`,
  email,
  ...(phone ? { telephone: phone } : {}),
  areaServed: { '@type': 'Country', name: 'Indonesia' },
  description:
    'Penyedia solusi teknologi event di Indonesia: registrasi event, QR check-in, tiket, undangan digital RSVP, e-sertifikat, buku tamu digital, lucky draw, dan software event organizer.',
});

export const buildWebSiteJsonLd = (siteUrl) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Sumber Rejeki Tech',
  url: siteUrl,
  inLanguage: 'id-ID',
  publisher: { '@id': ORG_ID(siteUrl) },
});

export const buildBreadcrumbJsonLd = (siteUrl, items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: `${siteUrl}${path}`,
  })),
});

export const buildProductJsonLd = (product, seo, siteUrl) => {
  const url = `${siteUrl}/products/${product.slug}`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: product.title.id,
      serviceType: product.title.id,
      description: seo.desc,
      url,
      provider: { '@id': ORG_ID(siteUrl) },
      areaServed: { '@type': 'Country', name: 'Indonesia' },
      category: product.category,
    },
    buildBreadcrumbJsonLd(siteUrl, [
      ['Beranda', '/'],
      ['Produk', '/products'],
      [product.title.id, `/products/${product.slug}`],
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: seo.faq.map(([q, a]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ];
};
