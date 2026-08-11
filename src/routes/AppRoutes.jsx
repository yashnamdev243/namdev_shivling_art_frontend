import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import ScrollToTop from "../layouts/ScrollToTop";
import ProtectedRoute from "../components/common/ProtectedRoute";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/Products/ProductDetails";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import Wishlist from "../pages/Products/Wishlist";
import NotFound from "../pages/NotFound/NotFound";

import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Admin/Dashboard";
import ProductList from "../pages/Admin/Products/ProductList";
import CategoryList from "../pages/Admin/Categories/CategoryList";
import UserList from "../pages/Admin/Users/UserList";
import ReviewList from "../pages/Admin/Reviews/ReviewList";
import ActivityList from "../pages/Admin/Activity/ActivityList";
import WishlistTracking from "../pages/Admin/Wishlists/WishlistTracking";
import LikeTracking from "../pages/Admin/Likes/LikeTracking";
import CouponList from "../pages/Admin/Coupons/CouponList";
import AdminLogin from "../pages/Auth/AdminLogin";
import Register from "../pages/Auth/Register";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Public website */}
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
          
          {/* <Route
            path="/login/google"
            element={<GoogleLogin />}
          /> */}
          {/* 
          <Route
            path="/login/mobile"
            element={<MobileLogin />}
          /> */}
        </Route>

         <Route path="/login" element={<Login />} />
         <Route
          path="/register"
          element={<Register />}
        />
        {/* Admin auth */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Admin (protected) */}
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

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
