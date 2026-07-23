import { Avatar, Rate } from "antd";
import { motion } from "framer-motion";
import {
  UserOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
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
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const item = testimonials[current];

  return (
    <section className="py-24 bg-white">
      <Container>

        <SectionTitle
          subtitle="Testimonials"
          title="What Our Customers Say"
        />

        <motion.div
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
        </motion.div>

      </Container>
    </section>
  );
}