// import { lazy, Suspense } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import MainLayout from "../layouts/MainLayout";
// import AdminLayout from "../layouts/AdminLayout";
// import ScrollToTop from "../layouts/ScrollToTop";
// import ProtectedRoute from "../components/common/ProtectedRoute";

// const Home = lazy(() => import("../pages/Home/Home"));
// const About = lazy(() => import("../pages/About/About"));
// const Products = lazy(() => import("../pages/Products/Products"));
// const ProductDetails = lazy(() => import("../pages/Products/ProductDetails"));
// const Gallery = lazy(() => import("../pages/Gallery/Gallery"));
// const Contact = lazy(() => import("../pages/Contact/Contact"));
// const Wishlist = lazy(() => import("../pages/Products/Wishlist"));
// const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

// const Login = lazy(() => import("../pages/Auth/Login"));
// const Register = lazy(() => import("../pages/Auth/Register"));
// const AdminLogin = lazy(() => import("../pages/Auth/AdminLogin"));

// const Dashboard = lazy(() => import("../pages/Admin/Dashboard"));
// const ProductList = lazy(() => import("../pages/Admin/Products/ProductList"));
// const CategoryList = lazy(() => import("../pages/Admin/Categories/CategoryList"));
// const UserList = lazy(() => import("../pages/Admin/Users/UserList"));
// const ReviewList = lazy(() => import("../pages/Admin/Reviews/ReviewList"));
// const ActivityList = lazy(() => import("../pages/Admin/Activity/ActivityList"));
// const WishlistTracking = lazy(() => import("../pages/Admin/Wishlists/WishlistTracking"));
// const LikeTracking = lazy(() => import("../pages/Admin/Likes/LikeTracking"));
// const CouponList = lazy(() => import("../pages/Admin/Coupons/CouponList"));

// function RouteFallback() {
//   return (
//     <div className="flex min-h-[60vh] items-center justify-center">
//       <div className="h-10 w-10 animate-spin rounded-full border-4 border-orange-200 border-t-orange-500" />
//     </div>
//   );
// }

// export default function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <ScrollToTop />
//       <Suspense fallback={<RouteFallback />}>
//         <Routes>
//           <Route path="/" element={<MainLayout />}>
//             <Route index element={<Home />} />
//             <Route path="about" element={<About />} />
//             <Route path="products">
//               <Route index element={<Products />} />
//               <Route path=":id" element={<ProductDetails />} />
//             </Route>
//             <Route path="gallery" element={<Gallery />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="wishlist" element={<Wishlist />} />
//           </Route>

//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/admin-login" element={<AdminLogin />} />

//           <Route element={<ProtectedRoute />}>
//             <Route path="/admin" element={<AdminLayout />}>
//               <Route path="dashboard" element={<Dashboard />} />
//               <Route path="products" element={<ProductList />} />
//               <Route path="categories" element={<CategoryList />} />
//               <Route path="users" element={<UserList />} />
//               <Route path="reviews" element={<ReviewList />} />
//               <Route path="activity" element={<ActivityList />} />
//               <Route path="wishlists" element={<WishlistTracking />} />
//               <Route path="likes" element={<LikeTracking />} />
//               <Route path="coupons" element={<CouponList />} />
//             </Route>
//           </Route>

//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// }




import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import ScrollToTop from "../layouts/ScrollToTop";
import ProtectedRoute from "../components/common/ProtectedRoute";

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Products = lazy(() => import("../pages/Products/Products"));
const ProductDetails = lazy(() => import("../pages/Products/ProductDetails"));
const Gallery = lazy(() => import("../pages/Gallery/Gallery"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Wishlist = lazy(() => import("../pages/Products/Wishlist"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const Login = lazy(() => import("../pages/Auth/Login"));
const Register = lazy(() => import("../pages/Auth/Register"));
const AdminLogin = lazy(() => import("../pages/Auth/AdminLogin"));

const Dashboard = lazy(() => import("../pages/Admin/Dashboard"));
const ProductList = lazy(() => import("../pages/Admin/Products/ProductList"));
const CategoryList = lazy(() => import("../pages/Admin/Categories/CategoryList"));
const UserList = lazy(() => import("../pages/Admin/Users/UserList"));
const ReviewList = lazy(() => import("../pages/Admin/Reviews/ReviewList"));
const ActivityList = lazy(() => import("../pages/Admin/Activity/ActivityList"));
const WishlistTracking = lazy(() => import("../pages/Admin/Wishlists/WishlistTracking"));
const LikeTracking = lazy(() => import("../pages/Admin/Likes/LikeTracking"));
const CouponList = lazy(() => import("../pages/Admin/Coupons/CouponList"));

function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-orange-200 border-t-orange-500" />
    </div>
  );
}

/**
 * Renders the real app routes twice:
 *  1) "Background" Routes — always renders whatever page the user was
 *     actually on (or Home, on a direct /login refresh) so the site is
 *     never blank behind the auth modal.
 *  2) "Overlay" Routes — matches ONLY /login and /register against the
 *     real URL, rendering the modal on top of whatever the background
 *     Routes drew.
 */
function AppRoutesInner() {
  const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation;

  const isAuthPath = location.pathname === "/login" || location.pathname === "/register";

  // No background remembered (e.g. someone pasted /login directly and
  // hit refresh) — fall back to Home so there's still content behind
  // the modal instead of a blank screen.
  const routesLocation = backgroundLocation || (isAuthPath ? { ...location, pathname: "/", search: "", state: null } : location);

  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes location={routesLocation}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>

        <Route path="/admin-login" element={<AdminLogin />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<ProductList />} />
            <Route path="categories" element={<CategoryList />} />
            <Route path="users" element={<UserList />} />
            <Route path="reviews" element={<ReviewList />} />
            <Route path="activity" element={<ActivityList />} />
            <Route path="wishlists" element={<WishlistTracking />} />
            <Route path="likes" element={<LikeTracking />} />
            <Route path="coupons" element={<CouponList />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Overlay: matches against the REAL location, always on top */}
      {isAuthPath && (
      <Routes location={location}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
       )}
    </Suspense>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutesInner />
    </BrowserRouter>
  );
}



