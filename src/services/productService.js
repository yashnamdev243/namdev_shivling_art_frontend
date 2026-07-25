import { apiGet, apiPost, apiPut, apiDelete } from "../api/axios";
import { ENDPOINTS } from "../config/api";

/**
 * Product CRUD -- consumed by src/hooks/useProducts.js.
 * Every function is a plain async/await call against the common axios
 * instance, so it's easy to reuse outside React Query too if needed.
 */
export const productService = {
  async getAll(params = {}) {
    // params: { page, limit, search, category, sort }
    return apiGet(ENDPOINTS.products.list, { params });
  },

  async getById(id) {
    return apiGet(ENDPOINTS.products.detail(id));
  },

  async create(payload) {
    return apiPost(ENDPOINTS.products.create, payload);
  },

  async update(id, payload) {
    return apiPut(ENDPOINTS.products.update(id), payload);
  },

  async remove(id) {
    return apiDelete(ENDPOINTS.products.remove(id));
  },

  async getRandom(limit = 8) {
  return apiGet(ENDPOINTS.products.random, {
    params: { limit },
  });
},
};

export default productService;
