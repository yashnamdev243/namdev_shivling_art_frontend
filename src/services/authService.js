import { apiGet, apiPost, apiPut } from "../api/axios";
import { ENDPOINTS } from "../config/api";

const authService = {
  register: (payload) => apiPost(ENDPOINTS.auth.register, payload),
  login: (payload) => apiPost(ENDPOINTS.auth.login, payload),
  me: () => apiGet(ENDPOINTS.auth.session),
  updateProfile: (payload) => apiPut(ENDPOINTS.auth.updateProfile, payload),
  logout: () => apiPost(ENDPOINTS.auth.userLogout),
};

export default authService;
