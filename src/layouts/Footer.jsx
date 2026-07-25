import { NavLink } from "react-router-dom";
import {
  FacebookOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
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

export default function Footer() {
  return (
    <footer className=" bg-stone-950 text-gray-300">
      {/* Top Section */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Company */}
        <div>
          <div className="mb-5">
            <BrandLogo light />
          </div>

          <p className="leading-7 text-gray-400">{SITE.description}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className="transition hover:text-gold-400">
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Categories</h3>
          <ul className="space-y-3">
            {FALLBACK_CATEGORIES.map((item) => (
              <li key={item}>
                <NavLink
                  to={`${ROUTES.products}?category=${encodeURIComponent(item)}`}
                  className="cursor-pointer transition hover:text-gold-400"
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Contact Us</h3>

          <div className="space-y-5">
            <div className="flex gap-3">
              <EnvironmentOutlined className="mt-1 text-xl text-gold-400" />
              <p>{SITE.address}</p>
            </div>

            <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-3 hover:text-gold-400">
              <PhoneOutlined />
              {SITE.phone}
            </a>

            <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 hover:text-gold-400">
              <MailOutlined />
              {SITE.email}
            </a>

            <a
              href={SITE.social.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-green-400"
            >
              <WhatsAppOutlined />
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>

      {/* Social */}
      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
          <p className="text-center text-sm text-gray-500 md:text-left">
            &copy; {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5 text-2xl">
            <a href={SITE.social.facebook} className="transition hover:text-blue-500">
              <FacebookOutlined />
            </a>
            <a href={SITE.social.instagram} className="transition hover:text-pink-500">
              <InstagramOutlined />
            </a>
            <a href={SITE.social.whatsapp} target="_blank" rel="noreferrer" className="transition hover:text-green-500">
              <WhatsAppOutlined />
            </a>
            <a href={SITE.social.youtube} className="transition hover:text-red-500">
              <YoutubeOutlined />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
