import { Button } from "antd";
import { motion } from "framer-motion";
import { ArrowRightOutlined, WhatsAppOutlined } from "@ant-design/icons";

import Container from "./Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 pt-12">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1800&auto=format&fit=crop')",
          }}
        />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-112px)] py-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-semibold mb-6">
              🕉 Authentic Narmadeshwar Shivlings
            </span>

            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-stone-900">
              Namdev
              <span className="block text-amber-700">Narmadeshwar</span>
              Shivling Art
            </h1>

            <p className="mt-8 text-lg lg:text-xl leading-9 text-gray-600 max-w-xl">
              Discover handcrafted Narmadeshwar Shivlings made from sacred
              stones collected from the holy Narmada River. Every Shivling
              represents devotion, spirituality and traditional craftsmanship.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                className="!bg-amber-700 !border-none !rounded-full !px-8 !h-12"
              >
                Explore Collection
              </Button>

              <Button
                size="large"
                icon={<WhatsAppOutlined />}
                className="!rounded-full !px-8 !h-12"
              >
                Contact Us
              </Button>
            </div>

            {/* Counter */}
            <div className="grid grid-cols-3 gap-8 mt-20">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-amber-700">
                  20+
                </h2>
                <p className="mt-2 text-gray-600">Years Experience</p>
              </div>

              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-amber-700">
                  5000+
                </h2>
                <p className="mt-2 text-gray-600">Happy Customers</p>
              </div>

              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-amber-700">
                  100+
                </h2>
                <p className="mt-2 text-gray-600">Designs</p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src="/image2.jpg"
              alt="Narmadeshwar Shivling"
              className="w-full h-[550px] rounded-[40px] object-cover shadow-2xl"
            />

            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl px-8 py-5">
              <h3 className="font-bold text-xl">Premium Quality</h3>
              <p className="text-gray-500">Sacred Narmada Stone</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
