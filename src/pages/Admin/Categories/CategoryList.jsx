import { useState } from "react";
import { Button, Empty } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

import Seo from "../../../components/common/Seo";
import AdminHeader from "../../../components/admin/AdminHeader";
import CategoryFormModal from "../../../components/admin/CategoryFormModal";
import { confirmDelete } from "../../../components/common/ConfirmDialog";
import Loader from "../../../components/common/Loader";
import { useCategories, useDeleteCategory } from "../../../hooks/useCategories";

export default function CategoryList() {
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  const { data, isLoading } = useCategories();
  const deleteMutation = useDeleteCategory();
  const categories = data?.categories || data?.data || data || [];

  function openCreate() {
    setEditingCategory(null);
    setModalOpen(true);
  }

  function openEdit(category) {
    setEditingCategory(category);
    setModalOpen(true);
  }

  return (
    <>
      <Seo title="Manage Categories" />

      <AdminHeader
        title="Categories"
        description="Organize your products into browsable categories."
        actions={
          <Button
            type="primary"
            icon={<PlusOutlined />}
            className="!rounded-full !border-none !bg-brand-700 hover:!bg-brand-800"
            onClick={openCreate}
          >
            Add Category
          </Button>
        }
      />

      {isLoading ? (
        <Loader />
      ) : categories.length === 0 ? (
        <div className="rounded-2xl border border-stone-100 bg-white py-16 shadow-card">
          <Empty description="No categories yet" />
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div
              key={c._id || c.id}
              className="overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-card"
            >
              <img
                src={c.image || "https://placehold.co/400x220"}
                alt={c.name}
                className="h-36 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-stone-900">{c.name}</h3>
                {c.description && (
                  <p className="mt-1 line-clamp-2 text-sm text-gray-500">{c.description}</p>
                )}
                <div className="mt-4 flex gap-2">
                  <Button size="small" icon={<EditOutlined />} onClick={() => openEdit(c)}>
                    Edit
                  </Button>
                  <Button
                    size="small"
                    danger
                    icon={<DeleteOutlined />}
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

      <CategoryFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        category={editingCategory}
      />
    </>
  );
}
