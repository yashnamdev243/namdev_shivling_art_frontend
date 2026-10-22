// import { Link } from "react-router-dom";
// import { Button } from "antd";
// import { HeartOutlined, ArrowLeftOutlined } from "@ant-design/icons";
// import { motion } from "framer-motion";

// import Seo from "../../components/common/Seo";
// import ProductCard from "../../components/cards/ProductCard";
// import { useWishlist } from "../../hooks/useWishlist";
// import { ROUTES } from "../../config/routes";
// import { WISHLIST_CONTENT } from "../../config/content";
// import useAuth from "../../hooks/useAuth";
// import { useContent } from "../../context/LanguageContext";

// export default function Wishlist() {
//   const { items } = useWishlist();
//   const { isAuthenticated, loading: authLoading } = useAuth();
//   const t = useContent(WISHLIST_CONTENT);
//   if (!authLoading && !isAuthenticated) {
//     return (
//       <>
//         <Seo title="Your Wishlist" description="Login to access your personal wishlist." noIndex />
//         <section className="flex min-h-[60vh] items-center justify-center bg-amber-50 px-4 py-16">
//           <div className="max-w-md rounded-3xl bg-white p-8 text-center shadow-xl">
//             <HeartOutlined className="text-5xl text-orange-400" />
//             <h1 className="mt-4 text-2xl font-bold text-slate-900">Login to view your wishlist</h1>
//             <p className="mt-2 text-gray-500">Your wishlist is private to your account and syncs across devices after login.</p>
//             <Link to="/login" state={{ from: "/wishlist" }} className="mt-6 inline-block">
//               <Button type="primary" size="large" className="!rounded-full">Login / Create Account</Button>
//             </Link>
//           </div>
//         </section>
//       </>
//     );
//   }
//   return (
//     <>
//       <Seo
//         title="Your Wishlist"
//         description="Products you've saved for later."
//         noIndex
//       />

//       <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white py-12 sm:py-16 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
//         {/* Background Blur */}
//         <div className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full bg-amber-200/30 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />
//         <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-orange-200/30 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />

//         <div className="container mx-auto max-w-7xl px-0 sm:px-5">
//           <div className="mb-12 text-center sm:mb-14">
//             <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-xs font-semibold text-orange-700 sm:px-5 sm:text-sm">
//               {t.badge}
//             </span>
//             <p className="mt-2 text-sm text-green-500 sm:text-base font-medium">
//               {" "}
//               {/* {items.length > 0
//                 ? `${items.length} saved item${items.length > 1 ? "s" : ""}`
//                 : "Nothing saved yet"} */}
//               {items.length > 0 ? t.savedCount(items.length) : t.emptyCount}
//             </p>
//           </div>

//           {items.length === 0 ? (
//             <div className="flex flex-col items-center justify-center rounded-[24px] border border-dashed border-orange-200 bg-white/60 py-16 text-center sm:rounded-[32px] sm:py-24">
//               <HeartOutlined
//                 className="text-4xl text-orange-300 sm:text-5xl"
//                 aria-hidden="true"
//               />
//               <h2 className="mt-5 text-lg font-bold text-slate-900 sm:text-xl">
//                 {t.emptyTitle}
//               </h2>
//               <p className="mt-2 max-w-sm text-sm text-gray-500 sm:text-base">
//                 {t.emptyDescription}
//               </p>
//               <Link to={ROUTES.products} className="mt-6">
//                 <Button
//                   type="primary"
//                   size="large"
//                   icon={<ArrowLeftOutlined />}
//                   className="!h-11 !rounded-full !border-0 !bg-gradient-to-r !from-orange-500 !to-amber-500 !px-6 !font-semibold"
//                 >
//                   {t.browseButton}
//                 </Button>
//               </Link>
//             </div>
//           ) : (
//             <motion.div
//               initial="hidden"
//               animate="show"
//               variants={{
//                 hidden: {},
//                 show: { transition: { staggerChildren: 0.08 } },
//               }}
//               className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-3"
//             >
//               {items.map((product) => (
//                 <motion.div
//                   key={product._id || product.id}
//                   variants={{
//                     hidden: { opacity: 0, y: 30 },
//                     show: { opacity: 1, y: 0 },
//                   }}
//                 >
//                   <ProductCard product={product} />
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }



import { Link } from "react-router-dom";
import { Button } from "antd";
import { HeartOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

import Seo from "../../components/common/Seo";
import ProductCard from "../../components/cards/ProductCard";
import { useWishlist } from "../../hooks/useWishlist";
import { ROUTES } from "../../config/routes";
import { WISHLIST_CONTENT } from "../../config/content";
import useAuth from "../../hooks/useAuth";
import { useContent } from "../../context/LanguageContext";

export default function Wishlist() {
  const { items } = useWishlist();
  const { isAuthenticated, loading: authLoading } = useAuth();
  const t = useContent(WISHLIST_CONTENT);
  if (!authLoading && !isAuthenticated) {
    return (
      <>
        <Seo title="Your Wishlist" description="Login to access your personal wishlist." noIndex />
        <section className="flex min-h-[60vh] items-center justify-center bg-[#FBF7EF] px-4 py-16">
          <div className="max-w-md rounded-md border border-[#1C1A17]/[0.06] bg-white p-8 text-center shadow-[0_20px_60px_rgba(28,26,23,0.08)] sm:mt-10 mt-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF6A]/25 bg-[#A8823C]/[0.05] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A8823C]">
              Your Private Collection
            </span>
            <div className="mx-auto mt-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF6A]/25 bg-[#A8823C]/[0.06]">
              <HeartOutlined className="text-3xl text-[#A8823C]" />
            </div>
            <h1 className="mt-5 text-2xl font-bold text-[#1C1A17]">Login to view your wishlist</h1>
            <span className="mx-auto mt-3 block h-px w-10 bg-[#D4AF6A]/40" aria-hidden="true" />
            <p className="mt-4 text-[#6B6459]">Your wishlist is private to your account and syncs across devices after login.</p>
            <Link to="/login" state={{ from: "/wishlist" }} className="mt-7 inline-block">
              <Button
               // type="primary"
                size="large"
                className="!flex !h-12 !items-center !rounded-full !border-none !bg-[#1C1A17] !px-8 !font-medium !text-[#F2E3C8] !shadow-none transition-all duration-200 hover:!-translate-y-0.5 hover:!bg-[#2A2620]"
              >
                Login / Create Account
              </Button>
            </Link>
          </div>
        </section>
      </>
    );
  }
  return (
    <>
      <Seo
        title="Your Wishlist"
        description="Products you've saved for later."
        noIndex
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#FBF7EF] via-white to-white py-12 sm:py-16 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full bg-[#D4AF6A]/[0.07] blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#C9A227]/[0.06] blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />

        <div className="container mx-auto max-w-7xl px-0 sm:px-5">
          <div className="mb-12 text-center sm:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF6A]/25 bg-[#A8823C]/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#A8823C] sm:px-5 sm:text-sm">
              {t.badge}
            </span>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.1em] text-[#8A8377] sm:text-base">
              {items.length > 0 ? t.savedCount(items.length) : t.emptyCount}
            </p>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-[24px] border border-dashed border-[#D4AF6A]/30 bg-white/60 py-16 text-center sm:rounded-[32px] sm:py-24">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF6A]/25 bg-[#A8823C]/[0.06]">
                <HeartOutlined
                  className="text-3xl text-[#A8823C]"
                  aria-hidden="true"
                />
              </div>
              <h2 className="mt-6 text-lg font-bold text-[#1C1A17] sm:text-xl">
                {t.emptyTitle}
              </h2>
              <p className="mt-2 max-w-sm text-sm text-[#6B6459] sm:text-base">
                {t.emptyDescription}
              </p>
              <Link to={ROUTES.products} className="mt-7 group">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowLeftOutlined />}
                  className="!flex !h-11 !items-center !rounded-full !border-none !bg-[#1C1A17] !px-6 !font-medium !text-[#F2E3C8] !shadow-none transition-all duration-200 hover:!-translate-y-0.5 hover:!bg-[#2A2620]"
                >
                  {t.browseButton}
                </Button>
              </Link>
            </div>
          ) : (
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
              className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-3"
            >
              {items.map((product) => (
                <motion.div
                  key={product._id || product.id}
                  variants={{
                    hidden: { opacity: 0, y: 26 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}