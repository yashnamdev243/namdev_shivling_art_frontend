import { Card, Empty, Table, Tag } from "antd";
import { useQuery } from "@tanstack/react-query";
import { apiGet } from "../../../api/axios";
import { ENDPOINTS } from "../../../config/api";

export default function LikeTracking() {
  const { data, isLoading } = useQuery({ queryKey: ["admin-likes"], queryFn: () => apiGet(ENDPOINTS.admin.likes) });
  const rows = data?.likes || [];
  const columns = [
    { title: "Customer", render: (_, r) => <div><b>{r.user?.name || "Unknown"}</b><div className="text-xs text-gray-500">{r.user?.email || "-"}</div></div> },
    { title: "Product", render: (_, r) => r.product?.name || "-" },
    { title: "Action", render: () => <Tag color="blue">Liked</Tag> },
    { title: "When", dataIndex: "createdAt", render: (v) => v ? new Date(v).toLocaleString("en-IN") : "-" },
  ];
  return <Card title="Like Tracking" className="rounded-2xl">{!rows.length && !isLoading ? <Empty description="No likes yet." /> : <div className="overflow-x-auto"><Table rowKey="id" loading={isLoading} columns={columns} dataSource={rows} pagination={{ pageSize: 15 }} /></div>}</Card>;
}
