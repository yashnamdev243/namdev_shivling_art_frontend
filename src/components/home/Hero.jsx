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
import { FaOm } from "react-icons/fa";

const isVideoFile = (src) => Boolean(src) && /\.(mp4|webm|ogg|mov)$/i.test(src);

export default function Hero({ staticImage = bgImage }) {
  const { data, isLoading } = useRandomProducts(6);
  // const slides = data?.products || [];
  const slides = [];
  const t = useContent(HERO_CONTENT);

  return (
    <section className="relative min-h-screen sm:h-screen sm:min-h-[700px] overflow-hidden bg-[#15130F] pt-24 sm:pt-14">
      <div className="absolute inset-0">
        {isLoading ? (
          <div className="flex h-full w-full items-center justify-center bg-[#15130F]">
            <Skeleton.Image
              active
              className="!h-full !w-full [&_.ant-skeleton-image]:!bg-[#1C1A17]"
            />
          </div>
        ) : slides.length > 0 ? (
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
        ) : (
          /* Static fallback image */
          <img
            src={staticImage}
            alt="Namdev Narmadeshwar Shivling"
            className="h-full w-full object-cover object-[58%_center] brightness-[0.92] contrast-[1.04] saturate-[0.96] sm:object-center"
          />
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
          <div className="flex min-h-[calc(100svh-96px)] items-start py-6 sm:min-h-[calc(100vh-112px)] sm:items-center sm:py-10">
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
                className="relative -mt-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[#D4AF6A]/30 bg-white/[0.06] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#F2E3C8] backdrop-blur-md sm:mt-0 sm:px-5 sm:text-xs sm:tracking-[0.16em]"
              >
                <span className="text-[#D4AF6A]">
                  <FaOm />
                </span>
                {t.badge}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-16 text-[34px] font-bold leading-[1.08] tracking-tight sm:mt-6 sm:text-6xl lg:text-[64px]"
              >
                <span className="text-[#D4AF6A]">{t.titleLine1}</span>
                <span className="block text-[#F8F4EA]">{t.titleLine2}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mx-auto mt-8 max-w-[38rem] text-[14px] leading-6 text-[#E5DFD2]/75 sm:mt-8 sm:text-lg sm:leading-8 lg:mx-0"
              >
                {t.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-16 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-5 lg:justify-start"
              >
                <Link
                  to={ROUTES?.products || "/products"}
                  className="group flex w-full justify-center sm:w-auto"
                >
                  <Button
                    // type="primary"
                    size="small"
                    className="!flex !h-10 sm:!h-12 !w-[60%] sm:!w-auto !items-center !justify-center !rounded-full border border-[#D4AF6A]/30 bg-white/[0.06] !px-5 sm:!px-8 !text-sm sm:!text-base !font-medium !text-[#F2E3C8] !shadow-[0_10px_30px_rgba(212,175,106,0.18)] transition-all duration-200 hover:!-translate-y-0.5 hover:!bg-[#2A2620]"
                  >
                    <span className="flex items-center gap-1.5 sm:gap-2">
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
                    className="flex w-full justify-center sm:w-auto"
                  >
                    <Button
                      size="small"
                      icon={<WhatsAppOutlined />}
                      className="!flex !h-10 sm:!h-12 !w-[60%] sm:!w-auto !items-center !justify-center !gap-1.5 !rounded-full !border !border-white/25 !bg-white/[0.04] !px-5 sm:!px-8 !text-sm sm:!text-base !font-medium !text-[#F8F4EA] !shadow-none !backdrop-blur-md transition-all duration-200 hover:!border-emerald-400/50 hover:!text-emerald-300"
                    >
                      {t.ctaSecondary}
                    </Button>
                  </a>
                )}
              </motion.div>

              {/* Counters */}
              <div className="mx-auto mt-16 sm:mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:mx-0">
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
