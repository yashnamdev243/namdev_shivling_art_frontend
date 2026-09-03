// import { Button } from "antd";
// import { motion } from "framer-motion";
// import {
//   PhoneOutlined,
//   WhatsAppOutlined,
//   MailOutlined,
// } from "@ant-design/icons";

// import Container from "./Container";
// import SectionTitle from "./SectionTitle";
// import { SITE } from "../../config/constants";
// import { CONTACT_CTA_CONTENT } from "../../config/content";
// import { useContent } from "../../context/LanguageContext";

// export default function ContactCTA() {
//   const t = useContent(CONTACT_CTA_CONTENT);

//   const contactCards = [
//     {
//       key: "phone",
//       icon: <PhoneOutlined aria-hidden="true" />,
//       title: t.cards.phone.title,
//       hint: t.cards.phone.hint,
//       value: SITE.phone,
//       href: SITE.phoneRaw ? `tel:${SITE.phoneRaw}` : undefined,
//       color: "orange",
//     },
//     {
//       key: "whatsapp",
//       icon: <WhatsAppOutlined aria-hidden="true" />,
//       title: t.cards.whatsapp.title,
//       hint: t.cards.whatsapp.hint,
//       value: t.cards.whatsapp.value,
//       href: SITE.social?.whatsapp,
//       external: true,
//       color: "green",
//     },
//     {
//       key: "email",
//       icon: <MailOutlined aria-hidden="true" />,
//       title: t.cards.email.title,
//       hint: t.cards.email.hint,
//       value: SITE.email,
//       href: SITE.email ? `mailto:${SITE.email}` : undefined,
//       color: "blue",
//     },
//   ].filter((card) => card.href);

//   const colorClasses = {
//     orange: {
//       border: "border-orange-100",
//       chip: "bg-orange-100 text-orange-600",
//       text: "text-orange-600",
//     },
//     green: {
//       border: "border-green-100",
//       chip: "bg-green-100 text-green-600",
//       text: "text-green-600",
//     },
//     blue: {
//       border: "border-blue-100",
//       chip: "bg-blue-100 text-blue-600",
//       text: "text-blue-600",
//     },
//   };

//   return (
//     <section className="relative overflow-hidden py-6">
//       <div className="pointer-events-none absolute -top-24 left-0 h-56 w-56 rounded-full bg-orange-300/20 blur-[90px] sm:h-80 sm:w-80 sm:blur-[120px]" />
//       <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-amber-300/20 blur-[100px] sm:h-96 sm:w-96 sm:blur-[140px]" />

//       <Container>
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="relative"
//         >
//           <div className="relative px-4 py-12 sm:px-8 sm:py-16 lg:px-20">
//             <SectionTitle subtitle={t.subtitle} title={t.title} />

//             <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
//               {t.description}
//             </p>

//             {/* Buttons */}
//             <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-5">
//               {SITE.social?.whatsapp && (
//                 <a
//                   href={SITE.social.whatsapp}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full sm:w-auto"
//                 >
//                   <Button
//                     size="large"
//                     icon={<WhatsAppOutlined />}
//                     className="!h-13 !w-full !rounded-2xl !border-0 !bg-gradient-to-r !from-green-500 !to-emerald-600 !px-8 !font-semibold !text-white hover:!shadow-xl sm:!h-14 sm:!w-auto"
//                   >
//                     {t.whatsapp}
//                   </Button>
//                 </a>
//               )}

//               {SITE.phoneRaw && (
//                 <a href={`tel:${SITE.phoneRaw}`} className="w-full sm:w-auto">
//                   <Button
//                     size="large"
//                     icon={<PhoneOutlined />}
//                     className="!h-13 !w-full !rounded-2xl !border-orange-200 !bg-white !px-8 !font-semibold !text-orange-600 hover:!border-orange-500 hover:!text-orange-700 sm:!h-14 sm:!w-auto"
//                   >
//                     {t.call}
//                   </Button>
//                 </a>
//               )}

//               {SITE.email && (
//                 <a href={`mailto:${SITE.email}`} className="w-full sm:w-auto">
//                   <Button
//                     size="large"
//                     icon={<MailOutlined />}
//                     className="!h-13 !w-full !rounded-2xl !border-orange-200 !bg-white !px-8 !font-semibold !text-orange-600 hover:!border-orange-500 hover:!text-orange-700 sm:!h-14 sm:!w-auto"
//                   >
//                     {t.email}
//                   </Button>
//                 </a>
//               )}
//             </div>

//             {/* Contact Cards */}
//             {contactCards.length > 0 && (
//               <div className="mt-14 grid gap-6 sm:mt-20 sm:gap-8 md:grid-cols-3">
//                 {contactCards.map((card) => {
//                   const c = colorClasses[card.color];
//                   return (
//                     <motion.a
//                       key={card.key}
//                       href={card.href}
//                       target={card.external ? "_blank" : undefined}
//                       rel={card.external ? "noopener noreferrer" : undefined}
//                       whileHover={{ y: -8 }}
//                       className={`block rounded-3xl border ${c.border} bg-white p-6 text-center shadow-sm transition-all hover:shadow-xl sm:p-8`}
//                     >
//                       <div
//                         className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-2xl sm:h-16 sm:w-16 sm:text-3xl ${c.chip}`}
//                       >
//                         {card.icon}
//                       </div>
//                       <h3 className="mt-5 text-lg font-bold text-slate-900 sm:mt-6 sm:text-xl">
//                         {card.title}
//                       </h3>
//                       <p className="mt-2 text-sm text-gray-500 sm:text-base">
//                         {card.hint}
//                       </p>
//                       <p
//                         className={`mt-3 text-base font-semibold sm:mt-4 sm:text-lg ${c.text}`}
//                       >
//                         {card.value}
//                       </p>
//                     </motion.a>
//                   );
//                 })}
//               </div>
//             )}
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
import { CONTACT_CTA_CONTENT } from "../../config/content";
import { useContent } from "../../context/LanguageContext";

export default function ContactCTA() {
  const t = useContent(CONTACT_CTA_CONTENT);

  const contactCards = [
    {
      key: "phone",
      icon: <PhoneOutlined aria-hidden="true" />,
      title: t.cards.phone.title,
      hint: t.cards.phone.hint,
      value: SITE.phone,
      href: SITE.phoneRaw ? `tel:${SITE.phoneRaw}` : undefined,
      color: "orange",
    },
    {
      key: "whatsapp",
      icon: <WhatsAppOutlined aria-hidden="true" />,
      title: t.cards.whatsapp.title,
      hint: t.cards.whatsapp.hint,
      value: t.cards.whatsapp.value,
      href: SITE.social?.whatsapp,
      external: true,
      color: "green",
    },
    {
      key: "email",
      icon: <MailOutlined aria-hidden="true" />,
      title: t.cards.email.title,
      hint: t.cards.email.hint,
      value: SITE.email,
      href: SITE.email ? `mailto:${SITE.email}` : undefined,
      color: "blue",
    },
  ].filter((card) => card.href);

  // Unified neutral/gold system — WhatsApp is the only card that keeps a
  // semantic brand color, since it's instantly recognizable to visitors.
  const colorClasses = {
    orange: {
      border: "border-[#D4AF6A]/20",
      chip: "bg-[#A8823C]/[0.08] text-[#A8823C]",
      text: "text-[#A8823C]",
    },
    green: {
      border: "border-emerald-400/20",
      chip: "bg-emerald-400/[0.08] text-emerald-300",
      text: "text-emerald-300",
    },
    blue: {
      border: "border-[#D4AF6A]/20",
      chip: "bg-[#A8823C]/[0.08] text-[#A8823C]",
      text: "text-[#A8823C]",
    },
  };

  return (
    <section className="relative overflow-hidden py-6">
      <Container>
        <SectionTitle subtitle={t.subtitle} title={t.title} />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[8px] bg-[#15130F] sm:rounded-[6px]"
        >
          {/* Ambient gold glow + vignette */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#D4AF6A]/[0.08] blur-[130px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
          />
          <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-[#D4AF6A]/[0.10] sm:rounded-[36px]" />

          <div className="relative px-4 py-8 sm:px-4 sm:py-6 lg:px-20">

            <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-7 text-[#C9C2B4] sm:mt-6 sm:text-lg sm:leading-8">
              {t.description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-5">
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
                    className="!flex !h-13 !w-full !items-center !justify-center !gap-2 !rounded-2xl !border-none !bg-gradient-to-br !from-[#123524] !to-[#1A4A33] !px-8 !font-medium !text-[#F2E3C8] !shadow-none transition-all duration-200 hover:!-translate-y-0.5 sm:!h-14 sm:!w-auto"
                  >
                    {t.whatsapp}
                  </Button>
                </a>
              )}

              {SITE.phoneRaw && (
                <a href={`tel:${SITE.phoneRaw}`} className="w-full sm:w-auto">
                  <Button
                    size="large"
                    icon={<PhoneOutlined />}
                    className="!flex !h-13 !w-full !items-center !justify-center !gap-2 !rounded-2xl !border !border-[#D4AF6A]/25 !bg-white/[0.03] !px-8 !font-medium !text-[#F2E3C8] !shadow-none backdrop-blur-md transition-all duration-200 hover:!-translate-y-0.5 hover:!border-[#D4AF6A]/50 sm:!h-14 sm:!w-auto"
                  >
                    {t.call}
                  </Button>
                </a>
              )}

              {SITE.email && (
                <a href={`mailto:${SITE.email}`} className="w-full sm:w-auto">
                  <Button
                    size="large"
                    icon={<MailOutlined />}
                    className="!flex !h-13 !w-full !items-center !justify-center !gap-2 !rounded-2xl !border !border-[#D4AF6A]/25 !bg-white/[0.03] !px-8 !font-medium !text-[#F2E3C8] !shadow-none backdrop-blur-md transition-all duration-200 hover:!-translate-y-0.5 hover:!border-[#D4AF6A]/50 sm:!h-14 sm:!w-auto"
                  >
                    {t.email}
                  </Button>
                </a>
              )}
            </div>

            {/* Contact Cards */}
            {contactCards.length > 0 && (
              <div className="mt-12 grid gap-5 sm:mt-15 sm:gap-6 md:grid-cols-3">
                {contactCards.map((card) => {
                  const c = colorClasses[card.color];
                  return (
                    <motion.a
                      key={card.key}
                      href={card.href}
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noopener noreferrer" : undefined}
                      whileHover={{ y: -6 }}
                      className={`block rounded-2xl border ${c.border} bg-white/[0.03] p-6 text-center backdrop-blur-md transition-all duration-200 hover:bg-white/[0.05] sm:p-7`}
                    >
                      <div
                        className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl text-xl sm:h-14 sm:w-14 sm:text-2xl ${c.chip}`}
                      >
                        {card.icon}
                      </div>
                      <h3 className="mt-4 text-base font-semibold text-[#F8F4EA] sm:mt-5 sm:text-lg">
                        {card.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-[#8A8377] sm:text-sm">
                        {card.hint}
                      </p>
                      <p
                        className={`mt-3 text-sm font-medium sm:text-base ${c.text}`}
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