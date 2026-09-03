// import { useMemo, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { Button } from "antd";
// import {
//   WhatsAppOutlined,
//   PhoneOutlined,
//   ArrowLeftOutlined,
//   CheckCircleFilled,
// } from "@ant-design/icons";

// import Seo from "../../components/common/Seo";
// import Loader from "../../components/common/Loader";
// import ErrorState from "../../components/common/ErrorState";
// import { useProduct, useProducts } from "../../hooks/useProducts";
// import { formatCurrency } from "../../utils/format";
// import { SITE } from "../../config/constants";
// import { ROUTES } from "../../config/routes";
// import ProductCard from "../../components/cards/ProductCard";
// import { FILE_BASE_URL } from "../../config/api";
// import { getFileUrl } from "../../utils/fileUrl";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const { data: product, isLoading, isError, error, refetch } = useProduct(id);
//   const { data: relatedData } = useProducts({
//     category: product?.category,
//     limit: 4,
//   });

// const gallery = useMemo(() => {
//   const images = [];

//   if (product?.image) {
//     images.push(getFileUrl(product.image));
//   }

//   if (Array.isArray(product?.gallery)) {
//     images.push(...product.gallery.map(getFileUrl));
//   }

//   return images;
// }, [product]);
//   const [activeImage, setActiveImage] = useState(0);

//   if (isLoading) return <Loader fullScreen label="Loading product..." />;
//   if (isError) return <ErrorState message={error?.message} onRetry={refetch} />;
//   if (!product) return <ErrorState message="Product not found." />;

//   const whatsappHref = `${SITE.social.whatsapp}?text=${encodeURIComponent(
//     `Namaste, I'm interested in "${product.name}" (${SITE.name}). Please share more details.`,
//   )}`;

//   const related = (
//     relatedData?.products ||
//     relatedData?.data ||
//     relatedData ||
//     []
//   ).filter((p) => (p._id || p.id) !== id);

//   return (
//     <>
//       <Seo title={product.name} description={product.description} />

//       <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white py-28 px-10">
//         {/* Background Blur */}

//         <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-amber-200/30 blur-[130px]" />

//         <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-200/30 blur-[130px]" />
//         <div className="container mx-auto max-w-7xl px-5">
//           <Link
//             to={ROUTES.products}
//             className="mb-10 inline-flex items-center gap-3 rounded-full border border-orange-200 bg-white px-5 py-3 text-sm font-semibold text-orange-600 shadow-sm transition hover:-translate-x-1 hover:border-orange-400 hover:shadow-lg"
//           >
//             <ArrowLeftOutlined /> Back to products
//           </Link>

//           <div className="grid items-start gap-16 lg:grid-cols-2">
//             {/* Gallery */}
//             <div className="rounded-[36px] border border-orange-100 shadow-[0_30px_80px_rgba(249,115,22,.10)] backdrop-blur-xl">
//               <div className="overflow-hidden rounded-[28px] bg-stone-100">
//                 <img
//                   src={gallery[activeImage] || "https://placehold.co/800"}
//                   alt={product.name}
//                   className="h-[600px] w-full object-cover transition duration-700 hover:scale-105"
//                 />
//               </div>

//               {gallery.length > 1 && (
//                 <div className="mt-6 grid grid-cols-5 gap-4">
//                   {gallery.map((img, i) => (
//                     <button
//                       key={img + i}
//                       onClick={() => setActiveImage(i)}
//                       className={`
//                 group
//                 overflow-hidden
//                 rounded-2xl
//                 border-2
//                 transition-all
//                 duration-300
//                 ${
//                   activeImage === i
//                     ? "border-orange-500 shadow-lg"
//                     : "border-orange-100 hover:border-orange-300"
//                 }
//               `}
//                     >
//                       <img
//                         src={img}
//                         alt=""
//                         className="aspect-square w-full rounded-xl object-cover transition duration-500 group-hover:scale-110"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               )}

//               {product.video && (
//                 <div className="mt-8 overflow-hidden rounded-[28px] border border-orange-100 shadow-lg">
//                   <video
//                       src={getFileUrl(product.video)}
//                     controls
//                     className="h-[500px] w-full object-cover"
//                   />
//                 </div>
//               )}
//             </div>

//             {/* Info */}
//             <div className="rounded-[36px] border border-orange-100  p-10 shadow-[0_30px_80px_rgba(249,115,22,.10)] backdrop-blur-xl">
//               {product.category && (
//                 <span className="inline-flex rounded-full bg-gradient-to-r from-orange-100 to-amber-100 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-700">
//                   {product.category}
//                 </span>
//               )}

//               <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900">
//                 {product.name}
//               </h1>
//               <div className="mt-5">
//                 <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
//                   Starting From
//                 </p>

//                 <h2 className="mt-2 text-4xl font-bold text-orange-600">
//                   {formatCurrency(product.price)}
//                 </h2>
//               </div>
//               {product.description && (
//                 <div className="mt-6 rounded-3xl border border-orange-100 bg-orange-50/40 p-4">
//                   <h3 className="mb-2 text-lg font-semibold text-slate-900">
//                     Description
//                   </h3>

//                   <p className="leading-8 text-gray-600">
//                     {product.description}
//                   </p>
//                 </div>
//               )}

//               {Array.isArray(product.highlights) &&
//                 product.highlights.length > 0 && (
//                   <div className="mt-8 grid gap-4 sm:grid-cols-2">
//                     {product.highlights.map((item) => (
//                       <div
//                         key={item}
//                         className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm"
//                       >
//                         <CheckCircleFilled className="text-xl text-orange-500" />

//                         <span className="font-medium text-gray-700">
//                           {item}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//               <div className="mt-8 flex flex-wrap gap-4">
//                 <Button
//                   size="large"
//                   type="primary"
//                   icon={<WhatsAppOutlined />}
//                   href={whatsappHref}
//                   target="_blank"
//                   className="
//             !h-10
//             !rounded-2xl
//             !border-0
//             !bg-gradient-to-r
//             !from-green-500
//             !to-emerald-600
//             !px-6
//             !font-semibold
//             hover:!shadow-xl
//           "
//                 >
//                   WhatsApp
//                 </Button>

//                 <Button
//                   size="large"
//                   icon={<PhoneOutlined />}
//                   href={`tel:${SITE.phoneRaw}`}
//                   className="
//             !h-10
//             !rounded-2xl
//             !border-orange-300
//             !px-6
//             !font-semibold
//             hover:!border-orange-500
//             hover:!text-orange-600
//           "
//                 >
//                   Call Now
//                 </Button>
//               </div>
//               <div className="mt-10 rounded-3xl border border-orange-100 bg-orange-50/50 p-6">
//                 <div className="grid gap-4 sm:grid-cols-2">
//                   {[
//                     "100% Authentic Product",
//                     "Premium Handcrafted Finish",
//                     "Secure Packaging",
//                     "Trusted Customer Support",
//                   ].map((item) => (
//                     <div key={item} className="flex items-center gap-3">
//                       <CheckCircleFilled className="text-orange-500" />

//                       <span className="text-gray-700">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Related */}
//           {related.length > 0 && (
//             <div className="mt-20">
//               <h2 className="mb-8 font-display text-2xl font-bold text-stone-900">
//                 You may also like
//               </h2>
//               <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
//                 {related.slice(0, 4).map((p) => (
//                   <ProductCard key={p._id || p.id} product={p} />
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }

// import { useMemo, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { Button } from "antd";
// import {
//   WhatsAppOutlined,
//   PhoneOutlined,
//   ArrowLeftOutlined,
//   CheckCircleFilled,
//   ToolOutlined,
// } from "@ant-design/icons";

// import Seo from "../../components/common/Seo";
// import Loader from "../../components/common/Loader";
// import ErrorState from "../../components/common/ErrorState";
// import { useProduct, useProducts } from "../../hooks/useProducts";
// import { formatCurrency } from "../../utils/format";
// import { SITE } from "../../config/constants";
// import { ROUTES } from "../../config/routes";
// import ProductCard from "../../components/cards/ProductCard";
// import { getFileUrl } from "../../utils/fileUrl";

// // Standard size bands we can craft to order, from small home-worship
// // pieces up to full temple installations. "Custom" opens a bespoke
// // crafting conversation instead of a fixed size.
// const SIZE_OPTIONS = [
//   "1 - 3 inch",
//   "3 - 6 inch",
//   "6 - 9 inch",
//   "9 - 12 inch",
//   "1 - 2 ft",
//   "2 - 3 ft",
//   "3 - 5 ft",
//   "5 - 8 ft",
//   "8 - 12 ft",
//   "12 - 18 ft",
//   "18 - 24 ft",
// ];

// export default function ProductDetails() {
//   const { id } = useParams();
//   const { data: product, isLoading, isError, error, refetch } = useProduct(id);
//   const { data: relatedData } = useProducts({
//     category: product?.category,
//     limit: 4,
//   });

//   const gallery = useMemo(() => {
//     const images = [];

//     if (product?.image) {
//       images.push(getFileUrl(product.image));
//     }

//     if (Array.isArray(product?.gallery)) {
//       images.push(...product.gallery.map(getFileUrl));
//     }

//     return images;
//   }, [product]);

//   const [activeImage, setActiveImage] = useState(0);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [isCustomSize, setIsCustomSize] = useState(false);

//   if (isLoading) return <Loader fullScreen label="Loading product..." />;
//   if (isError) return <ErrorState message={error?.message} onRetry={refetch} />;
//   if (!product) return <ErrorState message="Product not found." />;

//   const sizeText = isCustomSize
//     ? "a custom size (please advise on options up to 24 ft)"
//     : selectedSize
//     ? `size ${selectedSize}`
//     : null;

//   const whatsappMessage = sizeText
//     ? `Namaste, I'm interested in "${product.name}" (${SITE.name}) in ${sizeText}. Please share more details.`
//     : `Namaste, I'm interested in "${product.name}" (${SITE.name}). Please share more details.`;

//   const whatsappHref = `${SITE.social.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

//   const customCraftMessage = `Namaste, I'd like to enquire about a custom-crafted "${product.name}"-style Shivling — a bespoke size or design. Could you please guide me on options?`;
//   const customCraftHref = `${SITE.social.whatsapp}?text=${encodeURIComponent(customCraftMessage)}`;

//   const related = (relatedData?.products || relatedData?.data || relatedData || []).filter(
//     (p) => (p._id || p.id) !== id
//   );

//   return (
//     <>
//       <Seo title={product.name} description={product.description || `${product.name} — ${SITE.name}`} />

//       <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
//         {/* Background Blur */}
//         <div className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full bg-amber-200/30 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />
//         <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-orange-200/30 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />

//         <div className="container mx-auto max-w-7xl px-0 sm:px-5">
//           <Link
//             to={ROUTES.products}
//             className="mb-8 inline-flex items-center gap-3 rounded-full border border-orange-200 bg-white px-4 py-2.5 text-sm font-semibold text-orange-600 shadow-sm transition hover:-translate-x-1 hover:border-orange-400 hover:shadow-lg sm:mb-10 sm:px-5 sm:py-3"
//           >
//             <ArrowLeftOutlined aria-hidden="true" /> Back to products
//           </Link>

//           <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
//             {/* Gallery */}
//             <div className="rounded-[24px] border border-orange-100 shadow-[0_30px_80px_rgba(249,115,22,.10)] backdrop-blur-xl sm:rounded-[36px]">
//               <div className="overflow-hidden rounded-[18px] bg-stone-100 sm:rounded-[28px]">
//                 <img
//                   src={gallery[activeImage] || "https://placehold.co/800"}
//                   alt={product.name}
//                   className="h-[320px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[450px] lg:h-[600px]"
//                 />
//               </div>

//               {gallery.length > 1 && (
//                 <div className="mt-4 grid grid-cols-4 gap-3 p-2 sm:mt-6 sm:grid-cols-5 sm:gap-4 sm:p-0">
//                   {gallery.map((img, i) => (
//                     <button
//                       key={img + i}
//                       onClick={() => setActiveImage(i)}
//                       aria-label={`View image ${i + 1}`}
//                       aria-current={activeImage === i}
//                       className={`group overflow-hidden rounded-xl border-2 transition-all duration-300 sm:rounded-2xl ${
//                         activeImage === i
//                           ? "border-orange-500 shadow-lg"
//                           : "border-orange-100 hover:border-orange-300"
//                       }`}
//                     >
//                       <img
//                         src={img}
//                         alt=""
//                         className="aspect-square w-full rounded-lg object-cover transition duration-500 group-hover:scale-110 sm:rounded-xl"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               )}

//               {product.video && (
//                 <div className="mt-6 overflow-hidden rounded-[18px] border border-orange-100 shadow-lg sm:mt-8 sm:rounded-[28px]">
//                   <video
//                     src={getFileUrl(product.video)}
//                     controls
//                     className="h-[260px] w-full object-cover sm:h-[400px] lg:h-[500px]"
//                   />
//                 </div>
//               )}
//             </div>

//             {/* Info */}
//             <div className="rounded-[24px] border border-orange-100 p-6 shadow-[0_30px_80px_rgba(249,115,22,.10)] backdrop-blur-xl sm:rounded-[36px] sm:p-10">
//               {product.category && (
//                 <span className="inline-flex rounded-full bg-gradient-to-r from-orange-100 to-amber-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700 sm:px-5 sm:py-2 sm:tracking-[0.25em]">
//                   {product.category}
//                 </span>
//               )}

//               <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
//                 {product.name}
//               </h1>

//               <div className="mt-5">
//                 <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 sm:tracking-[0.35em]">
//                   Starting From
//                 </p>
//                 <h2 className="mt-2 text-3xl font-bold text-orange-600 sm:text-4xl">
//                   {formatCurrency(product.price)}
//                 </h2>
//               </div>

//               {product.description && (
//                 <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50/40 p-4 sm:rounded-3xl">
//                   <h3 className="mb-2 text-base font-semibold text-slate-900 sm:text-lg">Description</h3>
//                   <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
//                     {product.description}
//                   </p>
//                 </div>
//               )}

//               {/* Size selector */}
//               <div className="mt-6 rounded-2xl border border-orange-100 bg-white p-4 sm:mt-8 sm:rounded-3xl sm:p-5">
//                 <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
//                   Select a Size
//                 </h3>
//                 <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//                   Handcrafted to order from 1 inch home-worship pieces up to 24 ft temple installations.
//                 </p>

//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {SIZE_OPTIONS.map((size) => (
//                     <button
//                       key={size}
//                       type="button"
//                       onClick={() => {
//                         setSelectedSize(size);
//                         setIsCustomSize(false);
//                       }}
//                       aria-pressed={selectedSize === size && !isCustomSize}
//                       className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${
//                         selectedSize === size && !isCustomSize
//                           ? "border-orange-500 bg-orange-500 text-white shadow-md"
//                           : "border-orange-200 bg-orange-50/60 text-orange-700 hover:border-orange-400"
//                       }`}
//                     >
//                       {size}
//                     </button>
//                   ))}

//                   <button
//                     type="button"
//                     onClick={() => {
//                       setIsCustomSize(true);
//                       setSelectedSize(null);
//                     }}
//                     aria-pressed={isCustomSize}
//                     className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${
//                       isCustomSize
//                         ? "border-orange-500 bg-orange-500 text-white shadow-md"
//                         : "border-dashed border-orange-300 bg-white text-orange-700 hover:border-orange-500"
//                     }`}
//                   >
//                     <ToolOutlined aria-hidden="true" />
//                     Custom Size
//                   </button>
//                 </div>

//                 {isCustomSize && (
//                   <p className="mt-3 rounded-xl bg-amber-50 p-3 text-xs leading-6 text-amber-800 sm:text-sm">
//                     We handcraft bespoke Shivlings to any dimension — from
//                     miniature 1-inch pieces to 24 ft temple centerpieces.
//                     Message our artisans below with your exact requirement
//                     and we'll guide you through material, timeline, and
//                     pricing.
//                   </p>
//                 )}
//               </div>

//               {Array.isArray(product.highlights) && product.highlights.length > 0 && (
//                 <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
//                   {product.highlights.map((item) => (
//                     <div
//                       key={item}
//                       className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-white p-4 shadow-sm sm:p-5"
//                     >
//                       <CheckCircleFilled className="text-lg text-orange-500 sm:text-xl" aria-hidden="true" />
//                       <span className="text-sm font-medium text-gray-700 sm:text-base">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
//                 <Button
//                   size="large"
//                   type="primary"
//                   icon={<WhatsAppOutlined />}
//                   href={whatsappHref}
//                   target="_blank"
//                   className="!h-11 !w-full !rounded-2xl !border-0 !bg-gradient-to-r !from-green-500 !to-emerald-600 !px-6 !font-semibold hover:!shadow-xl sm:!h-10 sm:!w-auto"
//                 >
//                   {selectedSize || isCustomSize ? "WhatsApp with Selection" : "WhatsApp"}
//                 </Button>

//                 {SITE.phoneRaw && (
//                   <Button
//                     size="large"
//                     icon={<PhoneOutlined />}
//                     href={`tel:${SITE.phoneRaw}`}
//                     className="!h-11 !w-full !rounded-2xl !border-orange-300 !px-6 !font-semibold hover:!border-orange-500 hover:!text-orange-600 sm:!h-10 sm:!w-auto"
//                   >
//                     Call Now
//                   </Button>
//                 )}
//               </div>

//               {/* Custom crafting CTA */}
//               <a
//                 href={customCraftHref}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-6 flex items-center gap-4 rounded-2xl border border-dashed border-orange-300 bg-orange-50/60 p-4 transition hover:border-orange-500 hover:bg-orange-50 sm:mt-8 sm:rounded-3xl sm:p-5"
//               >
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-lg text-white shadow-md sm:h-12 sm:w-12 sm:text-xl">
//                   <ToolOutlined aria-hidden="true" />
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-bold text-slate-900 sm:text-base">
//                     Need something fully custom?
//                   </h4>
//                   <p className="mt-0.5 text-xs text-gray-600 sm:text-sm">
//                     Talk to our artisans about a specially crafted Shivling —
//                     any size, finish, or design.
//                   </p>
//                 </div>
//               </a>

//               <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50/50 p-5 sm:mt-10 sm:rounded-3xl sm:p-6">
//                 <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
//                   {[
//                     "100% Authentic Product",
//                     "Premium Handcrafted Finish",
//                     "Secure Packaging",
//                     "Trusted Customer Support",
//                   ].map((item) => (
//                     <div key={item} className="flex items-center gap-3">
//                       <CheckCircleFilled className="text-orange-500" aria-hidden="true" />
//                       <span className="text-sm text-gray-700 sm:text-base">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Related */}
//           {related.length > 0 && (
//             <div className="mt-14 sm:mt-20">
//               <h2 className="mb-6 text-xl font-bold text-stone-900 sm:mb-8 sm:text-2xl">
//                 You may also like
//               </h2>
//               <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
//                 {related.slice(0, 4).map((p) => (
//                   <ProductCard key={p._id || p.id} product={p} />
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }

// import { useMemo, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { Button } from "antd";
// import {
//   WhatsAppOutlined,
//   PhoneOutlined,
//   ArrowLeftOutlined,
//   CheckCircleFilled,
//   ToolOutlined,
//   ShoppingCartOutlined,
//   HeartFilled,
//   HeartOutlined,
//   MinusOutlined,
//   PlusOutlined,
// } from "@ant-design/icons";

// import Seo from "../../components/common/Seo";
// import Loader from "../../components/common/Loader";
// import ErrorState from "../../components/common/ErrorState";
// import ShareProduct from "../../components/common/ShareProduct";
// import { useProduct, useProducts } from "../../hooks/useProducts";
// import { formatCurrency } from "../../utils/format";
// import { SITE } from "../../config/constants";
// import { ROUTES } from "../../config/routes";
// import ProductCard from "../../components/cards/ProductCard";
// import { getFileUrl } from "../../utils/fileUrl";
// import { useCart } from "../../context/CartContext";
// import { useWishlist } from "../../hooks/useWishlist";

// // Standard size bands we can craft to order, from small home-worship
// // pieces up to full temple installations. "Custom" opens a bespoke
// // crafting conversation instead of a fixed size.
// const SIZE_OPTIONS = [
//   "1 - 3 inch",
//   "3 - 6 inch",
//   "6 - 9 inch",
//   "9 - 12 inch",
//   "1 - 2 ft",
//   "2 - 3 ft",
//   "3 - 5 ft",
//   "5 - 8 ft",
//   "8 - 12 ft",
//   "12 - 18 ft",
//   "18 - 24 ft",
// ];

// export default function ProductDetails() {
//   const { id } = useParams();
//   const { data: product, isLoading, isError, error, refetch } = useProduct(id);
//   const { data: relatedData } = useProducts({
//     category: product?.category,
//     limit: 4,
//   });

//   const gallery = useMemo(() => {
//     const images = [];

//     if (product?.image) {
//       images.push(getFileUrl(product.image));
//     }

//     if (Array.isArray(product?.gallery)) {
//       images.push(...product.gallery.map(getFileUrl));
//     }

//     return images;
//   }, [product]);

//   const [activeImage, setActiveImage] = useState(0);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [isCustomSize, setIsCustomSize] = useState(false);
//   const [qty, setQty] = useState(1);

//   const { addToCart } = useCart();
//   const { isWishlisted, toggleWishlist } = useWishlist();

//   if (isLoading) return <Loader fullScreen label="Loading product..." />;
//   if (isError) return <ErrorState message={error?.message} onRetry={refetch} />;
//   if (!product) return <ErrorState message="Product not found." />;

//   const wishlisted = isWishlisted(id);
//   const inStock = product.stock !== 0;
//   const finalSize = isCustomSize ? "Custom Size" : selectedSize;

//   const handleAddToCart = () => {
//     if (!inStock) return;
//     addToCart(product, { qty, size: finalSize });
//   };

//   const sizeText = isCustomSize
//     ? "a custom size (please advise on options up to 24 ft)"
//     : selectedSize
//       ? `size ${selectedSize}`
//       : null;

//   const whatsappMessage = sizeText
//     ? `Namaste, I'm interested in "${product.name}" (${SITE.name}) in ${sizeText}. Please share more details.`
//     : `Namaste, I'm interested in "${product.name}" (${SITE.name}). Please share more details.`;

//   const whatsappHref = `${SITE.social.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

//   const customCraftMessage = `Namaste, I'd like to enquire about a custom-crafted "${product.name}"-style Shivling — a bespoke size or design. Could you please guide me on options?`;
//   const customCraftHref = `${SITE.social.whatsapp}?text=${encodeURIComponent(customCraftMessage)}`;

//   const related = (
//     relatedData?.products ||
//     relatedData?.data ||
//     relatedData ||
//     []
//   ).filter((p) => (p._id || p.id) !== id);

//   return (
//     <>
//       <Seo
//         title={product.name}
//         description={product.description || `${product.name} — ${SITE.name}`}
//       />

//       <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
//         {/* Background Blur */}
//         <div className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full bg-amber-200/30 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />
//         <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-orange-200/30 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />

//         <div className="container mx-auto max-w-7xl px-0 sm:px-5">
//           <Link
//             to={ROUTES.products}
//             className="mb-8 inline-flex items-center gap-3 rounded-full border border-orange-200 bg-white px-4 py-2.5 text-sm font-semibold text-orange-600 shadow-sm transition hover:-translate-x-1 hover:border-orange-400 hover:shadow-lg sm:mb-10 sm:px-5 sm:py-3"
//           >
//             <ArrowLeftOutlined aria-hidden="true" /> Back to products
//           </Link>

//           <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
//             {/* Gallery */}
//             <div className="rounded-[24px] border border-orange-100 shadow-[0_30px_80px_rgba(249,115,22,.10)] backdrop-blur-xl sm:rounded-[36px]">
//               <div className="overflow-hidden rounded-[18px] bg-stone-100 sm:rounded-[28px]">
//                 <img
//                   src={gallery[activeImage] || "https://placehold.co/800"}
//                   alt={product.name}
//                   className="h-[320px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[450px] lg:h-[600px]"
//                 />
//               </div>

//               {gallery.length > 1 && (
//                 <div className="mt-4 grid grid-cols-4 gap-3 p-2 sm:mt-6 sm:grid-cols-5 sm:gap-4 sm:p-0">
//                   {gallery.map((img, i) => (
//                     <button
//                       key={img + i}
//                       onClick={() => setActiveImage(i)}
//                       aria-label={`View image ${i + 1}`}
//                       aria-current={activeImage === i}
//                       className={`group overflow-hidden rounded-xl border-2 transition-all duration-300 sm:rounded-2xl ${
//                         activeImage === i
//                           ? "border-orange-500 shadow-lg"
//                           : "border-orange-100 hover:border-orange-300"
//                       }`}
//                     >
//                       <img
//                         src={img}
//                         alt=""
//                         className="aspect-square w-full rounded-lg object-cover transition duration-500 group-hover:scale-110 sm:rounded-xl"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               )}

//               {product.video && (
//                 <div className="mt-6 overflow-hidden rounded-[18px] border border-orange-100 shadow-lg sm:mt-8 sm:rounded-[28px]">
//                   <video
//                     src={getFileUrl(product.video)}
//                     controls
//                     className="h-[260px] w-full object-cover sm:h-[400px] lg:h-[500px]"
//                   />
//                 </div>
//               )}
//             </div>

//             {/* Info */}
//             <div className="rounded-[24px] border border-orange-100 p-6 shadow-[0_30px_80px_rgba(249,115,22,.10)] backdrop-blur-xl sm:rounded-[36px] sm:p-10">
//               <div className="flex items-start justify-between gap-3">
//                 {product.category && (
//                   <span className="inline-flex rounded-full bg-gradient-to-r from-orange-100 to-amber-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700 sm:px-5 sm:py-2 sm:tracking-[0.25em]">
//                     {product.category}
//                   </span>
//                 )}

//                 <div className="flex shrink-0 items-center gap-2">
//                   <button
//                     type="button"
//                     onClick={() => toggleWishlist(product)}
//                     aria-label={
//                       wishlisted ? "Remove from wishlist" : "Add to wishlist"
//                     }
//                     aria-pressed={wishlisted}
//                     className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-100 bg-white shadow-sm transition hover:scale-110 sm:h-10 sm:w-10"
//                   >
//                     {wishlisted ? (
//                       <HeartFilled
//                         className="text-red-500"
//                         aria-hidden="true"
//                       />
//                     ) : (
//                       <HeartOutlined
//                         className="text-slate-600"
//                         aria-hidden="true"
//                       />
//                     )}
//                   </button>

//                   <ShareProduct
//                     url={
//                       typeof window !== "undefined" ? window.location.href : ""
//                     }
//                     title={product.name}
//                     className="!border-orange-100 !bg-white !shadow-sm"
//                   />
//                 </div>
//               </div>

//               <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
//                 {product.name}
//               </h1>

//               <div className="mt-5">
//                 <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 sm:tracking-[0.35em]">
//                   Starting From
//                 </p>
//                 <h2 className="mt-2 text-3xl font-bold text-orange-600 sm:text-4xl">
//                   {formatCurrency(product.price)}
//                 </h2>
//               </div>

//               {product.description && (
//                 <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50/40 p-4 sm:rounded-3xl">
//                   <h3 className="mb-2 text-base font-semibold text-slate-900 sm:text-lg">
//                     Description
//                   </h3>
//                   <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
//                     {product.description}
//                   </p>
//                 </div>
//               )}

//               {/* Size selector */}
//               <div className="mt-6 rounded-2xl border border-orange-100 bg-white p-4 sm:mt-8 sm:rounded-3xl sm:p-5">
//                 <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
//                   Select a Size
//                 </h3>
//                 <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//                   Handcrafted to order from 1 inch home-worship pieces up to 24
//                   ft temple installations.
//                 </p>

//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {SIZE_OPTIONS.map((size) => (
//                     <button
//                       key={size}
//                       type="button"
//                       onClick={() => {
//                         setSelectedSize(size);
//                         setIsCustomSize(false);
//                       }}
//                       aria-pressed={selectedSize === size && !isCustomSize}
//                       className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${
//                         selectedSize === size && !isCustomSize
//                           ? "border-orange-500 bg-orange-500 text-white shadow-md"
//                           : "border-orange-200 bg-orange-50/60 text-orange-700 hover:border-orange-400"
//                       }`}
//                     >
//                       {size}
//                     </button>
//                   ))}

//                   <button
//                     type="button"
//                     onClick={() => {
//                       setIsCustomSize(true);
//                       setSelectedSize(null);
//                     }}
//                     aria-pressed={isCustomSize}
//                     className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${
//                       isCustomSize
//                         ? "border-orange-500 bg-orange-500 text-white shadow-md"
//                         : "border-dashed border-orange-300 bg-white text-orange-700 hover:border-orange-500"
//                     }`}
//                   >
//                     <ToolOutlined aria-hidden="true" />
//                     Custom Size
//                   </button>
//                 </div>

//                 {isCustomSize && (
//                   <p className="mt-3 rounded-xl bg-amber-50 p-3 text-xs leading-6 text-amber-800 sm:text-sm">
//                     We handcraft bespoke Shivlings to any dimension — from
//                     miniature 1-inch pieces to 24 ft temple centerpieces.
//                     Message our artisans below with your exact requirement and
//                     we'll guide you through material, timeline, and pricing.
//                   </p>
//                 )}
//               </div>

//               {Array.isArray(product.highlights) &&
//                 product.highlights.length > 0 && (
//                   <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
//                     {product.highlights.map((item) => (
//                       <div
//                         key={item}
//                         className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-white p-4 shadow-sm sm:p-5"
//                       >
//                         <CheckCircleFilled
//                           className="text-lg text-orange-500 sm:text-xl"
//                           aria-hidden="true"
//                         />
//                         <span className="text-sm font-medium text-gray-700 sm:text-base">
//                           {item}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//               {/* Quantity + Add to Cart */}
//               <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
//                 <div className="inline-flex items-center justify-between rounded-2xl border border-orange-200 bg-white sm:justify-start">
//                   <button
//                     type="button"
//                     onClick={() => setQty((q) => Math.max(1, q - 1))}
//                     aria-label="Decrease quantity"
//                     className="flex h-11 w-11 items-center justify-center text-orange-600 transition hover:bg-orange-50 disabled:opacity-30"
//                     disabled={qty <= 1}
//                   >
//                     <MinusOutlined aria-hidden="true" />
//                   </button>
//                   <span
//                     className="w-10 text-center text-base font-semibold text-slate-900"
//                     aria-live="polite"
//                   >
//                     {qty}
//                   </span>
//                   <button
//                     type="button"
//                     onClick={() => setQty((q) => q + 1)}
//                     aria-label="Increase quantity"
//                     className="flex h-11 w-11 items-center justify-center text-orange-600 transition hover:bg-orange-50"
//                   >
//                     <PlusOutlined aria-hidden="true" />
//                   </button>
//                 </div>

//                 <Button
//                   size="large"
//                   icon={<ShoppingCartOutlined />}
//                   onClick={handleAddToCart}
//                   disabled={!inStock}
//                   className="!h-11 !w-full !rounded-2xl !border-0 !bg-gradient-to-r !from-orange-500 !to-amber-500 !px-6 !font-semibold !text-white hover:!shadow-xl disabled:!opacity-40 sm:!h-11 sm:!w-auto"
//                 >
//                   {inStock ? "Add to Cart" : "Out of Stock"}
//                 </Button>
//               </div>

//               <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
//                 <Button
//                   size="large"
//                   type="primary"
//                   icon={<WhatsAppOutlined />}
//                   href={whatsappHref}
//                   target="_blank"
//                   className="!h-11 !w-full !rounded-2xl !border-0 !bg-gradient-to-r !from-green-500 !to-emerald-600 !px-6 !font-semibold hover:!shadow-xl sm:!h-10 sm:!w-auto"
//                 >
//                   {selectedSize || isCustomSize
//                     ? "WhatsApp with Selection"
//                     : "WhatsApp"}
//                 </Button>

//                 {SITE.phoneRaw && (
//                   <Button
//                     size="large"
//                     icon={<PhoneOutlined />}
//                     href={`tel:${SITE.phoneRaw}`}
//                     className="!h-11 !w-full !rounded-2xl !border-orange-300 !px-6 !font-semibold hover:!border-orange-500 hover:!text-orange-600 sm:!h-10 sm:!w-auto text-gray-700"
//                   >
//                     Call Now
//                   </Button>
//                 )}
//               </div>

//               {/* Custom crafting CTA */}
//               <a
//                 href={customCraftHref}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-6 flex items-center gap-4 rounded-2xl border border-dashed border-orange-300 bg-orange-50/60 p-4 transition hover:border-orange-500 hover:bg-orange-50 sm:mt-8 sm:rounded-3xl sm:p-5"
//               >
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-lg text-white shadow-md sm:h-12 sm:w-12 sm:text-xl">
//                   <ToolOutlined aria-hidden="true" />
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-bold text-slate-900 sm:text-base">
//                     Need something fully custom?
//                   </h4>
//                   <p className="mt-0.5 text-xs text-gray-600 sm:text-sm">
//                     Talk to our artisans about a specially crafted Shivling —
//                     any size, finish, or design.
//                   </p>
//                 </div>
//               </a>

//               <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50/50 p-5 sm:mt-10 sm:rounded-3xl sm:p-6">
//                 <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
//                   {[
//                     "100% Authentic Product",
//                     "Premium Handcrafted Finish",
//                     "Secure Packaging",
//                     "Trusted Customer Support",
//                   ].map((item) => (
//                     <div key={item} className="flex items-center gap-3">
//                       <CheckCircleFilled
//                         className="text-orange-500"
//                         aria-hidden="true"
//                       />
//                       <span className="text-sm text-gray-700 sm:text-base">
//                         {item}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Related */}
//           {related.length > 0 && (
//             <div className="mt-14 sm:mt-20">
//               <h2 className="mb-6 text-xl font-bold text-stone-900 sm:mb-8 sm:text-2xl">
//                 You may also like
//               </h2>
//               <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
//                 {related.slice(0, 4).map((p) => (
//                   <ProductCard key={p._id || p.id} product={p} />
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }


// import { useMemo, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { Button } from "antd";
// import {
//   WhatsAppOutlined,
//   PhoneOutlined,
//   ArrowLeftOutlined,
//   CheckCircleFilled,
//   ToolOutlined,
//   HeartFilled,
//   HeartOutlined,
// } from "@ant-design/icons";

// import Seo from "../../components/common/Seo";
// import Loader from "../../components/common/Loader";
// import ErrorState from "../../components/common/ErrorState";
// import ShareProduct from "../../components/common/ShareProduct";
// import { useProduct, useProducts } from "../../hooks/useProducts";
// import { formatCurrency } from "../../utils/format";
// import { SITE } from "../../config/constants";
// import { ROUTES } from "../../config/routes";
// import ProductCard from "../../components/cards/ProductCard";
// import { getFileUrl } from "../../utils/fileUrl";
// import { useWishlist } from "../../hooks/useWishlist";
// import ProductLikeButton from "../../components/product/ProductLikeButton";
// import WishlistButton from "../../components/product/WishlistButton";
// import ProductStats from "../../components/product/ProductStats";
// import ProductReviewForm from "../../components/product/ProductReviewForm";
// import ProductReviewList from "../../components/product/ProductReviewList";
// import useProductLike from "../../hooks/useProductLike";
// import useProductReviews from "../../hooks/useProductReviews";

// // Standard size bands we can craft to order, from small home-worship
// // pieces up to full temple installations. "Custom" opens a bespoke
// // crafting conversation instead of a fixed size.
// const SIZE_OPTIONS = [
//   "1 - 3 inch",
//   "3 - 6 inch",
//   "6 - 9 inch",
//   "9 - 12 inch",
//   "1 - 2 ft",
//   "2 - 3 ft",
//   "3 - 5 ft",
//   "5 - 8 ft",
//   "8 - 12 ft",
//   "12 - 18 ft",
//   "18 - 24 ft",
// ];

// export default function ProductDetails() {
//   const { id } = useParams();
//   const { data: product, isLoading, isError, error, refetch } = useProduct(id);
//   const { data: relatedData } = useProducts({
//     category: product?.category,
//     limit: 4,
//   });

//   const gallery = useMemo(() => {
//     const images = [];

//     if (product?.image) {
//       images.push(getFileUrl(product.image));
//     }

//     if (Array.isArray(product?.gallery)) {
//       images.push(...product.gallery.map(getFileUrl));
//     }

//     return images;
//   }, [product]);

//   const [activeImage, setActiveImage] = useState(0);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [isCustomSize, setIsCustomSize] = useState(false);

//   const { isWishlisted, toggleWishlist } = useWishlist();

//   if (isLoading) return <Loader fullScreen label="Loading product..." />;
//   if (isError) return <ErrorState message={error?.message} onRetry={refetch} />;
//   if (!product) return <ErrorState message="Product not found." />;

//   const wishlisted = isWishlisted(id);

//   const sizeText = isCustomSize
//     ? "a custom size (please advise on options up to 24 ft)"
//     : selectedSize
//     ? `size ${selectedSize}`
//     : null;

//   const whatsappMessage = sizeText
//     ? `Namaste, I'm interested in "${product.name}" (${SITE.name}) in ${sizeText}. Please share more details.`
//     : `Namaste, I'm interested in "${product.name}" (${SITE.name}). Please share more details.`;

//   const whatsappHref = `${SITE.social.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

//   const customCraftMessage = `Namaste, I'd like to enquire about a custom-crafted "${product.name}"-style Shivling — a bespoke size or design. Could you please guide me on options?`;
//   const customCraftHref = `${SITE.social.whatsapp}?text=${encodeURIComponent(customCraftMessage)}`;

//   const related = (relatedData?.products || relatedData?.data || relatedData || []).filter(
//     (p) => (p._id || p.id) !== id
//   );

//   const productId =
//   product?._id || product?.id;

// const {
//   likeCount,
// } = useProductLike(productId);

// const {
//   reviews,
//   loading: reviewsLoading,
//   submitting,
//   addReview,
// } = useProductReviews(productId);

//   return (
//     <>
//       <Seo title={product.name} description={product.description || `${product.name} — ${SITE.name}`} />

//       <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
//         {/* Background Blur */}
//         <div className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full bg-amber-200/30 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />
//         <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-orange-200/30 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />

//         <div className="container mx-auto max-w-7xl px-0 sm:px-5">
//           <Link
//             to={ROUTES.products}
//             className="mb-8 inline-flex items-center gap-3 rounded-full border border-orange-200 bg-white px-4 py-2.5 text-sm font-semibold text-orange-600 shadow-sm transition hover:-translate-x-1 hover:border-orange-400 hover:shadow-lg sm:mb-10 sm:px-5 sm:py-3"
//           >
//             <ArrowLeftOutlined aria-hidden="true" /> Back to products
//           </Link>

//           <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
//             {/* Gallery */}
//             <div className="rounded-[24px] border border-orange-100 shadow-[0_30px_80px_rgba(249,115,22,.10)] backdrop-blur-xl sm:rounded-[36px]">
//               <div className="overflow-hidden rounded-[18px] bg-stone-100 sm:rounded-[28px]">
//                 <img
//                   src={gallery[activeImage] || "https://placehold.co/800"}
//                   alt={product.name}
//                   className="h-[320px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[450px] lg:h-[600px]"
//                 />
//               </div>

//               {gallery.length > 1 && (
//                 <div className="mt-4 grid grid-cols-4 gap-3 p-2 sm:mt-6 sm:grid-cols-5 sm:gap-4 sm:p-0">
//                   {gallery.map((img, i) => (
//                     <button
//                       key={img + i}
//                       onClick={() => setActiveImage(i)}
//                       aria-label={`View image ${i + 1}`}
//                       aria-current={activeImage === i}
//                       className={`group overflow-hidden rounded-xl border-2 transition-all duration-300 sm:rounded-2xl ${
//                         activeImage === i
//                           ? "border-orange-500 shadow-lg"
//                           : "border-orange-100 hover:border-orange-300"
//                       }`}
//                     >
//                       <img
//                         src={img}
//                         alt=""
//                         className="aspect-square w-full rounded-lg object-cover transition duration-500 group-hover:scale-110 sm:rounded-xl"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               )}

//               {product.video && (
//                 <div className="mt-6 overflow-hidden rounded-[18px] border border-orange-100 shadow-lg sm:mt-8 sm:rounded-[28px]">
//                   <video
//                     src={getFileUrl(product.video)}
//                     controls
//                     className="h-[260px] w-full object-cover sm:h-[400px] lg:h-[500px]"
//                   />
//                 </div>
//               )}
//             </div>

//             {/* Info */}
//             <div className="rounded-[24px] border border-orange-100 p-6 shadow-[0_30px_80px_rgba(249,115,22,.10)] backdrop-blur-xl sm:rounded-[36px] sm:p-10">
//               <div className="flex items-start justify-between gap-3">
//                 {product.category && (
//                   <span className="inline-flex rounded-full bg-gradient-to-r from-orange-100 to-amber-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700 sm:px-5 sm:py-2 sm:tracking-[0.25em]">
//                     {product.category}
//                   </span>
//                 )}

//                 <div className="flex shrink-0 items-center gap-2">
//                   <button
//                     type="button"
//                     onClick={() => toggleWishlist(product)}
//                     aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
//                     aria-pressed={wishlisted}
//                     className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-100 bg-white shadow-sm transition hover:scale-110 sm:h-10 sm:w-10"
//                   >
//                     {wishlisted ? (
//                       <HeartFilled className="text-red-500" aria-hidden="true" />
//                     ) : (
//                       <HeartOutlined className="text-slate-600" aria-hidden="true" />
//                     )}
//                   </button>

//                   <ShareProduct
//                     url={typeof window !== "undefined" ? window.location.href : ""}
//                     title={product.name}
//                     className="!border-orange-100 !bg-white !shadow-sm"
//                   />
//                 </div>
//               </div>

//               <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
//                 {product.name}
//               </h1>

//               <div className="mt-5">
//                 <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 sm:tracking-[0.35em]">
//                   Starting From
//                 </p>
//                 <h2 className="mt-2 text-3xl font-bold text-orange-600 sm:text-4xl">
//                   {formatCurrency(product.price)}
//                 </h2>
//               </div>

//               {product.description && (
//                 <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50/40 p-4 sm:rounded-3xl">
//                   <h3 className="mb-2 text-base font-semibold text-slate-900 sm:text-lg">Description</h3>
//                   <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
//                     {product.description}
//                   </p>
//                 </div>
//               )}

//               {/* Size selector */}
//               <div className="mt-6 rounded-2xl border border-orange-100 bg-white p-4 sm:mt-8 sm:rounded-3xl sm:p-5">
//                 <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
//                   Select a Size
//                 </h3>
//                 <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//                   Handcrafted to order from 1 inch home-worship pieces up to 24 ft temple installations.
//                 </p>

//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {SIZE_OPTIONS.map((size) => (
//                     <button
//                       key={size}
//                       type="button"
//                       onClick={() => {
//                         setSelectedSize(size);
//                         setIsCustomSize(false);
//                       }}
//                       aria-pressed={selectedSize === size && !isCustomSize}
//                       className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${
//                         selectedSize === size && !isCustomSize
//                           ? "border-orange-500 bg-orange-500 text-white shadow-md"
//                           : "border-orange-200 bg-orange-50/60 text-orange-700 hover:border-orange-400"
//                       }`}
//                     >
//                       {size}
//                     </button>
//                   ))}

//                   <button
//                     type="button"
//                     onClick={() => {
//                       setIsCustomSize(true);
//                       setSelectedSize(null);
//                     }}
//                     aria-pressed={isCustomSize}
//                     className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${
//                       isCustomSize
//                         ? "border-orange-500 bg-orange-500 text-white shadow-md"
//                         : "border-dashed border-orange-300 bg-white text-orange-700 hover:border-orange-500"
//                     }`}
//                   >
//                     <ToolOutlined aria-hidden="true" />
//                     Custom Size
//                   </button>
//                 </div>

//                 {isCustomSize && (
//                   <p className="mt-3 rounded-xl bg-amber-50 p-3 text-xs leading-6 text-amber-800 sm:text-sm">
//                     We handcraft bespoke Shivlings to any dimension — from
//                     miniature 1-inch pieces to 24 ft temple centerpieces.
//                     Message our artisans below with your exact requirement
//                     and we'll guide you through material, timeline, and
//                     pricing.
//                   </p>
//                 )}
//               </div>

//               {Array.isArray(product.highlights) && product.highlights.length > 0 && (
//                 <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
//                   {product.highlights.map((item) => (
//                     <div
//                       key={item}
//                       className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-white p-4 shadow-sm sm:p-5"
//                     >
//                       <CheckCircleFilled className="text-lg text-orange-500 sm:text-xl" aria-hidden="true" />
//                       <span className="text-sm font-medium text-gray-700 sm:text-base">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
//                 <Button
//                   size="large"
//                   type="primary"
//                   icon={<WhatsAppOutlined />}
//                   href={whatsappHref}
//                   target="_blank"
//                   className="!h-11 !w-full !rounded-2xl !border-0 !bg-gradient-to-r !from-green-500 !to-emerald-600 !px-6 !font-semibold hover:!shadow-xl sm:!h-10 sm:!w-auto"
//                 >
//                   {selectedSize || isCustomSize ? "WhatsApp with Selection" : "WhatsApp"}
//                 </Button>

//                 {SITE.phoneRaw && (
//                   <Button
//                     size="large"
//                     icon={<PhoneOutlined />}
//                     href={`tel:${SITE.phoneRaw}`}
//                     className="!h-11 !w-full !rounded-2xl !border-orange-300 !px-6 !font-semibold hover:!border-orange-500 hover:!text-orange-600 sm:!h-10 sm:!w-auto"
//                   >
//                     Call Now
//                   </Button>
//                 )}
//               </div>

//               {/* Custom crafting CTA */}
//               <a
//                 href={customCraftHref}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-6 flex items-center gap-4 rounded-2xl border border-dashed border-orange-300 bg-orange-50/60 p-4 transition hover:border-orange-500 hover:bg-orange-50 sm:mt-8 sm:rounded-3xl sm:p-5"
//               >
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-lg text-white shadow-md sm:h-12 sm:w-12 sm:text-xl">
//                   <ToolOutlined aria-hidden="true" />
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-bold text-slate-900 sm:text-base">
//                     Need something fully custom?
//                   </h4>
//                   <p className="mt-0.5 text-xs text-gray-600 sm:text-sm">
//                     Talk to our artisans about a specially crafted Shivling —
//                     any size, finish, or design.
//                   </p>
//                 </div>
//               </a>

//               <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50/50 p-5 sm:mt-10 sm:rounded-3xl sm:p-6">
//                 <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
//                   {[
//                     "100% Authentic Product",
//                     "Premium Handcrafted Finish",
//                     "Secure Packaging",
//                     "Trusted Customer Support",
//                   ].map((item) => (
//                     <div key={item} className="flex items-center gap-3">
//                       <CheckCircleFilled className="text-orange-500" aria-hidden="true" />
//                       <span className="text-sm text-gray-700 sm:text-base">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//             </div>
//           </div>

//           {/* Related */}
//           {related.length > 0 && (
//             <div className="mt-14 sm:mt-20">
//               <h2 className="mb-6 text-xl font-bold text-stone-900 sm:mb-8 sm:text-2xl">
//                 You may also like
//               </h2>
//               <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
//                 {related.slice(0, 4).map((p) => (
//                   <ProductCard key={p._id || p.id} product={p} />
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }



// import { useMemo, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { Button } from "antd";
// import {
//   WhatsAppOutlined,
//   PhoneOutlined,
//   ArrowLeftOutlined,
//   CheckCircleFilled,
//   ToolOutlined,
//   HeartFilled,
//   HeartOutlined,
// } from "@ant-design/icons";

// import Seo from "../../components/common/Seo";
// import Loader from "../../components/common/Loader";
// import ErrorState from "../../components/common/ErrorState";
// import ShareProduct from "../../components/common/ShareProduct";
// import { useProduct, useProducts } from "../../hooks/useProducts";
// import { formatCurrency } from "../../utils/format";
// import { SITE } from "../../config/constants";
// import { ROUTES } from "../../config/routes";
// import ProductCard from "../../components/cards/ProductCard";
// import { getFileUrl } from "../../utils/fileUrl";
// import { useWishlist } from "../../hooks/useWishlist";
// import ProductLikeButton from "../../components/product/ProductLikeButton";
// import WishlistButton from "../../components/product/WishlistButton";
// import ProductStats from "../../components/product/ProductStats";
// import ProductReviewForm from "../../components/product/ProductReviewForm";
// import ProductReviewList from "../../components/product/ProductReviewList";
// import useProductLike from "../../hooks/useProductLike";
// import useProductReviews from "../../hooks/useProductReviews";
// import CouponApplyBox from "../../components/coupon/CouponApplyBox";

// // Standard size bands we can craft to order, from small home-worship
// // pieces up to full temple installations. "Custom" opens a bespoke
// // crafting conversation instead of a fixed size.
// const SIZE_OPTIONS = [
//   "1 - 3 inch",
//   "3 - 6 inch",
//   "6 - 9 inch",
//   "9 - 12 inch",
//   "1 - 2 ft",
//   "2 - 3 ft",
//   "3 - 5 ft",
//   "5 - 8 ft",
//   "8 - 12 ft",
//   "12 - 18 ft",
//   "18 - 24 ft",
// ];

// export default function ProductDetails() {
//   const { id } = useParams();
//   const { data: product, isLoading, isError, error, refetch } = useProduct(id);
//   const { data: relatedData } = useProducts({
//     category: product?.category,
//     limit: 4,
//   });

//   const gallery = useMemo(() => {
//     const images = [];

//     if (product?.image) {
//       images.push(getFileUrl(product.image));
//     }

//     if (Array.isArray(product?.gallery)) {
//       images.push(...product.gallery.map(getFileUrl));
//     }

//     return images;
//   }, [product]);

//   const [activeImage, setActiveImage] = useState(0);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [isCustomSize, setIsCustomSize] = useState(false);
//   const [appliedCoupon, setAppliedCoupon] = useState(null);

//   // const { isWishlisted, toggleWishlist } = useWishlist();

//   // IMPORTANT: all hooks must run on every render.
//   // Use the route id as a fallback while the product is loading.
//   const productId = product?._id || product?.id || id;

//   const {
//     likeCount,
//     liked,
//     loading: likeLoading,
//     toggleLike,
//     refreshLikes,
//   } = useProductLike(productId);

//   const {
//     reviews,
//     loading: reviewsLoading,
//     submitting,
//     addReview,
//   } = useProductReviews(productId);

//   // Keep these returns AFTER every hook to avoid:
//   // "Rendered more hooks than during the previous render"
//   if (isLoading) return <Loader fullScreen label="Loading product..." />;
//   if (isError) return <ErrorState message={error?.message} onRetry={refetch} />;
//   if (!product) return <ErrorState message="Product not found." />;

//   //const wishlisted = isWishlisted(id);

//   const sizeText = isCustomSize
//     ? "a custom size (please advise on options up to 24 ft)"
//     : selectedSize
//     ? `size ${selectedSize}`
//     : null;

//   const whatsappMessage = sizeText
//     ? `Namaste, I'm interested in "${product.name}" (${SITE.name}) in ${sizeText}. Please share more details.`
//     : `Namaste, I'm interested in "${product.name}" (${SITE.name}). Please share more details.`;

//   const whatsappHref = `${SITE.social.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

//   const customCraftMessage = `Namaste, I'd like to enquire about a custom-crafted "${product.name}"-style Shivling — a bespoke size or design. Could you please guide me on options?`;
//   const customCraftHref = `${SITE.social.whatsapp}?text=${encodeURIComponent(customCraftMessage)}`;

//   const related = (relatedData?.products || relatedData?.data || relatedData || []).filter(
//     (p) => (p._id || p.id) !== id
//   );

//   return (
//     <>
//       <Seo title={product.name} description={product.description || `${product.name} — ${SITE.name}`} />

//       <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
//         {/* Background Blur */}
//         <div className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full bg-amber-200/30 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />
//         <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-orange-200/30 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />

//         <div className="container mx-auto max-w-7xl px-0 sm:px-5">
//           <Link
//             to={ROUTES.products}
//             className="mb-8 inline-flex items-center gap-3 rounded-full border border-orange-200 bg-white px-4 py-2.5 text-sm font-semibold text-orange-600 shadow-sm transition hover:-translate-x-1 hover:border-orange-400 hover:shadow-lg sm:mb-10 sm:px-5 sm:py-3"
//           >
//             <ArrowLeftOutlined aria-hidden="true" /> Back to products
//           </Link>

//           <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
//             {/* Gallery */}
//             <div className="rounded-[24px] border border-orange-100 p-6 shadow-[0_30px_80px_rgba(249,115,22,.10)] backdrop-blur-xl sm:rounded-[36px] sm:p-10">
//               <div className="overflow-hidden rounded-[18px] bg-stone-100 sm:rounded-[28px]">
//                 <img
//                   src={gallery[activeImage] || "https://placehold.co/800"}
//                   alt={product.name}
//                   className="h-[320px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[450px] lg:h-[600px]"
//                 />
//               </div>

//               {gallery.length > 1 && (
//                 <div className="mt-4 grid grid-cols-4 gap-3 p-2 sm:mt-6 sm:grid-cols-5 sm:gap-4 sm:p-0">
//                   {gallery.map((img, i) => (
//                     <button
//                       key={img + i}
//                       onClick={() => setActiveImage(i)}
//                       aria-label={`View image ${i + 1}`}
//                       aria-current={activeImage === i}
//                       className={`group overflow-hidden rounded-xl border-2 transition-all duration-300 sm:rounded-2xl ${
//                         activeImage === i
//                           ? "border-orange-500 shadow-lg"
//                           : "border-orange-100 hover:border-orange-300"
//                       }`}
//                     >
//                       <img
//                         src={img}
//                         alt=""
//                         className="aspect-square w-full rounded-lg object-cover transition duration-500 group-hover:scale-110 sm:rounded-xl"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               )}

//               {product.video && (
//                 <div className="mt-6 overflow-hidden rounded-[18px] border border-orange-100 shadow-lg sm:mt-8 sm:rounded-[28px]">
//                   <video
//                     src={getFileUrl(product.video)}
//                     controls
//                     className="h-[260px] w-full object-cover sm:h-[400px] lg:h-[500px]"
//                   />
//                 </div>
//               )}
//                  {/* Size selector */}
//               <div className="mt-6 rounded-2xl border border-orange-100 bg-white p-4 sm:mt-8 sm:rounded-3xl sm:p-5">
//                 <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
//                   Select a Size
//                 </h3>
//                 <p className="mt-1 text-xs text-gray-500 sm:text-sm">
//                   Handcrafted to order from 1 inch home-worship pieces up to 24 ft temple installations.
//                 </p>

//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {SIZE_OPTIONS.map((size) => (
//                     <button
//                       key={size}
//                       type="button"
//                       onClick={() => {
//                         setSelectedSize(size);
//                         setIsCustomSize(false);
//                       }}
//                       aria-pressed={selectedSize === size && !isCustomSize}
//                       className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${
//                         selectedSize === size && !isCustomSize
//                           ? "border-orange-500 bg-orange-500 text-white shadow-md"
//                           : "border-orange-200 bg-orange-50/60 text-orange-700 hover:border-orange-400"
//                       }`}
//                     >
//                       {size}
//                     </button>
//                   ))}

//                   <button
//                     type="button"
//                     onClick={() => {
//                       setIsCustomSize(true);
//                       setSelectedSize(null);
//                     }}
//                     aria-pressed={isCustomSize}
//                     className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${
//                       isCustomSize
//                         ? "border-orange-500 bg-orange-500 text-white shadow-md"
//                         : "border-dashed border-orange-300 bg-white text-orange-700 hover:border-orange-500"
//                     }`}
//                   >
//                     <ToolOutlined aria-hidden="true" />
//                     Custom Size
//                   </button>
//                 </div>

//                 {isCustomSize && (
//                   <p className="mt-3 rounded-xl bg-amber-50 p-3 text-xs leading-6 text-amber-800 sm:text-sm">
//                     We handcraft bespoke Shivlings to any dimension — from
//                     miniature 1-inch pieces to 24 ft temple centerpieces.
//                     Message our artisans below with your exact requirement
//                     and we'll guide you through material, timeline, and
//                     pricing.
//                   </p>
//                 )}
//               </div>

//               {Array.isArray(product.highlights) && product.highlights.length > 0 && (
//                 <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
//                   {product.highlights.map((item) => (
//                     <div
//                       key={item}
//                       className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-white p-4 shadow-sm sm:p-5"
//                     >
//                       <CheckCircleFilled className="text-lg text-orange-500 sm:text-xl" aria-hidden="true" />
//                       <span className="text-sm font-medium text-gray-700 sm:text-base">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
//                 <Button
//                   size="large"
//                   type="primary"
//                   icon={<WhatsAppOutlined />}
//                   href={whatsappHref}
//                   target="_blank"
//                   className="!h-11 !w-full !rounded-2xl !border-0 !bg-gradient-to-r !from-green-500 !to-emerald-600 !px-6 !font-semibold hover:!shadow-xl sm:!h-10 sm:!w-auto"
//                 >
//                   {selectedSize || isCustomSize ? "WhatsApp with Selection" : "WhatsApp"}
//                 </Button>

//                 {SITE.phoneRaw && (
//                   <Button
//                     size="large"
//                     icon={<PhoneOutlined />}
//                     href={`tel:${SITE.phoneRaw}`}
//                     className="!h-11 !w-full !rounded-2xl !border-orange-300 !px-6 !font-semibold hover:!border-orange-500 hover:!text-orange-600 sm:!h-10 sm:!w-auto"
//                   >
//                     Call Now
//                   </Button>
//                 )}
//               </div>

//               {/* Custom crafting CTA */}
//               <a
//                 href={customCraftHref}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-6 flex items-center gap-4 rounded-2xl border border-dashed border-orange-300 bg-orange-50/60 p-4 transition hover:border-orange-500 hover:bg-orange-50 sm:mt-8 sm:rounded-3xl sm:p-5"
//               >
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-lg text-white shadow-md sm:h-12 sm:w-12 sm:text-xl">
//                   <ToolOutlined aria-hidden="true" />
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-bold text-slate-900 sm:text-base">
//                     Need something fully custom?
//                   </h4>
//                   <p className="mt-0.5 text-xs text-gray-600 sm:text-sm">
//                     Talk to our artisans about a specially crafted Shivling —
//                     any size, finish, or design.
//                   </p>
//                 </div>
//               </a>

//               <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50/50 p-5 sm:mt-10 sm:rounded-3xl sm:p-6">
//                 <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
//                   {[
//                     "100% Authentic Product",
//                     "Premium Handcrafted Finish",
//                     "Secure Packaging",
//                     "Trusted Customer Support",
//                   ].map((item) => (
//                     <div key={item} className="flex items-center gap-3">
//                       <CheckCircleFilled className="text-orange-500" aria-hidden="true" />
//                       <span className="text-sm text-gray-700 sm:text-base">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//             </div>
            

//             {/* Info */}
//             <div className="rounded-[24px] border border-orange-100 p-6 shadow-[0_30px_80px_rgba(249,115,22,.10)] backdrop-blur-xl sm:rounded-[36px] sm:p-10">
//               <div className="flex items-start justify-between gap-3">
//                 {product.category && (
//                   <span className="inline-flex rounded-full bg-gradient-to-r from-orange-100 to-amber-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700 sm:px-5 sm:py-2 sm:tracking-[0.25em]">
//                     {product.category}
//                   </span>
//                 )}

//                 <div className="flex shrink-0 items-center gap-2">
                  
//                   <WishlistButton
//                     product={product}
//                     size="middle"
//                   />

//                   <ShareProduct
//                     url={typeof window !== "undefined" ? window.location.href : ""}
//                     title={product.name}
//                     className="!border-orange-100 !bg-white !shadow-sm"
//                   />
//                 </div>
//               </div>

//               <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
//                 {product.name}
//               </h1>

//               <div className="mt-5">
//                 <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 sm:tracking-[0.35em]">
//                   Starting From
//                 </p>
//                 <h2 className="mt-2 text-3xl font-bold text-orange-600 sm:text-4xl">
//                   {formatCurrency(product.price)}
//                 </h2>
//               </div>
//               <CouponApplyBox
//                 product={product}
//                 onApplied={setAppliedCoupon}
//               />

//               {product.description && (
//                 <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50/40 p-4 sm:rounded-3xl">
//                   <h3 className="mb-2 text-base font-semibold text-slate-900 sm:text-lg">Description</h3>
//                   <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
//                     {product.description}
//                   </p>
//                 </div>
//               )}

           
//             </div>
//           </div>
//           {/* =========================================================
//     REVIEWS
// ========================================================= */}

// <div className="mt-14 sm:mt-20">

//   <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

//     <div>
//       <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600">
//         Customer Reviews
//       </span>

//       <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
//         What Our Customers Say
//       </h2>

//       <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
//         Share your experience with this product.
//       </p>
//     </div>

//     <div className="flex items-center gap-3">

//       <div className="flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-amber-600">
//         <span className="font-bold">
//           {reviews?.length || 0}
//         </span>

//         <span className="text-sm">
//           Reviews
//         </span>
//       </div>

//     </div>
//   </div>

//   {/* Review Form + Reviews */}
//   <div className="grid gap-8 lg:grid-cols-[380px_1fr]">

//     {/* Review Form */}
//     <div className="h-fit rounded-3xl border border-orange-100 bg-white p-5 shadow-[0_20px_60px_rgba(249,115,22,.08)] sm:p-7">

//       <ProductReviewForm
//         onSubmit={addReview}
//         submitting={submitting}
//       />

//     </div>

//     {/* Review List */}
//     <div>
//       <ProductReviewList
//         reviews={reviews}
//         loading={reviewsLoading}
//       />
//     </div>

//   </div>

// </div>

//           {/* Related */}
//           {related.length > 0 && (
//             <div className="mt-14 sm:mt-20">
//               <h2 className="mb-6 text-xl font-bold text-stone-900 sm:mb-8 sm:text-2xl">
//                 You may also like
//               </h2>
//               <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
//                 {related.slice(0, 4).map((p) => (
//                   <ProductCard key={p._id || p.id} product={p} />
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }


import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "antd";
import {
  WhatsAppOutlined,
  PhoneOutlined,
  ArrowLeftOutlined,
  CheckCircleFilled,
  ToolOutlined,
} from "@ant-design/icons";

import Seo from "../../components/common/Seo";
import Loader from "../../components/common/Loader";
import ErrorState from "../../components/common/ErrorState";
import ShareProduct from "../../components/common/ShareProduct";
import { useProduct, useProducts } from "../../hooks/useProducts";
import { formatCurrency } from "../../utils/format";
import { SITE } from "../../config/constants";
import { ROUTES } from "../../config/routes";
import ProductCard from "../../components/cards/ProductCard";
import { getFileUrl } from "../../utils/fileUrl";
import { useWishlist } from "../../hooks/useWishlist";
import ProductLikeButton from "../../components/product/ProductLikeButton";
import WishlistButton from "../../components/product/WishlistButton";
import ProductStats from "../../components/product/ProductStats";
import ProductReviewForm from "../../components/product/ProductReviewForm";
import ProductReviewList from "../../components/product/ProductReviewList";
import useProductLike from "../../hooks/useProductLike";
import useProductReviews from "../../hooks/useProductReviews";
import CouponApplyBox from "../../components/coupon/CouponApplyBox";

// Standard size bands we can craft to order, from small home-worship
// pieces up to full temple installations. "Custom" opens a bespoke
// crafting conversation instead of a fixed size.
const SIZE_OPTIONS = [
  "1 - 3 inch",
  "3 - 6 inch",
  "6 - 9 inch",
  "9 - 12 inch",
  "1 - 2 ft",
  "2 - 3 ft",
  "3 - 5 ft",
  "5 - 8 ft",
  "8 - 12 ft",
  "12 - 18 ft",
  "18 - 24 ft",
];

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
  const [selectedSize, setSelectedSize] = useState(null);
  const [isCustomSize, setIsCustomSize] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  // const { isWishlisted, toggleWishlist } = useWishlist();

  // IMPORTANT: all hooks must run on every render.
  // Use the route id as a fallback while the product is loading.
  const productId = product?._id || product?.id || id;

  const {
    likeCount,
    liked,
    loading: likeLoading,
    toggleLike,
    refreshLikes,
  } = useProductLike(productId);

  const {
    reviews,
    loading: reviewsLoading,
    submitting,
    addReview,
  } = useProductReviews(productId);

  // Keep these returns AFTER every hook to avoid:
  // "Rendered more hooks than during the previous render"
  if (isLoading) return <Loader fullScreen label="Loading product..." />;
  if (isError) return <ErrorState message={error?.message} onRetry={refetch} />;
  if (!product) return <ErrorState message="Product not found." />;

  //const wishlisted = isWishlisted(id);

  const sizeText = isCustomSize
    ? "a custom size (please advise on options up to 24 ft)"
    : selectedSize
    ? `size ${selectedSize}`
    : null;

  const whatsappMessage = sizeText
    ? `Namaste, I'm interested in "${product.name}" (${SITE.name}) in ${sizeText}. Please share more details.`
    : `Namaste, I'm interested in "${product.name}" (${SITE.name}). Please share more details.`;

  const whatsappHref = `${SITE.social.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  const customCraftMessage = `Namaste, I'd like to enquire about a custom-crafted "${product.name}"-style Shivling — a bespoke size or design. Could you please guide me on options?`;
  const customCraftHref = `${SITE.social.whatsapp}?text=${encodeURIComponent(customCraftMessage)}`;

  const related = (relatedData?.products || relatedData?.data || relatedData || []).filter(
    (p) => (p._id || p.id) !== id
  );

  const trustFeatures = [
    "100% Authentic Product",
    "Premium Handcrafted Finish",
    "Secure Packaging",
    "Trusted Customer Support",
  ];

  return (
    <>
      <Seo title={product.name} description={product.description || `${product.name} — ${SITE.name}`} />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#FBF7EF] via-white to-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full bg-[#D4AF6A]/[0.07] blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#C9A227]/[0.06] blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />

        <div className="container mx-auto max-w-7xl px-0 sm:px-5">
          <Link
            to={ROUTES.products}
            className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#1C1A17] transition-all hover:-translate-x-1 hover:text-[#A8823C] sm:mb-10 sm:text-sm"
          >
            <ArrowLeftOutlined aria-hidden="true" /> Collection
          </Link>

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Gallery */}
            <div className="rounded-[4px] border border-[#1C1A17]/[0.06] bg-white p-6 shadow-[0_20px_60px_rgba(28,26,23,0.08)] sm:rounded-[8px] sm:p-10">
              <div className="overflow-hidden rounded-[4px] bg-[#F7F2E7] sm:rounded-[8px]">
                <img
                  src={gallery[activeImage] || "https://placehold.co/800"}
                  alt={product.name}
                  className="h-[320px] w-full object-cover transition duration-700 hover:scale-[1.04] sm:h-[450px] lg:h-[600px]"
                />
              </div>

              {gallery.length > 1 && (
                <div className="mt-4 grid grid-cols-4 gap-3 p-2 sm:mt-6 sm:grid-cols-5 sm:gap-4 sm:p-0">
                  {gallery.map((img, i) => (
                    <button
                      key={img + i}
                      onClick={() => setActiveImage(i)}
                      aria-label={`View image ${i + 1}`}
                      aria-current={activeImage === i}
                      className={`group overflow-hidden rounded-xl border-2 transition-all duration-300 sm:rounded-2xl ${
                        activeImage === i
                          ? "border-[#A8823C] shadow-sm"
                          : "border-[#1C1A17]/[0.08] hover:border-[#D4AF6A]/50"
                      }`}
                    >
                      <img
                        src={img}
                        alt=""
                        className="aspect-square w-full rounded-lg object-cover transition duration-500 group-hover:scale-105 sm:rounded-xl"
                      />
                    </button>
                  ))}
                </div>
              )}

              {product.video && (
                <div className="mt-6 overflow-hidden rounded-[4px] border border-[#1C1A17]/[0.06] sm:mt-8 sm:rounded-[8px]">
                  <video
                    src={getFileUrl(product.video)}
                    controls
                    className="h-[260px] w-full object-cover sm:h-[400px] lg:h-[500px]"
                  />
                </div>
              )}
                 {/* Size selector */}
              <div className="mt-6 rounded-sm border border-[#1C1A17]/[0.06] bg-[#FBF7EF] p-4 sm:mt-8 sm:rounded-md sm:p-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A8823C] sm:text-sm">
                  Available Sizes
                </h3>
                <p className="mt-2 text-xs text-[#6B6459] sm:text-sm">
                  Handcrafted to order from 1 inch home-worship pieces up to 24 ft temple installations.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {SIZE_OPTIONS.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => {
                        setSelectedSize(size);
                        setIsCustomSize(false);
                      }}
                      aria-pressed={selectedSize === size && !isCustomSize}
                      className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition sm:px-4 sm:py-2 sm:text-sm ${
                        selectedSize === size && !isCustomSize
                          ? "border-[#1C1A17] bg-[#1C1A17] text-[#F2E3C8]"
                          : "border-[#1C1A17]/15 bg-white text-[#4A453D] hover:border-[#A8823C]/50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={() => {
                      setIsCustomSize(true);
                      setSelectedSize(null);
                    }}
                    aria-pressed={isCustomSize}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition sm:px-4 sm:py-2 sm:text-sm ${
                      isCustomSize
                        ? "border-[#1C1A17] bg-[#1C1A17] text-[#F2E3C8]"
                        : "border-dashed border-[#D4AF6A]/50 bg-white text-[#A8823C] hover:border-[#A8823C]"
                    }`}
                  >
                    <ToolOutlined aria-hidden="true" />
                    Custom Size
                  </button>
                </div>

                {isCustomSize && (
                  <div className="mt-3 rounded-xl border border-dashed border-[#D4AF6A]/40 bg-white p-3 text-xs leading-6 text-[#6B6459] sm:text-sm">
                    <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A8823C]">
                      Bespoke Crafting
                    </span>
                    We handcraft bespoke Shivlings to any dimension — from
                    miniature 1-inch pieces to 24 ft temple centerpieces.
                    Message our artisans below with your exact requirement
                    and we'll guide you through material, timeline, and
                    pricing.
                  </div>
                )}
              </div>

              {Array.isArray(product.highlights) && product.highlights.length > 0 && (
                <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
                  {product.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5"
                    >
                      <CheckCircleFilled className="text-base text-[#A8823C]" aria-hidden="true" />
                      <span className="text-sm font-medium text-[#1C1A17] sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
                <Button
                  size="large"
                  type="primary"
                  icon={<WhatsAppOutlined />}
                  href={whatsappHref}
                  target="_blank"
                  className="!flex !h-11 !w-full !items-center !justify-center !gap-2 !rounded-2xl !border-none !bg-gradient-to-br !from-[#123524] !to-[#1A4A33] !px-6 !font-medium !text-[#F2E3C8] !shadow-none sm:!h-12 sm:!w-auto"
                >
                  {selectedSize || isCustomSize ? "WhatsApp with Selection" : "WhatsApp"}
                </Button>

                {SITE.phoneRaw && (
                  <Button
                    size="large"
                    icon={<PhoneOutlined />}
                    href={`tel:${SITE.phoneRaw}`}
                    className="!flex !h-11 !w-full !items-center !justify-center !gap-2 !rounded-2xl !border !border-[#1C1A17]/15 !px-6 !font-medium !text-[#1C1A17] !shadow-none hover:!border-[#A8823C]/50 hover:!text-[#A8823C] sm:!h-12 sm:!w-auto"
                  >
                    Call Now
                  </Button>
                )}
              </div>

              {/* Custom crafting CTA */}
              <a
                href={customCraftHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-4 rounded-sm border border-dashed border-[#D4AF6A]/40 bg-[#FBF7EF] p-4 transition hover:border-[#A8823C]/60 sm:mt-8 sm:rounded-md sm:p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#D4AF6A]/25 bg-white text-lg text-[#A8823C] sm:h-12 sm:w-12 sm:text-xl">
                  <ToolOutlined aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A8823C]">
                    Bespoke Crafting
                  </span>
                  <h4 className="mt-0.5 text-sm font-bold text-[#1C1A17] sm:text-base">
                    Need something fully custom?
                  </h4>
                  <p className="mt-0.5 text-xs text-[#6B6459] sm:text-sm">
                    Talk to our artisans about a specially crafted Shivling —
                    any size, finish, or design.
                  </p>
                </div>
              </a>

              <div className="mt-8 grid gap-3 border-t border-[#1C1A17]/[0.06] pt-6 sm:mt-10 sm:grid-cols-2 sm:gap-4">
                {trustFeatures.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircleFilled className="text-[#A8823C]" aria-hidden="true" />
                    <span className="text-sm text-[#4A453D] sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

            </div>


            {/* Info */}
            <div className="rounded-[4px] border border-[#1C1A17]/[0.06] bg-white p-6 shadow-[0_20px_60px_rgba(28,26,23,0.08)] sm:rounded-[8px] sm:p-10">
              <div className="flex items-start justify-between gap-3">
                {product.category && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4AF6A]/25 bg-[#A8823C]/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#A8823C] sm:px-5 sm:py-2">
                    {product.category}
                  </span>
                )}

                <div className="flex shrink-0 items-center gap-1">

                  <WishlistButton
                    product={product}
                    size="middle"
                  />

                  <ShareProduct
                    url={typeof window !== "undefined" ? window.location.href : ""}
                    title={product.name}
                  />
                </div>
              </div>

              <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-[#1C1A17] sm:text-4xl">
                {product.name}
              </h1>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A8377] sm:tracking-[0.25em]">
                  Starting From
                </p>
                <h2 className="mt-2 text-3xl font-bold text-[#1C1A17] sm:text-4xl">
                  {formatCurrency(product.price)}
                </h2>
              </div>
              <CouponApplyBox
                product={product}
                onApplied={setAppliedCoupon}
              />

              {product.description && (
                <div className="mt-6 border-t border-[#1C1A17]/[0.06] pt-6">
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#A8823C] sm:text-sm">About This Piece</h3>
                  <p className="text-sm leading-7 text-[#4A453D] sm:text-base sm:leading-8">
                    {product.description}
                  </p>
                </div>
              )}


            </div>
          </div>
          {/* =========================================================
    REVIEWS
========================================================= */}

<div className="mt-14 sm:mt-20">

  <div className="mb-8 flex flex-col gap-4 border-t border-[#1C1A17]/[0.06] pt-10 sm:flex-row sm:items-end sm:justify-between">

    <div>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A8823C]">
        Customer Journal
      </span>

      <h2 className="mt-2 text-2xl font-bold text-[#1C1A17] sm:text-3xl">
        What Collectors Are Saying
      </h2>

      <p className="mt-2 text-sm leading-6 text-[#6B6459] sm:text-base">
        Share your experience with this product.
      </p>
    </div>

    <div className="flex items-center gap-2 text-right">
      <span className="text-2xl font-bold text-[#A8823C]">
        {reviews?.length || 0}
      </span>
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A8377]">
        Reviews
      </span>
    </div>
  </div>

  {/* Review Form + Reviews */}
  <div className="grid gap-8 lg:grid-cols-[380px_1fr]">

    {/* Review Form */}
    <div className="h-fit rounded-3xl border border-[#1C1A17]/[0.06] bg-white p-5 shadow-[0_4px_20px_rgba(28,26,23,0.05)] sm:p-7">

      <ProductReviewForm
        onSubmit={addReview}
        submitting={submitting}
      />

    </div>

    {/* Review List */}
    <div>
      <ProductReviewList
        reviews={reviews}
        loading={reviewsLoading}
      />
    </div>

  </div>

</div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-14 border-t border-[#1C1A17]/[0.06] pt-10 sm:mt-20">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A8823C]">
                You May Also Like
              </span>
              <h2 className="mb-6 mt-2 text-xl font-bold text-[#1C1A17] sm:mb-8 sm:text-2xl">
                Curated pieces from the same collection
              </h2>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
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