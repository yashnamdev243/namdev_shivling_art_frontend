import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { useProducts } from "../../hooks/useProducts";
import ProductGrid from "../cards/ProductGrid";

export default function FeaturedProducts() {
  const { data, isLoading, isError, error, refetch } = useProducts({
    limit: 8,
    sort: "-createdAt",
  });

  const products = data?.products || data?.data || data || [];

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <SectionTitle title="Featured Products" subtitle="Best Selling" />

        <ProductGrid
          products={products}
          isLoading={isLoading}
          isError={isError}
          error={error}
          onRetry={refetch}
        />
      </Container>
    </section>
  );
}
