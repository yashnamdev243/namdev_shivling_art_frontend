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
    [page, debouncedSearch, category, sort]
  );

  const { data, isLoading, isError, error, refetch } = useProducts(filters);
  const { data: categoryData } = useCategories();

  const products = data?.products || data?.data || data || [];
  const total = data?.total ?? products.length;
  const categories = categoryData?.categories || categoryData?.data || categoryData || [];

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

      <section className="bg-stone-texture bg-brand-50/40 py-16">
        <div className="mx-auto max-w-7xl px-5">
          <p className="font-medium uppercase tracking-widest text-gold-600">Our Collection</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-stone-900 sm:text-5xl">
            Products
          </h1>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <ProductSearch
              value={search}
              onChange={(v) => {
                setSearch(v);
                setPage(1);
              }}
            />
            <div className="md:w-[420px]">
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

          <ProductGrid
            products={products}
            isLoading={isLoading}
            isError={isError}
            error={error}
            onRetry={refetch}
          />

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
