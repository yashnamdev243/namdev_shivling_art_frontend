import { apiGet } from "../api/axios";
import { ENDPOINTS } from "../config/api";

export const dashboardService = {
  async getStats() {
    // Expected shape: { totalProducts, totalCategories, outOfStock, recentProducts: [] }
    return apiGet(ENDPOINTS.dashboard.stats);
  },
};

export default dashboardService;
