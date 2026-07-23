import { useEffect } from "react";
import { Modal, Form, Input, InputNumber, Select, Switch, Row, Col } from "antd";
import MediaUploader from "../forms/MediaUploader";
import GalleryUploader from "../forms/GalleryUploader";
import { useCreateProduct, useUpdateProduct } from "../../hooks/useProducts";
import { useCategories } from "../../hooks/useCategories";

/**
 * One modal handles both "add product" and "edit product" -- pass an
 * existing `product` to edit it, or leave it undefined to create a new
 * one. Image/video upload, category select and the create/update
 * mutation all live here so the product list page stays simple.
 */
export default function ProductFormModal({ open, onClose, product }) {
  const [form] = Form.useForm();
  const isEdit = Boolean(product);

  const { data: categoryData } = useCategories();
  const categories = categoryData?.categories || categoryData?.data || categoryData || [];

  const createMutation = useCreateProduct();
  const updateMutation = useUpdateProduct();
  const saving = createMutation.isPending || updateMutation.isPending;

  useEffect(() => {
    if (open) {
      form.setFieldsValue(
        product || {
          name: "",
          category: undefined,
          price: undefined,
          stock: 1,
          description: "",
          thumbnail: "",
          images: [],
          video: "",
          isFeatured: false,
        }
      );
    }
  }, [open, product, form]);

  async function handleSubmit() {
    const values = await form.validateFields();
    if (isEdit) {
      await updateMutation.mutateAsync({ id: product._id || product.id, payload: values });
    } else {
      await createMutation.mutateAsync(values);
    }
    onClose();
  }

  return (
    <Modal
      open={open}
      onCancel={onClose}
      onOk={handleSubmit}
      confirmLoading={saving}
      title={isEdit ? "Edit Product" : "Add New Product"}
      okText={isEdit ? "Save Changes" : "Create Product"}
      width={720}
      destroyOnClose
    >
      <Form form={form} layout="vertical" className="mt-4">
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="thumbnail"
             // rules={[{ required: true, message: "Thumbnail image is required" }]}
            >
              <MediaUploader kind="image" label="Thumbnail image" aspect="aspect-video" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Product Name"
              name="name"
              rules={[{ required: true, message: "Please enter a product name" }]}
            >
              <Input size="large" placeholder="e.g. Premium Narmadeshwar Shivling" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Category"
              name="category"
              rules={[{ required: true, message: "Please select a category" }]}
            >
              <Select
                size="large"
                placeholder="Select category"
                options={categories.map((c) => ({ label: c.name || c, value: c.name || c }))}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={8}>
            <Form.Item
              label="Price (₹)"
              name="price"
              rules={[{ required: true, message: "Please enter a price" }]}
            >
              <InputNumber size="large" min={0} className="!w-full" placeholder="9999" />
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item label="Stock Quantity" name="stock">
              <InputNumber size="large" min={0} className="!w-full" />
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item label="Featured on Home" name="isFeatured" valuePropName="checked">
              <Switch />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please add a description" }]}
        >
          <Input.TextArea rows={4} placeholder="Describe the material, size, weight..." />
        </Form.Item>

        <Form.Item name="images">
          <GalleryUploader />
        </Form.Item>

        <Form.Item name="video">
          <MediaUploader kind="video" label="Product video (optional)" aspect="aspect-video" />
        </Form.Item>
      </Form>
    </Modal>
  );
}
