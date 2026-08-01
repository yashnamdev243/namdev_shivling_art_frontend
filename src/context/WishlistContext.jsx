// import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
// import toast from "react-hot-toast";
// import { STORAGE_KEYS } from "../config/constants";

// const WishlistContext = createContext(null);

// function readInitialWishlist() {
//   try {
//     const raw = localStorage.getItem(STORAGE_KEYS.wishlist);
//     return raw ? JSON.parse(raw) : [];
//   } catch {
//     return [];
//   }
// }

// export function WishlistProvider({ children }) {
//   const [items, setItems] = useState(readInitialWishlist);

//   useEffect(() => {
//     try {
//       localStorage.setItem(STORAGE_KEYS.wishlist, JSON.stringify(items));
//     } catch {
//       // Ignore storage failures (private browsing / quota) -- wishlist
//       // still works for the current session.
//     }
//   }, [items]);

//   const isWishlisted = useCallback(
//     (id) => items.some((p) => (p._id || p.id) === id),
//     [items]
//   );

//   const toggleWishlist = useCallback((product) => {
//     const id = product?._id || product?.id;
//     if (!id) return;

//     setItems((prev) => {
//       const exists = prev.some((p) => (p._id || p.id) === id);
//       if (exists) {
//         toast.success(`Removed "${product.name}" from wishlist`);
//         return prev.filter((p) => (p._id || p.id) !== id);
//       }
//       toast.success(`Added "${product.name}" to wishlist`);
//       return [...prev, product];
//     });
//   }, []);

//   const removeFromWishlist = useCallback((id) => {
//     setItems((prev) => prev.filter((p) => (p._id || p.id) !== id));
//   }, []);

//   const value = useMemo(
//     () => ({ items, isWishlisted, toggleWishlist, removeFromWishlist, wishlistCount: items.length }),
//     [items, isWishlisted, toggleWishlist, removeFromWishlist]
//   );

//   return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
// }

// export function useWishlist() {
//   const ctx = useContext(WishlistContext);
//   if (!ctx) {
//     throw new Error("useWishlist must be used within a <WishlistProvider>");
//   }
//   return ctx;
// }

// export default WishlistContext;


// import { createContext, useContext, useMemo } from "react";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import toast from "react-hot-toast";
// import wishlistService from "../services/wishlistService";
// import { useUserAuth } from "./UserAuthContext";

// const WishlistContext = createContext(null);

// export function WishlistProvider({ children }) {
//   const { isAuthenticated, requireAuth } = useUserAuth();
//   const queryClient = useQueryClient();

//   const { data } = useQuery({
//     queryKey: ["wishlist"],
//     queryFn: wishlistService.getWishlist,
//     enabled: isAuthenticated,
//   });

//   // Each row is { id, productId, Product }. The rest of the app expects
//   // the wishlist as a flat array of product objects (so ProductCard can
//   // render them straight through), so unwrap here.
//   const items = (data?.items || []).map((row) => row.Product).filter(Boolean);

//   const invalidate = () => queryClient.invalidateQueries({ queryKey: ["wishlist"] });

//   const toggleMutation = useMutation({
//     mutationFn: (productId) => wishlistService.toggle(productId),
//     onSuccess: invalidate,
//     onError: (err) => toast.error(err?.message || "Couldn't update wishlist."),
//   });

//   const isWishlisted = (id) => items.some((p) => (p._id || p.id) === id);

//   const toggleWishlist = (product) => {
//     requireAuth(() => {
//       const id = product?._id || product?.id;
//       const wasWishlisted = isWishlisted(id);
//       toggleMutation.mutate(id, {
//         onSuccess: () =>
//           toast.success(
//             wasWishlisted ? `Removed "${product.name}" from wishlist` : `Added "${product.name}" to wishlist`
//           ),
//       });
//     });
//   };

//   const removeFromWishlist = (id) => toggleMutation.mutate(id);

//   const value = useMemo(
//     () => ({ items, isWishlisted, toggleWishlist, removeFromWishlist, wishlistCount: items.length }),
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     [items]
//   );

//   return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
// }

// export function useWishlist() {
//   const ctx = useContext(WishlistContext);
//   if (!ctx) {
//     throw new Error("useWishlist must be used within a <WishlistProvider>");
//   }
//   return ctx;
// }

// export default WishlistContext;

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