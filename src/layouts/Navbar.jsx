import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import { MenuOutlined, PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons";

import MobileDrawer from "./MobileDrawer";
import BrandLogo from "../components/common/BrandLogo";
import { SITE } from "../config/constants";
import { ROUTES } from "../config/routes";

const navItems = [
  { label: "Home", path: ROUTES.home },
  { label: "Products", path: ROUTES.products },
  { label: "Gallery", path: ROUTES.gallery },
  { label: "About", path: ROUTES.about },
  { label: "Contact", path: ROUTES.contact },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <BrandLogo />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === ROUTES.home}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive ? "text-brand-700" : "text-gray-700 hover:text-brand-700"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button icon={<PhoneOutlined />} href={`tel:${SITE.phoneRaw}`} className="rounded-full">
            Call
          </Button>

          <Button
            type="primary"
            icon={<WhatsAppOutlined />}
            href={SITE.social.whatsapp}
            target="_blank"
            className="!bg-green-600 hover:!bg-green-700 !border-none rounded-full"
          >
            WhatsApp
          </Button>
        </div>

        {/* Mobile Menu */}
        <button onClick={() => setOpen(true)} className="lg:hidden text-2xl text-brand-800">
          <MenuOutlined />
        </button>
      </div>

      <MobileDrawer open={open} onClose={() => setOpen(false)} navItems={navItems} />
    </>
  );
}
