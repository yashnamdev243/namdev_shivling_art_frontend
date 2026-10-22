import { apiDelete, apiGet, apiPatch } from "../api/axios";
import { ENDPOINTS } from "../config/api";

const adminReviewService = {
  list: (params = {}) => apiGet(ENDPOINTS.admin.reviews, { params }),
  updateStatus: (id, status) => apiPatch(ENDPOINTS.admin.reviewStatus(id), { status }),
  feature: (id) => apiPatch(ENDPOINTS.admin.reviewFeature(id)),
  remove: (id) => apiDelete(ENDPOINTS.admin.reviewDelete(id)),
};
export default adminReviewService;
