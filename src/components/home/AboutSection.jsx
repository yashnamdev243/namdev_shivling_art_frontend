import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

import Container from "./Container";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-6">
      <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-orange-300/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-300/20 blur-[140px]" />
      <Container>
        {/* 
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

        </div> */}
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute -left-12 -top-12 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-[32px] border border-orange-100 bg-white p-3 shadow-[0_25px_70px_rgba(249,115,22,.18)]">
              <img
                src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1000"
                alt="About"
                className="h-[620px] w-full rounded-[24px] object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Experience Card */}
            <motion.div
              whileHover={{ y: -6 }}
              className="absolute -bottom-10 left-8 rounded-3xl border border-orange-100 bg-white/90 px-8 py-6 shadow-xl backdrop-blur-xl"
            >
              <h3 className="text-5xl font-bold text-orange-600">20+</h3>

              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-gray-500">
                Years Experience
              </p>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-orange-600">
              About Us
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
              Namdev
              <span className="block text-orange-600">
                Narmadeshwar Shivling Art
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              We specialize in authentic Narmadeshwar Shivlings, handcrafted
              idols, Jaldhara, Nandi, Shiv Parivar, and many other sacred
              spiritual creations crafted with devotion and traditional
              artistry.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              Our mission is to preserve centuries-old craftsmanship while
              delivering premium spiritual products that inspire faith, peace
              and divine energy in every home and temple.
            </p>

            {/* Stats */}

            <div className="mt-12 grid grid-cols-2 gap-5">
              {[
                ["20+", "Years Experience"],
                ["5000+", "Happy Customers"],
                ["100+", "Sacred Products"],
                ["24×7", "Customer Support"],
              ].map(([value, label]) => (
                <motion.div
                  whileHover={{ y: -5 }}
                  key={label}
                  className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:shadow-xl"
                >
                  <h3 className="text-4xl font-bold text-orange-600">
                    {value}
                  </h3>

                  <p className="mt-2 text-gray-500">{label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}

            <Button
              size="large"
              icon={<ArrowRightOutlined />}
              className="
        !mt-12
        !h-14
        !rounded-2xl
        !border-0
        !bg-gradient-to-r
        !from-orange-500
        !to-amber-500
        !px-8
        !font-semibold
        hover:!shadow-xl
      "
            >
              Discover Our Story
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
