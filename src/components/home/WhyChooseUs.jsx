// import { motion } from "framer-motion";
// import {
//   SafetyCertificateOutlined,
//   CustomerServiceOutlined,
//   TrophyOutlined,
//   ThunderboltOutlined,
// } from "@ant-design/icons";

// import Container from "./Container";
// import SectionTitle from "./SectionTitle";

// const features = [
//   {
//     icon: <SafetyCertificateOutlined aria-hidden="true" />,
//     title: "100% Authentic",
//     description:
//       "Every Narmadeshwar Shivling is sourced from the sacred Narmada River and carefully verified.",
//   },
//   {
//     icon: <CustomerServiceOutlined aria-hidden="true" />,
//     title: "Customer Support",
//     description:
//       "Our team is always available to guide you in selecting the perfect Shivling for your temple or home.",
//   },
//   {
//     icon: <TrophyOutlined aria-hidden="true" />,
//     title: "Premium Craftsmanship",
//     description:
//       "Each product is handcrafted with precision and devotion by experienced artisans.",
//   },
//   {
//     icon: <ThunderboltOutlined aria-hidden="true" />,
//     title: "Fast Delivery",
//     description:
//       "Secure packaging and quick delivery across India with complete safety.",
//   },
// ];

// const gridVariants = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.12 } },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// export default function WhyChooseUs() {
//   return (
//     <section className="relative overflow-hidden py-6">
//       <div className="pointer-events-none absolute -top-24 left-0 h-56 w-56 rounded-full bg-orange-300/20 blur-[90px] sm:h-80 sm:w-80 sm:blur-[120px]" />
//       <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-amber-300/20 blur-[100px] sm:h-96 sm:w-96 sm:blur-[140px]" />

//       <Container>
//         <SectionTitle
//           subtitle="Why Choose Us"
//           title="Trusted by Thousands of Devotees"
//         />

//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={gridVariants}
//           className="mt-10 grid gap-5 sm:mt-16 sm:gap-8 md:grid-cols-2 lg:grid-cols-4"
//         >
//           {features.map((item) => (
//             <motion.div
//               key={item.title}
//               variants={cardVariants}
//               whileHover={{ y: -10 }}
//               transition={{ duration: 0.35 }}
//               className="group relative overflow-hidden rounded-[22px] border border-orange-100 bg-white p-6 shadow-lg transition-all duration-500 hover:border-orange-300 hover:shadow-[0_20px_50px_rgba(249,115,22,.15)] sm:rounded-[28px] sm:p-8"
//             >
//               {/* Background Glow */}
//               <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-200/10 blur-3xl transition-all duration-500 group-hover:bg-orange-300/20 sm:h-40 sm:w-40" />

//               {/* Icon */}
//               <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-amber-500 text-3xl text-white shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 sm:h-20 sm:w-20 sm:text-4xl">
//                 {item.icon}
//               </div>

//               {/* Title */}
//               <h3 className="relative z-10 mt-6 text-center text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-orange-600 sm:mt-8 sm:text-2xl">
//                 {item.title}
//               </h3>

//               {/* Divider */}
//               <div className="relative z-10 mx-auto mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-500 group-hover:w-24 sm:mt-4 sm:w-16" />

//               {/* Description */}
//               <p className="relative z-10 mt-5 text-center text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base">
//                 {item.description}
//               </p>

//               {/* Bottom Badge */}
//               <div className="relative z-10 mt-6 flex justify-center sm:mt-8">
//                 <span className="rounded-full bg-orange-50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-600 sm:text-xs sm:tracking-[0.25em]">
//                   Premium Quality
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </Container>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import {
  SafetyCertificateOutlined,
  CustomerServiceOutlined,
  TrophyOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { WHY_CHOOSE_US_CONTENT } from "../../config/content";
import { useContent } from "../../context/LanguageContext";

// Icons stay fixed — only the text underneath is bilingual. Order here
// must match the order of `features` in WHY_CHOOSE_US_CONTENT.
const ICONS = [SafetyCertificateOutlined, CustomerServiceOutlined, TrophyOutlined, ThunderboltOutlined];

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyChooseUs() {
  const t = useContent(WHY_CHOOSE_US_CONTENT);

  return (
    <section className="relative overflow-hidden py-6">
      <div className="pointer-events-none absolute -top-24 left-0 h-56 w-56 rounded-full bg-orange-300/20 blur-[90px] sm:h-80 sm:w-80 sm:blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-amber-300/20 blur-[100px] sm:h-96 sm:w-96 sm:blur-[140px]" />

      <Container>
        <SectionTitle subtitle={t.subtitle} title={t.title} />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridVariants}
          className="mt-10 grid gap-5 sm:mt-16 sm:gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {t.features.map((item, i) => {
            const Icon = ICONS[i];

            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-[22px] border border-orange-100 bg-white p-6 shadow-lg transition-all duration-500 hover:border-orange-300 hover:shadow-[0_20px_50px_rgba(249,115,22,.15)] sm:rounded-[28px] sm:p-8"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-200/10 blur-3xl transition-all duration-500 group-hover:bg-orange-300/20 sm:h-40 sm:w-40" />

                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-amber-500 text-3xl text-white shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 sm:h-20 sm:w-20 sm:text-4xl">
                  <Icon aria-hidden="true" />
                </div>

                <h3 className="relative z-10 mt-6 text-center text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-orange-600 sm:mt-8 sm:text-2xl">
                  {item.title}
                </h3>

                <div className="relative z-10 mx-auto mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-500 group-hover:w-24 sm:mt-4 sm:w-16" />

                <p className="relative z-10 mt-5 text-center text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base">
                  {item.description}
                </p>

                <div className="relative z-10 mt-6 flex justify-center sm:mt-8">
                  <span className="rounded-full bg-orange-50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-600 sm:text-xs sm:tracking-[0.25em]">
                    {t.badge}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
