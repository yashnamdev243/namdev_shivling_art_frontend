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
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <AboutSection />
      <GallerySection />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
