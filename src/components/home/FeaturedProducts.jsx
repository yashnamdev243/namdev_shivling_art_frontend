// import { Button } from "antd";
// import { ArrowRightOutlined } from "@ant-design/icons";
// import { motion } from "framer-motion";
// import Container from "./Container";
// import SectionTitle from "./SectionTitle";
// import { useProducts } from "../../hooks/useProducts";
// import ProductGrid from "../cards/ProductGrid";
// import { ROUTES } from "../../config/routes";
// import { Link } from "react-router-dom";

// export default function FeaturedProducts() {
//   const { data, isLoading, isError, error, refetch } = useProducts({
//     limit: 8,
//     sort: "-createdAt",
//   });

//   const products = data?.products || data?.data || data || [];

//   return (
//     <section className="relative overflow-hidden py-6 ">
//       {/* Background */}
//       <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-orange-300/20 blur-[120px]" />

//       <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-300/20 blur-[140px]" />

//       <Container>
//         <div className="mb-16 flex flex-col items-center justify-between gap-8 lg:flex-row">
//           <SectionTitle
//             title="Featured Products"
//             subtitle="Handcrafted Sacred Collection"
//           />

//           <Link to={ROUTES.products}>
//             <Button
//               type="primary"
//               icon={<ArrowRightOutlined />}
//               className="
//                 !h-12
//                 !rounded-full
//                 !border-none
//                 !bg-gradient-to-r
//                 !from-orange-500
//                 !to-amber-500
//                 !px-8
//                 !font-semibold
//                 hover:!shadow-xl
//                 hover:!shadow-orange-500/30
//               "
//             >
//               View All
//             </Button>
//           </Link>
//         </div>

//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           variants={{
//             hidden: {},
//             show: {
//               transition: {
//                 staggerChildren: 0.12,
//               },
//             },
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

export default function FeaturedProducts() {
  const { data, isLoading, isError, error, refetch } = useProducts({
    limit: 8,
    sort: "-createdAt",
  });

  const products = data?.products || data?.data || data || [];

  return (
    <section className="relative overflow-hidden py-6">
      {/* Background */}
      <div className="pointer-events-none absolute -top-24 left-0 h-56 w-56 rounded-full bg-orange-300/20 blur-[90px] sm:h-80 sm:w-80 sm:blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-amber-300/20 blur-[100px] sm:h-96 sm:w-96 sm:blur-[140px]" />

      <Container>
        <div className="mb-10 flex flex-col items-center justify-between gap-6 sm:mb-16 sm:gap-8 lg:flex-row">
          <SectionTitle
            title="Featured Products"
            subtitle="Handcrafted Sacred Collection"
          />

          <Link to={ROUTES.products} className="w-full sm:w-auto">
            <Button
              type="primary"
              icon={<ArrowRightOutlined />}
              className="!h-12 !w-full !rounded-full !border-none !bg-gradient-to-r !from-orange-500 !to-amber-500 !px-8 !font-semibold hover:!shadow-xl hover:!shadow-orange-500/30 sm:!w-auto"
            >
              View All
            </Button>
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
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
