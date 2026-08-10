// import { Helmet } from "react-helmet-async";
// import { SITE } from "../../config/constants";

// export default function Seo({ title, description, noIndex = false }) {
//   const fullTitle = title ? `${title} | ${SITE.name}` : SITE.name;
//   return (
//     <Helmet>
//       <title>{fullTitle}</title>
//       <meta name="description" content={description || SITE.description} />
//       {noIndex && <meta name="robots" content="noindex, nofollow" />}
//     </Helmet>
//   );
// }

import { Helmet } from "react-helmet-async";
import { SITE } from "../../config/constants";
import { useLanguage } from "../../context/LanguageContext";

/**
 * Drop-in <title> / meta tag manager, now language-aware.
 *
 * - Sets <html lang="en"|"hi"> via Helmet so screen readers and Google both
 *   read the page in the right language.
 * - Emits hreflang alternates so Google can serve the right language to the
 *   right searcher instead of guessing (important once you have separate
 *   /hi routes, or even with a single URL that swaps content client-side).
 * - Accepts `keywords` per page — pull these straight from
 *   config/content.js -> SEO_CONTENT[page][language].
 *
 * USAGE
 *   const seo = useContent(SEO_CONTENT.about);
 *   <Seo title={seo.title} description={seo.description} keywords={seo.keywords} path="/about" />
 */
export default function Seo({ title, description, keywords, noIndex = false, path = "" }) {
  const { language } = useLanguage();

  const fullTitle = title || SITE.name;
  const metaDescription = description || SITE.description;
  const canonicalUrl = `${SITE.url}${path}`;

  return (
    <Helmet htmlAttributes={{ lang: language }}>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <link rel="canonical" href={canonicalUrl} />
      {/* Same URL currently serves both languages client-side, so both
          hreflang entries point at it. If you later split into /hi/... 
          routes, point each alternate at its own URL instead. */}
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="hi" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={language === "hi" ? "hi_IN" : "en_IN"} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  );
}