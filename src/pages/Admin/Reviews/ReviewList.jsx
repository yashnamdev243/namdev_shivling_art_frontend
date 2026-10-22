// import { useMemo, useState } from "react";
// import { Avatar, Button, Modal, Rate, Select, Space, Tag, message } from "antd";
// import { CheckOutlined, CloseOutlined, DeleteOutlined, MessageOutlined, StarOutlined, UserOutlined } from "@ant-design/icons";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import AdminDataTable from "../../../components/admin/AdminDataTable";
// import adminReviewService from "../../../services/adminReviewService";

// const STATUS_COLOR = { approved: "green", rejected: "red", pending: "orange" };

// export default function ReviewList() {
//   const [status, setStatus] = useState("");
//   const [search, setSearch] = useState("");
//   const queryClient = useQueryClient();

//   const { data, isLoading } = useQuery({
//     queryKey: ["admin-reviews", status, search],
//     queryFn: () => adminReviewService.list({ status: status || undefined, search: search || undefined }),
//   });

//   const reviews = data?.reviews || [];

//   const invalidate = () => queryClient.invalidateQueries({ queryKey: ["admin-reviews"] });

//   const statusMutation = useMutation({
//     mutationFn: ({ id, status }) => adminReviewService.updateStatus(id, status),
//     onSuccess: () => { message.success("Review status updated."); invalidate(); },
//     onError: (e) => message.error(e?.response?.data?.message || "Unable to update review."),
//   });

//   const featureMutation = useMutation({
//     mutationFn: (id) => adminReviewService.feature(id),
//     onSuccess: (res) => { message.success(res?.message || "Testimonial status updated."); invalidate(); },
//     onError: (e) => message.error(e?.message || "Unable to feature review."),
//   });

//   const deleteMutation = useMutation({
//     mutationFn: (id) => adminReviewService.remove(id),
//     onSuccess: () => { message.success("Review deleted."); invalidate(); },
//     onError: (e) => message.error(e?.message || "Unable to delete review."),
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

//   const columns = useMemo(
//     () => [
//       {
//         title: "Customer",
//         key: "customer",
//         render: (_, r) => (
//           <div className="flex items-center gap-3">
//             <Avatar src={r.user?.avatar || undefined} icon={<UserOutlined />} />
//             <div className="min-w-0">
//               <p className="truncate font-semibold text-slate-900">{r.user?.name || "Customer"}</p>
//               <p className="truncate text-xs text-gray-500">{r.user?.email || "-"}</p>
//             </div>
//           </div>
//         ),
//       },
//       { title: "Product", key: "product", render: (_, r) => r.product?.name || "-" },
//       { title: "Rating", dataIndex: "rating", render: (v) => <Rate disabled value={Number(v)} className="!text-sm" /> },
//       { title: "Comment", dataIndex: "comment", render: (v) => <div className="max-w-xs truncate" title={v}>{v}</div> },
//       {
//         title: "Status",
//         dataIndex: "status",
//         render: (v) => <Tag color={STATUS_COLOR[v] || "default"}>{v}</Tag>,
//       },
//       {
//         title: "Actions",
//         key: "actions",
//         fixed: "right",
//         render: (_, review) => {
//           const id = review.id || review._id;
//           return (
//             <Space wrap>
//               <Button
//                 icon={<CheckOutlined />}
//                 size="small"
//                 disabled={review.status === "approved"}
//                 loading={statusMutation.isPending}
//                 onClick={() => statusMutation.mutate({ id, status: "approved" })}
//                 className="!border-green-500 !text-green-600"
//               >
//                 Approve
//               </Button>
//               <Button
//                 danger
//                 icon={<CloseOutlined />}
//                 size="small"
//                 disabled={review.status === "rejected"}
//                 onClick={() => statusMutation.mutate({ id, status: "rejected" })}
//               >
//                 Reject
//               </Button>
//               <Button
//                 icon={<StarOutlined />}
//                 size="small"
//                 disabled={review.status !== "approved"}
//                 onClick={() => featureMutation.mutate(id)}
//               >
//                 {review.is_featured ? "Unfeature" : "Feature"}
//               </Button>
//               <Button danger type="text" icon={<DeleteOutlined />} onClick={() => confirmDelete(id)} />
//             </Space>
//           );
//         },
//       },
//     ],
//     [statusMutation.isPending]
//   );

//   return (
//     <AdminDataTable
//       title="Product Reviews"
//       icon={<MessageOutlined />}
//       subtitle="Approve, reject, feature or remove customer reviews."
//       columns={columns}
//       dataSource={reviews}
//       loading={isLoading}
//       rowKey={(r) => r.id || r._id}
//       emptyText="No reviews found."
//       searchValue={search}
//       onSearchChange={setSearch}
//       searchPlaceholder="Search by customer or product"
//       scrollX={950}
//       extra={
//         <Select
//           allowClear
//           placeholder="Filter status"
//           value={status || undefined}
//           onChange={(v) => setStatus(v || "")}
//           className="!w-40"
//           options={[
//             { value: "pending", label: "Pending" },
//             { value: "approved", label: "Approved" },
//             { value: "rejected", label: "Rejected" },
//           ]}
//         />
//       }
//     />
//   );
// }



import { useMemo, useState } from "react";
import { Avatar, Button, Modal, Rate, Select, Space, Tag, message } from "antd";
import { CheckOutlined, CloseOutlined, DeleteOutlined, MessageOutlined, StarOutlined, UserOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AdminDataTable from "../../../components/admin/AdminDataTable";
import adminReviewService from "../../../services/adminReviewService";

const STATUS_STYLE = {
  approved: "!border-emerald-700/20 !bg-emerald-50 !text-emerald-700",
  rejected: "!border-[#9B4444]/20 !bg-[#9B4444]/[0.06] !text-[#9B4444]",
  pending: "!border-[#D4AF6A]/30 !bg-[#A8823C]/[0.08] !text-[#8A6B2E]",
};

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
              <p className="truncate font-semibold text-[#1C1A17]">{r.user?.name || "Customer"}</p>
              <p className="truncate text-xs text-[#8A8377]">{r.user?.email || "-"}</p>
            </div>
          </div>
        ),
      },
      { title: "Product", key: "product", render: (_, r) => r.product?.name || "-" },
      {
        title: "Rating",
        dataIndex: "rating",
        render: (v) => (
          <Rate
            disabled
            value={Number(v)}
            className="!text-sm [&_.ant-rate-star-full_svg]:!fill-[#A8823C]"
          />
        ),
      },
      { title: "Comment", dataIndex: "comment", render: (v) => <div className="max-w-xs truncate text-[#4A453D]" title={v}>{v}</div> },
      {
        title: "Status",
        dataIndex: "status",
        render: (v) => <Tag className={STATUS_STYLE[v] || "!border-[#1C1A17]/10 !bg-[#F5F1E8] !text-[#6B6459]"}>{v}</Tag>,
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
                className="!flex !items-center !rounded-lg !border-emerald-700/30 !text-emerald-700"
              >
                Approve
              </Button>
              <Button
                danger
                icon={<CloseOutlined />}
                size="small"
                disabled={review.status === "rejected"}
                onClick={() => statusMutation.mutate({ id, status: "rejected" })}
                className="!flex !items-center !rounded-lg"
              >
                Reject
              </Button>
              <Button
                icon={<StarOutlined />}
                size="small"
                disabled={review.status !== "approved"}
                onClick={() => featureMutation.mutate(id)}
                className="!flex !items-center !rounded-lg !border-[#D4AF6A]/40 !text-[#A8823C]"
              >
                {review.is_featured ? "Unfeature" : "Feature"}
              </Button>
              <Button danger type="text" icon={<DeleteOutlined />} onClick={() => confirmDelete(id)} className="!rounded-lg" />
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