import { useLocation } from 'react-router-dom';
import { SITE } from '../config/site';
import { useLanguage } from '../hooks/useLanguage';

// React 19 otomatis memindahkan <title>, <meta>, <link> ke <head>.
const Seo = ({ title, description, noindex = false }) => {
  const { pathname } = useLocation();
  const { lang, t } = useLanguage();
  const fullTitle = title ? `${title} | ${SITE.name}` : t.seo.defaultTitle;
  const desc = description || t.seo.defaultDesc;
  const url = `${SITE.url}${pathname === '/' ? '' : pathname}`;
  const image = `${SITE.url}/og-image.png`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={lang === 'id' ? 'id_ID' : 'en_US'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
    </>
  );
};

export default Seo;
