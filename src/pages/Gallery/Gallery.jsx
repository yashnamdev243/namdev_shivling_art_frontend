import { Image } from "antd";
import Seo from "../../components/common/Seo";
import Loader from "../../components/common/Loader";
import ErrorState from "../../components/common/ErrorState";
import EmptyState from "../../components/common/EmptyState";
import { useProducts } from "../../hooks/useProducts";

export default function Gallery() {
  const { data, isLoading, isError, error, refetch } = useProducts({ limit: 24 });
  const products = data?.products || data?.data || data || [];
  const images = products
    .flatMap((p) => [p.thumbnail, ...(p.images || [])])
    .filter(Boolean);

  return (
    <>
      <Seo
        title="Gallery"
        description="A visual look at our Narmadeshwar Shivling craftsmanship."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <p className="font-medium uppercase tracking-widest text-gold-600">Our Work</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-stone-900 sm:text-5xl">
            Gallery
          </h1>

          <div className="mt-12">
            {isLoading && <Loader label="Loading gallery..." />}
            {isError && <ErrorState message={error?.message} onRetry={refetch} />}
            {!isLoading && !isError && images.length === 0 && (
              <EmptyState
                title="Gallery is empty"
                description="Photos will appear here once the admin adds products."
              />
            )}

            {images.length > 0 && (
              <Image.PreviewGroup>
                <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
                  {images.map((src, i) => (
                    <Image
                      key={src + i}
                      src={src}
                      className="!w-full !rounded-2xl object-cover shadow-card"
                    />
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
