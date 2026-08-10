import { Avatar, Rate } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { UserOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { TESTIMONIALS_CONTENT } from "../../config/content";
import { useContent } from "../../context/LanguageContext";

const AUTOPLAY_DELAY = 6000;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const t = useContent(TESTIMONIALS_CONTENT);

  const next = () => setCurrent((prev) => (prev + 1) % t.items.length);
  const prev = () => setCurrent((p) => (p === 0 ? t.items.length - 1 : p - 1));

  // Auto-advance, but pause on hover/focus so people can actually read.
  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(id);
  }, [paused]);

  const item = t.items[current];

  return (
    <section className="relative overflow-hidden py-6">
      <div className="pointer-events-none absolute -top-24 left-0 h-56 w-56 rounded-full bg-orange-300/20 blur-[90px] sm:h-80 sm:w-80 sm:blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-amber-300/20 blur-[100px] sm:h-96 sm:w-96 sm:blur-[140px]" />

      <Container>
        <SectionTitle subtitle={t.subtitle} title={t.title} />

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-[24px] border border-orange-100 bg-white/80 p-6 shadow-[0_20px_60px_rgba(249,115,22,.12)] backdrop-blur-xl sm:mt-20 sm:rounded-[36px] sm:p-10 lg:p-16"
        >
          {/* Background */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-orange-200/20 blur-3xl sm:h-60 sm:w-60" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-amber-200/20 blur-3xl sm:h-72 sm:w-72" />

          <div className="relative z-10">
            {/* Quote Icon */}
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-2xl font-bold text-white shadow-lg sm:mb-8 sm:h-16 sm:w-16 sm:text-3xl">
              "
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.45 }}
              >
                {/* Avatar */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 p-1 shadow-xl sm:h-28 sm:w-28">
                  <Avatar
                    size={72}
                    icon={<UserOutlined />}
                    className="bg-white text-orange-600 sm:!h-[104px] sm:!w-[104px]"
                  />
                </div>

                <h3 className="mt-6 text-center text-2xl font-bold text-slate-900 sm:mt-8 sm:text-3xl">
                  {item.name}
                </h3>

                <p className="mt-2 text-center text-sm text-gray-500 sm:text-base">
                  {item.city}
                </p>

                <div className="mt-4 flex justify-center sm:mt-5">
                  <Rate disabled value={item.rating} />
                </div>

                <p
                  role="status"
                  aria-live="polite"
                  className="mx-auto mt-7 max-w-3xl text-center text-base italic leading-8 text-gray-600 sm:mt-10 sm:text-xl sm:leading-9"
                >
                  "{item.review}"
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-9 flex items-center justify-center gap-4 sm:mt-12 sm:gap-5">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 bg-white text-base text-orange-600 shadow-md transition-all duration-300 hover:-translate-x-1 hover:bg-orange-500 hover:text-white hover:shadow-xl sm:h-14 sm:w-14 sm:text-lg"
              >
                <LeftOutlined
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                  aria-hidden="true"
                />
              </button>

              <div
                className="flex gap-2"
                role="tablist"
                aria-label="Testimonial selector"
              >
                {t.items.map((t, i) => (
                  <button
                    key={t.name}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Show testimonial from ${t.name}`}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-8 bg-gradient-to-r from-orange-500 to-amber-500"
                        : "w-2 bg-orange-100"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 bg-white text-base text-orange-600 shadow-md transition-all duration-300 hover:translate-x-1 hover:bg-orange-500 hover:text-white hover:shadow-xl sm:h-14 sm:w-14 sm:text-lg"
              >
                <RightOutlined
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
