// import Container from "./Container";
// import SectionTitle from "./SectionTitle";
// import CategoryCard from "../cards/CategoryCard";
// import { useCategories } from "../../hooks/useCategories";
// import Loader from "../common/Loader";
// import EmptyState from "../common/EmptyState";

// export default function Categories() {
//   const { data, isLoading, isError } = useCategories();
//   const categories = data?.categories || data?.data || data || [];

//   return (
//     <section className="py-24 bg-white">
//       <Container>
//         <SectionTitle title="Our Categories" subtitle="Explore Collection" />

//         {isLoading && <Loader label="Loading categories..." />}

//         {!isLoading && (isError || categories.length === 0) && (
//           <EmptyState
//             title="Categories coming soon"
//             description="The admin hasn't added any categories yet. Check back shortly."
//           />
//         )}

//         {!isLoading && categories.length > 0 && (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {categories.map((item) => (
//               <CategoryCard key={item._id || item.id || item.name} category={item} />
//             ))}
//           </div>
//         )}
//       </Container>
//     </section>
//   );
// }

import { motion } from "framer-motion";

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
    <section className="relative overflow-hidden py-6 ">
      {/* Background Blur */}
      <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-orange-200/30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-200/30 blur-[140px]" />

      <Container>
        <SectionTitle
          title="Our Categories"
          subtitle="Explore Sacred Collections"
        />

        {isLoading && <Loader label="Loading categories..." />}

        {!isLoading && (isError || categories.length === 0) && (
          <EmptyState
            title="Categories Coming Soon"
            description="We're adding beautiful handcrafted collections. Please check back shortly."
          />
        )}

        {!isLoading && categories.length > 0 && (
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
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
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
