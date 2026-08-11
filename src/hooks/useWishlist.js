import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { fetchWishlist, removeWishlist, toggleWishlist } from "../redux/wishlistSlice";
import useAuth from "./useAuth";

export function useWishlist() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.wishlist);
  const { isAuthenticated, loading: authLoading } = useAuth();

  useEffect(() => {
    if (authLoading) return;
    if (isAuthenticated) dispatch(fetchWishlist());
  }, [isAuthenticated, authLoading, dispatch]);

  const getProductId = (product) => Number(product?._id || product?.id || product?.product_id);

  const isWishlisted = useCallback(
    (productId) => items.some((item) => getProductId(item) === Number(productId)),
    [items]
  );

  const toggle = async (product) => {
    if (!isAuthenticated) {
      toast.error("Please login to use your wishlist.");
      return;
    }
    const productId = getProductId(product);
    if (!productId) return;

    try {
      const response = await dispatch(toggleWishlist(productId)).unwrap();
      toast.success(response?.message || (response?.wishlisted ? "Added to wishlist." : "Removed from wishlist."));
      return response;
    } catch (error) {
      toast.error(String(error || "Unable to update wishlist."));
      throw error;
    }
  };

  const remove = async (productId) => {
    try {
      const response = await dispatch(removeWishlist(productId)).unwrap();
      toast.success(response?.message || "Removed from wishlist.");
      return response;
    } catch (error) {
      toast.error(String(error || "Unable to remove wishlist."));
      throw error;
    }
  };

  return {
    items,
    loading,
    error,
    wishlistCount: items.length,
    isWishlisted,
    toggleWishlist: toggle,
    removeFromWishlist: remove,
  };
}

export default useWishlist;
