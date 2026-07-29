// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { WhatsAppOutlined, ArrowRightOutlined } from "@ant-design/icons";

// import { ROUTES } from "../../config/routes";
// import { SITE } from "../../config/constants";
// import { formatCurrency } from "../../utils/format";
// import { Tooltip } from "antd";
// import { getFileUrl } from "../../utils/fileUrl";
// import { FILE_BASE_URL } from "../../config/api";

// export default function ProductCard({ product }) {
//   console.log("Product from API:", product);
//   const id = product?._id || product?.id;
//   console.log(product?.image, "productproductproduct");

//   const image = getFileUrl(product?.image);
//   const whatsappHref = `${SITE.social.whatsapp}?text=${encodeURIComponent(
//     `Namaste, I'm interested in "${product?.name}" (${SITE.name}).`,
//   )}`;

//   return (
//     <motion.div
//       whileHover={{ y: -8 }}
//       transition={{ duration: 0.35 }}
//       className="h-full"
//     >
//       <div className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-stone-200 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(249,115,22,.18)]">
//         {/* Image */}
//         <Link to={ROUTES.productDetails(id)}>
//           <div className="relative h-72 overflow-hidden ">
//             <img
//               src={image}
//               alt={product?.name}
//               onLoad={(e) => {
//                 console.log("Actual browser src:", e.currentTarget.src);
//               }}
//               onError={(e) => {
//                 console.log("Failed src:", e.currentTarget.src);

//                 e.currentTarget.src =
//                   "https://placehold.co/800x800?text=No+Image";
//               }}
//               loading="lazy"
//               className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
//             />

//             {/* Category */}
//             {product?.category && (
//               <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-orange-600 shadow backdrop-blur">
//                 {product.category}
//               </div>
//             )}

//             {/* Stock */}
//             {product?.stock === 0 && (
//               <div className="absolute right-4 top-4 rounded-full bg-red-500 px-4 py-2 text-xs font-semibold text-white shadow">
//                 Out of Stock
//               </div>
//             )}
//           </div>
//         </Link>

//         {/* Content */}
//         <div className="flex flex-1 flex-col justify-between p-6">
//           <div>
//             {/* Category */}
//             {product?.category && (
//               <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5">
//                 <span className="h-2 w-2 rounded-full bg-orange-500" />

//                 <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
//                   {product.category}
//                 </span>
//               </div>
//             )}

//             {/* Product Name */}

//             <Link to={ROUTES.productDetails(id)}>
//               <div className="min-h-[72px]">
//                 <Tooltip title={product?.name}>
//                   <h3
//                     className="min-h-[40px]
//                         line-clamp-2
//                         text-lg
//                         font-bold
//                         leading-6
//                         tracking-tight
//                         text-slate-900
//                         transition-all
//                         duration-300
//                         group-hover:text-orange-600"
//                   >
//                     {product?.name}
//                   </h3>
//                 </Tooltip>
//                 {product?.name?.length > 10 && (
//                   <Link
//                     to={ROUTES.productDetails(id)}
//                     className="mt-1 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
//                   >
//                     Read More →
//                   </Link>
//                 )}
//               </div>
//             </Link>

//             {/* Description */}
//             {product?.description && (
//               <p className="mt-3 line-clamp-2 text-sm leading-7 text-gray-500">
//                 {product.description}
//               </p>
//             )}

//             {/* Price */}
//             <div className="mt-5 flex items-center justify-between">
//               <div>
//                 <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
//                   Starting From
//                 </p>

//                 <h4 className="mt-1 text-3xl font-semibold text-gray-600">
//                   {formatCurrency(product?.price)}
//                 </h4>
//               </div>

//               {product?.stock > 0 && (
//                 <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
//                   In Stock
//                 </span>
//               )}
//             </div>
//           </div>

//           {/* Buttons */}

//           <div className="mt-6 flex gap-3">
//             {/* WhatsApp */}

//             <a
//               href={whatsappHref}
//               target="_blank"
//               rel="noreferrer"
//               className="
//         group
//         flex
//         h-12
//         w-12
//         items-center
//         justify-center
//         rounded-xl
//         bg-gradient-to-br
//         from-green-500
//         to-green-600
//         text-white
//         transition
//         duration-300
//         hover:-translate-y-1
//         hover:shadow-lg
//       "
//             >
//               <WhatsAppOutlined className="group-hover:scale-110 transition text-xl " />
//             </a>

//             {/* Details */}

//             <Link
//               to={ROUTES.productDetails(id)}
//               className="
//         group
//         flex
//         flex-1
//         items-center
//         justify-center
//         gap-2
//         rounded-xl
//         border
//         border-orange-200
//         bg-orange-50
//         py-3
//         font-semibold
//         text-orange-600
//         transition-all
//         duration-300
//         hover:border-orange-500
//         hover:bg-gradient-to-r
//         hover:from-orange-500
//         hover:to-amber-500
//         hover:text-white
//         hover:shadow-xl
//       "
//             >
//               View Details
//               <ArrowRightOutlined className="transition group-hover:translate-x-1" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { WhatsAppOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

import { ROUTES } from "../../config/routes";
import { SITE } from "../../config/constants";
import { formatCurrency } from "../../utils/format";
import { getFileUrl } from "../../utils/fileUrl";

export default function ProductCard({ product }) {
  const id = product?._id || product?.id;
  const image = getFileUrl(product?.image);

  const whatsappHref = `${SITE.social.whatsapp}?text=${encodeURIComponent(
    `Namaste, I'm interested in "${product?.name}" (${SITE.name}).`,
  )}`;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="h-full"
    >
      <div className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-stone-200 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(249,115,22,.18)] sm:rounded-[28px]">
        {/* Image */}
        <Link to={ROUTES.productDetails(id)} aria-label={product?.name}>
          <div className="relative h-48 overflow-hidden sm:h-72">
            <img
              src={image}
              alt={product?.name}
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/800x800?text=No+Image";
              }}
              loading="lazy"
              className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
            />

            {/* Category */}
            {product?.category && (
              <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold text-orange-600 shadow backdrop-blur sm:left-4 sm:top-4 sm:px-4 sm:py-2 sm:text-xs">
                {product.category}
              </div>
            )}

            {/* Stock */}
            {product?.stock === 0 && (
              <div className="absolute right-3 top-3 rounded-full bg-red-500 px-3 py-1.5 text-[10px] font-semibold text-white shadow sm:right-4 sm:top-4 sm:px-4 sm:py-2 sm:text-xs">
                Out of Stock
              </div>
            )}
          </div>
        </Link>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
          <div>
            {/* Category */}
            {product?.category && (
              <div className="mb-2.5 inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 sm:mb-3">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                <span className="text-[10px] font-semibold uppercase tracking-wider text-orange-600 sm:text-xs">
                  {product.category}
                </span>
              </div>
            )}

            {/* Product Name — the whole card links to details, so this is
                a single link rather than nesting a second "Read More"
                anchor inside it (an <a> inside an <a> is invalid HTML and
                was breaking click behavior in the previous version). */}
            <Link
              to={ROUTES.productDetails(id)}
              className="block min-h-[64px] sm:min-h-[72px]"
            >
              <Tooltip title={product?.name}>
                <h3 className="line-clamp-2 min-h-[36px] text-base font-bold leading-6 tracking-tight text-slate-900 transition-all duration-300 group-hover:text-orange-600 sm:min-h-[40px] sm:text-lg">
                  {product?.name}
                </h3>
              </Tooltip>
            </Link>

            {/* Description */}
            {product?.description && (
              <p className="mt-2.5 line-clamp-2 text-sm leading-6 text-gray-500 sm:mt-3 sm:leading-7">
                {product.description}
              </p>
            )}

            {/* Price */}
            <div className="mt-4 flex items-center justify-between sm:mt-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 sm:text-xs sm:tracking-[0.25em]">
                  Starting From
                </p>
                <h4 className="mt-1 text-2xl font-semibold text-gray-600 sm:text-3xl">
                  {formatCurrency(product?.price)}
                </h4>
              </div>

              {product?.stock > 0 && (
                <span className="rounded-full bg-green-100 px-2.5 py-1 text-[10px] font-semibold text-green-700 sm:px-3 sm:text-xs">
                  In Stock
                </span>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-5 flex gap-2.5 sm:mt-6 sm:gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Enquire about ${product?.name} on WhatsApp`}
              className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-12 sm:w-12"
            >
              <WhatsAppOutlined
                className="text-lg transition group-hover:scale-110 sm:text-xl"
                aria-hidden="true"
              />
            </a>

            <Link
              to={ROUTES.productDetails(id)}
              className="group flex flex-1 items-center justify-center gap-2 rounded-xl border border-orange-200 bg-orange-50 py-2.5 text-sm font-semibold text-orange-600 transition-all duration-300 hover:border-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white hover:shadow-xl sm:py-3 sm:text-base"
            >
              View Details
              <ArrowRightOutlined
                className="transition group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
