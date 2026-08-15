import { apiGet } from "../api/axios";
import { ENDPOINTS } from "../config/api";

const adminTrackingService = {
  likes: (params = {}) => apiGet(ENDPOINTS.admin.likes, { params }),
  wishlists: (params = {}) => apiGet(ENDPOINTS.admin.wishlists, { params }),
};

export default adminTrackingService;