// import { Avatar, Rate, Spin } from "antd";
// import { motion, AnimatePresence } from "framer-motion";
// import { UserOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
// import { useEffect, useMemo, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import Container from "./Container";
// import SectionTitle from "./SectionTitle";
// import { TESTIMONIALS_CONTENT } from "../../config/content";
// import { useContent } from "../../context/LanguageContext";
// import reviewService from "../../services/reviewService";
// import { io } from "socket.io-client";
// import { API_BASE_URL } from "../../config/api";
// import { useQueryClient } from "@tanstack/react-query";
// import { getFileUrl } from "../../utils/fileUrl";

// const AUTOPLAY_DELAY = 6000;

// export default function Testimonials() {
//   const [current, setCurrent] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const queryClient = useQueryClient();
//   const t = useContent(TESTIMONIALS_CONTENT);

//   useEffect(() => {
//     const socket = io(API_BASE_URL.replace(/\/api\/?$/, ""), { transports: ["websocket"] });
//     const refresh = () => queryClient.invalidateQueries({ queryKey: ["public-testimonials"] });
//     socket.on("review:created", refresh);
//     socket.on("review:updated", refresh);
//     return () => socket.disconnect();
//   }, [queryClient]);

//   const { data, isLoading } = useQuery({
//     queryKey: ["public-testimonials"],
//     queryFn: reviewService.testimonials,
//     staleTime: 30_000,
//   });

//   const items = useMemo(() => {
//     const dynamic = Array.isArray(data?.testimonials) ? data.testimonials : [];
//     return dynamic.length ? dynamic : (t?.items || []);
//   }, [data, t]);

//   useEffect(() => {
//     if (current >= items.length) setCurrent(0);
//   }, [current, items.length]);

//   useEffect(() => {
//     if (paused || items.length <= 1) return undefined;
//     const id = setInterval(() => setCurrent((prev) => (prev + 1) % items.length), AUTOPLAY_DELAY);
//     return () => clearInterval(id);
//   }, [paused, items.length]);

//   if (isLoading && !items.length) {
//     return <section className="py-16"><Container><div className="flex justify-center"><Spin /></div></Container></section>;
//   }

//   if (!items.length) return null;
//   const item = items[current];

//   return (
//     <section className="relative overflow-hidden py-6">
//       <Container>
//         <SectionTitle subtitle={t.subtitle} title={t.title} />
//         <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
//           className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-[24px] border border-orange-100 bg-white/80 p-6 shadow-[0_20px_60px_rgba(249,115,22,.12)] sm:mt-20 sm:rounded-[36px] sm:p-10 lg:p-16">
//           <div className="relative z-10">
//             <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-2xl font-bold text-white shadow-lg">"</div>
//             <AnimatePresence mode="wait">
//               <motion.div key={item.id || `${item.name}-${current}`} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.45 }}>
//                 <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 p-1 shadow-xl sm:h-28 sm:w-28">
//                   <Avatar size={72} src={item.avatar ? getFileUrl(item.avatar) : undefined} icon={<UserOutlined />} className="bg-white text-orange-600 sm:!h-[104px] sm:!w-[104px]" />
//                 </div>
//                 <h3 className="mt-6 text-center text-2xl font-bold text-slate-900 sm:mt-8 sm:text-3xl">{item.name || "Customer"}</h3>
//                 {item.city && <p className="mt-2 text-center text-sm text-gray-500 sm:text-base">{item.city}</p>}
//                 <div className="mt-4 flex justify-center sm:mt-5"><Rate disabled value={Number(item.rating) || 0} /></div>
//                 <p className="mx-auto mt-7 max-w-3xl text-center text-base italic leading-8 text-gray-600 sm:mt-10 sm:text-xl sm:leading-9">"{item.review}"</p>
//               </motion.div>
//             </AnimatePresence>
//             {items.length > 1 && (
//               <div className="mt-9 flex items-center justify-center gap-4 sm:mt-12 sm:gap-5">
//                 <button onClick={() => setCurrent((p) => (p === 0 ? items.length - 1 : p - 1))} aria-label="Previous testimonial" className="group flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 bg-white text-orange-600 shadow-md hover:bg-orange-500 hover:text-white"><LeftOutlined /></button>
//                 <div className="flex gap-2">
//                   {items.map((x, i) => <button key={x.id || `${x.name}-${i}`} onClick={() => setCurrent(i)} aria-label={`Show testimonial from ${x.name}`} className={`h-2 rounded-full ${i === current ? "w-8 bg-gradient-to-r from-orange-500 to-amber-500" : "w-2 bg-orange-100"}`} />)}
//                 </div>
//                 <button onClick={() => setCurrent((p) => (p + 1) % items.length)} aria-label="Next testimonial" className="group flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 bg-white text-orange-600 shadow-md hover:bg-orange-500 hover:text-white"><RightOutlined /></button>
//               </div>
//             )}
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }




// import { Avatar, Rate, Spin } from "antd";
// import { motion, AnimatePresence } from "framer-motion";
// import { UserOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
// import { useEffect, useMemo, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import Container from "./Container";
// import SectionTitle from "./SectionTitle";
// import { TESTIMONIALS_CONTENT } from "../../config/content";
// import { useContent } from "../../context/LanguageContext";
// import reviewService from "../../services/reviewService";
// import { io } from "socket.io-client";
// import { API_BASE_URL } from "../../config/api";
// import { useQueryClient } from "@tanstack/react-query";
// import { getFileUrl } from "../../utils/fileUrl";

// const AUTOPLAY_DELAY = 6000;

// export default function Testimonials() {
//   const [current, setCurrent] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const queryClient = useQueryClient();
//   const t = useContent(TESTIMONIALS_CONTENT);

//   useEffect(() => {
//     const socket = io(API_BASE_URL.replace(/\/api\/?$/, ""), { transports: ["websocket"] });
//     const refresh = () => queryClient.invalidateQueries({ queryKey: ["public-testimonials"] });
//     socket.on("review:created", refresh);
//     socket.on("review:updated", refresh);
//     return () => socket.disconnect();
//   }, [queryClient]);

//   const { data, isLoading } = useQuery({
//     queryKey: ["public-testimonials"],
//     queryFn: reviewService.testimonials,
//     staleTime: 30_000,
//   });

//   const items = useMemo(() => {
//     const dynamic = Array.isArray(data?.testimonials) ? data.testimonials : [];
//     return dynamic.length ? dynamic : (t?.items || []);
//   }, [data, t]);

//   useEffect(() => {
//     if (current >= items.length) setCurrent(0);
//   }, [current, items.length]);

//   useEffect(() => {
//     if (paused || items.length <= 1) return undefined;
//     const id = setInterval(() => setCurrent((prev) => (prev + 1) % items.length), AUTOPLAY_DELAY);
//     return () => clearInterval(id);
//   }, [paused, items.length]);

//   if (isLoading && !items.length) {
//     return <section className="py-16"><Container><div className="flex justify-center"><Spin /></div></Container></section>;
//   }

//   if (!items.length) return null;
//   const item = items[current];

//   return (
//     <section className="relative overflow-hidden py-6">
//       <Container>
//         <SectionTitle subtitle={t.subtitle} title={t.title} />
//         <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
//           className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-[4px] border border-[#D4AF6A]/[0.12] bg-[#15130F] p-6 shadow-[0_25px_70px_rgba(21,19,15,0.25)] sm:mt-20 sm:rounded-[6px] sm:p-10 lg:p-16">
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-[#D4AF6A]/[0.07] blur-3xl"
//           />
//           <div className="relative z-10">
//             <div className="mx-auto mb-4 text-center text-6xl font-serif leading-none text-[#D4AF6A]/30">
//               &ldquo;
//             </div>
//             <AnimatePresence mode="wait">
//               <motion.div key={item.id || `${item.name}-${current}`} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: 0.4 }}>
//                 <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#D4AF6A]/50 p-1 sm:h-24 sm:w-24">
//                   <Avatar size={68} src={item.avatar ? getFileUrl(item.avatar) : undefined} icon={<UserOutlined />} className="bg-[#1C1A17] text-[#D4AF6A] sm:!h-[88px] sm:!w-[88px]" />
//                 </div>
//                 <h3 className="mt-6 text-center text-2xl font-bold text-[#F8F4EA] sm:mt-7 sm:text-3xl">{item.name || "Customer"}</h3>
//                 {item.city && <p className="mt-2 text-center text-sm text-[#8A8377] sm:text-base">{item.city}</p>}
//                 <div className="mt-4 flex justify-center sm:mt-5"><Rate disabled value={Number(item.rating) || 0} /></div>
//                 <p className="mx-auto mt-7 max-w-3xl text-center text-base italic leading-8 text-[#C9C2B4] sm:mt-10 sm:text-xl sm:leading-9">&ldquo;{item.review}&rdquo;</p>
//               </motion.div>
//             </AnimatePresence>
//             {items.length > 1 && (
//               <div className="mt-9 flex items-center justify-center gap-4 sm:mt-12 sm:gap-5">
//                 <button onClick={() => setCurrent((p) => (p === 0 ? items.length - 1 : p - 1))} aria-label="Previous testimonial" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#F8F4EA] transition-colors duration-200 hover:border-[#D4AF6A]/50 hover:text-[#D4AF6A]"><LeftOutlined /></button>
//                 <div className="flex gap-2">
//                   {items.map((x, i) => <button key={x.id || `${x.name}-${i}`} onClick={() => setCurrent(i)} aria-label={`Show testimonial from ${x.name}`} className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-7 bg-[#D4AF6A]" : "w-1.5 bg-white/20"}`} />)}
//                 </div>
//                 <button onClick={() => setCurrent((p) => (p + 1) % items.length)} aria-label="Next testimonial" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#F8F4EA] transition-colors duration-200 hover:border-[#D4AF6A]/50 hover:text-[#D4AF6A]"><RightOutlined /></button>
//               </div>
//             )}
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }



import { Avatar, Rate, Spin } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { UserOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { TESTIMONIALS_CONTENT } from "../../config/content";
import { useContent } from "../../context/LanguageContext";
import reviewService from "../../services/reviewService";
import { io } from "socket.io-client";
import { API_BASE_URL } from "../../config/api";
import { useQueryClient } from "@tanstack/react-query";
import { getFileUrl } from "../../utils/fileUrl";

const AUTOPLAY_DELAY = 6000;

function ReviewCard({ item, active, onClick }) {
  const rating = Number(item.rating) || 0;

  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={`flex h-full flex-col rounded-[16px] border bg-[#f8e5c2] p-5 transition-all duration-300 sm:rounded-[18px] sm:p-7 ${
        active
          ? "border-[#D4AF6A]/40 shadow-[0_20px_50px_rgba(28,26,23,0.1)]"
          : "cursor-pointer border-[#1C1A17]/[0.06] opacity-60 shadow-[0_4px_16px_rgba(28,26,23,0.04)] hover:opacity-90"
      }`}
    >
      <Rate
        disabled
        value={rating}
        className="text-sm [&_.ant-rate-star-full_svg]:!fill-[#A8823C] [&_.ant-rate-star-zero_svg]:!fill-[#1C1A17]/10"
      />

      <p
        className={`mt-4 flex-1 leading-[1.75] text-[#4A453D] ${
          active ? "text-base sm:text-lg" : "line-clamp-4 text-sm"
        }`}
      >
        &ldquo;{item.review}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-3">
        <div className="rounded-full border-2 border-[#D4AF6A] p-0.5">
          <Avatar
            size={active ? 44 : 36}
            src={item.avatar ? getFileUrl(item.avatar) : undefined}
            icon={<UserOutlined />}
            className="!bg-[#F7F2E7] !text-[#A8823C]"
          />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[#1C1A17]">
            {item.name || "Customer"}
          </p>
          {item.city && (
            <p className="truncate text-xs text-[#8A8377]">{item.city}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const queryClient = useQueryClient();
  const t = useContent(TESTIMONIALS_CONTENT);

  useEffect(() => {
    const socket = io(API_BASE_URL.replace(/\/api\/?$/, ""), { transports: ["websocket"] });
    const refresh = () => queryClient.invalidateQueries({ queryKey: ["public-testimonials"] });
    socket.on("review:created", refresh);
    socket.on("review:updated", refresh);
    return () => socket.disconnect();
  }, [queryClient]);

  const { data, isLoading } = useQuery({
    queryKey: ["public-testimonials"],
    queryFn: reviewService.testimonials,
    staleTime: 30_000,
  });

  const items = useMemo(() => {
    const dynamic = Array.isArray(data?.testimonials) ? data.testimonials : [];
    return dynamic.length ? dynamic : (t?.items || []);
  }, [data, t]);

  useEffect(() => {
    if (current >= items.length) setCurrent(0);
  }, [current, items.length]);

  useEffect(() => {
    if (paused || items.length <= 1) return undefined;
    const id = setInterval(() => setCurrent((prev) => (prev + 1) % items.length), AUTOPLAY_DELAY);
    return () => clearInterval(id);
  }, [paused, items.length]);

  if (isLoading && !items.length) {
    return (
      <section className="relative py-16">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF6A]/[0.06] blur-3xl" />
        <Container>
          <div className="flex justify-center">
            <Spin />
          </div>
        </Container>
      </section>
    );
  }

  if (!items.length) return null;
  const item = items[current];
  const prevItem = items.length > 1 ? items[(current - 1 + items.length) % items.length] : null;
  const nextItem = items.length > 1 ? items[(current + 1) % items.length] : null;

  return (
    <section className="relative overflow-hidden py-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#D4AF6A]/[0.06] blur-[130px]"
      />

      <Container>
        <SectionTitle subtitle={t.subtitle} title={t.title} />

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="relative mx-auto mt-12  sm:mt-16  overflow-hidden rounded-[4px] border border-orange-100 bg-[#15130F] p-6 shadow-[0_20px_60px_rgba(249,115,22,.12)] sm:rounded-[8px] sm:p-10 lg:p-16"
        >
          {/* Review rail — active card elevated, neighbours peek through */}
          <div className="grid grid-cols-1 items-stretch gap-4 sm:gap-5 lg:grid-cols-[0.7fr_1.3fr_0.7fr]">
            {prevItem && (
              <div className="hidden lg:block">
                <ReviewCard
                  item={prevItem}
                  onClick={() => setCurrent((current - 1 + items.length) % items.length)}
                />
              </div>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={item.id || `${item.name}-${current}`}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.35 }}
              >
                <ReviewCard item={item} active />
              </motion.div>
            </AnimatePresence>

            {nextItem && (
              <div className="hidden lg:block">
                <ReviewCard
                  item={nextItem}
                  onClick={() => setCurrent((current + 1) % items.length)}
                />
              </div>
            )}
          </div>

          {items.length > 1 && (
            <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10">
              <div className="flex items-center gap-5">
                <button
                  onClick={() => setCurrent((p) => (p === 0 ? items.length - 1 : p - 1))}
                  aria-label="Previous testimonial"
                  className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em]  transition-colors duration-200 text-[#A8823C]"
                >
                  <LeftOutlined className="text-[10px]" /> Previous
                </button>

                <span className="text-xs font-semibold text-[#bbb9b5]">
                  {String(current + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>

                <button
                  onClick={() => setCurrent((p) => (p + 1) % items.length)}
                  aria-label="Next testimonial"
                  className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em]  transition-colors duration-200 text-[#A8823C]"
                >
                  Next <RightOutlined className="text-[10px]" />
                </button>
              </div>

              <div className="flex gap-1.5">
                {items.map((x, i) => (
                  <button
                    key={x.id || `${x.name}-${i}`}
                    onClick={() => setCurrent(i)}
                    aria-label={`Show testimonial from ${x.name}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? "w-6 bg-[#A8823C]" : "w-1.5 bg-[#1C1A17]/15"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}