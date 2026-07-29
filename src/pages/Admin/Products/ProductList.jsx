// import { useState } from "react";
// import { Table, Button, Input, Tag, Image } from "antd";
// import {
//   PlusOutlined,
//   EditOutlined,
//   DeleteOutlined,
//   SearchOutlined,
// } from "@ant-design/icons";

// import Seo from "../../../components/common/Seo";
// import AdminHeader from "../../../components/admin/AdminHeader";
// import ProductFormModal from "../../../components/admin/ProductFormModal";
// import { confirmDelete } from "../../../components/common/ConfirmDialog";
// import { useProducts, useDeleteProduct } from "../../../hooks/useProducts";
// import { useDebounce } from "../../../hooks/useDebounce";
// import { formatCurrency } from "../../../utils/format";
// import { PAGE_SIZE } from "../../../config/constants";
// import { FILE_BASE_URL } from "../../../config/api";

// export default function ProductList() {
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);

//   const debouncedSearch = useDebounce(search, 400);
//   const { data, isLoading } = useProducts({
//     page,
//     limit: PAGE_SIZE,
//     search: debouncedSearch || undefined,
//   });
//   const deleteMutation = useDeleteProduct();

//   const products = data?.products || data?.data || data || [];
//   const total = data?.total ?? products.length;

//   function openCreate() {
//     setEditingProduct(null);
//     setModalOpen(true);
//   }

//   function openEdit(product) {
//     setEditingProduct(product);
//     setModalOpen(true);
//   }

//   const columns = [
//     {
//       title: "Product",
//       dataIndex: "name",
//       render: (name, record) => {
//         return (
//           <div className="flex items-center gap-3">
//             <img
//               src={`${FILE_BASE_URL}/uploads/${record.image}`}
//               alt={name}
//               width={48}
//               height={48}
//               style={{
//                 borderRadius: 8,
//                 objectFit: "cover",
//                 border: "1px solid #ddd",
//               }}
//               onLoad={() => console.log("✅ Loaded")}
//               onError={(e) => {
//                 console.log("Image failed");
//                 console.log("URL:", e.target.src);

//                 fetch(e.target.src)
//                   .then((res) => {
//                     console.log("Status:", res.status);
//                     console.log(
//                       "Content-Type:",
//                       res.headers.get("content-type"),
//                     );
//                   })
//                   .catch((err) => console.log(err));
//               }}
//             />

//             <span className="font-medium text-stone-800">{name}</span>
//           </div>
//         );
//       },
//     },
//     {
//       title: "Category",
//       dataIndex: "category",
//       render: (category) => <Tag color="#8a4019">{category}</Tag>,
//     },
//     {
//       title: "Price",
//       dataIndex: "price",
//       render: (price) => (
//         <span className="font-semibold text-brand-700">
//           {formatCurrency(price)}
//         </span>
//       ),
//     },
//     {
//       title: "Stock",
//       dataIndex: "stock",
//       render: (stock) =>
//         stock > 0 ? (
//           <Tag color="green">{stock} in stock</Tag>
//         ) : (
//           <Tag color="red">Out of stock</Tag>
//         ),
//     },
//     {
//       title: "Actions",
//       align: "right",
//       render: (_, record) => (
//         <div className="flex justify-end gap-2">
//           <Button
//             size="small"
//             icon={<EditOutlined />}
//             onClick={() => openEdit(record)}
//           />
//           <Button
//             size="small"
//             danger
//             icon={<DeleteOutlined />}
//             onClick={() =>
//               confirmDelete({
//                 name: record.name,
//                 onConfirm: () => deleteMutation.mutate(record._id || record.id),
//               })
//             }
//           />
//         </div>
//       ),
//     },
//   ];
//   console.log(products, "products");
//   return (
//     <>
//       <Seo title="Manage Products" />

//       <AdminHeader
//         title="Products"
//         description="Add, edit, or remove products from your catalogue."
//         actions={
//           <Button
//             type="primary"
//             icon={<PlusOutlined />}
//             className="!rounded-full !border-none !bg-brand-700 hover:!bg-brand-800"
//             onClick={openCreate}
//           >
//             Add Product
//           </Button>
//         }
//       />

//       <div className="mb-5 max-w-sm">
//         <Input
//           size="large"
//           allowClear
//           placeholder="Search products..."
//           prefix={<SearchOutlined className="text-gray-400" />}
//           value={search}
//           onChange={(e) => {
//             setSearch(e.target.value);
//             setPage(1);
//           }}
//         />
//       </div>

//       <div className="overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-card">
//         <Table
//           rowKey={(r) => r._id || r.id}
//           columns={columns}
//           dataSource={products}
//           loading={isLoading}
//           pagination={{
//             current: page,
//             pageSize: PAGE_SIZE,
//             total,
//             onChange: setPage,
//           }}
//         />
//       </div>

//       <ProductFormModal
//         open={modalOpen}
//         onClose={() => setModalOpen(false)}
//         product={editingProduct}
//       />
//     </>
//   );
// }

import { useState } from "react";
import { Table, Button, Input, Tag } from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import Seo from "../../../components/common/Seo";
import AdminHeader from "../../../components/admin/AdminHeader";
import ProductFormModal from "../../../components/admin/ProductFormModal";
import { confirmDelete } from "../../../components/common/ConfirmDialog";
import { useProducts, useDeleteProduct } from "../../../hooks/useProducts";
import { useDebounce } from "../../../hooks/useDebounce";
import { formatCurrency } from "../../../utils/format";
import { PAGE_SIZE } from "../../../config/constants";
import { FILE_BASE_URL } from "../../../config/api";

export default function ProductList() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const debouncedSearch = useDebounce(search, 400);
  const { data, isLoading } = useProducts({
    page,
    limit: PAGE_SIZE,
    search: debouncedSearch || undefined,
  });
  const deleteMutation = useDeleteProduct();

  const products = data?.products || data?.data || data || [];
  const total = data?.total ?? products.length;

  function openCreate() {
    setEditingProduct(null);
    setModalOpen(true);
  }

  function openEdit(product) {
    setEditingProduct(product);
    setModalOpen(true);
  }

  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      fixed: "left",
      width: 260,
      render: (name, record) => (
        <div className="flex items-center gap-3">
          <img
            src={`${FILE_BASE_URL}/uploads/${record.image}`}
            alt={name}
            width={48}
            height={48}
            style={{
              borderRadius: 8,
              objectFit: "cover",
              border: "1px solid #ddd",
            }}
            onError={(e) => {
              // Swap to a placeholder instead of the previous debug flow,
              // which fired an extra fetch() + console.log for every
              // broken image on every render — noisy and wasteful in
              // production.
              e.currentTarget.src = "https://placehold.co/48x48?text=%20";
            }}
          />
          <span className="font-medium text-stone-800">{name}</span>
        </div>
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      width: 140,
      render: (category) =>
        category ? <Tag color="#8a4019">{category}</Tag> : "—",
    },
    {
      title: "Price",
      dataIndex: "price",
      width: 130,
      render: (price) => (
        <span className="font-semibold text-brand-700">
          {formatCurrency(price)}
        </span>
      ),
    },
    {
      title: "Stock",
      dataIndex: "stock",
      width: 130,
      render: (stock) =>
        stock > 0 ? (
          <Tag color="green">{stock} in stock</Tag>
        ) : (
          <Tag color="red">Out of stock</Tag>
        ),
    },
    {
      title: "Actions",
      align: "right",
      width: 110,
      fixed: "right",
      render: (_, record) => (
        <div className="flex justify-end gap-2">
          <Button
            size="small"
            icon={<EditOutlined />}
            onClick={() => openEdit(record)}
            aria-label={`Edit ${record.name}`}
          />
          <Button
            size="small"
            danger
            icon={<DeleteOutlined />}
            aria-label={`Delete ${record.name}`}
            onClick={() =>
              confirmDelete({
                name: record.name,
                onConfirm: () => deleteMutation.mutate(record._id || record.id),
              })
            }
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <Seo title="Manage Products" />

      <AdminHeader
        title="Products"
        description="Add, edit, or remove products from your catalogue."
        actions={
          <Button
            type="primary"
            icon={<PlusOutlined />}
            className="!w-full !rounded-full !border-none !bg-brand-700 hover:!bg-brand-800 sm:!w-auto"
            onClick={openCreate}
          >
            Add Product
          </Button>
        }
      />

      <div className="mb-5 w-full max-w-sm">
        <Input
          size="large"
          allowClear
          placeholder="Search products..."
          prefix={
            <SearchOutlined className="text-gray-400" aria-hidden="true" />
          }
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-card">
        <Table
          rowKey={(r) => r._id || r.id}
          columns={columns}
          dataSource={products}
          loading={isLoading}
          scroll={{ x: 760 }}
          pagination={{
            current: page,
            pageSize: PAGE_SIZE,
            total,
            onChange: setPage,
          }}
        />
      </div>

      <ProductFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        product={editingProduct}
      />
    </>
  );
}
