import {
  createContext, useContext, useEffect, useMemo, useRef, useState
} from "react";
import toast from "react-hot-toast";
import authService from "../services/authService";
import { STORAGE_KEYS } from "../config/constants";
import { useDispatch } from "react-redux";
import { clearWishlist } from "../redux/wishlistSlice";

const UserAuthContext = createContext(null);

export function UserAuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const initializedRef = useRef(false);
  const dispatch = useDispatch();

  const clearSession = () => {
    localStorage.removeItem(STORAGE_KEYS.token);
    localStorage.removeItem(STORAGE_KEYS.user);
    setUser(null);
    dispatch(clearWishlist());
  };

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    const token = localStorage.getItem(STORAGE_KEYS.token);
    const stored = localStorage.getItem(STORAGE_KEYS.user);

    if (!token) {
      setLoading(false);
      return;
    }

    if (stored) {
      try { setUser(JSON.parse(stored)); }
      catch { localStorage.removeItem(STORAGE_KEYS.user); }
    }

    authService.me()
      .then((response) => {
        if (!response?.user) throw new Error("Invalid session.");
        setUser(response.user);
        localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(response.user));
      })
      .catch(clearSession)
      .finally(() => setLoading(false));
  }, []);

  const saveSession = (response) => {
    if (!response?.token || !response?.user) {
      throw new Error(response?.message || "Authentication failed.");
    }
    localStorage.setItem(STORAGE_KEYS.token, response.token);
    localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(response.user));
    setUser(response.user);
    setLoginModalOpen(false);
    return response;
  };

  const register = async (payload) => saveSession(await authService.register(payload));
  const login = async (payload) => saveSession(await authService.login(payload));
  const updateProfile = async (payload) => {
  const response = await authService.updateProfile(payload);

  if (!response?.user) {
    throw new Error(response?.message || "Failed to update profile.");
  }

  setUser(response.user);
  localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(response.user));

  return response;
};
  const logout = async () => {
    try {
      if (localStorage.getItem(STORAGE_KEYS.token)) await authService.logout();
    } catch {}
    clearSession();
    toast.success("Logged out successfully.");
  };

  const isAuthenticated = Boolean(
    user && localStorage.getItem(STORAGE_KEYS.token)
  );

  const value = useMemo(() => ({
    user, loading, isAuthenticated,
    register, login, updateProfile, logout,
    loginModalOpen, setLoginModalOpen,
  }), [user, loading, isAuthenticated, loginModalOpen, dispatch]);

  return (
    <UserAuthContext.Provider value={value}>
      {children}
    </UserAuthContext.Provider>
  );
}

export function useUserAuth() {
  const value = useContext(UserAuthContext);
  if (!value) throw new Error("useUserAuth must be used inside UserAuthProvider");
  return value;
}

export default UserAuthContext;
