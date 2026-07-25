import Hero from "../../components/home/Hero";
import Categories from "../../components/home/Categories";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import AboutSection from "../../components/home/AboutSection";
import GallerySection from "../../components/home/GallerySection";
import Testimonials from "../../components/home/Testimonials";
import ContactCTA from "../../components/home/ContactCTA";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-stone-50">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-orange-200/20 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[420px] w-[420px] rounded-full bg-amber-200/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-orange-100/20 blur-3xl" />
      </div>

      <div className="relative z-10">
        <Hero />

        <section className="py-16">
          <Categories />
        </section>

        <section className="py-16">
          <FeaturedProducts />
        </section>

        <section className="py-16">
          <WhyChooseUs />
        </section>

        <section className="py-16">
          <AboutSection />
        </section>

        <section className="py-16">
          <GallerySection />
        </section>

        <section className="py-16">
          <Testimonials />
        </section>

        <ContactCTA />
      </div>
    </main>
  );
}
