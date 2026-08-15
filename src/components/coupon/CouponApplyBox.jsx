// import { useState } from "react";

// import {
//   Button,
//   Input,
//   Tag,
// } from "antd";

// import {
//   TagOutlined,
//   CheckCircleFilled,
//   CloseOutlined,
//   InfoCircleOutlined,
// } from "@ant-design/icons";

// import toast from "react-hot-toast";

// import couponService from "../../services/couponService";

// export default function CouponApplyBox({
//   product,
//   onApplied,
// }) {
//   const [code, setCode] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);

//   const productId =
//     product?.id ||
//     product?._id;

//   const price = Number(
//     product?.price || 0
//   );

//   const applyCoupon = async () => {
//     const couponCode =
//       code.trim().toUpperCase();

//     if (!couponCode) {
//       toast.error(
//         "Please enter a coupon code."
//       );
//       return;
//     }

//     if (!productId) {
//       toast.error(
//         "Product information is unavailable."
//       );
//       return;
//     }

//     try {
//       setLoading(true);

//       const response =
//         await couponService.apply({
//           code: couponCode,

//           productId,

//           amount: price,

//           quantity: 1,
//         });

//       /*
//        * Your backend may return:
//        * {
//        *   success: true,
//        *   coupon: {...},
//        *   discountAmount: 100,
//        *   payableAmount: 1100,
//        *   message: "Coupon applied"
//        * }
//        */

//       if (response?.success === false) {
//         throw new Error(
//           response?.message ||
//             "Coupon could not be applied."
//         );
//       }

//       setResult(response);

//       onApplied?.(response);

//       toast.success(
//         response?.message ||
//           "Coupon applied successfully."
//       );
//     } catch (error) {
//       setResult(null);

//       onApplied?.(null);

//       toast.error(
//         error?.response?.data?.message ||
//           error?.message ||
//           "Invalid or unavailable coupon."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const removeCoupon = () => {
//     setCode("");
//     setResult(null);

//     onApplied?.(null);

//     toast.success(
//       "Coupon removed."
//     );
//   };

//   const discount = Number(
//     result?.discountAmount ||
//       result?.discount_amount ||
//       0
//   );

//   const payableAmount = Number(
//     result?.payableAmount ??
//       result?.payable_amount ??
//       Math.max(0, price - discount)
//   );

//   if (!product) {
//     return null;
//   }

//   return (
//     <div className="mt-6 overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 shadow-sm">

//       {/* HEADER */}

//       <div className="border-b border-orange-100 px-4 py-4 sm:px-5">
//         <div className="flex items-start gap-3">

//           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
//             <TagOutlined />
//           </div>

//           <div>
//             <h3 className="font-semibold text-slate-900">
//               Have a coupon?
//             </h3>

//             <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
//               Enter your coupon code and check
//               your available discount.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* NOT APPLIED */}

//       {!result ? (
//         <div className="p-4 sm:p-5">

//           <div className="flex flex-col gap-2 sm:flex-row">

//             <Input
//               size="large"
//               value={code}
//               maxLength={40}
//               placeholder="Enter coupon code"
//               prefix={
//                 <TagOutlined className="text-gray-400" />
//               }
//               className="!rounded-xl"
//               onChange={(event) =>
//                 setCode(
//                   event.target.value.toUpperCase()
//                 )
//               }
//               onPressEnter={applyCoupon}
//             />

//             <Button
//               type="primary"
//               size="large"
//               loading={loading}
//               onClick={applyCoupon}
//               className="!h-11 !rounded-xl !border-0 !bg-gradient-to-r !from-orange-500 !to-amber-500 !font-semibold"
//             >
//               Apply
//             </Button>
//           </div>

//           <div className="mt-4 flex gap-2 rounded-2xl bg-white/80 p-3 text-xs leading-5 text-gray-500">
//             <InfoCircleOutlined className="mt-0.5 shrink-0 text-orange-500" />

//             <span>
//               Coupon eligibility may depend on
//               minimum order value, product selection
//               and offer validity.
//             </span>
//           </div>
//         </div>
//       ) : (

//         /* APPLIED */

//         <div className="p-4 sm:p-5">

//           <div className="flex items-start justify-between gap-3">

//             <div className="flex items-start gap-3">

//               <CheckCircleFilled className="mt-1 text-xl text-green-500" />

//               <div>

//                 <div className="flex flex-wrap items-center gap-2">

//                   <span className="font-semibold text-green-700">
//                     Coupon Applied
//                   </span>

//                   <Tag color="green">
//                     {result.code ||
//                       result.coupon?.code ||
//                       code}
//                   </Tag>
//                 </div>

//                 <p className="mt-1 text-xs text-gray-500">
//                   You save ₹
//                   {discount.toLocaleString(
//                     "en-IN"
//                   )}
//                 </p>
//               </div>
//             </div>

//             <button
//               type="button"
//               onClick={removeCoupon}
//               className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-500"
//               aria-label="Remove coupon"
//             >
//               <CloseOutlined />
//             </button>
//           </div>

//           {/* PRICE SUMMARY */}

//           <div className="mt-4 rounded-2xl bg-white p-4">

//             <div className="flex justify-between text-sm">
//               <span className="text-gray-500">
//                 Product Price
//               </span>

//               <span className="font-medium text-gray-800">
//                 ₹
//                 {price.toLocaleString(
//                   "en-IN"
//                 )}
//               </span>
//             </div>

//             <div className="mt-2 flex justify-between text-sm">
//               <span className="text-green-600">
//                 Coupon Discount
//               </span>

//               <span className="font-semibold text-green-600">
//                 -₹
//                 {discount.toLocaleString(
//                   "en-IN"
//                 )}
//               </span>
//             </div>

//             <div className="my-3 border-t border-dashed border-gray-200" />

//             <div className="flex items-center justify-between">

//               <span className="font-semibold text-slate-900">
//                 Estimated Price
//               </span>

//               <span className="text-xl font-bold text-orange-600">
//                 ₹
//                 {payableAmount.toLocaleString(
//                   "en-IN"
//                 )}
//               </span>
//             </div>
//           </div>

//           <div className="mt-3 rounded-2xl bg-green-50 p-3 text-xs leading-5 text-green-700">
//             <strong>Coupon applied successfully.</strong>{" "}
//             Final order amount may include shipping,
//             taxes or other applicable charges.
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




import { useState } from "react";
import { Button, Input, Tag, Modal, Empty, Spin } from "antd";
import { TagOutlined, CheckCircleFilled, CloseOutlined, InfoCircleOutlined, HistoryOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import couponService from "../../services/couponService";
import { useUserAuth } from "../../context/UserAuthContext";
import LoginRequiredModal from "../auth/LoginRequiredModal";

export default function CouponApplyBox({ product, onApplied }) {
  const { isAuthenticated } = useUserAuth();
  const [loginOpen, setLoginOpen] = useState(false);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [historyOpen, setHistoryOpen] = useState(false);

  const productId = product?.id || product?._id;
  const price = Number(product?.price || 0);

  const { data: historyData, isLoading: historyLoading } = useQuery({
    queryKey: ["my-coupon-history"],
    queryFn: couponService.myRedemptions,
    enabled: historyOpen, // only fetch when modal is opened
  });
  const history = historyData?.redemptions || [];

  const applyCoupon = async () => {
   
    if (!isAuthenticated) {
      // toast.error("Please login to apply a coupon.");
      setLoginOpen(true);
      return;
    }

   const couponCode = code.trim().toUpperCase();

    if (!couponCode) {
      toast.error("Please enter a coupon code.");
      return;
    }
    if (!productId) {
      toast.error("Product information is unavailable.");
      return;
    }

    try {
      setLoading(true);
      const response = await couponService.apply({ code: couponCode, productId, amount: price, quantity: 1 });

      if (response?.success === false) throw new Error(response?.message);

      setResult(response);
      onApplied?.(response);
      toast.success(response?.message || "Coupon applied successfully.");
    } catch (error) {
      setResult(null);
      onApplied?.(null);
      // backend now sends a specific message per failure reason
      toast.error(error?.response?.data?.message || error?.message || "Invalid or unavailable coupon.");
    } finally {
      setLoading(false);
    }
  };

  const removeCoupon = () => {
    setCode("");
    setResult(null);
    onApplied?.(null);
    toast.success("Coupon removed.");
  };

  const discount = Number(result?.pricing?.discount || 0);
  const payableAmount = Number(result?.pricing?.finalPrice ?? Math.max(0, price - discount));

  if (!product) return null;

  return (
    <div className="mt-6 overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 shadow-sm">
      {/* HEADER */}
      <div className="flex items-start justify-between gap-3 border-b border-orange-100 px-4 py-4 sm:px-5">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
            <TagOutlined />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Have a coupon?</h3>
            <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
              Enter your coupon code and check your available discount.
            </p>
          </div>
        </div>

        {isAuthenticated && (
          <Button
            type="text"
            size="small"
            icon={<HistoryOutlined />}
            onClick={() => setHistoryOpen(true)}
            className="!shrink-0 !text-orange-600"
          >
            History
          </Button>
        )}
      </div>

      {/* NOT APPLIED */}
      {!result ? (
        <div className="p-4 sm:p-5">
          <div className="flex flex-col gap-2 sm:flex-row">
            <Input
              size="large"
              value={code}
              maxLength={40}
              placeholder="Enter coupon code"
              prefix={<TagOutlined className="text-gray-400" />}
              className="!rounded-xl"
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              onPressEnter={applyCoupon}
            />
            <Button
              type="primary"
              size="large"
              loading={loading}
              onClick={applyCoupon}
              className="!h-11 !rounded-xl !border-0 !bg-gradient-to-r !from-orange-500 !to-amber-500 !font-semibold"
            >
              Apply
            </Button>
          </div>

          {!isAuthenticated && (
            <div className="mt-3 flex gap-2 rounded-2xl bg-amber-50 p-3 text-xs leading-5 text-amber-700">
              <InfoCircleOutlined className="mt-0.5 shrink-0 text-amber-500" />
              <span>Please login to apply a coupon and track your savings.</span>
            </div>
          )}

          <div className="mt-4 flex gap-2 rounded-2xl bg-white/80 p-3 text-xs leading-5 text-gray-500">
            <InfoCircleOutlined className="mt-0.5 shrink-0 text-orange-500" />
            <span>Coupon eligibility may depend on minimum order value, product selection and offer validity.</span>
          </div>
        </div>
      ) : (
        /* APPLIED */
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <CheckCircleFilled className="mt-1 text-xl text-green-500" />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-green-700">Coupon Applied</span>
                  <Tag color="green">{result.coupon?.code || code}</Tag>
                </div>
                <p className="mt-1 text-xs text-gray-500">You save ₹{discount.toLocaleString("en-IN")}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={removeCoupon}
              className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-500"
              aria-label="Remove coupon"
            >
              <CloseOutlined />
            </button>
          </div>

          <div className="mt-4 rounded-2xl bg-white p-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Product Price</span>
              <span className="font-medium text-gray-800">₹{price.toLocaleString("en-IN")}</span>
            </div>
            <div className="mt-2 flex justify-between text-sm">
              <span className="text-green-600">Coupon Discount</span>
              <span className="font-semibold text-green-600">-₹{discount.toLocaleString("en-IN")}</span>
            </div>
            <div className="my-3 border-t border-dashed border-gray-200" />
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-900">Estimated Price</span>
              <span className="text-xl font-bold text-orange-600">₹{payableAmount.toLocaleString("en-IN")}</span>
            </div>
          </div>

          <div className="mt-3 rounded-2xl bg-green-50 p-3 text-xs leading-5 text-green-700">
            <strong>Coupon applied successfully.</strong> Final order amount may include shipping, taxes or other applicable charges.
          </div>
        </div>
      )}

       <LoginRequiredModal
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        title="Login to use a coupon"
        description="Please login before applying a coupon. This helps us track your savings and prevent misuse."
      />

      {/* HISTORY MODAL */}
      <Modal
        open={historyOpen}
        title={
          <div className="flex items-center gap-2">
            <HistoryOutlined className="text-orange-500" />
            <span>Your Coupon History</span>
          </div>
        }
        footer={null}
        onCancel={() => setHistoryOpen(false)}
        width={520}
      >
        {historyLoading ? (
          <div className="flex justify-center py-10">
            <Spin />
          </div>
        ) : history.length === 0 ? (
          <Empty description="You haven't used any coupons yet." />
        ) : (
          <div className="max-h-[420px] space-y-3 overflow-y-auto pr-1">
            {history.map((r) => (
              <div key={r.id} className="rounded-2xl border border-orange-100 bg-orange-50/50 p-4">
                <div className="flex items-center justify-between gap-2">
                  <Tag color="orange">{r.coupon?.code || "—"}</Tag>
                  <span className="text-xs text-gray-500">
                    {dayjs(r.createdAt).format("DD MMM YYYY, hh:mm A")}
                  </span>
                </div>
                {r.coupon?.title && (
                  <p className="mt-2 text-sm font-medium text-slate-900">{r.coupon.title}</p>
                )}
                <div className="mt-2 flex justify-between text-sm">
                  <span className="text-gray-500">You saved</span>
                  <span className="font-semibold text-green-600">
                    ₹{Number(r.discount_amount || 0).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  );
}