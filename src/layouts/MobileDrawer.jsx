import { Drawer, Button } from "antd";
import { NavLink } from "react-router-dom";
import { PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { SITE } from "../config/constants";

export default function MobileDrawer({ open, onClose, navItems }) {
  return (
    <Drawer title="Menu" placement="right" open={open} onClose={onClose} width={300}>
      <div className="flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              `rounded-lg px-4 py-3 font-medium transition ${
                isActive ? "bg-brand-100 text-brand-700" : "hover:bg-gray-100"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <Button icon={<PhoneOutlined />} href={`tel:${SITE.phoneRaw}`} block>
          Call Now
        </Button>

        <Button
          type="primary"
          icon={<WhatsAppOutlined />}
          href={SITE.social.whatsapp}
          target="_blank"
          block
          className="!bg-green-600 hover:!bg-green-700 !border-none"
        >
          WhatsApp
        </Button>
      </div>
    </Drawer>
  );
}
