import { Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import Seo from "../../components/common/Seo";
import { useAuth } from "../../hooks/useAuth";
import { ROUTES } from "../../config/routes";

export default function Login() {
  const { login, isLoggingIn } = useAuth();
  const isAuthenticated = useSelector((s) => s.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate(ROUTES.adminDashboard, { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Seo title="Admin Login" />

      <div className="flex min-h-screen items-center justify-center bg-stone-texture bg-gray-600 px-5">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div
              className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full shadow-soft"
              style={{
                background: "linear-gradient(135deg, #a8511f 0%, #8a4019 55%, #5c2c18 100%)",
              }}
            >
              <span className="font-display text-2xl text-gold-200">ॐ</span>
            </div>
            <h1 className="font-display text-2xl font-bold text-white">Namdev Admin</h1>
            <p className="mt-1 text-sm text-stone-400">Sign in to manage products &amp; categories</p>
          </div>

          <Card className="rounded-3xl border-0 shadow-soft">
            <Form layout="vertical" onFinish={login} requiredMark={false}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Enter a valid email address" },
                ]}
              >
                <Input size="large" prefix={<UserOutlined className="text-gray-400" />} placeholder="admin@example.com" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Please enter your password" }]}
              >
                <Input.Password size="large" prefix={<LockOutlined className="text-gray-400" />} placeholder="********" />
              </Form.Item>

              <Button
                htmlType="submit"
                type="primary"
                size="large"
                block
                loading={isLoggingIn}
                className="!rounded-full !border-none !bg-brand-700 hover:!bg-brand-800"
              >
                Sign In
              </Button>
            </Form>
          </Card>

          <p className="mt-6 text-center text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Namdev Narmadeshwar Shivling Art
          </p>
        </div>
      </div>
    </>
  );
}
