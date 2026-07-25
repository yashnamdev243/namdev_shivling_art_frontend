import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "antd";

import Seo from "../../components/common/Seo";
import ProductSearch from "../../components/cards/ProductSearch";
import ProductFilter from "../../components/cards/ProductFilter";
import ProductGrid from "../../components/cards/ProductGrid";
import { useProducts } from "../../hooks/useProducts";
import { useCategories } from "../../hooks/useCategories";
import { useDebounce } from "../../hooks/useDebounce";
import { PAGE_SIZE } from "../../config/constants";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [sort, setSort] = useState("-createdAt");
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(search, 400);

  const filters = useMemo(
    () => ({
      page,
      limit: PAGE_SIZE,
      search: debouncedSearch || undefined,
      category: category || undefined,
      sort,
    }),
    [page, debouncedSearch, category, sort],
  );

  const { data, isLoading, isError, error, refetch } = useProducts(filters);
  const { data: categoryData } = useCategories();

  const products = data?.products || data?.data || data || [];
  const total = data?.total ?? products.length;
  const categories =
    categoryData?.categories || categoryData?.data || categoryData || [];

  function handleCategoryChange(value) {
    setCategory(value);
    setPage(1);
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      value ? next.set("category", value) : next.delete("category");
      return next;
    });
  }

  return (
    <>
      <Seo
        title="Our Products"
        description="Browse authentic Narmadeshwar Shivlings, marble murtis and pooja accessories."
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white py-28 mt-1 px-10">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-amber-200/30 blur-[130px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-200/30 blur-[130px]" />
        <div className="container mx-auto max-w-7xl px-5"></div>
        <div className="container mx-auto max-w-7xl px-5">
          <div className="mb-14 text-center">
            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-amber-700">
              Our Collection
            </span>

            <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-6xl">
              Products
            </h1>
          </div>
        </div>

        <div className="container mx-auto max-w-7xl px-5 ">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between bg-gradient-to-l from-amber-100 via-amber-50 to-amber-50 p-6 shadow-[0_15px_40px_rgba(249,115,22,.08)] backdrop-blur-xl rounded-2xl border border-orange-100 ">
            <div className="flex-1">
              <ProductSearch
                value={search}
                onChange={(v) => {
                  setSearch(v);
                  setPage(1);
                }}
              />
            </div>
            <div className="w-full lg:w-[320px]">
              <ProductFilter
                categories={categories}
                category={category}
                onCategoryChange={handleCategoryChange}
                sort={sort}
                onSortChange={(v) => {
                  setSort(v);
                  setPage(1);
                }}
              />
            </div>
          </div>
          <div className="mt-10">
            <ProductGrid
              products={products}
              isLoading={isLoading}
              isError={isError}
              error={error}
              onRetry={refetch}
            />
          </div>
          {!isLoading && total > PAGE_SIZE && (
            <div className="mt-12 flex justify-center">
              <Pagination
                current={page}
                pageSize={PAGE_SIZE}
                total={total}
                onChange={setPage}
                showSizeChanger={false}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
