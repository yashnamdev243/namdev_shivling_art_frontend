import api from "../api/axios";

const adminUserService = {
  getAll: async (params = {}) => {
    const response = await api.get("/admin/users", {
      params,
    });

    return response.data;
  },

  getOne: async (id) => {
    const response = await api.get(`/admin/users/${id}`);

    return response.data;
  },

  create: async (payload) => {
    const response = await api.post(
      "/admin/users",
      payload
    );

    return response.data;
  },

  update: async (id, payload) => {
    const response = await api.put(
      `/admin/users/${id}`,
      payload
    );

    return response.data;
  },

  remove: async (id) => {
    const response = await api.delete(
      `/admin/users/${id}`
    );

    return response.data;
  },
};

export default adminUserService;