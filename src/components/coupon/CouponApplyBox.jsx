import { useState } from "react";
import { Button, Input } from "antd";
import { TagOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import { useCart } from "../../context/CartContext";
import { useUserAuth } from "../../context/UserAuthContext";
import couponService from "../../services/couponService";

export default function CouponApplyBox({ onApplied }) {
  const { items } = useCart();
  const { isAuthenticated } = useUserAuth();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const apply = async () => {
    if (!isAuthenticated) {
      toast.error("Please login before using a coupon.");
      return;
    }
    if (!code.trim()) {
      toast.error("Enter a coupon code.");
      return;
    }

    try {
      setLoading(true);
      const response = await couponService.validate({
        code: code.trim(),
        items: items.map((item) => ({ productId: item.id, quantity: item.qty })),
      });
      setResult(response);
      onApplied?.(response);
      toast.success(response?.message || "Coupon applied.");
    } catch (error) {
      setResult(null);
      toast.error(error?.message || "Coupon could not be applied.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-orange-100 bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-center gap-2 font-semibold text-slate-900"><TagOutlined /> Have a coupon?</div>
      <div className="flex gap-2">
        <Input value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} placeholder="Enter coupon code" onPressEnter={apply} />
        <Button type="primary" loading={loading} onClick={apply}>Apply</Button>
      </div>
      {result && (
        <div className="mt-3 rounded-xl bg-green-50 p-3 text-sm text-green-700">
          <b>{result.code}</b> applied — you save ₹{Number(result.discountAmount || 0).toLocaleString("en-IN")}.
          <div className="mt-1">Payable: ₹{Number(result.payableAmount || 0).toLocaleString("en-IN")}</div>
        </div>
      )}
    </div>
  );
}
