// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowRightOutlined } from "@ant-design/icons";

// import { ROUTES } from "../../config/routes";
// import { getFileUrl } from "../../utils/fileUrl";

// export default function CategoryCard({ category }) {
//   const name = category?.name || "Category";

//   const image = category?.image
//     ? getFileUrl(category.image)
//     : `https://placehold.co/800x600?text=${encodeURIComponent(name)}`;

//   return (
//     <motion.div
//       whileHover={{ y: -10 }}
//       transition={{ duration: 0.35 }}
//       className="h-full"
//     >
//       <Link
//         to={`${ROUTES.products}?category=${encodeURIComponent(name)}`}
//         className="group relative block overflow-hidden rounded-[28px] shadow-lg transition-all duration-500 hover:shadow-[0_25px_60px_rgba(249,115,22,0.18)]"
//       >
//         {/* Image */}
//         <div className="relative h-80 overflow-hidden">
//           <img
//             src={image}
//             alt={name}
//             loading="lazy"
//             className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//           />

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

//           {/* Product Count */}
//           {typeof category?.productCount === "number" && (
//             <div className="absolute left-5 top-5 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md border border-white/20">
//               {category.productCount} Products
//             </div>
//           )}

//           {/* Floating Arrow */}
//           <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-orange-500 transition-all duration-300 group-hover:rotate-45 group-hover:scale-110">
//             <ArrowRightOutlined />
//           </div>

//           {/* Bottom Content */}
//           <div className="absolute bottom-0 left-0 right-0 p-6">
//             <h3 className="text-3xl font-bold text-white">{name}</h3>

//             {category?.description && (
//               <p className="mt-2 line-clamp-2 text-sm text-gray-200">
//                 {category.description}
//               </p>
//             )}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="flex items-center justify-between p-6">
//           <span className="font-semibold text-orange-500 transition-all group-hover:translate-x-2">
//             Explore Collection
//           </span>

//           <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center transition-all group-hover:bg-orange-500 group-hover:text-white">
//             <ArrowRightOutlined />
//           </div>
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
        className="group relative block overflow-hidden rounded-[22px] shadow-lg transition-all duration-500 hover:shadow-[0_25px_60px_rgba(249,115,22,0.18)] sm:rounded-[28px]"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden sm:h-80">
          <img
            src={image}
            alt={name}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = `https://placehold.co/800x600?text=${encodeURIComponent(name)}`;
            }}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          {/* Product Count */}
          {typeof category?.productCount === "number" && (
            <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-sm">
              {category.productCount} Products
            </div>
          )}

          {/* Floating Arrow */}
          <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-orange-500 transition-all duration-300 group-hover:rotate-45 group-hover:scale-110 sm:right-5 sm:top-5 sm:h-12 sm:w-12">
            <ArrowRightOutlined aria-hidden="true" />
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <h3 className="text-xl font-bold text-white sm:text-3xl">{name}</h3>

            {category?.description && (
              <p className="mt-1.5 line-clamp-2 text-xs text-gray-200 sm:mt-2 sm:text-sm">
                {category.description}
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 sm:p-6">
          <span className="text-sm font-semibold text-orange-500 transition-all group-hover:translate-x-2 sm:text-base">
            Explore Collection
          </span>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 transition-all group-hover:bg-orange-500 group-hover:text-white sm:h-10 sm:w-10">
            <ArrowRightOutlined aria-hidden="true" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
