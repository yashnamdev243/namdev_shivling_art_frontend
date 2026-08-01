import { apiGet, apiPost } from "../api/axios";
import { ENDPOINTS } from "../config/api";

export const wishlistService = {
  async getWishlist() {
    return apiGet(ENDPOINTS.wishlist.list);
  },
  async toggle(productId) {
    return apiPost(ENDPOINTS.wishlist.toggle(productId));
  },
};

export default wishlistService;