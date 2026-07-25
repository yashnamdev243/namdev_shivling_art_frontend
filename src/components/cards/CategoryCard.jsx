// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ROUTES } from "../../config/routes";

// /**
//  * Category tile linking into the Products page pre-filtered by
//  * category. Used on the Home page and could be reused on a dedicated
//  * "Categories" page later.
//  */
// export default function CategoryCard({ category }) {
//   const name = category?.name || category;
//   const image =
//     category?.image || "https://placehold.co/600x400?text=" + encodeURIComponent(name || "Category");

//   return (
//     <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
//       <Link
//         to={`${ROUTES.products}?category=${encodeURIComponent(name)}`}
//         className="group block overflow-hidden rounded-3xl border border-stone-100 bg-white shadow-card"
//       >
//         <div className="overflow-hidden">
//           <img
//             src={image}
//             alt={name}
//             className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
//             loading="lazy"
//           />
//         </div>
//         <div className="p-6">
//           <h3 className="font-display text-xl font-bold text-stone-900 group-hover:text-brand-700">
//             {name}
//           </h3>
//           {category?.description && (
//             <p className="mt-2 line-clamp-2 text-sm text-gray-500">{category.description}</p>
//           )}
//           {typeof category?.productCount === "number" && (
//             <p className="mt-3 text-xs font-medium uppercase tracking-wide text-gold-600">
//               {category.productCount} products
//             </p>
//           )}
//         </div>
//       </Link>
//     </motion.div>
//   );
// }

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightOutlined } from "@ant-design/icons";

import { ROUTES } from "../../config/routes";
import { getFileUrl } from "../../utils/fileUrl";

export default function CategoryCard({ category }) {
  const name = category?.name || "Category";

  const image = category?.image
    ? getFileUrl(category.image)
    : `https://placehold.co/800x600?text=${encodeURIComponent(name)}`;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="h-full"
    >
      <Link
        to={`${ROUTES.products}?category=${encodeURIComponent(name)}`}
        className="group relative block overflow-hidden rounded-[28px] shadow-lg transition-all duration-500 hover:shadow-[0_25px_60px_rgba(249,115,22,0.18)]"
      >
        {/* Image */}
        <div className="relative h-80 overflow-hidden">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          {/* Product Count */}
          {typeof category?.productCount === "number" && (
            <div className="absolute left-5 top-5 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md border border-white/20">
              {category.productCount} Products
            </div>
          )}

          {/* Floating Arrow */}
          <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-orange-500 transition-all duration-300 group-hover:rotate-45 group-hover:scale-110">
            <ArrowRightOutlined />
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-3xl font-bold text-white">{name}</h3>

            {category?.description && (
              <p className="mt-2 line-clamp-2 text-sm text-gray-200">
                {category.description}
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6">
          <span className="font-semibold text-orange-500 transition-all group-hover:translate-x-2">
            Explore Collection
          </span>

          <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center transition-all group-hover:bg-orange-500 group-hover:text-white">
            <ArrowRightOutlined />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
