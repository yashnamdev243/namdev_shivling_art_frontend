// import { Button, Skeleton } from "antd";
// import { motion } from "framer-motion";
// import { ArrowRightOutlined, WhatsAppOutlined } from "@ant-design/icons";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import { Link } from "react-router-dom";

// import "swiper/css";
// import "swiper/css/pagination";
// import Container from "./Container";
// import { useRandomProducts } from "../../hooks/useProducts";
// import { FILE_BASE_URL } from "../../config/api";
// import { SITE } from "../../config/constants";
// import { HERO_CONTENT } from "../../config/content";
// import { useContent } from "../../context/LanguageContext";
// import { ROUTES } from "../../config/routes";
// import bgImage from "/background.png";

// const isVideoFile = (src) => Boolean(src) && /\.(mp4|webm|ogg|mov)$/i.test(src);

// export default function Hero() {
//   const { data, isLoading } = useRandomProducts(6);
//   const slides = data?.products || [];
//   const t = useContent(HERO_CONTENT);

//   return (
//     <section className="relative h-screen min-h-[700px] overflow-hidden pt-24 sm:pt-14">
//       <div className="absolute inset-0">
//         {isLoading ? (
//           <Skeleton.Image active className="!h-full !w-full" />
//         ) : (
//           <Swiper
//             modules={[Autoplay]}
//             autoplay={{ delay: 5000, disableOnInteraction: false }}
//             loop={slides.length > 1}
//             className="h-full w-full"
//           >
//             {slides.map((item) => {
//               const src = `${FILE_BASE_URL}/uploads/${item.image}`;

//               return (
//                 <SwiperSlide key={item.id}>
//                   {isVideoFile(item.image) ? (
//                     <video
//                       autoPlay
//                       muted
//                       loop
//                       playsInline
//                       className="h-full w-full object-cover"
//                     >
//                       <source src={src} type="video/mp4" />
//                     </video>
//                   ) : (
//                     <img
//                       src={src}
//                       className="h-full w-full object-cover"
//                       alt={item.name}
//                       loading="eager"
//                     />
//                   )}
//                 </SwiperSlide>
//               );
//             })}
//           </Swiper>
//         )}
//       </div>

//       <div className="absolute inset-0 z-10 bg-black/55" />
//       <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

//       <div className="relative z-20">
//         <Container>
//           <div className="flex min-h-[calc(100vh-112px)] items-center py-10">
//             <motion.div
//               className="mx-auto flex max-w-4xl flex-col items-center text-center"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-xs font-semibold text-orange-700 sm:px-5 sm:text-sm">
//                 {t.badge}
//               </span>

//               <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
//                 <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
//                   {t.titleLine1}
//                 </span>
//                 <span className="block text-white">{t.titleLine2}</span>
//               </h1>

//               <p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-gray-200 sm:mt-8 sm:text-lg sm:leading-8">
//                 {t.subtitle}
//               </p>

//               <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
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
//                     {t.ctaPrimary}
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
//                       {t.ctaSecondary}
//                     </Button>
//                   </a>
//                 )}
//               </div>

//               {/* Counters */}
//               <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
//                 {t.counters.map(([num, label], i) => (
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
//     </section>
//   );
// }



import { Button, Skeleton } from "antd";
import { motion } from "framer-motion";
import { ArrowRightOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
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
  const slides = data?.products || [];
  const t = useContent(HERO_CONTENT);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-[#15130F] pt-24 sm:pt-14">
      <div className="absolute inset-0">
        {isLoading ? (
          <div className="flex h-full w-full items-center justify-center bg-[#15130F]">
            <Skeleton.Image active className="!h-full !w-full [&_.ant-skeleton-image]:!bg-[#1C1A17]" />
          </div>
        ) : (
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={slides.length > 1}
            pagination={slides.length > 1 ? { clickable: true } : false}
            style={{
              "--swiper-pagination-color": "#D4AF6A",
              "--swiper-pagination-bullet-inactive-color": "#F2E3C8",
              "--swiper-pagination-bullet-inactive-opacity": "0.35",
              "--swiper-pagination-bullet-size": "6px",
              "--swiper-pagination-bullet-horizontal-gap": "4px",
              "--swiper-pagination-bottom": "28px",
            }}
            className="h-full w-full"
          >
            {slides.map((item) => {
              const src = `${FILE_BASE_URL}/uploads/${item.image}`;

              return (
                <SwiperSlide key={item.id}>
                  {isVideoFile(item.image) ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover brightness-[0.92] contrast-[1.04] saturate-[0.96]"
                    >
                      <source src={src} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={src}
                      className="h-full w-full object-cover brightness-[0.92] contrast-[1.04] saturate-[0.96]"
                      alt={item.name}
                      loading="eager"
                    />
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>

      {/* Cinematic layered overlays — readability + atmosphere, product stays visible */}
      <div className="absolute inset-0 z-10 bg-black/40" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0E0D0A]/90 via-[#0E0D0A]/45 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0E0D0A]/70 via-transparent to-transparent" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[6%] top-[18%] z-10 h-72 w-72 rounded-full bg-[#D4AF6A]/[0.08] blur-3xl sm:h-96 sm:w-96"
      />

      <div className="relative z-20">
        <Container>
          <div className="flex min-h-[calc(100vh-112px)] items-center py-10">
            <motion.div
              className="mx-auto flex max-w-4xl flex-col items-center text-center lg:mx-0 lg:max-w-xl lg:items-start lg:text-left"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#D4AF6A]/30 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F2E3C8] backdrop-blur-md sm:px-5 sm:text-xs"
              >
                <span className="text-[#D4AF6A]">✦</span>
                {t.badge}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-[64px]"
              >
                <span className="text-[#D4AF6A]">{t.titleLine1}</span>
                <span className="block text-[#F8F4EA]">{t.titleLine2}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mx-auto mt-7 max-w-[38rem] text-base leading-7 text-[#E5DFD2]/75 sm:mt-8 sm:text-lg sm:leading-8 lg:mx-0"
              >
                {t.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5 lg:justify-start"
              >
                <Link
                  to={ROUTES?.products || "/products"}
                  className="group w-full sm:w-auto"
                >
                  <Button
                   // type="primary"
                    size="large"
                    className="!flex !h-12 !w-full !items-center !justify-center !rounded-full border border-[#D4AF6A]/30 bg-white/[0.06] !px-8 !font-medium !text-[#F2E3C8] !shadow-[0_10px_30px_rgba(212,175,106,0.18)] transition-all duration-200 hover:!-translate-y-0.5 hover:!bg-[#2A2620] sm:!w-auto"
                  >
                    <span className="flex items-center gap-2">
                      {t.ctaPrimary}
                      <ArrowRightOutlined className="transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>

                {SITE.social?.whatsapp && (
                  <a
                    href={SITE.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      size="large"
                      icon={<WhatsAppOutlined />}
                      className="!flex !h-12 !w-full !items-center !justify-center !gap-1.5 !rounded-full !border !border-white/25 !bg-white/[0.04] !px-8 !font-medium !text-[#F8F4EA] !shadow-none backdrop-blur-md transition-all duration-200 hover:!border-emerald-400/50 hover:!text-emerald-300 sm:!w-auto"
                    >
                      {t.ctaSecondary}
                    </Button>
                  </a>
                )}
              </motion.div>

              {/* Counters */}
              <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:mx-0">
                {t.counters.map(([num, label], i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl sm:p-5"
                  >
                    <h2 className="text-2xl font-bold text-[#D4AF6A] sm:text-4xl">
                      {num}
                    </h2>
                    <span
                      className="mt-1.5 mb-1.5 block h-px w-6 bg-[#D4AF6A]/30"
                      aria-hidden="true"
                    />
                    <p className="text-xs text-[#E5DFD2]/70 sm:text-base">
                      {label}
                    </p>
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