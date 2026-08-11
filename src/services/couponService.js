import { apiDelete, apiGet, apiPost, apiPut } from "../api/axios";
import { ENDPOINTS } from "../config/api";

const couponService = {
  active: () => apiGet("/coupons/active"),
  validate: (payload) => apiPost(ENDPOINTS.coupons.validate, payload),
  redeem: (payload) => apiPost(ENDPOINTS.coupons.redeem, payload),
  adminList: () => apiGet(ENDPOINTS.admin.coupons),
  adminCreate: (payload) => apiPost(ENDPOINTS.admin.coupons, payload),
  adminUpdate: (id, payload) => apiPut(ENDPOINTS.admin.coupon(id), payload),
  adminDelete: (id) => apiDelete(ENDPOINTS.admin.coupon(id)),
  adminRedemptions: () => apiGet(ENDPOINTS.admin.couponRedemptions),
};
export default couponService;
