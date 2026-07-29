// import { Link } from "react-router-dom";
// import { SITE } from "../../config/constants";

// /**
//  * BrandLogo
//  * Inline SVG mark so the brand identity doesn't depend on an external
//  * image asset being present. Swap the <svg> below for a real logo file
//  * (e.g. `/logo.svg` in /public) whenever the client supplies one —
//  * every place that needs the logo imports this single component.
//  */
// export default function BrandLogo({ to = "/", size = "md", light = false }) {
//   const dims = size === "sm" ? "w-10 h-10" : size === "lg" ? "w-16 h-16" : "w-12 h-12";

//   const content = (
//     <div className="flex items-center gap-3 select-none group">
//       <div
//         className={`${dims} rounded-full flex items-center justify-center shrink-0 shadow-soft transition-transform group-hover:scale-105`}
//         style={{
//           background: "linear-gradient(135deg, #a8511f 0%, #8a4019 55%, #5c2c18 100%)",
//         }}
//       >
//         <span className="font-display text-gold-200 text-xl leading-none">ॐ</span>
//       </div>
//       <div>
//         <h2
//           className={`font-display font-bold leading-tight ${
//             size === "lg" ? "text-2xl" : "text-lg"
//           } ${light ? "text-white" : "text-brand-800"}`}
//         >
//           {SITE.shortName}
//         </h2>
//         <p className={`text-[11px] tracking-wide uppercase ${light ? "text-gold-200/80" : "text-gray-500"}`}>
//           {SITE.tagline}
//         </p>
//       </div>
//     </div>
//   );

//   if (!to) return content;
//   return <Link to={to}>{content}</Link>;
// }


import { Link } from "react-router-dom";
import { SITE } from "../../config/constants";

export default function BrandLogo({
  to = "/",
  size = "md",
  light = false,
}) {
  const iconSize =
    size === "sm"
      ? "w-12 h-12"
      : size === "lg"
      ? "w-16 h-16"
      : "w-14 h-14";

  const titleSize =
    size === "sm"
      ? "text-lg"
      : size === "lg"
      ? "text-3xl"
      : "text-xl";

  const content = (
    <div className="group flex items-center gap-3 cursor-pointer select-none">
      {/* Logo */}
      <div className="relative">
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-orange-500/30 blur-xl group-hover:blur-2xl transition-all duration-500" />

        {/* Ring */}
        <div
          className={`${iconSize} relative rounded-full p-[2px] bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-300 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
        >
          {/* Inner Circle */}
          <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950">
            <span className="text-2xl text-orange-300 drop-shadow-md">
              ॐ
            </span>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="leading-tight">
        <h2
          className={`${titleSize} font-extrabold tracking-wide transition-colors ${
            light ? "text-white" : "text-slate-900"
          }`}
        >
          <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
            {SITE.shortName}
          </span>
        </h2>

        <p
          className={`text-xs uppercase tracking-[0.35em] ${
            light ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {SITE.title}
        </p>
      </div>
    </div>
  );

  return to ? <Link to={to}>{content}</Link> : content;
}