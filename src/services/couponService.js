// import { apiDelete, apiGet, apiPost, apiPut } from "../api/axios";
// import { ENDPOINTS } from "../config/api";

// const couponService = {
//   active: () => apiGet("/coupons/active"),
//   validate: (payload) => apiPost(ENDPOINTS.coupons.validate, payload),
//   redeem: (payload) => apiPost(ENDPOINTS.coupons.redeem, payload),
//   adminList: () => apiGet(ENDPOINTS.admin.coupons),
//   adminCreate: (payload) => apiPost(ENDPOINTS.admin.coupons, payload),
//   adminUpdate: (id, payload) => apiPut(ENDPOINTS.admin.coupon(id), payload),
//   adminDelete: (id) => apiDelete(ENDPOINTS.admin.coupon(id)),
//   adminRedemptions: () => apiGet(ENDPOINTS.admin.couponRedemptions),
// };
// export default couponService;




import {
  apiDelete,
  apiGet,
  apiPost,
  apiPut,
} from "../api/axios";

const couponService = {
  /* =========================
     CUSTOMER
  ========================= */

  // Get currently active coupons
  active: () => apiGet("/coupons/active"),

  // Apply coupon
  apply: (payload) =>
    apiPost("/coupons/apply", payload),

    myRedemptions: () => apiGet("/coupons/my-redemptions"), // add this

  /* =========================
     ADMIN
  ========================= */

  // Get all coupons
  adminList: () =>
    apiGet("/admin/coupons"),

  // Create coupon
  adminCreate: (payload) =>
    apiPost("/admin/coupons", payload),

  // Update coupon
  adminUpdate: (id, payload) =>
    apiPut(`/admin/coupons/${id}`, payload),

  // Delete coupon
  adminDelete: (id) =>
    apiDelete(`/admin/coupons/${id}`),

  // Coupon redemptions
  adminRedemptions: () =>
    apiGet("/admin/coupons/redemptions"),
};

export default couponService;