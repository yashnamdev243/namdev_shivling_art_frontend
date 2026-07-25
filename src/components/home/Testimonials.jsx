import { Avatar, Rate } from "antd";
import { motion } from "framer-motion";
import { UserOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";

import Container from "./Container";
import SectionTitle from "./SectionTitle";

const testimonials = [
  {
    name: "Rahul Sharma",
    city: "Indore",
    rating: 5,
    review:
      "The Shivling quality is exceptional. The stone is genuine and beautifully polished. Packaging was excellent.",
  },
  {
    name: "Amit Patel",
    city: "Ahmedabad",
    rating: 5,
    review:
      "Amazing craftsmanship. The delivery was fast and the Shivling exceeded our expectations.",
  },
  {
    name: "Priya Verma",
    city: "Bhopal",
    rating: 5,
    review:
      "Very satisfied with the purchase. Authentic Narmadeshwar Shivling with premium finishing.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const item = testimonials[current];

  return (
    <section className="relative overflow-hidden py-6">
      <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-orange-300/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-300/20 blur-[140px]" />
      <Container>
        <SectionTitle subtitle="Testimonials" title="What Our Customers Say" />

        {/* <motion.div
          key={current}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mt-16 bg-amber-50 rounded-3xl shadow-xl p-12 text-center"
        >
          <Avatar
            size={90}
            icon={<UserOutlined />}
            className="bg-amber-700"
          />

          <h3 className="text-2xl font-bold mt-5">
            {item.name}
          </h3>

          <p className="text-gray-500 mb-3">
            {item.city}
          </p>

          <Rate disabled value={item.rating} />

          <p className="text-gray-700 text-lg leading-8 mt-8 italic">
            "{item.review}"
          </p>

          <div className="flex justify-center gap-5 mt-10">

            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow hover:bg-amber-600 hover:text-white transition"
            >
              <LeftOutlined />
            </button>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow hover:bg-amber-600 hover:text-white transition"
            >
              <RightOutlined />
            </button>

          </div>
        </motion.div> */}
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mt-20 max-w-5xl overflow-hidden rounded-[36px] border border-orange-100 bg-white/80 p-10 shadow-[0_20px_60px_rgba(249,115,22,.12)] backdrop-blur-xl lg:p-16"
        >
          {/* Background */}
          <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-orange-200/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />

          <div className="relative z-10">
            {/* Quote Icon */}
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-3xl font-bold text-white shadow-lg">
              "
            </div>

            {/* Avatar */}
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 p-1 shadow-xl">
              <Avatar
                size={104}
                icon={<UserOutlined />}
                className="bg-white text-orange-600"
              />
            </div>

            {/* Name */}
            <h3 className="mt-8 text-center text-3xl font-bold text-slate-900">
              {item.name}
            </h3>

            <p className="mt-2 text-center text-gray-500">{item.city}</p>

            {/* Rating */}
            <div className="mt-5 flex justify-center">
              <Rate disabled value={item.rating} />
            </div>

            {/* Review */}
            <p className="mx-auto mt-10 max-w-3xl text-center text-xl italic leading-9 text-gray-600">
              "{item.review}"
            </p>

            {/* Navigation */}
            <div className="mt-12 flex items-center justify-center gap-5">
              <button
                onClick={prev}
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-orange-200 bg-white text-lg text-orange-600 shadow-md transition-all duration-300 hover:-translate-x-1 hover:bg-orange-500 hover:text-white hover:shadow-xl"
              >
                <LeftOutlined className="transition-transform duration-300 group-hover:-translate-x-1" />
              </button>

              <div className="h-1 w-20 rounded-full bg-orange-100">
                <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500" />
              </div>

              <button
                onClick={next}
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-orange-200 bg-white text-lg text-orange-600 shadow-md transition-all duration-300 hover:translate-x-1 hover:bg-orange-500 hover:text-white hover:shadow-xl"
              >
                <RightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
