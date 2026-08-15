
export const ROUTES = {
  home: "/",
  products: "/products",
  productDetails: (id) => `/products/${id}`,
  gallery: "/gallery",
  about: "/about",
  contact: "/contact",
  wishlist: "/wishlist",
  
  login: "/login",

  adminLogin: "/admin-login",
  adminDashboard: "/admin/dashboard",
  adminProducts: "/admin/products",
  adminCategories: "/admin/categories",
  adminUsers: "/admin/users",
  adminReviews: "/admin/reviews",
  adminActivity: "/admin/activity",
  adminWishlists: "/admin/wishlists",
  adminCoupons: "/admin/coupons",
};

export default ROUTES;