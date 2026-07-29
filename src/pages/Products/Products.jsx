// import { useMemo, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { Pagination } from "antd";
// import Seo from "../../components/common/Seo";
// import ProductSearch from "../../components/cards/ProductSearch";
// import ProductFilter from "../../components/cards/ProductFilter";
// import ProductGrid from "../../components/cards/ProductGrid";
// import { useProducts } from "../../hooks/useProducts";
// import { useCategories } from "../../hooks/useCategories";
// import { useDebounce } from "../../hooks/useDebounce";
// import { PAGE_SIZE } from "../../config/constants";

// export default function Products() {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const [search, setSearch] = useState(searchParams.get("q") || "");
//   const [category, setCategory] = useState(searchParams.get("category") || "");
//   const [sort, setSort] = useState("-createdAt");
//   const [page, setPage] = useState(1);

//   const debouncedSearch = useDebounce(search, 400);

//   const filters = useMemo(
//     () => ({
//       page,
//       limit: PAGE_SIZE,
//       search: debouncedSearch || undefined,
//       category: category || undefined,
//       sort,
//     }),
//     [page, debouncedSearch, category, sort],
//   );

//   const { data, isLoading, isError, error, refetch } = useProducts(filters);
//   const { data: categoryData } = useCategories();

//   const products = data?.products || data?.data || data || [];
//   const total = data?.total ?? products.length;
//   const categories =
//     categoryData?.categories || categoryData?.data || categoryData || [];

//   function handleCategoryChange(value) {
//     setCategory(value);
//     setPage(1);
//     setSearchParams((prev) => {
//       const next = new URLSearchParams(prev);
//       value ? next.set("category", value) : next.delete("category");
//       return next;
//     });
//   }

//   return (
//     <>
//       <Seo
//         title="Our Products"
//         description="Browse authentic Narmadeshwar Shivlings, marble murtis and pooja accessories."
//       />

//       <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white py-28 mt-1 px-10">
//         <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-amber-200/30 blur-[130px]" />

//         <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-200/30 blur-[130px]" />
//         <div className="container mx-auto max-w-7xl px-5"></div>
//         <div className="container mx-auto max-w-7xl px-5">
//           <div className="mb-14 text-center">
//             <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-amber-700">
//               Our Collection
//             </span>

//             <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-6xl">
//               Products
//             </h1>
//           </div>
//         </div>

//         <div className="container mx-auto max-w-7xl px-5 ">
//           <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between bg-gradient-to-l from-amber-100 via-amber-50 to-amber-50 p-6 shadow-[0_15px_40px_rgba(249,115,22,.08)] backdrop-blur-xl rounded-2xl border border-orange-100 ">
//             <div className="flex-1">
//               <ProductSearch
//                 value={search}
//                 onChange={(v) => {
//                   setSearch(v);
//                   setPage(1);
//                 }}
//               />
//             </div>
//             <div className="w-full lg:w-[320px]">
//               <ProductFilter
//                 categories={categories}
//                 category={category}
//                 onCategoryChange={handleCategoryChange}
//                 sort={sort}
//                 onSortChange={(v) => {
//                   setSort(v);
//                   setPage(1);
//                 }}
//               />
//             </div>
//           </div>
//           <div className="mt-10">
//             <ProductGrid
//               products={products}
//               isLoading={isLoading}
//               isError={isError}
//               error={error}
//               onRetry={refetch}
//             />
//           </div>
//           {!isLoading && total > PAGE_SIZE && (
//             <div className="mt-12 flex justify-center">
//               <Pagination
//                 current={page}
//                 pageSize={PAGE_SIZE}
//                 total={total}
//                 onChange={setPage}
//                 showSizeChanger={false}
//               />
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }

import { useEffect, useMemo, useState } from "react";
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
  const [sort, setSort] = useState(searchParams.get("sort") || "-createdAt");
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  const debouncedSearch = useDebounce(search, 400);

  // Keep the URL in sync with every filter so the current search/filter
  // state survives a refresh, a back-navigation, or being shared as a
  // link — this was previously only true for `category`.
  useEffect(() => {
    const next = new URLSearchParams();
    if (debouncedSearch) next.set("q", debouncedSearch);
    if (category) next.set("category", category);
    if (sort && sort !== "-createdAt") next.set("sort", sort);
    if (page > 1) next.set("page", String(page));
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch, category, sort, page]);

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
  }

  return (
    <>
      <Seo
        title="Our Products"
        description="Browse authentic Narmadeshwar Shivlings, marble murtis and pooja accessories."
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white py-12 sm:py-16 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
        {/* Background Blur */}
        <div className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full bg-amber-200/30 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-orange-200/30 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />

        <div className="container mx-auto max-w-7xl px-0 sm:px-5">
          <div className="mb-12 text-center sm:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-xs font-semibold text-orange-700 sm:px-5 sm:text-sm">
              Our Collection
            </span>

            <h1 className="mt-5 text-3xl font-bold text-gray-900 sm:mt-6 sm:text-4xl md:text-6xl">
              Products
            </h1>
          </div>

          <div className="flex flex-col gap-5 rounded-2xl border border-orange-100 bg-gradient-to-l from-amber-100 via-amber-50 to-amber-50 p-4 shadow-[0_15px_40px_rgba(249,115,22,.08)] backdrop-blur-xl sm:gap-6 sm:rounded-3xl sm:p-6 lg:flex-row lg:items-center lg:justify-between">
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

          <div className="mt-8 sm:mt-10">
            <ProductGrid
              products={products}
              isLoading={isLoading}
              isError={isError}
              error={error}
              onRetry={refetch}
            />
          </div>

          {!isLoading && total > PAGE_SIZE && (
            <div className="mt-10 flex justify-center sm:mt-12">
              <Pagination
                current={page}
                pageSize={PAGE_SIZE}
                total={total}
                onChange={(p) => {
                  setPage(p);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                showSizeChanger={false}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
