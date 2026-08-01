import { Link } from "react-router-dom";
import { Button } from "antd";
import { HeartOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

import Seo from "../../components/common/Seo";
import ProductCard from "../../components/cards/ProductCard";
import { useWishlist } from "../../context/WishlistContext";
import { ROUTES } from "../../config/routes";

export default function Wishlist() {
  const { items } = useWishlist();

  return (
    <>
      <Seo
        title="Your Wishlist"
        description="Products you've saved for later."
        noIndex
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white py-12 sm:py-16 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
        {/* Background Blur */}
        <div className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full bg-amber-200/30 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-orange-200/30 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />

        <div className="container mx-auto max-w-7xl px-0 sm:px-5">
          <div className="mb-12 text-center sm:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-xs font-semibold text-orange-700 sm:px-5 sm:text-sm">
              Your Wishlist
            </span>
            <p className="mt-2 text-sm text-green-500 sm:text-base font-medium">
              {" "}
              {items.length > 0
                ? `${items.length} saved item${items.length > 1 ? "s" : ""}`
                : "Nothing saved yet"}
            </p>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-[24px] border border-dashed border-orange-200 bg-white/60 py-16 text-center sm:rounded-[32px] sm:py-24">
              <HeartOutlined
                className="text-4xl text-orange-300 sm:text-5xl"
                aria-hidden="true"
              />
              <h2 className="mt-5 text-lg font-bold text-slate-900 sm:text-xl">
                Your wishlist is empty
              </h2>
              <p className="mt-2 max-w-sm text-sm text-gray-500 sm:text-base">
                Tap the heart icon on any product to save it here for later.
              </p>
              <Link to={ROUTES.products} className="mt-6">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowLeftOutlined />}
                  className="!h-11 !rounded-full !border-0 !bg-gradient-to-r !from-orange-500 !to-amber-500 !px-6 !font-semibold"
                >
                  Browse Products
                </Button>
              </Link>
            </div>
          ) : (
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
              className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-3"
            >
              {items.map((product) => (
                <motion.div
                  key={product._id || product.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
