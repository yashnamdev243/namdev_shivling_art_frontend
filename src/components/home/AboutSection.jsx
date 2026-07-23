import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

import Container from "./Container";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1000"
              alt="About"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber-700 font-semibold uppercase tracking-widest">
              About Us
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-6">
              Namdev Narmadeshwar Shivling Art
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              We specialize in authentic Narmadeshwar Shivlings,
              handcrafted idols, Jaldhara, Nandi, Shiv Parivar,
              and other sacred spiritual artifacts.
            </p>

            <p className="text-gray-600 leading-8 mb-8">
              Our mission is to preserve traditional craftsmanship
              while delivering premium-quality products that inspire
              devotion and spirituality in every home and temple.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">

              <div>
                <h3 className="text-4xl font-bold text-amber-700">
                  20+
                </h3>
                <p>Years Experience</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-amber-700">
                  5000+
                </h3>
                <p>Happy Customers</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-amber-700">
                  100+
                </h3>
                <p>Products</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-amber-700">
                  24×7
                </h3>
                <p>Support</p>
              </div>

            </div>

            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              className="!bg-amber-700 !border-none"
            >
              Learn More
            </Button>

          </motion.div>

        </div>

      </Container>
    </section>
  );
}