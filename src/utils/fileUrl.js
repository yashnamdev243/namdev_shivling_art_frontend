// import { FILE_BASE_URL } from "../config/api";

// export const getFileUrl = (path) => {
//   if (!path) {
//     return "https://placehold.co/600x400?text=No+Image";
//   }

//   // Already a full URL
//   if (path.startsWith("http://") || path.startsWith("https://")) {
//     return path;
//   }

//   // Normalize slashes
//   return `${FILE_BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
// };

import { FILE_BASE_URL } from "../config/api";

const PLACEHOLDER = "https://placehold.co/600x400?text=No+Image";

export const getFileUrl = (path) => {
  if (!path) return PLACEHOLDER;

  // Already a full URL
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  // Already starts with uploads/
  if (path.startsWith("uploads/")) {
    return `${FILE_BASE_URL}/${path}`;
  }

  // Already starts with /uploads/
  if (path.startsWith("/uploads/")) {
    return `${FILE_BASE_URL}${path}`;
  }

  // Only filename
  return `${FILE_BASE_URL}/uploads/${path}`;
};