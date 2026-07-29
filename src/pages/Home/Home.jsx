// import Hero from "../../components/home/Hero";
// import Categories from "../../components/home/Categories";
// import FeaturedProducts from "../../components/home/FeaturedProducts";
// import WhyChooseUs from "../../components/home/WhyChooseUs";
// import AboutSection from "../../components/home/AboutSection";
// import GallerySection from "../../components/home/GallerySection";
// import Testimonials from "../../components/home/Testimonials";
// import ContactCTA from "../../components/home/ContactCTA";

// export default function Home() {
//   return (
//     <main className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-stone-50">
//       {/* Decorative Background */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-orange-200/20 blur-3xl" />
//         <div className="absolute top-1/3 -right-40 h-[420px] w-[420px] rounded-full bg-amber-200/20 blur-3xl" />
//         <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-orange-100/20 blur-3xl" />
//       </div>

//       <div className="relative z-10">
//         <Hero />

//         <section className="py-16">
//           <Categories />
//         </section>

//         <section className="py-16">
//           <FeaturedProducts />
//         </section>

//         <section className="py-16">
//           <WhyChooseUs />
//         </section>

//         <section className="py-16">
//           <AboutSection />
//         </section>

//         <section className="py-16">
//           <GallerySection />
//         </section>

//         <section className="py-16">
//           <Testimonials />
//         </section>

//         <ContactCTA />
//       </div>
//     </main>
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
import FloatingContactWidget from "../../components/common/FloatingContactWidget";

// Same env-driven pattern used on the About/Contact pages, so all canonical
// / OG URLs stay in sync with the actual deployment instead of a hardcoded
// placeholder domain.
const SITE_URL = import.meta.env.VITE_SITE_URL || "https://yourdomain.com";

export default function Home() {
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

      <main className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-stone-50">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute -right-40 top-1/3 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl sm:h-[420px] sm:w-[420px]" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-orange-100/20 blur-3xl sm:h-80 sm:w-80" />
        </div>

        <div className="relative z-10">
          <Hero />

          <section className="py-10 sm:py-16">
            <Categories />
          </section>

          <section className="py-10 sm:py-16">
            <FeaturedProducts />
          </section>

          <section className="py-10 sm:py-16">
            <WhyChooseUs />
          </section>

          <section className="py-10 sm:py-16">
            <AboutSection />
          </section>

          <section className="py-10 sm:py-16">
            <GallerySection />
          </section>

          <section className="py-10 sm:py-16">
            <Testimonials />
          </section>

          <ContactCTA />
        </div>

        <FloatingContactWidget />
      </main>
    </>
  );
}
