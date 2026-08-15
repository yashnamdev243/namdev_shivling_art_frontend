// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import MainLayout from "../layouts/MainLayout";
// import AdminLayout from "../layouts/AdminLayout";
// import ScrollToTop from "../layouts/ScrollToTop";
// import ProtectedRoute from "../components/common/ProtectedRoute";

// import Home from "../pages/Home/Home";
// import About from "../pages/About/About";
// import Products from "../pages/Products/Products";
// import ProductDetails from "../pages/Products/ProductDetails";
// import Gallery from "../pages/Gallery/Gallery";
// import Contact from "../pages/Contact/Contact";
// import Wishlist from "../pages/Products/Wishlist";
// import NotFound from "../pages/NotFound/NotFound";

// import Login from "../pages/Auth/Login";
// import Dashboard from "../pages/Admin/Dashboard";
// import ProductList from "../pages/Admin/Products/ProductList";
// import CategoryList from "../pages/Admin/Categories/CategoryList";
// import UserList from "../pages/Admin/Users/UserList";
// import ReviewList from "../pages/Admin/Reviews/ReviewList";
// import ActivityList from "../pages/Admin/Activity/ActivityList";
// import WishlistTracking from "../pages/Admin/Wishlists/WishlistTracking";
// import LikeTracking from "../pages/Admin/Likes/LikeTracking";
// import CouponList from "../pages/Admin/Coupons/CouponList";
// import AdminLogin from "../pages/Auth/AdminLogin";
// import Register from "../pages/Auth/Register";

// export default function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <ScrollToTop />
//       <Routes>
//         {/* Public website */}
//         <Route path="/" element={<MainLayout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />

//           <Route path="products">
//             <Route index element={<Products />} />
//             <Route path=":id" element={<ProductDetails />} />
//           </Route>

//           <Route path="gallery" element={<Gallery />} />
//           <Route path="contact" element={<Contact />} />

//           <Route path="wishlist" element={<Wishlist />} />
          
//           {/* <Route
//             path="/login/google"
//             element={<GoogleLogin />}
//           /> */}
//           {/* 
//           <Route
//             path="/login/mobile"
//             element={<MobileLogin />}
//           /> */}
//         </Route>

//          <Route path="/login" element={<Login />} />
//          <Route
//           path="/register"
//           element={<Register />}
//         />
//         {/* Admin auth */}
//         <Route path="/admin-login" element={<AdminLogin />} />

//         {/* Admin (protected) */}
//         <Route element={<ProtectedRoute />}>
//           <Route path="/admin" element={<AdminLayout />}>
//             <Route path="dashboard" element={<Dashboard />} />
//             <Route path="products" element={<ProductList />} />
//             <Route path="categories" element={<CategoryList />} />

//             <Route path="users" element={<UserList />} />
//             <Route path="reviews" element={<ReviewList />} />
//             <Route path="activity" element={<ActivityList />} />
//             <Route path="wishlists" element={<WishlistTracking />} />
//             <Route path="likes" element={<LikeTracking />} />
//             <Route path="coupons" element={<CouponList />} />
//           </Route>
//         </Route>

//         {/* 404 */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }





import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
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

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
      </Suspense>
    </BrowserRouter>
  );
}