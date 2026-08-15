
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { STORAGE_KEYS } from "../config/constants";

const WishlistContext = createContext(null);

function readInitialWishlist() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.wishlist);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function WishlistProvider({ children }) {
  const [items, setItems] = useState(readInitialWishlist);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.wishlist, JSON.stringify(items));
    } catch {
      // Ignore storage failures (private browsing / quota) -- wishlist
      // still works for the current session.
    }
  }, [items]);

  const isWishlisted = useCallback(
    (id) => items.some((p) => (p._id || p.id) === id),
    [items]
  );

  const toggleWishlist = useCallback((product) => {
    const id = product?._id || product?.id;
    if (!id) return;

    setItems((prev) => {
      const exists = prev.some((p) => (p._id || p.id) === id);
      if (exists) {
        toast.success(`Removed "${product.name}" from wishlist`);
        return prev.filter((p) => (p._id || p.id) !== id);
      }
      toast.success(`Added "${product.name}" to wishlist`);
      return [...prev, product];
    });
  }, []);

  const removeFromWishlist = useCallback((id) => {
    setItems((prev) => prev.filter((p) => (p._id || p.id) !== id));
  }, []);

  const value = useMemo(
    () => ({ items, isWishlisted, toggleWishlist, removeFromWishlist, wishlistCount: items.length }),
    [items, isWishlisted, toggleWishlist, removeFromWishlist]
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) {
    throw new Error("useWishlist must be used within a <WishlistProvider>");
  }
  return ctx;
}

export default WishlistContext;