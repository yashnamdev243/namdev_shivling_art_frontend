// import {
//   Card,
//   Empty,
//   Spin,
//   Table,
//   Tag,
// } from "antd";

// import { useQuery } from "@tanstack/react-query";

// import adminUserService from "../../../services/adminUserService";

// export default function ActivityList() {
//   const {
//     data,
//     isLoading,
//   } = useQuery({
//     queryKey: ["admin-activity"],
//     queryFn: () =>
//       adminUserService.activity(),
//   });

//   const activities =
//     data?.activities ||
//     data?.data ||
//     [];

//   const columns = [
//     {
//       title: "User",
//       key: "user",
//       render: (_, item) =>
//         item.user?.name ||
//         item.user_name ||
//         "Unknown",
//     },

//     {
//       title: "Action",
//       dataIndex: "action",
//       render: (value) => (
//         <Tag color="orange">
//           {value}
//         </Tag>
//       ),
//     },

//     {
//       title: "Product",
//       key: "product",
//       render: (_, item) =>
//         item.product?.name ||
//         item.product_name ||
//         "-",
//     },

//     {
//       title: "Date",
//       dataIndex: "createdAt",
//       render: (value) =>
//         value
//           ? new Date(
//               value
//             ).toLocaleString()
//           : "-",
//     },
//   ];

//   return (
//     <Card
//       title="Customer Activity"
//       className="rounded-2xl"
//     >
//       {isLoading ? (
//         <div className="flex justify-center py-12">
//           <Spin />
//         </div>
//       ) : !activities.length ? (
//         <Empty description="No activity found" />
//       ) : (
//         <div className="overflow-x-auto">
//           <Table
//             rowKey={(record) =>
//               record.id ||
//               record._id
//             }
//             columns={columns}
//             dataSource={activities}
//             pagination={{
//               pageSize: 15,
//             }}
//           />
//         </div>
//       )}
//     </Card>
//   );
// }


import { useMemo, useState } from "react";
import { Avatar, Select, Tag } from "antd";
import { HistoryOutlined, UserOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import AdminDataTable, { ActionTag } from "../../../components/admin/AdminDataTable";
import adminUserService from "../../../services/adminUserService";

const ACTION_META = {
  LOGIN: { label: "Logged in", color: "green" },
  LOGOUT: { label: "Logged out", color: "default" },
  REGISTER: { label: "Registered", color: "blue" },
  LIKE_ADD: { label: "Liked product", color: "magenta" },
  LIKE_REMOVE: { label: "Removed like", color: "default" },
  WISHLIST_ADD: { label: "Added to wishlist", color: "volcano" },
  WISHLIST_REMOVE: { label: "Removed from wishlist", color: "default" },
  REVIEW_CREATE: { label: "Wrote a review", color: "purple" },
  COUPON_APPLY: { label: "Applied coupon", color: "gold" },
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
            <Avatar size={28} src={item.user?.avatar || undefined} icon={<UserOutlined />} />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900">{item.user?.name || "Unknown"}</p>
              <p className="truncate text-xs text-gray-400">{item.user?.email || ""}</p>
            </div>
          </div>
        ),
      },
      {
        title: "Action",
        dataIndex: "action",
        render: (value) => {
          const meta = ACTION_META[value];
          return meta ? <Tag color={meta.color}>{meta.label}</Tag> : <ActionTag value={value} />;
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
        render: (value) =>
          value
            ? new Date(value).toLocaleString("en-IN", {
                day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit",
              })
            : "-",
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