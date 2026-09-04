// import { LikeOutlined, UserOutlined } from "@ant-design/icons";
// import { Avatar, Tag } from "antd";
// import { useQuery } from "@tanstack/react-query";
// import AdminDataTable from "../../../components/admin/AdminDataTable";
// import adminTrackingService from "../../../services/adminTrackingService";
// import { getFileUrl } from "../../../utils/fileUrl";

// export default function LikeTracking() {
//   const { data, isLoading } = useQuery({
//     queryKey: ["admin-likes"],
//     queryFn: () => adminTrackingService.likes({ limit: 200 }),
//   });

//   const rows = data?.likes || [];

//   const columns = [
//     {
//       title: "Customer",
//       key: "customer",
//       render: (_, r) => (
//         <div className="flex items-center gap-3">
//           <Avatar src={r.user?.avatar ? getFileUrl(r.user.avatar) : undefined} icon={<UserOutlined />} />
//           <div className="min-w-0">
//             <p className="truncate font-semibold text-slate-900">{r.user?.name || "Unknown"}</p>
//             <p className="truncate text-xs text-gray-500">{r.user?.email || "-"}</p>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Product",
//       key: "product",
//       render: (_, r) => (
//         <div className="flex items-center gap-3">
//           {r.product?.image && (
//             <img src={getFileUrl(r.product.image)} alt="" className="h-9 w-9 rounded-lg object-cover" />
//           )}
//           <span className="font-medium text-slate-800">{r.product?.name || "-"}</span>
//         </div>
//       ),
//     },
//     { title: "Action", key: "action", render: () => <Tag color="magenta">Liked</Tag> },
//     {
//       title: "When",
//       dataIndex: "createdAt",
//       render: (v) =>
//         v
//           ? new Date(v).toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
//           : "-",
//     },
//   ];

//   return (
//     <AdminDataTable
//       title="Like Tracking"
//       icon={<LikeOutlined />}
//       subtitle="Every product customers have liked, most recent first."
//       columns={columns}
//       dataSource={rows}
//       loading={isLoading}
//       rowKey="id"
//       emptyText="No likes yet."
//       scrollX={650}
//     />
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
            <p className="truncate font-semibold text-[#1C1A17]">{r.user?.name || "Unknown"}</p>
            <p className="truncate text-xs text-[#8A8377]">{r.user?.email || "-"}</p>
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
            <img
              src={getFileUrl(r.product.image)}
              alt=""
              className="h-10 w-10 rounded-lg border border-[#1C1A17]/[0.08] object-cover"
            />
          )}
          <span className="font-medium text-[#1C1A17]">{r.product?.name || "-"}</span>
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Tag className="!border-[#B06A7A]/25 !bg-[#B06A7A]/[0.08] !text-[#8C4A58]">Liked</Tag>
      ),
    },
    {
      title: "When",
      dataIndex: "createdAt",
      render: (v) => (
        <span className="text-xs text-[#6B6459]">
          {v
            ? new Date(v).toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
            : "-"}
        </span>
      ),
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