import { useState } from "react";
import { Modal, Avatar, Button, Tag, Empty, Spin } from "antd";
import {
  UserOutlined,
  MailOutlined,
  HeartOutlined,
  TagOutlined,
  LogoutOutlined,
  LoginOutlined,
  UserAddOutlined,
  RightOutlined,
  ExclamationCircleFilled,
  ArrowLeftOutlined,
  CheckCircleFilled,
  StarFilled,
  ThunderboltFilled,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";

import useAuth from "../../hooks/useAuth";
import { useWishlist } from "../../hooks/useWishlist";
import couponService from "../../services/couponService";

export default function AccountModal({ open, onClose }) {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const { wishlistCount } = useWishlist();
  const [confirmingLogout, setConfirmingLogout] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);

  const { data: historyData, isLoading: historyLoading } = useQuery({
    queryKey: ["my-coupon-history"],
    queryFn: couponService.myRedemptions,
    enabled: open && isAuthenticated,
  });
  const history = historyData?.redemptions || [];

  const go = (path) => {
    onClose();
    navigate(path);
  };

  const handleClose = () => {
    setConfirmingLogout(false);
    setHistoryOpen(false);
    onClose();
  };

  const handleLogout = () => {
    setConfirmingLogout(false);
    onClose();
    logout();
    navigate("/");
  };

  return (
    <Modal
      open={open}
      onCancel={handleClose}
      footer={null}
      centered
      width={420}
      destroyOnClose
      closeIcon={<span className="text-lg">✕</span>}
      className="account-modal"
      styles={{ body: { padding: 0 } }}
    >
      {/* ================= LOGOUT CONFIRM STATE ================= */}
      {confirmingLogout ? (
        <div className="p-6 text-center sm:p-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
            <ExclamationCircleFilled className="text-2xl text-red-500" />
          </div>
          <h2 className="mt-4 text-lg font-bold text-slate-900">Logout from your account?</h2>
          <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-gray-500">
            You'll need to login again to access your wishlist, coupons and reviews.
          </p>
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => setConfirmingLogout(false)}
              className="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleLogout}
              className="flex-1 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              Yes, Logout
            </button>
          </div>
        </div>
      ) : historyOpen ? (
        /* ================= COUPON HISTORY STATE ================= */
        <div>
          <div className="flex items-center gap-3 border-b border-orange-100 px-5 py-4 sm:px-6">
            <button
              onClick={() => setHistoryOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100"
              aria-label="Back"
            >
              <ArrowLeftOutlined />
            </button>
            <h3 className="font-bold text-slate-900">My Coupon History</h3>
          </div>

          <div className="max-h-[70vh] overflow-y-auto p-5 sm:p-6">
            {historyLoading ? (
              <div className="flex justify-center py-10">
                <Spin />
              </div>
            ) : history.length === 0 ? (
              <Empty description="You haven't used any coupons yet." />
            ) : (
              <div className="space-y-3">
                {history.map((r) => (
                  <div key={r.id} className="rounded-2xl border border-orange-100 bg-orange-50/50 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <Tag color="orange">{r.coupon?.code || "—"}</Tag>
                      <span className="text-xs text-gray-500">
                        {dayjs(r.createdAt).format("DD MMM YYYY")}
                      </span>
                    </div>
                    {r.coupon?.title && <p className="mt-2 text-sm font-medium text-slate-900">{r.coupon.title}</p>}
                    <div className="mt-2 flex justify-between text-sm">
                      <span className="text-gray-500">You saved</span>
                      <span className="font-semibold text-green-600">
                        ₹{Number(r.discount_amount || 0).toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : isAuthenticated ? (
        /* ================= LOGGED-IN MAIN STATE ================= */
        <div>
          {/* Header */}
          <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 px-6 pb-8 pt-8 text-white sm:px-7">
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

            <div className="relative flex items-center gap-4">
              <Avatar
                size={64}
                src={user?.avatar || undefined}
                className="!border-2 !border-white/40 !bg-white/20 !text-2xl !font-bold"
              >
                {!user?.avatar && (user?.name || "U").charAt(0).toUpperCase()}
              </Avatar>
              <div className="min-w-0">
                <p className="truncate text-lg font-bold">{user?.name || "Customer"}</p>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-white/85">
                  <MailOutlined />
                  <span className="truncate">{user?.email}</span>
                </div>
                <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-semibold">
                  <CheckCircleFilled /> Verified Account
                </span>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => go("/wishlist")}
                className="rounded-2xl border border-orange-100 bg-orange-50/60 p-4 text-left transition hover:border-orange-300 hover:bg-orange-50"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-orange-500 shadow-sm">
                  <HeartOutlined />
                </div>
                <p className="mt-2 text-xl font-bold text-slate-900">{wishlistCount}</p>
                <p className="text-xs text-gray-500">Wishlist Items</p>
              </button>

              <button
                onClick={() => setHistoryOpen(true)}
                className="rounded-2xl border border-orange-100 bg-orange-50/60 p-4 text-left transition hover:border-orange-300 hover:bg-orange-50"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-orange-500 shadow-sm">
                  <TagOutlined />
                </div>
                <p className="mt-2 text-xl font-bold text-slate-900">{history.length || (historyLoading ? "…" : 0)}</p>
                <p className="text-xs text-gray-500">Coupons Used</p>
              </button>
            </div>

            {/* Quick links */}
            <div className="mt-4 divide-y divide-orange-50 overflow-hidden rounded-2xl border border-orange-100">
              <button
                onClick={() => go("/wishlist")}
                className="flex w-full items-center justify-between px-4 py-3.5 text-left transition hover:bg-orange-50/60"
              >
                <span className="flex items-center gap-3 text-sm font-medium text-slate-800">
                  <HeartOutlined className="text-orange-500" /> My Wishlist
                </span>
                <RightOutlined className="text-xs text-gray-400" />
              </button>

              <button
                onClick={() => setHistoryOpen(true)}
                className="flex w-full items-center justify-between px-4 py-3.5 text-left transition hover:bg-orange-50/60"
              >
                <span className="flex items-center gap-3 text-sm font-medium text-slate-800">
                  <TagOutlined className="text-orange-500" /> Coupon History
                </span>
                <RightOutlined className="text-xs text-gray-400" />
              </button>

              <button
                onClick={() => go("/products")}
                className="flex w-full items-center justify-between px-4 py-3.5 text-left transition hover:bg-orange-50/60"
              >
                <span className="flex items-center gap-3 text-sm font-medium text-slate-800">
                  <ThunderboltFilled className="text-orange-500" /> Browse Products
                </span>
                <RightOutlined className="text-xs text-gray-400" />
              </button>
            </div>

            {/* Logout */}
            <button
              onClick={() => setConfirmingLogout(true)}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100"
            >
              <LogoutOutlined /> Logout
            </button>
          </div>
        </div>
      ) : (
        /* ================= LOGGED-OUT STATE ================= */
        <div className="p-6 text-center sm:p-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg">
            <UserOutlined className="text-2xl" />
          </div>
          <h2 className="mt-5 text-xl font-bold text-slate-900">Welcome to Namdev</h2>
          <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-gray-500">
            Login or create an account to save your wishlist, apply coupons and track your reviews.
          </p>

          <button
            onClick={() => go("/login")}
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-3.5 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <LoginOutlined /> Login
          </button>

          <button
            onClick={() => go("/register")}
            className="mt-3 flex w-full items-center justify-center gap-3 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3.5 font-semibold text-orange-600 transition hover:bg-orange-100"
          >
            <UserAddOutlined /> Create New Account
          </button>

          <div className="mt-7 space-y-2.5 rounded-2xl bg-gray-50 p-4 text-left">
            {[
              "Save products to your wishlist",
              "Apply coupons and track your savings",
              "Like products & write reviews",
            ].map((line) => (
              <div key={line} className="flex items-center gap-2.5 text-sm text-gray-600">
                <StarFilled className="text-amber-400" />
                {line}
              </div>
            ))}
          </div>
        </div>
      )}
    </Modal>
  );
}