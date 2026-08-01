import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { STORAGE_KEYS } from "../config/constants";

const CartContext = createContext(null);

// A line is keyed by product id + selected size, so the same product in
// two different sizes shows up as two separate cart lines instead of
// merging into one (merging would silently drop the size distinction).
function lineKey(id, size) {
  return `${id}::${size || "standard"}`;
}

function readInitialCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.cart);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readInitialCart);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(items));
    } catch {
      // Storage can fail in private browsing / quota-exceeded scenarios --
      // the cart still works for the current session, it just won't
      // persist across a reload.
    }
  }, [items]);

  const addToCart = useCallback((product, { qty = 1, size = null } = {}) => {
    const id = product?._id || product?.id;
    if (!id) return;

    const key = lineKey(id, size);

    setItems((prev) => {
      const existing = prev.find((line) => line.key === key);
      if (existing) {
        return prev.map((line) =>
          line.key === key ? { ...line, qty: line.qty + qty } : line
        );
      }

      return [
        ...prev,
        {
          key,
          id,
          name: product.name,
          image: product.image,
          price: product.price,
          category: product.category,
          size,
          qty,
        },
      ];
    });

    toast.success(
      size ? `Added "${product.name}" (${size}) to cart` : `Added "${product.name}" to cart`
    );
  }, []);

  const removeFromCart = useCallback((key) => {
    setItems((prev) => prev.filter((line) => line.key !== key));
  }, []);

  const updateQty = useCallback((key, qty) => {
    if (qty < 1) return;
    setItems((prev) => prev.map((line) => (line.key === key ? { ...line, qty } : line)));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const cartCount = useMemo(() => items.reduce((sum, line) => sum + line.qty, 0), [items]);
  const cartTotal = useMemo(
    () => items.reduce((sum, line) => sum + (Number(line.price) || 0) * line.qty, 0),
    [items]
  );

  const value = useMemo(
    () => ({ items, addToCart, removeFromCart, updateQty, clearCart, cartCount, cartTotal }),
    [items, addToCart, removeFromCart, updateQty, clearCart, cartCount, cartTotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a <CartProvider>");
  }
  return ctx;
}

export default CartContext;