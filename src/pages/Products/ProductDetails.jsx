import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "antd";
import { WhatsAppOutlined, PhoneOutlined, ArrowLeftOutlined, CheckCircleFilled } from "@ant-design/icons";

import Seo from "../../components/common/Seo";
import Loader from "../../components/common/Loader";
import ErrorState from "../../components/common/ErrorState";
import { useProduct, useProducts } from "../../hooks/useProducts";
import { formatCurrency } from "../../utils/format";
import { SITE } from "../../config/constants";
import { ROUTES } from "../../config/routes";
import ProductCard from "../../components/cards/ProductCard";

export default function ProductDetails() {
  const { id } = useParams();
  const { data: product, isLoading, isError, error, refetch } = useProduct(id);
  const { data: relatedData } = useProducts({
    category: product?.category,
    limit: 4,
  });

  const gallery = [product?.thumbnail, ...(product?.images || [])].filter(Boolean);
  const [activeImage, setActiveImage] = useState(0);

  if (isLoading) return <Loader fullScreen label="Loading product..." />;
  if (isError) return <ErrorState message={error?.message} onRetry={refetch} />;
  if (!product) return <ErrorState message="Product not found." />;

  const whatsappHref = `${SITE.social.whatsapp}?text=${encodeURIComponent(
    `Namaste, I'm interested in "${product.name}" (${SITE.name}). Please share more details.`
  )}`;

  const related = (relatedData?.products || relatedData?.data || relatedData || []).filter(
    (p) => (p._id || p.id) !== id
  );

  return (
    <>
      <Seo title={product.name} description={product.description} />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <Link
            to={ROUTES.products}
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-800"
          >
            <ArrowLeftOutlined /> Back to products
          </Link>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Gallery */}
            <div>
              <div className="aspect-square overflow-hidden rounded-3xl bg-stone-100 shadow-card">
                <img
                  src={gallery[activeImage] || "https://placehold.co/700x700"}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {gallery.length > 1 && (
                <div className="mt-4 grid grid-cols-5 gap-3">
                  {gallery.map((img, i) => (
                    <button
                      key={img + i}
                      onClick={() => setActiveImage(i)}
                      className={`aspect-square overflow-hidden rounded-xl border-2 transition ${
                        activeImage === i ? "border-brand-600" : "border-transparent"
                      }`}
                    >
                      <img src={img} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {product.video && (
                <video
                  src={product.video}
                  controls
                  className="mt-4 aspect-video w-full rounded-2xl bg-black"
                />
              )}
            </div>

            {/* Info */}
            <div>
              {product.category && (
                <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                  {product.category}
                </span>
              )}

              <h1 className="mt-4 font-display text-4xl font-bold text-stone-900">
                {product.name}
              </h1>

              <p className="mt-4 text-3xl font-bold text-brand-700">
                {formatCurrency(product.price)}
              </p>

              {product.description && (
                <p className="mt-6 leading-8 text-gray-600">{product.description}</p>
              )}

              {Array.isArray(product.highlights) && product.highlights.length > 0 && (
                <div className="mt-6 space-y-2 rounded-2xl bg-stone-50 p-5">
                  {product.highlights.map((h) => (
                    <p key={h} className="flex items-center gap-2 text-stone-700">
                      <CheckCircleFilled className="text-brand-600" /> {h}
                    </p>
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
                  className="!rounded-full !border-none !bg-green-600 px-8 hover:!bg-green-700"
                >
                  WhatsApp Inquiry
                </Button>

                <Button
                  size="large"
                  icon={<PhoneOutlined />}
                  href={`tel:${SITE.phoneRaw}`}
                  className="!rounded-full px-8"
                >
                  Call Now
                </Button>
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
