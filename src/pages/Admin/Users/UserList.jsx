// import {
//   Card,
//   Empty,
//   Spin,
//   Table,
//   Tag,
// } from "antd";

// import { useQuery } from "@tanstack/react-query";
// import adminUserService from "../../../services/adminUserService";

// export default function UserList() {
//   const {
//     data,
//     isLoading,
//   } = useQuery({
//     queryKey: ["admin-users"],
//     queryFn: () =>
//       adminUserService.listUsers(),
//   });

//   const users =
//     data?.users ||
//     data?.data ||
//     [];

//   const columns = [
//     {
//       title: "User",
//       key: "user",
//       render: (_, user) => (
//         <div>
//           <p className="font-semibold">
//             {user.name || "Unknown"}
//           </p>

//           <p className="text-xs text-gray-500">
//             {user.email || "-"}
//           </p>
//         </div>
//       ),
//     },

//     {
//       title: "Mobile",
//       dataIndex: "phone",
//       render: (value) =>
//         value || "-",
//     },

//     {
//       title: "Provider",
//       dataIndex: "provider",
//       render: (value) => (
//         <Tag>
//           {value || "local"}
//         </Tag>
//       ),
//     },

//     {
//       title: "Joined",
//       dataIndex: "createdAt",
//       render: (value) =>
//         value
//           ? new Date(value).toLocaleDateString()
//           : "-",
//     },
//   ];

//   return (
//     <Card
//       title="Customers"
//       className="rounded-2xl"
//     >
//       {isLoading ? (
//         <div className="flex justify-center py-12">
//           <Spin />
//         </div>
//       ) : !users.length ? (
//         <Empty description="No customers found" />
//       ) : (
//         <div className="overflow-x-auto">
//           <Table
//             rowKey={(record) =>
//               record.id || record._id
//             }
//             columns={columns}
//             dataSource={users}
//             pagination={{
//               pageSize: 10,
//             }}
//           />
//         </div>
//       )}
//     </Card>
//   );
// }




import { useMemo, useState } from "react";
import { Avatar, Tag } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import AdminDataTable, { StatusTag } from "../../../components/admin/AdminDataTable";
import adminUserService from "../../../services/adminUserService";

export default function UserList() {
  const [search, setSearch] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["admin-users", search],
    queryFn: () => adminUserService.listUsers({ search, limit: 100 }),
  });

  const users = data?.users || [];

  const columns = useMemo(
    () => [
      {
        title: "Customer",
        key: "customer",
        render: (_, user) => (
          <div className="flex items-center gap-3">
            <Avatar src={user.avatar || undefined} icon={<UserOutlined />} />
            <div className="min-w-0">
              <p className="truncate font-semibold text-slate-900">{user.name || "Unknown"}</p>
              <p className="truncate text-xs text-gray-500">{user.email || "-"}</p>
            </div>
          </div>
        ),
      },
      {
        title: "City",
        dataIndex: "city",
        render: (value) => value || "-",
      },
      {
        title: "Status",
        dataIndex: "status",
        render: (value) => <StatusTag value={value} />,
      },
      {
        title: "Joined",
        dataIndex: "createdAt",
        render: (value) => (value ? new Date(value).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "-"),
      },
    ],
    []
  );

  return (
    <AdminDataTable
      title="Customers"
      icon={<UserOutlined />}
      subtitle="All registered customer accounts."
      columns={columns}
      dataSource={users}
      loading={isLoading}
      rowKey="id"
      emptyText="No customers found."
      searchValue={search}
      onSearchChange={setSearch}
      searchPlaceholder="Search by name or email"
      scrollX={700}
    />
  );
}