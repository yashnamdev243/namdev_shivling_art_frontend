export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export const FILE_BASE_URL = API_BASE_URL.replace(/\/api\/?$/, "");

export const ENDPOINTS = {
  auth: {
    register: "/auth/register",
    login: "/auth/login",
    session: "/auth/me",
    updateProfile: "/auth/profile",
    userLogout: "/auth/logout",
    adminLogin: "/admin/login",
    adminLogout: "/admin/logout",
    adminMe: "/admin/me",
  },
  products: {
    list: "/products",
    random: "/products/random",
    detail: (id) => `/products/${id}`,
    create: "/products",
    update: (id) => `/products/${id}`,
    remove: (id) => `/products/${id}`,
    like: (id) => `/products/${id}/like`,
    likes: (id) => `/products/${id}/like`,
    reviews: (id) => `/products/${id}/reviews`,
  },
  wishlist: { list:"/wishlist", toggle:(id) => `/wishlist/${id}` },
  reviews: {
    testimonials:"/reviews/testimonials",
    product:(id) => `/reviews/product/${id}`,
    delete:(id) => `/reviews/${id}`,
  },
  categories: {
    list:"/categories", detail:(id)=>`/categories/${id}`,
    create:"/categories", update:(id)=>`/categories/${id}`, remove:(id)=>`/categories/${id}`,
  },
  upload:{ image:"/upload/image", video:"/upload/video", remove:"/upload/remove" },
  contact:{ send:"/contact" },
  dashboard:{ stats:"/dashboard/stats" },
  coupons:{ validate:"/coupons/validate", redeem:"/coupons/redeem" },
  cart:{ list:"/cart", add:"/cart", update:(id)=>`/cart/${id}`, remove:(id)=>`/cart/${id}`, clear:"/cart" },
  orders:{ create:"/orders", mine:"/orders" },
  admin:{
    orders:"/admin/orders", orderStatus:(id)=>`/admin/orders/${id}/status`,
    users:"/admin/users", activity:"/admin/activity", reviews:"/admin/reviews",
    reviewStatus:(id)=>`/admin/reviews/${id}/status`,
    reviewDelete:(id)=>`/admin/reviews/${id}`,
    reviewFeature:(id)=>`/admin/reviews/${id}/feature`,
    wishlists:"/admin/wishlists",
    likes:"/admin/likes",
    productLikes:(id)=>`/admin/products/${id}/likes`,
    coupons:"/admin/coupons",
    coupon:(id)=>`/admin/coupons/${id}`,
    couponRedemptions:"/admin/coupons/redemptions",
  },
};
export default ENDPOINTS;
