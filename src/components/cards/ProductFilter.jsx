// import { Select } from "antd";

// const SORT_OPTIONS = [
//   { label: "Newest First", value: "-createdAt" },
//   { label: "Price: Low to High", value: "price" },
//   { label: "Price: High to Low", value: "-price" },
//   { label: "Name: A–Z", value: "name" },
// ];

// export default function ProductFilter({
//   categories = [],
//   category,
//   onCategoryChange,
//   sort,
//   onSortChange,
// }) {
//   const categoryOptions = [
//     { label: "All Categories", value: "" },
//     ...categories.map((c) => ({
//       label: c.name || c,
//       value: c.name || c,
//     })),
//   ];

//   return (
//     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

//       <Select
//         size="large"
//         value={category || ""}
//         onChange={onCategoryChange}
//         options={categoryOptions}
//         className="premium-select"
//       />

//       <Select
//         size="large"
//         value={sort}
//         onChange={onSortChange}
//         options={SORT_OPTIONS}
//         className="premium-select"
//       />

//     </div>
//   );
// }

import { Select } from "antd";

const SORT_OPTIONS = [
  { label: "Newest First", value: "-createdAt" },
  { label: "Price: Low to High", value: "price" },
  { label: "Price: High to Low", value: "-price" },
  { label: "Name: A–Z", value: "name" },
];

export default function ProductFilter({
  categories = [],
  category,
  onCategoryChange,
  sort,
  onSortChange,
}) {
  const categoryOptions = [
    { label: "All Categories", value: "" },
    ...categories.map((c) => ({
      label: c.name || c,
      value: c.name || c,
    })),
  ];

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
      <Select
        size="large"
        value={category || ""}
        onChange={onCategoryChange}
        options={categoryOptions}
        className="premium-select w-full"
        aria-label="Filter by category"
      />

      <Select
        size="large"
        value={sort}
        onChange={onSortChange}
        options={SORT_OPTIONS}
        className="premium-select w-full"
        aria-label="Sort products"
      />
    </div>
  );
}
