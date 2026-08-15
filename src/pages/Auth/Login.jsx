// import { useState } from "react";
// import { Input, Button } from "antd";
// import { MailOutlined, LockOutlined } from "@ant-design/icons";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import useAuth from "../../hooks/useAuth";

// export default function Login() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { login } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const from = location.state?.from || "/";

//   const submit = async (e) => {
//     e.preventDefault();
//     if (!email.trim()) return toast.error("Please enter your email.");
//     if (!password) return toast.error("Please enter your password.");

//     try {
//       setLoading(true);
//       await login({ email:email.trim().toLowerCase(), password });
//       toast.success("Welcome back!");
//       navigate(from, { replace:true });
//     } catch (error) {
//       toast.error(error?.message || "Login failed.");
//     } finally { setLoading(false); }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4 py-12">
//       <div className="mx-auto max-w-md rounded-3xl border border-orange-100 bg-white p-6 shadow-xl sm:p-8">
//         <div className="text-center">
//           <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
//             <LockOutlined className="text-2xl text-orange-500" />
//           </div>
//           <h1 className="mt-5 text-3xl font-bold text-slate-900">Welcome Back</h1>
//           <p className="mt-2 text-sm text-gray-500">Login to continue to your account.</p>
//         </div>

//         <form onSubmit={submit} className="mt-8">
//           <label className="mb-2 block text-sm font-semibold">Email Address</label>
//           <Input size="large" prefix={<MailOutlined />} type="email"
//             value={email} onChange={e=>setEmail(e.target.value)}
//             placeholder="you@example.com" autoComplete="email" />

//           <label className="mb-2 mt-5 block text-sm font-semibold">Password</label>
//           <Input.Password size="large" prefix={<LockOutlined />}
//             value={password} onChange={e=>setPassword(e.target.value)}
//             placeholder="Enter your password" autoComplete="current-password" />

//           <Button htmlType="submit" type="primary" loading={loading} block size="large"
//             className="!mt-6 !h-12 !rounded-xl !border-0 !bg-gradient-to-r !from-orange-500 !to-amber-500 !font-semibold">
//             Login
//           </Button>
//         </form>

//         <div className="mt-6 text-center text-sm">
//           <span className="text-gray-500">Don't have an account?</span>
//           <Link to="/register" state={{from}} className="ml-1 font-semibold text-orange-600">
//             Create Account
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { Input, Button, Modal } from "antd";
// import { MailOutlined, LockOutlined } from "@ant-design/icons";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import useAuth from "../../hooks/useAuth";

// export default function Login() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { login } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const from = location.state?.from || "/";

//   // Closing the modal (X, backdrop click, Esc) just takes the user back
//   // to wherever they were — there's no dedicated "login page" to land on.
//   const closeModal = () => navigate(from === "/login" ? "/" : from);

//   const submit = async (e) => {
//     e.preventDefault();
//     if (!email.trim()) return toast.error("Please enter your email.");
//     if (!password) return toast.error("Please enter your password.");

//     try {
//       setLoading(true);
//       await login({ email: email.trim().toLowerCase(), password });
//       toast.success("Welcome back!");
//       navigate(from, { replace: true });
//     } catch (error) {
//       toast.error(error?.message || "Login failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Modal
//       open
//       onCancel={closeModal}
//       footer={null}
//       centered
//       width={420}
//       destroyOnClose
//       maskClosable
//       styles={{ body: { padding: 0 } }}
//       className="auth-modal"
//     >
//       <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-8 text-center text-white">
//         <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
//         <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

//         <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
//           <LockOutlined className="text-3xl" />
//         </div>
//         <h1 className="relative mt-4 text-2xl font-bold">Welcome Back</h1>
//         <p className="relative mt-1 text-sm text-white/85">Login to continue to your account.</p>
//       </div>

//       <div className="p-6 sm:p-8">
//         <form onSubmit={submit}>
//           <label className="mb-2 block text-sm font-semibold text-slate-700">Email Address</label>
//           <Input
//             size="large"
//             prefix={<MailOutlined className="text-gray-400" />}
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="you@example.com"
//             autoComplete="email"
//             className="!rounded-xl"
//           />

//           <label className="mb-2 mt-5 block text-sm font-semibold text-slate-700">Password</label>
//           <Input.Password
//             size="large"
//             prefix={<LockOutlined className="text-gray-400" />}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             autoComplete="current-password"
//             className="!rounded-xl"
//           />

//           <Button
//             htmlType="submit"
//             type="primary"
//             loading={loading}
//             block
//             size="large"
//             className="!mt-6 !h-12 !rounded-xl !border-0 !bg-gradient-to-r !from-orange-500 !to-amber-500 !font-semibold"
//           >
//             {loading ? "Signing in…" : "Login"}
//           </Button>
//         </form>

//         <div className="mt-6 text-center text-sm">
//           <span className="text-gray-500">Don't have an account?</span>
//           <Link to="/register" state={{ from }} className="ml-1 font-semibold text-orange-600">
//             Create Account
//           </Link>
//         </div>
//       </div>
//     </Modal>
//   );
// }

import { useState } from "react";
import { Input, Button, Modal } from "antd";
import {
  MailOutlined,
  LockOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const from = location.state?.from || "/";

  const closeModal = () => navigate(from === "/login" ? "/" : from);

  const submit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return toast.error("Please enter your email.");
    if (!password) return toast.error("Please enter your password.");

    try {
      setLoading(true);
      await login({ email: email.trim().toLowerCase(), password });
      toast.success("Welcome back!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open
      onCancel={closeModal}
      footer={null}
      centered
      width={408}
      destroyOnClose
      maskClosable
      closeIcon={null}
      styles={{
        body: { padding: 0 },
        mask: { backdropFilter: "blur(3px)", background: "rgba(15,10,5,0.45)" },
      }}
      className="auth-modal"
    >
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-500 to-amber-400 px-7 pb-9 pt-7 text-center text-white">
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

        <button
          onClick={closeModal}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 hover:rotate-90 duration-300"
        >
          <span className="text-sm leading-none">✕</span>
        </button>

        <div className="relative mx-auto flex h-[68px] w-[68px] items-center justify-center rounded-2xl bg-white/20 shadow-inner ring-1 ring-white/30">
          <LockOutlined className="text-[28px]" />
        </div>
        <h1 className="relative mt-4 text-[22px] font-bold tracking-tight">
          Welcome Back
        </h1>
        <p className="relative mt-1.5 text-[13px] text-white/85">
          Login to continue to your account
        </p>
      </div>

      {/* Body */}
      <div className="px-7 pb-7 pt-6 sm:px-8">
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-[13px] font-semibold text-slate-600">
              Email Address
            </label>
            <Input
              size="large"
              prefix={<MailOutlined className="mr-1 text-gray-400" />}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              className="!h-12 !rounded-2xl !border-gray-200 hover:!border-orange-300 focus-within:!border-orange-400 focus-within:!shadow-[0_0_0_3px_rgba(249,115,22,0.12)]"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-[13px] font-semibold text-slate-600">
              Password
            </label>
            <Input.Password
              size="large"
              prefix={<LockOutlined className="mr-1 text-gray-400" />}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoComplete="current-password"
              className="!h-12 !rounded-2xl !border-gray-200 hover:!border-orange-300 focus-within:!border-orange-400 focus-within:!shadow-[0_0_0_3px_rgba(249,115,22,0.12)]"
            />
          </div>

          <Button
            htmlType="submit"
            type="primary"
            loading={loading}
            block
            size="large"
            className="!mt-2 !h-12 !rounded-2xl !border-0 !bg-gradient-to-r !from-orange-500 !to-amber-500 !font-semibold !shadow-lg !shadow-orange-500/25 transition hover:!-translate-y-0.5 hover:!shadow-xl"
          >
            <span className="flex items-center justify-center gap-2">
              {loading ? "Signing in…" : "Login"}
              {!loading && <ArrowRightOutlined className="text-xs" />}
            </span>
          </Button>
        </form>

        <div className="mt-6 flex items-center gap-3">
          <span className="h-px flex-1 bg-gray-100" />
          <span className="text-[11px] font-medium uppercase tracking-wider text-gray-400">
            New here
          </span>
          <span className="h-px flex-1 bg-gray-100" />
        </div>

        <Link
          to="/register"
          state={{ from }}
          className="mt-4 flex items-center justify-center gap-2 rounded-2xl border border-orange-200 bg-orange-50/60 py-3 text-sm font-semibold text-orange-600 transition hover:border-orange-300 hover:bg-orange-50"
        >
          Create a new account
        </Link>
      </div>
    </Modal>
  );
}
