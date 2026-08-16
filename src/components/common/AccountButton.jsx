import { useState } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import useAuth from "../../hooks/useAuth";
import AccountModal from "./AccountModal";

export default function AccountButton({ variant = "icon" }) {
  const { user, isAuthenticated } = useAuth();
  const [open, setOpen] = useState(false);

  const initial = (user?.name || "U").trim().charAt(0).toUpperCase();

  return (
    <>
      {variant === "icon" ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Account"
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber-500 bg-black shadow-sm transition hover:border-amber-400 p-2"
        >
          {isAuthenticated ? (
            <Avatar
              size={30}
              src={user?.avatar || undefined}
              className="!text-amber-500 font-extrabold"
            >
              {!user?.avatar && initial}
            </Avatar>
          ) : (
            <UserOutlined className="text-lg text-amber-500" />
          )}
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex w-full items-center gap-3 rounded-xl border border-orange-100 bg-orange-50/60 px-4 py-3 text-left transition hover:bg-orange-50"
        >
          {isAuthenticated ? (
            <>
              <Avatar
                size={40}
                src={user?.avatar || undefined}
                className="!bg-gradient-to-br !from-orange-500 !to-amber-500 !text-white"
              >
                {!user?.avatar && initial}
              </Avatar>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-slate-900">
                  {user?.name}
                </p>
                <p className="truncate text-xs text-gray-500">{user?.email}</p>
              </div>
            </>
          ) : (
            <>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-orange-500 shadow-sm">
                <UserOutlined className="text-lg" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Login / Sign Up
                </p>
                <p className="text-xs text-gray-500">Access your account</p>
              </div>
            </>
          )}
        </button>
      )}

      <AccountModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
