// import { Modal } from "antd";
// import { MailOutlined, LockOutlined } from "@ant-design/icons";
// import { useLocation, useNavigate } from "react-router-dom";
// import useOpenAuthModal from "../../hooks/useOpenAuthModal";

// export default function LoginRequiredModal({
//   open,
//   onClose,
//   title = "Login Required",
//   description = "Please login to continue.",
// }) {
//   const openAuthModal = useOpenAuthModal();
//   // const navigate = useNavigate();
//   // const location = useLocation();
//   // const from = location.pathname + location.search;

//   const go = (path) => {
//     onClose();
//     // navigate(path, {state:{from}});
//     openAuthModal(path);
//   };

//   return (
//     <Modal
//       open={open}
//       onCancel={onClose}
//       footer={null}
//       centered
//       width={430}
//       destroyOnClose
//     >
//       <div className="text-center">
//         <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
//           <LockOutlined className="text-2xl text-orange-500" />
//         </div>
//         <h2 className="mt-5 text-2xl font-bold text-slate-900">{title}</h2>
//         <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">
//           {description}
//         </p>

//         <button
//           type="button"
//           onClick={() => go("/login")}
//           className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-3.5 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
//         >
//           <MailOutlined /> Login with Email
//         </button>

//         <button
//           type="button"
//           onClick={() => go("/register")}
//           className="mt-3 w-full rounded-xl border border-orange-200 bg-orange-50 px-4 py-3.5 font-semibold text-orange-600 transition hover:bg-orange-100"
//         >
//           Create New Account
//         </button>

//         <p className="mt-5 text-xs leading-5 text-gray-400">
//           Login once and keep your likes, wishlist and reviews connected to your
//           account.
//         </p>
//       </div>
//     </Modal>
//   );
// }



import { Modal } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import useOpenAuthModal from "../../hooks/useOpenAuthModal";

export default function LoginRequiredModal({
  open,
  onClose,
  title = "Login Required",
  description = "Please login to continue.",
}) {
  const openAuthModal = useOpenAuthModal();
  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.pathname + location.search;

  const go = (path) => {
    onClose();
    // navigate(path, {state:{from}});
    openAuthModal(path);
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={430}
      destroyOnClose
      closeIcon={null}
      styles={{
        body: { padding: 0 },
        mask: { backdropFilter: "blur(3px)", background: "rgba(15,10,5,0.5)" },
        content: { padding: 0, borderRadius: 24, overflow: "hidden", background: "#FAF8F3" },
      }}
    >
      <div className="relative overflow-hidden px-7 pb-8 pt-9 text-center sm:px-8">
        {/* subtle radial pattern */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-[#A8823C]/[0.06] blur-3xl"
        />

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#1C1A17]/10 text-[#1C1A17]/60 transition hover:bg-[#1C1A17]/[0.05] hover:text-[#1C1A17]"
        >
          <span className="text-sm leading-none">✕</span>
        </button>

        <div className="relative">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A8823C]">
            Your Personal Collection
          </span>

          <div className="mx-auto mt-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF6A]/30 bg-[#A8823C]/[0.06]">
            <LockOutlined className="text-2xl text-[#A8823C]" />
          </div>

          <span className="mx-auto mt-4 block h-px w-10 bg-[#D4AF6A]/40" aria-hidden="true" />

          <h2 className="mt-4 text-2xl font-bold text-[#1C1A17]">{title}</h2>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#6B6459]">
            {description}
          </p>

          <button
            type="button"
            onClick={() => go("/login")}
            className="mt-7 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#1C1A17] px-4 py-3.5 font-medium text-[#F2E3C8] shadow-none transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2A2620]"
          >
            <MailOutlined className="text-[#D4AF6A]" /> Continue with Email
          </button>

          <button
            type="button"
            onClick={() => go("/register")}
            className="mt-3 w-full rounded-2xl border border-[#1C1A17]/12 bg-white px-4 py-3.5 font-medium text-[#1C1A17] transition-colors duration-200 hover:border-[#A8823C]/40 hover:text-[#A8823C]"
          >
            Create a New Account
          </button>

          <p className="mt-5 text-xs leading-5 text-[#8A8377]">
            Your account keeps your wishlist, likes and reviews connected across devices.
          </p>
        </div>
      </div>
    </Modal>
  );
}