// Route path constants -- used by <Link>/<NavLink> and by navigate()
// calls so a URL never has to be typed out (and possibly mistyped)
// more than once across the app.
export const ROUTES = {
  home: "/",
  about: "/about",
  products: "/products",
  productDetails: (id) => `/products/${id}`,
  gallery: "/gallery",
  contact: "/contact",

  adminLogin: "/admin-login",
  adminDashboard: "/admin/dashboard",
  adminProducts: "/admin/products",
  adminCategories: "/admin/categories",
};
