import { Card, Empty, Table, Tag } from "antd";
import { useQuery } from "@tanstack/react-query";
import { apiGet } from "../../../api/axios";
import { ENDPOINTS } from "../../../config/api";

export default function WishlistTracking() {
  const { data, isLoading } = useQuery({
    queryKey: ["admin-wishlists"],
    queryFn: () => apiGet(ENDPOINTS.admin.wishlists),
  });
  const rows = data?.wishlists || [];

  const columns = [
    { title: "Customer", render: (_, r) => <div><b>{r.user?.name || "Unknown"}</b><div className="text-xs text-gray-500">{r.user?.email || "-"}</div></div> },
    { title: "Product", render: (_, r) => r.product?.name || "-" },
    { title: "Price", render: (_, r) => `₹${Number(r.product?.discount_price || r.product?.price || 0).toLocaleString("en-IN")}` },
    { title: "Saved", dataIndex: "createdAt", render: (v) => v ? new Date(v).toLocaleString("en-IN") : "-" },
    { title: "Status", render: (_, r) => <Tag color="magenta">Wishlisted</Tag> },
  ];

  return (
    <Card title="Wishlist Tracking" className="rounded-2xl">
      {!rows.length && !isLoading ? <Empty description="No wishlist activity yet." /> : (
        <div className="overflow-x-auto"><Table rowKey="id" loading={isLoading} columns={columns} dataSource={rows} pagination={{ pageSize: 15 }} /></div>
      )}
    </Card>
  );
}
