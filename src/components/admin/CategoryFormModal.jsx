import { useEffect } from "react";
import { Modal, Form, Input } from "antd";
import MediaUploader from "../forms/MediaUploader";
import { useCreateCategory, useUpdateCategory } from "../../hooks/useCategories";

export default function CategoryFormModal({ open, onClose, category }) {
  const [form] = Form.useForm();
  const isEdit = Boolean(category);

  const createMutation = useCreateCategory();
  const updateMutation = useUpdateCategory();
  const saving = createMutation.isPending || updateMutation.isPending;

  useEffect(() => {
    if (open) {
      form.setFieldsValue(category || { name: "", description: "", image: "" });
    }
  }, [open, category, form]);

  async function handleSubmit() {
    const values = await form.validateFields();
    if (isEdit) {
      await updateMutation.mutateAsync({ id: category._id || category.id, payload: values });
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
      title={isEdit ? "Edit Category" : "Add New Category"}
      okText={isEdit ? "Save Changes" : "Create Category"}
      destroyOnClose
    >
      <Form form={form} layout="vertical" className="mt-4">
        <Form.Item name="image">
          <MediaUploader kind="image" label="Category image" aspect="aspect-video" />
        </Form.Item>

        <Form.Item
          label="Category Name"
          name="name"
          rules={[{ required: true, message: "Please enter a category name" }]}
        >
          <Input size="large" placeholder="e.g. Parad Shivling" />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input.TextArea rows={3} placeholder="Short description shown on the site" />
        </Form.Item>
      </Form>
    </Modal>
  );
}
