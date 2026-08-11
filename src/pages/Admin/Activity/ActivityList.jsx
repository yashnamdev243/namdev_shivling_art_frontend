import {
  Card,
  Empty,
  Spin,
  Table,
  Tag,
} from "antd";

import { useQuery } from "@tanstack/react-query";

import adminUserService from "../../../services/adminUserService";

export default function ActivityList() {
  const {
    data,
    isLoading,
  } = useQuery({
    queryKey: ["admin-activity"],
    queryFn: () =>
      adminUserService.activity(),
  });

  const activities =
    data?.activities ||
    data?.data ||
    [];

  const columns = [
    {
      title: "User",
      key: "user",
      render: (_, item) =>
        item.user?.name ||
        item.user_name ||
        "Unknown",
    },

    {
      title: "Action",
      dataIndex: "action",
      render: (value) => (
        <Tag color="orange">
          {value}
        </Tag>
      ),
    },

    {
      title: "Product",
      key: "product",
      render: (_, item) =>
        item.product?.name ||
        item.product_name ||
        "-",
    },

    {
      title: "Date",
      dataIndex: "createdAt",
      render: (value) =>
        value
          ? new Date(
              value
            ).toLocaleString()
          : "-",
    },
  ];

  return (
    <Card
      title="Customer Activity"
      className="rounded-2xl"
    >
      {isLoading ? (
        <div className="flex justify-center py-12">
          <Spin />
        </div>
      ) : !activities.length ? (
        <Empty description="No activity found" />
      ) : (
        <div className="overflow-x-auto">
          <Table
            rowKey={(record) =>
              record.id ||
              record._id
            }
            columns={columns}
            dataSource={activities}
            pagination={{
              pageSize: 15,
            }}
          />
        </div>
      )}
    </Card>
  );
}