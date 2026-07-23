import axios from "axios";
import { API_BASE_URL } from "../config/api";
import { STORAGE_KEYS } from "../config/constants";

/**
 * Single axios instance for the whole app.
 * Every service file (productService, categoryService, authService, ...)
 * imports `api` from here instead of creating its own axios instance --
 * that way base URL, auth headers, timeouts and error handling only
 * live in one place.
 */
export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 20000,
  headers: {
    Accept: "application/json",
  },
});

// Attach the JWT (if we have one) to every outgoing request.
api.interceptors.request.use((config) => {
  const token = localStorage.getItem(STORAGE_KEYS.token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Normalize errors and handle expired/invalid sessions in one place.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      // Session expired or invalid -- clear it and bounce to admin login
      // (only matters when the user was actually logged in as admin).
      localStorage.removeItem(STORAGE_KEYS.token);
      localStorage.removeItem(STORAGE_KEYS.user);
      if (window.location.pathname.startsWith("/admin")) {
        window.location.href = "/admin-login";
      }
    }

    const message =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      "Something went wrong. Please try again.";

    return Promise.reject({ status, message, raw: error });
  }
);

/**
 * Thin async/await wrappers around the axios instance.
 * Services call these instead of `api.get/post/...` directly so call
 * sites stay short and consistent, e.g.:
 *
 *   const products = await apiGet(ENDPOINTS.products.list, { params: { page: 1 } });
 *   const created   = await apiPost(ENDPOINTS.products.create, payload);
 */
export async function apiGet(url, config) {
  const res = await api.get(url, config);
  return res.data;
}

export async function apiPost(url, body, config) {
  const res = await api.post(url, body, config);
  return res.data;
}

export async function apiPut(url, body, config) {
  const res = await api.put(url, body, config);
  return res.data;
}

export async function apiPatch(url, body, config) {
  const res = await api.patch(url, body, config);
  return res.data;
}

export async function apiDelete(url, config) {
  const res = await api.delete(url, config);
  return res.data;
}

export default api;
