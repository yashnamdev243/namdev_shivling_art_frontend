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
    return <section className="py-16"><Container><div className="flex justify-center"><Spin /></div></Container></section>;
  }

  if (!items.length) return null;
  const item = items[current];

  return (
    <section className="relative overflow-hidden py-6">
      <Container>
        <SectionTitle subtitle={t.subtitle} title={t.title} />
        <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
          className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-[24px] border border-orange-100 bg-white/80 p-6 shadow-[0_20px_60px_rgba(249,115,22,.12)] sm:mt-20 sm:rounded-[36px] sm:p-10 lg:p-16">
          <div className="relative z-10">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-2xl font-bold text-white shadow-lg">"</div>
            <AnimatePresence mode="wait">
              <motion.div key={item.id || `${item.name}-${current}`} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.45 }}>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 p-1 shadow-xl sm:h-28 sm:w-28">
                  <Avatar size={72} src={item.avatar ? getFileUrl(item.avatar) : undefined} icon={<UserOutlined />} className="bg-white text-orange-600 sm:!h-[104px] sm:!w-[104px]" />
                </div>
                <h3 className="mt-6 text-center text-2xl font-bold text-slate-900 sm:mt-8 sm:text-3xl">{item.name || "Customer"}</h3>
                {item.city && <p className="mt-2 text-center text-sm text-gray-500 sm:text-base">{item.city}</p>}
                <div className="mt-4 flex justify-center sm:mt-5"><Rate disabled value={Number(item.rating) || 0} /></div>
                <p className="mx-auto mt-7 max-w-3xl text-center text-base italic leading-8 text-gray-600 sm:mt-10 sm:text-xl sm:leading-9">"{item.review}"</p>
              </motion.div>
            </AnimatePresence>
            {items.length > 1 && (
              <div className="mt-9 flex items-center justify-center gap-4 sm:mt-12 sm:gap-5">
                <button onClick={() => setCurrent((p) => (p === 0 ? items.length - 1 : p - 1))} aria-label="Previous testimonial" className="group flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 bg-white text-orange-600 shadow-md hover:bg-orange-500 hover:text-white"><LeftOutlined /></button>
                <div className="flex gap-2">
                  {items.map((x, i) => <button key={x.id || `${x.name}-${i}`} onClick={() => setCurrent(i)} aria-label={`Show testimonial from ${x.name}`} className={`h-2 rounded-full ${i === current ? "w-8 bg-gradient-to-r from-orange-500 to-amber-500" : "w-2 bg-orange-100"}`} />)}
                </div>
                <button onClick={() => setCurrent((p) => (p + 1) % items.length)} aria-label="Next testimonial" className="group flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 bg-white text-orange-600 shadow-md hover:bg-orange-500 hover:text-white"><RightOutlined /></button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
