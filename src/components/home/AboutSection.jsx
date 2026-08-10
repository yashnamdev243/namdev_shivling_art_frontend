import { Button, Skeleton } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from "./Container";
import { useRandomProducts } from "../../hooks/useProducts";
import { FILE_BASE_URL } from "../../config/api";
import { ABOUT_PREVIEW_CONTENT } from "../../config/content";
import { useContent } from "../../context/LanguageContext";

const PLACEHOLDER_IMAGE = "/about-placeholder.webp";

export default function AboutSection() {
  const navigate = useNavigate();
  const { data, isLoading } = useRandomProducts(24);
  const [imageFailed, setImageFailed] = useState(false);
  const t = useContent(ABOUT_PREVIEW_CONTENT);

  const products = data?.products || data?.data || data || [];

  const images = useMemo(() => {
    return products.flatMap((product) => {
      const list = [];

      if (product.image) {
        list.push(`${FILE_BASE_URL}/uploads/${product.image}`);
      }

      if (product.gallery) {
        try {
          const gallery = Array.isArray(product.gallery)
            ? product.gallery
            : JSON.parse(product.gallery);

          gallery.forEach((img) => {
            if (img) list.push(`${FILE_BASE_URL}/uploads/${img}`);
          });
        } catch (e) {
          console.warn("Invalid gallery JSON", e);
        }
      }

      return list;
    });
  }, [products]);

  const randomImage = useMemo(() => {
    if (!images.length) return PLACEHOLDER_IMAGE;
    return images[Math.floor(Math.random() * images.length)];
  }, [images]);

  const heroImageSrc = imageFailed ? PLACEHOLDER_IMAGE : randomImage;

  return (
    <section className="relative overflow-hidden py-6">
      <div className="pointer-events-none absolute -top-24 left-0 h-56 w-56 rounded-full bg-orange-300/20 blur-[90px] sm:h-80 sm:w-80 sm:blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-amber-300/20 blur-[100px] sm:h-96 sm:w-96 sm:blur-[140px]" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="pointer-events-none absolute -left-12 -top-12 h-56 w-56 rounded-full bg-orange-300/20 blur-3xl sm:h-72 sm:w-72" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-[24px] border border-orange-100 bg-white p-2 shadow-[0_25px_70px_rgba(249,115,22,.18)] sm:rounded-[32px] sm:p-3">
              {isLoading ? (
                <Skeleton.Image active className="!h-[320px] !w-full sm:!h-[450px] lg:!h-[620px]" />
              ) : (
                <img
                  src={heroImageSrc}
                  onError={() => setImageFailed(true)}
                  loading="lazy"
                  alt="Namdev Narmadeshwar Shivling Art - Authentic Narmadeshwar Shivling Manufacturer in Bakawan Khargone Madhya Pradesh"
                  className="h-[320px] w-full rounded-[18px] object-cover transition duration-700 hover:scale-105 sm:h-[450px] sm:rounded-[24px] lg:h-[620px]"
                />
              )}
            </div>

            {/* Floating "Discover Our Story" card */}
            <motion.div
              whileHover={{ y: -6 }}
              className="absolute -bottom-5 left-4 rounded-2xl border border-orange-100 bg-white/95 p-2 shadow-xl backdrop-blur-xl sm:-bottom-6 sm:left-8 sm:p-3"
            >
              <Button
                size="large"
                icon={<ArrowRightOutlined />}
                onClick={() => navigate("/about")}
                className="!h-12 !rounded-2xl !border-0 !bg-gradient-to-r !from-orange-500 !to-amber-500 !px-6 !text-sm !font-semibold !text-white hover:!shadow-xl sm:!h-14 sm:!px-8 sm:!text-base"
              >
                {t.cta}
              </Button>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-10 lg:mt-0"
          >
            <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-600 sm:px-5 sm:tracking-[0.35em]">
              {t.badge}
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:mt-6 sm:text-4xl lg:text-5xl">
              {t.titleLine1}
              <span className="block text-orange-600">{t.titleLine2}</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600 sm:mt-8 sm:text-lg sm:leading-9">
                {t.paragraph1}
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:mt-6 sm:text-lg sm:leading-9">
             {t.paragraph1}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3.5 sm:mt-12 sm:gap-5">
              {t.stats.map(([value, label], i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-orange-100 bg-white p-4 shadow-sm transition hover:shadow-xl sm:p-6"
                >
                  <h3 className="text-2xl font-bold text-orange-600 sm:text-4xl">{value}</h3>
                  <p className="mt-1.5 text-sm text-gray-500 sm:mt-2 sm:text-base">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}