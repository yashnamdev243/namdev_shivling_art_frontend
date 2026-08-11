import {
  apiDelete,
  apiGet,
  apiPost,
} from "../api/axios";

import { ENDPOINTS } from "../config/api";

const reviewService = {
  async testimonials() { return apiGet(ENDPOINTS.reviews.testimonials); },
  async list(productId) {
    return apiGet(`/products/${productId}/reviews`);
  },

  async create(productId, payload) {
    return apiPost(`/products/${productId}/reviews`, payload);
  },

  async remove(reviewId) {
    return apiDelete(`/reviews/${reviewId}`);
  },
};

export default reviewService;