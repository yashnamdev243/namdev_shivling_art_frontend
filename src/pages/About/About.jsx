import { Typography, Card, Row, Col, Button, Skeleton } from "antd";
import {
  SafetyCertificateOutlined,
  HeartOutlined,
  TrophyOutlined,
  BankOutlined,
  EnvironmentOutlined,
  CarOutlined,
} from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

import Seo from "../../components/common/Seo";
import { useRandomProducts } from "../../hooks/useProducts";
import { FILE_BASE_URL } from "../../config/api";
import { SITE, HERITAGE_STORY } from "../../config/constants";
import { ABOUT_PAGE_CONTENT, SEO_CONTENT } from "../../config/content";
import { useContent, useLanguage } from "../../context/LanguageContext";

const { Title, Paragraph } = Typography;

const PLACEHOLDER_IMAGE = "/about-placeholder.webp";

// Icons are fixed visuals — only the text next to them is bilingual. Order
// here must match the order of `whyFeatures` / `missionCards` in
// ABOUT_PAGE_CONTENT.
const WHY_ICONS = [
  BankOutlined,
  EnvironmentOutlined,
  SafetyCertificateOutlined,
  HeartOutlined,
  CarOutlined,
  TrophyOutlined,
];
const MISSION_ICONS = [
  BankOutlined,
  EnvironmentOutlined,
  SafetyCertificateOutlined,
];

export default function About() {
  const { data, isLoading } = useRandomProducts(24);
  const [imageFailed, setImageFailed] = useState(false);

  // Single source of truth for language — the heritage story block below
  // now follows whatever the person picked in the site-wide switcher,
  // instead of the page having its own separate EN/HI toggle.
  const { language } = useLanguage();
  const t = useContent(ABOUT_PAGE_CONTENT);
  const seo = useContent(SEO_CONTENT.about);
  const story = HERITAGE_STORY[language];

  const products = useMemo(
    () => data?.products ?? data?.data ?? data ?? [],
    [data],
  );

  const images = useMemo(() => {
    const urls = new Set();

    products.forEach((product) => {
      if (product?.image) {
        urls.add(`${FILE_BASE_URL}/uploads/${product.image}`);
      }

      if (product?.gallery) {
        try {
          const gallery = Array.isArray(product.gallery)
            ? product.gallery
            : JSON.parse(product.gallery);

          gallery.forEach((img) => {
            if (img) urls.add(`${FILE_BASE_URL}/uploads/${img}`);
          });
        } catch (e) {
          console.warn("Invalid gallery JSON", e);
        }
      }
    });

    return [...urls];
  }, [products]);

  const randomImage = useMemo(() => {
    if (images.length === 0) return PLACEHOLDER_IMAGE;
    return images[Math.floor(Math.random() * images.length)];
  }, [images]);

  const heroImageSrc = imageFailed ? PLACEHOLDER_IMAGE : randomImage;

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        path="/about"
      />

      {/* Structured data stays in English for machine-readability — Google
          uses this for rich results regardless of the visible page
          language, so it doesn't need to switch with the UI. */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE.name,
          alternateName: "नामदेव नर्मदेश्वर शिवलिंग आर्ट",
          url: SITE.url,
          logo: `${SITE.url}/logo.png`,
          description: SITE.description,
          founder: { "@type": "Person", name: SITE.founder },
          telephone: SITE.phone,
          email: SITE.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: `Post ${SITE.village}, Tehsil ${SITE.tehsil}`,
            addressLocality: SITE.district,
            addressRegion: SITE.state,
            postalCode: SITE.pincode,
            addressCountry: "IN",
          },
        })}
      </script>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#FBF7EF] via-white to-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10 mt-3 sm:mt-0">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-0 top-0 h-52 w-52 rounded-full bg-[#D4AF6A]/[0.08] blur-[90px] sm:h-72 sm:w-72 sm:blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-52 w-52 rounded-full bg-[#C9A227]/[0.07] blur-[90px] sm:h-72 sm:w-72 sm:blur-[120px]" />

        <div className="container mx-auto max-w-7xl px-0 py-10 sm:px-5 sm:py-20">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF6A]/25 bg-[#A8823C]/[0.05] px-4 py-2.5 sm:px-6 sm:py-3">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#A8823C]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A8823C] sm:text-sm sm:tracking-[0.25em]">
                {t.heroBadge}
              </span>
            </div>

            <Title
              level={1}
              className="mt-6 !mb-5 !text-3xl !font-extrabold leading-tight sm:mt-8 sm:!mb-6 sm:!text-4xl md:!text-5xl lg:!text-6xl xl:!text-7xl"
            >
              <span className="text-[#A8823C]">{t.heroTitleLine1}</span>
              <br />
              <span className="text-[#1C1A17]">{t.heroTitleLine2}</span>
            </Title>

            <h2 className="mx-auto max-w-4xl text-lg font-medium leading-8 text-[#4A453D] sm:text-xl sm:leading-9 md:text-2xl">
              {t.heroSubheading}
            </h2>

            <Paragraph className="mx-auto mt-6 max-w-5xl text-base leading-7 text-[#6B6459] sm:mt-8 sm:text-lg sm:leading-10">
              {t.heroParagraph1}
            </Paragraph>

            <Paragraph className="mx-auto mt-5 max-w-5xl text-base leading-7 text-[#6B6459] sm:mt-6 sm:text-lg sm:leading-10">
              {t.heroParagraph2}
            </Paragraph>

            <Paragraph className="mx-auto mt-5 max-w-5xl text-base leading-7 text-[#6B6459] sm:mt-6 sm:text-lg sm:leading-10">
              {t.heroParagraph3}
            </Paragraph>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:mt-14 sm:gap-4">
              {t.trustBadges.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 rounded-full border border-emerald-700/15 bg-emerald-50/60 px-4 py-2 text-xs font-semibold text-emerald-700 transition hover:-translate-y-0.5 sm:px-6 sm:py-3 sm:text-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Heritage Story — driven entirely by the global language
              switcher now (no separate per-section toggle). */}
          <section className="mt-16 sm:mt-24">
            <div className="mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={language}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-[4px] border border-[#1C1A17]/[0.06] bg-white/70 p-6 shadow-[0_20px_60px_rgba(28,26,23,0.08)] backdrop-blur-xl sm:rounded-[8px] sm:p-10"
                >
                  <Title level={2} className="!mb-2 !text-2xl sm:!text-3xl">
                    {story.heading}
                  </Title>
                  <p className="text-sm font-medium uppercase tracking-wide text-[#A8823C] sm:text-base">
                    {story.subheading}
                  </p>

                  <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
                    {story.paragraphs.map((para, i) => (
                      <p
                        key={i}
                        className="text-sm leading-7 text-[#4A453D] sm:text-base sm:leading-8"
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
                    {/* Contact */}
                    <div className="group rounded-2xl border border-[#1C1A17]/[0.06] bg-white/70 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF6A]/30 sm:p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D4AF6A]/25 bg-[#A8823C]/[0.06] text-[#A8823C]">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.11 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"
                            />
                          </svg>
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A8823C]">
                            {language === "hi" ? "संपर्क" : "Contact"}
                          </p>

                          <p className="mt-1 text-base font-semibold text-[#1C1A17] sm:text-lg">
                            {SITE.founder}
                          </p>

                          <p className="text-sm text-[#6B6459]">
                            {SITE.founderHindi}
                          </p>

                          <a
                            href={`tel:${SITE.phone}`}
                            className="mt-3 inline-flex items-center text-sm font-medium text-[#4A453D] transition-colors hover:text-[#A8823C]"
                          >
                            {SITE.phone}
                            <span className="ml-1.5 transition-transform group-hover:translate-x-0.5">
                              →
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="group rounded-2xl border border-[#1C1A17]/[0.06] bg-white/70 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF6A]/30 sm:p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D4AF6A]/25 bg-[#A8823C]/[0.06] text-[#A8823C]">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                            />
                            <circle cx="12" cy="10" r="2.5" />
                          </svg>
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A8823C]">
                            {language === "hi" ? "पता" : "Address"}
                          </p>

                          <p className="mt-2 text-sm leading-6 text-[#4A453D] sm:text-base">
                            {language === "hi"
                              ? `पोस्ट ${SITE.village}, तहसील ${SITE.tehsil}, जिला ${SITE.district}, ${SITE.state} — ${SITE.pincode}`
                              : `Post ${SITE.village}, Tehsil ${SITE.tehsil}, District ${SITE.district}, ${SITE.state} — ${SITE.pincode}`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          {/* Story */}
          <div className="mt-14 grid items-center gap-10 sm:mt-20 lg:mt-32 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[24px] border border-[#1C1A17]/[0.06] bg-white p-2 shadow-[0_30px_80px_rgba(28,26,23,0.14)] sm:rounded-[34px] sm:p-3">
                {isLoading ? (
                  <Skeleton.Image
                    active
                    className="!h-[280px] !w-full sm:!h-[450px] lg:!h-[650px]"
                  />
                ) : (
                  <motion.img
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6 }}
                    src={heroImageSrc}
                    loading="lazy"
                    onError={() => setImageFailed(true)}
                    alt={`Original Narmadeshwar Shivling handcrafted from sacred Narmada River stones by ${SITE.name}, ${SITE.village}, ${SITE.tehsil}, ${SITE.district}, ${SITE.state}`}
                    className="h-[280px] w-full rounded-[18px] object-cover sm:h-[450px] sm:rounded-[26px] lg:h-[650px]"
                  />
                )}
              </div>

              <div className="absolute left-3 top-3 rounded-2xl border border-white/50 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:left-6 sm:top-6 sm:px-6 sm:py-4">
                <h3 className="text-2xl font-bold text-[#A8823C] sm:text-3xl">
                  4
                </h3>
                <p className="mt-1 text-xs font-medium text-[#6B6459] sm:text-sm">
                  {language === "hi" ? "पीढ़ियां" : "Generations"}
                </p>
              </div>

              <div className="mt-8 rounded-3xl border border-[#1C1A17]/[0.06] bg-[#FBF7EF] p-5 shadow-sm sm:mt-10 sm:p-6">
                <span className="inline-flex rounded-full border border-[#D4AF6A]/25 bg-[#A8823C]/[0.06] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#A8823C]">
                  {t.heritageHighlightBadge}
                </span>

                <h3 className="mt-4 text-xl font-bold leading-snug text-[#1C1A17] sm:text-2xl">
                  {t.heritageHighlightTitleLine1}
                  <span className="block text-[#A8823C]">
                    {t.heritageHighlightTitleLine2}
                  </span>
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#6B6459] sm:text-base sm:leading-8">
                  {t.heritageHighlightDescription}
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                  {t.heritageHighlightBadges.map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-1.5 rounded-full border border-emerald-700/15 bg-emerald-50/60 px-3.5 py-1.5 text-xs font-medium text-emerald-700 sm:px-4 sm:py-2 sm:text-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link to="/products" className="group w-full sm:w-auto">
                    <Button
                      size="large"
                      //type="primary"
                      className="!flex !h-13 !w-full !items-center !justify-center !rounded-full !border-none !bg-[#1C1A17] !px-6 !text-sm !font-medium !text-[#F2E3C8] !shadow-none transition-all duration-200 hover:!-translate-y-0.5 hover:!bg-[#2A2620] sm:!h-14 sm:!w-auto sm:!text-base"
                    >
                      <span className="flex items-center gap-2">
                        {t.heritageHighlightCta}
                        <span className="text-[#D4AF6A] transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </Button>
                  </Link>

                  <p className="text-xs text-[#8A8377] sm:text-sm">
                    {t.heritageHighlightNote}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF6A]/25 bg-[#A8823C]/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#A8823C] sm:px-5 sm:tracking-[0.35em]">
                {t.storyBadge}
              </span>

              <Title
                level={2}
                className="mt-5 !mb-6 !text-2xl sm:mt-6 sm:!mb-8 sm:!text-3xl md:!text-4xl lg:!text-5xl"
              >
                {t.storyTitleLine1}
                <span className="block text-[#A8823C]">
                  {t.storyTitleLine2}
                </span>
              </Title>

              <Paragraph className="text-base leading-7 text-[#6B6459] sm:text-lg sm:leading-10">
                {t.storyParagraph1}
              </Paragraph>

              <Paragraph className="mt-5 text-base leading-7 text-[#6B6459] sm:mt-6 sm:text-lg sm:leading-10">
                {t.storyParagraph2}
              </Paragraph>

              <Paragraph className="mt-5 text-base leading-7 text-[#6B6459] sm:mt-6 sm:text-lg sm:leading-10">
                {t.storyParagraph3}
              </Paragraph>
            </motion.div>
          </div>

          {/* Mission Section */}
          <section className="relative mt-20 overflow-hidden sm:mt-32">
            <div className="absolute inset-0 -z-10 rounded-[40px] bg-[#F7F2E7]" />

            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF6A]/25 bg-[#A8823C]/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#A8823C] sm:px-5 sm:tracking-[0.35em]">
                {t.missionBadge}
              </span>

              <Title
                level={2}
                className="!mt-5 !mb-4 !text-3xl sm:!mt-6 sm:!text-4xl md:!text-5xl"
              >
                {t.missionTitleLine1}
                <span className="block text-[#A8823C]">
                  {t.missionTitleLine2}
                </span>
              </Title>

              <Paragraph className="text-base leading-8 text-[#6B6459] sm:text-lg sm:leading-9">
                {t.missionDescription}
              </Paragraph>
            </div>

            <Row gutter={[24, 24]} className="mb-10 mt-10 sm:mt-16 px-4 sm:px-0">
              {t.missionCards.map((item, i) => {
                const Icon = MISSION_ICONS[i];

                return (
                  <Col xs={24} md={8} key={item.title}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      <Card className="group relative h-full overflow-hidden rounded-[24px] border border-[#1C1A17]/[0.06] bg-white p-5 shadow-[0_4px_20px_rgba(28,26,23,0.04)] transition-all duration-300 hover:border-[#D4AF6A]/40 hover:shadow-[0_20px_50px_rgba(28,26,23,0.1)] sm:rounded-[28px] sm:p-7">
                        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF6A]/25 bg-[#A8823C]/[0.08] text-2xl text-[#A8823C] transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16 sm:text-3xl">
                          <Icon aria-hidden="true" />
                        </div>

                        <span className="relative z-10 mt-5 inline-flex rounded-full bg-[#1C1A17]/[0.04] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#A8823C] sm:mt-6 sm:tracking-[0.25em]">
                          {t.missionCardBadge}
                        </span>

                        <Title
                          level={3}
                          className="relative z-10 !mb-3 !mt-4 !text-xl !font-bold !text-[#1C1A17] sm:!mb-4 sm:!mt-5 sm:!text-2xl"
                        >
                          {item.title}
                        </Title>

                        <div className="relative z-10 mb-4 h-px w-12 bg-[#D4AF6A]/40 transition-all duration-300 group-hover:w-20 sm:mb-5" />

                        <Paragraph className="relative z-10 text-sm leading-7 text-[#6B6459] sm:text-base sm:leading-8">
                          {item.desc}
                        </Paragraph>

                        <div className="relative z-10 mt-6 flex items-center gap-2 text-sm font-medium text-[#A8823C] sm:mt-8">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#A8823C]" />
                          {t.missionCardFooter}
                        </div>
                      </Card>
                    </motion.div>
                  </Col>
                );
              })}
            </Row>
          </section>

          {/* Why Choose Us */}
          <section className="mt-20 sm:mt-32">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF6A]/25 bg-[#A8823C]/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#A8823C] sm:px-5 sm:tracking-[0.35em]">
                {t.whyBadge}
              </span>

              <Title
                level={2}
                className="!mt-5 !mb-4 !text-3xl sm:!mt-6 sm:!mb-5 sm:!text-4xl md:!text-5xl"
              >
                {t.whyTitleLine1}
                <span className="block text-[#A8823C]">
                  {t.whyTitleLine2}
                </span>
              </Title>

              <Paragraph className="text-base leading-8 text-[#6B6459] sm:text-lg sm:leading-9">
                {t.whyDescription}
              </Paragraph>
            </div>

            <Row gutter={[24, 24]} className="mt-10 sm:mt-16">
              {t.whyFeatures.map((item, i) => {
                const Icon = WHY_ICONS[i];

                return (
                  <Col xs={24} sm={12} lg={8} key={item.title}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      <Card className="group relative h-full overflow-hidden rounded-[22px] border border-[#1C1A17]/[0.06] bg-white p-0 shadow-[0_4px_20px_rgba(28,26,23,0.04)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(28,26,23,0.1)] sm:rounded-[28px]">
                        <div className="absolute left-0 top-0 h-full w-1 rounded-l-[22px] bg-[#D4AF6A]/50 sm:rounded-l-[28px]" />

                        <div className="relative p-6 sm:p-8">
                          <div className="flex items-center justify-between">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF6A]/25 bg-[#A8823C]/[0.08] text-xl text-[#A8823C] transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:text-2xl">
                              <Icon aria-hidden="true" />
                            </div>
                            <div className="text-2xl text-[#1C1A17]/15 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#D4AF6A] sm:text-3xl">
                              →
                            </div>
                          </div>

                          <Title
                            level={4}
                            className="!mb-3 !mt-6 !text-xl !font-bold !text-[#1C1A17] sm:!mt-8 sm:!text-2xl"
                          >
                            {item.title}
                          </Title>

                          <div className="mb-4 h-px w-10 bg-[#D4AF6A]/40 transition-all duration-300 group-hover:w-20 sm:mb-5" />

                          <Paragraph className="text-sm leading-7 text-[#6B6459] sm:text-base sm:leading-8">
                            {item.desc}
                          </Paragraph>

                          <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#A8823C] sm:mt-8">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#A8823C]" />
                            {t.whyFeatureFooter}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </Col>
                );
              })}
            </Row>
          </section>

          {/* Statistics — the one deliberate dark section for contrast */}
          <section className="relative mt-20 overflow-hidden rounded-[4px] bg-[#15130F] px-5 py-10 text-white sm:mt-32 sm:rounded-[8px] sm:px-12 sm:py-14 md:px-12">
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#D4AF6A]/[0.08] blur-[120px]" />
            <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#D4AF6A]/[0.06] blur-[120px]" />

            <div className="relative z-10">
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-flex rounded-full border border-[#D4AF6A]/25 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF6A] backdrop-blur sm:px-5 sm:tracking-[0.35em]">
                  {t.statsBadge}
                </span>

                <Title
                  level={2}
                  className="!mt-5 !mb-4 !text-3xl !font-bold !text-white sm:!mt-6 sm:!text-4xl md:!text-5xl"
                >
                  {t.statsTitleLine1}
                  <span className="block text-[#D4AF6A]">
                    {t.statsTitleLine2}
                  </span>
                </Title>

                <Paragraph className="mx-auto max-w-3xl text-base leading-7 text-[#C9C2B4] sm:text-lg sm:leading-8">
                  {t.statsDescription}
                </Paragraph>
              </div>

              <Row gutter={[20, 20]} className="mt-10 sm:mt-14">
                {t.stats.map((item) => (
                  <Col xs={12} md={6} key={item.title}>
                    <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06] sm:rounded-3xl sm:p-6">
                      <h2 className="text-2xl font-extrabold text-[#D4AF6A] sm:text-3xl md:text-4xl">
                        {item.number}
                      </h2>
                      <h3 className="mt-2 text-sm font-semibold text-[#F8F4EA] sm:mt-3 sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-5 text-[#8A8377] sm:mt-2 sm:text-sm sm:leading-6">
                        {item.desc}
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </section>

          {/* CTA */}
          <section className="relative mt-20 overflow-hidden rounded-[4px] border border-[#1C1A17]/[0.06] bg-[#FBF7EF] px-5 py-12 sm:mt-32 sm:rounded-[8px] sm:px-16 sm:py-16 md:px-16">
            <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#D4AF6A]/[0.06] blur-[130px]" />

            <div className="relative z-10 mx-auto max-w-5xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF6A]/25 bg-[#A8823C]/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#A8823C] sm:px-5 sm:tracking-[0.35em]">
                {t.ctaBadge}
              </span>

              <Title
                level={2}
                className="!mt-5 !mb-5 !text-3xl !leading-tight sm:!mt-6 sm:!mb-6 sm:!text-4xl md:!text-6xl"
              >
                {t.ctaTitleLine1}
                <span className="block text-[#A8823C]">
                  {t.ctaTitleLine2}
                </span>
              </Title>

              <Paragraph className="mx-auto max-w-4xl text-base leading-8 text-[#6B6459] sm:text-lg sm:leading-9">
                {t.ctaDescription}
              </Paragraph>

              <div className="mt-6 flex flex-wrap justify-center gap-2.5 sm:gap-4">
                {t.ctaTrustTags.map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1.5 rounded-full border border-emerald-700/15 bg-emerald-50/60 px-4 py-2 text-xs font-medium text-emerald-700 sm:px-5 sm:py-3 sm:text-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row">
                <Link to="/products" className="w-full sm:w-auto">
                  <Button
                   // type="primary"
                    size="large"
                    className="!flex !h-13 !w-full !items-center !justify-center !rounded-full !border-none !bg-[#1C1A17] !px-4 !text-sm !font-medium !text-[#F2E3C8] !shadow-none transition-all duration-200 hover:!-translate-y-0.5 hover:!bg-[#2A2620] sm:!h-14 sm:!w-auto sm:!text-base"
                  >
                    {t.ctaPrimary}
                  </Button>
                </Link>

                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    size="large"
                    className="!flex !h-13 !w-full !items-center !justify-center !rounded-full !border !border-[#1C1A17]/15 !bg-white !px-4 !text-sm !font-medium !text-[#1C1A17] !shadow-none transition-all duration-200 hover:!border-[#A8823C]/50 hover:!text-[#A8823C] sm:!h-14 sm:!w-auto sm:!text-base"
                  >
                    {t.ctaSecondary}
                  </Button>
                </Link>
              </div>

              <p className="mt-6 text-xs leading-6 text-[#8A8377] sm:mt-8 sm:text-sm sm:leading-7">
                {t.ctaFootnote}
              </p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
