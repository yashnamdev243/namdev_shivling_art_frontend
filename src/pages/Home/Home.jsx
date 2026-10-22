

// import { Helmet } from "react-helmet-async";

// import Hero from "../../components/home/Hero";
// import Categories from "../../components/home/Categories";
// import FeaturedProducts from "../../components/home/FeaturedProducts";
// import WhyChooseUs from "../../components/home/WhyChooseUs";
// import AboutSection from "../../components/home/AboutSection";
// import GallerySection from "../../components/home/GallerySection";
// import Testimonials from "../../components/home/Testimonials";
// import ContactCTA from "../../components/home/ContactCTA";
// import Seo from "../../components/common/Seo";
// import { SEO_CONTENT } from "../../config/content";
// import { useContent } from "../../context/LanguageContext";

// const SITE_URL = import.meta.env.VITE_SITE_URL || "https://yourdomain.com";

// export default function Home() {
//   const seo = useContent(SEO_CONTENT.home);
//   return (
//     <>
//       <Helmet>
//         <title>
//           Namdev Narmadeshwar Shivling Art | Authentic Narmadeshwar Shivling
//           Manufacturer
//         </title>
//         <meta
//           name="description"
//           content="Namdev Narmadeshwar Shivling Art crafts authentic Narmadeshwar Shivlings from sacred Narmada River stones in Bakawan, Khargone, Madhya Pradesh. 100+ years of heritage, temple orders, wholesale supply, and worldwide shipping."
//         />
//         <meta
//           name="keywords"
//           content="Narmadeshwar Shivling, Authentic Narmadeshwar Shivling, Banalinga Shivling, Narmada Shivling, Shivling Manufacturer India, Temple Shivling, Marble Shivling, Bakawan Shivling, Khargone Shivling"
//         />
//         <link rel="canonical" href={SITE_URL} />

//         <meta property="og:type" content="website" />
//         <meta property="og:title" content="Namdev Narmadeshwar Shivling Art" />
//         <meta
//           property="og:description"
//           content="Authentic Narmadeshwar Shivlings handcrafted from sacred Narmada River stones. 100+ years of traditional craftsmanship."
//         />
//         <meta property="og:url" content={SITE_URL} />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Namdev Narmadeshwar Shivling Art" />
//         <meta
//           name="twitter:description"
//           content="Authentic Narmadeshwar Shivlings — 100+ Years Heritage"
//         />

//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Organization",
//             name: "Namdev Narmadeshwar Shivling Art",
//             url: SITE_URL,
//             logo: `${SITE_URL}/logo.png`,
//             description:
//               "Manufacturer of Authentic Narmadeshwar Shivlings from sacred Narmada River stones.",
//             address: {
//               "@type": "PostalAddress",
//               addressLocality: "Bakawan",
//               addressRegion: "Madhya Pradesh",
//               addressCountry: "India",
//             },
//           })}
//         </script>
//       </Helmet>
//       <Seo
//         title={seo.title}
//         description={seo.description}
//         keywords={seo.keywords}
//       />

//       <main className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-stone-50">
//         {/* Decorative Background */}
//         <div className="pointer-events-none absolute inset-0 overflow-hidden">
//           <div className="absolute -left-40 -top-40 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl sm:h-96 sm:w-96" />
//           <div className="absolute -right-40 top-1/3 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl sm:h-[420px] sm:w-[420px]" />
//           <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-orange-100/20 blur-3xl sm:h-80 sm:w-80" />
//         </div>

//         <div className="relative z-10">
//           <Hero />

//           <section className="py-10 sm:py-16">
//             <Categories />
//           </section>

//           <section className="py-10 sm:py-16">
//             <FeaturedProducts />
//           </section>

//           <section className="py-10 sm:py-16">
//             <WhyChooseUs />
//           </section>

//           <section className="py-10 sm:py-16">
//             <AboutSection />
//           </section>

//           <section className="py-10 sm:py-16">
//             <GallerySection />
//           </section>

//           <section className="py-10 sm:py-16">
//             <Testimonials />
//           </section>

//           <ContactCTA />
//         </div>
//       </main>
//     </>
//   );
// }




import { Helmet } from "react-helmet-async";

import Hero from "../../components/home/Hero";
import Categories from "../../components/home/Categories";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import AboutSection from "../../components/home/AboutSection";
import GallerySection from "../../components/home/GallerySection";
import Testimonials from "../../components/home/Testimonials";
import ContactCTA from "../../components/home/ContactCTA";
import Seo from "../../components/common/Seo";
import { SEO_CONTENT } from "../../config/content";
import { useContent } from "../../context/LanguageContext";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://yourdomain.com";

export default function Home() {
  const seo = useContent(SEO_CONTENT.home);
  return (
    <>
      <Helmet>
        <title>
          Namdev Narmadeshwar Shivling Art | Authentic Narmadeshwar Shivling
          Manufacturer
        </title>
        <meta
          name="description"
          content="Namdev Narmadeshwar Shivling Art crafts authentic Narmadeshwar Shivlings from sacred Narmada River stones in Bakawan, Khargone, Madhya Pradesh. 100+ years of heritage, temple orders, wholesale supply, and worldwide shipping."
        />
        <meta
          name="keywords"
          content="Narmadeshwar Shivling, Authentic Narmadeshwar Shivling, Banalinga Shivling, Narmada Shivling, Shivling Manufacturer India, Temple Shivling, Marble Shivling, Bakawan Shivling, Khargone Shivling"
        />
        <link rel="canonical" href={SITE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Namdev Narmadeshwar Shivling Art" />
        <meta
          property="og:description"
          content="Authentic Narmadeshwar Shivlings handcrafted from sacred Narmada River stones. 100+ years of traditional craftsmanship."
        />
        <meta property="og:url" content={SITE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Namdev Narmadeshwar Shivling Art" />
        <meta
          name="twitter:description"
          content="Authentic Narmadeshwar Shivlings — 100+ Years Heritage"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Namdev Narmadeshwar Shivling Art",
            url: SITE_URL,
            logo: `${SITE_URL}/logo.png`,
            description:
              "Manufacturer of Authentic Narmadeshwar Shivlings from sacred Narmada River stones.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bakawan",
              addressRegion: "Madhya Pradesh",
              addressCountry: "India",
            },
          })}
        </script>
      </Helmet>
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
      />

      <main className="relative overflow-hidden bg-gradient-to-b from-[#FBF7EF] via-white to-[#F5F0E6]">
        {/* Ambient background — depth, not decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-72 w-72 rounded-full bg-[#D4AF6A]/[0.07] blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute -right-40 top-1/3 h-72 w-72 rounded-full bg-[#C9A227]/[0.06] blur-3xl sm:h-[420px] sm:w-[420px]" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#E8DCC4]/[0.10] blur-3xl sm:h-80 sm:w-80" />
        </div>

        <div className="relative z-10">
          <Hero />

          <section className="bg-[#FBF7EF] py-14 sm:py-20 lg:py-24">
            <Categories />
          </section>

          <section className="bg-white py-14 sm:py-20 lg:py-24">
            <FeaturedProducts />
          </section>

          <section className="relative bg-[#F7F2E7] py-14 sm:py-20 lg:py-24">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF6A]/30 to-transparent"
            />
            <WhyChooseUs />
          </section>

          <section className="relative overflow-hidden bg-[#FBF7EF] py-14 sm:py-20 lg:py-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-10%] top-1/4 h-80 w-80 rounded-full bg-[#D4AF6A]/[0.06] blur-3xl"
            />
            <AboutSection />
          </section>

          <section className="bg-white py-14 sm:py-20 lg:py-24">
            <GallerySection />
          </section>

          <section className="relative bg-[#F7F2E7] py-14 sm:py-20 lg:py-24">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF6A]/30 to-transparent"
            />
            <Testimonials />
          </section>

          <ContactCTA />
        </div>
      </main>
    </>
  );
}