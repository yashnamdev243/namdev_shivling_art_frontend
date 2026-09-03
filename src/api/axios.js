import axios from "axios";
import { API_BASE_URL } from "../config/api";
import { STORAGE_KEYS } from "../config/constants";

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 20000,
  headers: { Accept: "application/json" },
});

function isAdminRequest(config) {
  if (config?.skipAuth) return false;
  if (config?.forceUserAuth) return false;
  const url = String(config?.url || "");
  const method = String(config?.method || "get").toLowerCase();

  if (url.startsWith("/admin") || url.startsWith("/dashboard")) return true;
  if (
    url.startsWith("/products") &&
    ["post", "put", "patch", "delete"].includes(method)
  ) {
    // Product interaction routes remain customer-authenticated.
    if (/\/products\/[^/]+\/(like|reviews)(\/|$)/.test(url)) return false;
    return true;
  }
  if (
    url.startsWith("/categories") &&
    ["post", "put", "patch", "delete"].includes(method)
  )
    return true;
  if (url.startsWith("/upload") && method !== "get") return true;
  return false;
}

api.interceptors.request.use((config) => {
  if (config.skipAuth) return config;

  const key = isAdminRequest(config)
    ? STORAGE_KEYS.adminToken
    : STORAGE_KEYS.token;
  const token = localStorage.getItem(key);

  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const config = error?.config || {};
    const status = error?.response?.status;
    const message =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      "Something went wrong. Please try again.";

    if (status === 401) {
      const key = isAdminRequest(config)
        ? STORAGE_KEYS.adminToken
        : STORAGE_KEYS.token;
      const userKey = isAdminRequest(config)
        ? STORAGE_KEYS.adminUser
        : STORAGE_KEYS.user;
      localStorage.removeItem(key);
      localStorage.removeItem(userKey);
    }

    return Promise.reject({ status, message, raw: error });
  },
);

export async function apiGet(url, config) {
  return (await api.get(url, config)).data;
}
export async function apiPost(url, body, config) {
  return (await api.post(url, body, config)).data;
}
export async function apiPut(url, body, config) {
  return (await api.put(url, body, config)).data;
}
export async function apiPatch(url, body, config) {
  return (await api.patch(url, body, config)).data;
}
export async function apiDelete(url, config) {
  return (await api.delete(url, config)).data;
}
export default api;
