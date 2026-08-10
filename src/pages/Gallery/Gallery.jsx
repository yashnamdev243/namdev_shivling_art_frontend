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
import { GALLERY_PAGE_CONTENT, SEO_CONTENT } from "../../config/content";

import { useContent } from "../../context/LanguageContext";
const PAGE_SIZE = 12;

export default function Gallery() {
  const { data, isLoading, isError, error, refetch } = useProducts({
    limit: 24,
  });
  const [page, setPage] = useState(1);

  const products = data?.products || data?.data || data || [];
  const t = useContent(GALLERY_PAGE_CONTENT);
  const seo = useContent(SEO_CONTENT.gallery);
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
      title={seo.title}
      description={seo.description}
      keywords={seo.keywords}
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
              {t.badge}
            </span>

            <h1 className="mt-5 text-3xl font-bold text-gray-900 sm:mt-6 sm:text-4xl md:text-6xl">
              {t.title}
            </h1>
          </div>

          {images.length === 0 ? (
            <div className="flex min-h-[50vh] items-center justify-center">
              <EmptyState
                title={t.emptyTitle}
                description={t.emptyDescription}
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
                          <Image
                            src={src}
                            alt={`${t.imageAlt} ${globalIndex + 1}`}
                            wrapperClassName="!block !h-full !w-full"
                            className="!h-full !w-full !object-cover transition duration-700 group-hover:scale-110"
                            fallback="/images/placeholder.jpg"
                            preview={{
                              mask: (
                                <span className="flex items-center gap-2 text-xs font-semibold sm:text-sm">
                                  <EyeOutlined aria-hidden="true" /> {t.view}
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
