// import { Image } from "antd";
// import Seo from "../../components/common/Seo";
// import Loader from "../../components/common/Loader";
// import ErrorState from "../../components/common/ErrorState";
// import EmptyState from "../../components/common/EmptyState";
// import { useProducts } from "../../hooks/useProducts";
// import { FILE_BASE_URL } from "../../config/api";
// import { motion } from "framer-motion";
// export default function Gallery() {
//   const { data, isLoading, isError, error, refetch } = useProducts({
//     limit: 24,
//   });

//   const products = data?.products || data?.data || data || [];
//   const images = products.flatMap((product) => {
//     const list = [];

//     if (product.image) {
//       list.push(`${FILE_BASE_URL}/uploads/${product.image}`);
//     }

//     if (product.gallery) {
//       try {
//         const gallery = Array.isArray(product.gallery)
//           ? product.gallery
//           : JSON.parse(product.gallery);

//         gallery.forEach((img) => {
//           list.push(`${FILE_BASE_URL}/uploads/${img}`);
//         });
//       } catch (e) {}
//     }

//     return list;
//   });

//   // Loading
//   if (isLoading) {
//     return (
//       <>
//         <Seo
//           title="Gallery"
//           description="A visual look at our Narmadeshwar Shivling craftsmanship."
//         />
//         <div className="flex min-h-[80vh] items-center justify-center">
//           <Loader label="Loading gallery..." />
//         </div>
//       </>
//     );
//   }

//   // Error
//   if (isError) {
//     return (
//       <>
//         <Seo
//           title="Gallery"
//           description="A visual look at our Narmadeshwar Shivling craftsmanship."
//         />
//         <ErrorState message={error?.message} onRetry={refetch} />
//       </>
//     );
//   }

//   return (
//     <>
//       <Seo
//         title="Gallery"
//         description="A visual look at our Narmadeshwar Shivling craftsmanship."
//       />

//       <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white py-28 mt-1  px-10">
//         <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-amber-200/30 blur-[130px]" />

//         <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-200/30 blur-[130px]" />
//         <div className="container mx-auto max-w-7xl px-5">
//           <div className="mb-14 text-center">
//             <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-amber-700">
//               Our Work
//             </span>

//             <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-6xl">
//               Gallery
//             </h1>
//           </div>
//           <div className="">
//             {images.length === 0 ? (
//               <div className="flex min-h-[50vh] items-center justify-center">
//                 <EmptyState
//                   title="Gallery is empty"
//                   description="Photos will appear here once the admin adds products."
//                 />
//               </div>
//             ) : (
//               <Image.PreviewGroup>
//                 <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                   {images.map((src, index) => (
//                     <motion.div
//                       key={src + index}
//                       initial={{ opacity: 0, y: 40 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{
//                         duration: 0.5,
//                         delay: index * 0.08,
//                       }}
//                       whileHover={{ y: -10 }}
//                       className="group overflow-hidden rounded-[30px] border border-orange-100 bg-white p-2 shadow-lg hover:shadow-[0_25px_60px_rgba(249,115,22,.18)]"
//                     >
//                       <div className="relative h-80 overflow-hidden rounded-[24px]">
//                         <Image
//                           preview={{ mask: false }}
//                           src={src}
//                           className="absolute inset-0 opacity-0 pointer-events-none"
//                         />

//                         <img
//                           src={src}
//                           alt={`Gallery ${index + 1}`}
//                           loading="lazy"
//                           onError={(e) => {
//                             e.currentTarget.src = "/images/placeholder.jpg";
//                           }}
//                           className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
//                         />

//                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

//                         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md opacity-0 transition duration-500 group-hover:opacity-100">
//                           View Image
//                         </div>

//                         <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-orange-600 font-bold">
//                           {String(index + 1).padStart(2, "0")}
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </Image.PreviewGroup>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import { useMemo, useState } from "react";
import { Image, Pagination } from "antd";
import { motion } from "framer-motion";
import { EyeOutlined } from "@ant-design/icons";

import Seo from "../../components/common/Seo";
import Loader from "../../components/common/Loader";
import ErrorState from "../../components/common/ErrorState";
import EmptyState from "../../components/common/EmptyState";
import { useProducts } from "../../hooks/useProducts";
import { FILE_BASE_URL } from "../../config/api";

const PAGE_SIZE = 12;

export default function Gallery() {
  const { data, isLoading, isError, error, refetch } = useProducts({
    limit: 24,
  });
  const [page, setPage] = useState(1);

  const products = data?.products || data?.data || data || [];

  const images = useMemo(() => {
    return products.flatMap((product) => {
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
  }, [products]);

  const totalPages = Math.max(1, Math.ceil(images.length / PAGE_SIZE));
  const pageImages = images.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const seoNode = (
    <Seo
      title="Gallery"
      description="A visual look at our Narmadeshwar Shivling craftsmanship."
    />
  );

  if (isLoading) {
    return (
      <>
        {seoNode}
        <div className="flex min-h-[80vh] items-center justify-center px-4">
          <Loader label="Loading gallery..." />
        </div>
      </>
    );
  }

  if (isError) {
    return (
      <>
        {seoNode}
        <div className="px-4">
          <ErrorState message={error?.message} onRetry={refetch} />
        </div>
      </>
    );
  }

  return (
    <>
      {seoNode}

      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white py-12 sm:py-16 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
        {/* Background Blur */}
        <div className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full bg-amber-200/30 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-orange-200/30 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />

        <div className="container mx-auto max-w-7xl px-0 sm:px-5">
          <div className="mb-12 text-center sm:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-xs font-semibold text-orange-700 sm:px-5 sm:text-sm">
              Our Work
            </span>

            <h1 className="mt-5 text-3xl font-bold text-gray-900 sm:mt-6 sm:text-4xl md:text-6xl">
              Gallery
            </h1>
          </div>

          {images.length === 0 ? (
            <div className="flex min-h-[50vh] items-center justify-center">
              <EmptyState
                title="Gallery is empty"
                description="Photos will appear here once the admin adds products."
              />
            </div>
          ) : (
            <>
              <Image.PreviewGroup>
                <motion.div
                  key={page}
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.06 } },
                  }}
                  className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4"
                >
                  {pageImages.map((src, index) => {
                    const globalIndex = (page - 1) * PAGE_SIZE + index;

                    return (
                      <motion.div
                        key={src + globalIndex}
                        variants={{
                          hidden: { opacity: 0, y: 30 },
                          show: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.4 }}
                        whileHover={{ y: -8 }}
                        className="group overflow-hidden rounded-2xl border border-orange-100 bg-white p-1.5 shadow-lg hover:shadow-[0_25px_60px_rgba(249,115,22,.18)] sm:rounded-[30px] sm:p-2"
                      >
                        <div className="relative h-40 overflow-hidden rounded-xl sm:h-64 sm:rounded-[24px] lg:h-80">
                          {/* A single <Image> handles both the visible thumbnail
                              and the click-to-zoom / next-prev lightbox via
                              PreviewGroup — avoids loading the same image
                              twice, which the previous version did. */}
                          <Image
                            src={src}
                            alt={`Handcrafted Narmadeshwar Shivling — gallery item ${globalIndex + 1}`}
                            wrapperClassName="!block !h-full !w-full"
                            className="!h-full !w-full !object-cover transition duration-700 group-hover:scale-110"
                            fallback="/images/placeholder.jpg"
                            preview={{
                              mask: (
                                <span className="flex items-center gap-2 text-xs font-semibold sm:text-sm">
                                  <EyeOutlined aria-hidden="true" /> View
                                </span>
                              ),
                            }}
                          />

                          <div className="pointer-events-none absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-orange-600 sm:left-5 sm:top-5 sm:h-10 sm:w-10 sm:text-sm">
                            {String(globalIndex + 1).padStart(2, "0")}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </Image.PreviewGroup>

              {totalPages > 1 && (
                <div className="mt-10 flex justify-center sm:mt-14">
                  <Pagination
                    current={page}
                    pageSize={PAGE_SIZE}
                    total={images.length}
                    onChange={(p) => {
                      setPage(p);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    showSizeChanger={false}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
