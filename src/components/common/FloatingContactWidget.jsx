import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WhatsAppOutlined, ArrowUpOutlined, CalendarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { SITE } from "../../config/constants";

/**
 * Site-wide floating action cluster:
 *  - WhatsApp quick-chat bubble (primary contact channel for this business)
 *  - "Book a Consultation" bubble that deep-links to the contact page
 *  - Back-to-top button
 *
 * Everything is hidden until the visitor has scrolled past the hero, so it
 * never competes with the hero's own CTAs, and it respects
 * prefers-reduced-motion for the idle pulse ring.
 *
 * Currently mounted on the Home page only. If you want it on every page,
 * move the <FloatingContactWidget /> render into your root layout /
 * App.jsx instead.
 */
export default function FloatingContactWidget({ showAfter = 480 }) {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > showAfter);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);
    const handler = (e) => setReduceMotion(e.matches);
    query.addEventListener?.("change", handler);
    return () => query.removeEventListener?.("change", handler);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!SITE.social?.whatsapp) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-6"
        >
          {/* Back to top */}
          <AnimatePresence>
            <motion.button
              key="to-top"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              whileHover={{ y: -3 }}
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-200 bg-white text-orange-600 shadow-lg transition hover:border-orange-400 sm:h-11 sm:w-11"
            >
              <ArrowUpOutlined aria-hidden="true" />
            </motion.button>
          </AnimatePresence>

          {/* Book a consultation bubble */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/contact"
                  className="flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2.5 text-sm font-semibold text-orange-700 shadow-lg transition hover:border-orange-400 hover:shadow-xl"
                >
                  <CalendarOutlined aria-hidden="true" />
                  Book a Consultation
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp bubble */}
          <div className="relative">
            {!reduceMotion && (
              <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-green-400/60" />
            )}
            <motion.a
              href={SITE.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setExpanded(true)}
              onMouseLeave={() => setExpanded(false)}
              onFocus={() => setExpanded(true)}
              onBlur={() => setExpanded(false)}
              onClick={() => setExpanded(false)}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-2xl !text-white shadow-[0_15px_35px_rgba(16,185,129,.45)] sm:h-16 sm:w-16"
            >
              <WhatsAppOutlined aria-hidden="true" />
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}