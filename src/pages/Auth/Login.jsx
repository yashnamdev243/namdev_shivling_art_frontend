import { useState } from "react";
import { Input, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
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

  const submit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return toast.error("Please enter your email.");
    if (!password) return toast.error("Please enter your password.");

    try {
      setLoading(true);
      await login({ email:email.trim().toLowerCase(), password });
      toast.success("Welcome back!");
      navigate(from, { replace:true });
    } catch (error) {
      toast.error(error?.message || "Login failed.");
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4 py-12">
      <div className="mx-auto max-w-md rounded-3xl border border-orange-100 bg-white p-6 shadow-xl sm:p-8">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
            <LockOutlined className="text-2xl text-orange-500" />
          </div>
          <h1 className="mt-5 text-3xl font-bold text-slate-900">Welcome Back</h1>
          <p className="mt-2 text-sm text-gray-500">Login to continue to your account.</p>
        </div>

        <form onSubmit={submit} className="mt-8">
          <label className="mb-2 block text-sm font-semibold">Email Address</label>
          <Input size="large" prefix={<MailOutlined />} type="email"
            value={email} onChange={e=>setEmail(e.target.value)}
            placeholder="you@example.com" autoComplete="email" />

          <label className="mb-2 mt-5 block text-sm font-semibold">Password</label>
          <Input.Password size="large" prefix={<LockOutlined />}
            value={password} onChange={e=>setPassword(e.target.value)}
            placeholder="Enter your password" autoComplete="current-password" />

          <Button htmlType="submit" type="primary" loading={loading} block size="large"
            className="!mt-6 !h-12 !rounded-xl !border-0 !bg-gradient-to-r !from-orange-500 !to-amber-500 !font-semibold">
            Login
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-500">Don't have an account?</span>
          <Link to="/register" state={{from}} className="ml-1 font-semibold text-orange-600">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
