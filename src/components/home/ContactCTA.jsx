import { Button } from "antd";
import { motion } from "framer-motion";
import {
  PhoneOutlined,
  WhatsAppOutlined,
  MailOutlined,
} from "@ant-design/icons";

import Container from "./Container";

export default function ContactCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-amber-700 via-orange-600 to-yellow-600 text-white overflow-hidden">
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >

          <span className="uppercase tracking-[5px] font-semibold text-amber-100">
            Contact Us
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-5 leading-tight">
            Bring Divine Energy
            <br />
            Into Your Home
          </h2>

          <p className="text-lg text-amber-100 mt-8 leading-8">
            Looking for an authentic Narmadeshwar Shivling or a custom
            spiritual idol? Our team is here to help you choose the
            perfect sacred piece for your home or temple.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <Button
              size="large"
              type="primary"
              icon={<WhatsAppOutlined />}
              className="!bg-green-600 !border-none px-8"
            >
              WhatsApp Us
            </Button>

            <Button
              size="large"
              icon={<PhoneOutlined />}
              className="px-8"
            >
              Call Now
            </Button>

            <Button
              size="large"
              icon={<MailOutlined />}
              className="px-8"
            >
              Email Us
            </Button>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">

              <PhoneOutlined className="text-4xl mb-4" />

              <h3 className="text-xl font-bold">
                Phone
              </h3>

              <p className="mt-3 text-amber-100">
                +91 XXXXX XXXXX
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">

              <WhatsAppOutlined className="text-4xl mb-4" />

              <h3 className="text-xl font-bold">
                WhatsApp
              </h3>

              <p className="mt-3 text-amber-100">
                Instant Support
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">

              <MailOutlined className="text-4xl mb-4" />

              <h3 className="text-xl font-bold">
                Email
              </h3>

              <p className="mt-3 text-amber-100">
                info@example.com
              </p>

            </div>

          </div>

        </motion.div>

      </Container>
    </section>
  );
}