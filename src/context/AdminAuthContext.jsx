import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import toast from "react-hot-toast";
import { apiGet, apiPost } from "../api/axios";
import { ENDPOINTS } from "../config/api";
import { STORAGE_KEYS } from "../config/constants";

const AdminAuthContext = createContext(null);

function clearAdminSession(setUser) {
  localStorage.removeItem(STORAGE_KEYS.adminToken);
  localStorage.removeItem(STORAGE_KEYS.adminUser);
  setUser(null);
}

export function AdminAuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.adminUser);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  });
  const [loading, setLoading] = useState(true);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    const token = localStorage.getItem(STORAGE_KEYS.adminToken);
    if (!token) {
      setLoading(false);
      return;
    }

    apiGet(ENDPOINTS.auth.adminMe)
      .then((response) => {
        if (!response?.user) throw new Error("Invalid admin session.");
        setUser(response.user);
        localStorage.setItem(STORAGE_KEYS.adminUser, JSON.stringify(response.user));
      })
      .catch(() => clearAdminSession(setUser))
      .finally(() => setLoading(false));
  }, []);

  const login = async (payload) => {
    const response = await apiPost(ENDPOINTS.auth.adminLogin, payload, { skipAuth: true });
    if (!response?.token || response?.user?.role !== "admin") {
      throw new Error(response?.message || "Admin authentication failed.");
    }
    localStorage.setItem(STORAGE_KEYS.adminToken, response.token);
    localStorage.setItem(STORAGE_KEYS.adminUser, JSON.stringify(response.user));
    setUser(response.user);
    return response;
  };

  const logout = async () => {
    try {
      if (localStorage.getItem(STORAGE_KEYS.adminToken)) {
        await apiPost(ENDPOINTS.auth.adminLogout, {}, {});
      }
    } catch (_) {}
    clearAdminSession(setUser);
    toast.success("Admin logged out.");
  };

  const value = useMemo(() => ({
    user,
    loading,
    isAuthenticated: Boolean(user && localStorage.getItem(STORAGE_KEYS.adminToken)),
    login,
    logout,
  }), [user, loading]);

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
}

export function useAdminAuth() {
  const value = useContext(AdminAuthContext);
  if (!value) throw new Error("useAdminAuth must be used inside AdminAuthProvider");
  return value;
}

export default AdminAuthContext;
