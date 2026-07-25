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
    <section className="relative overflow-hidden py-6">
      <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-orange-300/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-300/20 blur-[140px]" />

      <Container>
        <SectionTitle
          subtitle="Gallery"
          title="Explore Our Divine Collection"
        />

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

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

        </div> */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.35 }}
              className="group relative overflow-hidden rounded-[28px] border border-orange-100 bg-white shadow-lg"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Decorative Glow */}
                <div className="absolute inset-0 bg-orange-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Hover Content */}
                <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="w-full rounded-2xl border border-white/20 bg-white/15 p-4 text-center backdrop-blur-md">
                    <h3 className="text-lg font-semibold text-white">
                      Sacred Collection
                    </h3>

                    <p className="mt-1 text-sm text-orange-100">
                      Handcrafted Narmadeshwar Shivling
                    </p>
                  </div>
                </div>

                {/* Image Number */}
                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-orange-600 shadow-lg backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
