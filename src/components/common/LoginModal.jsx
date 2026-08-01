import { Modal } from "antd";
import { GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { useUserAuth } from "../../context/UserAuthContext";
import { FaOm } from "react-icons/fa";

export default function LoginModal() {
  const { loginModalOpen, setLoginModalOpen, loginWithGoogle } = useUserAuth();

  const handleSuccess = async (credentialResponse) => {
    try {
      await loginWithGoogle(credentialResponse.credential);
      toast.success("Signed in!");
    } catch (err) {
      toast.error(err?.message || "Sign-in failed. Please try again.");
    }
  };

  return (
    <Modal
      open={loginModalOpen}
      onCancel={() => setLoginModalOpen(false)}
      footer={null}
      centered
      width={380}
    >
      <div className="flex flex-col items-center px-2 py-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-2xl text-white shadow-lg">
          <FaOm className="text-3xl text-amber-200 drop-shadow-md" />
        </div>

        <h2 className="mt-4 text-xl font-bold text-slate-900">Sign in to continue</h2>
        <p className="mt-2 text-sm text-gray-500">
          Sign in with your Google account to add items to your cart and wishlist.
        </p>

        <div className="mt-6">
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => toast.error("Google sign-in failed. Please try again.")}
            theme="filled_blue"
            shape="pill"
            text="continue_with"
          />
        </div>

        <p className="mt-5 text-xs leading-5 text-gray-400">
          We only use your Google account to identify you — no separate password to remember.
        </p>
      </div>
    </Modal>
  );
}