// import { useMemo, useState } from "react";
// import { Avatar, Select, Tag } from "antd";
// import { HistoryOutlined, UserOutlined } from "@ant-design/icons";
// import { useQuery } from "@tanstack/react-query";
// import AdminDataTable, { ActionTag } from "../../../components/admin/AdminDataTable";
// import adminUserService from "../../../services/adminUserService";

// const ACTION_META = {
//   LOGIN: { label: "Logged in", color: "green" },
//   LOGOUT: { label: "Logged out", color: "default" },
//   REGISTER: { label: "Registered", color: "blue" },
//   LIKE_ADD: { label: "Liked product", color: "magenta" },
//   LIKE_REMOVE: { label: "Removed like", color: "default" },
//   WISHLIST_ADD: { label: "Added to wishlist", color: "volcano" },
//   WISHLIST_REMOVE: { label: "Removed from wishlist", color: "default" },
//   REVIEW_CREATE: { label: "Wrote a review", color: "purple" },
//   COUPON_APPLY: { label: "Applied coupon", color: "gold" },
// };

// export default function ActivityList() {
//   const [action, setAction] = useState("");

//   const { data, isLoading } = useQuery({
//     queryKey: ["admin-activity", action],
//     queryFn: () => adminUserService.activity({ action: action || undefined, limit: 200 }),
//   });

//   const activities = data?.activities || [];

//   const columns = useMemo(
//     () => [
//       {
//         title: "User",
//         key: "user",
//         render: (_, item) => (
//           <div className="flex items-center gap-2">
//             <Avatar size={28} src={item.user?.avatar || undefined} icon={<UserOutlined />} />
//             <div className="min-w-0">
//               <p className="truncate text-sm font-semibold text-slate-900">{item.user?.name || "Unknown"}</p>
//               <p className="truncate text-xs text-gray-400">{item.user?.email || ""}</p>
//             </div>
//           </div>
//         ),
//       },
//       {
//         title: "Action",
//         dataIndex: "action",
//         render: (value) => {
//           const meta = ACTION_META[value];
//           return meta ? <Tag color={meta.color}>{meta.label}</Tag> : <ActionTag value={value} />;
//         },
//       },
//       {
//         title: "Product",
//         key: "product",
//         render: (_, item) => item.product?.name || "-",
//       },
//       {
//         title: "When",
//         dataIndex: "createdAt",
//         render: (value) =>
//           value
//             ? new Date(value).toLocaleString("en-IN", {
//                 day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit",
//               })
//             : "-",
//       },
//     ],
//     []
//   );

//   return (
//     <AdminDataTable
//       title="Customer Activity"
//       icon={<HistoryOutlined />}
//       subtitle="Login, likes, wishlist, reviews and coupon usage across your site."
//       columns={columns}
//       dataSource={activities}
//       loading={isLoading}
//       rowKey="id"
//       emptyText="No activity recorded yet."
//       scrollX={750}
//       extra={
//         <Select
//           allowClear
//           placeholder="Filter by action"
//           value={action || undefined}
//           onChange={(v) => setAction(v || "")}
//           className="!w-48"
//           options={Object.entries(ACTION_META).map(([value, meta]) => ({ value, label: meta.label }))}
//         />
//       }
//     />
//   );
// }


import { useMemo, useState } from "react";
import { Avatar, Select, Tag } from "antd";
import { HistoryOutlined, UserOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import AdminDataTable, { ActionTag } from "../../../components/admin/AdminDataTable";
import adminUserService from "../../../services/adminUserService";

const ACTION_META = {
  LOGIN: { label: "Logged in", style: "!border-emerald-700/20 !bg-emerald-50 !text-emerald-700" },
  LOGOUT: { label: "Logged out", style: "!border-[#1C1A17]/10 !bg-[#F5F1E8] !text-[#6B6459]" },
  REGISTER: { label: "Registered", style: "!border-blue-400/25 !bg-blue-50 !text-blue-700" },
  LIKE_ADD: { label: "Liked product", style: "!border-[#B06A7A]/25 !bg-[#B06A7A]/[0.08] !text-[#8C4A58]" },
  LIKE_REMOVE: { label: "Removed like", style: "!border-[#1C1A17]/10 !bg-[#F5F1E8] !text-[#6B6459]" },
  WISHLIST_ADD: { label: "Added to wishlist", style: "!border-[#9B4444]/20 !bg-[#9B4444]/[0.06] !text-[#9B4444]" },
  WISHLIST_REMOVE: { label: "Removed from wishlist", style: "!border-[#1C1A17]/10 !bg-[#F5F1E8] !text-[#6B6459]" },
  REVIEW_CREATE: { label: "Wrote a review", style: "!border-[#6B5B8C]/25 !bg-[#6B5B8C]/[0.08] !text-[#4D3F66]" },
  COUPON_APPLY: { label: "Applied coupon", style: "!border-[#D4AF6A]/30 !bg-[#A8823C]/[0.08] !text-[#8A6B2E]" },
};

export default function ActivityList() {
  const [action, setAction] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["admin-activity", action],
    queryFn: () => adminUserService.activity({ action: action || undefined, limit: 200 }),
  });

  const activities = data?.activities || [];

  const columns = useMemo(
    () => [
      {
        title: "User",
        key: "user",
        render: (_, item) => (
          <div className="flex items-center gap-2">
            <Avatar size={32} src={item.user?.avatar || undefined} icon={<UserOutlined />} />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-[#1C1A17]">{item.user?.name || "Unknown"}</p>
              <p className="truncate text-xs text-[#8A8377]">{item.user?.email || ""}</p>
            </div>
          </div>
        ),
      },
      {
        title: "Action",
        dataIndex: "action",
        render: (value) => {
          const meta = ACTION_META[value];
          return meta ? <Tag className={meta.style}>{meta.label}</Tag> : <ActionTag value={value} />;
        },
      },
      {
        title: "Product",
        key: "product",
        render: (_, item) => item.product?.name || "-",
      },
      {
        title: "When",
        dataIndex: "createdAt",
        render: (value) => (
          <div className="text-xs">
            {value
              ? new Date(value).toLocaleString("en-IN", {
                  day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit",
                })
              : "-"}
          </div>
        ),
      },
    ],
    []
  );

  return (
    <AdminDataTable
      title="Customer Activity"
      icon={<HistoryOutlined />}
      subtitle="Login, likes, wishlist, reviews and coupon usage across your site."
      columns={columns}
      dataSource={activities}
      loading={isLoading}
      rowKey="id"
      emptyText="No activity recorded yet."
      scrollX={750}
      extra={
        <Select
          allowClear
          placeholder="Filter by action"
          value={action || undefined}
          onChange={(v) => setAction(v || "")}
          className="!w-48"
          options={Object.entries(ACTION_META).map(([value, meta]) => ({ value, label: meta.label }))}
        />
      }
    />
  );
}