import {
  Card,
  Empty,
  Spin,
  Table,
  Tag,
} from "antd";

import { useQuery } from "@tanstack/react-query";
import adminUserService from "../../../services/adminUserService";

export default function UserList() {
  const {
    data,
    isLoading,
  } = useQuery({
    queryKey: ["admin-users"],
    queryFn: () =>
      adminUserService.listUsers(),
  });

  const users =
    data?.users ||
    data?.data ||
    [];

  const columns = [
    {
      title: "User",
      key: "user",
      render: (_, user) => (
        <div>
          <p className="font-semibold">
            {user.name || "Unknown"}
          </p>

          <p className="text-xs text-gray-500">
            {user.email || "-"}
          </p>
        </div>
      ),
    },

    {
      title: "Mobile",
      dataIndex: "phone",
      render: (value) =>
        value || "-",
    },

    {
      title: "Provider",
      dataIndex: "provider",
      render: (value) => (
        <Tag>
          {value || "local"}
        </Tag>
      ),
    },

    {
      title: "Joined",
      dataIndex: "createdAt",
      render: (value) =>
        value
          ? new Date(value).toLocaleDateString()
          : "-",
    },
  ];

  return (
    <Card
      title="Customers"
      className="rounded-2xl"
    >
      {isLoading ? (
        <div className="flex justify-center py-12">
          <Spin />
        </div>
      ) : !users.length ? (
        <Empty description="No customers found" />
      ) : (
        <div className="overflow-x-auto">
          <Table
            rowKey={(record) =>
              record.id || record._id
            }
            columns={columns}
            dataSource={users}
            pagination={{
              pageSize: 10,
            }}
          />
        </div>
      )}
    </Card>
  );
}