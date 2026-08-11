import { useState } from "react";
import { Button, Card, Form, Input, InputNumber, Modal, Select, Switch, Table, Tag, DatePicker, Space, message } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import couponService from "../../../services/couponService";
import productService from "../../../services/productService";

export default function CouponList() {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({ queryKey: ["admin-coupons"], queryFn: couponService.adminList });
  const { data: productsData } = useQuery({ queryKey: ["admin-products-for-coupons"], queryFn: () => productService.getAll({ page: 1, limit: 100 }) });
  const { data: redemptionData } = useQuery({ queryKey: ["admin-coupon-redemptions"], queryFn: couponService.adminRedemptions });

  const createMutation = useMutation({
    mutationFn: (values) => couponService.adminCreate({
      ...values,
      starts_at: values.starts_at?.toISOString() || null,
      expires_at: values.expires_at?.toISOString() || null,
      product_ids: values.product_ids || [],
    }),
    onSuccess: () => { message.success("Coupon created."); setOpen(false); form.resetFields(); queryClient.invalidateQueries({ queryKey: ["admin-coupons"] }); },
    onError: (e) => message.error(e?.message || "Unable to create coupon."),
  });

  const deleteMutation = useMutation({
    mutationFn: couponService.adminDelete,
    onSuccess: () => { message.success("Coupon deleted."); queryClient.invalidateQueries({ queryKey: ["admin-coupons"] }); },
    onError: (e) => message.error(e?.message || "Unable to delete coupon."),
  });

  const coupons = data?.coupons || [];
  const products = productsData?.products || [];
  const redemptions = redemptionData?.redemptions || [];

  const columns = [
    { title: "Code", dataIndex: "code", render: (v) => <Tag color="orange">{v}</Tag> },
    { title: "Offer", render: (_, r) => r.discount_type === "percentage" ? `${r.discount_value}% off` : `₹${r.discount_value} off` },
    { title: "Minimum", dataIndex: "min_order_amount", render: (v) => `₹${Number(v || 0).toLocaleString("en-IN")}` },
    { title: "Validity", render: (_, r) => `${r.starts_at ? new Date(r.starts_at).toLocaleDateString("en-IN") : "Now"} – ${r.expires_at ? new Date(r.expires_at).toLocaleDateString("en-IN") : "No expiry"}` },
    { title: "Active", dataIndex: "is_active", render: (v) => <Tag color={v ? "green" : "default"}>{v ? "Active" : "Off"}</Tag> },
    { title: "Delete", render: (_, r) => <Button danger icon={<DeleteOutlined />} onClick={() => deleteMutation.mutate(r.id)} /> },
  ];

  const redemptionColumns = [
    { title: "Code", render: (_, r) => r.coupon?.code },
    { title: "Customer", render: (_, r) => <div><b>{r.user?.name}</b><div className="text-xs">{r.user?.email}</div></div> },
    { title: "Order", dataIndex: "order_reference" },
    { title: "Discount", dataIndex: "discount_amount", render: (v) => `₹${Number(v || 0).toLocaleString("en-IN")}` },
    { title: "Used", dataIndex: "createdAt", render: (v) => new Date(v).toLocaleString("en-IN") },
  ];

  return (
    <div className="space-y-6">
      <Card title="Coupons & Festival Offers" extra={<Button type="primary" icon={<PlusOutlined />} onClick={() => setOpen(true)}>Create Coupon</Button>} className="rounded-2xl">
        <p className="mb-4 text-sm text-gray-500">Create WhatsApp/social-media codes, target every product or selected products, set limits and expiry, and track redemption.</p>
        <div className="overflow-x-auto"><Table rowKey="id" loading={isLoading} columns={columns} dataSource={coupons} pagination={{ pageSize: 10 }} /></div>
      </Card>

      <Card title="Coupon Usage Tracking" className="rounded-2xl">
        <Table rowKey="id" columns={redemptionColumns} dataSource={redemptions} pagination={{ pageSize: 10 }} />
      </Card>

      <Modal open={open} title="Create Coupon / Festival Offer" footer={null} onCancel={() => setOpen(false)} destroyOnClose width={720}>
        <Form form={form} layout="vertical" onFinish={(v) => createMutation.mutate(v)} initialValues={{ discount_type: "percentage", per_user_limit: 1, min_order_amount: 0, is_active: true, applies_to_all: true }}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Form.Item name="code" label="Coupon code" rules={[{ required: true }]}><Input placeholder="MAHASHIVRATRI20" /></Form.Item>
            <Form.Item name="title" label="Offer title"><Input placeholder="Festival special offer" /></Form.Item>
            <Form.Item name="discount_type" label="Discount type"><Select options={[{ value: "percentage", label: "Percentage" }, { value: "fixed", label: "Fixed amount" }]} /></Form.Item>
            <Form.Item name="discount_value" label="Discount value" rules={[{ required: true }]}><InputNumber className="!w-full" min={0.01} /></Form.Item>
            <Form.Item name="max_discount" label="Max discount (optional)"><InputNumber className="!w-full" min={0} /></Form.Item>
            <Form.Item name="min_order_amount" label="Minimum order"><InputNumber className="!w-full" min={0} /></Form.Item>
            <Form.Item name="usage_limit" label="Total usage limit"><InputNumber className="!w-full" min={1} /></Form.Item>
            <Form.Item name="per_user_limit" label="Per customer limit"><InputNumber className="!w-full" min={1} /></Form.Item>
            <Form.Item name="festival_name" label="Festival name"><Input placeholder="Mahashivratri" /></Form.Item>
            <Form.Item name="starts_at" label="Starts"><DatePicker showTime className="!w-full" /></Form.Item>
            <Form.Item name="expires_at" label="Expires"><DatePicker showTime className="!w-full" /></Form.Item>
          </div>
          <Form.Item name="applies_to_all" label="Apply to all products" valuePropName="checked"><Switch /></Form.Item>
          <Form.Item noStyle shouldUpdate={(prev, cur) => prev.applies_to_all !== cur.applies_to_all}>
            {({ getFieldValue }) => !getFieldValue("applies_to_all") ? (
              <Form.Item name="product_ids" label="Products" rules={[{ required: true, message: "Select at least one product." }]}>
                <Select mode="multiple" placeholder="Select products" options={products.map(p => ({ value: p.id, label: p.name }))} />
              </Form.Item>
            ) : null}
          </Form.Item>
          <Space className="w-full justify-end">
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="primary" htmlType="submit" loading={createMutation.isPending}>Create Coupon</Button>
          </Space>
        </Form>
      </Modal>
    </div>
  );
}
