import { apiGet } from "../api/axios";
import { ENDPOINTS } from "../config/api";

export const adminUserService = {
  async listUsers() {
    return apiGet(ENDPOINTS.admin.users);
  },
  async activity(userId) {
    return apiGet(ENDPOINTS.admin.activity, { params: userId ? { userId } : {} });
  },
};

export default adminUserService;