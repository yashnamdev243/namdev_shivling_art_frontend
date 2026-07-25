import { useEffect } from "react";
import { Modal, Form, Input, InputNumber, Select, Switch, Row, Col } from "antd";
import MediaUploader from "../forms/MediaUploader";
import GalleryUploader from "../forms/GalleryUploader";
import { useCreateProduct, useUpdateProduct } from "../../hooks/useProducts";
import { useCategories } from "../../hooks/useCategories";
import {
  FiBox,
  FiImage,
  FiVideo,
  FiTag,
  FiDollarSign,
  FiPackage,
  FiStar,
  FiFileText,
} from "react-icons/fi";
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
  if (!open) return;

  if (product) {
    form.setFieldsValue({
      ...product,
      gallery: product.gallery || [],
    });
  } else {
    form.resetFields();

    form.setFieldsValue({
      stock: 1,
      isFeatured: false,
      gallery: [],
    });
  }
}, [open, product, form]);
  async function handleSubmit() {
  try {
    const values = await form.validateFields();
    console.log("Submitting:", values);

    if (isEdit) {
      await updateMutation.mutateAsync({
        id: product._id || product.id,
        payload: values,
      });
    } else {
      await createMutation.mutateAsync(values);
    }

    onClose();
  } catch (err) {
    console.log("Validation error:", err.errorFields);
  }
}
  return (
//     <Modal
//       open={open}
//   centered
//   width={900}
//   destroyOnClose
//   maskClosable={false}
//   confirmLoading={saving}
//   onCancel={onClose}
//   onOk={handleSubmit}
//   okText={isEdit ? "Update Product" : "Create Product"}
//   cancelText="Cancel"
//   title={
//     <div>
//       <h2 className="text-xl font-bold text-slate-900">
//         {isEdit ? "Edit Product" : "Add New Product"}
//       </h2>

//       <p className="text-sm text-gray-500">
//         Fill in the product details below.
//       </p>
//     </div>
//   }
//     >
//       <Form form={form} layout="vertical"  onValuesChange={(_, values) => {
//     console.log("FORM VALUES:", values);
//   }} className="mt-4">
//         <Row gutter={16}>
//           <Col span={24}>
//           <Form.Item
//     label="Main Product Image"
//     name="image"
//     rules={[
//         {
//             required: true,
//             message: "Please upload the main image",
//         },
//     ]}
// >
//     <MediaUploader
//         kind="image"
//         label="Main Image"
//         aspect="aspect-square"
//     />
// </Form.Item>
//           </Col>
//         </Row>

//         <Row gutter={16}>
//           <Col xs={24} md={12}>
//             <Form.Item
//               label="Product Name"
//               name="name"
//               rules={[{ required: true, message: "Please enter a product name" }]}
//             >
//               <Input size="large" placeholder="e.g. Premium Narmadeshwar Shivling" />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={12}>
//             <Form.Item
//               label="Category"
//               name="category"
//               rules={[{ required: true, message: "Please select a category" }]}
//             >
//               <Select
//                 size="large"
//                 placeholder="Select category"
//                 options={categories.map((c) => ({ label: c.name || c, value: c.name || c }))}
//               />
//             </Form.Item>
//           </Col>
//         </Row>

//         <Row gutter={16}>
//           <Col xs={24} md={8}>
//             <Form.Item
//               label="Price (₹)"
//               name="price"
//               rules={[{ required: true, message: "Please enter a price" }]}
//             >
//               <InputNumber size="large" min={0} className="!w-full" placeholder="9999" />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={8}>
//             <Form.Item label="Stock Quantity" name="stock">
//               <InputNumber size="large" min={0} className="!w-full" />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={8}>
//             <Form.Item label="Featured on Home" name="isFeatured" valuePropName="checked">
//               <Switch />
//             </Form.Item>
//           </Col>
//         </Row>

//         <Form.Item
//           label="Description"
//           name="description"
//           rules={[{ required: true, message: "Please add a description" }]}
//         >
//           <Input.TextArea rows={4} placeholder="Describe the material, size, weight..." />
//         </Form.Item>

//         <Form.Item
//     label="Gallery Images"
//     name="gallery"
// >
//     <GalleryUploader />
// </Form.Item>
//      <Form.Item
//     label="Product Video"
//     name="video"
// >
//     <MediaUploader
//         kind="video"
//         label="Upload Video"
//         aspect="aspect-video"
//     />
// </Form.Item>
//       </Form>
//     </Modal>
<Modal
  open={open}
  centered
  width={1050}
  destroyOnClose
  maskClosable={false}
  confirmLoading={saving}
  onCancel={onClose}
  onOk={handleSubmit}
  okText={isEdit ? "Update Product" : "Create Product"}
  cancelText="Cancel"
  styles={{
    body: {
      background: "#f8fafc",
      maxHeight: "78vh",
      overflowY: "auto",
      padding: 24,
    },
  }}
  title={
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
        <FiBox size={28} />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          {isEdit ? "Edit Product" : "Create Product"}
        </h2>

        <p className="text-sm text-gray-500">
          Add product details, media and pricing.
        </p>
      </div>
    </div>
  }
>
  <Form form={form} layout="vertical" className="space-y-6 mt-2">

    {/* ================= MEDIA ================= */}

    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm mb-6">

<div className="flex items-center gap-3 mb-6">
<div className="rounded-xl bg-blue-100 p-3 text-blue-600">
<FiImage size={22}/>
</div>

<div>
<h3 className="font-semibold text-lg">
Media
</h3>

<p className="text-sm text-gray-500">
Upload product images and video
</p>

</div>

</div>

<Row gutter={20}>

<Col xs={24} lg={12}>
<Form.Item
label="Main Image"
name="image"
rules={[{required:true}]}
>
<MediaUploader
kind="image"
label="Main Image"
aspect="aspect-square"
/>
</Form.Item>
</Col>

<Col xs={24} lg={12}>
<Form.Item
label="Product Video"
name="video"
>
<MediaUploader
kind="video"
label="Upload Video"
aspect="aspect-video"
/>
</Form.Item>
</Col>

</Row>

<Form.Item
label="Gallery Images"
name="gallery"
className="mb-0"
>
<GalleryUploader/>
</Form.Item>

</div>

    {/* ================= BASIC INFO ================= */}
<div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm mb-6">

<div className="flex items-center gap-3 mb-6">

<div className="rounded-xl bg-green-100 p-3 text-green-600">
<FiTag size={22}/>
</div>

<div>

<h3 className="font-semibold text-lg">
Product Details
</h3>

<p className="text-gray-500 text-sm">
Basic information about your product
</p>

</div>

</div>

<Row gutter={20}>

<Col xs={24} md={12}>

<Form.Item
label="Product Name"
name="name"
rules={[{required:true}]}
>

<Input
size="large"
prefix={<FiPackage className="text-gray-400"/>}
placeholder="Premium Narmadeshwar Shivling"
/>

</Form.Item>

</Col>

<Col xs={24} md={12}>

<Form.Item
label="Category"
name="category"
rules={[{required:true}]}
>

<Select
size="large"
placeholder="Choose Category"
options={categories.map(c=>({
label:c.name||c,
value:c.name||c
}))}
/>

</Form.Item>

</Col>

</Row>

<Form.Item
label="Description"
name="description"
rules={[{required:true}]}
>

<Input.TextArea
rows={5}
placeholder="Describe your product..."
/>

</Form.Item>

</div>

    {/* ================= PRICING ================= */}

   <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

<div className="flex items-center gap-3 mb-6">

<div className="rounded-xl bg-orange-100 p-3 text-orange-600">
<FiDollarSign size={22}/>
</div>

<div>

<h3 className="font-semibold text-lg">
Pricing & Inventory
</h3>

<p className="text-sm text-gray-500">
Manage pricing and stock
</p>

</div>

</div>

<Row gutter={20}>

<Col xs={24} md={8}>

<Form.Item
label="Price (₹)"
name="price"
rules={[{required:true}]}
>

<InputNumber
size="large"
className="w-full"
min={0}
placeholder="9999"
/>

</Form.Item>

</Col>

<Col xs={24} md={8}>

<Form.Item
label="Stock Quantity"
name="stock"
>

<InputNumber
size="large"
className="w-full"
min={0}
placeholder="100"
/>

</Form.Item>

</Col>

<Col xs={24} md={8}>

<Form.Item
label="Featured Product"
name="isFeatured"
valuePropName="checked"
>

<div className="flex items-center justify-between rounded-2xl border bg-gray-50 px-5 py-3">

<div className="flex items-center gap-2">

<FiStar className="text-yellow-500"/>

<span className="font-medium">
Show on Homepage
</span>

</div>

<Switch/>

</div>

</Form.Item>

</Col>

</Row>

</div>

  </Form>
</Modal>
  );
}
