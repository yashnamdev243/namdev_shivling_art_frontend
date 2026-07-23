import { Helmet } from "react-helmet-async";
import { SITE } from "../../config/constants";

/**
 * Wrap react-helmet-async so every page sets title/description the same
 * way: <Seo title="Products" description="..." />
 */
export default function Seo({ title, description }) {
  const fullTitle = title ? `${title} | ${SITE.name}` : SITE.name;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || SITE.description} />
    </Helmet>
  );
}
