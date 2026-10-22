import { Dropdown, Avatar } from "antd";
import { LogoutOutlined, HeartOutlined, HistoryOutlined, DownOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function UserMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const initial = (user.name || "U").trim().charAt(0).toUpperCase();

  const items = [
    {
      key: "info",
      label: (
        <div className="min-w-[180px] px-1 py-1">
          <p className="truncate font-semibold text-slate-900">{user.name}</p>
          <p className="truncate text-xs text-gray-500">{user.email}</p>
        </div>
      ),
      disabled: true,
    },
    { type: "divider" },
    {
      key: "wishlist",
      icon: <HeartOutlined />,
      label: <Link to="/wishlist">My Wishlist</Link>,
    },
    { type: "divider" },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
      danger: true,
      onClick: () => {
        logout();
        navigate("/");
      },
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]} placement="bottomRight">
      <button
        type="button"
        className="flex items-center gap-2 rounded-full border border-orange-200 bg-white px-2 py-1.5 pr-3 shadow-sm transition hover:border-orange-400"
      >
        <Avatar
          size={32}
          src={user.avatar || undefined}
          className="!bg-gradient-to-br !from-orange-500 !to-amber-500 !text-white"
        >
          {!user.avatar && initial}
        </Avatar>
        <span className="hidden max-w-[90px] truncate text-sm font-semibold text-slate-800 sm:inline">
          {user.name?.split(" ")[0]}
        </span>
        <DownOutlined className="text-[10px] text-gray-400" />
      </button>
    </Dropdown>
  );
}