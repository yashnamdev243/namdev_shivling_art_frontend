import {
  Button,
  Card,
  Modal,
  Rate,
  Space,
  Table,
  Tag,
  message,
} from "antd";

import {
  CheckOutlined,
  DeleteOutlined,
  CloseOutlined,
  StarOutlined,
} from "@ant-design/icons";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import adminReviewService from "../../../services/adminReviewService";

export default function ReviewList() {
  const queryClient =
    useQueryClient();

  const {
    data,
    isLoading,
  } = useQuery({
    queryKey: ["admin-reviews"],
    queryFn: () =>
      adminReviewService.list(),
  });

  const reviews =
    data?.reviews ||
    data?.data ||
    [];

  const statusMutation =
    useMutation({
      mutationFn: ({
        id,
        status,
      }) =>
        adminReviewService.updateStatus(
          id,
          status
        ),

      onSuccess: () => {
        message.success(
          "Review status updated"
        );

        queryClient.invalidateQueries({
          queryKey: ["admin-reviews"],
        });
      },

      onError: (error) => {
        message.error(
          error?.response?.data?.message ||
            "Unable to update review"
        );
      },
    });

  const featureMutation = useMutation({
    mutationFn: (id) => adminReviewService.feature(id),
    onSuccess: (response) => {
      message.success(response?.message || "Testimonial status updated.");
      queryClient.invalidateQueries({ queryKey: ["admin-reviews"] });
    },
    onError: (error) => message.error(error?.message || "Unable to feature review."),
  });

  const deleteMutation =
    useMutation({
      mutationFn: (id) =>
        adminReviewService.remove(id),

      onSuccess: () => {
        message.success(
          "Review deleted"
        );

        queryClient.invalidateQueries({
          queryKey: ["admin-reviews"],
        });
      },
    });

  const confirmDelete = (id) => {
    Modal.confirm({
      title: "Delete this review?",
      content:
        "This action cannot be undone.",
      okText: "Delete",
      okType: "danger",

      onOk: () =>
        deleteMutation.mutateAsync(id),
    });
  };

  const columns = [
    {
      title: "Customer",
      key: "customer",
      render: (_, review) => (
        <div>
          <p className="font-semibold">
            {review.user?.name ||
              review.user_name ||
              "Customer"}
          </p>

          <p className="text-xs text-gray-500">
            {review.user?.email ||
              review.user_email ||
              "-"}
          </p>
        </div>
      ),
    },

    {
      title: "Product",
      key: "product",
      render: (_, review) =>
        review.product?.name ||
        review.product_name ||
        "-",
    },

    {
      title: "Rating",
      dataIndex: "rating",
      render: (value) => (
        <Rate
          disabled
          value={Number(value)}
        />
      ),
    },

    {
      title: "Comment",
      dataIndex: "comment",
      render: (value) => (
        <div className="max-w-md">
          {value}
        </div>
      ),
    },

    {
      title: "Status",
      dataIndex: "status",
      render: (status) => {
        const color =
          status === "approved"
            ? "green"
            : status === "rejected"
              ? "red"
              : "orange";

        return (
          <Tag color={color}>
            {status}
          </Tag>
        );
      },
    },

    {
      title: "Actions",
      key: "actions",

      render: (_, review) => (
        <Space wrap>
          <Button
            type="primary"
            icon={<CheckOutlined />}
            size="small"
            disabled={
              review.status === "approved"
            }
            loading={
              statusMutation.isPending
            }
            onClick={() =>
              statusMutation.mutate({
                id:
                  review.id ||
                  review._id,
                status: "approved",
              })
            }
          >
            Approve
          </Button>

          <Button
            danger
            icon={<CloseOutlined />}
            size="small"
            disabled={
              review.status === "rejected"
            }
            onClick={() =>
              statusMutation.mutate({
                id:
                  review.id ||
                  review._id,
                status: "rejected",
              })
            }
          >
            Reject
          </Button>

          <Button
            icon={<StarOutlined />}
            size="small"
            disabled={review.status !== "approved"}
            onClick={() => featureMutation.mutate(review.id || review._id)}
          >
            {review.is_featured ? "Unfeature" : "Feature"}
          </Button>

          <Button
            danger
            type="text"
            icon={<DeleteOutlined />}
            onClick={() =>
              confirmDelete(
                review.id ||
                  review._id
              )
            }
          />
        </Space>
      ),
    },
  ];

  return (
    <Card
      title="Product Reviews"
      className="rounded-2xl"
    >
      <div className="overflow-x-auto">
        <Table
          loading={isLoading}
          rowKey={(record) =>
            record.id ||
            record._id
          }
          columns={columns}
          dataSource={reviews}
          pagination={{
            pageSize: 10,
          }}
        />
      </div>
    </Card>
  );
}