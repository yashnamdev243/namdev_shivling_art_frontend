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
// import NotFound from "../pages/NotFound/NotFound";

// import Login from "../pages/Auth/Login";
// import Dashboard from "../pages/Admin/Dashboard";
// import ProductList from "../pages/Admin/Products/ProductList";
// import CategoryList from "../pages/Admin/Categories/CategoryList";
// import Cart from "../pages/Products/Cart";
// import Wishlist from "../pages/Products/Wishlist";
// import Checkout from "../pages/Products/Checkout";

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

//           <Route path="cart" element={<Cart />} />
//           <Route path="wishlist" element={<Wishlist />} />
//           <Route path="checkout" element={<Checkout />} />
//         </Route>

//         {/* Admin auth */}
//         <Route path="/admin-login" element={<Login />} />

//         {/* Admin (protected) */}
//         <Route element={<ProtectedRoute />}>
//           <Route path="/admin" element={<AdminLayout />}>
//             <Route path="dashboard" element={<Dashboard />} />
//             <Route path="products" element={<ProductList />} />
//             <Route path="categories" element={<CategoryList />} />
//           </Route>
//         </Route>

//         {/* 404 */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


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
// import Cart from "../pages/Products/Cart";
// import Wishlist from "../pages/Products/Wishlist";
// import Checkout from "../pages/Products/Checkout";
// import NotFound from "../pages/NotFound/NotFound";

// import Login from "../pages/Auth/Login";
// import Dashboard from "../pages/Admin/Dashboard";
// import ProductList from "../pages/Admin/Products/ProductList";
// import CategoryList from "../pages/Admin/Categories/CategoryList";
// import OrderList from "../pages/Admin/Orders/OrderList";
// import UserActivity from "../pages/Admin/Customers/UserActivity";

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

//           <Route path="cart" element={<Cart />} />
//           <Route path="wishlist" element={<Wishlist />} />
//           <Route path="checkout" element={<Checkout />} />
//         </Route>

//         {/* Admin auth */}
//         <Route path="/admin-login" element={<Login />} />

//         {/* Admin (protected) */}
//         <Route element={<ProtectedRoute />}>
//           <Route path="/admin" element={<AdminLayout />}>
//             <Route path="dashboard" element={<Dashboard />} />
//             <Route path="products" element={<ProductList />} />
//             <Route path="categories" element={<CategoryList />} />
//             <Route path="orders" element={<OrderList />} />
//             <Route path="customers" element={<UserActivity />} />
//           </Route>
//         </Route>

//         {/* 404 */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

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