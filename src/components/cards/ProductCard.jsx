import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { EyeOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { ROUTES } from "../../config/routes";
import { SITE } from "../../config/constants";
import { formatCurrency } from "../../utils/format";
import { FILE_BASE_URL } from "../../config/api";

/**
 * The one product card used everywhere on the public site (home,
 * products grid, related products). Keeping a single component means
 * a design tweak only has to happen once.
 */
export default function ProductCard({ product }) {
  console.log(product);
  const id = product?._id || product?.id;
  const image = product?.image
  ? `${FILE_BASE_URL}/uploads/${product.image}`
  : "https://placehold.co/600x600?text=Shivling";

  const whatsappHref = `${SITE.social.whatsapp}?text=${encodeURIComponent(
    `Namaste, I'm interested in "${product?.name}" (${SITE.name}).`
  )}`;

  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
      <div className="group overflow-hidden rounded-3xl border border-stone-100 bg-white shadow-card">
        <Link to={ROUTES.productDetails(id)} className="block">
          <div className="relative aspect-square overflow-hidden">
            <img
              src={image}
              alt={product?.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              loading="lazy"
            />
            {product?.category && (
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-brand-700 shadow">
                {product.category}
              </span>
            )}
            {product?.stock === 0 && (
              <span className="absolute right-3 top-3 rounded-full bg-stone-900/85 px-3 py-1 text-xs font-medium text-white">
                Out of stock
              </span>
            )}
          </div>
        </Link>

        <div className="p-5">
          <Link to={ROUTES.productDetails(id)}>
            <h3 className="line-clamp-1 font-display text-xl font-bold text-stone-900 group-hover:text-brand-700">
              {product?.name}
            </h3>
          </Link>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-xl font-bold text-brand-700">
              {formatCurrency(product?.price)}
            </span>

            <div className="flex items-center gap-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-white transition hover:bg-green-700"
                aria-label="Enquire on WhatsApp"
              >
                <WhatsAppOutlined />
              </a>
              <Link
                to={ROUTES.productDetails(id)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-white transition hover:bg-brand-800"
                aria-label="View details"
              >
                <EyeOutlined />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
