// import { Input } from "antd";
// import { SearchOutlined } from "@ant-design/icons";

// /**
//  * Controlled search box -- the parent page owns the value and typically
//  * debounces it (see useDebounce) before passing it into useProducts().
//  */
// export default function ProductSearch({ value, onChange, placeholder = "Search products..." }) {
//   return (
//     <Input
//       size="large"
//       allowClear
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       placeholder={placeholder}
//       prefix={<SearchOutlined className="text-gray-400" />}
//       className="rounded-full"
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
      prefix={
        <SearchOutlined className="text-lg text-orange-500" />
      }
      className="
        !h-10
        !rounded-md
        !border-[#fed7aa]
        !bg-orange-50/40
        hover:!border-[#fb923c]
        focus-within:!border-orange-500
        focus-within:!shadow-[0_0_0_4px_rgba(249,115,22,.12)]
      "
    />
  );
}