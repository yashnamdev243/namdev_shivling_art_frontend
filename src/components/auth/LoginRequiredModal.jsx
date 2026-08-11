import { Modal } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginRequiredModal({
  open, onClose,
  title="Login Required",
  description="Please login to continue.",
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.pathname + location.search;

  const go = (path) => {
    onClose();
    navigate(path, {state:{from}});
  };

  return (
    <Modal open={open} onCancel={onClose} footer={null} centered width={430} destroyOnClose>
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
          <LockOutlined className="text-2xl text-orange-500"/>
        </div>
        <h2 className="mt-5 text-2xl font-bold text-slate-900">{title}</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">{description}</p>

        <button type="button" onClick={()=>go("/login")}
          className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-3.5 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
          <MailOutlined/> Login with Email
        </button>

        <button type="button" onClick={()=>go("/register")}
          className="mt-3 w-full rounded-xl border border-orange-200 bg-orange-50 px-4 py-3.5 font-semibold text-orange-600 transition hover:bg-orange-100">
          Create New Account
        </button>

        <p className="mt-5 text-xs leading-5 text-gray-400">
          Login once and keep your likes, wishlist and reviews connected to your account.
        </p>
      </div>
    </Modal>
  );
}
