// import { useState } from "react";
// import { MobileOutlined, ArrowLeftOutlined } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// import authService from "../../services/authService";

// export default function MobileLogin() {
//   const navigate = useNavigate();

//   const [mobile, setMobile] = useState("");
//   const [otp, setOtp] = useState("");

//   const [otpSent, setOtpSent] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const sendOtp = async () => {
//     if (!/^[6-9]\d{9}$/.test(mobile)) {
//       toast.error("Enter a valid 10-digit mobile number.");
//       return;
//     }

//     try {
//       setLoading(true);

//       /*
//        * Backend endpoint required:
//        *
//        * POST /api/auth/send-otp
//        */

//       await authService.sendOtp({
//         mobile,
//       });

//       setOtpSent(true);

//       toast.success("OTP sent successfully.");
//     } catch (error) {
//       toast.error(
//         error?.response?.data?.message ||
//           "Unable to send OTP."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const verifyOtp = async () => {
//     if (!otp || otp.length !== 6) {
//       toast.error("Enter the 6-digit OTP.");
//       return;
//     }

//     try {
//       setLoading(true);

//       /*
//        * Backend endpoint required:
//        *
//        * POST /api/auth/verify-otp
//        */

//       const response = await authService.verifyOtp({
//         mobile,
//         otp,
//       });

//       const token = response?.token;
//       const user = response?.user;

//       if (token) {
//         localStorage.setItem("token", token);
//       }

//       if (user) {
//         localStorage.setItem(
//           "user",
//           JSON.stringify(user)
//         );
//       }

//       toast.success("Login successful.");

//       navigate(-1);
//     } catch (error) {
//       toast.error(
//         error?.response?.data?.message ||
//           "Invalid OTP."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="flex min-h-[70vh] items-center justify-center bg-gradient-to-b from-amber-50 via-white to-white px-4 py-12">

//       <div className="w-full max-w-md rounded-3xl border border-orange-100 bg-white p-6 shadow-xl sm:p-8">

//         <button
//           type="button"
//           onClick={() => navigate(-1)}
//           className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-orange-600"
//         >
//           <ArrowLeftOutlined />
//           Back
//         </button>

//         <div className="text-center">

//           <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
//             <MobileOutlined className="text-3xl text-orange-500" />
//           </div>

//           <h1 className="mt-5 text-2xl font-bold text-slate-900">
//             Login with Mobile
//           </h1>

//           <p className="mt-2 text-sm text-gray-500">
//             Enter your mobile number to receive an OTP.
//           </p>
//         </div>

//         {!otpSent ? (
//           <>
//             <label className="mt-7 block text-sm font-semibold text-gray-700">
//               Mobile Number
//             </label>

//             <div className="mt-2 flex overflow-hidden rounded-xl border border-gray-200 focus-within:border-orange-500">
//               <span className="flex items-center bg-gray-50 px-3 text-sm text-gray-500">
//                 +91
//               </span>

//               <input
//                 type="tel"
//                 value={mobile}
//                 maxLength={10}
//                 onChange={(e) =>
//                   setMobile(
//                     e.target.value.replace(/\D/g, "")
//                   )
//                 }
//                 placeholder="Enter mobile number"
//                 className="w-full border-0 px-3 py-3 outline-none"
//               />
//             </div>

//             <button
//               type="button"
//               onClick={sendOtp}
//               disabled={loading}
//               className="mt-5 w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-3.5 font-semibold text-white shadow-md transition hover:shadow-lg disabled:opacity-60"
//             >
//               {loading ? "Sending OTP..." : "Send OTP"}
//             </button>
//           </>
//         ) : (
//           <>
//             <div className="mt-7 rounded-xl bg-green-50 p-4 text-center text-sm text-green-700">
//               OTP sent to +91 {mobile}
//             </div>

//             <label className="mt-5 block text-sm font-semibold text-gray-700">
//               Enter OTP
//             </label>

//             <input
//               type="text"
//               inputMode="numeric"
//               maxLength={6}
//               value={otp}
//               onChange={(e) =>
//                 setOtp(
//                   e.target.value.replace(/\D/g, "")
//                 )
//               }
//               placeholder="Enter 6-digit OTP"
//               className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-center text-lg tracking-[0.4em] outline-none focus:border-orange-500"
//             />

//             <button
//               type="button"
//               onClick={verifyOtp}
//               disabled={loading}
//               className="mt-5 w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-3.5 font-semibold text-white shadow-md transition hover:shadow-lg disabled:opacity-60"
//             >
//               {loading ? "Verifying..." : "Verify & Login"}
//             </button>

//             <button
//               type="button"
//               onClick={() => {
//                 setOtpSent(false);
//                 setOtp("");
//               }}
//               className="mt-4 w-full text-sm font-medium text-orange-600 hover:underline"
//             >
//               Change Mobile Number
//             </button>
//           </>
//         )}
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  MobileOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

import toast from "react-hot-toast";

import authService from "../../services/authService";

export default function MobileLogin() {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobile, setMobile] =
    useState("");

  const [otp, setOtp] =
    useState("");

  const [otpSent, setOtpSent] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const from =
    location.state?.from || "/";

  // =========================================================
  // SEND OTP
  // =========================================================

  const handleSendOtp = async () => {
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      toast.error(
        "Enter a valid 10-digit mobile number."
      );

      return;
    }

    try {
      setLoading(true);

      await authService.sendOtp({
        mobile,
      });

      setOtpSent(true);

      toast.success(
        "OTP sent successfully."
      );
    } catch (error) {
      toast.error(
        error?.message ||
          "Unable to send OTP."
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // VERIFY OTP
  // =========================================================

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      toast.error(
        "Enter the 6-digit OTP."
      );

      return;
    }

    try {
      setLoading(true);

      await authService.verifyOtp({
        mobile,
        otp,
      });

      toast.success(
        "Login successful."
      );

      navigate(from, {
        replace: true,
      });
    } catch (error) {
      toast.error(
        error?.message ||
          "Invalid OTP."
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

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
            <MobileOutlined className="text-3xl text-orange-500" />
          </div>

          <h1 className="mt-5 text-2xl font-bold text-slate-900">
            Login with Mobile
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Enter your mobile number to continue.
          </p>
        </div>

        {!otpSent ? (
          <>
            <label className="mt-7 block text-sm font-semibold text-gray-700">
              Mobile Number
            </label>

            <div className="mt-2 flex overflow-hidden rounded-xl border border-gray-200 focus-within:border-orange-500">

              <span className="flex items-center bg-gray-50 px-3 text-sm text-gray-500">
                +91
              </span>

              <input
                type="tel"
                value={mobile}
                maxLength={10}
                placeholder="Enter mobile number"
                onChange={(event) => {
                  setMobile(
                    event.target.value.replace(
                      /\D/g,
                      ""
                    )
                  );
                }}
                className="w-full px-3 py-3 outline-none"
              />
            </div>

            <button
              type="button"
              disabled={loading}
              onClick={handleSendOtp}
              className="mt-5 w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-3.5 font-semibold text-white shadow-md transition hover:shadow-lg disabled:opacity-60"
            >
              {loading
                ? "Sending OTP..."
                : "Send OTP"}
            </button>
          </>
        ) : (
          <>
            <div className="mt-7 rounded-xl bg-green-50 p-4 text-center text-sm text-green-700">
              OTP sent to +91 {mobile}
            </div>

            <label className="mt-5 block text-sm font-semibold text-gray-700">
              Enter OTP
            </label>

            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={otp}
              placeholder="Enter 6-digit OTP"
              onChange={(event) => {
                setOtp(
                  event.target.value.replace(
                    /\D/g,
                    ""
                  )
                );
              }}
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-center text-lg tracking-[0.4em] outline-none focus:border-orange-500"
            />

            <button
              type="button"
              disabled={loading}
              onClick={handleVerifyOtp}
              className="mt-5 w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-3.5 font-semibold text-white shadow-md transition hover:shadow-lg disabled:opacity-60"
            >
              {loading
                ? "Verifying..."
                : "Verify & Login"}
            </button>

            <button
              type="button"
              onClick={() => {
                setOtpSent(false);
                setOtp("");
              }}
              className="mt-4 w-full text-sm font-medium text-orange-600 hover:underline"
            >
              Change Mobile Number
            </button>
          </>
        )}
      </div>
    </section>
  );
}