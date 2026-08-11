import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Form, Input, Button, Card } from "antd";
import { LockOutlined, MailOutlined, LoginOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import { useAdminAuth } from "../../context/AdminAuthContext";

export default function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAdminAuth();
  const [loading, setLoading] = useState(false);
  const from = location.state?.from?.pathname || "/admin/dashboard";

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      await login({ email: values.email.trim().toLowerCase(), password: values.password });
      toast.success("Admin login successful.");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error?.message || "Invalid admin email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50 px-4">
      <div className="w-full max-w-md">
        <Card bordered={false} className="overflow-hidden rounded-3xl shadow-xl" styles={{ body: { padding: 0 } }}>
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-8 text-center text-white">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20"><LockOutlined className="text-3xl" /></div>
            <h1 className="mt-4 text-2xl font-bold">Admin Login</h1>
            <p className="mt-1 text-sm text-white/80">Sign in to manage your website</p>
          </div>
          <div className="p-6 sm:p-8">
            <Form layout="vertical" onFinish={handleSubmit} autoComplete="off">
              <Form.Item label="Email Address" name="email" rules={[{ required: true }, { type: "email", message: "Enter a valid email." }]}>
                <Input size="large" prefix={<MailOutlined />} autoComplete="username" className="!rounded-xl" />
              </Form.Item>
              <Form.Item label="Password" name="password" rules={[{ required: true, message: "Enter your password." }]}>
                <Input.Password size="large" prefix={<LockOutlined />} autoComplete="current-password" className="!rounded-xl" />
              </Form.Item>
              <Button htmlType="submit" type="primary" size="large" loading={loading} icon={<LoginOutlined />} block className="!mt-2 !h-12 !rounded-xl !border-0 !bg-gradient-to-r !from-orange-500 !to-amber-500 !font-semibold">
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
}
