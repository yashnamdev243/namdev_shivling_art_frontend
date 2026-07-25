import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import {
  MenuOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

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
      <header className="sticky top-4 z-50 px-4">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between rounded-2xl border border-white/20 bg-white/80 px-6 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
          <BrandLogo />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2 rounded-full bg-slate-100/80 p-2 shadow-md">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === ROUTES.home}
              >
                {({ isActive }) => (
                  <div
                    className={`relative overflow-hidden rounded-full px-5 py-2.5 font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30"
                        : "text-slate-700 hover:bg-orange-50 hover:text-orange-500"
                    }`}
                  >
                    {item.label}

                    {isActive && (
                      <span className="absolute left-1/2 -bottom-2 h-1 w-8 -translate-x-1/2 rounded-full bg-orange-400" />
                    )}
                  </div>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              icon={<PhoneOutlined className="text-[16px]" />}
              href={`tel:${SITE.phoneRaw}`}
              className="!h-10 !w-full !rounded-full !border-white !bg-gradient-to-r from-orange-500 to-amber-500 !text-white font-semibold shadow-lg"
            >
              Call
            </Button>

            <Button
              type="default"
              icon={<WhatsAppOutlined className="text-[16px]" />}
              href={SITE.social.whatsapp}
              target="_blank"
              className="!h-10 !w-full !rounded-full !border-white !bg-green-500 hover:!bg-green-600 !text-white font-semibold shadow-lg"
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg transition hover:scale-105 hover:bg-orange-600"
          >
            <MenuOutlined className="text-xl" />
          </button>
        </div>
      </header>
      <MobileDrawer
        open={open}
        onClose={() => setOpen(false)}
        navItems={navItems}
      />
    </>
  );
}
