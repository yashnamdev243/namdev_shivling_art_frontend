import { apiPost } from "../api/axios";
import { ENDPOINTS } from "../config/api";

export const contactService = {
  async send(payload) {
    // payload: { name, phone, email?, message }
    return apiPost(ENDPOINTS.contact.send, payload);
  },
};

export default contactService;
