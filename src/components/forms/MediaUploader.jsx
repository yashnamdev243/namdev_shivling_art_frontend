import { useRef } from "react";
import { Progress } from "antd";
import { InboxOutlined, CloseCircleFilled, PlayCircleFilled } from "@ant-design/icons";
import { useMediaUpload } from "../../hooks/useMediaUpload";

/**
 * Reusable drag-and-drop uploader for a single image or video.
 * Uploads immediately on file select via useMediaUpload, then reports
 * the resulting URL back to the parent form through onChange.
 *
 * Usage:
 *   <MediaUploader kind="image" value={thumbnail} onChange={setThumbnail} label="Thumbnail" />
 */
export default function MediaUploader({
  kind = "image",
  value,
  onChange,
  label = "Upload",
  aspect = "aspect-square",
}) {
  const inputRef = useRef(null);
  const { upload, progress, isUploading } = useMediaUpload(kind);

  async function handleFiles(files) {
    const file = files?.[0];
    if (!file) return;
    const result = await upload(file);
    if (result?.url) onChange?.(result.url);
  }

  return (
    <div>
      <p className="mb-2 text-sm font-medium text-gray-700">{label}</p>

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleFiles(e.dataTransfer.files);
        }}
        onClick={() => inputRef.current?.click()}
        className={`relative ${aspect} w-full cursor-pointer overflow-hidden rounded-2xl border-2 border-dashed border-brand-200 bg-brand-50/50 transition hover:border-brand-400 hover:bg-brand-50`}
      >
        <input
          ref={inputRef}
          type="file"
          accept={kind === "video" ? "video/*" : "image/*"}
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />

        {value && kind === "image" && (
          <img src={value} alt={label} className="h-full w-full object-cover" />
        )}

        {value && kind === "video" && (
          <div className="relative flex h-full w-full items-center justify-center bg-stone-900">
            <video src={value} className="h-full w-full object-cover opacity-70" />
            <PlayCircleFilled className="absolute text-5xl text-white" />
          </div>
        )}

        {!value && !isUploading && (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-brand-500">
            <InboxOutlined className="text-3xl" />
            <p className="px-4 text-center text-xs">
              Click or drag {kind === "video" ? "a video" : "an image"} here
            </p>
          </div>
        )}

        {isUploading && (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-white/80 px-8">
            <Progress percent={progress} size="small" strokeColor="#8a4019" />
            <p className="text-xs text-gray-500">Uploading...</p>
          </div>
        )}

        {value && !isUploading && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onChange?.("");
            }}
            className="absolute right-2 top-2 rounded-full bg-white/90 p-0.5 text-red-500 shadow"
          >
            <CloseCircleFilled className="text-lg" />
          </button>
        )}
      </div>
    </div>
  );
}
