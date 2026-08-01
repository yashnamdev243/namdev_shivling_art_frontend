import { useState } from "react";
import { Table, Avatar, Tag } from "antd";
import { useQuery } from "@tanstack/react-query";
import { UserOutlined } from "@ant-design/icons";

import Seo from "../../../components/common/Seo";
import AdminHeader from "../../../components/admin/AdminHeader";
import adminUserService from "../../../services/adminUserService";
import { getFileUrl } from "../../../utils/fileUrl";

const ACTION_COLORS = {
  login: "green",
  logout: "default",
  add_to_cart: "orange",
  add_to_wishlist: "magenta",
  checkout: "blue",
};

const ACTION_LABELS = {
  login: "Signed in",
  logout: "Signed out",
  add_to_cart: "Added to cart",
  add_to_wishlist: "Added to wishlist",
  checkout: "Placed an order",
};

export default function UserActivity() {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const { data: usersData, isLoading: usersLoading } = useQuery({
    queryKey: ["admin-users"],
    queryFn: adminUserService.listUsers,
  });

  const { data: activityData, isLoading: activityLoading } = useQuery({
    queryKey: ["admin-activity", selectedUserId],
    queryFn: () => adminUserService.activity(selectedUserId),
  });

  const users = usersData?.users || [];
  const logs = activityData?.logs || [];

  const userColumns = [
    {
      title: "Customer",
      render: (_, record) => (
        <button
          onClick={() => setSelectedUserId(record.id)}
          className={`flex items-center gap-3 rounded-lg px-2 py-1 text-left transition hover:bg-orange-50 ${
            selectedUserId === record.id ? "bg-orange-50" : ""
          }`}
        >
          <Avatar src={record.avatar ? getFileUrl(record.avatar) : undefined} icon={<UserOutlined />} />
          <div className="min-w-0">
            <p className="truncate font-medium text-stone-800">{record.name}</p>
            <p className="truncate text-xs text-gray-500">{record.email}</p>
          </div>
        </button>
      ),
    },
    {
      title: "Last Login",
      dataIndex: "lastLoginAt",
      render: (date) => (date ? new Date(date).toLocaleString() : "—"),
    },
    {
      title: "Joined",
      dataIndex: "createdAt",
      render: (date) => new Date(date).toLocaleDateString(),
    },
  ];

  const activityColumns = [
    {
      title: "Customer",
      dataIndex: "User",
      render: (user) => (
        <div>
          <p className="font-medium text-stone-800">{user?.name || "Unknown"}</p>
          <p className="text-xs text-gray-500">{user?.email}</p>
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (action) => <Tag color={ACTION_COLORS[action] || "default"}>{ACTION_LABELS[action] || action}</Tag>,
    },
    {
      title: "When",
      dataIndex: "createdAt",
      render: (date) => new Date(date).toLocaleString(),
    },
  ];

  return (
    <>
      <Seo title="Customers & Activity" />

      <AdminHeader
        title="Customers"
        description="Everyone who has signed in with Google, and what they've been doing."
      />

      <div className="grid gap-6 lg:grid-cols-[380px,1fr]">
        <div className="overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-card">
          <Table
            rowKey="id"
            columns={userColumns}
            dataSource={users}
            loading={usersLoading}
            pagination={{ pageSize: 8 }}
            size="small"
          />
        </div>

        <div className="overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-card">
          <div className="flex items-center justify-between border-b border-stone-100 px-5 py-3">
            <h3 className="font-semibold text-stone-800">
              {selectedUserId ? "Activity for selected customer" : "All recent activity"}
            </h3>
            {selectedUserId && (
              <button
                onClick={() => setSelectedUserId(null)}
                className="text-xs font-medium text-orange-600 hover:text-orange-700"
              >
                Clear filter
              </button>
            )}
          </div>
          <Table
            rowKey="id"
            columns={activityColumns}
            dataSource={logs}
            loading={activityLoading}
            pagination={{ pageSize: 10 }}
            size="small"
          />
        </div>
      </div>
    </>
  );
}