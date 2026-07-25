import { Image } from "antd";
import Seo from "../../components/common/Seo";
import Loader from "../../components/common/Loader";
import ErrorState from "../../components/common/ErrorState";
import EmptyState from "../../components/common/EmptyState";
import { useProducts } from "../../hooks/useProducts";
import { FILE_BASE_URL } from "../../config/api";
import { motion } from "framer-motion";
export default function Gallery() {
  const { data, isLoading, isError, error, refetch } = useProducts({
    limit: 24,
  });

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
          list.push(`${FILE_BASE_URL}/uploads/${img}`);
        });
      } catch (e) {}
    }

    return list;
  });

  // Loading
  if (isLoading) {
    return (
      <>
        <Seo
          title="Gallery"
          description="A visual look at our Narmadeshwar Shivling craftsmanship."
        />
        <div className="flex min-h-[80vh] items-center justify-center">
          <Loader label="Loading gallery..." />
        </div>
      </>
    );
  }

  // Error
  if (isError) {
    return (
      <>
        <Seo
          title="Gallery"
          description="A visual look at our Narmadeshwar Shivling craftsmanship."
        />
        <ErrorState message={error?.message} onRetry={refetch} />
      </>
    );
  }

  return (
    <>
      <Seo
        title="Gallery"
        description="A visual look at our Narmadeshwar Shivling craftsmanship."
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white py-28 mt-1  px-10">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-amber-200/30 blur-[130px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-200/30 blur-[130px]" />
        <div className="container mx-auto max-w-7xl px-5">
          <div className="mb-14 text-center">
            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-amber-700">
              Our Work
            </span>

            <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-6xl">
              Gallery
            </h1>
          </div>
          <div className="">
            {images.length === 0 ? (
              <div className="flex min-h-[50vh] items-center justify-center">
                <EmptyState
                  title="Gallery is empty"
                  description="Photos will appear here once the admin adds products."
                />
              </div>
            ) : (
              <Image.PreviewGroup>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {images.map((src, index) => (
                    <motion.div
                      key={src + index}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      whileHover={{ y: -10 }}
                      className="group overflow-hidden rounded-[30px] border border-orange-100 bg-white p-2 shadow-lg hover:shadow-[0_25px_60px_rgba(249,115,22,.18)]"
                    >
                      <div className="relative h-80 overflow-hidden rounded-[24px]">
                        <Image
                          preview={{ mask: false }}
                          src={src}
                          className="absolute inset-0 opacity-0 pointer-events-none"
                        />

                        <img
                          src={src}
                          alt={`Gallery ${index + 1}`}
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src = "/images/placeholder.jpg";
                          }}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md opacity-0 transition duration-500 group-hover:opacity-100">
                          View Image
                        </div>

                        <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-orange-600 font-bold">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Image.PreviewGroup>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
