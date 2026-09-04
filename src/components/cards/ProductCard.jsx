import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { WhatsAppOutlined, ArrowRightOutlined } from "@ant-design/icons";
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

  const whatsappHref = `${SITE.social.whatsapp}?text=${encodeURIComponent(
    `Namaste, I'm interested in "${product?.name}" (${SITE.name}).`,
  )}`;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group h-full"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-md border border-[#1C1A17]/[0.06] bg-white shadow-[0_4px_20px_rgba(28,26,23,0.05)] transition-all duration-300 hover:shadow-[0_20px_48px_rgba(28,26,23,0.12)]">
        {/* =====================================================
            IMAGE
        ====================================================== */}
        <div className="relative overflow-hidden bg-[#F7F2E7]">
          <Link to={detailsUrl} className="block">
            <img
              src={image}
              alt={product?.name || "Narmadeshwar Shivling"}
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/800x800?text=No+Image";
              }}
              loading="lazy"
              className="aspect-square h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.045]"
            />
          </Link>

          {/* =================================================
              CATEGORY
          ================================================== */}
          {product?.category && (
            <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-[#1C1A17]/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#F2E3C8] backdrop-blur-md sm:left-4 sm:top-4 sm:px-3.5 sm:text-[11px]">
              {product.category}
            </div>
          )}

          {/* =================================================
              STOCK
          ================================================== */}
          {!inStock && (
            <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-[#1C1A17]/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#E8B4B4] backdrop-blur-md sm:right-4 sm:top-4 sm:px-3.5 sm:text-[11px]">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#E8B4B4]"
                aria-hidden="true"
              />
              Out of Stock
            </div>
          )}

          {/* =================================================
              WISHLIST + SHARE — floating action rail
          ================================================== */}
          <div
            className="
              absolute
              bottom-3
              left-3
              z-10
              flex
              rounded-xl
              border
              border-white/40
              bg-white/70
              opacity-100
              shadow-sm
              backdrop-blur-md
              transition
              sm:opacity-0
              sm:group-hover:opacity-100
            "
          >
            <WishlistButton product={product} />
          </div>
          <div
            className="
              absolute
              bottom-3
              right-3
              z-10
              flex
              rounded-xl
              border
              border-white/40
              bg-white/70
              opacity-100
              shadow-sm
              backdrop-blur-md
              transition
              sm:opacity-0
              sm:group-hover:opacity-100
            "
          >
            <ShareProduct url={absoluteUrl} title={product?.name} />
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
              <div className="mb-2 inline-flex items-center gap-1.5 sm:mb-0">
                <span className="h-1.5 w-1.5 rounded-full bg-[#A8823C]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A8823C] sm:text-[11px]">
                  {product.category}
                </span>
              </div>
            )}
            {/* =================================================
                LIKE
            ================================================== */}
            <div className="my-2 flex justify-between gap-4">
              <ProductLikeButton productId={id} />
            </div>

            {/* =================================================
                PRODUCT NAME
            ================================================== */}
            <Link
              to={detailsUrl}
              className="block min-h-[24px] sm:min-h-[32px] md:min-h-[42px] lg:min-h-[42px] "
            >
              <Tooltip title={product?.name}>
                <h3 className="line-clamp-2 min-h-[36px] text-base font-bold leading-6 tracking-tight transition-colors duration-300 text-[#A8823C] sm:min-h-[40px] sm:text-lg">
                  {product?.name}
                </h3>
              </Tooltip>
            </Link>

            {/* =================================================
                DESCRIPTION
            ================================================== */}
            {product?.description && (
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#6B6459] sm:mt-0 sm:leading-7">
                {product.description}
              </p>
            )}

            {/* =================================================
                PRICE
            ================================================== */}
            <div className="mt-4 flex items-center justify-between gap-3 sm:mt-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8A8377] sm:text-[11px] sm:tracking-[0.25em]">
                  Starting From
                </p>

                <h4 className="mt-1 text-2xl font-semibold text-[#1C1A17] sm:text-3xl">
                  {formatCurrency(product?.price)}
                </h4>
              </div>

              {inStock && (
                <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-700 sm:text-[11px]">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-emerald-600"
                    aria-hidden="true"
                  />
                  In Stock
                </span>
              )}
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
                group/wa
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-[#1C1A17]/10
                bg-[#1C1A17]/[0.04]
                text-[#1C1A17]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-transparent
                hover:bg-gradient-to-br
                hover:from-[#123524]
                hover:to-[#1A4A33]
                hover:text-[#F2E3C8]
                hover:shadow-lg
                sm:h-12
                sm:w-12
              "
            >
              <WhatsAppOutlined
                className="text-lg transition group-hover/wa:scale-110 sm:text-xl"
                aria-hidden="true"
              />
            </a>

            {/* Details */}
            <Link
              to={detailsUrl}
              className="
                group/cta
                flex
                flex-1
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-transparent
                bg-[#1C1A17]
                py-2.5
                text-sm
                font-medium
                text-[#F2E3C8]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#2A2620]
                sm:py-3
                sm:text-base
              "
            >
              View Details
              <ArrowRightOutlined
                className="text-[#D4AF6A] transition group-hover/cta:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
