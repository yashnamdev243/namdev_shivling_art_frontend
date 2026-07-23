import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

/**
 * Controlled search box -- the parent page owns the value and typically
 * debounces it (see useDebounce) before passing it into useProducts().
 */
export default function ProductSearch({ value, onChange, placeholder = "Search products..." }) {
  return (
    <Input
      size="large"
      allowClear
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      prefix={<SearchOutlined className="text-gray-400" />}
      className="rounded-full"
    />
  );
}
