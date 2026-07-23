import { apiGet, apiPost, apiPut, apiDelete } from "../api/axios";
import { ENDPOINTS } from "../config/api";

export const categoryService = {
  async getAll(params = {}) {
    return apiGet(ENDPOINTS.categories.list, { params });
  },

  async getById(id) {
    return apiGet(ENDPOINTS.categories.detail(id));
  },

  async create(payload) {
    return apiPost(ENDPOINTS.categories.create, payload);
  },

  async update(id, payload) {
    return apiPut(ENDPOINTS.categories.update(id), payload);
  },

  async remove(id) {
    return apiDelete(ENDPOINTS.categories.remove(id));
  },
};

export default categoryService;
