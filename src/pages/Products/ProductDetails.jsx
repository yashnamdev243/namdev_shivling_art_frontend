import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "antd";
import {
  WhatsAppOutlined,
  PhoneOutlined,
  ArrowLeftOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

import Seo from "../../components/common/Seo";
import Loader from "../../components/common/Loader";
import ErrorState from "../../components/common/ErrorState";
import { useProduct, useProducts } from "../../hooks/useProducts";
import { formatCurrency } from "../../utils/format";
import { SITE } from "../../config/constants";
import { ROUTES } from "../../config/routes";
import ProductCard from "../../components/cards/ProductCard";
import { FILE_BASE_URL } from "../../config/api";
import { getFileUrl } from "../../utils/fileUrl";

export default function ProductDetails() {
  const { id } = useParams();
  const { data: product, isLoading, isError, error, refetch } = useProduct(id);
  const { data: relatedData } = useProducts({
    category: product?.category,
    limit: 4,
  });


const gallery = useMemo(() => {
  const images = [];

  if (product?.image) {
    images.push(getFileUrl(product.image));
  }

  if (Array.isArray(product?.gallery)) {
    images.push(...product.gallery.map(getFileUrl));
  }

  return images;
}, [product]);
  const [activeImage, setActiveImage] = useState(0);

  if (isLoading) return <Loader fullScreen label="Loading product..." />;
  if (isError) return <ErrorState message={error?.message} onRetry={refetch} />;
  if (!product) return <ErrorState message="Product not found." />;

  const whatsappHref = `${SITE.social.whatsapp}?text=${encodeURIComponent(
    `Namaste, I'm interested in "${product.name}" (${SITE.name}). Please share more details.`,
  )}`;

  const related = (
    relatedData?.products ||
    relatedData?.data ||
    relatedData ||
    []
  ).filter((p) => (p._id || p.id) !== id);

  return (
    <>
      <Seo title={product.name} description={product.description} />

      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white py-28 px-10">
        {/* Background Blur */}

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-amber-200/30 blur-[130px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-200/30 blur-[130px]" />
        <div className="container mx-auto max-w-7xl px-5">
          <Link
            to={ROUTES.products}
            className="mb-10 inline-flex items-center gap-3 rounded-full border border-orange-200 bg-white px-5 py-3 text-sm font-semibold text-orange-600 shadow-sm transition hover:-translate-x-1 hover:border-orange-400 hover:shadow-lg"
          >
            <ArrowLeftOutlined /> Back to products
          </Link>

          <div className="grid items-start gap-16 lg:grid-cols-2">
            {/* Gallery */}
            <div className="rounded-[36px] border border-orange-100 shadow-[0_30px_80px_rgba(249,115,22,.10)] backdrop-blur-xl">
              <div className="overflow-hidden rounded-[28px] bg-stone-100">
                <img
                  src={gallery[activeImage] || "https://placehold.co/800"}
                  alt={product.name}
                  className="h-[600px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {gallery.length > 1 && (
                <div className="mt-6 grid grid-cols-5 gap-4">
                  {gallery.map((img, i) => (
                    <button
                      key={img + i}
                      onClick={() => setActiveImage(i)}
                      className={`
                group
                overflow-hidden
                rounded-2xl
                border-2                
                transition-all
                duration-300
                ${
                  activeImage === i
                    ? "border-orange-500 shadow-lg"
                    : "border-orange-100 hover:border-orange-300"
                }
              `}
                    >
                      <img
                        src={img}
                        alt=""
                        className="aspect-square w-full rounded-xl object-cover transition duration-500 group-hover:scale-110"
                      />
                    </button>
                  ))}
                </div>
              )}

              {product.video && (
                <div className="mt-8 overflow-hidden rounded-[28px] border border-orange-100 shadow-lg">
                  <video
                      src={getFileUrl(product.video)}
                    controls
                    className="h-[500px] w-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="rounded-[36px] border border-orange-100  p-10 shadow-[0_30px_80px_rgba(249,115,22,.10)] backdrop-blur-xl">
              {product.category && (
                <span className="inline-flex rounded-full bg-gradient-to-r from-orange-100 to-amber-100 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-700">
                  {product.category}
                </span>
              )}

              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900">
                {product.name}
              </h1>
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
                  Starting From
                </p>

                <h2 className="mt-2 text-4xl font-bold text-orange-600">
                  {formatCurrency(product.price)}
                </h2>
              </div>
              {product.description && (
                <div className="mt-6 rounded-3xl border border-orange-100 bg-orange-50/40 p-4">
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    Description
                  </h3>

                  <p className="leading-8 text-gray-600">
                    {product.description}
                  </p>
                </div>
              )}

              {Array.isArray(product.highlights) &&
                product.highlights.length > 0 && (
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {product.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm"
                      >
                        <CheckCircleFilled className="text-xl text-orange-500" />

                        <span className="font-medium text-gray-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  size="large"
                  type="primary"
                  icon={<WhatsAppOutlined />}
                  href={whatsappHref}
                  target="_blank"
                  className="
            !h-10
            !rounded-2xl
            !border-0
            !bg-gradient-to-r
            !from-green-500
            !to-emerald-600
            !px-6
            !font-semibold
            hover:!shadow-xl
          "
                >
                  WhatsApp
                </Button>

                <Button
                  size="large"
                  icon={<PhoneOutlined />}
                  href={`tel:${SITE.phoneRaw}`}
                  className="
            !h-10
            !rounded-2xl
            !border-orange-300
            !px-6
            !font-semibold
            hover:!border-orange-500
            hover:!text-orange-600
          "
                >
                  Call Now
                </Button>
              </div>
              <div className="mt-10 rounded-3xl border border-orange-100 bg-orange-50/50 p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "100% Authentic Product",
                    "Premium Handcrafted Finish",
                    "Secure Packaging",
                    "Trusted Customer Support",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircleFilled className="text-orange-500" />

                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="mb-8 font-display text-2xl font-bold text-stone-900">
                You may also like
              </h2>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {related.slice(0, 4).map((p) => (
                  <ProductCard key={p._id || p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
