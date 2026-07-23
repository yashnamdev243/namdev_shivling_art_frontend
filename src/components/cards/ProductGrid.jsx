import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";
import EmptyState from "../common/EmptyState";
import ErrorState from "../common/ErrorState";

/**
 * Drop-in grid that handles the loading/error/empty/success states for
 * any list of products -- pass it whatever a `useProducts()` query
 * returns and it renders the right thing.
 */
export default function ProductGrid({ products, isLoading, isError, error, onRetry }) {
  if (isLoading) return <ProductSkeleton />;
  if (isError) return <ErrorState message={error?.message} onRetry={onRetry} />;
  if (!products?.length)
    return (
      <EmptyState
        title="No products found"
        description="Try a different search term or category."
      />
    );

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product._id || product.id} product={product} />
      ))}
    </div>
  );
}
