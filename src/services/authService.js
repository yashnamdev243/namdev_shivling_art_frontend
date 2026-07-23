import { apiGet, apiPost } from "../api/axios";
import { ENDPOINTS } from "../config/api";
import { STORAGE_KEYS } from "../config/constants";

/**
 * All admin-auth calls in one place. Returns plain data (never the raw
 * axios response) so callers/hooks can `await` it directly.
 */
export const authService = {
  async login({ email, password }) {
    const data = await apiPost(ENDPOINTS.auth.login, { email, password });
    // Expected shape from backend: { token, user: { id, name, email, role } }
    if (data?.token) {
      localStorage.setItem(STORAGE_KEYS.token, data.token);
      localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(data.user || {}));
    }
    return data;
  },

  async fetchCurrentUser() {
    return apiGet(ENDPOINTS.auth.me);
  },

  async logout() {
    try {
      await apiPost(ENDPOINTS.auth.logout);
    } catch {
      // Even if the backend call fails, still clear the local session.
    } finally {
      localStorage.removeItem(STORAGE_KEYS.token);
      localStorage.removeItem(STORAGE_KEYS.user);
    }
  },

  getStoredUser() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.user);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  getStoredToken() {
    return localStorage.getItem(STORAGE_KEYS.token);
  },
};

export default authService;
