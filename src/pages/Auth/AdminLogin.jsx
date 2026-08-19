// import { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { Form, Input, Button, Card } from "antd";
// import { LockOutlined, MailOutlined, LoginOutlined } from "@ant-design/icons";
// import toast from "react-hot-toast";
// import { useAdminAuth } from "../../context/AdminAuthContext";

// export default function AdminLogin() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { login } = useAdminAuth();
//   const [loading, setLoading] = useState(false);
//   const from = location.state?.from?.pathname || "/admin/dashboard";

//   const handleSubmit = async (values) => {
//     try {
//       setLoading(true);
//       await login({ email: values.email.trim().toLowerCase(), password: values.password });
//       toast.success("Admin login successful.");
//       navigate(from, { replace: true });
//     } catch (error) {
//       toast.error(error?.message || "Invalid admin email or password.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50 px-4">
//       <div className="w-full max-w-md">
//         <Card bordered={false} className="overflow-hidden rounded-3xl shadow-xl" styles={{ body: { padding: 0 } }}>
//           <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-8 text-center text-white">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20"><LockOutlined className="text-3xl" /></div>
//             <h1 className="mt-4 text-2xl font-bold">Admin Login</h1>
//             <p className="mt-1 text-sm text-white/80">Sign in to manage your website</p>
//           </div>
//           <div className="p-6 sm:p-8">
//             <Form layout="vertical" onFinish={handleSubmit} autoComplete="off">
//               <Form.Item label="Email Address" name="email" rules={[{ required: true }, { type: "email", message: "Enter a valid email." }]}>
//                 <Input size="large" prefix={<MailOutlined />} autoComplete="username" className="!rounded-xl" />
//               </Form.Item>
//               <Form.Item label="Password" name="password" rules={[{ required: true, message: "Enter your password." }]}>
//                 <Input.Password size="large" prefix={<LockOutlined />} autoComplete="current-password" className="!rounded-xl" />
//               </Form.Item>
//               <Button htmlType="submit" type="primary" size="large" loading={loading} icon={<LoginOutlined />} block className="!mt-2 !h-12 !rounded-xl !border-0 !bg-gradient-to-r !from-orange-500 !to-amber-500 !font-semibold">
//                 {loading ? "Signing in..." : "Sign In"}
//               </Button>
//             </Form>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// }

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
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gradient-to-br from-amber-50 via-white to-orange-50 px-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-orange-200 border-t-orange-500" />
        <p className="text-sm font-medium text-gray-500">
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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-200 via-amber-100 to-orange-100 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <Card
          bordered={false}
          className="overflow-hidden !rounded-3xl !shadow-xl"
          styles={{ body: { padding: 0 } }}
        >
          <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-8 text-center text-white">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]"
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
            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/15 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-black/10 blur-2xl" />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20"
            >
              <LockOutlined className="text-3xl" />
            </motion.div>
            <h1 className="relative mt-4 text-2xl font-bold">Admin Login</h1>
            <p className="relative mt-1 text-sm text-white/80">
              Sign in to manage your website
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <Form
              layout="vertical"
              onFinish={handleSubmit}
              autoComplete="off"
              disabled={submitting}
            >
              <Form.Item
                label="Email Address"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email." },
                  { type: "email", message: "Enter a valid email." },
                ]}
              >
                <Input
                  size="large"
                  prefix={<MailOutlined className="text-gray-400" />}
                  autoComplete="username"
                  className="!rounded-xl"
                  placeholder="admin@example.com"
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Enter your password." }]}
              >
                <Input.Password
                  size="large"
                  prefix={<LockOutlined className="text-gray-400" />}
                  autoComplete="current-password"
                  className="!rounded-xl"
                  placeholder="••••••••"
                />
              </Form.Item>

              <Button
                htmlType="submit"
                type="primary"
                size="large"
                loading={submitting}
                icon={!submitting && <LoginOutlined />}
                block
                className="!mt-2 !h-12 !rounded-xl !border-0 !bg-gradient-to-r !from-orange-500 !to-amber-500 !font-semibold"
              >
                {submitting ? "Signing in…" : "Sign In"}
              </Button>
            </Form>

            <p className="mt-6 text-center text-xs text-gray-400">
              This area is restricted to authorized administrators only.
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
