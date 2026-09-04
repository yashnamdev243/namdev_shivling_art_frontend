// import { useMemo, useState } from "react";
// import { Avatar, Tag } from "antd";
// import { UserOutlined } from "@ant-design/icons";
// import { useQuery } from "@tanstack/react-query";
// import AdminDataTable, { StatusTag } from "../../../components/admin/AdminDataTable";
// import adminUserService from "../../../services/adminUserService";

// export default function UserList() {
//   const [search, setSearch] = useState("");

//   const { data, isLoading } = useQuery({
//     queryKey: ["admin-users", search],
//     queryFn: () => adminUserService.listUsers({ search, limit: 100 }),
//   });

//   const users = data?.users || [];

//   const columns = useMemo(
//     () => [
//       {
//         title: "Customer",
//         key: "customer",
//         render: (_, user) => (
//           <div className="flex items-center gap-3">
//             <Avatar src={user.avatar || undefined} icon={<UserOutlined />} />
//             <div className="min-w-0">
//               <p className="truncate font-semibold text-slate-900">{user.name || "Unknown"}</p>
//               <p className="truncate text-xs text-gray-500">{user.email || "-"}</p>
//             </div>
//           </div>
//         ),
//       },
//       {
//         title: "City",
//         dataIndex: "city",
//         render: (value) => value || "-",
//       },
//       {
//         title: "Status",
//         dataIndex: "status",
//         render: (value) => <StatusTag value={value} />,
//       },
//       {
//         title: "Joined",
//         dataIndex: "createdAt",
//         render: (value) => (value ? new Date(value).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "-"),
//       },
//     ],
//     []
//   );

//   return (
//     <AdminDataTable
//       title="Customers"
//       icon={<UserOutlined />}
//       subtitle="All registered customer accounts."
//       columns={columns}
//       dataSource={users}
//       loading={isLoading}
//       rowKey="id"
//       emptyText="No customers found."
//       searchValue={search}
//       onSearchChange={setSearch}
//       searchPlaceholder="Search by name or email"
//       scrollX={700}
//     />
//   );
// }



import { useMemo, useState } from "react";
import { Avatar } from "antd";
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
            <Avatar src={user.avatar || undefined} icon={<UserOutlined />} className="!border !border-[#1C1A17]/[0.08]" />
            <div className="min-w-0">
              <p className="truncate font-semibold text-[#1C1A17]">{user.name || "Unknown"}</p>
              <p className="truncate text-xs text-[#8A8377]">{user.email || "-"}</p>
            </div>
          </div>
        ),
      },
      {
        title: "City",
        dataIndex: "city",
        render: (value) => <span className="text-[#6B6459]">{value || "-"}</span>,
      },
      {
        title: "Status",
        dataIndex: "status",
        render: (value) => <StatusTag value={value} />,
      },
      {
        title: "Joined",
        dataIndex: "createdAt",
        render: (value) => (
          <span className="text-[#6B6459]">
            {value ? new Date(value).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "-"}
          </span>
        ),
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