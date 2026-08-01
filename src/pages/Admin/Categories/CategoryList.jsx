// import { useState } from "react";
// import { Button, Empty } from "antd";
// import Seo from "../../../components/common/Seo";
// import AdminHeader from "../../../components/admin/AdminHeader";
// import CategoryFormModal from "../../../components/admin/CategoryFormModal";
// import { confirmDelete } from "../../../components/common/ConfirmDialog";
// import Loader from "../../../components/common/Loader";
// import { useCategories, useDeleteCategory } from "../../../hooks/useCategories";
// import { FILE_BASE_URL } from "../../../config/api";

// import {
//   FiPlus,
//   FiEdit2,
//   FiTrash2,
//   FiFolder,
//   FiImage,
//   FiGrid,
//   FiArrowRight,
// } from "react-icons/fi";

// export default function CategoryList() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [editingCategory, setEditingCategory] = useState(null);

//   const { data, isLoading } = useCategories();
//   const deleteMutation = useDeleteCategory();

//   const categories = data?.categories || data?.data || data || [];

//   const openCreate = () => {
//     setEditingCategory(null);
//     setModalOpen(true);
//   };

//   const openEdit = (category) => {
//     setEditingCategory(category);
//     setModalOpen(true);
//   };

//   return (
//     <>
//       <Seo title="Manage Categories" />

//       <AdminHeader
//         title="Categories"
//         description="Manage product collections and organize your store."
//         actions={
//           <Button
//             onClick={openCreate}
//             icon={<FiPlus />}
//             className="!h-11 !rounded-2xl!border-0 !bg-orange-600 !px-6 !font-medium !text-white hover:!bg-orange-700"
//           >
//             Add Category
//           </Button>
//         }
//       />

//       {/* Stats */}

//       <div className="mb-8 grid gap-5 md:grid-cols-3">

//         <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

//           <div className="flex items-center justify-between">

//             <div>

//               <p className="text-sm text-gray-500">
//                 Total Categories
//               </p>

//               <h2 className="mt-2 text-3xl font-bold text-slate-900">
//                 {categories.length}
//               </h2>

//             </div>

//             <div className="rounded-2xl bg-indigo-100 p-4 text-indigo-600">
//               <FiFolder size={28} />
//             </div>

//           </div>

//         </div>

//       </div>

//       {isLoading ? (
//         <Loader />
//       ) : categories.length === 0 ? (

//         <div className="rounded-3xl border border-dashed border-slate-300 bg-white py-20">

//           <Empty
//             image={<FiImage size={70} className="mx-auto text-gray-300" />}
//             description={
//               <div>

//                 <h3 className="text-lg font-semibold text-slate-800">
//                   No Categories Found
//                 </h3>

//                 <p className="text-gray-500">
//                   Create your first category to organize products.
//                 </p>

//               </div>
//             }
//           />

//         </div>

//       ) : (

//         <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">

//           {categories.map((c) => (

//             <div
//               key={c._id || c.id}
//               className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
//             >
//               {/* Image */}

//               <div className="relative overflow-hidden">

//                 <img
//                   src={
//                     c.image
//                       ? `${FILE_BASE_URL}/uploads/${c.image}`
//                       : "https://placehold.co/600x400"
//                   }
//                   alt={c.name}
//                   className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
//                   onError={(e) => {
//                     e.currentTarget.src =
//                       "https://placehold.co/600x400?text=No+Image";
//                   }}
//                 />

//                 <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
//                   Category
//                 </div>

//               </div>

//               {/* Content */}

//               <div className="space-y-5 p-6">

//                 <div>

//                   <h3 className="text-xl font-bold text-slate-900">
//                     {c.name}
//                   </h3>

//                   <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
//                     {c.description || "No description available."}
//                   </p>

//                 </div>

//                 <div className="flex items-center justify-between border-t pt-5">

//                   <Button
//                     icon={<FiEdit2 />}
//                     onClick={() => openEdit(c)}
//                     className="!rounded-xl"
//                   >
//                     Edit
//                   </Button>

//                   <Button
//                     danger
//                     icon={<FiTrash2 />}
//                     className="!rounded-xl"
//                     onClick={() =>
//                       confirmDelete({
//                         name: c.name,
//                         onConfirm: () =>
//                           deleteMutation.mutate(c._id || c.id),
//                       })
//                     }
//                   >
//                     Delete
//                   </Button>

//                 </div>

//               </div>

//             </div>

//           ))}

//         </div>

//       )}

//       <CategoryFormModal
//         open={modalOpen}
//         onClose={() => setModalOpen(false)}
//         category={editingCategory}
//       />
//     </>
//   );
// }

// import { useState } from "react";
// import { Button, Empty } from "antd";
// import Seo from "../../../components/common/Seo";
// import AdminHeader from "../../../components/admin/AdminHeader";
// import CategoryFormModal from "../../../components/admin/CategoryFormModal";
// import { confirmDelete } from "../../../components/common/ConfirmDialog";
// import Loader from "../../../components/common/Loader";
// import { useCategories, useDeleteCategory } from "../../../hooks/useCategories";
// import { FILE_BASE_URL } from "../../../config/api";

// import { FiPlus, FiEdit2, FiTrash2, FiFolder, FiImage } from "react-icons/fi";

// export default function CategoryList() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [editingCategory, setEditingCategory] = useState(null);

//   const { data, isLoading } = useCategories();
//   const deleteMutation = useDeleteCategory();

//   const categories = data?.categories || data?.data || data || [];

//   const openCreate = () => {
//     setEditingCategory(null);
//     setModalOpen(true);
//   };

//   const openEdit = (category) => {
//     setEditingCategory(category);
//     setModalOpen(true);
//   };

//   return (
//     <>
//       <Seo title="Manage Categories" />

//       <AdminHeader
//         title="Categories"
//         description="Manage product collections and organize your store."
//         actions={
//           <Button
//             onClick={openCreate}
//             icon={<FiPlus />}
//             className="!h-11 !w-full !rounded-2xl !border-0 !bg-orange-600 !px-6 !font-medium !text-white hover:!bg-orange-700 sm:!w-auto"
//           >
//             Add Category
//           </Button>
//         }
//       />

//       {/* Stats */}
//       <div className="mb-6 grid gap-4 sm:mb-8 sm:gap-5 md:grid-cols-3">
//         <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-500">Total Categories</p>
//               <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
//                 {categories.length}
//               </h2>
//             </div>
//             <div className="rounded-2xl bg-indigo-100 p-3 text-indigo-600 sm:p-4">
//               <FiFolder size={24} aria-hidden="true" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {isLoading ? (
//         <Loader />
//       ) : categories.length === 0 ? (
//         <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 sm:rounded-3xl sm:py-20">
//           <Empty
//             image={
//               <FiImage
//                 size={60}
//                 className="mx-auto text-gray-300"
//                 aria-hidden="true"
//               />
//             }
//             description={
//               <div>
//                 <h3 className="text-lg font-semibold text-slate-800">
//                   No Categories Found
//                 </h3>
//                 <p className="text-gray-500">
//                   Create your first category to organize products.
//                 </p>
//               </div>
//             }
//           />
//         </div>
//       ) : (
//         <div className="grid gap-5 sm:grid-cols-2 sm:gap-7 xl:grid-cols-3">
//           {categories.map((c) => (
//             <div
//               key={c._id || c.id}
//               className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:rounded-3xl"
//             >
//               {/* Image */}
//               <div className="relative overflow-hidden">
//                 <img
//                   src={
//                     c.image
//                       ? `${FILE_BASE_URL}/uploads/${c.image}`
//                       : "https://placehold.co/600x400"
//                   }
//                   alt={c.name}
//                   className="h-44 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-56"
//                   onError={(e) => {
//                     e.currentTarget.src =
//                       "https://placehold.co/600x400?text=No+Image";
//                   }}
//                 />
//                 <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
//                   Category
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="space-y-4 p-5 sm:space-y-5 sm:p-6">
//                 <div>
//                   <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
//                     {c.name}
//                   </h3>
//                   <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-gray-500 sm:mt-2">
//                     {c.description || "No description available."}
//                   </p>
//                 </div>

//                 <div className="flex items-center justify-between border-t pt-4 sm:pt-5">
//                   <Button
//                     icon={<FiEdit2 />}
//                     onClick={() => openEdit(c)}
//                     className="!rounded-xl"
//                   >
//                     Edit
//                   </Button>

//                   <Button
//                     danger
//                     icon={<FiTrash2 />}
//                     className="!rounded-xl"
//                     onClick={() =>
//                       confirmDelete({
//                         name: c.name,
//                         onConfirm: () => deleteMutation.mutate(c._id || c.id),
//                       })
//                     }
//                   >
//                     Delete
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <CategoryFormModal
//         open={modalOpen}
//         onClose={() => setModalOpen(false)}
//         category={editingCategory}
//       />
//     </>
//   );
// }


import { useState } from "react";
import { Button, Empty } from "antd";
import Seo from "../../../components/common/Seo";
import AdminHeader from "../../../components/admin/AdminHeader";
import CategoryFormModal from "../../../components/admin/CategoryFormModal";
import { confirmDelete } from "../../../components/common/ConfirmDialog";
import Loader from "../../../components/common/Loader";
import { useCategories, useDeleteCategory } from "../../../hooks/useCategories";
import { FILE_BASE_URL } from "../../../config/api";

import { FiPlus, FiEdit2, FiTrash2, FiFolder, FiImage } from "react-icons/fi";

export default function CategoryList() {
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  const { data, isLoading } = useCategories();
  const deleteMutation = useDeleteCategory();

  const categories = data?.categories || data?.data || data || [];

  const openCreate = () => {
    setEditingCategory(null);
    setModalOpen(true);
  };

  const openEdit = (category) => {
    setEditingCategory(category);
    setModalOpen(true);
  };

  return (
    <>
      <Seo title="Manage Categories" />

      <AdminHeader
        title="Categories"
        description="Manage product collections and organize your store."
        actions={
          <Button
            onClick={openCreate}
            icon={<FiPlus />}
            className="!h-11 !w-full !rounded-2xl !border-0 !bg-orange-600 !px-6 !font-medium !text-white hover:!bg-orange-700 sm:!w-auto"
          >
            Add Category
          </Button>
        }
      />

      {/* Stats */}
      <div className="mb-6 grid gap-4 sm:mb-8 sm:gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Categories</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                {categories.length}
              </h2>
            </div>
            <div className="rounded-2xl bg-indigo-100 p-3 text-indigo-600 sm:p-4">
              <FiFolder size={24} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : categories.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 sm:rounded-3xl sm:py-20">
          <Empty
            image={<FiImage size={60} className="mx-auto text-gray-300" aria-hidden="true" />}
            description={
              <div>
                <h3 className="text-lg font-semibold text-slate-800">No Categories Found</h3>
                <p className="text-gray-500">Create your first category to organize products.</p>
              </div>
            }
          />
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-7 xl:grid-cols-3">
          {categories.map((c) => (
            <div
              key={c._id || c.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:rounded-3xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={c.image ? `${FILE_BASE_URL}/uploads/${c.image}` : "https://placehold.co/600x400"}
                  alt={c.name}
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-56"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/600x400?text=No+Image";
                  }}
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
                  Category
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 p-5 sm:space-y-5 sm:p-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 sm:text-xl">{c.name}</h3>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-gray-500 sm:mt-2">
                    {c.description || "No description available."}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t pt-4 sm:pt-5">
                  <Button icon={<FiEdit2 />} onClick={() => openEdit(c)} className="!rounded-xl">
                    Edit
                  </Button>

                  <Button
                    danger
                    icon={<FiTrash2 />}
                    className="!rounded-xl"
                    onClick={() =>
                      confirmDelete({
                        name: c.name,
                        onConfirm: () => deleteMutation.mutate(c._id || c.id),
                      })
                    }
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <CategoryFormModal open={modalOpen} onClose={() => setModalOpen(false)} category={editingCategory} />
    </>
  );
}