import { Spin } from "antd";

/**
 * Consistent loading state -- use instead of ad-hoc spinners so every
 * loading screen in the app looks the same.
 */
export default function Loader({ fullScreen = false, label = "Loading..." }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 text-brand-700 ${
        fullScreen ? "min-h-[60vh]" : "py-16"
      }`}
    >
      <Spin size="large" />
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}
