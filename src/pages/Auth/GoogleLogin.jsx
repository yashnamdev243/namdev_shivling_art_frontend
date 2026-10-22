// import { useEffect, useState } from "react";
// import { Card, Spin } from "antd";
// import { GoogleOutlined } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// import authService from "../../services/authService";
// import { useDispatch } from "react-redux";
// import { setCredentials } from "../../redux/authSlice";

// export default function GoogleLogin() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [loading, setLoading] = useState(false);

//   const handleGoogleLogin = async () => {
//     try {
//       setLoading(true);

//       /*
//        * This requires your backend to support:
//        *
//        * POST /api/auth/google
//        *
//        * with the Google credential/token.
//        *
//        * Google Identity Services should provide
//        * the credential.
//        */

//       toast.error(
//         "Google login needs Google OAuth configuration."
//       );
//     } catch (error) {
//       toast.error(
//         error?.response?.data?.message ||
//           "Google login failed."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // Auto-start can be enabled after Google OAuth
//     // client ID is configured.
//   }, []);

//   return (
//     <section className="flex min-h-[70vh] items-center justify-center bg-gradient-to-b from-amber-50 via-white to-white px-4 py-12">

//       <Card
//         className="w-full max-w-md rounded-3xl"
//         styles={{
//           body: {
//             padding: 32,
//           },
//         }}
//       >
//         <div className="text-center">

//           <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
//             <GoogleOutlined className="text-3xl text-red-500" />
//           </div>

//           <h1 className="mt-5 text-2xl font-bold text-slate-900">
//             Continue with Google
//           </h1>

//           <p className="mt-2 text-sm text-slate-500">
//             Sign in securely using your Google account.
//           </p>

//           <button
//             type="button"
//             disabled={loading}
//             onClick={handleGoogleLogin}
//             className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-white py-3.5 font-semibold text-gray-800 shadow-md ring-1 ring-gray-200 transition hover:shadow-lg disabled:opacity-60"
//           >
//             {loading ? (
//               <Spin size="small" />
//             ) : (
//               <>
//                 <GoogleOutlined className="text-red-500" />
//                 Continue with Google
//               </>
//             )}
//           </button>

//           <button
//             type="button"
//             onClick={() => navigate(-1)}
//             className="mt-4 text-sm font-medium text-orange-600 hover:underline"
//           >
//             Go Back
//           </button>
//         </div>
//       </Card>
//     </section>
//   );
// }

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  GoogleOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import toast from "react-hot-toast";

import authService from "../../services/authService";

export default function GoogleLogin() {
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  const from =
    location.state?.from || "/";

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);

      /*
       * The Google button needs to receive a Google
       * credential from Google Identity Services.
       *
       * After getting that credential:
       *
       * authService.googleLogin({
       *   credential
       * })
       *
       * The backend should return:
       *
       * {
       *   success: true,
       *   token: "...",
       *   user: {...}
       * }
       */

      toast.error(
        "Google authentication is not configured yet."
      );
    } catch (error) {
      toast.error(
        error?.message ||
          "Google login failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-[75vh] items-center justify-center bg-gradient-to-b from-amber-50 via-white to-white px-4 py-12">

      <div className="w-full max-w-md rounded-3xl border border-orange-100 bg-white p-6 shadow-xl sm:p-8">

        <button
          type="button"
          onClick={() => navigate(from)}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-orange-600"
        >
          <ArrowLeftOutlined />
          Back
        </button>

        <div className="mt-8 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
            <GoogleOutlined className="text-3xl text-red-500" />
          </div>

          <h1 className="mt-5 text-2xl font-bold text-slate-900">
            Continue with Google
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Sign in securely using your Google account.
          </p>

          <button
            type="button"
            disabled={loading}
            onClick={handleGoogleLogin}
            className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-3.5 font-semibold text-gray-800 shadow-sm transition hover:shadow-lg disabled:opacity-60"
          >
            <GoogleOutlined className="text-red-500" />

            {loading
              ? "Connecting..."
              : "Continue with Google"}
          </button>
        </div>
      </div>
    </section>
  );
}