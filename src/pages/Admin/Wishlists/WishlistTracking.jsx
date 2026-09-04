// import { HeartOutlined, UserOutlined } from "@ant-design/icons";
// import { Avatar, Tag } from "antd";
// import { useQuery } from "@tanstack/react-query";
// import AdminDataTable from "../../../components/admin/AdminDataTable";
// import adminTrackingService from "../../../services/adminTrackingService";
// import { getFileUrl } from "../../../utils/fileUrl";

// export default function WishlistTracking() {
//   const { data, isLoading } = useQuery({
//     queryKey: ["admin-wishlists"],
//     queryFn: () => adminTrackingService.wishlists({ limit: 200 }),
//   });

//   const rows = data?.wishlists || [];

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
//     {
//       title: "Price",
//       key: "price",
//       render: (_, r) => `₹${Number(r.product?.discount_price || r.product?.price || 0).toLocaleString("en-IN")}`,
//     },
//     { title: "Status", key: "status", render: () => <Tag color="volcano">Wishlisted</Tag> },
//     {
//       title: "Saved On",
//       dataIndex: "createdAt",
//       render: (v) =>
//         v
//           ? new Date(v).toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
//           : "-",
//     },
//   ];

//   return (
//     <AdminDataTable
//       title="Wishlist Tracking"
//       icon={<HeartOutlined />}
//       subtitle="Products customers have saved to their wishlist."
//       columns={columns}
//       dataSource={rows}
//       loading={isLoading}
//       rowKey="id"
//       emptyText="No wishlist activity yet."
//       scrollX={750}
//     />
//   );
// }


import { HeartOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tag } from "antd";
import { useQuery } from "@tanstack/react-query";
import AdminDataTable from "../../../components/admin/AdminDataTable";
import adminTrackingService from "../../../services/adminTrackingService";
import { getFileUrl } from "../../../utils/fileUrl";

export default function WishlistTracking() {
  const { data, isLoading } = useQuery({
    queryKey: ["admin-wishlists"],
    queryFn: () => adminTrackingService.wishlists({ limit: 200 }),
  });

  const rows = data?.wishlists || [];

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
      title: "Price",
      key: "price",
      render: (_, r) => (
        <span className="font-semibold text-[#1C1A17]">
          ₹{Number(r.product?.discount_price || r.product?.price || 0).toLocaleString("en-IN")}
        </span>
      ),
    },
    {
      title: "Status",
      key: "status",
      render: () => (
        <Tag className="!border-[#9B4444]/20 !bg-[#9B4444]/[0.06] !text-[#9B4444]">Wishlisted</Tag>
      ),
    },
    {
      title: "Saved On",
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
      title="Wishlist Tracking"
      icon={<HeartOutlined />}
      subtitle="Products customers have saved to their wishlist."
      columns={columns}
      dataSource={rows}
      loading={isLoading}
      rowKey="id"
      emptyText="No wishlist activity yet."
      scrollX={750}
    />
  );
}