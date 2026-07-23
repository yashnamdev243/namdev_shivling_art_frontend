import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import uploadService from "../services/uploadService";
import { MAX_IMAGE_SIZE_MB, MAX_VIDEO_SIZE_MB } from "../config/constants";

/**
 * Drives the reusable <MediaUploader /> component: validates file size,
 * uploads with progress, and hands back the resulting URL.
 */
export function useMediaUpload(kind = "image") {
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const upload = useCallback(
    async (file) => {
      const maxMb = kind === "video" ? MAX_VIDEO_SIZE_MB : MAX_IMAGE_SIZE_MB;
      if (file.size / (1024 * 1024) > maxMb) {
        toast.error(`File is too large. Max ${maxMb}MB allowed.`);
        return null;
      }

      setIsUploading(true);
      setProgress(0);
      try {
        const result =
          kind === "video"
            ? await uploadService.uploadVideo(file, setProgress)
            : await uploadService.uploadImage(file, setProgress);
        return result; // { url, publicId }
      } catch (err) {
        toast.error(err.message || "Upload failed");
        return null;
      } finally {
        setIsUploading(false);
      }
    },
    [kind]
  );

  return { upload, progress, isUploading };
}

export default useMediaUpload;
