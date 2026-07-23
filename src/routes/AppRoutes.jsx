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
import NotFound from "../pages/NotFound/NotFound";

import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Admin/Dashboard";
import ProductList from "../pages/Admin/Products/ProductList";
import CategoryList from "../pages/Admin/Categories/CategoryList";

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
        </Route>

        {/* Admin auth */}
        <Route path="/admin-login" element={<Login />} />

        {/* Admin (protected) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<ProductList />} />
            <Route path="categories" element={<CategoryList />} />
          </Route>
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
