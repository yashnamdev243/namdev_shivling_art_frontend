// import { Link } from "react-router-dom";
// import { Card, Progress, Button, Avatar, Tag, Empty, Spin } from "antd";
// import { motion } from "framer-motion";
// import { useQuery } from "@tanstack/react-query";

// import {
//   FiPackage,
//   FiGrid,
//   FiAlertTriangle,
//   FiPlus,
//   FiArrowRight,
//   FiHeart,
//   FiThumbsUp,
//   FiMessageSquare,
// } from "react-icons/fi";
// import {
//   AppstoreOutlined,
//   PlusOutlined,
//   PercentageOutlined,
// } from "@ant-design/icons";

// import Seo from "../../components/common/Seo";
// import Loader from "../../components/common/Loader";
// import AdminHeader from "../../components/admin/AdminHeader";
// import StatCard from "../../components/admin/StatCard";

// import { useDashboardStats } from "../../hooks/useDashboardStats";
// import { useProducts } from "../../hooks/useProducts";
// import adminUserService from "../../services/adminUserService";
// import adminReviewService from "../../services/adminReviewService";
// import adminTrackingService from "../../services/adminTrackingService";
// import couponService from "../../services/couponService";

// import { ROUTES } from "../../config/routes";
// import { formatCurrency } from "../../utils/format";
// import { FILE_BASE_URL } from "../../config/api";

// const ACTION_META = {
//   LOGIN: { label: "Logged in", color: "green" },
//   LOGOUT: { label: "Logged out", color: "default" },
//   REGISTER: { label: "Registered", color: "blue" },
//   LIKE_ADD: { label: "Liked a product", color: "magenta" },
//   LIKE_REMOVE: { label: "Removed a like", color: "default" },
//   WISHLIST_ADD: { label: "Added to wishlist", color: "volcano" },
//   WISHLIST_REMOVE: { label: "Removed from wishlist", color: "default" },
//   REVIEW_CREATE: { label: "Wrote a review", color: "purple" },
//   COUPON_APPLY: { label: "Applied a coupon", color: "gold" },
// };

// const statCards = (stats) => [
//   {
//     title: "Products",
//     value: stats?.totalProducts || 0,
//     icon: <FiPackage size={22} />,
//     color: "from-blue-500 to-indigo-600",
//     link: ROUTES.adminProducts,
//   },
//   {
//     title: "Categories",
//     value: stats?.totalCategories || 0,
//     icon: <FiGrid size={22} />,
//     color: "from-amber-500 to-orange-500",
//     link: ROUTES.adminCategories,
//   },
//   {
//     title: "Out of Stock",
//     value: stats?.outOfStock || 0,
//     icon: <FiAlertTriangle size={22} />,
//     color: "from-red-500 to-pink-500",
//     link: ROUTES.adminProducts,
//     warn: stats?.outOfStock > 0,
//   },
// ];

// export default function Dashboard() {
//   const { data: stats, isLoading } = useDashboardStats();

//   const { data: productsData, isLoading: loadingProducts } = useProducts({
//     limit: 5,
//   });
//   const products =
//     productsData?.products || productsData?.data || productsData || [];

//   const { data: activityData, isLoading: activityLoading } = useQuery({
//     queryKey: ["dashboard-activity"],
//     queryFn: () => adminUserService.activity({ limit: 6 }),
//   });
//   const activities = activityData?.activities || [];

//   const { data: reviewsData, isLoading: reviewsLoading } = useQuery({
//     queryKey: ["dashboard-reviews"],
//     queryFn: () => adminReviewService.list({ status: "pending", limit: 50 }),
//   });
//   const pendingReviews = reviewsData?.reviews || [];

//   const { data: likesData } = useQuery({
//     queryKey: ["dashboard-likes"],
//     queryFn: () => adminTrackingService.likes({ limit: 200 }),
//   });
//   const totalLikes = likesData?.likes?.length || 0;

//   const { data: wishlistData } = useQuery({
//     queryKey: ["dashboard-wishlists"],
//     queryFn: () => adminTrackingService.wishlists({ limit: 200 }),
//   });
//   const totalWishlisted = wishlistData?.wishlists?.length || 0;

//   const { data: redemptionData, isLoading: redemptionLoading } = useQuery({
//     queryKey: ["dashboard-redemptions"],
//     queryFn: couponService.adminRedemptions,
//   });
//   const recentRedemptions = (redemptionData?.redemptions || []).slice(0, 5);

//   if (isLoading) return <Loader />;

//   const stockHealthPercent = stats?.totalProducts
//     ? Math.round(
//         ((stats.totalProducts - stats.outOfStock) / stats.totalProducts) * 100,
//       )
//     : 0;

//   return (
//     <>
//       <Seo title="Dashboard" />

//       <AdminHeader
//         title="Dashboard"
//         description="Manage your products & inventory"
//         actions={
//           <Link to={ROUTES.adminProducts}>
//             <Button
//               type="primary"
//               size="large"
//               icon={
//                 <span
//                   className="
//       flex h-5 w-5 items-center justify-center
//       rounded-lg bg-white/10
//       transition-colors duration-200
//       group-hover:bg-white/15
//     "
//                 >
//                   <PlusOutlined size={17} strokeWidth={2.5} />
//                 </span>
//               }
//               className=" group
//     !flex !h-8 !items-center !gap-2.5
//     !rounded-xl !border-0
//     !bg-slate-900
//     !px-3
//     !font-semibold !text-white
//     !shadow-lg !shadow-slate-900/15
//     transition-all duration-200
//     hover:!-translate-y-0.5
//     hover:!bg-orange-600
//     hover:!shadow-xl hover:!shadow-orange-600/20
//     active:!translate-y-0"
//             >
//               Add Product
//             </Button>
//           </Link>
//         }
//       />

//       {/* Welcome banner */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="mb-6 overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-6 text-white sm:mb-8 sm:p-8"
//       >
//         <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
//           <div>
//             <h2 className="text-2xl font-bold sm:text-3xl">Welcome Back 👋</h2>
//             <p className="mt-2 text-sm opacity-90 sm:text-base">
//               Manage products, categories and inventory easily.
//             </p>
//           </div>
//           <Avatar
//             size={64}
//             className="hidden shrink-0 !bg-white text-orange-600 sm:flex"
//             icon={<AppstoreOutlined />}
//           />
//         </div>
//       </motion.div>

//       {/* Primary stats */}
//       <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
//         {statCards(stats).map((item, i) => (
//           <motion.div
//             key={item.title}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.08 }}
//           >
//             <Link to={item.link}>
//               <StatCard
//                 label={item.title}
//                 value={item.value}
//                 icon={
//                   <div
//                     className={`rounded-xl bg-gradient-to-r ${item.color} p-3 text-white`}
//                   >
//                     {item.icon}
//                   </div>
//                 }
//                 highlight={item.warn}
//               />
//             </Link>
//           </motion.div>
//         ))}
//       </div>

//       {/* Engagement stats — new */}
//       <div className="mt-4 grid gap-4 sm:mt-6 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
//         <EngagementCard
//           to="/admin/reviews"
//           label="Pending Reviews"
//           value={reviewsLoading ? "…" : pendingReviews.length}
//           icon={<FiMessageSquare size={20} />}
//           color="from-purple-500 to-fuchsia-600"
//           badge={pendingReviews.length > 0 ? "Needs attention" : null}
//         />
//         <EngagementCard
//           to="/admin/likes"
//           label="Total Likes"
//           value={totalLikes}
//           icon={<FiThumbsUp size={20} />}
//           color="from-pink-500 to-rose-500"
//         />
//         <EngagementCard
//           to="/admin/wishlists"
//           label="Wishlisted Items"
//           value={totalWishlisted}
//           icon={<FiHeart size={20} />}
//           color="from-orange-500 to-red-500"
//         />
//         <EngagementCard
//           to="/admin/coupons"
//           label="Coupon Redemptions"
//           value={
//             redemptionLoading ? "…" : redemptionData?.redemptions?.length || 0
//           }
//           icon={<PercentageOutlined style={{ fontSize: 20 }} />}
//           color="from-amber-500 to-yellow-500"
//         />
//       </div>

//       {/* Main grid */}
//       <div className="mt-6 grid gap-6 sm:mt-8 xl:grid-cols-3">
//         {/* Recently added products */}
//         <Card
//           className="!rounded-3xl xl:col-span-2"
//           title="Recently Added Products"
//           extra={
//             <Link
//               to={ROUTES.adminProducts}
//               className="flex items-center gap-1 text-sm font-medium text-orange-600"
//             >
//               View All <FiArrowRight />
//             </Link>
//           }
//         >
//           {loadingProducts ? (
//             <div className="flex justify-center py-10">
//               <Spin />
//             </div>
//           ) : products.length === 0 ? (
//             <Empty description="No products found" />
//           ) : (
//             <div className="space-y-3">
//               {products.map((item) => (
//                 <motion.div
//                   whileHover={{ scale: 1.01 }}
//                   key={item.id}
//                   className="flex items-center gap-4 rounded-2xl border border-orange-50 p-3 transition hover:border-orange-200 hover:shadow-md"
//                 >
//                   <img
//                     src={
//                       item.image
//                         ? `${FILE_BASE_URL}/uploads/${item.image}`
//                         : "https://placehold.co/80"
//                     }
//                     className="h-14 w-14 shrink-0 rounded-xl object-cover sm:h-16 sm:w-16"
//                     alt=""
//                   />
//                   <div className="min-w-0 flex-1">
//                     <h4 className="truncate font-semibold text-slate-900">
//                       {item.name}
//                     </h4>
//                     <p className="truncate text-sm text-gray-500">
//                       {item.category}
//                     </p>
//                   </div>
//                   <div className="shrink-0 text-right">
//                     <div className="font-bold text-amber-600">
//                       {formatCurrency(item.price)}
//                     </div>
//                     <span
//                       className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
//                         item.stock > 0
//                           ? "bg-green-100 text-green-600"
//                           : "bg-red-100 text-red-600"
//                       }`}
//                     >
//                       {item.stock > 0
//                         ? `${item.stock} in stock`
//                         : "Out of stock"}
//                     </span>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </Card>

//         {/* Right column */}
//         <div className="space-y-6">
//           <Card title="Inventory Health" className="!rounded-3xl">
//             <Progress
//               percent={stockHealthPercent}
//               strokeColor={{ "0%": "#f97316", "100%": "#16a34a" }}
//             />
//             <p className="mt-3 text-sm text-gray-500">
//               {stockHealthPercent}% of your catalogue is currently in stock.
//             </p>
//           </Card>

//           <Card title="Quick Actions" className="!rounded-3xl">
//             <div className="flex flex-col gap-3">
//               <Link to={ROUTES.adminProducts}>
//                 <Button
//                   icon={<FiPlus />}
//                   block
//                   size="large"
//                   type="primary"
//                   className="!rounded-xl"
//                 >
//                   Add Product
//                 </Button>
//               </Link>
//               <Link to="/admin/reviews">
//                 <Button
//                   icon={<FiMessageSquare />}
//                   block
//                   size="large"
//                   className="!rounded-xl"
//                 >
//                   Moderate Reviews{" "}
//                   {pendingReviews.length > 0 && `(${pendingReviews.length})`}
//                 </Button>
//               </Link>
//               <Link to="/admin/coupons">
//                 <Button
//                   icon={<PercentageOutlined />}
//                   block
//                   size="large"
//                   className="!rounded-xl"
//                 >
//                   Manage Coupons
//                 </Button>
//               </Link>
//             </div>
//           </Card>
//         </div>
//       </div>

//       {/* Recent activity + recent coupon usage */}
//       <div className="mt-6 grid gap-6 sm:mt-8 xl:grid-cols-2">
//         <Card
//           title="Recent Activity"
//           className="!rounded-3xl"
//           extra={
//             <Link
//               to="/admin/activity"
//               className="flex items-center gap-1 text-sm font-medium text-orange-600"
//             >
//               View All <FiArrowRight />
//             </Link>
//           }
//         >
//           {activityLoading ? (
//             <div className="flex justify-center py-10">
//               <Spin />
//             </div>
//           ) : activities.length === 0 ? (
//             <Empty description="No activity yet" />
//           ) : (
//             <div className="space-y-3">
//               {activities.map((item) => {
//                 const meta = ACTION_META[item.action] || {
//                   label: item.action,
//                   color: "default",
//                 };
//                 return (
//                   <div
//                     key={item.id}
//                     className="flex items-center justify-between gap-3 rounded-xl border border-orange-50 px-3 py-2.5"
//                   >
//                     <div className="min-w-0">
//                       <p className="truncate text-sm font-semibold text-slate-900">
//                         {item.user?.name || "Unknown"}
//                       </p>
//                       <p className="truncate text-xs text-gray-500">
//                         {item.product?.name || item.user?.email || ""}
//                       </p>
//                     </div>
//                     <div className="flex shrink-0 flex-col items-end gap-1">
//                       <Tag color={meta.color} className="!m-0">
//                         {meta.label}
//                       </Tag>
//                       <span className="text-[11px] text-gray-400">
//                         {item.createdAt
//                           ? new Date(item.createdAt).toLocaleTimeString(
//                               "en-IN",
//                               { hour: "2-digit", minute: "2-digit" },
//                             )
//                           : ""}
//                       </span>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </Card>

//         <Card
//           title="Recent Coupon Usage"
//           className="!rounded-3xl"
//           extra={
//             <Link
//               to="/admin/coupons"
//               className="flex items-center gap-1 text-sm font-medium text-orange-600"
//             >
//               View All <FiArrowRight />
//             </Link>
//           }
//         >
//           {redemptionLoading ? (
//             <div className="flex justify-center py-10">
//               <Spin />
//             </div>
//           ) : recentRedemptions.length === 0 ? (
//             <Empty description="No coupons redeemed yet" />
//           ) : (
//             <div className="space-y-3">
//               {recentRedemptions.map((r) => (
//                 <div
//                   key={r.id}
//                   className="flex items-center justify-between gap-3 rounded-xl border border-orange-50 px-3 py-2.5"
//                 >
//                   <div className="min-w-0">
//                     <p className="truncate text-sm font-semibold text-slate-900">
//                       {r.user?.name || "Customer"}
//                     </p>
//                     <p className="truncate text-xs text-gray-500">
//                       {r.coupon?.code || "—"}
//                     </p>
//                   </div>
//                   <div className="shrink-0 text-right">
//                     <p className="text-sm font-bold text-green-600">
//                       -₹{Number(r.discount_amount || 0).toLocaleString("en-IN")}
//                     </p>
//                     <p className="text-[11px] text-gray-400">
//                       {r.createdAt
//                         ? new Date(r.createdAt).toLocaleDateString("en-IN", {
//                             day: "2-digit",
//                             month: "short",
//                           })
//                         : ""}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </Card>
//       </div>
//     </>
//   );
// }

// function EngagementCard({ to, label, value, icon, color, badge }) {
//   return (
//     <Link to={to}>
//       <motion.div
//         whileHover={{ y: -3 }}
//         className="flex items-center gap-4 rounded-2xl border border-orange-100 bg-white p-4 shadow-sm transition hover:shadow-md sm:rounded-3xl sm:p-5"
//       >
//         <div
//           className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white sm:h-12 sm:w-12`}
//         >
//           {icon}
//         </div>
//         <div className="min-w-0">
//           <p className="truncate text-xs font-medium uppercase tracking-wide text-gray-500">
//             {label}
//           </p>
//           <p className="text-xl font-bold text-slate-900 sm:text-2xl">
//             {value}
//           </p>
//           {badge && (
//             <span className="mt-0.5 inline-block text-[11px] font-semibold text-orange-600">
//               {badge}
//             </span>
//           )}
//         </div>
//       </motion.div>
//     </Link>
//   );
// }


import { Link } from "react-router-dom";
import { Card, Progress, Button, Avatar, Tag, Empty, Spin } from "antd";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

import {
  FiPackage,
  FiGrid,
  FiAlertTriangle,
  FiPlus,
  FiArrowRight,
  FiHeart,
  FiThumbsUp,
  FiMessageSquare,
} from "react-icons/fi";
import {
  AppstoreOutlined,
  PlusOutlined,
  PercentageOutlined,
} from "@ant-design/icons";

import Seo from "../../components/common/Seo";
import Loader from "../../components/common/Loader";
import AdminHeader from "../../components/admin/AdminHeader";
import StatCard from "../../components/admin/StatCard";

import { useDashboardStats } from "../../hooks/useDashboardStats";
import { useProducts } from "../../hooks/useProducts";
import adminUserService from "../../services/adminUserService";
import adminReviewService from "../../services/adminReviewService";
import adminTrackingService from "../../services/adminTrackingService";
import couponService from "../../services/couponService";

import { ROUTES } from "../../config/routes";
import { formatCurrency } from "../../utils/format";
import { FILE_BASE_URL } from "../../config/api";

const ACTION_META = {
  LOGIN: { label: "Logged in", color: "green" },
  LOGOUT: { label: "Logged out", color: "default" },
  REGISTER: { label: "Registered", color: "blue" },
  LIKE_ADD: { label: "Liked a product", color: "magenta" },
  LIKE_REMOVE: { label: "Removed a like", color: "default" },
  WISHLIST_ADD: { label: "Added to wishlist", color: "volcano" },
  WISHLIST_REMOVE: { label: "Removed from wishlist", color: "default" },
  REVIEW_CREATE: { label: "Wrote a review", color: "purple" },
  COUPON_APPLY: { label: "Applied a coupon", color: "gold" },
};

const statCards = (stats) => [
  {
    title: "Products",
    value: stats?.totalProducts || 0,
    icon: <FiPackage size={22} />,
    color: "from-slate-600 to-slate-800",
    link: ROUTES.adminProducts,
  },
  {
    title: "Categories",
    value: stats?.totalCategories || 0,
    icon: <FiGrid size={22} />,
    color: "from-[#C6A66B] to-[#A8823C]",
    link: ROUTES.adminCategories,
  },
  {
    title: "Out of Stock",
    value: stats?.outOfStock || 0,
    icon: <FiAlertTriangle size={22} />,
    color: "from-[#9B4444] to-[#7A3636]",
    link: ROUTES.adminProducts,
    warn: stats?.outOfStock > 0,
  },
];

export default function Dashboard() {
  const { data: stats, isLoading } = useDashboardStats();

  const { data: productsData, isLoading: loadingProducts } = useProducts({
    limit: 5,
  });
  const products =
    productsData?.products || productsData?.data || productsData || [];

  const { data: activityData, isLoading: activityLoading } = useQuery({
    queryKey: ["dashboard-activity"],
    queryFn: () => adminUserService.activity({ limit: 6 }),
  });
  const activities = activityData?.activities || [];

  const { data: reviewsData, isLoading: reviewsLoading } = useQuery({
    queryKey: ["dashboard-reviews"],
    queryFn: () => adminReviewService.list({ status: "pending", limit: 50 }),
  });
  const pendingReviews = reviewsData?.reviews || [];

  const { data: likesData } = useQuery({
    queryKey: ["dashboard-likes"],
    queryFn: () => adminTrackingService.likes({ limit: 200 }),
  });
  const totalLikes = likesData?.likes?.length || 0;

  const { data: wishlistData } = useQuery({
    queryKey: ["dashboard-wishlists"],
    queryFn: () => adminTrackingService.wishlists({ limit: 200 }),
  });
  const totalWishlisted = wishlistData?.wishlists?.length || 0;

  const { data: redemptionData, isLoading: redemptionLoading } = useQuery({
    queryKey: ["dashboard-redemptions"],
    queryFn: couponService.adminRedemptions,
  });
  const recentRedemptions = (redemptionData?.redemptions || []).slice(0, 5);

  if (isLoading) return <Loader />;

  const stockHealthPercent = stats?.totalProducts
    ? Math.round(
        ((stats.totalProducts - stats.outOfStock) / stats.totalProducts) * 100,
      )
    : 0;

  return (
    <>
      <Seo title="Dashboard" />

      <AdminHeader
        title="Dashboard"
        description="Manage your products & inventory"
        actions={
          <Link to={ROUTES.adminProducts}>
            <Button
              type="primary"
              size="large"
              icon={
                <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-white/10 transition-colors duration-200 group-hover:bg-white/15">
                  <PlusOutlined size={17} strokeWidth={2.5} />
                </span>
              }
              className="group !flex !h-11 !items-center !gap-2.5 !rounded-xl !border-0 !bg-[#1C1A17] !px-4 !font-medium !text-[#F2E3C8] !shadow-none transition-all duration-200 hover:!-translate-y-0.5 hover:!bg-[#2A2620] active:!translate-y-0"
            >
              Add Product
            </Button>
          </Link>
        }
      />

      {/* Welcome banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mb-6 overflow-hidden rounded-3xl bg-[#1C1A17] p-6 text-white sm:mb-8 sm:p-8"
      >
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#D4AF6A]/[0.08] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF6A]/30 to-transparent" />

        <div className="relative flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Welcome Back 👋</h2>
            <p className="mt-2 text-sm text-white/60 sm:text-base">
              Manage products, categories and inventory easily.
            </p>
          </div>
          <Avatar
            size={64}
            className="hidden shrink-0 !border !border-[#D4AF6A]/30 !bg-[#D4AF6A]/[0.08] !text-[#D4AF6A] sm:flex"
            icon={<AppstoreOutlined />}
          />
        </div>
      </motion.div>

      {/* Primary stats */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {statCards(stats).map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <Link to={item.link}>
              <StatCard
                label={item.title}
                value={item.value}
                icon={
                  <div
                    className={`rounded-xl bg-gradient-to-r ${item.color} p-3 text-white`}
                  >
                    {item.icon}
                  </div>
                }
                highlight={item.warn}
              />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Engagement stats — new */}
      <div className="mt-4 grid gap-4 sm:mt-6 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
        <EngagementCard
          to="/admin/reviews"
          label="Pending Reviews"
          value={reviewsLoading ? "…" : pendingReviews.length}
          icon={<FiMessageSquare size={20} />}
          color="from-[#6B5B8C] to-[#4D3F66]"
          badge={pendingReviews.length > 0 ? "Needs attention" : null}
        />
        <EngagementCard
          to="/admin/likes"
          label="Total Likes"
          value={totalLikes}
          icon={<FiThumbsUp size={20} />}
          color="from-[#B06A7A] to-[#8C4A58]"
        />
        <EngagementCard
          to="/admin/wishlists"
          label="Wishlisted Items"
          value={totalWishlisted}
          icon={<FiHeart size={20} />}
          color="from-[#9B4444] to-[#7A3636]"
        />
        <EngagementCard
          to="/admin/coupons"
          label="Coupon Redemptions"
          value={
            redemptionLoading ? "…" : redemptionData?.redemptions?.length || 0
          }
          icon={<PercentageOutlined style={{ fontSize: 20 }} />}
          color="from-[#C6A66B] to-[#A8823C]"
        />
      </div>

      {/* Main grid */}
      <div className="mt-6 grid gap-6 sm:mt-8 xl:grid-cols-3">
        {/* Recently added products */}
        <Card
          className="!rounded-3xl !border-[#1C1A17]/[0.06] !shadow-[0_4px_20px_rgba(28,26,23,0.04)] xl:col-span-2"
          title="Recently Added Products"
          extra={
            <Link
              to={ROUTES.adminProducts}
              className="flex items-center gap-1 text-sm font-medium text-[#A8823C]"
            >
              View All <FiArrowRight />
            </Link>
          }
        >
          {loadingProducts ? (
            <div className="flex justify-center py-10">
              <Spin />
            </div>
          ) : products.length === 0 ? (
            <Empty description="No products found" />
          ) : (
            <div className="space-y-3">
              {products.map((item) => (
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  key={item.id}
                  className="flex items-center gap-4 rounded-2xl border border-[#1C1A17]/[0.06] p-3 transition-colors duration-200 hover:border-[#D4AF6A]/40"
                >
                  <img
                    src={
                      item.image
                        ? `${FILE_BASE_URL}/uploads/${item.image}`
                        : "https://placehold.co/80"
                    }
                    className="h-14 w-14 shrink-0 rounded-xl object-cover sm:h-16 sm:w-16"
                    alt=""
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="truncate font-semibold text-[#1C1A17]">
                      {item.name}
                    </h4>
                    <p className="truncate text-sm text-[#8A8377]">
                      {item.category}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="font-bold text-[#A8823C]">
                      {formatCurrency(item.price)}
                    </div>
                    <span
                      className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        item.stock > 0
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-[#9B4444]/10 text-[#9B4444]"
                      }`}
                    >
                      {item.stock > 0
                        ? `${item.stock} in stock`
                        : "Out of stock"}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </Card>

        {/* Right column */}
        <div className="space-y-6">
          <Card title="Inventory Health" className="!rounded-3xl !border-[#1C1A17]/[0.06] !shadow-[0_4px_20px_rgba(28,26,23,0.04)]">
            <Progress
              percent={stockHealthPercent}
              strokeColor={{ "0%": "#A8823C", "100%": "#16a34a" }}
            />
            <p className="mt-3 text-sm text-[#6B6459]">
              {stockHealthPercent}% of your catalogue is currently in stock.
            </p>
          </Card>

          <Card title="Quick Actions" className="!rounded-3xl !border-[#1C1A17]/[0.06] !shadow-[0_4px_20px_rgba(28,26,23,0.04)]">
            <div className="flex flex-col gap-3">
              <Link to={ROUTES.adminProducts}>
                <Button
                  icon={<FiPlus />}
                  block
                  size="large"
                  type="primary"
                  className="!flex !items-center !rounded-xl !border-0 !bg-[#1C1A17] !font-medium !text-[#F2E3C8] !shadow-none hover:!bg-[#2A2620]"
                >
                  Add Product
                </Button>
              </Link>
              <Link to="/admin/reviews">
                <Button
                  icon={<FiMessageSquare />}
                  block
                  size="large"
                  className="!flex !items-center !rounded-xl !border-[#1C1A17]/12 !font-medium !text-[#1C1A17] hover:!border-[#A8823C]/40 hover:!text-[#A8823C]"
                >
                  Moderate Reviews{" "}
                  {pendingReviews.length > 0 && `(${pendingReviews.length})`}
                </Button>
              </Link>
              <Link to="/admin/coupons">
                <Button
                  icon={<PercentageOutlined />}
                  block
                  size="large"
                  className="!flex !items-center !rounded-xl !border-[#1C1A17]/12 !font-medium !text-[#1C1A17] hover:!border-[#A8823C]/40 hover:!text-[#A8823C]"
                >
                  Manage Coupons
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>

      {/* Recent activity + recent coupon usage */}
      <div className="mt-6 grid gap-6 sm:mt-8 xl:grid-cols-2">
        <Card
          title="Recent Activity"
          className="!rounded-3xl !border-[#1C1A17]/[0.06] !shadow-[0_4px_20px_rgba(28,26,23,0.04)]"
          extra={
            <Link
              to="/admin/activity"
              className="flex items-center gap-1 text-sm font-medium text-[#A8823C]"
            >
              View All <FiArrowRight />
            </Link>
          }
        >
          {activityLoading ? (
            <div className="flex justify-center py-10">
              <Spin />
            </div>
          ) : activities.length === 0 ? (
            <Empty description="No activity yet" />
          ) : (
            <div className="space-y-3">
              {activities.map((item) => {
                const meta = ACTION_META[item.action] || {
                  label: item.action,
                  color: "default",
                };
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-3 rounded-xl border border-[#1C1A17]/[0.06] px-3 py-2.5"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-[#1C1A17]">
                        {item.user?.name || "Unknown"}
                      </p>
                      <p className="truncate text-xs text-[#8A8377]">
                        {item.product?.name || item.user?.email || ""}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-1">
                      <Tag color={meta.color} className="!m-0">
                        {meta.label}
                      </Tag>
                      <span className="text-[11px] text-[#8A8377]">
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleTimeString(
                              "en-IN",
                              { hour: "2-digit", minute: "2-digit" },
                            )
                          : ""}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </Card>

        <Card
          title="Recent Coupon Usage"
          className="!rounded-3xl !border-[#1C1A17]/[0.06] !shadow-[0_4px_20px_rgba(28,26,23,0.04)]"
          extra={
            <Link
              to="/admin/coupons"
              className="flex items-center gap-1 text-sm font-medium text-[#A8823C]"
            >
              View All <FiArrowRight />
            </Link>
          }
        >
          {redemptionLoading ? (
            <div className="flex justify-center py-10">
              <Spin />
            </div>
          ) : recentRedemptions.length === 0 ? (
            <Empty description="No coupons redeemed yet" />
          ) : (
            <div className="space-y-3">
              {recentRedemptions.map((r) => (
                <div
                  key={r.id}
                  className="flex items-center justify-between gap-3 rounded-xl border border-[#1C1A17]/[0.06] px-3 py-2.5"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[#1C1A17]">
                      {r.user?.name || "Customer"}
                    </p>
                    <p className="truncate text-xs text-[#8A8377]">
                      {r.coupon?.code || "—"}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-sm font-bold text-emerald-700">
                      -₹{Number(r.discount_amount || 0).toLocaleString("en-IN")}
                    </p>
                    <p className="text-[11px] text-[#8A8377]">
                      {r.createdAt
                        ? new Date(r.createdAt).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                          })
                        : ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </>
  );
}

function EngagementCard({ to, label, value, icon, color, badge }) {
  return (
    <Link to={to}>
      <motion.div
        whileHover={{ y: -3 }}
        className="flex items-center gap-4 rounded-2xl border border-[#1C1A17]/[0.06] bg-white p-4 shadow-[0_4px_20px_rgba(28,26,23,0.04)] transition-shadow duration-200 hover:shadow-[0_14px_36px_rgba(28,26,23,0.08)] sm:rounded-3xl sm:p-5"
      >
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white sm:h-12 sm:w-12`}
        >
          {icon}
        </div>
        <div className="min-w-0">
          <p className="truncate text-xs font-medium uppercase tracking-wide text-[#8A8377]">
            {label}
          </p>
          <p className="text-xl font-bold text-[#1C1A17] sm:text-2xl">
            {value}
          </p>
          {badge && (
            <span className="mt-0.5 inline-block text-[11px] font-semibold text-[#A8823C]">
              {badge}
            </span>
          )}
        </div>
      </motion.div>
    </Link>
  );
}