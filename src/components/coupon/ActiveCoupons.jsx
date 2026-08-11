import { Tag, Empty } from "antd";
import { useQuery } from "@tanstack/react-query";
import couponService from "../../services/couponService";

export default function ActiveCoupons() {
  const { data, isLoading } = useQuery({ queryKey: ["active-coupons"], queryFn: couponService.active });
  const coupons = data?.coupons || [];
  if (isLoading || !coupons.length) return null;

  return (
    <div className="space-y-3">
      {coupons.map((coupon) => (
        <div key={coupon.id} className="rounded-xl border border-orange-100 bg-orange-50/60 p-4">
          <div className="flex flex-wrap items-center gap-2">
            <Tag color="orange">{coupon.code}</Tag>
            <b>{coupon.title || coupon.festival_name || "Special Offer"}</b>
          </div>
          <p className="mt-1 text-sm text-gray-600">
            {coupon.discount_type === "percentage" ? `${coupon.discount_value}% off` : `₹${coupon.discount_value} off`}
            {Number(coupon.min_order_amount) > 0 ? ` on orders above ₹${coupon.min_order_amount}` : ""}.
          </p>
        </div>
      ))}
    </div>
  );
}
