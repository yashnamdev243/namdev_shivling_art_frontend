// import { Card, Empty, Table, Tag } from "antd";
// import { useQuery } from "@tanstack/react-query";
// import { apiGet } from "../../../api/axios";
// import { ENDPOINTS } from "../../../config/api";

// export default function LikeTracking() {
//   const { data, isLoading } = useQuery({
//     queryKey: ["admin-likes"],
//     queryFn: () => apiGet(ENDPOINTS.admin.likes),
//   });
//   const rows = data?.likes || [];
//   const columns = [
//     {
//       title: "Customer",
//       render: (_, r) => (
//         <div>
//           <b>{r.user?.name || "Unknown"}</b>
//           <div className="text-xs text-gray-500">{r.user?.email || "-"}</div>
//         </div>
//       ),
//     },
//     { title: "Product", render: (_, r) => r.product?.name || "-" },
//     { title: "Action", render: () => <Tag color="blue">Liked</Tag> },
//     {
//       title: "When",
//       dataIndex: "createdAt",
//       render: (v) => (v ? new Date(v).toLocaleString("en-IN") : "-"),
//     },
//   ];
//   return (
//     <Card title="Like Tracking" className="rounded-2xl">
//       {!rows.length && !isLoading ? (
//         <Empty description="No likes yet." />
//       ) : (
//         <div className="overflow-x-auto">
//           <Table
//             rowKey="id"
//             loading={isLoading}
//             columns={columns}
//             dataSource={rows}
//             pagination={{ pageSize: 15 }}
//           />
//         </div>
//       )}
//     </Card>
//   );
// }




import { LikeOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tag } from "antd";
import { useQuery } from "@tanstack/react-query";
import AdminDataTable from "../../../components/admin/AdminDataTable";
import adminTrackingService from "../../../services/adminTrackingService";
import { getFileUrl } from "../../../utils/fileUrl";

export default function LikeTracking() {
  const { data, isLoading } = useQuery({
    queryKey: ["admin-likes"],
    queryFn: () => adminTrackingService.likes({ limit: 200 }),
  });

  const rows = data?.likes || [];

  const columns = [
    {
      title: "Customer",
      key: "customer",
      render: (_, r) => (
        <div className="flex items-center gap-3">
          <Avatar src={r.user?.avatar ? getFileUrl(r.user.avatar) : undefined} icon={<UserOutlined />} />
          <div className="min-w-0">
            <p className="truncate font-semibold text-slate-900">{r.user?.name || "Unknown"}</p>
            <p className="truncate text-xs text-gray-500">{r.user?.email || "-"}</p>
          </div>
        </div>
      ),
    },
    {
      title: "Product",
      key: "product",
      render: (_, r) => (
        <div className="flex items-center gap-3">
          {r.product?.image && (
            <img src={getFileUrl(r.product.image)} alt="" className="h-9 w-9 rounded-lg object-cover" />
          )}
          <span className="font-medium text-slate-800">{r.product?.name || "-"}</span>
        </div>
      ),
    },
    { title: "Action", key: "action", render: () => <Tag color="magenta">Liked</Tag> },
    {
      title: "When",
      dataIndex: "createdAt",
      render: (v) =>
        v
          ? new Date(v).toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
          : "-",
    },
  ];

  return (
    <AdminDataTable
      title="Like Tracking"
      icon={<LikeOutlined />}
      subtitle="Every product customers have liked, most recent first."
      columns={columns}
      dataSource={rows}
      loading={isLoading}
      rowKey="id"
      emptyText="No likes yet."
      scrollX={650}
    />
  );
}