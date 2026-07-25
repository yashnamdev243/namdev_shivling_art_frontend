export default function Loader({ fullScreen = false, label = "Loading..." }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-5 ${
        fullScreen ? "min-h-[60vh]" : "min-h-[40vh]"
      }`}
    >
      <div className="custom-loader" />

      <p className="text-sm font-medium tracking-wide text-gray-500 animate-pulse">
        {label}
      </p>
    </div>
  );
}
