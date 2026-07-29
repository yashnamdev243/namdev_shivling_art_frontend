// import { Input } from "antd";
// import { SearchOutlined } from "@ant-design/icons";

// export default function ProductSearch({
//   value,
//   onChange,
//   placeholder = "Search sacred products...",
// }) {
//   return (
//     <Input
//       size="large"
//       allowClear
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       placeholder={placeholder}
//       prefix={
//         <SearchOutlined className="text-lg text-orange-500" />
//       }
//       className="
//         !h-10
//         !rounded-md
//         !border-[#fed7aa]
//         !bg-orange-50/40
//         hover:!border-[#fb923c]
//         focus-within:!border-orange-500
//         focus-within:!shadow-[0_0_0_4px_rgba(249,115,22,.12)]
//       "
//     />
//   );
// }

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function ProductSearch({
  value,
  onChange,
  placeholder = "Search sacred products...",
}) {
  return (
    <Input
      size="large"
      allowClear
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      aria-label="Search products"
      prefix={
        <SearchOutlined
          className="text-lg text-orange-500"
          aria-hidden="true"
        />
      }
      className="!h-11 !rounded-md !border-[#fed7aa] !bg-orange-50/40 hover:!border-[#fb923c] focus-within:!border-orange-500 focus-within:!shadow-[0_0_0_4px_rgba(249,115,22,.12)] sm:!h-10"
    />
  );
}
