// import { Button, Skeleton } from "antd";
// import { motion } from "framer-motion";
// import { ArrowRightOutlined, WhatsAppOutlined } from "@ant-design/icons";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import { Link } from "react-router-dom";

// import "swiper/css";
// import "swiper/css/pagination";
// import Container from "./Container";
// import { useRandomProducts } from "../../hooks/useProducts";
// import { FILE_BASE_URL } from "../../config/api";
// import { SITE } from "../../config/constants";
// import { ROUTES } from "../../config/routes";
// import bgImage from "/background.png";

// const counters = [
//   ["20+", "Years Experience"],
//   ["5000+", "Happy Customers"],
//   ["100+", "Unique Designs"],
// ];

// const isVideoFile = (src) => Boolean(src) && /\.(mp4|webm|ogg|mov)$/i.test(src);

// export default function Hero() {
//   const { data, isLoading } = useRandomProducts(6);
//   const slides = data?.products || [];
//   const hasSlides = slides.length > 0;

//   return (
//     <section className="relative h-screen min-h-[700px] overflow-hidden pt-24 sm:pt-14">
//       <div className="absolute inset-0">
//         <Swiper
//           modules={[Autoplay]}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           loop
//           className="h-full w-full"
//         >
//           {slides.map((item) => {
//             const src = `${FILE_BASE_URL}/uploads/${item.image}`;

//             return (
//               <SwiperSlide key={item.id}>
//                 {isVideoFile(item.image) ? (
//                   <video
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                     className="h-full w-full object-cover"
//                   >
//                     <source src={src} type="video/mp4" />
//                   </video>
//                 ) : (
//                   <img
//                     src={src}
//                     className="h-full w-full object-fill"
//                     alt={item.name}
//                   />
//                 )}
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </div>
//       <div className="absolute inset-0 z-10 bg-black/55" />

//       <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
//       <div className="relative z-20">
//         <Container>
//           <div className="flex min-h-[calc(100vh-112px)] items-center py-10">
//             {/* Left */}
//             <motion.div
//               className="mx-auto flex max-w-4xl flex-col items-center text-center"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-xs font-semibold text-orange-700 sm:px-5 sm:text-sm">
//                 🕉 Authentic Narmadeshwar Shivlings
//               </span>

//               <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
//                 <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
//                   Namdev Narmadeshwar
//                 </span>

//                 <span className="block text-white">Shivling Art</span>
//               </h1>

//               <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200 sm:mt-8 sm:text-lg sm:leading-8">
//                 Discover handcrafted Narmadeshwar Shivlings made from sacred
//                 stones collected from the holy Narmada River. Every Shivling
//                 represents devotion, spirituality and traditional craftsmanship.
//               </p>

//               <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
//                 <Link
//                   to={ROUTES?.products || "/products"}
//                   className="w-full sm:w-auto"
//                 >
//                   <Button
//                     type="primary"
//                     size="large"
//                     icon={<ArrowRightOutlined />}
//                     className="!h-12 !w-full !rounded-full !border-none !bg-orange-500 !px-8 hover:!bg-orange-600 sm:!w-auto"
//                   >
//                     Explore Collection
//                   </Button>
//                 </Link>

//                 {SITE.social?.whatsapp && (
//                   <a
//                     href={SITE.social.whatsapp}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-full sm:w-auto"
//                   >
//                     <Button
//                       size="large"
//                       icon={<WhatsAppOutlined />}
//                       className="!h-12 !w-full !rounded-full !px-8 sm:!w-auto"
//                     >
//                       Contact Us
//                     </Button>
//                   </a>
//                 )}
//               </div>

//               {/* Counter */}
//               <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
//                 {counters.map(([num, label], i) => (
//                   <motion.div
//                     key={label}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
//                     className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl sm:p-5"
//                   >
//                     <h2 className="text-2xl font-bold text-orange-400 sm:text-4xl">
//                       {num}
//                     </h2>
//                     <p className="mt-1 text-xs text-gray-300 sm:mt-2 sm:text-base">
//                       {label}
//                     </p>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </Container>
//       </div>
//       <style>{`
//         .hero-swiper .swiper-pagination-bullet {
//           background: rgba(255, 255, 255, 0.5);
//           opacity: 1;
//         }
//         .hero-swiper .swiper-pagination-bullet-active {
//           background: #f97316;
//         }
//       `}</style>
//     </section>
//   );
// }


import { Button, Skeleton } from "antd";
import { motion } from "framer-motion";
import { ArrowRightOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import Container from "./Container";
import { useRandomProducts } from "../../hooks/useProducts";
import { FILE_BASE_URL } from "../../config/api";
import { SITE } from "../../config/constants";
import { HERO_CONTENT } from "../../config/content";
import { useContent } from "../../context/LanguageContext";
import { ROUTES } from "../../config/routes";
import bgImage from "/background.png";

const isVideoFile = (src) => Boolean(src) && /\.(mp4|webm|ogg|mov)$/i.test(src);

export default function Hero() {
  const { data, isLoading } = useRandomProducts(6);
  const slides = data?.products ||  [];

  // Every string on this section now comes from content.js so the exact
  // same component renders correctly in English or Hindi — no hardcoded
  // text anywhere below.
  const t = useContent(HERO_CONTENT);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden pt-24 sm:pt-14">
      <div className="absolute inset-0">
        {isLoading ? (
          <Skeleton.Image active className="!h-full !w-full" />
        ) : (
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={slides.length > 1}
            className="h-full w-full"
          >
            {slides.map((item) => {
              const src = `${FILE_BASE_URL}/uploads/${item.image}`;

              return (
                <SwiperSlide key={item.id}>
                  {isVideoFile(item.image) ? (
                    <video autoPlay muted loop playsInline className="h-full w-full object-cover">
                      <source src={src} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={src} className="h-full w-full object-cover" alt={item.name} loading="eager" />
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>

      <div className="absolute inset-0 z-10 bg-black/55" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      <div className="relative z-20">
        <Container>
          <div className="flex min-h-[calc(100vh-112px)] items-center py-10">
            <motion.div
              className="mx-auto flex max-w-4xl flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-xs font-semibold text-orange-700 sm:px-5 sm:text-sm">
                {t.badge}
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  {t.titleLine1}
                </span>
                <span className="block text-white">{t.titleLine2}</span>
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-gray-200 sm:mt-8 sm:text-lg sm:leading-8">
                {t.subtitle}
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
                <Link to={ROUTES?.products || "/products"} className="w-full sm:w-auto">
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRightOutlined />}
                    className="!h-12 !w-full !rounded-full !border-none !bg-orange-500 !px-8 hover:!bg-orange-600 sm:!w-auto"
                  >
                    {t.ctaPrimary}
                  </Button>
                </Link>

                {SITE.social?.whatsapp && (
                  <a href={SITE.social.whatsapp} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button
                      size="large"
                      icon={<WhatsAppOutlined />}
                      className="!h-12 !w-full !rounded-full !px-8 sm:!w-auto"
                    >
                      {t.ctaSecondary}
                    </Button>
                  </a>
                )}
              </div>

              {/* Counters */}
              <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
                {t.counters.map(([num, label], i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl sm:p-5"
                  >
                    <h2 className="text-2xl font-bold text-orange-400 sm:text-4xl">{num}</h2>
                    <p className="mt-1 text-xs text-gray-300 sm:mt-2 sm:text-base">{label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}