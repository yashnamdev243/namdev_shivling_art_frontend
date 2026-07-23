import { motion } from "framer-motion";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

const images = [
  "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800",
  "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?w=800",
  "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800",
  "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
  "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800",
];

export default function GallerySection() {
  return (
    <section className="py-24 bg-gray-100">

      <Container>

        <SectionTitle
          subtitle="Gallery"
          title="Explore Our Divine Collection"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-3xl shadow-xl"
            >
              <img
                src={img}
                alt=""
                className="w-full h-80 object-cover transition duration-500 hover:scale-110"
              />
            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
}