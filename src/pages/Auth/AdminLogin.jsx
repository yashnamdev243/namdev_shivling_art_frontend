
import { useState } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { Form, Input, Button, Card } from "antd";
import { LockOutlined, MailOutlined, LoginOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useAdminAuth } from "../../context/AdminAuthContext";

export default function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, loading: sessionLoading, isAuthenticated } = useAdminAuth();
  const [submitting, setSubmitting] = useState(false);
  const from = location.state?.from?.pathname || "/admin/dashboard";

  // While we're checking for an existing valid session, show a branded
  // full-screen loader instead of flashing the login form.
  if (sessionLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#151515] px-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF6A]/30 bg-[#D4AF6A]/[0.06]">
          <span className="text-lg font-semibold text-[#D4AF6A]">ॐ</span>
        </div>
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-[#D4AF6A]" />
        <p className="text-sm font-medium text-white/50">
          Checking your session…
        </p>
      </div>
    );
  }

  // Already logged in — skip the form entirely.
  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  const handleSubmit = async (values) => {
    try {
      setSubmitting(true);
      await login({
        email: values.email.trim().toLowerCase(),
        password: values.password,
      });
      toast.success("Admin login successful.");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error?.message || "Invalid admin email or password.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#C9C2B4] px-4 py-10">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.16]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="loginDots"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.4" fill="black" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#loginDots)" />
      </svg>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-[#D4AF6A]/[0.06] blur-[140px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-md"
      >
        <Card
          bordered={false}
          className="overflow-hidden !rounded-3xl !shadow-2xl"
          styles={{ body: { padding: 0 } }}
        >
          <div className="relative overflow-hidden bg-[#1C1A17] px-6 py-8 text-center text-white">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="loginDots"
                  width="18"
                  height="18"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="1.4" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#loginDots)" />
            </svg>
            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#D4AF6A]/[0.08] blur-2xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-black/20 blur-2xl" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF6A]/40 to-transparent" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D4AF6A]/30 bg-[#D4AF6A]/[0.08]"
            >
              <LockOutlined className="text-2xl text-[#D4AF6A]" />
            </motion.div>
            <p className="relative mt-4 text-base font-bold">Namdev Admin</p>
            <p className="relative text-xs text-[#D4AF6A]/70">
              Narmadeshwar Shivling
            </p>
            <span
              className="relative mt-3 block h-px w-10 mx-auto bg-[#D4AF6A]/30"
              aria-hidden="true"
            />
            <h1 className="relative mt-3 text-xl font-bold">
              Private Administration
            </h1>
            <p className="relative mt-1 text-sm text-white/50">
              Sign in to manage your website
            </p>
          </div>

          <div className="bg-[#FAF8F3] p-6 sm:p-8">
            <Form
              layout="vertical"
              onFinish={handleSubmit}
              autoComplete="off"
              disabled={submitting}
            >
              <Form.Item
                label={
                  <span className="font-semibold text-[#4A453D]">
                    Email Address
                  </span>
                }
                name="email"
                rules={[
                  { required: true, message: "Please enter your email." },
                  { type: "email", message: "Enter a valid email." },
                ]}
              >
                <Input
                  size="large"
                  prefix={<MailOutlined className="text-[#A8823C]/70" />}
                  autoComplete="username"
                  className="!rounded-xl !border-[#1C1A17]/10 !bg-white focus-within:!border-[#A8823C]/50 focus-within:!shadow-[0_0_0_3px_rgba(168,130,60,0.1)]"
                  placeholder="admin@example.com"
                />
              </Form.Item>

              <Form.Item
                label={
                  <span className="font-semibold text-[#4A453D]">Password</span>
                }
                name="password"
                rules={[{ required: true, message: "Enter your password." }]}
              >
                <Input.Password
                  size="large"
                  prefix={<LockOutlined className="text-[#A8823C]/70" />}
                  autoComplete="current-password"
                  className="!rounded-xl !border-[#1C1A17]/10 !bg-white focus-within:!border-[#A8823C]/50 focus-within:!shadow-[0_0_0_3px_rgba(168,130,60,0.1)]"
                  placeholder="••••••••"
                />
              </Form.Item>

              <Button
                htmlType="submit"
                type="primary"
                size="large"
                loading={submitting}
                block
                className="!mt-2 !flex !h-12 !items-center !justify-center !rounded-xl !border-0 !bg-[#1C1A17] !font-medium !shadow-none transition-all duration-200 hover:!-translate-y-0.5 hover:!bg-[#2A2620]"
              >
                <span className="flex items-center gap-2">
                  {submitting ? "Signing in…" : "Sign In"}
                  {!submitting && <span className="text-[#D4AF6A]">→</span>}
                </span>
              </Button>
            </Form>

            <p className="mt-6 text-center text-xs text-[#8A8377]">
              This area is restricted to authorized administrators only.
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
