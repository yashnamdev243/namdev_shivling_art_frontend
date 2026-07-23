import Container from "./Container";
import SectionTitle from "./SectionTitle";
import CategoryCard from "../cards/CategoryCard";
import { useCategories } from "../../hooks/useCategories";
import Loader from "../common/Loader";
import EmptyState from "../common/EmptyState";

export default function Categories() {
  const { data, isLoading, isError } = useCategories();
  const categories = data?.categories || data?.data || data || [];

  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle title="Our Categories" subtitle="Explore Collection" />

        {isLoading && <Loader label="Loading categories..." />}

        {!isLoading && (isError || categories.length === 0) && (
          <EmptyState
            title="Categories coming soon"
            description="The admin hasn't added any categories yet. Check back shortly."
          />
        )}

        {!isLoading && categories.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((item) => (
              <CategoryCard key={item._id || item.id || item.name} category={item} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
