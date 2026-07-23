import { motion } from "framer-motion";
import {
  SafetyCertificateOutlined,
  CustomerServiceOutlined,
  TrophyOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import Container from "./Container";
import SectionTitle from "./SectionTitle";

const features = [
  {
    icon: <SafetyCertificateOutlined />,
    title: "100% Authentic",
    description:
      "Every Narmadeshwar Shivling is sourced from the sacred Narmada River and carefully verified.",
  },
  {
    icon: <CustomerServiceOutlined />,
    title: "Customer Support",
    description:
      "Our team is always available to guide you in selecting the perfect Shivling for your temple or home.",
  },
  {
    icon: <TrophyOutlined />,
    title: "Premium Craftsmanship",
    description:
      "Each product is handcrafted with precision and devotion by experienced artisans.",
  },
  {
    icon: <ThunderboltOutlined />,
    title: "Fast Delivery",
    description:
      "Secure packaging and quick delivery across India with complete safety.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-amber-50">
      <Container>

        <SectionTitle
          subtitle="Why Choose Us"
          title="Trusted by Thousands of Devotees"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-lg p-8 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-4xl mx-auto mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}