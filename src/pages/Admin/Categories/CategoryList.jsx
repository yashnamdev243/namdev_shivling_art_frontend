import { useState } from "react";
import { Button, Card, Empty, Input } from "antd";
import Seo from "../../../components/common/Seo";
import CategoryFormModal from "../../../components/admin/CategoryFormModal";
import { confirmDelete } from "../../../components/common/ConfirmDialog";
import Loader from "../../../components/common/Loader";
import { useCategories, useDeleteCategory } from "../../../hooks/useCategories";
import { FILE_BASE_URL } from "../../../config/api";

import { FiPlus, FiEdit2, FiTrash2, FiFolder, FiImage } from "react-icons/fi";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

export default function CategoryList() {
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [search, setSearch] = useState("");

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
  const filtered = categories.filter((c) =>
    c.name?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <Seo title="Manage Categories" />

      <Card
        className="!rounded-3xl !border-orange-100 !shadow-sm mb-4"
        styles={{ body: { padding: 0 } }}
      >
        <div className="flex flex-col gap-4 border-b border-orange-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 ">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-lg text-orange-600">
              <FiFolder aria-hidden="true" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                Categories
              </h2>
              <p className="mt-0.5 text-xs text-gray-500 sm:text-sm font-normal">
                Organize your products into collections.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center gap-3">
            <Input
              allowClear
              prefix={<SearchOutlined className="text-gray-400" />}
              placeholder="Search categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="!rounded-xl"
            />
            <Button
              type="primary"
              onClick={openCreate}
              icon={
                <span
                  className="
      flex h-5 w-5 items-center justify-center
      rounded-lg bg-white/10
      transition-colors duration-200
      group-hover:bg-white/15
    "
                >
                  <PlusOutlined size={17} strokeWidth={2.5} />
                </span>
              }
              className=" group
    !flex !h-8 !items-center !gap-2.5
    !rounded-xl !border-0
    !bg-slate-900
    !px-3
    !font-semibold !text-white
    !shadow-lg !shadow-slate-900/15
    transition-all duration-200
    hover:!-translate-y-0.5
    hover:!bg-orange-600
    hover:!shadow-xl hover:!shadow-orange-600/20
    active:!translate-y-0"
            >
              Add Category
            </Button>
          </div>
        </div>
      </Card>

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
            image={
              <FiImage
                size={60}
                className="mx-auto text-gray-300"
                aria-hidden="true"
              />
            }
            description={
              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  No Categories Found
                </h3>
                <p className="text-gray-500">
                  Create your first category to organize products.
                </p>
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
                  src={
                    c.image
                      ? `${FILE_BASE_URL}/uploads/${c.image}`
                      : "https://placehold.co/600x400"
                  }
                  alt={c.name}
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-56"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/600x400?text=No+Image";
                  }}
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
                  Category
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 p-5 sm:space-y-5 sm:p-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                    {c.name}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-gray-500 sm:mt-2">
                    {c.description || "No description available."}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t pt-4 sm:pt-5">
                  <Button
                    icon={<FiEdit2 />}
                    onClick={() => openEdit(c)}
                    className="!rounded-xl"
                  >
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

      <CategoryFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        category={editingCategory}
      />
    </>
  );
}
