import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ROUTES } from "../../config/routes";

/**
 * Category tile linking into the Products page pre-filtered by
 * category. Used on the Home page and could be reused on a dedicated
 * "Categories" page later.
 */
export default function CategoryCard({ category }) {
  const name = category?.name || category;
  const image =
    category?.image || "https://placehold.co/600x400?text=" + encodeURIComponent(name || "Category");

  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
      <Link
        to={`${ROUTES.products}?category=${encodeURIComponent(name)}`}
        className="group block overflow-hidden rounded-3xl border border-stone-100 bg-white shadow-card"
      >
        <div className="overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h3 className="font-display text-xl font-bold text-stone-900 group-hover:text-brand-700">
            {name}
          </h3>
          {category?.description && (
            <p className="mt-2 line-clamp-2 text-sm text-gray-500">{category.description}</p>
          )}
          {typeof category?.productCount === "number" && (
            <p className="mt-3 text-xs font-medium uppercase tracking-wide text-gold-600">
              {category.productCount} products
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
