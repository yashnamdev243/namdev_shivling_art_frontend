import { Link } from "react-router-dom";
import { SITE } from "../../config/constants";

/**
 * BrandLogo
 * Inline SVG mark so the brand identity doesn't depend on an external
 * image asset being present. Swap the <svg> below for a real logo file
 * (e.g. `/logo.svg` in /public) whenever the client supplies one —
 * every place that needs the logo imports this single component.
 */
export default function BrandLogo({ to = "/", size = "md", light = false }) {
  const dims = size === "sm" ? "w-10 h-10" : size === "lg" ? "w-16 h-16" : "w-12 h-12";

  const content = (
    <div className="flex items-center gap-3 select-none group">
      <div
        className={`${dims} rounded-full flex items-center justify-center shrink-0 shadow-soft transition-transform group-hover:scale-105`}
        style={{
          background: "linear-gradient(135deg, #a8511f 0%, #8a4019 55%, #5c2c18 100%)",
        }}
      >
        <span className="font-display text-gold-200 text-xl leading-none">ॐ</span>
      </div>
      <div>
        <h2
          className={`font-display font-bold leading-tight ${
            size === "lg" ? "text-2xl" : "text-lg"
          } ${light ? "text-white" : "text-brand-800"}`}
        >
          {SITE.shortName}
        </h2>
        <p className={`text-[11px] tracking-wide uppercase ${light ? "text-gold-200/80" : "text-gray-500"}`}>
          {SITE.tagline}
        </p>
      </div>
    </div>
  );

  if (!to) return content;
  return <Link to={to}>{content}</Link>;
}
