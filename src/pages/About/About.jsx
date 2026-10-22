// import { Helmet } from "react-helmet-async";
// import { Typography, Card, Row, Col, Button, Skeleton, Segmented } from "antd";
// import {
//   SafetyCertificateOutlined,
//   HeartOutlined,
//   TrophyOutlined,
//   BankOutlined,
//   EnvironmentOutlined,
//   CarOutlined,
//   GlobalOutlined,
// } from "@ant-design/icons";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import { useMemo, useState } from "react";
// import { useRandomProducts } from "../../hooks/useProducts";
// import { FILE_BASE_URL } from "../../config/api";
// import { SITE, HERITAGE_STORY } from "../../config/constants";

// const { Title, Paragraph } = Typography;

// const SITE_URL = SITE.url;
// const PLACEHOLDER_IMAGE = "/about-placeholder.webp";

// const features = [
//   {
//     icon: <BankOutlined aria-hidden="true" />,
//     title: "Temple Quality",
//     desc: "Trusted by temples, ashrams, and spiritual institutions across India for authentic Narmadeshwar Shivlings.",
//   },
//   {
//     icon: <EnvironmentOutlined aria-hidden="true" />,
//     title: "Sacred Narmada Stones",
//     desc: "Every Shivling is handcrafted from naturally formed sacred Narmada River Banalinga stones.",
//   },
//   {
//     icon: <SafetyCertificateOutlined aria-hidden="true" />,
//     title: "Vedic Shastra Crafted",
//     desc: "Traditional artisan techniques and Vedic Shastra principles are followed during every stage of craftsmanship.",
//   },
//   {
//     icon: <HeartOutlined aria-hidden="true" />,
//     title: "Generations of Heritage",
//     desc: "Four generations of the Namdev family preserving the sacred tradition of Narmadeshwar Shivling craftsmanship.",
//   },
//   {
//     icon: <CarOutlined aria-hidden="true" />,
//     title: "Safe Pan India Delivery",
//     desc: "Secure packaging and reliable doorstep delivery across India to protect every sacred Shivling.",
//   },
//   {
//     icon: <TrophyOutlined aria-hidden="true" />,
//     title: "Trusted by Thousands",
//     desc: "Preferred by devotees, temples, spiritual organizations, and collectors across India.",
//   },
// ];

// const missionCards = [
//   {
//     icon: <BankOutlined aria-hidden="true" />,
//     title: "Authentic Heritage",
//     desc: "Carried forward from Shri Mangilal Namdev through Shri Deepak Namdev and Shri Shivnarayan Namdev, Namdev Narmadeshwar Shivling Art preserves a sacred family legacy of crafting authentic Narmadeshwar Shivlings using traditional artisan techniques.",
//   },
//   {
//     icon: <EnvironmentOutlined aria-hidden="true" />,
//     title: "Sacred Narmada River Stones",
//     desc: "Every Shivling is handcrafted from naturally formed Banalinga stones collected from the holy Narmada River, revered for their spiritual significance in Hindu tradition.",
//   },
//   {
//     icon: <SafetyCertificateOutlined aria-hidden="true" />,
//     title: "Our Promise of Quality",
//     desc: "We ensure every Original Narmadeshwar Shivling is handcrafted according to Vedic Shastra, quality inspected, securely packaged, and safely delivered across India with complete authenticity.",
//   },
// ];

// const stats = [
//   { number: "1\"–24 ft", title: "Sizes Crafted", desc: "From home worship pieces to temple installations." },
//   { number: "4", title: "Generations", desc: "Of the Namdev family in this sacred craft." },
//   { number: "100%", title: "Authentic Stones", desc: "Sacred Narmada River Banalinga." },
//   { number: "Pan India", title: "& Worldwide", desc: "Trusted delivery across India and abroad." },
// ];

// const heroTrustBadges = [
//   "Generations-Old Heritage",
//   "100% Authentic Narmada Stones",
//   "Handcrafted by Skilled Artisans",
//   "Vedic Shastra Based",
//   "Temple Quality Finish",
//   "Trusted Across India",
//   "Sizes: 1 inch to 24 ft",
//   "Secure Payments",
// ];

// const highlightBadges = ["Generations of Heritage", "100% Original", "Temple Quality", "Free Delivery"];

// const ctaTrustTags = [
//   "100% Original Narmadeshwar Shivling",
//   "Sacred Narmada River Stones",
//   "Temple Quality Finish",
//   "Handcrafted by Skilled Artisans",
//   "Safe Delivery Across India",
//   "Secure Payments",
// ];

// export default function About() {
//   const { data, isLoading } = useRandomProducts(24);
//   const [imageFailed, setImageFailed] = useState(false);
//   const [lang, setLang] = useState("en");

//   const products = useMemo(() => data?.products ?? data?.data ?? data ?? [], [data]);

//   const images = useMemo(() => {
//     const urls = new Set();

//     products.forEach((product) => {
//       if (product?.image) {
//         urls.add(`${FILE_BASE_URL}/uploads/${product.image}`);
//       }

//       if (product?.gallery) {
//         try {
//           const gallery = Array.isArray(product.gallery)
//             ? product.gallery
//             : JSON.parse(product.gallery);

//           gallery.forEach((img) => {
//             if (img) urls.add(`${FILE_BASE_URL}/uploads/${img}`);
//           });
//         } catch (e) {
//           console.warn("Invalid gallery JSON", e);
//         }
//       }
//     });

//     return [...urls];
//   }, [products]);

//   const randomImage = useMemo(() => {
//     if (images.length === 0) return PLACEHOLDER_IMAGE;
//     return images[Math.floor(Math.random() * images.length)];
//   }, [images]);

//   const heroImageSrc = imageFailed ? PLACEHOLDER_IMAGE : randomImage;
//   const story = HERITAGE_STORY[lang];

//   return (
//     <>
//       <Helmet>
//         <html lang={lang === "hi" ? "hi" : "en"} />
//         <title>About Us | Namdev Narmadeshwar Shivling Art — नामदेव नर्मदेश्वर शिवलिंग आर्ट</title>
//         <meta
//           name="description"
//           content="Namdev Narmadeshwar Shivling Art — a generations-old family of Narmadeshwar Shivling artisans from Mardana, Barwah, Khargone, Madhya Pradesh. Authentic Shivlings from 1 inch to 24 feet, handcrafted from sacred Narmada River stone. नामदेव नर्मदेश्वर शिवलिंग आर्ट — मां नर्मदा के पत्थर से निर्मित प्रामाणिक नर्मदेश्वर शिवलिंग।"
//         />
//         <meta
//           name="keywords"
//           content="Narmadeshwar Shivling, नर्मदेश्वर शिवलिंग, Original Narmadeshwar Shivling, Banalinga Shivling, Swayambhu Shivling, स्वयंभू शिवलिंग, Narmada Shivling, Shivling Manufacturer Khargone, Mardana Barwah Shivling, Arvind Namdev, Deepak Namdev, Lord Shiva"
//         />

//         <link rel="canonical" href={`${SITE_URL}/about`} />

//         <meta property="og:title" content="About Namdev Narmadeshwar Shivling Art" />
//         <meta property="og:description" content="A generations-old family legacy of authentic Narmadeshwar Shivling craftsmanship, since the time of Devi Ahilyabai." />
//         <meta property="og:url" content={`${SITE_URL}/about`} />
//         <meta property="og:type" content="website" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Namdev Narmadeshwar Shivling Art" />
//         <meta name="twitter:description" content="Generations-old heritage of authentic Narmadeshwar Shivlings" />

//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Organization",
//             name: SITE.name,
//             alternateName: "नामदेव नर्मदेश्वर शिवलिंग आर्ट",
//             url: SITE_URL,
//             logo: `${SITE_URL}/logo.png`,
//             description: SITE.description,
//             founder: {
//               "@type": "Person",
//               name: SITE.founder,
//             },
//             telephone: SITE.phone,
//             email: SITE.email,
//             address: {
//               "@type": "PostalAddress",
//               streetAddress: `Post ${SITE.village}, Tehsil ${SITE.tehsil}`,
//               addressLocality: SITE.district,
//               addressRegion: SITE.state,
//               postalCode: SITE.pincode,
//               addressCountry: "IN",
//             },
//           })}
//         </script>
//       </Helmet>

//       <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
//         {/* Background Blur */}
//         <div className="pointer-events-none absolute left-0 top-0 h-52 w-52 rounded-full bg-amber-200/30 blur-[90px] sm:h-72 sm:w-72 sm:blur-[120px]" />
//         <div className="pointer-events-none absolute bottom-0 right-0 h-52 w-52 rounded-full bg-orange-200/30 blur-[90px] sm:h-72 sm:w-72 sm:blur-[120px]" />

//         <div className="container mx-auto max-w-7xl px-0 py-10 sm:px-5 sm:py-20">
//           {/* Hero */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mx-auto text-center"
//           >
//             {/* Top Badge */}
//             <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 px-4 py-2.5 shadow-sm sm:px-6 sm:py-3">
//               <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-orange-500" />
//               <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-700 sm:text-sm sm:tracking-[0.25em]">
//                 A Legacy Since Devi Ahilyabai's Era
//               </span>
//             </div>

//             {/* Heading — the page's single h1 */}
//             <Title
//               level={1}
//               className="mt-6 !mb-5 !text-3xl !font-extrabold leading-tight sm:mt-8 sm:!mb-6 sm:!text-4xl md:!text-5xl lg:!text-6xl xl:!text-7xl"
//             >
//               <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
//                 Namdev Narmadeshwar
//               </span>
//               <br />
//               <span className="text-slate-900">Shivling Art</span>
//             </Title>

//             {/* Sub Heading */}
//             <h2 className="mx-auto max-w-4xl text-lg font-medium leading-8 text-slate-700 sm:text-xl sm:leading-9 md:text-2xl">
//               Trusted Manufacturer of
//               <span className="font-bold text-orange-600"> Authentic Narmadeshwar Shivlings</span>{" "}
//               crafted from Sacred Narmada River Stones.
//             </h2>

//             {/* Description */}
//             <Paragraph className="mx-auto mt-6 max-w-5xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-10">
//               <strong>Namdev Narmadeshwar Shivling Art</strong> proudly carries a
//               sacred legacy passed down through generations in the
//               traditional art of manufacturing authentic{" "}
//               <strong>Narmadeshwar Shivlings</strong>, also known as{" "}
//               <strong>Banalinga Shivlings</strong>. Based in{" "}
//               <strong>Mardana, Barwah, Khargone, Madhya Pradesh</strong>, near
//               the holy <strong>Narmada River</strong>, our family has
//               preserved generations of spiritual craftsmanship by creating{" "}
//               <strong>original Narmada Shivlings</strong> using naturally
//               formed sacred stones.
//             </Paragraph>

//             <Paragraph className="mx-auto mt-5 max-w-5xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-10">
//               Every Shivling is carefully selected, hand-shaped, polished, and
//               finished according to <strong>ancient Vedic Shastra</strong> and
//               traditional methods passed down through generations. Each
//               creation reflects devotion, purity, authenticity, and the divine
//               energy of <strong>Lord Shiva</strong>, making it ideal for{" "}
//               <strong>home worship</strong>, <strong>temple installation</strong>,{" "}
//               <strong>religious ceremonies</strong>,{" "}
//               <strong>spiritual gifting</strong>, and sacred rituals.
//             </Paragraph>

//             <Paragraph className="mx-auto mt-5 max-w-5xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-10">
//               Today, <strong>Namdev Narmadeshwar Shivling Art</strong> is
//               trusted by thousands of devotees, temples, spiritual
//               organizations, and collectors across India. Our commitment to{" "}
//               <strong>quality craftsmanship</strong>,{" "}
//               <strong>genuine Narmadeshwar Shivlings</strong>, secure delivery,
//               and customer satisfaction has made us one of the most respected
//               names in traditional{" "}
//               <strong>Narmadeshwar Shivling manufacturing.</strong>
//             </Paragraph>

//             {/* Trust Badges */}
//             <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:mt-14 sm:gap-4">
//               {heroTrustBadges.map((item) => (
//                 <div
//                   key={item}
//                   className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-semibold text-green-600 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm"
//                 >
//                   ✓ {item}
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Bilingual Heritage Story */}
//           <section className="mt-16 sm:mt-24">
//             <div className="mx-auto max-w-4xl">
//               <div className="flex flex-col items-center gap-4 text-center sm:gap-5">
//                 <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-700 sm:px-5 sm:tracking-[0.35em]">
//                   <GlobalOutlined aria-hidden="true" />
//                   Read in Your Language
//                 </span>

//                 <Segmented
//                   size="large"
//                   value={lang}
//                   onChange={setLang}
//                   options={[
//                     { label: "English", value: "en" },
//                     { label: "हिंदी", value: "hi" },
//                   ]}
//                   className="!bg-orange-50 [&_.ant-segmented-item-selected]:!bg-orange-500 [&_.ant-segmented-item-selected]:!text-white"
//                 />
//               </div>

//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={lang}
//                   initial={{ opacity: 0, y: 16 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -16 }}
//                   transition={{ duration: 0.35 }}
//                   lang={lang}
//                   className="mt-8 rounded-[24px] border border-orange-100 bg-white/70 p-6 shadow-[0_20px_60px_rgba(249,115,22,.1)] backdrop-blur-xl sm:mt-10 sm:rounded-[34px] sm:p-10"
//                 >
//                   <Title level={2} className="!mb-2 !text-2xl sm:!text-3xl">
//                     {story.heading}
//                   </Title>
//                   <p className="text-sm font-medium uppercase tracking-wide text-orange-600 sm:text-base">
//                     {story.subheading}
//                   </p>

//                   <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
//                     {story.paragraphs.map((para, i) => (
//                       <p
//                         key={i}
//                         className="text-sm leading-7 text-gray-700 sm:text-base sm:leading-8"
//                       >
//                         {para}
//                       </p>
//                     ))}
//                   </div>

//                   <div className="mt-8 grid gap-3 rounded-2xl border border-orange-100 bg-orange-50/60 p-5 text-sm text-gray-700 sm:mt-10 sm:grid-cols-2 sm:p-6 sm:text-base">
//                     <p>
//                       <span className="font-semibold text-slate-900">
//                         {lang === "hi" ? "संपर्क" : "Contact"}:
//                       </span>{" "}
//                       {SITE.founder} ({SITE.founderHindi}) — {SITE.phone}
//                     </p>
//                     <p>
//                       <span className="font-semibold text-slate-900">
//                         {lang === "hi" ? "पता" : "Address"}:
//                       </span>{" "}
//                       {lang === "hi"
//                         ? `पोस्ट ${SITE.village}, तहसील ${SITE.tehsil}, जिला ${SITE.district}, ${SITE.state} — ${SITE.pincode}`
//                         : `Post ${SITE.village}, Tehsil ${SITE.tehsil}, District ${SITE.district}, ${SITE.state} — ${SITE.pincode}`}
//                     </p>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </section>

//           {/* Story */}
//           <div className="mt-14 grid items-center gap-10 sm:mt-20 lg:mt-32 lg:grid-cols-2 lg:gap-20">
//             {/* IMAGE */}
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <div className="pointer-events-none absolute -left-14 -top-14 h-56 w-56 rounded-full bg-orange-300/30 blur-[90px] sm:h-72 sm:w-72 sm:blur-[120px]" />
//               <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-amber-300/30 blur-[90px] sm:h-72 sm:w-72 sm:blur-[120px]" />

//               {/* Image */}
//               <div className="relative overflow-hidden rounded-[24px] border border-orange-100 bg-white p-2 shadow-[0_30px_80px_rgba(249,115,22,.18)] sm:rounded-[34px] sm:p-3">
//                 {isLoading ? (
//                   <Skeleton.Image
//                     active
//                     className="!h-[280px] !w-full sm:!h-[450px] lg:!h-[650px]"
//                   />
//                 ) : (
//                   <motion.img
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.6 }}
//                     src={heroImageSrc}
//                     loading="lazy"
//                     onError={() => setImageFailed(true)}
//                     alt="Original Narmadeshwar Shivling handcrafted from sacred Narmada River stones by Namdev Narmadeshwar Shivling Art, Mardana, Barwah, Khargone, Madhya Pradesh"
//                     className="h-[280px] w-full rounded-[18px] object-cover sm:h-[450px] sm:rounded-[26px] lg:h-[650px]"
//                   />
//                 )}
//               </div>

//               {/* Floating Card */}
//               <div className="absolute left-3 top-3 rounded-2xl border border-white/50 bg-white/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:left-6 sm:top-6 sm:px-6 sm:py-4">
//                 <h3 className="text-2xl font-bold text-orange-600 sm:text-3xl">4</h3>
//                 <p className="mt-1 text-xs font-medium text-gray-600 sm:text-sm">Generations</p>
//               </div>

//               {/* Heritage Highlights */}
//               <div className="mt-8 rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-5 shadow-lg sm:mt-10 sm:p-6">
//                 <span className="inline-flex rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-orange-700">
//                   Trusted by Thousands of Devotees
//                 </span>

//                 <h3 className="mt-4 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
//                   Experience the Divine Craftsmanship of
//                   <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
//                     Namdev Narmadeshwar Shivling Art
//                   </span>
//                 </h3>

//                 <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
//                   Discover our collection of <strong>authentic Narmadeshwar Shivlings</strong>,
//                   handcrafted from <strong>sacred Narmada River stones</strong> using traditional{" "}
//                   <strong>Vedic craftsmanship</strong>. Every Shivling is created with devotion,
//                   carefully inspected, and safely delivered to bring the divine blessings of{" "}
//                   <strong>Lord Shiva</strong> into your home or temple.
//                 </p>

//                 <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
//                   {highlightBadges.map((item) => (
//                     <span
//                       key={item}
//                       className="rounded-full border border-green-200 bg-green-50 px-3.5 py-1.5 text-xs font-medium text-green-600 shadow-sm sm:px-4 sm:py-2 sm:text-sm"
//                     >
//                       ✓ {item}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="mt-8 flex flex-wrap items-center gap-4">
//                   <Link to="/products" className="w-full sm:w-auto">
//                     <Button
//                       size="large"
//                       type="primary"
//                       className="group h-13 w-full rounded-full border-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-4 text-sm font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:h-14 sm:w-auto sm:text-base"
//                     >
//                       Explore Authentic Shivlings
//                       <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
//                         →
//                       </span>
//                     </Button>
//                   </Link>

//                   <p className="text-xs text-gray-500 sm:text-sm">
//                     Secure Payments • Safe Packaging • Pan India Delivery
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* CONTENT */}
//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <span className="rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-700 sm:px-5 sm:tracking-[0.35em]">
//                 Our Story
//               </span>

//               <Title level={2} className="mt-5 !mb-6 !text-2xl sm:mt-6 sm:!mb-8 sm:!text-3xl md:!text-4xl lg:!text-5xl">
//                 A Legacy of
//                 <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
//                   Faith, Tradition & Craftsmanship
//                 </span>
//               </Title>

//               <Paragraph className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-10">
//                 <strong>Namdev Narmadeshwar Shivling Art</strong> has preserved
//                 one of India's oldest traditions of crafting{" "}
//                 <strong>authentic Narmadeshwar Shivlings</strong>. Based in{" "}
//                 <strong>Mardana, Barwah, Khargone, Madhya Pradesh</strong>, our
//                 family has dedicated generations to transforming naturally
//                 formed <strong>sacred Narmada River stones</strong> into
//                 spiritually powerful <strong>Narmadeshwar Shivlings</strong>{" "}
//                 that embody devotion, purity, and timeless craftsmanship.
//               </Paragraph>

//               <Paragraph className="mt-5 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-10">
//                 Every Shivling is individually selected, hand-shaped, polished,
//                 and finished according to <strong>ancient Vedic Shastra</strong>{" "}
//                 and traditional artisan methods. These sacred creations are
//                 ideal for <strong>home worship</strong>,{" "}
//                 <strong>temple installation</strong>, <strong>meditation</strong>,{" "}
//                 <strong>spiritual gifting</strong>, and religious ceremonies,
//                 bringing the divine blessings of <strong>Lord Shiva</strong>{" "}
//                 into every home.
//               </Paragraph>

//               <Paragraph className="mt-5 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-10">
//                 Today, devotees, temples, spiritual organizations, and
//                 collectors from across India trust{" "}
//                 <strong>Namdev Narmadeshwar Shivling Art</strong> for{" "}
//                 <strong>original Narmadeshwar Shivlings</strong>, premium
//                 craftsmanship, safe nationwide delivery, and exceptional
//                 customer service. Every Shivling reflects our unwavering
//                 commitment to authenticity, quality, devotion, and the sacred
//                 heritage of the holy <strong>Narmada River.</strong>
//               </Paragraph>
//             </motion.div>
//           </div>

//           {/* Mission Section */}
//           <section className="relative mt-20 overflow-hidden sm:mt-32">
//             <div className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-br from-orange-50 via-white to-amber-50" />

//             <div className="mx-auto max-w-3xl text-center">
//               <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-700 sm:px-5 sm:tracking-[0.35em]">
//                 Our Commitment
//               </span>

//               <Title level={2} className="!mt-5 !mb-4 !text-3xl sm:!mt-6 sm:!text-4xl md:!text-5xl">
//                 Guided by
//                 <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
//                   Faith, Tradition & Excellence
//                 </span>
//               </Title>

//               <Paragraph className="text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
//                 Every <strong>Narmadeshwar Shivling</strong> we create reflects
//                 our family's long-standing commitment to authenticity,
//                 devotion, and traditional craftsmanship. From sacred{" "}
//                 <strong>Narmada River stones</strong> to careful finishing by
//                 skilled artisans, every Shivling carries the divine blessings
//                 of <strong>Lord Shiva</strong>.
//               </Paragraph>
//             </div>

//             <Row gutter={[24, 24]} className="mb-10 mt-10 sm:mt-16">
//               {missionCards.map((item) => (
//                 <Col xs={24} md={8} key={item.title}>
//                   <motion.div whileHover={{ y: -12, scale: 1.02 }} transition={{ duration: 0.35 }} className="h-full">
//                     <Card className="group relative h-full overflow-hidden rounded-[24px] border border-orange-100/70 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_30px_80px_rgba(249,115,22,.22)] sm:rounded-[34px] sm:p-7">
//                       <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-200/30 blur-3xl transition duration-500 group-hover:bg-orange-300/40" />

//                       <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-[20px] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-3xl text-white shadow-xl transition duration-500 group-hover:rotate-6 group-hover:scale-110 sm:h-20 sm:w-20 sm:rounded-[24px] sm:text-4xl">
//                         {item.icon}
//                       </div>

//                       <span className="relative z-10 mt-5 inline-flex rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700 sm:mt-6 sm:tracking-[0.25em]">
//                         Namdev Heritage
//                       </span>

//                       <Title level={3} className="relative z-10 !mb-3 !mt-4 !text-xl !font-bold !text-slate-900 sm:!mb-4 sm:!mt-5 sm:!text-2xl">
//                         {item.title}
//                       </Title>

//                       <div className="relative z-10 mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-500 group-hover:w-24 sm:mb-5 sm:w-16" />

//                       <Paragraph className="relative z-10 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
//                         {item.desc}
//                       </Paragraph>

//                       <div className="relative z-10 mt-6 flex items-center gap-2 text-sm font-medium text-orange-600 sm:mt-8">
//                         <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-orange-500" />
//                         Authentic Family Craft
//                       </div>
//                     </Card>
//                   </motion.div>
//                 </Col>
//               ))}
//             </Row>
//           </section>

//           {/* Why Choose Us */}
//           <section className="mt-20 sm:mt-32">
//             <div className="mx-auto max-w-3xl text-center">
//               <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-700 sm:px-5 sm:tracking-[0.35em]">
//                 Why Choose Us
//               </span>

//               <Title level={2} className="!mt-5 !mb-4 !text-3xl sm:!mt-6 sm:!mb-5 sm:!text-4xl md:!text-5xl">
//                 Trusted Heritage,
//                 <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
//                   Authentic Craftsmanship
//                 </span>
//               </Title>

//               <Paragraph className="text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
//                 Discover why thousands of devotees, temples, and spiritual
//                 organizations trust <strong>Namdev Narmadeshwar Shivling Art</strong>{" "}
//                 for <strong>Original Narmadeshwar Shivlings</strong> handcrafted
//                 from sacred <strong>Narmada River stones</strong>.
//               </Paragraph>
//             </div>

//             <Row gutter={[24, 24]} className="mt-10 sm:mt-16">
//               {features.map((item) => (
//                 <Col xs={24} sm={12} lg={8} key={item.title}>
//                   <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.35 }} className="h-full">
//                     <Card className="group relative h-full overflow-hidden rounded-[22px] border-0 bg-white p-0 shadow-[0_15px_45px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_30px_80px_rgba(249,115,22,.18)] sm:rounded-[28px]">
//                       <div className="absolute left-0 top-0 h-full w-2 rounded-l-[22px] bg-gradient-to-b from-orange-500 via-amber-500 to-yellow-400 sm:rounded-l-[28px]" />
//                       <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-orange-100 opacity-60 blur-3xl transition duration-500 group-hover:opacity-100" />

//                       <div className="relative p-6 sm:p-8">
//                         <div className="flex items-center justify-between">
//                           <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 p-2 text-2xl text-white shadow-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 sm:h-[4.5rem] sm:w-[4.5rem] sm:text-3xl">
//                             {item.icon}
//                           </div>
//                           <div className="text-3xl text-orange-200 transition-all duration-500 group-hover:translate-x-1 group-hover:text-orange-400 sm:text-4xl">
//                             →
//                           </div>
//                         </div>

//                         <Title level={4} className="!mb-3 !mt-6 !text-xl !font-bold !text-slate-900 sm:!mt-8 sm:!text-2xl">
//                           {item.title}
//                         </Title>

//                         <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-500 group-hover:w-24 sm:mb-5 sm:w-14" />

//                         <Paragraph className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
//                           {item.desc}
//                         </Paragraph>

//                         <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-semibold text-orange-700 sm:mt-8 sm:text-sm">
//                           <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-orange-500" />
//                           Trusted Heritage
//                         </div>
//                       </div>
//                     </Card>
//                   </motion.div>
//                 </Col>
//               ))}
//             </Row>
//           </section>

//           {/* Statistics */}
//           <section className="relative mt-20 overflow-hidden rounded-[28px] bg-gradient-to-br from-orange-600 via-amber-500 to-orange-700 px-5 py-10 text-white shadow-[0_30px_80px_rgba(249,115,22,.30)] sm:mt-32 sm:rounded-[40px] sm:px-12 sm:py-14 md:px-12">
//             <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />
//             <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-yellow-300/20 blur-[120px]" />

//             <div className="relative z-10">
//               <div className="mx-auto max-w-3xl text-center">
//                 <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-50 backdrop-blur sm:px-5 sm:tracking-[0.35em]">
//                   Our Legacy
//                 </span>

//                 <Title level={2} className="!mt-5 !mb-4 !text-3xl !font-bold !text-white sm:!mt-6 sm:!text-4xl md:!text-5xl">
//                   Trusted Heritage,
//                   <span className="block text-yellow-200">Crafted with Devotion</span>
//                 </Title>

//                 <Paragraph className="mx-auto max-w-3xl text-base leading-7 text-orange-50 sm:text-lg sm:leading-8">
//                   For generations,
//                   <strong className="text-white"> Namdev Narmadeshwar Shivling Art</strong> has
//                   been preserving the sacred tradition of crafting
//                   <strong className="text-white"> Original Narmadeshwar Shivlings</strong> from
//                   naturally formed <strong className="text-white">Narmada River stones</strong> for
//                   devotees, temples, and spiritual seekers across India and abroad.
//                 </Paragraph>
//               </div>

//               <Row gutter={[20, 20]} className="mt-10 sm:mt-14">
//                 {stats.map((item) => (
//                   <Col xs={12} md={6} key={item.title}>
//                     <div className="h-full rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/15 sm:rounded-3xl sm:p-6">
//                       <h2 className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
//                         {item.number}
//                       </h2>
//                       <h3 className="mt-2 text-sm font-semibold sm:mt-3 sm:text-lg">{item.title}</h3>
//                       <p className="mt-1.5 text-xs leading-5 text-orange-100 sm:mt-2 sm:text-sm sm:leading-6">
//                         {item.desc}
//                       </p>
//                     </div>
//                   </Col>
//                 ))}
//               </Row>
//             </div>
//           </section>

//           {/* CTA */}
//           <section className="relative mt-20 overflow-hidden rounded-[28px] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 px-5 py-12 shadow-xl sm:mt-32 sm:rounded-[40px] sm:px-16 sm:py-16 md:px-16">
//             <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-orange-200/20 blur-[130px]" />
//             <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-amber-200/30 blur-[130px]" />

//             <div className="relative z-10 mx-auto max-w-5xl text-center">
//               <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-700 sm:px-5 sm:tracking-[0.35em]">
//                 Begin Your Spiritual Journey
//               </span>

//               <Title level={2} className="!mt-5 !mb-5 !text-3xl !leading-tight sm:!mt-6 sm:!mb-6 sm:!text-4xl md:!text-6xl">
//                 Bring Home the
//                 <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
//                   Divine Blessings of Lord Shiva
//                 </span>
//               </Title>

//               <Paragraph className="mx-auto max-w-4xl text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
//                 Explore our exclusive collection of <strong>Authentic Narmadeshwar Shivlings</strong>,
//                 handcrafted from <strong>sacred Narmada River stones</strong> by skilled artisans
//                 carrying forward a <strong>generations-old family heritage.</strong> Every{" "}
//                 <strong>Original Banalinga Shivling</strong> is carefully selected, traditionally
//                 polished, and crafted according to <strong>Vedic Shastra</strong>, making it ideal
//                 for <strong>home worship</strong>, <strong>temple installation</strong>,{" "}
//                 <strong>meditation</strong>, <strong>spiritual gifting</strong>, and sacred rituals
//                 dedicated to <strong>Lord Shiva.</strong>
//               </Paragraph>

//               {/* Trust Tags */}
//               <div className="mt-6 flex flex-wrap justify-center gap-2.5 text-sm text-gray-500 sm:gap-4">
//                 {ctaTrustTags.map((item) => (
//                   <span
//                     key={item}
//                     className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-medium text-green-600 shadow-sm sm:px-5 sm:py-3 sm:text-sm"
//                   >
//                     ✓ {item}
//                   </span>
//                 ))}
//               </div>

//               {/* CTA Buttons */}
//               <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row">
//                 <Link to="/products" className="w-full sm:w-auto">
//                   <Button
//                     type="primary"
//                     size="large"
//                     className="h-13 w-full rounded-full border-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-4 text-sm font-semibold shadow-xl transition hover:scale-105 hover:shadow-2xl sm:h-14 sm:w-auto sm:text-base"
//                   >
//                     Explore Authentic Shivlings →
//                   </Button>
//                 </Link>

//                 <Link to="/contact" className="w-full sm:w-auto">
//                   <Button
//                     size="large"
//                     className="h-13 w-full rounded-full border border-orange-300 bg-white px-4 text-sm font-semibold text-orange-600 shadow-md transition hover:border-orange-500 hover:text-orange-700 sm:h-14 sm:w-auto sm:text-base"
//                   >
//                     Contact Our Experts
//                   </Button>
//                 </Link>
//               </div>

//               <p className="mt-6 text-xs leading-6 text-gray-500 sm:mt-8 sm:text-sm sm:leading-7">
//                 Trusted by thousands of devotees, temples, and spiritual
//                 organizations across India for{" "}
//                 <strong>authentic Narmadeshwar Shivlings</strong>, premium
//                 craftsmanship, and secure doorstep delivery.
//               </p>
//             </div>
//           </section>
//         </div>
//       </section>
//     </>
//   );
// }

// import { Typography, Card, Row, Col, Button, Skeleton } from "antd";
// import {
//   SafetyCertificateOutlined,
//   HeartOutlined,
//   TrophyOutlined,
//   BankOutlined,
//   EnvironmentOutlined,
//   CarOutlined,
// } from "@ant-design/icons";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import { useMemo, useState } from "react";

// import Seo from "../../components/common/Seo";
// import { useRandomProducts } from "../../hooks/useProducts";
// import { FILE_BASE_URL } from "../../config/api";
// import { SITE, HERITAGE_STORY } from "../../config/constants";
// import { ABOUT_PAGE_CONTENT, SEO_CONTENT } from "../../config/content";
// import { useContent, useLanguage } from "../../context/LanguageContext";

// const { Title, Paragraph } = Typography;

// const PLACEHOLDER_IMAGE = "/about-placeholder.webp";

// // Icons are fixed visuals — only the text next to them is bilingual. Order
// // here must match the order of `whyFeatures` / `missionCards` in
// // ABOUT_PAGE_CONTENT.
// const WHY_ICONS = [
//   BankOutlined,
//   EnvironmentOutlined,
//   SafetyCertificateOutlined,
//   HeartOutlined,
//   CarOutlined,
//   TrophyOutlined,
// ];
// const MISSION_ICONS = [
//   BankOutlined,
//   EnvironmentOutlined,
//   SafetyCertificateOutlined,
// ];

// export default function About() {
//   const { data, isLoading } = useRandomProducts(24);
//   const [imageFailed, setImageFailed] = useState(false);

//   // Single source of truth for language — the heritage story block below
//   // now follows whatever the person picked in the site-wide switcher,
//   // instead of the page having its own separate EN/HI toggle.
//   const { language } = useLanguage();
//   const t = useContent(ABOUT_PAGE_CONTENT);
//   const seo = useContent(SEO_CONTENT.about);
//   const story = HERITAGE_STORY[language];

//   const products = useMemo(
//     () => data?.products ?? data?.data ?? data ?? [],
//     [data],
//   );

//   const images = useMemo(() => {
//     const urls = new Set();

//     products.forEach((product) => {
//       if (product?.image) {
//         urls.add(`${FILE_BASE_URL}/uploads/${product.image}`);
//       }

//       if (product?.gallery) {
//         try {
//           const gallery = Array.isArray(product.gallery)
//             ? product.gallery
//             : JSON.parse(product.gallery);

//           gallery.forEach((img) => {
//             if (img) urls.add(`${FILE_BASE_URL}/uploads/${img}`);
//           });
//         } catch (e) {
//           console.warn("Invalid gallery JSON", e);
//         }
//       }
//     });

//     return [...urls];
//   }, [products]);

//   const randomImage = useMemo(() => {
//     if (images.length === 0) return PLACEHOLDER_IMAGE;
//     return images[Math.floor(Math.random() * images.length)];
//   }, [images]);

//   const heroImageSrc = imageFailed ? PLACEHOLDER_IMAGE : randomImage;

//   return (
//     <>
//       <Seo
//         title={seo.title}
//         description={seo.description}
//         keywords={seo.keywords}
//         path="/about"
//       />

//       {/* Structured data stays in English for machine-readability — Google
//           uses this for rich results regardless of the visible page
//           language, so it doesn't need to switch with the UI. */}
//       <script type="application/ld+json">
//         {JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "Organization",
//           name: SITE.name,
//           alternateName: "नामदेव नर्मदेश्वर शिवलिंग आर्ट",
//           url: SITE.url,
//           logo: `${SITE.url}/logo.png`,
//           description: SITE.description,
//           founder: { "@type": "Person", name: SITE.founder },
//           telephone: SITE.phone,
//           email: SITE.email,
//           address: {
//             "@type": "PostalAddress",
//             streetAddress: `Post ${SITE.village}, Tehsil ${SITE.tehsil}`,
//             addressLocality: SITE.district,
//             addressRegion: SITE.state,
//             postalCode: SITE.pincode,
//             addressCountry: "IN",
//           },
//         })}
//       </script>

//       <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
//         {/* Background Blur */}
//         <div className="pointer-events-none absolute left-0 top-0 h-52 w-52 rounded-full bg-amber-200/30 blur-[90px] sm:h-72 sm:w-72 sm:blur-[120px]" />
//         <div className="pointer-events-none absolute bottom-0 right-0 h-52 w-52 rounded-full bg-orange-200/30 blur-[90px] sm:h-72 sm:w-72 sm:blur-[120px]" />

//         <div className="container mx-auto max-w-7xl px-0 py-10 sm:px-5 sm:py-20">
//           {/* Hero */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mx-auto text-center"
//           >
//             <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 px-4 py-2.5 shadow-sm sm:px-6 sm:py-3">
//               <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-orange-500" />
//               <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-700 sm:text-sm sm:tracking-[0.25em]">
//                 {t.heroBadge}
//               </span>
//             </div>

//             <Title
//               level={1}
//               className="mt-6 !mb-5 !text-3xl !font-extrabold leading-tight sm:mt-8 sm:!mb-6 sm:!text-4xl md:!text-5xl lg:!text-6xl xl:!text-7xl"
//             >
//               <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
//                 {t.heroTitleLine1}
//               </span>
//               <br />
//               <span className="text-slate-900">{t.heroTitleLine2}</span>
//             </Title>

//             <h2 className="mx-auto max-w-4xl text-lg font-medium leading-8 text-slate-700 sm:text-xl sm:leading-9 md:text-2xl">
//               {t.heroSubheading}
//             </h2>

//             <Paragraph className="mx-auto mt-6 max-w-5xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-10">
//               {t.heroParagraph1}
//             </Paragraph>

//             <Paragraph className="mx-auto mt-5 max-w-5xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-10">
//               {t.heroParagraph2}
//             </Paragraph>

//             <Paragraph className="mx-auto mt-5 max-w-5xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-10">
//               {t.heroParagraph3}
//             </Paragraph>

//             <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:mt-14 sm:gap-4">
//               {t.trustBadges.map((item) => (
//                 <div
//                   key={item}
//                   className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-semibold text-green-600 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm"
//                 >
//                   ✓ {item}
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Heritage Story — driven entirely by the global language
//               switcher now (no separate per-section toggle). */}
//           <section className="mt-16 sm:mt-24">
//             <div className="mx-auto">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={language}
//                   initial={{ opacity: 0, y: 16 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -16 }}
//                   transition={{ duration: 0.35 }}
//                   className="rounded-[24px] border border-orange-100 bg-orange/70 p-6 shadow-[0_20px_60px_rgba(249,115,22,.1)] backdrop-blur-xl sm:rounded-[34px] sm:p-10"
//                 >
//                   <Title level={2} className="!mb-2 !text-2xl sm:!text-3xl">
//                     {story.heading}
//                   </Title>
//                   <p className="text-sm font-medium uppercase tracking-wide text-orange-600 sm:text-base">
//                     {story.subheading}
//                   </p>

//                   <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
//                     {story.paragraphs.map((para, i) => (
//                       <p
//                         key={i}
//                         className="text-sm leading-7 text-gray-700 sm:text-base sm:leading-8"
//                       >
//                         {para}
//                       </p>
//                     ))}
//                   </div>

//                   <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
//                     {/* Contact */}
//                     <div className="group rounded-2xl border border-orange-100 bg-white/70 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md sm:p-6">
//                       <div className="flex items-start gap-4">
//                         <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-100">
//                           <svg
//                             className="h-5 w-5"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="1.8"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.11 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"
//                             />
//                           </svg>
//                         </div>

//                         <div className="min-w-0">
//                           <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-600">
//                             {language === "hi" ? "संपर्क" : "Contact"}
//                           </p>

//                           <p className="mt-1 text-base font-semibold text-slate-900 sm:text-lg">
//                             {SITE.founder}
//                           </p>

//                           <p className="text-sm text-slate-500">
//                             {SITE.founderHindi}
//                           </p>

//                           <a
//                             href={`tel:${SITE.phone}`}
//                             className="mt-3 inline-flex items-center text-sm font-medium text-slate-700 transition-colors hover:text-orange-600"
//                           >
//                             {SITE.phone}
//                             <span className="ml-1.5 transition-transform group-hover:translate-x-0.5">
//                               →
//                             </span>
//                           </a>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Address */}
//                     <div className="group rounded-2xl border border-orange-100 bg-white/70 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md sm:p-6">
//                       <div className="flex items-start gap-4">
//                         <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-100">
//                           <svg
//                             className="h-5 w-5"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="1.8"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
//                             />
//                             <circle cx="12" cy="10" r="2.5" />
//                           </svg>
//                         </div>

//                         <div className="min-w-0">
//                           <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-600">
//                             {language === "hi" ? "पता" : "Address"}
//                           </p>

//                           <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
//                             {language === "hi"
//                               ? `पोस्ट ${SITE.village}, तहसील ${SITE.tehsil}, जिला ${SITE.district}, ${SITE.state} — ${SITE.pincode}`
//                               : `Post ${SITE.village}, Tehsil ${SITE.tehsil}, District ${SITE.district}, ${SITE.state} — ${SITE.pincode}`}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </section>

//           {/* Story */}
//           <div className="mt-14 grid items-center gap-10 sm:mt-20 lg:mt-32 lg:grid-cols-2 lg:gap-20">
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <div className="pointer-events-none absolute -left-14 -top-14 h-56 w-56 rounded-full bg-orange-300/30 blur-[90px] sm:h-72 sm:w-72 sm:blur-[120px]" />
//               <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-amber-300/30 blur-[90px] sm:h-72 sm:w-72 sm:blur-[120px]" />

//               <div className="relative overflow-hidden rounded-[24px] border border-orange-100 bg-white p-2 shadow-[0_30px_80px_rgba(249,115,22,.18)] sm:rounded-[34px] sm:p-3">
//                 {isLoading ? (
//                   <Skeleton.Image
//                     active
//                     className="!h-[280px] !w-full sm:!h-[450px] lg:!h-[650px]"
//                   />
//                 ) : (
//                   <motion.img
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.6 }}
//                     src={heroImageSrc}
//                     loading="lazy"
//                     onError={() => setImageFailed(true)}
//                     alt={`Original Narmadeshwar Shivling handcrafted from sacred Narmada River stones by ${SITE.name}, ${SITE.village}, ${SITE.tehsil}, ${SITE.district}, ${SITE.state}`}
//                     className="h-[280px] w-full rounded-[18px] object-cover sm:h-[450px] sm:rounded-[26px] lg:h-[650px]"
//                   />
//                 )}
//               </div>

//               <div className="absolute left-3 top-3 rounded-2xl border border-white/50 bg-white/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:left-6 sm:top-6 sm:px-6 sm:py-4">
//                 <h3 className="text-2xl font-bold text-orange-600 sm:text-3xl">
//                   4
//                 </h3>
//                 <p className="mt-1 text-xs font-medium text-gray-600 sm:text-sm">
//                   {language === "hi" ? "पीढ़ियां" : "Generations"}
//                 </p>
//               </div>

//               <div className="mt-8 rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-5 shadow-lg sm:mt-10 sm:p-6">
//                 <span className="inline-flex rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-orange-700">
//                   {t.heritageHighlightBadge}
//                 </span>

//                 <h3 className="mt-4 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
//                   {t.heritageHighlightTitleLine1}
//                   <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
//                     {t.heritageHighlightTitleLine2}
//                   </span>
//                 </h3>

//                 <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
//                   {t.heritageHighlightDescription}
//                 </p>

//                 <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
//                   {t.heritageHighlightBadges.map((item) => (
//                     <span
//                       key={item}
//                       className="rounded-full border border-green-200 bg-green-50 px-3.5 py-1.5 text-xs font-medium text-green-600 shadow-sm sm:px-4 sm:py-2 sm:text-sm"
//                     >
//                       ✓ {item}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="mt-8 flex flex-wrap items-center gap-4">
//                   <Link to="/products" className="w-full sm:w-auto">
//                     <Button
//                       size="large"
//                       type="primary"
//                       className="group h-13 w-full rounded-full border-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-4 text-sm font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:h-14 sm:w-auto sm:text-base"
//                     >
//                       {t.heritageHighlightCta}
//                       <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
//                         →
//                       </span>
//                     </Button>
//                   </Link>

//                   <p className="text-xs text-gray-500 sm:text-sm">
//                     {t.heritageHighlightNote}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <span className="rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-700 sm:px-5 sm:tracking-[0.35em]">
//                 {t.storyBadge}
//               </span>

//               <Title
//                 level={2}
//                 className="mt-5 !mb-6 !text-2xl sm:mt-6 sm:!mb-8 sm:!text-3xl md:!text-4xl lg:!text-5xl"
//               >
//                 {t.storyTitleLine1}
//                 <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
//                   {t.storyTitleLine2}
//                 </span>
//               </Title>

//               <Paragraph className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-10">
//                 {t.storyParagraph1}
//               </Paragraph>

//               <Paragraph className="mt-5 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-10">
//                 {t.storyParagraph2}
//               </Paragraph>

//               <Paragraph className="mt-5 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-10">
//                 {t.storyParagraph3}
//               </Paragraph>
//             </motion.div>
//           </div>

//           {/* Mission Section */}
//           <section className="relative mt-20 overflow-hidden sm:mt-32">
//             <div className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-br from-orange-50 via-white to-amber-50" />

//             <div className="mx-auto max-w-3xl text-center">
//               <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-700 sm:px-5 sm:tracking-[0.35em]">
//                 {t.missionBadge}
//               </span>

//               <Title
//                 level={2}
//                 className="!mt-5 !mb-4 !text-3xl sm:!mt-6 sm:!text-4xl md:!text-5xl"
//               >
//                 {t.missionTitleLine1}
//                 <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
//                   {t.missionTitleLine2}
//                 </span>
//               </Title>

//               <Paragraph className="text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
//                 {t.missionDescription}
//               </Paragraph>
//             </div>

//             <Row gutter={[24, 24]} className="mb-10 mt-10 sm:mt-16">
//               {t.missionCards.map((item, i) => {
//                 const Icon = MISSION_ICONS[i];

//                 return (
//                   <Col xs={24} md={8} key={item.title}>
//                     <motion.div
//                       whileHover={{ y: -12, scale: 1.02 }}
//                       transition={{ duration: 0.35 }}
//                       className="h-full"
//                     >
//                       <Card className="group relative h-full overflow-hidden rounded-[24px] border border-orange-100/70 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_30px_80px_rgba(249,115,22,.22)] sm:rounded-[34px] sm:p-7">
//                         <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-200/30 blur-3xl transition duration-500 group-hover:bg-orange-300/40" />

//                         <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-[20px] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-3xl text-white shadow-xl transition duration-500 group-hover:rotate-6 group-hover:scale-110 sm:h-20 sm:w-20 sm:rounded-[24px] sm:text-4xl">
//                           <Icon aria-hidden="true" />
//                         </div>

//                         <span className="relative z-10 mt-5 inline-flex rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700 sm:mt-6 sm:tracking-[0.25em]">
//                           {t.missionCardBadge}
//                         </span>

//                         <Title
//                           level={3}
//                           className="relative z-10 !mb-3 !mt-4 !text-xl !font-bold !text-slate-900 sm:!mb-4 sm:!mt-5 sm:!text-2xl"
//                         >
//                           {item.title}
//                         </Title>

//                         <div className="relative z-10 mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-500 group-hover:w-24 sm:mb-5 sm:w-16" />

//                         <Paragraph className="relative z-10 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
//                           {item.desc}
//                         </Paragraph>

//                         <div className="relative z-10 mt-6 flex items-center gap-2 text-sm font-medium text-orange-600 sm:mt-8">
//                           <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-orange-500" />
//                           {t.missionCardFooter}
//                         </div>
//                       </Card>
//                     </motion.div>
//                   </Col>
//                 );
//               })}
//             </Row>
//           </section>

//           {/* Why Choose Us */}
//           <section className="mt-20 sm:mt-32">
//             <div className="mx-auto max-w-3xl text-center">
//               <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-700 sm:px-5 sm:tracking-[0.35em]">
//                 {t.whyBadge}
//               </span>

//               <Title
//                 level={2}
//                 className="!mt-5 !mb-4 !text-3xl sm:!mt-6 sm:!mb-5 sm:!text-4xl md:!text-5xl"
//               >
//                 {t.whyTitleLine1}
//                 <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
//                   {t.whyTitleLine2}
//                 </span>
//               </Title>

//               <Paragraph className="text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
//                 {t.whyDescription}
//               </Paragraph>
//             </div>

//             <Row gutter={[24, 24]} className="mt-10 sm:mt-16">
//               {t.whyFeatures.map((item, i) => {
//                 const Icon = WHY_ICONS[i];

//                 return (
//                   <Col xs={24} sm={12} lg={8} key={item.title}>
//                     <motion.div
//                       whileHover={{ y: -10 }}
//                       transition={{ duration: 0.35 }}
//                       className="h-full"
//                     >
//                       <Card className="group relative h-full overflow-hidden rounded-[22px] border-0 bg-white p-0 shadow-[0_15px_45px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_30px_80px_rgba(249,115,22,.18)] sm:rounded-[28px]">
//                         <div className="absolute left-0 top-0 h-full w-2 rounded-l-[22px] bg-gradient-to-b from-orange-500 via-amber-500 to-yellow-400 sm:rounded-l-[28px]" />
//                         <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-orange-100 opacity-60 blur-3xl transition duration-500 group-hover:opacity-100" />

//                         <div className="relative p-6 sm:p-8">
//                           <div className="flex items-center justify-between">
//                             <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 p-2 text-2xl text-white shadow-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 sm:h-[4.5rem] sm:w-[4.5rem] sm:text-3xl">
//                               <Icon aria-hidden="true" />
//                             </div>
//                             <div className="text-3xl text-orange-200 transition-all duration-500 group-hover:translate-x-1 group-hover:text-orange-400 sm:text-4xl">
//                               →
//                             </div>
//                           </div>

//                           <Title
//                             level={4}
//                             className="!mb-3 !mt-6 !text-xl !font-bold !text-slate-900 sm:!mt-8 sm:!text-2xl"
//                           >
//                             {item.title}
//                           </Title>

//                           <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-500 group-hover:w-24 sm:mb-5 sm:w-14" />

//                           <Paragraph className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
//                             {item.desc}
//                           </Paragraph>

//                           <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-semibold text-orange-700 sm:mt-8 sm:text-sm">
//                             <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-orange-500" />
//                             {t.whyFeatureFooter}
//                           </div>
//                         </div>
//                       </Card>
//                     </motion.div>
//                   </Col>
//                 );
//               })}
//             </Row>
//           </section>

//           {/* Statistics */}
//           <section className="relative mt-20 overflow-hidden rounded-[28px] bg-gradient-to-br from-orange-600 via-amber-500 to-orange-700 px-5 py-10 text-white shadow-[0_30px_80px_rgba(249,115,22,.30)] sm:mt-32 sm:rounded-[40px] sm:px-12 sm:py-14 md:px-12">
//             <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />
//             <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-yellow-300/20 blur-[120px]" />

//             <div className="relative z-10">
//               <div className="mx-auto max-w-3xl text-center">
//                 <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-50 backdrop-blur sm:px-5 sm:tracking-[0.35em]">
//                   {t.statsBadge}
//                 </span>

//                 <Title
//                   level={2}
//                   className="!mt-5 !mb-4 !text-3xl !font-bold !text-white sm:!mt-6 sm:!text-4xl md:!text-5xl"
//                 >
//                   {t.statsTitleLine1}
//                   <span className="block text-yellow-200">
//                     {t.statsTitleLine2}
//                   </span>
//                 </Title>

//                 <Paragraph className="mx-auto max-w-3xl text-base leading-7 text-orange-50 sm:text-lg sm:leading-8">
//                   {t.statsDescription}
//                 </Paragraph>
//               </div>

//               <Row gutter={[20, 20]} className="mt-10 sm:mt-14">
//                 {t.stats.map((item) => (
//                   <Col xs={12} md={6} key={item.title}>
//                     <div className="h-full rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/15 sm:rounded-3xl sm:p-6">
//                       <h2 className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
//                         {item.number}
//                       </h2>
//                       <h3 className="mt-2 text-sm font-semibold sm:mt-3 sm:text-lg">
//                         {item.title}
//                       </h3>
//                       <p className="mt-1.5 text-xs leading-5 text-orange-100 sm:mt-2 sm:text-sm sm:leading-6">
//                         {item.desc}
//                       </p>
//                     </div>
//                   </Col>
//                 ))}
//               </Row>
//             </div>
//           </section>

//           {/* CTA */}
//           <section className="relative mt-20 overflow-hidden rounded-[28px] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 px-5 py-12 shadow-xl sm:mt-32 sm:rounded-[40px] sm:px-16 sm:py-16 md:px-16">
//             <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-orange-200/20 blur-[130px]" />
//             <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-amber-200/30 blur-[130px]" />

//             <div className="relative z-10 mx-auto max-w-5xl text-center">
//               <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-700 sm:px-5 sm:tracking-[0.35em]">
//                 {t.ctaBadge}
//               </span>

//               <Title
//                 level={2}
//                 className="!mt-5 !mb-5 !text-3xl !leading-tight sm:!mt-6 sm:!mb-6 sm:!text-4xl md:!text-6xl"
//               >
//                 {t.ctaTitleLine1}
//                 <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
//                   {t.ctaTitleLine2}
//                 </span>
//               </Title>

//               <Paragraph className="mx-auto max-w-4xl text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
//                 {t.ctaDescription}
//               </Paragraph>

//               <div className="mt-6 flex flex-wrap justify-center gap-2.5 text-sm text-gray-500 sm:gap-4">
//                 {t.ctaTrustTags.map((item) => (
//                   <span
//                     key={item}
//                     className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-medium text-green-600 shadow-sm sm:px-5 sm:py-3 sm:text-sm"
//                   >
//                     ✓ {item}
//                   </span>
//                 ))}
//               </div>

//               <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row">
//                 <Link to="/products" className="w-full sm:w-auto">
//                   <Button
//                     type="primary"
//                     size="large"
//                     className="h-13 w-full rounded-full border-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-4 text-sm font-semibold shadow-xl transition hover:scale-105 hover:shadow-2xl sm:h-14 sm:w-auto sm:text-base"
//                   >
//                     {t.ctaPrimary}
//                   </Button>
//                 </Link>

//                 <Link to="/contact" className="w-full sm:w-auto">
//                   <Button
//                     size="large"
//                     className="h-13 w-full rounded-full border border-orange-300 bg-white px-4 text-sm font-semibold text-orange-600 shadow-md transition hover:border-orange-500 hover:text-orange-700 sm:h-14 sm:w-auto sm:text-base"
//                   >
//                     {t.ctaSecondary}
//                   </Button>
//                 </Link>
//               </div>

//               <p className="mt-6 text-xs leading-6 text-gray-500 sm:mt-8 sm:text-sm sm:leading-7">
//                 {t.ctaFootnote}
//               </p>
//             </div>
//           </section>
//         </div>
//       </section>
//     </>
//   );
// }


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

      <section className="relative overflow-hidden bg-gradient-to-b from-[#FBF7EF] via-white to-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
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
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8823C] sm:text-sm sm:tracking-[0.25em]">
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
