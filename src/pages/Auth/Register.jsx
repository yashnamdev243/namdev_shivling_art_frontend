// import { useState } from "react";
// import { Input, Button, Modal } from "antd";
// import {
//   UserOutlined,
//   MailOutlined,
//   LockOutlined,
//   ArrowRightOutlined,
// } from "@ant-design/icons";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import useAuth from "../../hooks/useAuth";

// export default function Register() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { register } = useAuth();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const backgroundLocation = location.state?.backgroundLocation;
//   const from =
//     location.state?.from ||
//     (backgroundLocation
//       ? backgroundLocation.pathname + (backgroundLocation.search || "")
//       : "/");

//   const closeModal = () =>
//     navigate(
//       backgroundLocation
//         ? backgroundLocation.pathname + (backgroundLocation.search || "")
//         : "/",
//       { replace: true },
//     );

//   const submit = async (e) => {
//     e.preventDefault();
//     if (name.trim().length < 2) return toast.error("Please enter your name.");
//     if (!email.trim()) return toast.error("Please enter your email.");
//     if (password.length < 6)
//       return toast.error("Password must be at least 6 characters.");
//     if (password !== confirmPassword)
//       return toast.error("Passwords do not match.");

//     try {
//       setLoading(true);
//       await register({
//         name: name.trim(),
//         email: email.trim().toLowerCase(),
//         password,
//       });
//       toast.success("Account created successfully!");
//       navigate(from, { replace: true });
//     } catch (error) {
//       toast.error(error?.message || "Registration failed.");
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
//       width={550}
//       destroyOnClose
//       maskClosable
//       closeIcon={null}
//       styles={{
//         body: { padding: 0 },
//         mask: { backdropFilter: "blur(3px)", background: "rgba(15,10,5,0.45)" },
//       }}
//       className="auth-modal"
//     >
//       <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-500 to-amber-400 px-7 pb-9 pt-7 text-center text-white">
//         <svg
//           className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             <pattern
//               id="loginDots"
//               width="18"
//               height="18"
//               patternUnits="userSpaceOnUse"
//             >
//               <circle cx="2" cy="2" r="1.4" fill="white" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#loginDots)" />
//         </svg>
//         <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/15 blur-2xl" />
//         <div className="pointer-events-none absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-black/10 blur-2xl" />

//         <button
//           onClick={closeModal}
//           aria-label="Close"
//           className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 hover:rotate-90 duration-300"
//         >
//           <span className="text-sm leading-none">✕</span>
//         </button>

//         <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
//           <UserOutlined className="text-3xl" />
//         </div>
//         <h1 className="relative mt-4 text-2xl font-bold">Create Account</h1>
//         <p className="relative mt-1 text-sm text-white/85">
//           Like, wishlist and review your favourite products.
//         </p>
//       </div>

//       <div className=" overflow-y-auto p-6 sm:p-8">
//         <form onSubmit={submit}>
//           <div className="flex gap-6">
//             <div className="">
//               <label className="mb-1.5 block text-[13px] font-semibold text-slate-600">
//                 Full Name
//               </label>
//               <Input
//                 size="large"
//                 prefix={<UserOutlined className="text-gray-400" />}
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Your name"
//                 autoComplete="name"
//                 className="!h-12 !rounded-2xl !border-gray-200 hover:!border-orange-300 focus-within:!border-orange-400 focus-within:!shadow-[0_0_0_3px_rgba(249,115,22,0.12)]"
//               />

//               <label className="mb-1.5 block text-[13px] font-semibold text-slate-600 mt-4">
//                 Email Address
//               </label>
//               <Input
//                 size="large"
//                 prefix={<MailOutlined className="text-gray-400" />}
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="you@example.com"
//                 autoComplete="email"
//                 className="!h-12 !rounded-2xl !border-gray-200 hover:!border-orange-300 focus-within:!border-orange-400 focus-within:!shadow-[0_0_0_3px_rgba(249,115,22,0.12)]"
//               />
//             </div>
//             <div>
//               <label className="mb-1.5 block text-[13px] font-semibold text-slate-600">
//                 Password
//               </label>
//               <Input.Password
//                 size="large"
//                 prefix={<LockOutlined className="text-gray-400" />}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Minimum 6 characters"
//                 autoComplete="new-password"
//                 className="!h-12 !rounded-2xl !border-gray-200 hover:!border-orange-300 focus-within:!border-orange-400 focus-within:!shadow-[0_0_0_3px_rgba(249,115,22,0.12)]"
//               />

//               <label className="mb-1.5 block text-[13px] font-semibold text-slate-600 mt-4">
//                 Confirm Password
//               </label>
//               <Input.Password
//                 size="large"
//                 prefix={<LockOutlined className="text-gray-400" />}
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder="Confirm password"
//                 autoComplete="new-password"
//                 className="!h-12 !rounded-2xl !border-gray-200 hover:!border-orange-300 focus-within:!border-orange-400 focus-within:!shadow-[0_0_0_3px_rgba(249,115,22,0.12)]"
//               />
//             </div>
//           </div>
//           <Button
//             htmlType="submit"
//             type="primary"
//             loading={loading}
//             block
//             size="large"
//             className="!mt-3 !h-12 !rounded-2xl !border-0 !bg-gradient-to-r !from-orange-500 !to-amber-500 !font-semibold !shadow-lg !shadow-orange-500/25 transition hover:!-translate-y-0.5 hover:!shadow-xl"
//           >
//             <span className="flex items-center justify-center gap-2">
//               {loading ? "Creating account…" : "Create Account"}
//               {!loading && <ArrowRightOutlined className="text-xs" />}
//             </span>
//           </Button>
//         </form>
//         <div className="mt-6 flex items-center gap-3">
//           <span className="h-px flex-1 bg-gray-100" />
//           <span className="text-[11px] font-medium uppercase tracking-wider text-gray-400">
//             Login here
//           </span>
//           <span className="h-px flex-1 bg-gray-100" />
//         </div>

//         <div className="mt-6 text-center text-sm">
//           <span className="text-gray-500">Already have an account?</span>
//           <Link
//             to="/login"
//             state={{ from, backgroundLocation }}
//             className="ml-1 font-semibold text-orange-600"
//           >
//             Login
//           </Link>
//         </div>
//       </div>
//     </Modal>
//   );
// }



import { useState } from "react";
import { Input, Button, Modal } from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const backgroundLocation = location.state?.backgroundLocation;
  const from =
    location.state?.from ||
    (backgroundLocation
      ? backgroundLocation.pathname + (backgroundLocation.search || "")
      : "/");

  const closeModal = () =>
    navigate(
      backgroundLocation
        ? backgroundLocation.pathname + (backgroundLocation.search || "")
        : "/",
      { replace: true },
    );

  const submit = async (e) => {
    e.preventDefault();
    if (name.trim().length < 2) return toast.error("Please enter your name.");
    if (!email.trim()) return toast.error("Please enter your email.");
    if (password.length < 6)
      return toast.error("Password must be at least 6 characters.");
    if (password !== confirmPassword)
      return toast.error("Passwords do not match.");

    try {
      setLoading(true);
      await register({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password,
      });
      toast.success("Account created successfully!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "!h-12 !rounded-2xl !border-[#1C1A17]/10 !bg-white hover:!border-[#A8823C]/40 focus-within:!border-[#A8823C]/60 focus-within:!shadow-[0_0_0_3px_rgba(168,130,60,0.12)]";

  return (
    <Modal
      open
      onCancel={closeModal}
      footer={null}
      centered
      width={550}
      destroyOnClose
      maskClosable
      closeIcon={null}
      styles={{
        body: { padding: 0 },
        mask: { backdropFilter: "blur(3px)", background: "rgba(15,10,5,0.55)" },
        content: { padding: 0, borderRadius: 24, overflow: "hidden" },
      }}
      className="auth-modal"
    >
      <div className="relative overflow-hidden bg-[#1C1A17] px-7 pb-9 pt-7 text-center text-white">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="registerDots"
              width="18"
              height="18"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.4" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#registerDots)" />
        </svg>
        <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#D4AF6A]/[0.08] blur-2xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-black/20 blur-2xl" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF6A]/40 to-transparent" />

        <button
          onClick={closeModal}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white/80 transition duration-300 hover:bg-white/[0.12] hover:text-white"
        >
          <span className="text-sm leading-none">✕</span>
        </button>

        <div className="relative mx-auto flex h-[64px] w-[64px] items-center justify-center rounded-2xl border border-[#D4AF6A]/30 bg-[#D4AF6A]/[0.08]">
          <UserOutlined className="text-[26px] text-[#D4AF6A]" />
        </div>
        <span className="relative mt-4 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF6A]">
          Begin Your Journey
        </span>
        <h1 className="relative mt-1.5 text-[22px] font-bold tracking-tight">
          Create Your Account
        </h1>
        <p className="relative mt-1.5 text-[13px] text-white/60">
          Save your favourites, share your experience, and keep your collection close.
        </p>
      </div>

      <div className="max-h-[70vh] overflow-y-auto bg-[#FAF8F3] p-6 sm:p-8">
        <form onSubmit={submit}>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <div className="flex-1 space-y-4">
              <div>
                <label className="mb-1.5 block text-[13px] font-semibold text-[#4A453D]">
                  Full Name
                </label>
                <Input
                  size="large"
                  prefix={<UserOutlined className="text-[#A8823C]/70" />}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-[13px] font-semibold text-[#4A453D]">
                  Email Address
                </label>
                <Input
                  size="large"
                  prefix={<MailOutlined className="text-[#A8823C]/70" />}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <label className="mb-1.5 block text-[13px] font-semibold text-[#4A453D]">
                  Password
                </label>
                <Input.Password
                  size="large"
                  prefix={<LockOutlined className="text-[#A8823C]/70" />}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 6 characters"
                  autoComplete="new-password"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-[13px] font-semibold text-[#4A453D]">
                  Confirm Password
                </label>
                <Input.Password
                  size="large"
                  prefix={<LockOutlined className="text-[#A8823C]/70" />}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm password"
                  autoComplete="new-password"
                  className={inputClass}
                />
              </div>
            </div>
          </div>
          <Button
            htmlType="submit"
           // type="primary"
            loading={loading}
            block
            size="large"
            className="!mt-5 !h-12 !rounded-2xl !border-0 !bg-[#1C1A17] !font-medium !shadow-none transition-all duration-200 hover:!-translate-y-0.5 hover:!bg-[#2A2620] !text-[#D4AF6A]"
          >
            <span className="flex items-center justify-center gap-2">
              {loading ? "Creating account…" : "Create Account"}
              {!loading && <ArrowRightOutlined className="text-[#D4AF6A] text-xs" />}
            </span>
          </Button>
        </form>
        <div className="mt-6 flex items-center gap-3">
          <span className="h-px flex-1 bg-[#1C1A17]/[0.08]" />
          <span className="text-[11px] font-medium uppercase tracking-wider text-[#8A8377]">
            Already a member
          </span>
          <span className="h-px flex-1 bg-[#1C1A17]/[0.08]" />
        </div>

        <div className="mt-6 text-center text-sm">
          <span className="text-[#6B6459]">Already have an account?</span>
          <Link
            to="/login"
            state={{ from, backgroundLocation }}
            className="ml-1 font-semibold text-[#A8823C]"
          >
            Login
          </Link>
        </div>
      </div>
    </Modal>
  );
}