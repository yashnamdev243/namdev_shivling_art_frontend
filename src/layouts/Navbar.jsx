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
import CartWishlistIcons from "../components/common/CartWishlistIcons";
import { SITE } from "../config/constants";
import { ROUTES } from "../config/routes";
import LanguageSwitcher from "../components/common/LanguageSwitcher";
import UserMenu from "../components/common/UserMenu";
import AccountButton from "../components/common/AccountButton";

const navItems = [
  { label: "Home", path: ROUTES.home },
  { label: "About", path: ROUTES.about },
  { label: "Products", path: ROUTES.products },
  { label: "Gallery", path: ROUTES.gallery },
  { label: "Contact", path: ROUTES.contact },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-4 z-50 ">
        <div className="mx-auto flex h-[68px] items-center justify-between gap-2 border border-[#1C1A17]/[0.08] bg-[#FBF7EF]/75 px-4 backdrop-blur-xl shadow-[0_8px_30px_rgba(28,26,23,0.08)] sm:px-5 lg:px-6">
          <div className="flex min-w-0 flex-1 items-center overflow-hidden pr-1 sm:flex-none sm:pr-4">
            <BrandLogo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-0.5 rounded-full  p-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === ROUTES.home}
              >
                {({ isActive }) => (
                  <div
                    className={`
                      relative
                      px-4 py-2.5
                      text-[15px]
                      font-medium
                      tracking-[-0.01em]
                      transition-all duration-300
                      ${isActive ? "text-[#A8823C]" : "text-[#4A453D] hover:text-[#A8823C]"}
                    `}
                  >
                    {item.label}

                    <span
                      className={`
                        absolute
                        bottom-0
                        left-1/2
                        h-[2px]
                        -translate-x-1/2
                        rounded-full
                        bg-[#A8823C]
                        transition-all duration-300
                        ${isActive ? "w-10 opacity-100" : "w-0 opacity-0"}
                      `}
                    />
                  </div>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <LanguageSwitcher />
            <CartWishlistIcons />

            <span
              className="mx-1 h-6 w-px bg-[#1C1A17]/10"
              aria-hidden="true"
            />

            <Button
              icon={<PhoneOutlined className="text-[15px]" />}
              href={`tel:${SITE.phoneRaw}`}
              className="!flex !h-10 !items-center !gap-1.5 !rounded-full !border-[#1C1A17]/15 !bg-transparent !px-4 !font-medium !text-[#1C1A17] !shadow-none transition-all duration-200 hover:!border-[#A8823C]/60 hover:!text-[#A8823C]"
            >
              Call
            </Button>

            <Button
              type="default"
              icon={<WhatsAppOutlined className="text-[15px]" />}
              href={SITE.social.whatsapp}
              target="_blank"
              className="!flex !h-10 !items-center !gap-1.5 !rounded-full !border-none !bg-[#123524] !px-4 !font-medium !text-[#F2E3C8] !shadow-none transition-all duration-200 hover:!bg-[#1A4A33]"
            >
              WhatsApp
            </Button>

            <AccountButton />
          </div>

          {/* Mobile: language/wishlist + menu */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <LanguageSwitcher variant="compact" />
            <CartWishlistIcons />
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1C1A17] text-[#F2E3C8] shadow-md transition-all duration-200 hover:bg-[#2A2620] hover:ring-1 hover:ring-[#A8823C]/40 active:scale-95"
            >
              <MenuOutlined className="text-lg" />
            </button>
          </div>
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
