// import { Drawer, Button } from "antd";
// import { NavLink } from "react-router-dom";
// import { PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons";
// import { SITE } from "../config/constants";
// import UserMenu from "../components/common/UserMenu";
// import AccountButton from "../components/common/AccountButton";

// export default function MobileDrawer({ open, onClose, navItems }) {
//   return (
//     <Drawer
//       title="Menu"
//       placement="right"
//       open={open}
//       onClose={onClose}
//       width={300}
//     >
//       <div className="mb-5">
//         <AccountButton variant="card" />
//       </div>
//       <div className="flex flex-col gap-2">
//         {navItems.map((item) => (
//           <NavLink
//             key={item.path}
//             to={item.path}
//             onClick={onClose}
//             className={({ isActive }) =>
//               `rounded-lg px-4 py-3 font-medium transition ${
//                 isActive ? "bg-brand-100 text-brand-700" : "hover:bg-gray-100"
//               }`
//             }
//           >
//             {item.label}
//           </NavLink>
//         ))}
//       </div>

//       <div className="mt-8 flex flex-col gap-3">
//         <Button icon={<PhoneOutlined />} href={`tel:${SITE.phoneRaw}`} block>
//           Call Now
//         </Button>

//         <Button
//           type="primary"
//           icon={<WhatsAppOutlined />}
//           href={SITE.social.whatsapp}
//           target="_blank"
//           block
//           className="!bg-green-600 hover:!bg-green-700 !border-none"
//         >
//           WhatsApp
//         </Button>
//       </div>
//     </Drawer>
//   );
// }



import { Drawer, Button } from "antd";
import { NavLink } from "react-router-dom";
import {
  CloseOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  ShoppingOutlined,
  PictureOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { SITE } from "../config/constants";
import UserMenu from "../components/common/UserMenu";
import AccountButton from "../components/common/AccountButton";

const NAV_ICONS = {
  Home: HomeOutlined,
  About: InfoCircleOutlined,
  Products: ShoppingOutlined,
  Gallery: PictureOutlined,
  Contact: PhoneOutlined,
};

export default function MobileDrawer({ open, onClose, navItems }) {
  return (
    <Drawer
      placement="right"
      open={open}
      onClose={onClose}
      width={320}
      closeIcon={
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1C1A17]/10 bg-white/60 text-[#1C1A17] transition-all duration-200 hover:border-[#A8823C]/50 hover:text-[#A8823C]">
          <CloseOutlined className="text-sm" />
        </span>
      }
      title={
        <span className="text-[15px] font-semibold tracking-tight text-[#1C1A17]">
          Menu
        </span>
      }
      styles={{
        header: {
          background: "#FBF7EF",
          borderBottom: "1px solid rgba(28,26,23,0.08)",
          padding: "18px 20px",
        },
        body: {
          background: "#FBF7EF",
          padding: "20px",
        },
        content: {
          background: "#FBF7EF",
        },
      }}
    >
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              `group relative flex items-center justify-between gap-3 overflow-hidden rounded-xl px-4 py-3 text-[15px] font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#A8823C]/10 text-[#1C1A17]"
                  : "text-[#4A453D] hover:bg-[#1C1A17]/[0.04] hover:text-[#1C1A17]"
              }`
            }
          >
            {({ isActive }) => {
              const Icon = NAV_ICONS[item.label] || RightOutlined;
              return (
                <>
                  {isActive && (
                    <span className="absolute left-0 top-1/2 h-4 w-[3px] -translate-y-1/2 rounded-full bg-[#A8823C]" />
                  )}
                  <span className="flex items-center gap-3">
                    <Icon
                      className={`text-[16px] ${
                        isActive ? "text-[#A8823C]" : "text-[#4A453D]/70"
                      }`}
                    />
                    {item.label}
                  </span>
                  <RightOutlined
                    className={`text-[11px] transition-transform duration-200 ${
                      isActive
                        ? "text-[#A8823C]"
                        : "text-[#4A453D]/30 group-hover:translate-x-0.5"
                    }`}
                  />
                </>
              );
            }}
          </NavLink>
        ))}
      </nav>

      <div className="my-5 h-px bg-[#1C1A17]/[0.08]" />

      <div className="mb-1">
        <AccountButton variant="card" />
      </div>

      <div className="my-5 h-px bg-[#1C1A17]/[0.08]" />

      <div className="flex flex-col gap-3">
        <Button
          icon={<PhoneOutlined />}
          href={`tel:${SITE.phoneRaw}`}
          block
          className="!flex !h-12 !items-center !justify-center !gap-2 !rounded-2xl !border-[#1C1A17]/15 !bg-transparent !font-medium !text-[#1C1A17] !shadow-none transition-all duration-200 hover:!border-[#A8823C]/60 hover:!text-[#A8823C]"
        >
          Call Now
        </Button>

        <Button
          type="primary"
          icon={<WhatsAppOutlined />}
          href={SITE.social.whatsapp}
          target="_blank"
          block
          className="!flex !h-12 !items-center !justify-center !gap-2 !rounded-2xl !border-none !bg-[#123524] !font-medium !text-[#F2E3C8] !shadow-none transition-all duration-200 hover:!bg-[#1A4A33]"
        >
          WhatsApp
        </Button>
      </div>
    </Drawer>
  );
}