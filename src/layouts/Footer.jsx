// import { NavLink } from "react-router-dom";
// import {
//   FacebookOutlined,
//   InstagramOutlined,
//   WhatsAppOutlined,
//   YoutubeOutlined,
//   PhoneOutlined,
//   MailOutlined,
//   EnvironmentOutlined,
// } from "@ant-design/icons";

// import BrandLogo from "../components/common/BrandLogo";
// import { SITE, FALLBACK_CATEGORIES } from "../config/constants";
// import { ROUTES } from "../config/routes";

// const quickLinks = [
//   { name: "Home", path: ROUTES.home },
//   { name: "About", path: ROUTES.about },
//   { name: "Products", path: ROUTES.products },
//   { name: "Gallery", path: ROUTES.gallery },
//   { name: "Contact", path: ROUTES.contact },
// ];

// export default function Footer() {
//   return (
//     <footer className=" bg-stone-950 text-gray-300">
//       {/* Top Section */}
//       <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
//         {/* Company */}
//         <div>
//           <div className="mb-5">
//             <BrandLogo light />
//           </div>

//           <p className="leading-7 text-gray-400">{SITE.description}</p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="mb-5 text-lg font-semibold text-white">Quick Links</h3>
//           <ul className="space-y-3">
//             {quickLinks.map((item) => (
//               <li key={item.path}>
//                 <NavLink to={item.path} className="transition hover:text-gold-400">
//                   {item.name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Categories */}
//         <div>
//           <h3 className="mb-5 text-lg font-semibold text-white">Categories</h3>
//           <ul className="space-y-3">
//             {FALLBACK_CATEGORIES.map((item) => (
//               <li key={item}>
//                 <NavLink
//                   to={`${ROUTES.products}?category=${encodeURIComponent(item)}`}
//                   className="cursor-pointer transition hover:text-gold-400"
//                 >
//                   {item}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="mb-5 text-lg font-semibold text-white">Contact Us</h3>

//           <div className="space-y-5">
//             <div className="flex gap-3">
//               <EnvironmentOutlined className="mt-1 text-xl text-gold-400" />
//               <p>{SITE.address}</p>
//             </div>

//             <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-3 hover:text-gold-400">
//               <PhoneOutlined />
//               {SITE.phone}
//             </a>

//             <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 hover:text-gold-400">
//               <MailOutlined />
//               {SITE.email}
//             </a>

//             <a
//               href={SITE.social.whatsapp}
//               target="_blank"
//               rel="noreferrer"
//               className="flex items-center gap-3 hover:text-green-400"
//             >
//               <WhatsAppOutlined />
//               WhatsApp Chat
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Social */}
//       <div className="border-t border-stone-800">
//         <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
//           <p className="text-center text-sm text-gray-500 md:text-left">
//             &copy; {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
//           </p>

//           <div className="flex items-center gap-5 text-2xl">
//             <a href={SITE.social.facebook} className="transition hover:text-blue-500">
//               <FacebookOutlined />
//             </a>
//             <a href={SITE.social.instagram} className="transition hover:text-pink-500">
//               <InstagramOutlined />
//             </a>
//             <a href={SITE.social.whatsapp} target="_blank" rel="noreferrer" className="transition hover:text-green-500">
//               <WhatsAppOutlined />
//             </a>
//             <a href={SITE.social.youtube} className="transition hover:text-red-500">
//               <YoutubeOutlined />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }



import { NavLink } from "react-router-dom";
import {
  FacebookOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

import BrandLogo from "../components/common/BrandLogo";
import { SITE, FALLBACK_CATEGORIES } from "../config/constants";
import { ROUTES } from "../config/routes";

const quickLinks = [
  { name: "Home", path: ROUTES.home },
  { name: "About", path: ROUTES.about },
  { name: "Products", path: ROUTES.products },
  { name: "Gallery", path: ROUTES.gallery },
  { name: "Contact", path: ROUTES.contact },
];

function FooterHeading({ children }) {
  return (
    <h3 className="mb-6 flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#D4AF6A]">
      {children}
      <span className="h-px w-6 bg-[#D4AF6A]/40" aria-hidden="true" />
    </h3>
  );
}

function FooterLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className="group flex items-center gap-1.5 text-[15px] text-[#C9C2B4] transition-colors duration-200 hover:text-[#F2E3C8]"
    >
      <span className="transition-transform duration-200 group-hover:translate-x-0.5">
        {children}
      </span>
      <ArrowRightOutlined className="text-[11px] text-[#D4AF6A] opacity-0 transition-all duration-200 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100" />
    </NavLink>
  );
}

const socialLinks = [
  { href: SITE.social.facebook, label: "Facebook", icon: FacebookOutlined },
  { href: SITE.social.instagram, label: "Instagram", icon: InstagramOutlined },
  {
    href: SITE.social.whatsapp,
    label: "WhatsApp",
    icon: WhatsAppOutlined,
    external: true,
  },
  { href: SITE.social.youtube, label: "YouTube", icon: YoutubeOutlined },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#15130F] text-[#C9C2B4]">
      {/* subtle top hairline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF6A]/30 to-transparent" />

      {/* subtle brand glow, single moment of boldness */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#D4AF6A]/[0.06] blur-3xl"
      />

      {/* Top Section */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        {/* Company */}
        <div>
          <div className="mb-6">
            <BrandLogo light />
          </div>

          <p className="max-w-xs text-[15px] leading-7 text-[#8A8377]">
            {SITE.description}
          </p>

          <div className="mt-6 h-px w-12 bg-[#D4AF6A]/30" aria-hidden="true" />

          <p className="mt-4 text-[13px] italic tracking-tight text-[#8A8377]">
            Crafted with devotion &middot; Delivered with care
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <FooterHeading>Explore</FooterHeading>
          <ul className="space-y-4">
            {quickLinks.map((item) => (
              <li key={item.path}>
                <FooterLink to={item.path}>{item.name}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <FooterHeading>Categories</FooterHeading>
          <ul className="space-y-4">
            {FALLBACK_CATEGORIES.map((item) => (
              <li key={item}>
                <FooterLink
                  to={`${ROUTES.products}?category=${encodeURIComponent(item)}`}
                >
                  {item}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <FooterHeading>Connect</FooterHeading>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#D4AF6A]/20 bg-white/[0.03] text-[#D4AF6A]">
                <EnvironmentOutlined className="text-[14px]" />
              </span>
              <p className="pt-1.5 text-[15px] leading-6 text-[#C9C2B4]">
                {SITE.address}
              </p>
            </div>

            <a
              href={`tel:${SITE.phoneRaw}`}
              className="group flex items-center gap-3 text-[15px] text-[#C9C2B4] transition-colors duration-200 hover:text-[#F2E3C8]"
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#D4AF6A]/20 bg-white/[0.03] text-[#D4AF6A] transition-colors duration-200 group-hover:border-[#D4AF6A]/40">
                <PhoneOutlined className="text-[14px]" />
              </span>
              {SITE.phone}
            </a>

            <a
              href={`mailto:${SITE.email}`}
              className="group flex items-center gap-3 text-[15px] text-[#C9C2B4] transition-colors duration-200 hover:text-[#F2E3C8]"
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#D4AF6A]/20 bg-white/[0.03] text-[#D4AF6A] transition-colors duration-200 group-hover:border-[#D4AF6A]/40">
                <MailOutlined className="text-[14px]" />
              </span>
              {SITE.email}
            </a>

            <a
              href={SITE.social.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 text-[15px] text-[#C9C2B4] transition-colors duration-200 hover:text-emerald-300"
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#D4AF6A]/20 bg-white/[0.03] text-[#D4AF6A] transition-colors duration-200 group-hover:border-emerald-400/40 group-hover:text-emerald-300">
                <WhatsAppOutlined className="text-[14px]" />
              </span>
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
          <p className="text-center text-[13px] leading-6 text-[#8A8377] md:text-left">
            &copy; {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, label, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[15px] text-[#C9C2B4] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D4AF6A]/40 hover:text-[#D4AF6A] hover:shadow-[0_6px_18px_rgba(212,175,106,0.15)]"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}