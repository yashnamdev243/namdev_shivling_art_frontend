import { motion } from "framer-motion";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { useProducts } from "../../hooks/useProducts";
import { FILE_BASE_URL } from "../../config/api";
import Loader from "../common/Loader";
import EmptyState from "../common/EmptyState";
import { GALLERY_PREVIEW_CONTENT } from "../../config/content";
import { useContent } from "../../context/LanguageContext";

export default function GallerySection() {
  const { data, isLoading, isError, refetch } = useProducts({ limit: 24 });
  const t = useContent(GALLERY_PREVIEW_CONTENT);

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
        <SectionTitle subtitle={t.subtitle} title={t.title} />

        {isLoading && <Loader label="Loading gallery..." />}

        {!isLoading && (isError || visibleImages.length === 0) && (
          <EmptyState
            title={t.emptyTitle}
            description={t.emptyDescription}
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
                        {t.cardTitle}
                      </h3>
                      <p className="mt-1 text-xs text-orange-100 sm:text-sm">
                        {t.cardSubtitle}
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
