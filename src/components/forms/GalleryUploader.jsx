import { useRef } from "react";
import { CloseCircleFilled, PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { useMediaUpload } from "../../hooks/useMediaUpload";

/**
 * Reusable uploader for a *list* of images (product gallery). Keeps an
 * array of URLs in the parent form via value/onChange -- same pattern
 * as MediaUploader but for multiple files.
 */
export default function GalleryUploader({ value = [], onChange, max = 8 }) {
  const inputRef = useRef(null);
  const { upload, isUploading } = useMediaUpload("image");

  async function handleFiles(files) {
    const remaining = max - value.length;
    const toUpload = Array.from(files).slice(0, remaining);
    for (const file of toUpload) {
      const result = await upload(file);
      if (result?.url) onChange?.([...value, result.url]);
    }
  }

  function removeAt(index) {
    onChange?.(value.filter((_, i) => i !== index));
  }

  return (
    <div>
      <p className="mb-2 text-sm font-medium text-gray-700">
        Gallery images ({value.length}/{max})
      </p>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {value.map((url, index) => (
          <div key={url + index} className="relative aspect-square overflow-hidden rounded-xl border border-gray-200">
            <img src={url} alt="" className="h-full w-full object-cover" />
            <button
              type="button"
              onClick={() => removeAt(index)}
              className="absolute right-1 top-1 rounded-full bg-white/90 p-0.5 text-red-500 shadow"
            >
              <CloseCircleFilled />
            </button>
          </div>
        ))}

        {value.length < max && (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="flex aspect-square flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed border-brand-200 bg-brand-50/50 text-brand-500 transition hover:border-brand-400"
          >
            {isUploading ? <LoadingOutlined /> : <PlusOutlined />}
            <span className="text-[11px]">Add</span>
          </button>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>
    </div>
  );
}
