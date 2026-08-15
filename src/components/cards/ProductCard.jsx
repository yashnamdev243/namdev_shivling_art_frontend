import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  WhatsAppOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";

import { ROUTES } from "../../config/routes";
import { SITE } from "../../config/constants";
import { formatCurrency } from "../../utils/format";
import { getFileUrl } from "../../utils/fileUrl";

import ShareProduct from "../common/ShareProduct";
import ProductLikeButton from "../product/ProductLikeButton";
import WishlistButton from "../product/WishlistButton";

export default function ProductCard({ product }) {
  const id = product?._id || product?.id;

  const image = getFileUrl(product?.image);

  const inStock = product?.stock !== 0;

  const detailsUrl = ROUTES.productDetails(id);

  const absoluteUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${detailsUrl}`
      : detailsUrl;

  const whatsappHref = `${
    SITE.social.whatsapp
  }?text=${encodeURIComponent(
    `Namaste, I'm interested in "${product?.name}" (${SITE.name}).`
  )}`;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="group h-full"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">

        {/* =====================================================
            IMAGE
        ====================================================== */}
        <div className="relative overflow-hidden bg-stone-100">

          <Link
            to={detailsUrl}
            className="block"
          >
            <img
              src={image}
              alt={product?.name || "Narmadeshwar Shivling"}
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/800x800?text=No+Image";
              }}
              loading="lazy"
              className="aspect-square h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
            />
          </Link>

          {/* =================================================
              CATEGORY
          ================================================== */}
          {product?.category && (
            <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold text-orange-600 shadow backdrop-blur sm:left-4 sm:top-4 sm:px-4 sm:py-2 sm:text-xs">
              {product.category}
            </div>
          )}

          {/* =================================================
              STOCK
          ================================================== */}
          {!inStock && (
            <div className="absolute right-3 top-3 rounded-full bg-red-500 px-3 py-1.5 text-[10px] font-semibold text-white shadow sm:right-4 sm:top-4 sm:px-4 sm:py-2 sm:text-xs">
              Out of Stock
            </div>
          )}

          {/* =================================================
              WISHLIST + SHARE
          ================================================== */}
          <div
            className="
              absolute
              bottom-3
              right-3
              z-10
              flex
              flex-col
              gap-2
              opacity-100
              transition
              sm:opacity-0
              sm:group-hover:opacity-100
            "
          >
            <WishlistButton
              product={product}
            />

            <ShareProduct
              url={absoluteUrl}
              title={product?.name}
            />
          </div>
        </div>

        {/* =====================================================
            CONTENT
        ====================================================== */}
        <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">

          <div>

            {/* =================================================
                CATEGORY
            ================================================== */}
            {product?.category && (
              <div className="mb-2.5 inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 sm:mb-3">
                <span className="h-2 w-2 rounded-full bg-orange-500" />

                <span className="text-[10px] font-semibold uppercase tracking-wider text-orange-600 sm:text-xs">
                  {product.category}
                </span>
              </div>
            )}

            {/* =================================================
                PRODUCT NAME
            ================================================== */}
            <Link
              to={detailsUrl}
              className="block min-h-[64px] sm:min-h-[72px]"
            >
              <Tooltip title={product?.name}>
                <h3 className="line-clamp-2 min-h-[36px] text-base font-bold leading-6 tracking-tight text-slate-900 transition-all duration-300 group-hover:text-orange-600 sm:min-h-[40px] sm:text-lg">
                  {product?.name}
                </h3>
              </Tooltip>
            </Link>

            {/* =================================================
                DESCRIPTION
            ================================================== */}
            {product?.description && (
              <p className="mt-2.5 line-clamp-2 text-sm leading-6 text-gray-500 sm:mt-3 sm:leading-7">
                {product.description}
              </p>
            )}

            {/* =================================================
                PRICE
            ================================================== */}
            <div className="mt-4 flex items-center justify-between gap-3 sm:mt-5">

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 sm:text-xs sm:tracking-[0.25em]">
                  Starting From
                </p>

                <h4 className="mt-1 text-2xl font-semibold text-gray-600 sm:text-3xl">
                  {formatCurrency(product?.price)}
                </h4>
              </div>

              {inStock && (
                <span className="rounded-full bg-green-100 px-2.5 py-1 text-[10px] font-semibold text-green-700 sm:px-3 sm:text-xs">
                  In Stock
                </span>
              )}
            </div>

            {/* =================================================
                LIKE
            ================================================== */}
            <div className="mt-4">
              <ProductLikeButton
                productId={id}
              />
            </div>
          </div>

          {/* =====================================================
              BUTTONS
          ====================================================== */}
          <div className="mt-5 flex gap-2.5 sm:mt-6 sm:gap-3">

            {/* WhatsApp */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Enquire about ${product?.name} on WhatsApp`}
              className="
                group
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-br
                from-green-500
                to-green-600
                text-white
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                sm:h-12
                sm:w-12
              "
            >
              <WhatsAppOutlined
                className="text-lg transition group-hover:scale-110 sm:text-xl"
                aria-hidden="true"
              />
            </a>

            {/* Details */}
            <Link
              to={detailsUrl}
              className="
                group
                flex
                flex-1
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-orange-200
                bg-orange-50
                py-2.5
                text-sm
                font-semibold
                text-orange-600
                transition-all
                duration-300
                hover:border-orange-500
                hover:bg-gradient-to-r
                hover:from-orange-500
                hover:to-amber-500
                hover:text-white
                hover:shadow-xl
                sm:py-3
                sm:text-base
              "
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