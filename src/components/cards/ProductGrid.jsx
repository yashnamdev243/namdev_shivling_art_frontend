import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";
import EmptyState from "../common/EmptyState";
import ErrorState from "../common/ErrorState";

export default function ProductGrid({
  products,
  isLoading,
  isError,
  error,
  onRetry,
}) {
  if (isLoading) {
    return <ProductSkeleton count={6} />;
  }
  if (isError) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <ErrorState message={error?.message} onRetry={onRetry} />
      </div>
    );
  }
  if (!products?.length) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <EmptyState
          title="No Products Found"
          description="We're adding more handcrafted Shivlings soon."
        />
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="
        grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3
      "
    >
      {products.map((product) => (
        <motion.div
          key={product._id || product.id}
          variants={{
            hidden: {
              opacity: 0,
              y: 40,
            },
            show: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ duration: 0.5 }}
        >
          <ProductCard key={product._id || product.id} product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
}
