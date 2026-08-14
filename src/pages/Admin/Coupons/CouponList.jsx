// import { useState } from "react";
// import { Button, Card, Form, Input, InputNumber, Modal, Select, Switch, Table, Tag, DatePicker, Space, message } from "antd";
// import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import dayjs from "dayjs";
// import couponService from "../../../services/couponService";
// import productService from "../../../services/productService";

// export default function CouponList() {
//   const [open, setOpen] = useState(false);
//   const [form] = Form.useForm();
//   const queryClient = useQueryClient();

//   const { data, isLoading } = useQuery({ queryKey: ["admin-coupons"], queryFn: couponService.adminList });
//   const { data: productsData } = useQuery({ queryKey: ["admin-products-for-coupons"], queryFn: () => productService.getAll({ page: 1, limit: 100 }) });
//   const { data: redemptionData } = useQuery({ queryKey: ["admin-coupon-redemptions"], queryFn: couponService.adminRedemptions });

//   const createMutation = useMutation({
//     mutationFn: (values) => couponService.adminCreate({
//       ...values,
//       starts_at: values.starts_at?.toISOString() || null,
//       expires_at: values.expires_at?.toISOString() || null,
//       product_ids: values.product_ids || [],
//     }),
//     onSuccess: () => { message.success("Coupon created."); setOpen(false); form.resetFields(); queryClient.invalidateQueries({ queryKey: ["admin-coupons"] }); },
//     onError: (e) => message.error(e?.message || "Unable to create coupon."),
//   });

//   const deleteMutation = useMutation({
//     mutationFn: couponService.adminDelete,
//     onSuccess: () => { message.success("Coupon deleted."); queryClient.invalidateQueries({ queryKey: ["admin-coupons"] }); },
//     onError: (e) => message.error(e?.message || "Unable to delete coupon."),
//   });

//   const coupons = data?.coupons || [];
//   const products = productsData?.products || [];
//   const redemptions = redemptionData?.redemptions || [];

//   const columns = [
//     { title: "Code", dataIndex: "code", render: (v) => <Tag color="orange">{v}</Tag> },
//     { title: "Offer", render: (_, r) => r.discount_type === "percentage" ? `${r.discount_value}% off` : `₹${r.discount_value} off` },
//     { title: "Minimum", dataIndex: "min_order_amount", render: (v) => `₹${Number(v || 0).toLocaleString("en-IN")}` },
//     { title: "Validity", render: (_, r) => `${r.starts_at ? new Date(r.starts_at).toLocaleDateString("en-IN") : "Now"} – ${r.expires_at ? new Date(r.expires_at).toLocaleDateString("en-IN") : "No expiry"}` },
//     { title: "Active", dataIndex: "is_active", render: (v) => <Tag color={v ? "green" : "default"}>{v ? "Active" : "Off"}</Tag> },
//     { title: "Delete", render: (_, r) => <Button danger icon={<DeleteOutlined />} onClick={() => deleteMutation.mutate(r.id)} /> },
//   ];

//   const redemptionColumns = [
//     { title: "Code", render: (_, r) => r.coupon?.code },
//     { title: "Customer", render: (_, r) => <div><b>{r.user?.name}</b><div className="text-xs">{r.user?.email}</div></div> },
//     { title: "Order", dataIndex: "order_reference" },
//     { title: "Discount", dataIndex: "discount_amount", render: (v) => `₹${Number(v || 0).toLocaleString("en-IN")}` },
//     { title: "Used", dataIndex: "createdAt", render: (v) => new Date(v).toLocaleString("en-IN") },
//   ];

//   return (
//     <div className="space-y-6">
//       <Card title="Coupons & Festival Offers" extra={<Button type="primary" icon={<PlusOutlined />} onClick={() => setOpen(true)}>Create Coupon</Button>} className="rounded-2xl">
//         <p className="mb-4 text-sm text-gray-500">Create WhatsApp/social-media codes, target every product or selected products, set limits and expiry, and track redemption.</p>
//         <div className="overflow-x-auto"><Table rowKey="id" loading={isLoading} columns={columns} dataSource={coupons} pagination={{ pageSize: 10 }} /></div>
//       </Card>

//       <Card title="Coupon Usage Tracking" className="rounded-2xl">
//         <Table rowKey="id" columns={redemptionColumns} dataSource={redemptions} pagination={{ pageSize: 10 }} />
//       </Card>

//       <Modal open={open} title="Create Coupon / Festival Offer" footer={null} onCancel={() => setOpen(false)} destroyOnClose width={720}>
//         <Form form={form} layout="vertical" onFinish={(v) => createMutation.mutate(v)} initialValues={{ discount_type: "percentage", per_user_limit: 1, min_order_amount: 0, is_active: true, applies_to_all: true }}>
//           <div className="grid gap-4 sm:grid-cols-2">
//             <Form.Item name="code" label="Coupon code" rules={[{ required: true }]}><Input placeholder="MAHASHIVRATRI20" /></Form.Item>
//             <Form.Item name="title" label="Offer title"><Input placeholder="Festival special offer" /></Form.Item>
//             <Form.Item name="discount_type" label="Discount type"><Select options={[{ value: "percentage", label: "Percentage" }, { value: "fixed", label: "Fixed amount" }]} /></Form.Item>
//             <Form.Item name="discount_value" label="Discount value" rules={[{ required: true }]}><InputNumber className="!w-full" min={0.01} /></Form.Item>
//             <Form.Item name="max_discount" label="Max discount (optional)"><InputNumber className="!w-full" min={0} /></Form.Item>
//             <Form.Item name="min_order_amount" label="Minimum order"><InputNumber className="!w-full" min={0} /></Form.Item>
//             <Form.Item name="usage_limit" label="Total usage limit"><InputNumber className="!w-full" min={1} /></Form.Item>
//             <Form.Item name="per_user_limit" label="Per customer limit"><InputNumber className="!w-full" min={1} /></Form.Item>
//             <Form.Item name="festival_name" label="Festival name"><Input placeholder="Mahashivratri" /></Form.Item>
//             <Form.Item name="starts_at" label="Starts"><DatePicker showTime className="!w-full" /></Form.Item>
//             <Form.Item name="expires_at" label="Expires"><DatePicker showTime className="!w-full" /></Form.Item>
//           </div>
//           <Form.Item name="applies_to_all" label="Apply to all products" valuePropName="checked"><Switch /></Form.Item>
//           <Form.Item noStyle shouldUpdate={(prev, cur) => prev.applies_to_all !== cur.applies_to_all}>
//             {({ getFieldValue }) => !getFieldValue("applies_to_all") ? (
//               <Form.Item name="product_ids" label="Products" rules={[{ required: true, message: "Select at least one product." }]}>
//                 <Select mode="multiple" placeholder="Select products" options={products.map(p => ({ value: p.id, label: p.name }))} />
//               </Form.Item>
//             ) : null}
//           </Form.Item>
//           <Space className="w-full justify-end">
//             <Button onClick={() => setOpen(false)}>Cancel</Button>
//             <Button type="primary" htmlType="submit" loading={createMutation.isPending}>Create Coupon</Button>
//           </Space>
//         </Form>
//       </Modal>
//     </div>
//   );
// }




import { useState } from "react";

import {
  Button,
  Card,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Switch,
  Table,
  Tag,
  DatePicker,
  Space,
  message,
  Popconfirm,
  Empty,
} from "antd";

import {
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
  InfoCircleOutlined,
  CopyOutlined,
} from "@ant-design/icons";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import dayjs from "dayjs";

import couponService from "../../../services/couponService";
import productService from "../../../services/productService";

export default function CouponList() {
  const [open, setOpen] = useState(false);
  const [editingCoupon, setEditingCoupon] = useState(null);

  const [form] = Form.useForm();
  const queryClient = useQueryClient();

  /* =========================
     COUPONS
  ========================= */

  const {
    data,
    isLoading,
  } = useQuery({
    queryKey: ["admin-coupons"],
    queryFn: couponService.adminList,
  });

  /* =========================
     PRODUCTS
  ========================= */

  const {
    data: productsData,
    isLoading: productsLoading,
  } = useQuery({
    queryKey: ["admin-products-for-coupons"],
    queryFn: () =>
      productService.getAll({
        page: 1,
        limit: 100,
      }),
  });

  /* =========================
     REDEMPTIONS
  ========================= */

  const {
    data: redemptionData,
    isLoading: redemptionLoading,
  } = useQuery({
    queryKey: ["admin-coupon-redemptions"],
    queryFn: couponService.adminRedemptions,
  });

  /* =========================
     NORMALIZE DATA
  ========================= */

  const coupons =
    data?.coupons ||
    data?.data ||
    [];

  const products =
    productsData?.products ||
    productsData?.data ||
    [];

  const redemptions =
    redemptionData?.redemptions ||
    redemptionData?.data ||
    [];

  /* =========================
     CREATE
  ========================= */

  const createMutation = useMutation({
    mutationFn: (values) =>
      couponService.adminCreate(
        normalizePayload(values)
      ),

    onSuccess: () => {
      message.success("Coupon created successfully.");

      closeModal();

      queryClient.invalidateQueries({
        queryKey: ["admin-coupons"],
      });
    },

    onError: (error) => {
      message.error(
        error?.response?.data?.message ||
          error?.message ||
          "Unable to create coupon."
      );
    },
  });

  /* =========================
     UPDATE
  ========================= */

  const updateMutation = useMutation({
    mutationFn: ({ id, values }) =>
      couponService.adminUpdate(
        id,
        normalizePayload(values)
      ),

    onSuccess: () => {
      message.success("Coupon updated successfully.");

      closeModal();

      queryClient.invalidateQueries({
        queryKey: ["admin-coupons"],
      });
    },

    onError: (error) => {
      message.error(
        error?.response?.data?.message ||
          error?.message ||
          "Unable to update coupon."
      );
    },
  });

  /* =========================
     DELETE
  ========================= */

  const deleteMutation = useMutation({
    mutationFn: couponService.adminDelete,

    onSuccess: () => {
      message.success("Coupon deleted successfully.");

      queryClient.invalidateQueries({
        queryKey: ["admin-coupons"],
      });
    },

    onError: (error) => {
      message.error(
        error?.response?.data?.message ||
          error?.message ||
          "Unable to delete coupon."
      );
    },
  });

  /* =========================
     HELPERS
  ========================= */

  function normalizePayload(values) {
    return {
      code: values.code?.trim().toUpperCase(),

      title:
        values.title?.trim() || null,

      discount_type:
        values.discount_type,

      discount_value:
        Number(values.discount_value || 0),

      max_discount:
        values.max_discount !== undefined &&
        values.max_discount !== null &&
        values.max_discount !== ""
          ? Number(values.max_discount)
          : null,

      min_order_amount:
        Number(values.min_order_amount || 0),

      usage_limit:
        values.usage_limit
          ? Number(values.usage_limit)
          : null,

      per_user_limit:
        Number(values.per_user_limit || 1),

      festival_name:
        values.festival_name?.trim() || null,

      starts_at:
        values.starts_at
          ? values.starts_at.toISOString()
          : null,

      expires_at:
        values.expires_at
          ? values.expires_at.toISOString()
          : null,

      is_active:
        Boolean(values.is_active),

      applies_to_all:
        Boolean(values.applies_to_all),

      product_ids:
        values.applies_to_all
          ? []
          : values.product_ids || [],
    };
  }

  function openCreateModal() {
    setEditingCoupon(null);

    form.resetFields();

    form.setFieldsValue({
      discount_type: "percentage",
      per_user_limit: 1,
      min_order_amount: 0,
      is_active: true,
      applies_to_all: true,
      product_ids: [],
    });

    setOpen(true);
  }

  function openEditModal(coupon) {
    setEditingCoupon(coupon);

    form.setFieldsValue({
      code: coupon.code || "",

      title:
        coupon.title || "",

      discount_type:
        coupon.discount_type || "percentage",

      discount_value:
        Number(coupon.discount_value || 0),

      max_discount:
        coupon.max_discount !== null &&
        coupon.max_discount !== undefined
          ? Number(coupon.max_discount)
          : null,

      min_order_amount:
        Number(coupon.min_order_amount || 0),

      usage_limit:
        coupon.usage_limit
          ? Number(coupon.usage_limit)
          : null,

      per_user_limit:
        Number(coupon.per_user_limit || 1),

      festival_name:
        coupon.festival_name || "",

      starts_at:
        coupon.starts_at
          ? dayjs(coupon.starts_at)
          : null,

      expires_at:
        coupon.expires_at
          ? dayjs(coupon.expires_at)
          : null,

      is_active:
        coupon.is_active !== false,

      applies_to_all:
        coupon.applies_to_all !== false,

      product_ids:
        coupon.product_ids || [],
    });

    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    setEditingCoupon(null);
    form.resetFields();
  }

  function handleSubmit(values) {
    if (editingCoupon) {
      updateMutation.mutate({
        id: editingCoupon.id,
        values,
      });
    } else {
      createMutation.mutate(values);
    }
  }

  function copyCode(code) {
    navigator.clipboard
      ?.writeText(code)
      .then(() => {
        message.success("Coupon code copied.");
      })
      .catch(() => {
        message.error("Unable to copy coupon code.");
      });
  }

  /* =========================
     COUPON TABLE
  ========================= */

  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      render: (value) => (
        <Space>
          <Tag color="orange">
            {value}
          </Tag>

          <Button
            type="text"
            size="small"
            icon={<CopyOutlined />}
            onClick={() => copyCode(value)}
          />
        </Space>
      ),
    },

    {
      title: "Offer",
      key: "offer",
      render: (_, record) => (
        <div>
          <div className="font-semibold">
            {record.discount_type === "percentage"
              ? `${record.discount_value}% OFF`
              : `₹${Number(
                  record.discount_value || 0
                ).toLocaleString("en-IN")} OFF`}
          </div>

          {record.title && (
            <div className="text-xs text-gray-500">
              {record.title}
            </div>
          )}
        </div>
      ),
    },

    {
      title: "Minimum",
      dataIndex: "min_order_amount",
      key: "minimum",
      render: (value) =>
        `₹${Number(
          value || 0
        ).toLocaleString("en-IN")}`,
    },

    {
      title: "Max Discount",
      dataIndex: "max_discount",
      key: "max_discount",
      render: (value) =>
        value
          ? `₹${Number(
              value
            ).toLocaleString("en-IN")}`
          : "No limit",
    },

    {
      title: "Products",
      key: "products",
      render: (_, record) =>
        record.applies_to_all ? (
          <Tag color="blue">
            All Products
          </Tag>
        ) : (
          <Tag color="purple">
            Selected Products
          </Tag>
        ),
    },

    {
      title: "Validity",
      key: "validity",
      render: (_, record) => (
        <div className="text-xs sm:text-sm">
          <div>
            {record.starts_at
              ? dayjs(record.starts_at).format(
                  "DD MMM YYYY, hh:mm A"
                )
              : "Immediately"}
          </div>

          <div className="text-gray-500">
            {record.expires_at
              ? `Until ${dayjs(
                  record.expires_at
                ).format(
                  "DD MMM YYYY, hh:mm A"
                )}`
              : "No expiry"}
          </div>
        </div>
      ),
    },

    {
      title: "Status",
      dataIndex: "is_active",
      key: "status",
      render: (value) => (
        <Tag
          color={value ? "green" : "default"}
        >
          {value ? "Active" : "Inactive"}
        </Tag>
      ),
    },

    {
      title: "Actions",
      key: "actions",
      fixed: "right",
      render: (_, record) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            onClick={() =>
              openEditModal(record)
            }
          >
            Edit
          </Button>

          <Popconfirm
            title="Delete this coupon?"
            description="This action cannot be undone."
            okText="Delete"
            cancelText="Cancel"
            okButtonProps={{
              danger: true,
            }}
            onConfirm={() =>
              deleteMutation.mutate(record.id)
            }
          >
            <Button
              danger
              icon={<DeleteOutlined />}
              loading={
                deleteMutation.isPending &&
                deleteMutation.variables ===
                  record.id
              }
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  /* =========================
     REDEMPTION TABLE
  ========================= */

  const redemptionColumns = [
    {
      title: "Coupon",
      key: "coupon",
      render: (_, record) => (
        <Tag color="orange">
          {record.coupon?.code ||
            record.code ||
            "—"}
        </Tag>
      ),
    },

    {
      title: "Customer",
      key: "customer",
      render: (_, record) => (
        <div>
          <div className="font-semibold">
            {record.user?.name ||
              record.customer?.name ||
              "Customer"}
          </div>

          <div className="text-xs text-gray-500">
            {record.user?.email ||
              record.customer?.email ||
              "—"}
          </div>
        </div>
      ),
    },

    {
      title: "Order",
      dataIndex: "order_reference",
      key: "order",
      render: (value) =>
        value || "—",
    },

    {
      title: "Discount",
      dataIndex: "discount_amount",
      key: "discount",
      render: (value) =>
        `₹${Number(
          value || 0
        ).toLocaleString("en-IN")}`,
    },

    {
      title: "Used",
      key: "used",
      render: (_, record) => {
        const date =
          record.createdAt ||
          record.created_at;

        return date
          ? dayjs(date).format(
              "DD MMM YYYY, hh:mm A"
            )
          : "—";
      },
    },
  ];

  return (
    <div className="space-y-6">

      {/* =========================
          COUPON MANAGEMENT
      ========================= */}

      <Card
        title={
          <div>
            <div className="text-lg font-semibold">
              Coupons & Festival Offers
            </div>

            <div className="text-xs font-normal text-gray-500">
              Manage discount codes and promotional offers.
            </div>
          </div>
        }
        extra={
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={openCreateModal}
          >
            Create Coupon
          </Button>
        }
        className="rounded-2xl"
      >
        <div className="mb-5 rounded-2xl border border-orange-200 bg-orange-50 p-4">
          <div className="flex gap-3">
            <InfoCircleOutlined className="mt-1 text-orange-500" />

            <div>
              <div className="font-semibold text-slate-900">
                Coupon setup guide
              </div>

              <ul className="mt-2 space-y-1 text-xs leading-5 text-gray-600">
                <li>
                  • Percentage discount:
                  <b> 20 </b>
                  means 20% OFF.
                </li>

                <li>
                  • Fixed discount:
                  <b> 500 </b>
                  means ₹500 OFF.
                </li>

                <li>
                  • Minimum order controls
                  coupon eligibility.
                </li>

                <li>
                  • Maximum discount protects
                  against excessive percentage discounts.
                </li>

                <li>
                  • Disable "Apply to all products"
                  to select specific products.
                </li>

                <li>
                  • Set expiry to automatically
                  end a festival offer.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table
            rowKey="id"
            loading={isLoading}
            columns={columns}
            dataSource={coupons}
            scroll={{ x: 1100 }}
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              pageSizeOptions: [
                "10",
                "20",
                "50",
              ],
            }}
          />
        </div>
      </Card>

      {/* =========================
          REDEMPTIONS
      ========================= */}

      <Card
        title={
          <div>
            <div className="text-lg font-semibold">
              Coupon Usage Tracking
            </div>

            <div className="text-xs font-normal text-gray-500">
              See which customers used your coupons.
            </div>
          </div>
        }
        className="rounded-2xl"
      >
        {redemptions.length ? (
          <div className="overflow-x-auto">
            <Table
              rowKey="id"
              loading={redemptionLoading}
              columns={redemptionColumns}
              dataSource={redemptions}
              scroll={{ x: 850 }}
              pagination={{
                pageSize: 10,
              }}
            />
          </div>
        ) : (
          <Empty
            description="No coupon redemptions yet."
          />
        )}
      </Card>

      {/* =========================
          CREATE / EDIT MODAL
      ========================= */}

      <Modal
        open={open}
        title={
          editingCoupon
            ? "Edit Coupon / Festival Offer"
            : "Create Coupon / Festival Offer"
        }
        footer={null}
        onCancel={closeModal}
        destroyOnClose
        width={760}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
        >
          <div className="mb-5 rounded-2xl border border-blue-100 bg-blue-50 p-4">
            <div className="text-sm font-semibold text-blue-900">
              Offer information
            </div>

            <p className="mt-1 text-xs leading-5 text-blue-700">
              Create a promotional code that customers
              can use during checkout.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {/* CODE */}

            <Form.Item
              name="code"
              label="Coupon Code"
              rules={[
                {
                  required: true,
                  message:
                    "Please enter coupon code.",
                },
                {
                  min: 3,
                  message:
                    "Coupon code must contain at least 3 characters.",
                },
              ]}
            >
              <Input
                placeholder="MAHASHIVRATRI20"
                maxLength={30}
                onChange={(e) =>
                  form.setFieldValue(
                    "code",
                    e.target.value.toUpperCase()
                  )
                }
              />
            </Form.Item>

            {/* TITLE */}

            <Form.Item
              name="title"
              label="Offer Title"
            >
              <Input
                placeholder="Mahashivratri Special Offer"
                maxLength={100}
              />
            </Form.Item>

            {/* DISCOUNT TYPE */}

            <Form.Item
              name="discount_type"
              label="Discount Type"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                options={[
                  {
                    value: "percentage",
                    label: "Percentage (%)",
                  },
                  {
                    value: "fixed",
                    label: "Fixed Amount (₹)",
                  },
                ]}
              />
            </Form.Item>

            {/* DISCOUNT VALUE */}

            <Form.Item
              name="discount_value"
              label="Discount Value"
              rules={[
                {
                  required: true,
                  message:
                    "Enter discount value.",
                },
              ]}
            >
              <InputNumber
                className="!w-full"
                min={0.01}
                precision={2}
              />
            </Form.Item>

            {/* MAX DISCOUNT */}

            <Form.Item
              name="max_discount"
              label="Maximum Discount"
              tooltip="Useful for percentage coupons."
            >
              <InputNumber
                className="!w-full"
                min={0}
                precision={2}
                placeholder="Optional"
              />
            </Form.Item>

            {/* MIN ORDER */}

            <Form.Item
              name="min_order_amount"
              label="Minimum Order Amount"
            >
              <InputNumber
                className="!w-full"
                min={0}
                precision={2}
              />
            </Form.Item>

            {/* TOTAL USAGE */}

            <Form.Item
              name="usage_limit"
              label="Total Usage Limit"
              tooltip="Leave empty for unlimited usage."
            >
              <InputNumber
                className="!w-full"
                min={1}
                precision={0}
                placeholder="Unlimited"
              />
            </Form.Item>

            {/* PER USER */}

            <Form.Item
              name="per_user_limit"
              label="Per Customer Limit"
            >
              <InputNumber
                className="!w-full"
                min={1}
                precision={0}
              />
            </Form.Item>

            {/* FESTIVAL */}

            <Form.Item
              name="festival_name"
              label="Festival Name"
            >
              <Input
                placeholder="Mahashivratri"
              />
            </Form.Item>

            {/* START */}

            <Form.Item
              name="starts_at"
              label="Starts At"
            >
              <DatePicker
                showTime
                className="!w-full"
                format="DD MMM YYYY, hh:mm A"
              />
            </Form.Item>

            {/* END */}

            <Form.Item
              name="expires_at"
              label="Expires At"
            >
              <DatePicker
                showTime
                className="!w-full"
                format="DD MMM YYYY, hh:mm A"
              />
            </Form.Item>
          </div>

          {/* ACTIVE */}

          <Form.Item
            name="is_active"
            label="Coupon Status"
            valuePropName="checked"
          >
            <Switch
              checkedChildren="Active"
              unCheckedChildren="Off"
            />
          </Form.Item>

          {/* ALL PRODUCTS */}

          <Form.Item
            name="applies_to_all"
            label="Apply to all products"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          {/* PRODUCT SELECT */}

          <Form.Item
            noStyle
            shouldUpdate={(
              previous,
              current
            ) =>
              previous.applies_to_all !==
              current.applies_to_all
            }
          >
            {({ getFieldValue }) =>
              !getFieldValue(
                "applies_to_all"
              ) ? (
                <Form.Item
                  name="product_ids"
                  label="Select Products"
                  rules={[
                    {
                      required: true,
                      type: "array",
                      min: 1,
                      message:
                        "Please select at least one product.",
                    },
                  ]}
                >
                  <Select
                    mode="multiple"
                    loading={productsLoading}
                    placeholder="Select products"
                    optionFilterProp="label"
                    showSearch
                    options={products.map(
                      (product) => ({
                        value:
                          product.id,
                        label:
                          product.name,
                      })
                    )}
                  />
                </Form.Item>
              ) : null
            }
          </Form.Item>

          {/* FOOTER */}

          <div className="mt-6 flex justify-end gap-3 border-t pt-5">
            <Button onClick={closeModal}>
              Cancel
            </Button>

            <Button
              type="primary"
              htmlType="submit"
              loading={
                createMutation.isPending ||
                updateMutation.isPending
              }
            >
              {editingCoupon
                ? "Update Coupon"
                : "Create Coupon"}
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}