// Base URL comes from the environment so the same build can point at
// localhost while developing and at the real API in production.
// Set VITE_API_BASE_URL in a .env file (see .env.example).
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// Every REST route the frontend talks to, in one place. Services should
// always import paths from here instead of hardcoding strings, so a
// backend route change only has to be updated once.
export const FILE_BASE_URL = API_BASE_URL.replace("/api", "");
export const ENDPOINTS = {
  auth: {
    login: "/admin/login",
    me: "/me",
    logout: "/admin/logout",
  },
  products: {
    list: "/products",
    detail: (id) => `/products/${id}`,
    create: "/products",
    update: (id) => `/products/${id}`,
    remove: (id) => `/products/${id}`,
  },
  categories: {
    list: "/categories",
    detail: (id) => `/categories/${id}`,
    create: "/categories",
    update: (id) => `/categories/${id}`,
    remove: (id) => `/categories/${id}`,
  },
  upload: {
    image: "/upload/image",
    video: "/upload/video",
    remove: "/upload/remove",
  },
  contact: {
    send: "/contact",
  },
  dashboard: {
    stats: "/dashboard/stats",
  },
};
