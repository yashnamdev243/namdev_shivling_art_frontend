import { motion } from "framer-motion";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import CategoryCard from "../cards/CategoryCard";
import { useCategories } from "../../hooks/useCategories";
import Loader from "../common/Loader";
import EmptyState from "../common/EmptyState";
import { CATEGORIES_CONTENT } from "../../config/content";
import { useContent } from "../../context/LanguageContext";

export default function Categories() {
  const { data, isLoading, isError, refetch } = useCategories();
  const categories = data?.categories || data?.data || data || [];
  const t = useContent(CATEGORIES_CONTENT);

  return (
    <section className="relative overflow-hidden py-6">
      {/* Background Blur */}
      <div className="pointer-events-none absolute -top-20 left-0 h-56 w-56 rounded-full bg-orange-200/30 blur-[90px] sm:h-72 sm:w-72 sm:blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-amber-200/30 blur-[100px] sm:h-80 sm:w-80 sm:blur-[140px]" />

      <Container>
        <SectionTitle title={t.title} subtitle={t.subtitle} />

        {isLoading && <Loader label="Loading categories..." />}

        {!isLoading && (isError || categories.length === 0) && (
          <EmptyState
            title={t.emptyTitle}
            description={t.emptyDescription}
            onRetry={isError ? refetch : undefined}
          />
        )}

        {!isLoading && categories.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="mt-10 grid gap-5 sm:mt-16 sm:gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {categories.map((item) => (
              <motion.div
                key={item._id || item.id || item.name}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <CategoryCard category={item} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </Container>
    </section>
  );
}
