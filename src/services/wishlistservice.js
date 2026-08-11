import api from "../api/axios";

const wishlistService = {
  getAll: async () => {
    const response = await api.get("/wishlist");

    return response.data;
  },

  check: async (productId) => {
    const response = await api.get(
      `/wishlist/${productId}`
    );

    return response.data;
  },

  add: async (productId) => {
    const response = await api.post(
      `/wishlist/${productId}`
    );

    return response.data;
  },

  remove: async (productId) => {
    const response = await api.delete(
      `/wishlist/${productId}`
    );

    return response.data;
  },

  toggle: async (productId) => {
    const response = await api.post(
      `/wishlist/${productId}`
    );

    return response.data;
  },
};

export default wishlistService;