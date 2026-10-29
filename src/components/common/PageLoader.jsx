import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import { FaOm } from "react-icons/fa";

import "nprogress/nprogress.css";
import "./PageLoader.css";

NProgress.configure({
  minimum: 0.04,
  easing: "ease",
  speed: 400,
  trickle: true,
  showSpinner: false,
});

export default function PageLoader() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    NProgress.start();

    const timer = setTimeout(() => {
      NProgress.done();
      setIsLoading(false);
    }, 400);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [location.pathname, location.search, location.hash]);

  if (!isLoading) return null;

  return (
    <div className="page-loader-overlay" aria-label="Loading" role="status">
      <div className="loader-card">
        <div className="loader-aura" />

        <div className="loader-symbol">
          <div className="loader-ring loader-ring-outer" />
          <div className="loader-ring loader-ring-inner" />

          <div className="loader-om">
            <FaOm />
          </div>
        </div>

        <div className="loader-brand">NAMDEV NARMADESHWAR</div>

        <div className="loader-caption">
          Preparing your experience
          <span className="loader-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>

        <div className="loader-progress-track">
          <div className="loader-progress-fill" />
        </div>
      </div>
    </div>
  );
}
