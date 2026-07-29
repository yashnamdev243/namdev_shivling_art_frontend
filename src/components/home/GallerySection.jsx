// import { motion } from "framer-motion";
// import Container from "./Container";
// import SectionTitle from "./SectionTitle";
// import { useProducts } from "../../hooks/useProducts";
// import { FILE_BASE_URL } from "../../config/api";

// export default function GallerySection() {

//     const { data, isLoading, isError, error, refetch } = useProducts({
//       limit: 24,
//     });

//     const products = data?.products || data?.data || data || [];
//     const images = products.flatMap((product) => {
//       const list = [];

//       if (product.image) {
//         list.push(`${FILE_BASE_URL}/uploads/${product.image}`);
//       }

//       if (product.gallery) {
//         try {
//           const gallery = Array.isArray(product.gallery)
//             ? product.gallery
//             : JSON.parse(product.gallery);

//           gallery.forEach((img) => {
//             list.push(`${FILE_BASE_URL}/uploads/${img}`);
//           });
//         } catch (e) {}
//       }

//       return list;
//     });

//   return (
//     <section className="relative overflow-hidden py-6">
//       <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-orange-300/20 blur-[120px]" />

//       <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-300/20 blur-[140px]" />

//       <Container>
//         <SectionTitle
//           subtitle="Gallery"
//           title="Explore Our Divine Collection"
//         />

//         {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

//           {images.map((img, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//               className="overflow-hidden rounded-3xl shadow-xl"
//             >
//               <img
//                 src={img}
//                 alt=""
//                 className="w-full h-80 object-cover transition duration-500 hover:scale-110"
//               />
//             </motion.div>
//           ))}

//         </div> */}

//         <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {images.map((img, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -10 }}
//               transition={{ duration: 0.35 }}
//               className="group relative overflow-hidden rounded-[28px] border border-orange-100 bg-white shadow-lg"
//             >
//               {/* Image */}
//               <div className="relative h-80 overflow-hidden">
//                 <img
//                   src={img}
//                   alt={`Gallery ${index + 1}`}
//                   className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
//                 />

//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

//                 {/* Decorative Glow */}
//                 <div className="absolute inset-0 bg-orange-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

//                 {/* Hover Content */}
//                 <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
//                   <div className="w-full rounded-2xl border border-white/20 bg-white/15 p-4 text-center backdrop-blur-md">
//                     <h3 className="text-lg font-semibold text-white">
//                       Sacred Collection
//                     </h3>

//                     <p className="mt-1 text-sm text-orange-100">
//                       Handcrafted Narmadeshwar Shivling
//                     </p>
//                   </div>
//                 </div>

//                 {/* Image Number */}
//                 <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-orange-600 shadow-lg backdrop-blur">
//                   {String(index + 1).padStart(2, "0")}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { useProducts } from "../../hooks/useProducts";
import { FILE_BASE_URL } from "../../config/api";
import Loader from "../common/Loader";
import EmptyState from "../common/EmptyState";

export default function GallerySection() {
  const { data, isLoading, isError, refetch } = useProducts({ limit: 24 });

  const products = data?.products || data?.data || data || [];

  const images = products.flatMap((product) => {
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

  // A gallery of 24 products x gallery images can get very long on a
  // homepage — cap what we render here and let people browse the rest on
  // the products page.
  const visibleImages = images.slice(0, 9);

  return (
    <section className="relative overflow-hidden py-6">
      <div className="pointer-events-none absolute -top-24 left-0 h-56 w-56 rounded-full bg-orange-300/20 blur-[90px] sm:h-80 sm:w-80 sm:blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-amber-300/20 blur-[100px] sm:h-96 sm:w-96 sm:blur-[140px]" />

      <Container>
        <SectionTitle
          subtitle="Gallery"
          title="Explore Our Divine Collection"
        />

        {isLoading && <Loader label="Loading gallery..." />}

        {!isLoading && (isError || visibleImages.length === 0) && (
          <EmptyState
            title="Gallery Coming Soon"
            description="We're curating photos of our latest handcrafted Shivlings. Please check back shortly."
            onRetry={isError ? refetch : undefined}
          />
        )}

        {!isLoading && visibleImages.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="mt-10 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
          >
            {visibleImages.map((img, index) => (
              <motion.div
                key={img}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-[22px] border border-orange-100 bg-white shadow-lg sm:rounded-[28px]"
              >
                <div className="relative h-64 overflow-hidden sm:h-72 lg:h-80">
                  <img
                    src={img}
                    alt={`Handcrafted Narmadeshwar Shivling — gallery item ${index + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-orange-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-0 flex items-end justify-center p-4 opacity-0 transition-all duration-500 group-hover:opacity-100 sm:p-6">
                    <div className="w-full rounded-2xl border border-white/20 bg-white/15 p-3 text-center backdrop-blur-md sm:p-4">
                      <h3 className="text-base font-semibold text-white sm:text-lg">
                        Sacred Collection
                      </h3>
                      <p className="mt-1 text-xs text-orange-100 sm:text-sm">
                        Handcrafted Narmadeshwar Shivling
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-orange-600 shadow-lg backdrop-blur sm:left-5 sm:top-5 sm:h-10 sm:w-10 sm:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </Container>
    </section>
  );
}
