// import { Button } from "antd";
// import { motion } from "framer-motion";
// import {
//   PhoneOutlined,
//   WhatsAppOutlined,
//   MailOutlined,
// } from "@ant-design/icons";

// import Container from "./Container";
// import SectionTitle from "./SectionTitle";

// export default function ContactCTA() {
//   return (
//     <section className="relative overflow-hidden py-6">
//       {/* Background */}
//       <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-orange-300/20 blur-[120px]" />

//       <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-300/20 blur-[140px]" />

//       <Container>
//         <motion.div
//           initial={{ opacity: 0, y: 70 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="relative   "
//         >
//           <div className="absolute inset-0 " />

//           <div className="relative px-8 py-16 lg:px-20">
//             {/* Heading */}

//             <SectionTitle
//               subtitle="Contact Us"
//               title="  Bring Divine Energy

//               Into Your Home"
//             />
//             <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-6xl"></h2>

//             <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
//               Looking for an authentic Narmadeshwar Shivling or a custom
//               spiritual idol? Our team is happy to help you choose the perfect
//               sacred piece for your home or temple.
//             </p>

//             {/* Buttons */}

//             <div className="mt-12 flex flex-wrap justify-center gap-5">
//               <Button
//                 size="large"
//                 icon={<WhatsAppOutlined />}
//                 className="!h-14 !rounded-2xl !border-0 !bg-gradient-to-r !from-green-500 !to-emerald-600 !px-8 !font-semibold !text-white hover:!shadow-xl"
//               >
//                 WhatsApp Us
//               </Button>

//               <Button
//                 size="large"
//                 icon={<PhoneOutlined />}
//                 className="!h-14 !rounded-2xl !border-orange-200 !bg-white !px-8 !font-semibold !text-orange-600 hover:!border-orange-500 hover:!text-orange-700"
//               >
//                 Call Now
//               </Button>

//               <Button
//                 size="large"
//                 icon={<MailOutlined />}
//                 className="!h-14 !rounded-2xl !border-orange-200 !bg-white !px-8 !font-semibold !text-orange-600 hover:!border-orange-500 hover:!text-orange-700"
//               >
//                 Email Us
//               </Button>
//             </div>

//             {/* Contact Cards */}

//             <div className="mt-20 grid gap-8 md:grid-cols-3">
//               <motion.div
//                 whileHover={{ y: -8 }}
//                 className="rounded-3xl border border-orange-100 bg-white p-8 text-center shadow-sm transition-all hover:shadow-xl"
//               >
//                 <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl text-orange-600">
//                   <PhoneOutlined />
//                 </div>

//                 <h3 className="mt-6 text-xl font-bold text-slate-900">
//                   Call Us
//                 </h3>

//                 <p className="mt-2 text-gray-500">
//                   Mon - Sat • 9:00 AM - 7:00 PM
//                 </p>

//                 <p className="mt-4 text-lg font-semibold text-orange-600">
//                   +91 XXXXX XXXXX
//                 </p>
//               </motion.div>

//               <motion.div
//                 whileHover={{ y: -8 }}
//                 className="rounded-3xl border border-green-100 bg-white p-8 text-center shadow-sm transition-all hover:shadow-xl"
//               >
//                 <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl text-green-600">
//                   <WhatsAppOutlined />
//                 </div>

//                 <h3 className="mt-6 text-xl font-bold text-slate-900">
//                   WhatsApp
//                 </h3>

//                 <p className="mt-2 text-gray-500">Get instant assistance</p>

//                 <p className="mt-4 text-lg font-semibold text-green-600">
//                   Usually replies in minutes
//                 </p>
//               </motion.div>

//               <motion.div
//                 whileHover={{ y: -8 }}
//                 className="rounded-3xl border border-blue-100 bg-white p-8 text-center shadow-sm transition-all hover:shadow-xl"
//               >
//                 <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl text-blue-600">
//                   <MailOutlined />
//                 </div>

//                 <h3 className="mt-6 text-xl font-bold text-slate-900">Email</h3>

//                 <p className="mt-2 text-gray-500">Send us your requirements</p>

//                 <p className="mt-4 text-lg font-semibold text-blue-600">
//                   info@example.com
//                 </p>
//               </motion.div>
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
import { SITE } from "../../config/constants";

export default function ContactCTA() {
  const contactCards = [
    {
      key: "phone",
      icon: <PhoneOutlined aria-hidden="true" />,
      title: "Call Us",
      hint: "Mon - Sat • 9:00 AM - 7:00 PM",
      value: SITE.phone,
      href: SITE.phoneRaw ? `tel:${SITE.phoneRaw}` : undefined,
      color: "orange",
    },
    {
      key: "whatsapp",
      icon: <WhatsAppOutlined aria-hidden="true" />,
      title: "WhatsApp",
      hint: "Get instant assistance",
      value: "Usually replies in minutes",
      href: SITE.social?.whatsapp,
      external: true,
      color: "green",
    },
    {
      key: "email",
      icon: <MailOutlined aria-hidden="true" />,
      title: "Email",
      hint: "Send us your requirements",
      value: SITE.email,
      href: SITE.email ? `mailto:${SITE.email}` : undefined,
      color: "blue",
    },
  ].filter((card) => card.href);

  const colorClasses = {
    orange: {
      border: "border-orange-100",
      chip: "bg-orange-100 text-orange-600",
      text: "text-orange-600",
    },
    green: {
      border: "border-green-100",
      chip: "bg-green-100 text-green-600",
      text: "text-green-600",
    },
    blue: {
      border: "border-blue-100",
      chip: "bg-blue-100 text-blue-600",
      text: "text-blue-600",
    },
  };

  return (
    <section className="relative overflow-hidden py-6">
      <div className="pointer-events-none absolute -top-24 left-0 h-56 w-56 rounded-full bg-orange-300/20 blur-[90px] sm:h-80 sm:w-80 sm:blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-amber-300/20 blur-[100px] sm:h-96 sm:w-96 sm:blur-[140px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative px-4 py-12 sm:px-8 sm:py-16 lg:px-20">
            <SectionTitle
              subtitle="Contact Us"
              title="Bring Divine Energy Into Your Home"
            />

            <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
              Looking for an authentic Narmadeshwar Shivling or a custom
              spiritual idol? Our team is happy to help you choose the perfect
              sacred piece for your home or temple.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-5">
              {SITE.social?.whatsapp && (
                <a
                  href={SITE.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="large"
                    icon={<WhatsAppOutlined />}
                    className="!h-13 !w-full !rounded-2xl !border-0 !bg-gradient-to-r !from-green-500 !to-emerald-600 !px-8 !font-semibold !text-white hover:!shadow-xl sm:!h-14 sm:!w-auto"
                  >
                    WhatsApp Us
                  </Button>
                </a>
              )}

              {SITE.phoneRaw && (
                <a href={`tel:${SITE.phoneRaw}`} className="w-full sm:w-auto">
                  <Button
                    size="large"
                    icon={<PhoneOutlined />}
                    className="!h-13 !w-full !rounded-2xl !border-orange-200 !bg-white !px-8 !font-semibold !text-orange-600 hover:!border-orange-500 hover:!text-orange-700 sm:!h-14 sm:!w-auto"
                  >
                    Call Now
                  </Button>
                </a>
              )}

              {SITE.email && (
                <a href={`mailto:${SITE.email}`} className="w-full sm:w-auto">
                  <Button
                    size="large"
                    icon={<MailOutlined />}
                    className="!h-13 !w-full !rounded-2xl !border-orange-200 !bg-white !px-8 !font-semibold !text-orange-600 hover:!border-orange-500 hover:!text-orange-700 sm:!h-14 sm:!w-auto"
                  >
                    Email Us
                  </Button>
                </a>
              )}
            </div>

            {/* Contact Cards */}
            {contactCards.length > 0 && (
              <div className="mt-14 grid gap-6 sm:mt-20 sm:gap-8 md:grid-cols-3">
                {contactCards.map((card) => {
                  const c = colorClasses[card.color];
                  return (
                    <motion.a
                      key={card.key}
                      href={card.href}
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noopener noreferrer" : undefined}
                      whileHover={{ y: -8 }}
                      className={`block rounded-3xl border ${c.border} bg-white p-6 text-center shadow-sm transition-all hover:shadow-xl sm:p-8`}
                    >
                      <div
                        className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-2xl sm:h-16 sm:w-16 sm:text-3xl ${c.chip}`}
                      >
                        {card.icon}
                      </div>
                      <h3 className="mt-5 text-lg font-bold text-slate-900 sm:mt-6 sm:text-xl">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500 sm:text-base">
                        {card.hint}
                      </p>
                      <p
                        className={`mt-3 text-base font-semibold sm:mt-4 sm:text-lg ${c.text}`}
                      >
                        {card.value}
                      </p>
                    </motion.a>
                  );
                })}
              </div>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
