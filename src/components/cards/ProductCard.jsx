import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { WhatsAppOutlined, ArrowRightOutlined } from "@ant-design/icons";

import { ROUTES } from "../../config/routes";
import { SITE } from "../../config/constants";
import { formatCurrency } from "../../utils/format";
import { Tooltip } from "antd";
import { getFileUrl } from "../../utils/fileUrl";
import { FILE_BASE_URL } from "../../config/api";

export default function ProductCard({ product }) {
  console.log("Product from API:", product);
  const id = product?._id || product?.id;
  console.log(product?.image, "productproductproduct");

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
      <div className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-stone-200 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(249,115,22,.18)]">
        {/* Image */}
        <Link to={ROUTES.productDetails(id)}>
          <div className="relative h-72 overflow-hidden ">
            <img
              src={image}
              alt={product?.name}
              onLoad={(e) => {
                console.log("Actual browser src:", e.currentTarget.src);
              }}
              onError={(e) => {
                console.log("Failed src:", e.currentTarget.src);

                e.currentTarget.src =
                  "https://placehold.co/800x800?text=No+Image";
              }}
              loading="lazy"
              className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
            />

            {/* Category */}
            {product?.category && (
              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-orange-600 shadow backdrop-blur">
                {product.category}
              </div>
            )}

            {/* Stock */}
            {product?.stock === 0 && (
              <div className="absolute right-4 top-4 rounded-full bg-red-500 px-4 py-2 text-xs font-semibold text-white shadow">
                Out of Stock
              </div>
            )}
          </div>
        </Link>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            {/* Category */}
            {product?.category && (
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-orange-500" />

                <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                  {product.category}
                </span>
              </div>
            )}

            {/* Product Name */}

            <Link to={ROUTES.productDetails(id)}>
              <div className="min-h-[72px]">
                <Tooltip title={product?.name}>
                  <h3
                    className="min-h-[40px]
                        line-clamp-2
                        text-lg
                        font-bold
                        leading-6
                        tracking-tight
                        text-slate-900
                        transition-all
                        duration-300
                        group-hover:text-orange-600"
                  >
                    {product?.name}
                  </h3>
                </Tooltip>
                {product?.name?.length > 10 && (
                  <Link
                    to={ROUTES.productDetails(id)}
                    className="mt-1 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Read More →
                  </Link>
                )}
              </div>
            </Link>

            {/* Description */}
            {product?.description && (
              <p className="mt-3 line-clamp-2 text-sm leading-7 text-gray-500">
                {product.description}
              </p>
            )}

            {/* Price */}
            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                  Starting From
                </p>

                <h4 className="mt-1 text-3xl font-semibold text-gray-600">
                  {formatCurrency(product?.price)}
                </h4>
              </div>

              {product?.stock > 0 && (
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  In Stock
                </span>
              )}
            </div>
          </div>

          {/* Buttons */}

          <div className="mt-6 flex gap-3">
            {/* WhatsApp */}

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="
        group
        flex
        h-12
        w-12
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
      "
            >
              <WhatsAppOutlined className="group-hover:scale-110 transition text-xl " />
            </a>

            {/* Details */}

            <Link
              to={ROUTES.productDetails(id)}
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
        py-3
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
      "
            >
              View Details
              <ArrowRightOutlined className="transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
