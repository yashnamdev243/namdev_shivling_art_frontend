// import { Button, Card, Modal, Rate, Space, Table, Tag, message } from "antd";

// import {
//   CheckOutlined,
//   DeleteOutlined,
//   CloseOutlined,
//   StarOutlined,
// } from "@ant-design/icons";

// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// import adminReviewService from "../../../services/adminReviewService";

// export default function ReviewList() {
//   const queryClient = useQueryClient();

//   const { data, isLoading } = useQuery({
//     queryKey: ["admin-reviews"],
//     queryFn: () => adminReviewService.list(),
//   });

//   const reviews = data?.reviews || data?.data || [];

//   const statusMutation = useMutation({
//     mutationFn: ({ id, status }) => adminReviewService.updateStatus(id, status),

//     onSuccess: () => {
//       message.success("Review status updated");

//       queryClient.invalidateQueries({
//         queryKey: ["admin-reviews"],
//       });
//     },

//     onError: (error) => {
//       message.error(
//         error?.response?.data?.message || "Unable to update review",
//       );
//     },
//   });

//   const featureMutation = useMutation({
//     mutationFn: (id) => adminReviewService.feature(id),
//     onSuccess: (response) => {
//       message.success(response?.message || "Testimonial status updated.");
//       queryClient.invalidateQueries({ queryKey: ["admin-reviews"] });
//     },
//     onError: (error) =>
//       message.error(error?.message || "Unable to feature review."),
//   });

//   const deleteMutation = useMutation({
//     mutationFn: (id) => adminReviewService.remove(id),

//     onSuccess: () => {
//       message.success("Review deleted");

//       queryClient.invalidateQueries({
//         queryKey: ["admin-reviews"],
//       });
//     },
//   });

//   const confirmDelete = (id) => {
//     Modal.confirm({
//       title: "Delete this review?",
//       content: "This action cannot be undone.",
//       okText: "Delete",
//       okType: "danger",

//       onOk: () => deleteMutation.mutateAsync(id),
//     });
//   };

//   const columns = [
//     {
//       title: "Customer",
//       key: "customer",
//       render: (_, review) => (
//         <div>
//           <p className="font-semibold">
//             {review.user?.name || review.user_name || "Customer"}
//           </p>

//           <p className="text-xs text-gray-500">
//             {review.user?.email || review.user_email || "-"}
//           </p>
//         </div>
//       ),
//     },

//     {
//       title: "Product",
//       key: "product",
//       render: (_, review) => review.product?.name || review.product_name || "-",
//     },

//     {
//       title: "Rating",
//       dataIndex: "rating",
//       render: (value) => <Rate disabled value={Number(value)} />,
//     },

//     {
//       title: "Comment",
//       dataIndex: "comment",
//       render: (value) => <div className="max-w-md">{value}</div>,
//     },

//     {
//       title: "Status",
//       dataIndex: "status",
//       render: (status) => {
//         const color =
//           status === "approved"
//             ? "green"
//             : status === "rejected"
//               ? "red"
//               : "orange";

//         return <Tag color={color}>{status}</Tag>;
//       },
//     },

//     {
//       title: "Actions",
//       key: "actions",

//       render: (_, review) => (
//         <Space wrap>
//           <Button
//             type="defalut"
//             icon={<CheckOutlined />}
//             size="small"
//             disabled={review.status === "approved"}
//             loading={statusMutation.isPending}
//             onClick={() =>
//               statusMutation.mutate({
//                 id: review.id || review._id,
//                 status: "approved",
//               })
//             }
//             className="!text-white !bg-green-700"
//           >
//             Approve
//           </Button>

//           <Button
//             danger
//             icon={<CloseOutlined />}
//             size="small"
//             disabled={review.status === "rejected"}
//             onClick={() =>
//               statusMutation.mutate({
//                 id: review.id || review._id,
//                 status: "rejected",
//               })
//             }
//           >
//             Reject
//           </Button>

//           <Button
//             icon={<StarOutlined />}
//             size="small"
//             disabled={review.status !== "approved"}
//             onClick={() => featureMutation.mutate(review.id || review._id)}
//           >
//             {review.is_featured ? "Unfeature" : "Feature"}
//           </Button>

//           <Button
//             danger
//             type="text"
//             icon={<DeleteOutlined />}
//             onClick={() => confirmDelete(review.id || review._id)}
//           />
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <Card title="Product Reviews" className="rounded-2xl">
//       <div className="overflow-x-auto">
//         <Table
//           loading={isLoading}
//           rowKey={(record) => record.id || record._id}
//           columns={columns}
//           dataSource={reviews}
//           pagination={{
//             pageSize: 10,
//           }}
//         />
//       </div>
//     </Card>
//   );
// }





import { useMemo, useState } from "react";
import { Avatar, Button, Modal, Rate, Select, Space, Tag, message } from "antd";
import { CheckOutlined, CloseOutlined, DeleteOutlined, MessageOutlined, StarOutlined, UserOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AdminDataTable from "../../../components/admin/AdminDataTable";
import adminReviewService from "../../../services/adminReviewService";

const STATUS_COLOR = { approved: "green", rejected: "red", pending: "orange" };

export default function ReviewList() {
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["admin-reviews", status, search],
    queryFn: () => adminReviewService.list({ status: status || undefined, search: search || undefined }),
  });

  const reviews = data?.reviews || [];

  const invalidate = () => queryClient.invalidateQueries({ queryKey: ["admin-reviews"] });

  const statusMutation = useMutation({
    mutationFn: ({ id, status }) => adminReviewService.updateStatus(id, status),
    onSuccess: () => { message.success("Review status updated."); invalidate(); },
    onError: (e) => message.error(e?.response?.data?.message || "Unable to update review."),
  });

  const featureMutation = useMutation({
    mutationFn: (id) => adminReviewService.feature(id),
    onSuccess: (res) => { message.success(res?.message || "Testimonial status updated."); invalidate(); },
    onError: (e) => message.error(e?.message || "Unable to feature review."),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => adminReviewService.remove(id),
    onSuccess: () => { message.success("Review deleted."); invalidate(); },
    onError: (e) => message.error(e?.message || "Unable to delete review."),
  });

  const confirmDelete = (id) => {
    Modal.confirm({
      title: "Delete this review?",
      content: "This action cannot be undone.",
      okText: "Delete",
      okType: "danger",
      onOk: () => deleteMutation.mutateAsync(id),
    });
  };

  const columns = useMemo(
    () => [
      {
        title: "Customer",
        key: "customer",
        render: (_, r) => (
          <div className="flex items-center gap-3">
            <Avatar src={r.user?.avatar || undefined} icon={<UserOutlined />} />
            <div className="min-w-0">
              <p className="truncate font-semibold text-slate-900">{r.user?.name || "Customer"}</p>
              <p className="truncate text-xs text-gray-500">{r.user?.email || "-"}</p>
            </div>
          </div>
        ),
      },
      { title: "Product", key: "product", render: (_, r) => r.product?.name || "-" },
      { title: "Rating", dataIndex: "rating", render: (v) => <Rate disabled value={Number(v)} className="!text-sm" /> },
      { title: "Comment", dataIndex: "comment", render: (v) => <div className="max-w-xs truncate" title={v}>{v}</div> },
      {
        title: "Status",
        dataIndex: "status",
        render: (v) => <Tag color={STATUS_COLOR[v] || "default"}>{v}</Tag>,
      },
      {
        title: "Actions",
        key: "actions",
        fixed: "right",
        render: (_, review) => {
          const id = review.id || review._id;
          return (
            <Space wrap>
              <Button
                icon={<CheckOutlined />}
                size="small"
                disabled={review.status === "approved"}
                loading={statusMutation.isPending}
                onClick={() => statusMutation.mutate({ id, status: "approved" })}
                className="!border-green-500 !text-green-600"
              >
                Approve
              </Button>
              <Button
                danger
                icon={<CloseOutlined />}
                size="small"
                disabled={review.status === "rejected"}
                onClick={() => statusMutation.mutate({ id, status: "rejected" })}
              >
                Reject
              </Button>
              <Button
                icon={<StarOutlined />}
                size="small"
                disabled={review.status !== "approved"}
                onClick={() => featureMutation.mutate(id)}
              >
                {review.is_featured ? "Unfeature" : "Feature"}
              </Button>
              <Button danger type="text" icon={<DeleteOutlined />} onClick={() => confirmDelete(id)} />
            </Space>
          );
        },
      },
    ],
    [statusMutation.isPending]
  );

  return (
    <AdminDataTable
      title="Product Reviews"
      icon={<MessageOutlined />}
      subtitle="Approve, reject, feature or remove customer reviews."
      columns={columns}
      dataSource={reviews}
      loading={isLoading}
      rowKey={(r) => r.id || r._id}
      emptyText="No reviews found."
      searchValue={search}
      onSearchChange={setSearch}
      searchPlaceholder="Search by customer or product"
      scrollX={950}
      extra={
        <Select
          allowClear
          placeholder="Filter status"
          value={status || undefined}
          onChange={(v) => setStatus(v || "")}
          className="!w-40"
          options={[
            { value: "pending", label: "Pending" },
            { value: "approved", label: "Approved" },
            { value: "rejected", label: "Rejected" },
          ]}
        />
      }
    />
  );
}
