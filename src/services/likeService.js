import {
  apiGet,
  apiPost,
} from "../api/axios";

import { ENDPOINTS } from "../config/api";

const likeService = {
  async getProductLikes(productId) {
    return apiGet(`/products/${productId}/like`);
  },

  async toggle(productId) {
    return apiPost(`/products/${productId}/like`);
  },
};

export default likeService;