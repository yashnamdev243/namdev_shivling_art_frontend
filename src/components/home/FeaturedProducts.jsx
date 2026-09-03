// import { Button } from "antd";
// import { ArrowRightOutlined } from "@ant-design/icons";
// import { motion } from "framer-motion";
// import Container from "./Container";
// import SectionTitle from "./SectionTitle";
// import { useProducts } from "../../hooks/useProducts";
// import ProductGrid from "../cards/ProductGrid";
// import { ROUTES } from "../../config/routes";
// import { Link } from "react-router-dom";
// import { FEATURED_PRODUCTS_CONTENT } from "../../config/content";
// import { useContent } from "../../context/LanguageContext";

// export default function FeaturedProducts() {
//   const { data, isLoading, isError, error, refetch } = useProducts({
//     limit: 8,
//     sort: "-createdAt",
//   });

//   const products = data?.products || data?.data || data || [];
//   const t = useContent(FEATURED_PRODUCTS_CONTENT);

//   return (
//     <section className="relative overflow-hidden py-6">
//       {/* Background */}
//       <div className="pointer-events-none absolute -top-24 left-0 h-56 w-56 rounded-full bg-orange-300/20 blur-[90px] sm:h-80 sm:w-80 sm:blur-[120px]" />
//       <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-amber-300/20 blur-[100px] sm:h-96 sm:w-96 sm:blur-[140px]" />

//       <Container>
//         <div className="mb-10 flex flex-col items-center justify-between gap-6 sm:mb-16 sm:gap-8 lg:flex-row">
//           <SectionTitle title={t.title} subtitle={t.subtitle} />

//           <Link to={ROUTES.products} className="w-full sm:w-auto">
//             <Button
//               type="primary"
//               icon={<ArrowRightOutlined />}
//               className="!h-12 !w-full !rounded-full !border-none !bg-gradient-to-r !from-orange-500 !to-amber-500 !px-8 !font-semibold hover:!shadow-xl hover:!shadow-orange-500/30 sm:!w-auto"
//             >
//               {t.viewAll}
//             </Button>
//           </Link>
//         </div>

//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.15 }}
//           variants={{
//             hidden: {},
//             show: { transition: { staggerChildren: 0.12 } },
//           }}
//         >
//           <ProductGrid
//             products={products}
//             isLoading={isLoading}
//             isError={isError}
//             error={error}
//             onRetry={refetch}
//           />
//         </motion.div>
//       </Container>
//     </section>
//   );
// }




import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { useProducts } from "../../hooks/useProducts";
import ProductGrid from "../cards/ProductGrid";
import { ROUTES } from "../../config/routes";
import { Link } from "react-router-dom";
import { FEATURED_PRODUCTS_CONTENT } from "../../config/content";
import { useContent } from "../../context/LanguageContext";

export default function FeaturedProducts() {
  const { data, isLoading, isError, error, refetch } = useProducts({
    limit: 8,
    sort: "-createdAt",
  });

  const products = data?.products || data?.data || data || [];
  const t = useContent(FEATURED_PRODUCTS_CONTENT);

  return (
    <section className="relative overflow-hidden py-6">
      {/* Kept deliberately minimal — the products should carry this section */}
      <div className="pointer-events-none absolute -top-24 right-1/4 h-64 w-64 rounded-full bg-[#D4AF6A]/[0.05] blur-[120px]" />

      <Container>
        <div className="mb-10 flex flex-col items-center justify-between gap-6 sm:mb-16 sm:gap-8 lg:flex-row">
          <SectionTitle title={t.title} subtitle={t.subtitle} />

          <Link to={ROUTES.products} className="group w-full sm:w-auto">
            <Button
             // type="primary"
              className="!flex !h-12 !w-full !items-center !justify-center !rounded-full !border-none !bg-[#1C1A17] !px-8 !font-medium !text-[#F2E3C8] !shadow-none transition-all duration-200 hover:!-translate-y-0.5 hover:!bg-[#2A2620] sm:!w-auto"
            >
              <span className="flex items-center gap-2">
                {t.viewAll}
                <ArrowRightOutlined className="text-[#D4AF6A] transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Button>
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <ProductGrid
            products={products}
            isLoading={isLoading}
            isError={isError}
            error={error}
            onRetry={refetch}
          />
        </motion.div>
      </Container>
    </section>
  );
}