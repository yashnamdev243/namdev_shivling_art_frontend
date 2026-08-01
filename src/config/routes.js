// // Route path constants -- used by <Link>/<NavLink> and by navigate()
// // calls so a URL never has to be typed out (and possibly mistyped)
// // more than once across the app.
// export const ROUTES = {
//   home: "/",
//   about: "/about",
//   products: "/products",
//   productDetails: (id) => `/products/${id}`,
//   gallery: "/gallery",
//   contact: "/contact",

//   adminLogin: "/admin-login",
//   adminDashboard: "/admin/dashboard",
//   adminProducts: "/admin/products",
//   adminCategories: "/admin/categories",
// };

// export const ROUTES = {
//   home: "/",
//   products: "/products",
//   productDetails: (id) => `/products/${id}`,
//   gallery: "/gallery",
//   about: "/about",
//   contact: "/contact",

//   cart: "/cart",
//   wishlist: "/wishlist",
//   checkout: "/checkout",

//   adminLogin: "/admin-login",
//   adminDashboard: "/admin/dashboard",
//   adminProducts: "/admin/products",
//   adminCategories: "/admin/categories",
//   adminOrders: "/admin/orders",
//   adminCustomers: "/admin/customers",
// };

// export default ROUTES;

export const ROUTES = {
  home: "/",
  products: "/products",
  productDetails: (id) => `/products/${id}`,
  gallery: "/gallery",
  about: "/about",
  contact: "/contact",

  wishlist: "/wishlist",

  adminLogin: "/admin-login",
  adminDashboard: "/admin/dashboard",
  adminProducts: "/admin/products",
  adminCategories: "/admin/categories",
};

export default ROUTES;