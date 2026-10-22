import api from "../api/axios";
import { ENDPOINTS } from "../config/api";

/**
 * Handles image/video upload as multipart/form-data with progress
 * reporting, used by the reusable <MediaUploader /> component in the
 * admin dashboard. Expects the backend to respond with { url, publicId }.
 */
async function uploadFile(file, kind = "image", onProgress, opts = {}) {
  const formData = new FormData();
  formData.append(kind, file);

  const endpoint =
    kind === "video" ? ENDPOINTS.upload.video : ENDPOINTS.upload.image;

  const res = await api.post(endpoint, formData, {
    headers: { "Content-Type": "multipart/form-data" },
    onUploadProgress: (evt) => {
      if (!onProgress || !evt.total) return;
      onProgress(Math.round((evt.loaded * 100) / evt.total));
    },
        ...opts,
  });

  return res.data; // { url, publicId }
}

export const uploadService = {
  uploadImage: (file, onProgress, opts) => uploadFile(file, "image", onProgress ,opts),
  uploadVideo: (file, onProgress, opts) => uploadFile(file, "video", onProgress, opts),

  async remove(publicId) {
    const res = await api.post(ENDPOINTS.upload.remove, { publicId });
    return res.data;
  },
};

export default uploadService;
