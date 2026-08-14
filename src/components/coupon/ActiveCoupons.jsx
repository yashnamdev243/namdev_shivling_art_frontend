// import { Tag, Empty } from "antd";
// import { useQuery } from "@tanstack/react-query";
// import couponService from "../../services/couponService";

// export default function ActiveCoupons() {
//   const { data, isLoading } = useQuery({ queryKey: ["active-coupons"], queryFn: couponService.active });
//   const coupons = data?.coupons || [];
//   if (isLoading || !coupons.length) return null;

//   return (
//     <div className="space-y-3">
//       {coupons.map((coupon) => (
//         <div key={coupon.id} className="rounded-xl border border-orange-100 bg-orange-50/60 p-4">
//           <div className="flex flex-wrap items-center gap-2">
//             <Tag color="orange">{coupon.code}</Tag>
//             <b>{coupon.title || coupon.festival_name || "Special Offer"}</b>
//           </div>
//           <p className="mt-1 text-sm text-gray-600">
//             {coupon.discount_type === "percentage" ? `${coupon.discount_value}% off` : `₹${coupon.discount_value} off`}
//             {Number(coupon.min_order_amount) > 0 ? ` on orders above ₹${coupon.min_order_amount}` : ""}.
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }




import { Tag } from "antd";
import {
  ClockCircleOutlined,
  TagOutlined,
} from "@ant-design/icons";

import { useQuery } from "@tanstack/react-query";

import dayjs from "dayjs";

import couponService from "../../services/couponService";

export default function ActiveCoupons() {
  const {
    data,
    isLoading,
  } = useQuery({
    queryKey: ["active-coupons"],
    queryFn: couponService.active,
    staleTime: 5 * 60 * 1000,
  });

  const coupons =
    data?.coupons ||
    data?.data ||
    [];

  if (isLoading || !coupons.length) {
    return null;
  }

  return (
    <section className="space-y-4">
      <div>
        <div className="flex items-center gap-2">
          <TagOutlined className="text-orange-500" />

          <h3 className="text-lg font-bold text-slate-900">
            Active Offers
          </h3>
        </div>

        <p className="mt-1 text-sm text-gray-500">
          Use these coupon codes to save on your order.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {coupons.map((coupon) => {
          const discount =
            coupon.discount_type === "percentage"
              ? `${coupon.discount_value}% OFF`
              : `₹${Number(
                  coupon.discount_value || 0
                ).toLocaleString("en-IN")} OFF`;

          return (
            <div
              key={coupon.id}
              className="group relative overflow-hidden rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-4 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-orange-200/30 blur-2xl" />

              <div className="relative">
                <div className="flex items-center justify-between gap-2">
                  <Tag
                    color="orange"
                    className="!mr-0 !rounded-full !px-3 !py-1 !font-bold"
                  >
                    {coupon.code}
                  </Tag>

                  <span className="text-sm font-bold text-orange-600">
                    {discount}
                  </span>
                </div>

                <h4 className="mt-3 font-semibold text-slate-900">
                  {coupon.title ||
                    coupon.festival_name ||
                    "Special Offer"}
                </h4>

                <div className="mt-2 space-y-1 text-xs text-gray-500">
                  {Number(
                    coupon.min_order_amount || 0
                  ) > 0 && (
                    <div>
                      Minimum order:{" "}
                      <b className="text-gray-700">
                        ₹
                        {Number(
                          coupon.min_order_amount
                        ).toLocaleString("en-IN")}
                      </b>
                    </div>
                  )}

                  {coupon.max_discount && (
                    <div>
                      Maximum discount:{" "}
                      <b className="text-gray-700">
                        ₹
                        {Number(
                          coupon.max_discount
                        ).toLocaleString("en-IN")}
                      </b>
                    </div>
                  )}

                  {coupon.expires_at && (
                    <div className="flex items-center gap-1 pt-1">
                      <ClockCircleOutlined />

                      <span>
                        Valid until{" "}
                        {dayjs(
                          coupon.expires_at
                        ).format(
                          "DD MMM YYYY"
                        )}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}