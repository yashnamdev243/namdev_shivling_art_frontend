// import { useState } from "react";
// import { Table, Button, Input, Tag } from "antd";
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
// import AdminDataTable from "../../../components/admin/AdminDataTable";
// import { FiPackage } from "react-icons/fi";

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
//       fixed: "left",
//       width: 260,
//       render: (name, record) => (
//         <div className="flex items-center gap-3">
//           <img
//             src={`${FILE_BASE_URL}/uploads/${record.image}`}
//             alt={name}
//             width={48}
//             height={48}
//             style={{
//               borderRadius: 8,
//               objectFit: "cover",
//               border: "1px solid #ddd",
//             }}
//             onError={(e) => {
//               // Swap to a placeholder instead of the previous debug flow,
//               // which fired an extra fetch() + console.log for every
//               // broken image on every render — noisy and wasteful in
//               // production.
//               e.currentTarget.src = "https://placehold.co/48x48?text=%20";
//             }}
//           />
//           <span className="font-medium text-stone-800">{name}</span>
//         </div>
//       ),
//     },
//     {
//       title: "Category",
//       dataIndex: "category",
//       width: 140,
//       render: (category) =>
//         category ? <Tag color="#8a4019">{category}</Tag> : "—",
//     },
//     {
//       title: "Price",
//       dataIndex: "price",
//       width: 130,
//       render: (price) => (
//         <span className="font-semibold text-brand-700">
//           {formatCurrency(price)}
//         </span>
//       ),
//     },
//     {
//       title: "Stock",
//       dataIndex: "stock",
//       width: 130,
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
//       width: 110,
//       fixed: "right",
//       render: (_, record) => (
//         <div className="flex justify-end gap-2">
//           <Button
//             size="small"
//             icon={<EditOutlined />}
//             onClick={() => openEdit(record)}
//             aria-label={`Edit ${record.name}`}
//           />
//           <Button
//             size="small"
//             danger
//             icon={<DeleteOutlined />}
//             aria-label={`Delete ${record.name}`}
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

//   return (
//     <>
//       <Seo title="Manage Products" />

//       {/* <AdminHeader
       
       
//       /> */}

//       {/* <div className="mb-5 w-full max-w-sm">
//         <Input
//           size="large"
//           allowClear
//           placeholder="Search products..."
//           prefix={
//             <SearchOutlined className="text-gray-400" aria-hidden="true" />
//           }
//           value={search}
//           onChange={(e) => {
//             setSearch(e.target.value);
//             setPage(1);
//           }}
//         />
//       </div> */}

//       <AdminDataTable
//         title="Products"
//         icon={<FiPackage />}
//         subtitle="Manage your products and inventory."
//         columns={columns}
//         dataSource={products}
//         loading={isLoading}
//         rowKey={(r) => r._id || r.id}
//         emptyText="No products found."
//         searchValue={search}
//         onSearchChange={(v) => {
//           setSearch(v);
//           setPage(1);
//         }}
//         searchPlaceholder="Search products..."
//         scrollX={760}
//         actions={
//           <Button
//             type="primary"
//             icon={
//               <span
//                 className="
//       flex h-5 w-5 items-center justify-center
//       rounded-lg bg-white/10
//       transition-colors duration-200
//       group-hover:bg-white/15
//     "
//               >
//                 <PlusOutlined size={17} strokeWidth={2.5} />
//               </span>
//             }
//             className=" group
//     !flex !h-8 !items-center !gap-2.5
//     !rounded-xl !border-0
//     !bg-slate-900
//     !px-3
//     !font-semibold !text-white
//     !shadow-lg !shadow-slate-900/15
//     transition-all duration-200
//     hover:!-translate-y-0.5
//     hover:!bg-orange-600
//     hover:!shadow-xl hover:!shadow-orange-600/20
//     active:!translate-y-0"
//             onClick={openCreate}
//           >
//             Add Product
//           </Button>
//         }
//       />
//       {/* <div className="overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-card">
//         <Table
//           rowKey={(r) => r._id || r.id}
//           columns={columns}
//           dataSource={products}
//           loading={isLoading}
//           scroll={{ x: 760 }}
//           pagination={{
//             current: page,
//             pageSize: PAGE_SIZE,
//             total,
//             onChange: setPage,
//           }}
//         />
//       </div> */}

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
import AdminDataTable from "../../../components/admin/AdminDataTable";
import { FiPackage } from "react-icons/fi";

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
              borderRadius: 10,
              objectFit: "cover",
              border: "1px solid rgba(28,26,23,0.08)",
            }}
            onError={(e) => {
              // Swap to a placeholder instead of the previous debug flow,
              // which fired an extra fetch() + console.log for every
              // broken image on every render — noisy and wasteful in
              // production.
              e.currentTarget.src = "https://placehold.co/48x48?text=%20";
            }}
          />
          <span className="font-medium text-[#1C1A17]">{name}</span>
        </div>
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      width: 140,
      render: (category) =>
        category ? (
          <Tag className="!border-[#D4AF6A]/30 !bg-[#A8823C]/[0.08] !text-[#8A6B2E]">{category}</Tag>
        ) : (
          "—"
        ),
    },
    {
      title: "Price",
      dataIndex: "price",
      width: 130,
      render: (price) => (
        <span className="font-semibold text-[#1C1A17]">
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
          <Tag className="!border-emerald-700/20 !bg-emerald-50 !text-emerald-700">{stock} in stock</Tag>
        ) : (
          <Tag className="!border-[#9B4444]/20 !bg-[#9B4444]/[0.06] !text-[#9B4444]">Out of stock</Tag>
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
            className="!rounded-lg"
          />
          <Button
            size="small"
            danger
            icon={<DeleteOutlined />}
            aria-label={`Delete ${record.name}`}
            className="!rounded-lg"
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

      <AdminDataTable
        title="Products"
        icon={<FiPackage />}
        subtitle="Manage your products and inventory."
        columns={columns}
        dataSource={products}
        loading={isLoading}
        rowKey={(r) => r._id || r.id}
        emptyText="No products found."
        searchValue={search}
        onSearchChange={(v) => {
          setSearch(v);
          setPage(1);
        }}
        searchPlaceholder="Search products..."
        scrollX={760}
        actions={
          <Button
            type="primary"
            icon={
              <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-white/10 transition-colors duration-200 group-hover:bg-white/15">
                <PlusOutlined size={17} strokeWidth={2.5} />
              </span>
            }
            className="group !flex !h-8 !items-center !gap-2.5 !rounded-xl !border-0 !bg-[#1C1A17] !px-3 !font-semibold !text-[#F2E3C8] !shadow-none transition-all duration-200 hover:!-translate-y-0.5 hover:!bg-[#2A2620] active:!translate-y-0"
            onClick={openCreate}
          >
            Add Product
          </Button>
        }
      />

      <ProductFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        product={editingProduct}
      />
    </>
  );
}