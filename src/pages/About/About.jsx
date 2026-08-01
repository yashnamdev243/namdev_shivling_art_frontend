// import { Helmet } from "react-helmet-async";
// import { Typography, Card, Row, Col, Button } from "antd";
// import {
//   SafetyCertificateOutlined,
//   HeartOutlined,
//   StarOutlined,
//   TrophyOutlined,
//   CheckCircleOutlined,
//   CustomerServiceOutlined,
//   BankOutlined,
//   EnvironmentOutlined,
//   CarOutlined,
// } from "@ant-design/icons";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { useRandomProducts } from "../../hooks/useProducts";
// import React from "react";
// import { FILE_BASE_URL } from "../../config/api";

// const { Title, Paragraph } = Typography;

// const features = [
//   {
//     icon: <BankOutlined />,
//     title: "Temple Quality",
//     desc: "Trusted by temples, ashrams, and spiritual institutions across India for authentic Narmadeshwar Shivlings.",
//   },
//   {
//     icon: <EnvironmentOutlined />,
//     title: "Sacred Narmada Stones",
//     desc: "Every Shivling is handcrafted from naturally formed sacred Narmada River Banalinga stones.",
//   },
//   {
//     icon: <SafetyCertificateOutlined />,
//     title: "Vedic Shastra Crafted",
//     desc: "Traditional artisan techniques and Vedic Shastra principles are followed during every stage of craftsmanship.",
//   },
//   {
//     icon: <HeartOutlined />,
//     title: "100+ Years Heritage",
//     desc: "Four generations of artisans preserving the sacred tradition of Narmadeshwar Shivling craftsmanship.",
//   },
//   {
//     icon: <CarOutlined />,
//     title: "Safe Pan India Delivery",
//     desc: "Secure packaging and reliable doorstep delivery across India to protect every sacred Shivling.",
//   },
//   {
//     icon: <TrophyOutlined />,
//     title: "Trusted by Thousands",
//     desc: "Preferred by devotees, temples, spiritual organizations, and collectors across India.",
//   },
// ];
// export default function About() {
//   const { data } = useRandomProducts(24);

//   const products = React.useMemo(
//     () => data?.products ?? data?.data ?? data ?? [],
//     [data],
//   );

//   const images = React.useMemo(() => {
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
//             if (img) {
//               urls.add(`${FILE_BASE_URL}/uploads/${img}`);
//             }
//           });
//         } catch (e) {
//           console.warn("Invalid gallery JSON", e);
//         }
//       }
//     });

//     return [...urls];
//   }, [products]);

//   const randomImage = React.useMemo(() => {
//     if (images.length === 0) return "/about-placeholder.webp";

//     return images[Math.floor(Math.random() * images.length)];
//   }, [images]);
//   return (
//     <>
//       <Helmet>
//         <title>About Us | Namdev Narmadeshwar Shivling Art</title>
//         <meta
//           name="description"
//           content="Learn about Namdev Narmadeshwar Shivling Art, a trusted manufacturer of authentic Narmadeshwar Shivlings from Bakawan, Khargone, Madhya Pradesh. Over 100 years of traditional craftsmanship using sacred Narmada River stones."
//         />

//         <meta
//           name="keywords"
//           content="Narmadeshwar Shivling, Original Narmadeshwar Shivling, Banalinga Shivling, Narmada Shivling, Sacred Narmada Stones, Shivling Manufacturer India, Bakawan Shivling, Khargone Shivling, Lord Shiva"
//         />

//         <link rel="canonical" href="https://yourdomain.com/about" />

//         <meta
//           property="og:title"
//           content="About Namdev Narmadeshwar Shivling Art"
//         />

//         <meta
//           property="og:description"
//           content="100+ years of traditional Narmadeshwar Shivling craftsmanship."
//         />
//         <meta name="twitter:card" content="summary_large_image" />

//         <meta name="twitter:title" content="Namdev Narmadeshwar Shivling Art" />

//         <meta name="twitter:description" content="100+ Years Heritage" />
//         <script type="application/ld+json">
//           {`
// {
//  "@context":"https://schema.org",
//  "@type":"Organization",
//  "name":"Namdev Narmadeshwar Shivling Art",
//  "url":"https://yourdomain.com",
//  "logo":"https://yourdomain.com/logo.png",
//  "description":"Manufacturer of Authentic Narmadeshwar Shivlings.",
//  "address":{
//    "@type":"PostalAddress",
//    "addressLocality":"Bakawan",
//    "addressRegion":"Madhya Pradesh",
//    "addressCountry":"India"
//  }
// }
// `}
//         </script>
//       </Helmet>

//       <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white py-10 px-4 sm:px-6 lg:px-10">
//         {/* Background Blur */}

//         <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-amber-200/30 blur-[120px]" />
//         <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-orange-200/30 blur-[120px]" />

//         <div className="container mx-auto max-w-7xl px-5 py-20">
//           {/* Hero */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mx-auto text-center"
//           >
//             {/* Top Badge */}

//             <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 px-6 py-3 shadow-sm">
//               <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>

//               <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-700">
//                 100+ Years of Sacred Heritage
//               </span>
//             </div>

//             {/* Heading */}

//             <Title
//               className="mt-8 !mb-6 !text-4xl
// sm:!text-5xl
// md:!text-6xl
// lg:!text-7xl !font-extrabold leading-tight"
//             >
//               <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
//                 Namdev Narmadeshwar
//               </span>

//               <br />
//               <span className="text-slate-900">Shivling Art</span>
//             </Title>

//             {/* Sub Heading */}

//             <h2 className="mx-auto max-w-4xl text-xl font-medium leading-9 text-slate-700 md:text-2xl">
//               Trusted Manufacturer of
//               <span className="font-bold text-orange-600">
//                 {" "}
//                 Authentic Narmadeshwar Shivlings
//               </span>{" "}
//               crafted from Sacred Narmada River Stones.
//             </h2>

//             {/* Description */}

//             <Paragraph
//               className="mx-auto mt-8 max-w-5xl text-base
// sm:text-lg
// leading-8
// sm:leading-10 text-gray-600"
//             >
//               <strong>Namdev Narmadeshwar Shivling Art</strong> proudly carries
//               a sacred legacy of
//               <strong> more than 100 years</strong> in the traditional art of
//               manufacturing authentic
//               <strong> Narmadeshwar Shivlings</strong>, also known as
//               <strong> Banalinga Shivlings</strong>. Located in
//               <strong> Bakawan, Khargone, Madhya Pradesh</strong>, near the holy
//               <strong> Narmada River</strong>, our family has preserved
//               generations of spiritual craftsmanship by creating
//               <strong> original Narmada Shivlings</strong>
//               using naturally formed sacred stones.
//             </Paragraph>

//             <Paragraph
//               className="mx-auto mt-6 max-w-5xl text-base
// sm:text-lg
// leading-8
// sm:leading-10 text-gray-600"
//             >
//               Every Shivling is carefully selected, hand-shaped, polished, and
//               finished according to
//               <strong> ancient Vedic Shastra</strong>
//               and traditional methods passed down through generations. Each
//               creation reflects devotion, purity, authenticity, and the divine
//               energy of
//               <strong> Lord Shiva</strong>, making it ideal for
//               <strong> home worship</strong>,
//               <strong> temple installation</strong>,
//               <strong> religious ceremonies</strong>,
//               <strong> spiritual gifting</strong>, and sacred rituals.
//             </Paragraph>

//             <Paragraph
//               className="mx-auto mt-6 max-w-5xl text-base
// sm:text-lg
// leading-8
// sm:leading-10 text-gray-600"
//             >
//               Today,
//               <strong> Namdev Narmadeshwar Shivling Art</strong>
//               is trusted by thousands of devotees, temples, spiritual
//               organizations, and collectors across India. Our commitment to
//               <strong> quality craftsmanship</strong>,
//               <strong> genuine Narmadeshwar Shivlings</strong>, secure delivery,
//               and customer satisfaction has made us one of the most respected
//               names in traditional
//               <strong> Narmadeshwar Shivling manufacturing.</strong>
//             </Paragraph>

//             {/* Trust Badges */}

//             <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
//               {[
//                 "100+ Years Heritage",
//                 "100% Authentic Narmada Stones",
//                 "Handcrafted by Skilled Artisans",
//                 "Vedic Shastra Based",
//                 "Temple Quality Finish",
//                 "Trusted Across India",
//                 "Free Shipping",
//                 "Secure Payments",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="rounded-full border border-green-200 bg-green-50 px-6 py-3 text-sm font-semibold text-green-600 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
//                 >
//                   ✓ {item}
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Story */}

//           <div className="mt-20 lg:mt-32 grid items-center gap-10 lg:gap-20 lg:grid-cols-2">
//             {/* IMAGE */}

//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               {/* Background Glow */}

//               <div className="absolute -left-14 -top-14 h-72 w-72 rounded-full bg-orange-300/30 blur-[120px]" />

//               <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-amber-300/30 blur-[120px]" />

//               {/* Image */}

//               <div className="relative overflow-hidden rounded-[34px] border border-orange-100 bg-white p-3 shadow-[0_30px_80px_rgba(249,115,22,.18)]">
//                 <motion.img
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.6 }}
//                   src={randomImage}
//                   loading="lazy"
//                   alt="Original Narmadeshwar Shivling handcrafted from sacred Narmada River stones by Namdev Narmadeshwar Shivling Art, Bakawan, Khargone, Madhya Pradesh"
//                   className="h-[350px] sm:h-[450px] lg:h-[650px] w-full rounded-[26px] object-cover"
//                 />
//               </div>

//               {/* Floating Cards */}

//               <div className="absolute left-6 top-6 rounded-2xl border border-white/50 bg-white/90 px-6 py-4 shadow-2xl backdrop-blur-xl">
//                 <h3 className="text-3xl font-bold text-orange-600">100+</h3>

//                 <p className="mt-1 text-sm font-medium text-gray-600">
//                   Years Heritage
//                 </p>
//               </div>

//               {/* <div className="absolute bottom-6 right-6 rounded-2xl border border-white/50 bg-white/90 px-6 py-4 shadow-2xl backdrop-blur-xl">
//                 <h3 className="text-xl font-bold text-orange-600">
//                   ✓ 100% Authentic
//                 </h3>

//                 <p className="mt-1 text-sm text-gray-600">
//                   Sacred Narmada River Stones
//                 </p>
//               </div> */}

//               {/* Highlights */}

//               {/* Heritage Highlights */}

//               <div className="mt-10 rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-lg">
//                 <span className="inline-flex rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-orange-700">
//                   Trusted by Thousands of Devotees
//                 </span>

//                 <h3 className="mt-4 text-2xl font-bold leading-snug text-slate-900">
//                   Experience the Divine Craftsmanship of
//                   <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
//                     Namdev Narmadeshwar Shivling Art
//                   </span>
//                 </h3>

//                 <p className="mt-4 text-base leading-8 text-gray-600">
//                   Discover our collection of
//                   <strong> authentic Narmadeshwar Shivlings</strong>,
//                   handcrafted from
//                   <strong> sacred Narmada River stones</strong> using
//                   traditional
//                   <strong> Vedic craftsmanship</strong>. Every Shivling is
//                   created with devotion, carefully inspected, and safely
//                   delivered to bring the divine blessings of{" "}
//                   <strong>Lord Shiva</strong> into your home or temple.
//                 </p>

//                 <div className="mt-6 flex flex-wrap gap-3">
//                   {[
//                     "100+ Years Heritage",
//                     "100% Original",
//                     "Temple Quality",
//                     "Free Delivery",
//                   ].map((item) => (
//                     <span
//                       key={item}
//                       className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-600 shadow-sm"
//                     >
//                       ✓ {item}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="mt-8 flex flex-wrap items-center gap-4">
//                   <Link to="/products">
//                     <Button
//                       size="large"
//                       type="primary"
//                       className="group h-14 rounded-full border-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 w-full
// sm:w-auto px-4 text-base font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//                     >
//                       Explore Authentic Shivlings
//                       <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
//                         →
//                       </span>
//                     </Button>
//                   </Link>

//                   <p className="text-sm text-gray-500">
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
//               <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-orange-700">
//                 Our Story
//               </span>

//               <Title
//                 className="mt-6 !mb-8 !text-3xl
// sm:!text-4xl
// lg:!text-5xl"
//               >
//                 A Legacy of
//                 <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
//                   Faith, Tradition & Craftsmanship
//                 </span>
//               </Title>

//               <Paragraph
//                 className="text-base
// sm:text-lg
// leading-8
// sm:leading-10 text-gray-600"
//               >
//                 For over
//                 <strong> 100 years</strong>,
//                 <strong> Namdev Narmadeshwar Shivling Art</strong>
//                 has preserved one of India's oldest traditions of crafting
//                 <strong> authentic Narmadeshwar Shivlings</strong>. Located in
//                 <strong> Bakawan, Khargone, Madhya Pradesh</strong>, our family
//                 has dedicated generations to transforming naturally formed
//                 <strong> sacred Narmada River stones</strong>
//                 into spiritually powerful
//                 <strong> Narmadeshwar Shivlings</strong>
//                 that embody devotion, purity, and timeless craftsmanship.
//               </Paragraph>

//               <Paragraph
//                 className="mt-6 text-base
// sm:text-lg
// leading-8
// sm:leading-10 text-gray-600"
//               >
//                 Every Shivling is individually selected, hand-shaped, polished,
//                 and finished according to
//                 <strong> ancient Vedic Shastra</strong>
//                 and traditional artisan methods. These sacred creations are
//                 ideal for
//                 <strong> home worship</strong>,
//                 <strong> temple installation</strong>,
//                 <strong> meditation</strong>,<strong> spiritual gifting</strong>
//                 , and religious ceremonies, bringing the divine blessings of
//                 <strong> Lord Shiva</strong>
//                 into every home.
//               </Paragraph>

//               <Paragraph
//                 className="mt-6 text-base
// sm:text-lg
// leading-8
// sm:leading-10 text-gray-600"
//               >
//                 Today, devotees, temples, spiritual organizations, and
//                 collectors from across India trust
//                 <strong> Namdev Narmadeshwar Shivling Art</strong>
//                 for
//                 <strong> original Narmadeshwar Shivlings</strong>, premium
//                 craftsmanship, safe nationwide delivery, and exceptional
//                 customer service. Every Shivling reflects our unwavering
//                 commitment to authenticity, quality, devotion, and the sacred
//                 heritage of the holy
//                 <strong> Narmada River.</strong>
//               </Paragraph>
//             </motion.div>
//           </div>
//           {/* Mission Section */}

//           <section className="relative mt-32 overflow-hidden">
//             {/* Background */}

//             <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-50 via-white to-amber-50 rounded-[40px]" />

//             <div className="mx-auto max-w-3xl text-center">
//               <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-orange-700">
//                 Our Commitment
//               </span>

//               <Title className="!mt-6 !mb-4 !text-4xl md:!text-5xl">
//                 Guided by
//                 <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
//                   Faith, Tradition & Excellence
//                 </span>
//               </Title>

//               <Paragraph className="text-lg leading-9 text-gray-600">
//                 Every <strong>Narmadeshwar Shivling</strong> we create reflects
//                 our century-old commitment to authenticity, devotion, and
//                 traditional craftsmanship. From sacred{" "}
//                 <strong>Narmada River stones</strong> to careful finishing by
//                 skilled artisans, every Shivling carries the divine blessings of{" "}
//                 <strong>Lord Shiva</strong>.
//               </Paragraph>
//             </div>

//             <Row gutter={[24, 24]} className="mt-16 mb-10">
//               {[
//                 {
//                   icon: <BankOutlined />,
//                   title: "Authentic Heritage",
//                   desc: "With over 100 years of family tradition, Namdev Narmadeshwar Shivling Art preserves the sacred legacy of crafting authentic Narmadeshwar Shivlings using traditional artisan techniques.",
//                 },
//                 {
//                   icon: <EnvironmentOutlined />,
//                   title: "Sacred Narmada River Stones",
//                   desc: "Every Shivling is handcrafted from naturally formed Banalinga stones collected from the holy Narmada River, revered for their spiritual significance in Hindu tradition.",
//                 },
//                 {
//                   icon: <SafetyCertificateOutlined />,
//                   title: "Our Promise of Quality",
//                   desc: "We ensure every Original Narmadeshwar Shivling is handcrafted according to Vedic Shastra, quality inspected, securely packaged, and safely delivered across India with complete authenticity.",
//                 },
//               ].map((item) => (
//                 <Col xs={24} md={8} key={item.title}>
//                   <motion.div
//                     whileHover={{ y: -12, scale: 1.02 }}
//                     transition={{ duration: 0.35 }}
//                     className="h-full"
//                   >
//                     <Card
//                       className="
//       group
//       relative
//       h-full
//       overflow-hidden
//       rounded-[34px]
//       border
//       border-orange-100/70
     
//       p-7
//       transition-all
//       duration-500
//       hover:-translate-y-1
//       hover:border-orange-300
//       hover:shadow-[0_30px_80px_rgba(249,115,22,.22)]
//     "
//                     >
//                       {/* Background Glow */}

//                       <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-200/30 blur-3xl transition duration-500 group-hover:bg-orange-300/40" />

//                       {/* Icon */}

//                       <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-[24px] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-4xl text-white shadow-xl transition duration-500 group-hover:rotate-6 group-hover:scale-110 ">
//                         {item.icon}
//                       </div>

//                       {/* Small Badge */}

//                       <span className="relative z-10 mt-6 inline-flex rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-orange-700">
//                         Namdev Heritage
//                       </span>

//                       {/* Title */}

//                       <Title
//                         level={3}
//                         className="relative z-10 !mt-5 !mb-4 !text-2xl !font-bold !text-slate-900"
//                       >
//                         {item.title}
//                       </Title>

//                       {/* Divider */}

//                       <div className="relative z-10 mb-5 h-1 w-16 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-500 group-hover:w-24" />

//                       {/* Description */}

//                       <Paragraph className="relative z-10 text-[16px] leading-8 text-slate-600">
//                         {item.desc}
//                       </Paragraph>

//                       {/* Bottom */}

//                       <div className="relative z-10 mt-8 flex items-center gap-2 text-sm font-medium text-orange-600">
//                         <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
//                         Authentic Since 1920+
//                       </div>
//                     </Card>
//                   </motion.div>
//                 </Col>
//               ))}
//             </Row>
//           </section>
//           <section className="mt-32">
//             <div className="mx-auto max-w-3xl text-center">
//               <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-orange-700">
//                 Why Choose Us
//               </span>

//               <Title className="!mt-6 !mb-5 !text-4xl md:!text-5xl">
//                 Trusted Heritage,
//                 <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
//                   Authentic Craftsmanship
//                 </span>
//               </Title>

//               <Paragraph className="text-lg leading-9 text-gray-600">
//                 Discover why thousands of devotees, temples, and spiritual
//                 organizations trust{" "}
//                 <strong>Namdev Narmadeshwar Shivling Art</strong> for
//                 <strong> Original Narmadeshwar Shivlings</strong> handcrafted
//                 from sacred <strong>Narmada River stones</strong>.
//               </Paragraph>
//             </div>

//             <Row gutter={[24, 24]} className="mt-16">
//               {features.map((item) => (
//                 <Col xs={24} sm={12} lg={8} key={item.title}>
//                   <motion.div
//                     whileHover={{ y: -10 }}
//                     transition={{ duration: 0.35 }}
//                     className="h-full"
//                   >
//                     <Card
//                       className="
//       group
//       relative
//       h-full
//       overflow-hidden
//       rounded-[28px]
//       border-0
//       bg-white
//       p-0
//       shadow-[0_15px_45px_rgba(15,23,42,0.08)]
//       transition-all
//       duration-500
//       hover:shadow-[0_30px_80px_rgba(249,115,22,.18)]
//       "
//                     >
//                       {/* Left Accent */}
//                       <div className="absolute left-0 top-0 h-full w-2 rounded-l-[28px] bg-gradient-to-b from-orange-500 via-amber-500 to-yellow-400" />

//                       {/* Decorative Glow */}
//                       <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-orange-100 blur-3xl opacity-60 transition duration-500 group-hover:opacity-100" />

//                       <div className="relative p-8">
//                         {/* Icon */}

//                         <div className="flex items-center justify-between">
//                           <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-3xl text-white shadow-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 p-2">
//                             {item.icon}
//                           </div>

//                           <div className="text-4xl text-orange-200 transition-all duration-500 group-hover:translate-x-1 group-hover:text-orange-400">
//                             →
//                           </div>
//                         </div>

//                         {/* Title */}

//                         <Title
//                           level={4}
//                           className="!mt-8 !mb-3 !text-2xl !font-bold !text-slate-900"
//                         >
//                           {item.title}
//                         </Title>

//                         {/* Divider */}

//                         <div className="mb-5 h-1 w-14 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-500 group-hover:w-24" />

//                         {/* Description */}

//                         <Paragraph className="text-[16px] leading-8 text-slate-600">
//                           {item.desc}
//                         </Paragraph>

//                         {/* Bottom Badge */}

//                         <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
//                           <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
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

//           <section className="relative mt-32 overflow-hidden rounded-[40px] bg-gradient-to-br from-orange-600 via-amber-500 to-orange-700 px-6 py-14 text-white shadow-[0_30px_80px_rgba(249,115,22,.30)] md:px-12">
//             {/* Background Decoration */}

//             <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />
//             <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-yellow-300/20 blur-[120px]" />

//             <div className="relative z-10">
//               <div className="mx-auto max-w-3xl text-center">
//                 <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-orange-50 backdrop-blur">
//                   Our Legacy in Numbers
//                 </span>

//                 <Title className="!mt-6 !mb-4 !text-4xl md:!text-5xl !font-bold !text-white">
//                   Trusted Heritage,
//                   <span className="block text-yellow-200">
//                     Crafted with Devotion
//                   </span>
//                 </Title>

//                 <Paragraph className="mx-auto max-w-3xl text-lg leading-8 text-orange-50">
//                   For over a century,
//                   <strong className="text-white">
//                     {" "}
//                     Namdev Narmadeshwar Shivling Art
//                   </strong>
//                   has been preserving the sacred tradition of crafting
//                   <strong className="text-white">
//                     {" "}
//                     Original Narmadeshwar Shivlings
//                   </strong>
//                   from naturally formed
//                   <strong className="text-white"> Narmada River stones</strong>
//                   for devotees, temples, and spiritual seekers across India.
//                 </Paragraph>
//               </div>

//               <Row gutter={[24, 24]} className="mt-14">
//                 {[
//                   {
//                     number: "100+",
//                     title: "Years Heritage",
//                     desc: "Generations preserving sacred craftsmanship.",
//                   },
//                   {
//                     number: "10K+",
//                     title: "Happy Devotees",
//                     desc: "Trusted by families and temples.",
//                   },
//                   {
//                     number: "500+",
//                     title: "Handcrafted Shivlings",
//                     desc: "Temple & home worship collections.",
//                   },
//                   {
//                     number: "100%",
//                     title: "Authentic Stones",
//                     desc: "Sacred Narmada River Banalinga.",
//                   },
//                 ].map((item) => (
//                   <Col xs={24} sm={12} md={6} key={item.title}>
//                     <div className="h-full rounded-3xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/15">
//                       <h2 className="text-4xl font-extrabold text-white md:text-5xl">
//                         {item.number}
//                       </h2>

//                       <h3 className="mt-3 text-lg font-semibold">
//                         {item.title}
//                       </h3>

//                       <p className="mt-2 text-sm leading-6 text-orange-100">
//                         {item.desc}
//                       </p>
//                     </div>
//                   </Col>
//                 ))}
//               </Row>
//             </div>
//           </section>
//           {/* CTA */}

//           <section className="relative mt-32 overflow-hidden rounded-[40px] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 px-6 py-16 shadow-xl md:px-16">
//             {/* Background Glow */}

//             <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-orange-200/20 blur-[130px]" />
//             <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-amber-200/30 blur-[130px]" />

//             <div className="relative z-10 mx-auto max-w-5xl text-center">
//               <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-orange-700">
//                 Begin Your Spiritual Journey
//               </span>

//               <Title className="!mt-6 !mb-6 !text-4xl md:!text-6xl !leading-tight">
//                 Bring Home the
//                 <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
//                   Divine Blessings of Lord Shiva
//                 </span>
//               </Title>

//               <Paragraph className="mx-auto max-w-4xl text-lg leading-9 text-gray-600">
//                 Explore our exclusive collection of
//                 <strong> Authentic Narmadeshwar Shivlings</strong>, handcrafted
//                 from
//                 <strong> sacred Narmada River stones</strong>
//                 by skilled artisans with
//                 <strong> over 100 years of family heritage.</strong>
//                 Every
//                 <strong> Original Banalinga Shivling</strong>
//                 is carefully selected, traditionally polished, and crafted
//                 according to
//                 <strong> Vedic Shastra</strong>, making it ideal for
//                 <strong> home worship</strong>,
//                 <strong> temple installation</strong>,
//                 <strong> meditation</strong>,<strong> spiritual gifting</strong>
//                 , and sacred rituals dedicated to
//                 <strong> Lord Shiva.</strong>
//               </Paragraph>

//               {/* Trust Tags */}

//               <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
//                 {[
//                   "100% Original Narmadeshwar Shivling",
//                   "Sacred Narmada River Stones",
//                   "Temple Quality Finish",
//                   "Handcrafted by Skilled Artisans",
//                   "Safe Delivery Across India",
//                   "Secure Payments",
//                 ].map((item) => (
//                   <span
//                     key={item}
//                     className="rounded-full border border-green-200 bg-green-50 px-5 py-3 text-sm font-medium text-green-600 shadow-sm"
//                   >
//                     ✓ {item}
//                   </span>
//                 ))}
//               </div>

//               {/* CTA Buttons */}

//               <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
//                 <Link to="/products">
//                   <Button
//                     type="primary"
//                     size="large"
//                     className="h-14 rounded-full border-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 w-full
// sm:w-auto px-4 text-base font-semibold shadow-xl transition hover:scale-105 hover:shadow-2xl"
//                   >
//                     Explore Authentic Shivlings →
//                   </Button>
//                 </Link>

//                 <Link to="/contact">
//                   <Button
//                     size="large"
//                     className="h-14 rounded-full border border-orange-300 bg-white w-full
// sm:w-auto px-4 text-base font-semibold text-orange-600 shadow-md transition hover:border-orange-500 hover:text-orange-700"
//                   >
//                     Contact Our Experts
//                   </Button>
//                 </Link>
//               </div>

//               <p className="mt-8 text-sm leading-7 text-gray-500">
//                 Trusted by thousands of devotees, temples, and spiritual
//                 organizations across India for
//                 <strong> authentic Narmadeshwar Shivlings</strong>, premium
//                 craftsmanship, and secure doorstep delivery.
//               </p>
//             </div>
//           </section>
//         </div>
//       </section>
//     </>
//   );
// }





// import { Helmet } from "react-helmet-async";
// import { Typography, Card, Row, Col, Button, Skeleton } from "antd";
// import {
//   SafetyCertificateOutlined,
//   HeartOutlined,
//   TrophyOutlined,
//   BankOutlined,
//   EnvironmentOutlined,
//   CarOutlined,
// } from "@ant-design/icons";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { useMemo, useState } from "react";
// import { useRandomProducts } from "../../hooks/useProducts";
// import { FILE_BASE_URL } from "../../config/api";

// const { Title, Paragraph } = Typography;

// // Canonical / OG URLs should follow the environment, not be hardcoded, so
// // staging and production builds don't accidentally cross-link to each other.
// const SITE_URL = import.meta.env.VITE_SITE_URL || "https://yourdomain.com";
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
//     title: "100+ Years Heritage",
//     desc: "Four generations of artisans preserving the sacred tradition of Narmadeshwar Shivling craftsmanship.",
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
//     desc: "With over 100 years of family tradition, Namdev Narmadeshwar Shivling Art preserves the sacred legacy of crafting authentic Narmadeshwar Shivlings using traditional artisan techniques.",
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
//   { number: "100+", title: "Years Heritage", desc: "Generations preserving sacred craftsmanship." },
//   { number: "10K+", title: "Happy Devotees", desc: "Trusted by families and temples." },
//   { number: "500+", title: "Handcrafted Shivlings", desc: "Temple & home worship collections." },
//   { number: "100%", title: "Authentic Stones", desc: "Sacred Narmada River Banalinga." },
// ];

// const heroTrustBadges = [
//   "100+ Years Heritage",
//   "100% Authentic Narmada Stones",
//   "Handcrafted by Skilled Artisans",
//   "Vedic Shastra Based",
//   "Temple Quality Finish",
//   "Trusted Across India",
//   "Free Shipping",
//   "Secure Payments",
// ];

// const highlightBadges = ["100+ Years Heritage", "100% Original", "Temple Quality", "Free Delivery"];

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

//   return (
//     <>
//       <Helmet>
//         <title>About Us | Namdev Narmadeshwar Shivling Art</title>
//         <meta
//           name="description"
//           content="Learn about Namdev Narmadeshwar Shivling Art, a trusted manufacturer of authentic Narmadeshwar Shivlings from Bakawan, Khargone, Madhya Pradesh. Over 100 years of traditional craftsmanship using sacred Narmada River stones."
//         />
//         <meta
//           name="keywords"
//           content="Narmadeshwar Shivling, Original Narmadeshwar Shivling, Banalinga Shivling, Narmada Shivling, Sacred Narmada Stones, Shivling Manufacturer India, Bakawan Shivling, Khargone Shivling, Lord Shiva"
//         />

//         <link rel="canonical" href={`${SITE_URL}/about`} />

//         <meta property="og:title" content="About Namdev Narmadeshwar Shivling Art" />
//         <meta property="og:description" content="100+ years of traditional Narmadeshwar Shivling craftsmanship." />
//         <meta property="og:url" content={`${SITE_URL}/about`} />
//         <meta property="og:type" content="website" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Namdev Narmadeshwar Shivling Art" />
//         <meta name="twitter:description" content="100+ Years Heritage" />

//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Organization",
//             name: "Namdev Narmadeshwar Shivling Art",
//             url: SITE_URL,
//             logo: `${SITE_URL}/logo.png`,
//             description: "Manufacturer of Authentic Narmadeshwar Shivlings.",
//             address: {
//               "@type": "PostalAddress",
//               addressLocality: "Bakawan",
//               addressRegion: "Madhya Pradesh",
//               addressCountry: "India",
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
//                 100+ Years of Sacred Heritage
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
//               sacred legacy of <strong>more than 100 years</strong> in the
//               traditional art of manufacturing authentic{" "}
//               <strong>Narmadeshwar Shivlings</strong>, also known as{" "}
//               <strong>Banalinga Shivlings</strong>. Located in{" "}
//               <strong>Bakawan, Khargone, Madhya Pradesh</strong>, near the holy{" "}
//               <strong>Narmada River</strong>, our family has preserved
//               generations of spiritual craftsmanship by creating{" "}
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
//                     alt="Original Narmadeshwar Shivling handcrafted from sacred Narmada River stones by Namdev Narmadeshwar Shivling Art, Bakawan, Khargone, Madhya Pradesh"
//                     className="h-[280px] w-full rounded-[18px] object-cover sm:h-[450px] sm:rounded-[26px] lg:h-[650px]"
//                   />
//                 )}
//               </div>

//               {/* Floating Card */}
//               <div className="absolute left-3 top-3 rounded-2xl border border-white/50 bg-white/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:left-6 sm:top-6 sm:px-6 sm:py-4">
//                 <h3 className="text-2xl font-bold text-orange-600 sm:text-3xl">100+</h3>
//                 <p className="mt-1 text-xs font-medium text-gray-600 sm:text-sm">Years Heritage</p>
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
//                 For over <strong>100 years</strong>,{" "}
//                 <strong>Namdev Narmadeshwar Shivling Art</strong> has preserved
//                 one of India's oldest traditions of crafting{" "}
//                 <strong>authentic Narmadeshwar Shivlings</strong>. Located in{" "}
//                 <strong>Bakawan, Khargone, Madhya Pradesh</strong>, our family
//                 has dedicated generations to transforming naturally formed{" "}
//                 <strong>sacred Narmada River stones</strong> into spiritually
//                 powerful <strong>Narmadeshwar Shivlings</strong> that embody
//                 devotion, purity, and timeless craftsmanship.
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
//                 our century-old commitment to authenticity, devotion, and
//                 traditional craftsmanship. From sacred{" "}
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
//                         Authentic Since 1920+
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
//                   Our Legacy in Numbers
//                 </span>

//                 <Title level={2} className="!mt-5 !mb-4 !text-3xl !font-bold !text-white sm:!mt-6 sm:!text-4xl md:!text-5xl">
//                   Trusted Heritage,
//                   <span className="block text-yellow-200">Crafted with Devotion</span>
//                 </Title>

//                 <Paragraph className="mx-auto max-w-3xl text-base leading-7 text-orange-50 sm:text-lg sm:leading-8">
//                   For over a century,
//                   <strong className="text-white"> Namdev Narmadeshwar Shivling Art</strong> has
//                   been preserving the sacred tradition of crafting
//                   <strong className="text-white"> Original Narmadeshwar Shivlings</strong> from
//                   naturally formed <strong className="text-white">Narmada River stones</strong> for
//                   devotees, temples, and spiritual seekers across India.
//                 </Paragraph>
//               </div>

//               <Row gutter={[20, 20]} className="mt-10 sm:mt-14">
//                 {stats.map((item) => (
//                   <Col xs={12} md={6} key={item.title}>
//                     <div className="h-full rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/15 sm:rounded-3xl sm:p-6">
//                       <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
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
//                 with <strong>over 100 years of family heritage.</strong> Every{" "}
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




import { Helmet } from "react-helmet-async";
import { Typography, Card, Row, Col, Button, Skeleton, Segmented } from "antd";
import {
  SafetyCertificateOutlined,
  HeartOutlined,
  TrophyOutlined,
  BankOutlined,
  EnvironmentOutlined,
  CarOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { useRandomProducts } from "../../hooks/useProducts";
import { FILE_BASE_URL } from "../../config/api";
import { SITE, HERITAGE_STORY } from "../../config/constants";

const { Title, Paragraph } = Typography;

const SITE_URL = SITE.url;
const PLACEHOLDER_IMAGE = "/about-placeholder.webp";

const features = [
  {
    icon: <BankOutlined aria-hidden="true" />,
    title: "Temple Quality",
    desc: "Trusted by temples, ashrams, and spiritual institutions across India for authentic Narmadeshwar Shivlings.",
  },
  {
    icon: <EnvironmentOutlined aria-hidden="true" />,
    title: "Sacred Narmada Stones",
    desc: "Every Shivling is handcrafted from naturally formed sacred Narmada River Banalinga stones.",
  },
  {
    icon: <SafetyCertificateOutlined aria-hidden="true" />,
    title: "Vedic Shastra Crafted",
    desc: "Traditional artisan techniques and Vedic Shastra principles are followed during every stage of craftsmanship.",
  },
  {
    icon: <HeartOutlined aria-hidden="true" />,
    title: "Generations of Heritage",
    desc: "Four generations of the Namdev family preserving the sacred tradition of Narmadeshwar Shivling craftsmanship.",
  },
  {
    icon: <CarOutlined aria-hidden="true" />,
    title: "Safe Pan India Delivery",
    desc: "Secure packaging and reliable doorstep delivery across India to protect every sacred Shivling.",
  },
  {
    icon: <TrophyOutlined aria-hidden="true" />,
    title: "Trusted by Thousands",
    desc: "Preferred by devotees, temples, spiritual organizations, and collectors across India.",
  },
];

const missionCards = [
  {
    icon: <BankOutlined aria-hidden="true" />,
    title: "Authentic Heritage",
    desc: "Carried forward from Shri Mangilal Namdev through Shri Deepak Namdev and Shri Shivnarayan Namdev, Namdev Narmadeshwar Shivling Art preserves a sacred family legacy of crafting authentic Narmadeshwar Shivlings using traditional artisan techniques.",
  },
  {
    icon: <EnvironmentOutlined aria-hidden="true" />,
    title: "Sacred Narmada River Stones",
    desc: "Every Shivling is handcrafted from naturally formed Banalinga stones collected from the holy Narmada River, revered for their spiritual significance in Hindu tradition.",
  },
  {
    icon: <SafetyCertificateOutlined aria-hidden="true" />,
    title: "Our Promise of Quality",
    desc: "We ensure every Original Narmadeshwar Shivling is handcrafted according to Vedic Shastra, quality inspected, securely packaged, and safely delivered across India with complete authenticity.",
  },
];

const stats = [
  { number: "1\"–24 ft", title: "Sizes Crafted", desc: "From home worship pieces to temple installations." },
  { number: "4", title: "Generations", desc: "Of the Namdev family in this sacred craft." },
  { number: "100%", title: "Authentic Stones", desc: "Sacred Narmada River Banalinga." },
  { number: "Pan India", title: "& Worldwide", desc: "Trusted delivery across India and abroad." },
];

const heroTrustBadges = [
  "Generations-Old Heritage",
  "100% Authentic Narmada Stones",
  "Handcrafted by Skilled Artisans",
  "Vedic Shastra Based",
  "Temple Quality Finish",
  "Trusted Across India",
  "Sizes: 1 inch to 24 ft",
  "Secure Payments",
];

const highlightBadges = ["Generations of Heritage", "100% Original", "Temple Quality", "Free Delivery"];

const ctaTrustTags = [
  "100% Original Narmadeshwar Shivling",
  "Sacred Narmada River Stones",
  "Temple Quality Finish",
  "Handcrafted by Skilled Artisans",
  "Safe Delivery Across India",
  "Secure Payments",
];

export default function About() {
  const { data, isLoading } = useRandomProducts(24);
  const [imageFailed, setImageFailed] = useState(false);
  const [lang, setLang] = useState("en");

  const products = useMemo(() => data?.products ?? data?.data ?? data ?? [], [data]);

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
  const story = HERITAGE_STORY[lang];

  return (
    <>
      <Helmet>
        <html lang={lang === "hi" ? "hi" : "en"} />
        <title>About Us | Namdev Narmadeshwar Shivling Art — नामदेव नर्मदेश्वर शिवलिंग आर्ट</title>
        <meta
          name="description"
          content="Namdev Narmadeshwar Shivling Art — a generations-old family of Narmadeshwar Shivling artisans from Mardana, Barwah, Khargone, Madhya Pradesh. Authentic Shivlings from 1 inch to 24 feet, handcrafted from sacred Narmada River stone. नामदेव नर्मदेश्वर शिवलिंग आर्ट — मां नर्मदा के पत्थर से निर्मित प्रामाणिक नर्मदेश्वर शिवलिंग।"
        />
        <meta
          name="keywords"
          content="Narmadeshwar Shivling, नर्मदेश्वर शिवलिंग, Original Narmadeshwar Shivling, Banalinga Shivling, Swayambhu Shivling, स्वयंभू शिवलिंग, Narmada Shivling, Shivling Manufacturer Khargone, Mardana Barwah Shivling, Arvind Namdev, Deepak Namdev, Lord Shiva"
        />

        <link rel="canonical" href={`${SITE_URL}/about`} />

        <meta property="og:title" content="About Namdev Narmadeshwar Shivling Art" />
        <meta property="og:description" content="A generations-old family legacy of authentic Narmadeshwar Shivling craftsmanship, since the time of Devi Ahilyabai." />
        <meta property="og:url" content={`${SITE_URL}/about`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Namdev Narmadeshwar Shivling Art" />
        <meta name="twitter:description" content="Generations-old heritage of authentic Narmadeshwar Shivlings" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE.name,
            alternateName: "नामदेव नर्मदेश्वर शिवलिंग आर्ट",
            url: SITE_URL,
            logo: `${SITE_URL}/logo.png`,
            description: SITE.description,
            founder: {
              "@type": "Person",
              name: SITE.founder,
            },
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
      </Helmet>

      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        {/* Background Blur */}
        <div className="pointer-events-none absolute left-0 top-0 h-52 w-52 rounded-full bg-amber-200/30 blur-[90px] sm:h-72 sm:w-72 sm:blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-52 w-52 rounded-full bg-orange-200/30 blur-[90px] sm:h-72 sm:w-72 sm:blur-[120px]" />

        <div className="container mx-auto max-w-7xl px-0 py-10 sm:px-5 sm:py-20">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto text-center"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 px-4 py-2.5 shadow-sm sm:px-6 sm:py-3">
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-orange-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-700 sm:text-sm sm:tracking-[0.25em]">
                A Legacy Since Devi Ahilyabai's Era
              </span>
            </div>

            {/* Heading — the page's single h1 */}
            <Title
              level={1}
              className="mt-6 !mb-5 !text-3xl !font-extrabold leading-tight sm:mt-8 sm:!mb-6 sm:!text-4xl md:!text-5xl lg:!text-6xl xl:!text-7xl"
            >
              <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Namdev Narmadeshwar
              </span>
              <br />
              <span className="text-slate-900">Shivling Art</span>
            </Title>

            {/* Sub Heading */}
            <h2 className="mx-auto max-w-4xl text-lg font-medium leading-8 text-slate-700 sm:text-xl sm:leading-9 md:text-2xl">
              Trusted Manufacturer of
              <span className="font-bold text-orange-600"> Authentic Narmadeshwar Shivlings</span>{" "}
              crafted from Sacred Narmada River Stones.
            </h2>

            {/* Description */}
            <Paragraph className="mx-auto mt-6 max-w-5xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-10">
              <strong>Namdev Narmadeshwar Shivling Art</strong> proudly carries a
              sacred legacy passed down through generations in the
              traditional art of manufacturing authentic{" "}
              <strong>Narmadeshwar Shivlings</strong>, also known as{" "}
              <strong>Banalinga Shivlings</strong>. Based in{" "}
              <strong>Mardana, Barwah, Khargone, Madhya Pradesh</strong>, near
              the holy <strong>Narmada River</strong>, our family has
              preserved generations of spiritual craftsmanship by creating{" "}
              <strong>original Narmada Shivlings</strong> using naturally
              formed sacred stones.
            </Paragraph>

            <Paragraph className="mx-auto mt-5 max-w-5xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-10">
              Every Shivling is carefully selected, hand-shaped, polished, and
              finished according to <strong>ancient Vedic Shastra</strong> and
              traditional methods passed down through generations. Each
              creation reflects devotion, purity, authenticity, and the divine
              energy of <strong>Lord Shiva</strong>, making it ideal for{" "}
              <strong>home worship</strong>, <strong>temple installation</strong>,{" "}
              <strong>religious ceremonies</strong>,{" "}
              <strong>spiritual gifting</strong>, and sacred rituals.
            </Paragraph>

            <Paragraph className="mx-auto mt-5 max-w-5xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-10">
              Today, <strong>Namdev Narmadeshwar Shivling Art</strong> is
              trusted by thousands of devotees, temples, spiritual
              organizations, and collectors across India. Our commitment to{" "}
              <strong>quality craftsmanship</strong>,{" "}
              <strong>genuine Narmadeshwar Shivlings</strong>, secure delivery,
              and customer satisfaction has made us one of the most respected
              names in traditional{" "}
              <strong>Narmadeshwar Shivling manufacturing.</strong>
            </Paragraph>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:mt-14 sm:gap-4">
              {heroTrustBadges.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-semibold text-green-600 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bilingual Heritage Story */}
          <section className="mt-16 sm:mt-24">
            <div className="mx-auto max-w-4xl">
              <div className="flex flex-col items-center gap-4 text-center sm:gap-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-700 sm:px-5 sm:tracking-[0.35em]">
                  <GlobalOutlined aria-hidden="true" />
                  Read in Your Language
                </span>

                <Segmented
                  size="large"
                  value={lang}
                  onChange={setLang}
                  options={[
                    { label: "English", value: "en" },
                    { label: "हिंदी", value: "hi" },
                  ]}
                  className="!bg-orange-50 [&_.ant-segmented-item-selected]:!bg-orange-500 [&_.ant-segmented-item-selected]:!text-white"
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={lang}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                  lang={lang}
                  className="mt-8 rounded-[24px] border border-orange-100 bg-white/70 p-6 shadow-[0_20px_60px_rgba(249,115,22,.1)] backdrop-blur-xl sm:mt-10 sm:rounded-[34px] sm:p-10"
                >
                  <Title level={2} className="!mb-2 !text-2xl sm:!text-3xl">
                    {story.heading}
                  </Title>
                  <p className="text-sm font-medium uppercase tracking-wide text-orange-600 sm:text-base">
                    {story.subheading}
                  </p>

                  <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
                    {story.paragraphs.map((para, i) => (
                      <p
                        key={i}
                        className="text-sm leading-7 text-gray-700 sm:text-base sm:leading-8"
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-3 rounded-2xl border border-orange-100 bg-orange-50/60 p-5 text-sm text-gray-700 sm:mt-10 sm:grid-cols-2 sm:p-6 sm:text-base">
                    <p>
                      <span className="font-semibold text-slate-900">
                        {lang === "hi" ? "संपर्क" : "Contact"}:
                      </span>{" "}
                      {SITE.founder} ({SITE.founderHindi}) — {SITE.phone}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900">
                        {lang === "hi" ? "पता" : "Address"}:
                      </span>{" "}
                      {lang === "hi"
                        ? `पोस्ट ${SITE.village}, तहसील ${SITE.tehsil}, जिला ${SITE.district}, ${SITE.state} — ${SITE.pincode}`
                        : `Post ${SITE.village}, Tehsil ${SITE.tehsil}, District ${SITE.district}, ${SITE.state} — ${SITE.pincode}`}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          {/* Story */}
          <div className="mt-14 grid items-center gap-10 sm:mt-20 lg:mt-32 lg:grid-cols-2 lg:gap-20">
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="pointer-events-none absolute -left-14 -top-14 h-56 w-56 rounded-full bg-orange-300/30 blur-[90px] sm:h-72 sm:w-72 sm:blur-[120px]" />
              <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-amber-300/30 blur-[90px] sm:h-72 sm:w-72 sm:blur-[120px]" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-[24px] border border-orange-100 bg-white p-2 shadow-[0_30px_80px_rgba(249,115,22,.18)] sm:rounded-[34px] sm:p-3">
                {isLoading ? (
                  <Skeleton.Image
                    active
                    className="!h-[280px] !w-full sm:!h-[450px] lg:!h-[650px]"
                  />
                ) : (
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={heroImageSrc}
                    loading="lazy"
                    onError={() => setImageFailed(true)}
                    alt="Original Narmadeshwar Shivling handcrafted from sacred Narmada River stones by Namdev Narmadeshwar Shivling Art, Mardana, Barwah, Khargone, Madhya Pradesh"
                    className="h-[280px] w-full rounded-[18px] object-cover sm:h-[450px] sm:rounded-[26px] lg:h-[650px]"
                  />
                )}
              </div>

              {/* Floating Card */}
              <div className="absolute left-3 top-3 rounded-2xl border border-white/50 bg-white/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:left-6 sm:top-6 sm:px-6 sm:py-4">
                <h3 className="text-2xl font-bold text-orange-600 sm:text-3xl">4</h3>
                <p className="mt-1 text-xs font-medium text-gray-600 sm:text-sm">Generations</p>
              </div>

              {/* Heritage Highlights */}
              <div className="mt-8 rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-5 shadow-lg sm:mt-10 sm:p-6">
                <span className="inline-flex rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-orange-700">
                  Trusted by Thousands of Devotees
                </span>

                <h3 className="mt-4 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
                  Experience the Divine Craftsmanship of
                  <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                    Namdev Narmadeshwar Shivling Art
                  </span>
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                  Discover our collection of <strong>authentic Narmadeshwar Shivlings</strong>,
                  handcrafted from <strong>sacred Narmada River stones</strong> using traditional{" "}
                  <strong>Vedic craftsmanship</strong>. Every Shivling is created with devotion,
                  carefully inspected, and safely delivered to bring the divine blessings of{" "}
                  <strong>Lord Shiva</strong> into your home or temple.
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                  {highlightBadges.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-green-200 bg-green-50 px-3.5 py-1.5 text-xs font-medium text-green-600 shadow-sm sm:px-4 sm:py-2 sm:text-sm"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link to="/products" className="w-full sm:w-auto">
                    <Button
                      size="large"
                      type="primary"
                      className="group h-13 w-full rounded-full border-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-4 text-sm font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:h-14 sm:w-auto sm:text-base"
                    >
                      Explore Authentic Shivlings
                      <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Button>
                  </Link>

                  <p className="text-xs text-gray-500 sm:text-sm">
                    Secure Payments • Safe Packaging • Pan India Delivery
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-700 sm:px-5 sm:tracking-[0.35em]">
                Our Story
              </span>

              <Title level={2} className="mt-5 !mb-6 !text-2xl sm:mt-6 sm:!mb-8 sm:!text-3xl md:!text-4xl lg:!text-5xl">
                A Legacy of
                <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  Faith, Tradition & Craftsmanship
                </span>
              </Title>

              <Paragraph className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-10">
                <strong>Namdev Narmadeshwar Shivling Art</strong> has preserved
                one of India's oldest traditions of crafting{" "}
                <strong>authentic Narmadeshwar Shivlings</strong>. Based in{" "}
                <strong>Mardana, Barwah, Khargone, Madhya Pradesh</strong>, our
                family has dedicated generations to transforming naturally
                formed <strong>sacred Narmada River stones</strong> into
                spiritually powerful <strong>Narmadeshwar Shivlings</strong>{" "}
                that embody devotion, purity, and timeless craftsmanship.
              </Paragraph>

              <Paragraph className="mt-5 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-10">
                Every Shivling is individually selected, hand-shaped, polished,
                and finished according to <strong>ancient Vedic Shastra</strong>{" "}
                and traditional artisan methods. These sacred creations are
                ideal for <strong>home worship</strong>,{" "}
                <strong>temple installation</strong>, <strong>meditation</strong>,{" "}
                <strong>spiritual gifting</strong>, and religious ceremonies,
                bringing the divine blessings of <strong>Lord Shiva</strong>{" "}
                into every home.
              </Paragraph>

              <Paragraph className="mt-5 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-10">
                Today, devotees, temples, spiritual organizations, and
                collectors from across India trust{" "}
                <strong>Namdev Narmadeshwar Shivling Art</strong> for{" "}
                <strong>original Narmadeshwar Shivlings</strong>, premium
                craftsmanship, safe nationwide delivery, and exceptional
                customer service. Every Shivling reflects our unwavering
                commitment to authenticity, quality, devotion, and the sacred
                heritage of the holy <strong>Narmada River.</strong>
              </Paragraph>
            </motion.div>
          </div>

          {/* Mission Section */}
          <section className="relative mt-20 overflow-hidden sm:mt-32">
            <div className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-br from-orange-50 via-white to-amber-50" />

            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-700 sm:px-5 sm:tracking-[0.35em]">
                Our Commitment
              </span>

              <Title level={2} className="!mt-5 !mb-4 !text-3xl sm:!mt-6 sm:!text-4xl md:!text-5xl">
                Guided by
                <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  Faith, Tradition & Excellence
                </span>
              </Title>

              <Paragraph className="text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
                Every <strong>Narmadeshwar Shivling</strong> we create reflects
                our family's long-standing commitment to authenticity,
                devotion, and traditional craftsmanship. From sacred{" "}
                <strong>Narmada River stones</strong> to careful finishing by
                skilled artisans, every Shivling carries the divine blessings
                of <strong>Lord Shiva</strong>.
              </Paragraph>
            </div>

            <Row gutter={[24, 24]} className="mb-10 mt-10 sm:mt-16">
              {missionCards.map((item) => (
                <Col xs={24} md={8} key={item.title}>
                  <motion.div whileHover={{ y: -12, scale: 1.02 }} transition={{ duration: 0.35 }} className="h-full">
                    <Card className="group relative h-full overflow-hidden rounded-[24px] border border-orange-100/70 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_30px_80px_rgba(249,115,22,.22)] sm:rounded-[34px] sm:p-7">
                      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-200/30 blur-3xl transition duration-500 group-hover:bg-orange-300/40" />

                      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-[20px] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-3xl text-white shadow-xl transition duration-500 group-hover:rotate-6 group-hover:scale-110 sm:h-20 sm:w-20 sm:rounded-[24px] sm:text-4xl">
                        {item.icon}
                      </div>

                      <span className="relative z-10 mt-5 inline-flex rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700 sm:mt-6 sm:tracking-[0.25em]">
                        Namdev Heritage
                      </span>

                      <Title level={3} className="relative z-10 !mb-3 !mt-4 !text-xl !font-bold !text-slate-900 sm:!mb-4 sm:!mt-5 sm:!text-2xl">
                        {item.title}
                      </Title>

                      <div className="relative z-10 mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-500 group-hover:w-24 sm:mb-5 sm:w-16" />

                      <Paragraph className="relative z-10 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                        {item.desc}
                      </Paragraph>

                      <div className="relative z-10 mt-6 flex items-center gap-2 text-sm font-medium text-orange-600 sm:mt-8">
                        <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-orange-500" />
                        Authentic Family Craft
                      </div>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </section>

          {/* Why Choose Us */}
          <section className="mt-20 sm:mt-32">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-700 sm:px-5 sm:tracking-[0.35em]">
                Why Choose Us
              </span>

              <Title level={2} className="!mt-5 !mb-4 !text-3xl sm:!mt-6 sm:!mb-5 sm:!text-4xl md:!text-5xl">
                Trusted Heritage,
                <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  Authentic Craftsmanship
                </span>
              </Title>

              <Paragraph className="text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
                Discover why thousands of devotees, temples, and spiritual
                organizations trust <strong>Namdev Narmadeshwar Shivling Art</strong>{" "}
                for <strong>Original Narmadeshwar Shivlings</strong> handcrafted
                from sacred <strong>Narmada River stones</strong>.
              </Paragraph>
            </div>

            <Row gutter={[24, 24]} className="mt-10 sm:mt-16">
              {features.map((item) => (
                <Col xs={24} sm={12} lg={8} key={item.title}>
                  <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.35 }} className="h-full">
                    <Card className="group relative h-full overflow-hidden rounded-[22px] border-0 bg-white p-0 shadow-[0_15px_45px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_30px_80px_rgba(249,115,22,.18)] sm:rounded-[28px]">
                      <div className="absolute left-0 top-0 h-full w-2 rounded-l-[22px] bg-gradient-to-b from-orange-500 via-amber-500 to-yellow-400 sm:rounded-l-[28px]" />
                      <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-orange-100 opacity-60 blur-3xl transition duration-500 group-hover:opacity-100" />

                      <div className="relative p-6 sm:p-8">
                        <div className="flex items-center justify-between">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 p-2 text-2xl text-white shadow-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 sm:h-[4.5rem] sm:w-[4.5rem] sm:text-3xl">
                            {item.icon}
                          </div>
                          <div className="text-3xl text-orange-200 transition-all duration-500 group-hover:translate-x-1 group-hover:text-orange-400 sm:text-4xl">
                            →
                          </div>
                        </div>

                        <Title level={4} className="!mb-3 !mt-6 !text-xl !font-bold !text-slate-900 sm:!mt-8 sm:!text-2xl">
                          {item.title}
                        </Title>

                        <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-500 group-hover:w-24 sm:mb-5 sm:w-14" />

                        <Paragraph className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                          {item.desc}
                        </Paragraph>

                        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-semibold text-orange-700 sm:mt-8 sm:text-sm">
                          <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-orange-500" />
                          Trusted Heritage
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </section>

          {/* Statistics */}
          <section className="relative mt-20 overflow-hidden rounded-[28px] bg-gradient-to-br from-orange-600 via-amber-500 to-orange-700 px-5 py-10 text-white shadow-[0_30px_80px_rgba(249,115,22,.30)] sm:mt-32 sm:rounded-[40px] sm:px-12 sm:py-14 md:px-12">
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />
            <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-yellow-300/20 blur-[120px]" />

            <div className="relative z-10">
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-50 backdrop-blur sm:px-5 sm:tracking-[0.35em]">
                  Our Legacy
                </span>

                <Title level={2} className="!mt-5 !mb-4 !text-3xl !font-bold !text-white sm:!mt-6 sm:!text-4xl md:!text-5xl">
                  Trusted Heritage,
                  <span className="block text-yellow-200">Crafted with Devotion</span>
                </Title>

                <Paragraph className="mx-auto max-w-3xl text-base leading-7 text-orange-50 sm:text-lg sm:leading-8">
                  For generations,
                  <strong className="text-white"> Namdev Narmadeshwar Shivling Art</strong> has
                  been preserving the sacred tradition of crafting
                  <strong className="text-white"> Original Narmadeshwar Shivlings</strong> from
                  naturally formed <strong className="text-white">Narmada River stones</strong> for
                  devotees, temples, and spiritual seekers across India and abroad.
                </Paragraph>
              </div>

              <Row gutter={[20, 20]} className="mt-10 sm:mt-14">
                {stats.map((item) => (
                  <Col xs={12} md={6} key={item.title}>
                    <div className="h-full rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/15 sm:rounded-3xl sm:p-6">
                      <h2 className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
                        {item.number}
                      </h2>
                      <h3 className="mt-2 text-sm font-semibold sm:mt-3 sm:text-lg">{item.title}</h3>
                      <p className="mt-1.5 text-xs leading-5 text-orange-100 sm:mt-2 sm:text-sm sm:leading-6">
                        {item.desc}
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </section>

          {/* CTA */}
          <section className="relative mt-20 overflow-hidden rounded-[28px] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 px-5 py-12 shadow-xl sm:mt-32 sm:rounded-[40px] sm:px-16 sm:py-16 md:px-16">
            <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-orange-200/20 blur-[130px]" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-amber-200/30 blur-[130px]" />

            <div className="relative z-10 mx-auto max-w-5xl text-center">
              <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-700 sm:px-5 sm:tracking-[0.35em]">
                Begin Your Spiritual Journey
              </span>

              <Title level={2} className="!mt-5 !mb-5 !text-3xl !leading-tight sm:!mt-6 sm:!mb-6 sm:!text-4xl md:!text-6xl">
                Bring Home the
                <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  Divine Blessings of Lord Shiva
                </span>
              </Title>

              <Paragraph className="mx-auto max-w-4xl text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
                Explore our exclusive collection of <strong>Authentic Narmadeshwar Shivlings</strong>,
                handcrafted from <strong>sacred Narmada River stones</strong> by skilled artisans
                carrying forward a <strong>generations-old family heritage.</strong> Every{" "}
                <strong>Original Banalinga Shivling</strong> is carefully selected, traditionally
                polished, and crafted according to <strong>Vedic Shastra</strong>, making it ideal
                for <strong>home worship</strong>, <strong>temple installation</strong>,{" "}
                <strong>meditation</strong>, <strong>spiritual gifting</strong>, and sacred rituals
                dedicated to <strong>Lord Shiva.</strong>
              </Paragraph>

              {/* Trust Tags */}
              <div className="mt-6 flex flex-wrap justify-center gap-2.5 text-sm text-gray-500 sm:gap-4">
                {ctaTrustTags.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-medium text-green-600 shadow-sm sm:px-5 sm:py-3 sm:text-sm"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row">
                <Link to="/products" className="w-full sm:w-auto">
                  <Button
                    type="primary"
                    size="large"
                    className="h-13 w-full rounded-full border-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-4 text-sm font-semibold shadow-xl transition hover:scale-105 hover:shadow-2xl sm:h-14 sm:w-auto sm:text-base"
                  >
                    Explore Authentic Shivlings →
                  </Button>
                </Link>

                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    size="large"
                    className="h-13 w-full rounded-full border border-orange-300 bg-white px-4 text-sm font-semibold text-orange-600 shadow-md transition hover:border-orange-500 hover:text-orange-700 sm:h-14 sm:w-auto sm:text-base"
                  >
                    Contact Our Experts
                  </Button>
                </Link>
              </div>

              <p className="mt-6 text-xs leading-6 text-gray-500 sm:mt-8 sm:text-sm sm:leading-7">
                Trusted by thousands of devotees, temples, and spiritual
                organizations across India for{" "}
                <strong>authentic Narmadeshwar Shivlings</strong>, premium
                craftsmanship, and secure doorstep delivery.
              </p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}