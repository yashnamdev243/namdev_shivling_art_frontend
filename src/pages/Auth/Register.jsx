// import { useState } from "react";
// import { Input, Button } from "antd";
// import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import useAuth from "../../hooks/useAuth";

// export default function Register() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { register } = useAuth();
//   const [name,setName]=useState("");
//   const [email,setEmail]=useState("");
//   const [password,setPassword]=useState("");
//   const [confirmPassword,setConfirmPassword]=useState("");
//   const [loading,setLoading]=useState(false);
//   const from = location.state?.from || "/";

//   const submit = async (e) => {
//     e.preventDefault();
//     if (name.trim().length < 2) return toast.error("Please enter your name.");
//     if (!email.trim()) return toast.error("Please enter your email.");
//     if (password.length < 6) return toast.error("Password must be at least 6 characters.");
//     if (password !== confirmPassword) return toast.error("Passwords do not match.");

//     try {
//       setLoading(true);
//       await register({name:name.trim(), email:email.trim().toLowerCase(), password});
//       toast.success("Account created successfully!");
//       navigate(from, {replace:true});
//     } catch (error) {
//       toast.error(error?.message || "Registration failed.");
//     } finally { setLoading(false); }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4 py-12">
//       <div className="mx-auto max-w-md rounded-3xl border border-orange-100 bg-white p-6 shadow-xl sm:p-8">
//         <div className="text-center">
//           <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
//             <UserOutlined className="text-2xl text-orange-500" />
//           </div>
//           <h1 className="mt-5 text-3xl font-bold text-slate-900">Create Account</h1>
//           <p className="mt-2 text-sm text-gray-500">Create an account to like, wishlist and review products.</p>
//         </div>

//         <form onSubmit={submit} className="mt-8">
//           <label className="mb-2 block text-sm font-semibold">Full Name</label>
//           <Input size="large" prefix={<UserOutlined />} value={name}
//             onChange={e=>setName(e.target.value)} placeholder="Your name" autoComplete="name"/>

//           <label className="mb-2 mt-5 block text-sm font-semibold">Email Address</label>
//           <Input size="large" prefix={<MailOutlined />} type="email" value={email}
//             onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email"/>

//           <label className="mb-2 mt-5 block text-sm font-semibold">Password</label>
//           <Input.Password size="large" prefix={<LockOutlined />} value={password}
//             onChange={e=>setPassword(e.target.value)} placeholder="Minimum 6 characters" autoComplete="new-password"/>

//           <label className="mb-2 mt-5 block text-sm font-semibold">Confirm Password</label>
//           <Input.Password size="large" prefix={<LockOutlined />} value={confirmPassword}
//             onChange={e=>setConfirmPassword(e.target.value)} placeholder="Confirm password" autoComplete="new-password"/>

//           <Button htmlType="submit" type="primary" loading={loading} block size="large"
//             className="!mt-6 !h-12 !rounded-xl !border-0 !bg-gradient-to-r !from-orange-500 !to-amber-500 !font-semibold">
//             Create Account
//           </Button>
//         </form>

//         <div className="mt-6 text-center text-sm">
//           <span className="text-gray-500">Already have an account?</span>
//           <Link to="/login" state={{from}} className="ml-1 font-semibold text-orange-600">Login</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Input, Button, Modal } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
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
  const from = location.state?.from || "/";

  const closeModal = () => navigate(from === "/register" ? "/" : from);

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

  return (
    <Modal
      open
      onCancel={closeModal}
      footer={null}
      centered
      width={480}
      destroyOnClose
      maskClosable
      styles={{ body: { padding: 0 } }}
      className="auth-modal"
    >
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-6 text-center text-white">
        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

        <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
          <UserOutlined className="text-3xl" />
        </div>
        <h1 className="relative mt-2  text-2xl font-bold">Create Account</h1>
        <p className="relative mt-1 text-sm text-white/85">
          Like, wishlist and review your favourite products.
        </p>
      </div>

      <div className="max-auto overflow-y-auto p-6 sm:p-8">
        <form onSubmit={submit}>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Full Name
          </label>
          <Input
            size="large"
            prefix={<UserOutlined className="text-gray-400" />}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
            className="!rounded-xl"
          />

          <label className="mb-2 mt-5 block text-sm font-semibold text-slate-700">
            Email Address
          </label>
          <Input
            size="large"
            prefix={<MailOutlined className="text-gray-400" />}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            className="!rounded-xl"
          />

          <label className="mb-2 mt-5 block text-sm font-semibold text-slate-700">
            Password
          </label>
          <Input.Password
            size="large"
            prefix={<LockOutlined className="text-gray-400" />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Minimum 6 characters"
            autoComplete="new-password"
            className="!rounded-xl"
          />

          <label className="mb-2 mt-5 block text-sm font-semibold text-slate-700">
            Confirm Password
          </label>
          <Input.Password
            size="large"
            prefix={<LockOutlined className="text-gray-400" />}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            autoComplete="new-password"
            className="!rounded-xl"
          />

          <Button
            htmlType="submit"
            type="primary"
            loading={loading}
            block
            size="large"
            className="!mt-6 !h-12 !rounded-xl !border-0 !bg-gradient-to-r !from-orange-500 !to-amber-500 !font-semibold"
          >
            {loading ? "Creating account…" : "Create Account"}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-500">Already have an account?</span>
          <Link
            to="/login"
            state={{ from }}
            className="ml-1 font-semibold text-orange-600"
          >
            Login
          </Link>
        </div>
      </div>
    </Modal>
  );
}
