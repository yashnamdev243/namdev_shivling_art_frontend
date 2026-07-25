import { useEffect } from "react";
import { Modal, Form, Input } from "antd";
import MediaUploader from "../forms/MediaUploader";
import {
  useCreateCategory,
  useUpdateCategory,
} from "../../hooks/useCategories";
import {
  FiGrid,
  FiImage,
  FiTag,
  FiFileText,
} from "react-icons/fi";

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
      await updateMutation.mutateAsync({
        id: category._id || category.id,
        payload: values,
      });
    } else {
      await createMutation.mutateAsync(values);
    }
    onClose();
  }

  return (
    // <Modal
    //   open={open}
    //   onCancel={onClose}
    //   onOk={handleSubmit}
    //   confirmLoading={saving}
    //   title={isEdit ? "Edit Category" : "Add New Category"}
    //   okText={isEdit ? "Save Changes" : "Create Category"}
    //   destroyOnClose
    // >
    //   <Form form={form} layout="vertical" className="mt-4">
    //     <Form.Item name="image">
    //       <MediaUploader
    //         kind="image"
    //         label="Category image"
    //         aspect="aspect-video"
    //       />
    //     </Form.Item>

    //     <Form.Item
    //       label="Category Name"
    //       name="name"
    //       rules={[{ required: true, message: "Please enter a category name" }]}
    //     >
    //       <Input size="large" placeholder="e.g. Parad Shivling" />
    //     </Form.Item>

    //     <Form.Item label="Description" name="description">
    //       <Input.TextArea
    //         rows={3}
    //         placeholder="Short description shown on the site"
    //       />
    //     </Form.Item>
    //   </Form>
    // </Modal>
      <Modal
      open={open}
      centered
      width={720}
      destroyOnClose
      maskClosable={false}
      confirmLoading={saving}
      onCancel={onClose}
      onOk={handleSubmit}
      okText={isEdit ? "Update Category" : "Create Category"}
      cancelText="Cancel"
      styles={{
        body: {
          background: "#f8fafc",
          padding: 24,
          maxHeight: "75vh",
          overflowY: "auto",
        },
      }}
      title={
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
            <FiGrid size={26} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              {isEdit ? "Edit Category" : "Create Category"}
            </h2>

            <p className="text-sm text-gray-500">
              Organize your products into categories.
            </p>
          </div>
        </div>
      }
    >
      <Form
        form={form}
        layout="vertical"
        className="space-y-6 mt-2"
      >
        {/* Media */}

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-3 mb-6">

            <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
              <FiImage size={22} />
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Category Image
              </h3>

              <p className="text-sm text-gray-500">
                Upload a representative image.
              </p>
            </div>

          </div>

          <Form.Item
            name="image"
            className="mb-0"
          >
            <MediaUploader
              kind="image"
              label="Category Image"
              aspect="aspect-video"
            />
          </Form.Item>

        </div>

        {/* Details */}

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-3 mb-6">

            <div className="rounded-xl bg-green-100 p-3 text-green-600">
              <FiTag size={22} />
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Category Details
              </h3>

              <p className="text-sm text-gray-500">
                Basic information about this category.
              </p>
            </div>

          </div>

          <Form.Item
            label="Category Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter category name",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<FiTag className="text-gray-400" />}
              placeholder="Parad Shivling"
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            className="mb-0"
          >
            <Input.TextArea
              rows={4}
              placeholder="Write a short description..."
              className="rounded-xl"
            />
          </Form.Item>

        </div>

      </Form>
    </Modal>
  );
}
