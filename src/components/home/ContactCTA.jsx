// import { Button } from "antd";
// import { motion } from "framer-motion";
// import {
//   PhoneOutlined,
//   WhatsAppOutlined,
//   MailOutlined,
// } from "@ant-design/icons";

// import Container from "./Container";

// export default function ContactCTA() {
//   return (
//     <section className="relative overflow-hidden py-6">
//       <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-orange-300/20 blur-[120px]" />

//       <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-300/20 blur-[140px]" />
//       <Container>
//         <motion.div
//           initial={{ opacity: 0, y: 70 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center max-w-4xl mx-auto"
//         >
//           <span className="uppercase tracking-[5px] font-semibold text-amber-700">
//             Contact Us
//           </span>

//           <h2 className="text-5xl font-bold mt-4 mb-6">
//             Bring Divine Energy
//             <br />
//             Into Your Home
//           </h2>

//           <p className="text-lg text-amber-600 mt-8 leading-8">
//             Looking for an authentic Narmadeshwar Shivling or a custom spiritual
//             idol? Our team is here to help you choose the perfect sacred piece
//             for your home or temple.
//           </p>

//           <div className="flex flex-wrap justify-center gap-5 mt-12">
//             <Button
//               size="large"
//               type="primary"
//               icon={<WhatsAppOutlined />}
//               className="!bg-green-600 !border-none px-8"
//             >
//               WhatsApp Us
//             </Button>

//             <Button size="large" icon={<PhoneOutlined />} className="px-8">
//               Call Now
//             </Button>

//             <Button size="large" icon={<MailOutlined />} className="px-8">
//               Email Us
//             </Button>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mt-20">
//             <div className="bg-amber-50 backdrop-blur-md rounded-2xl p-6">
//               <PhoneOutlined className="text-4xl mb-4" />

//               <h3 className="text-xl font-bold">Phone</h3>

//               <p className="mt-3 text-amber-600">+91 XXXXX XXXXX</p>
//             </div>

//             <div className="bg-amber-50 backdrop-blur-md rounded-2xl p-6">
//               <WhatsAppOutlined className="text-4xl mb-4" />

//               <h3 className="text-xl font-bold">WhatsApp</h3>

//               <p className="mt-3 text-amber-600">Instant Support</p>
//             </div>

//             <div className="bg-amber-50 backdrop-blur-md rounded-2xl p-6">
//               <MailOutlined className="text-4xl mb-4" />

//               <h3 className="text-xl font-bold">Email</h3>

//               <p className="mt-3 text-amber-600">info@example.com</p>
//             </div>
//           </div>
//         </motion.div>
//       </Container>
//     </section>
//   );
// }

import { Button } from "antd";
import { motion } from "framer-motion";
import {
  PhoneOutlined,
  WhatsAppOutlined,
  MailOutlined,
} from "@ant-design/icons";

import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-6">
      {/* Background */}
      <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-orange-300/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-300/20 blur-[140px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative   "
        >
          <div className="absolute inset-0 " />

          <div className="relative px-8 py-16 lg:px-20">
            {/* Heading */}

            <SectionTitle
              subtitle="Contact Us"
              title="  Bring Divine Energy
              
              Into Your Home"
            />
            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-6xl"></h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              Looking for an authentic Narmadeshwar Shivling or a custom
              spiritual idol? Our team is happy to help you choose the perfect
              sacred piece for your home or temple.
            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Button
                size="large"
                icon={<WhatsAppOutlined />}
                className="!h-14 !rounded-2xl !border-0 !bg-gradient-to-r !from-green-500 !to-emerald-600 !px-8 !font-semibold !text-white hover:!shadow-xl"
              >
                WhatsApp Us
              </Button>

              <Button
                size="large"
                icon={<PhoneOutlined />}
                className="!h-14 !rounded-2xl !border-orange-200 !bg-white !px-8 !font-semibold !text-orange-600 hover:!border-orange-500 hover:!text-orange-700"
              >
                Call Now
              </Button>

              <Button
                size="large"
                icon={<MailOutlined />}
                className="!h-14 !rounded-2xl !border-orange-200 !bg-white !px-8 !font-semibold !text-orange-600 hover:!border-orange-500 hover:!text-orange-700"
              >
                Email Us
              </Button>
            </div>

            {/* Contact Cards */}

            <div className="mt-20 grid gap-8 md:grid-cols-3">
              <motion.div
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-orange-100 bg-white p-8 text-center shadow-sm transition-all hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl text-orange-600">
                  <PhoneOutlined />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  Call Us
                </h3>

                <p className="mt-2 text-gray-500">
                  Mon - Sat • 9:00 AM - 7:00 PM
                </p>

                <p className="mt-4 text-lg font-semibold text-orange-600">
                  +91 XXXXX XXXXX
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-green-100 bg-white p-8 text-center shadow-sm transition-all hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl text-green-600">
                  <WhatsAppOutlined />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  WhatsApp
                </h3>

                <p className="mt-2 text-gray-500">Get instant assistance</p>

                <p className="mt-4 text-lg font-semibold text-green-600">
                  Usually replies in minutes
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-blue-100 bg-white p-8 text-center shadow-sm transition-all hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl text-blue-600">
                  <MailOutlined />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">Email</h3>

                <p className="mt-2 text-gray-500">Send us your requirements</p>

                <p className="mt-4 text-lg font-semibold text-blue-600">
                  info@example.com
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
