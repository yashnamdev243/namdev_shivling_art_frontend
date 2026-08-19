// import { Table, Empty, Spin, Card, Tag, Input } from "antd";
// import { SearchOutlined } from "@ant-design/icons";

// /**
//  * Reusable admin list table.
//  *
//  * Props:
//  * - title: string — card header title
//  * - icon: ReactNode — icon shown next to title
//  * - subtitle: string — small description under title
//  * - columns: antd Table columns array (dynamic per page)
//  * - dataSource: array
//  * - loading: boolean
//  * - rowKey: string | fn (default "id")
//  * - emptyText: string
//  * - extra: ReactNode — right-side header actions (buttons, filters)
//  * - searchValue / onSearchChange / searchPlaceholder — optional built-in search box
//  * - pageSize: number (default 10)
//  * - scrollX: number — horizontal scroll width if table is wide
//  */
// export default function AdminDataTable({
//   title,
//   icon,
//   subtitle,
//   columns = [],
//   dataSource = [],
//   loading = false,
//   rowKey = "id",
//   emptyText = "No records found.",
//   extra = null,
//   searchValue,
//   onSearchChange,
//   searchPlaceholder = "Search...",
//   pageSize = 10,
//   scrollX,
// }) {
//   return (
//     <Card
//       className="!rounded-3xl !border-orange-100 !shadow-sm"
//       styles={{ body: { padding: 0 } }}
//     >
//       {/* HEADER */}
//       <div className="flex flex-col gap-4 border-b border-orange-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
//         <div className="flex items-start gap-3">
//           {icon && (
//             <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-lg text-orange-600">
//               {icon}
//             </div>
//           )}
//           <div>
//             <h2 className="text-lg font-bold text-slate-900 sm:text-xl">{title}</h2>
//             {subtitle && <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">{subtitle}</p>}
//           </div>
//         </div>

//         <div className="flex flex-wrap items-center gap-3">
//           {onSearchChange && (
//             <Input
//               allowClear
//               value={searchValue}
//               onChange={(e) => onSearchChange(e.target.value)}
//               placeholder={searchPlaceholder}
//               prefix={<SearchOutlined className="text-gray-400" />}
//               className="!w-full !rounded-xl sm:!w-64"
//             />
//           )}
//           {extra}
//         </div>
//       </div>

//       {/* BODY */}
//       <div className="p-3 sm:p-5">
//         {loading ? (
//           <div className="flex justify-center py-16">
//             <Spin size="large" />
//           </div>
//         ) : !dataSource.length ? (
//           <div className="py-14">
//             <Empty description={emptyText} />
//           </div>
//         ) : (
//           <div className="overflow-x-auto">
//             <Table
//               rowKey={rowKey}
//               columns={columns}
//               dataSource={dataSource}
//               scroll={scrollX ? { x: scrollX } : undefined}
//               pagination={{
//                 pageSize,
//                 showSizeChanger: true,
//                 pageSizeOptions: ["10", "20", "50", "100"],
//                 showTotal: (total, range) => `${range[0]}–${range[1]} of ${total}`,
//               }}
//               className="admin-clean-table"
//             />
//           </div>
//         )}
//       </div>
//     </Card>
//   );
// }

// /* Small shared helpers other admin pages can reuse for consistent cell styling */
// export function StatusTag({ value, activeLabel = "Active", inactiveLabel = "Inactive" }) {
//   const isActive = value === true || value === "active";
//   return (
//     <Tag color={isActive ? "green" : "default"}>{isActive ? activeLabel : inactiveLabel}</Tag>
//   );
// }

// export function ActionTag({ value }) {
//   return <Tag color="orange">{value}</Tag>;
// }

import { Table, Empty, Spin, Card, Tag, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function AdminDataTable({
  title,
  icon,
  subtitle,
  columns = [],
  dataSource = [],
  loading = false,
  rowKey = "id",
  emptyText = "No records found.",
  extra = null,
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search...",
  pageSize = 10,
  scrollX,
  actions,
  bare = false, // when true: no outer Card wrapper, for nesting inside another Card
}) {
  const body = (
    <>
      <div className="flex flex-col gap-4 border-b border-orange-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-start gap-3">
          {icon && (
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-lg text-orange-600">
              {icon}
            </div>
          )}
          <div>
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {onSearchChange && (
            <Input
              allowClear
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={searchPlaceholder}
              prefix={<SearchOutlined className="text-gray-400" />}
              className="!w-full !rounded-xl sm:!w-64"
            />
          )}
          {extra}{" "}
          {actions && <div className="flex items-center gap-3">{actions}</div>}
        </div>
      </div>

      <div className="p-3 sm:p-5">
        {loading ? (
          <div className="flex justify-center py-16">
            <Spin size="large" />
          </div>
        ) : !dataSource.length ? (
          <div className="py-14">
            <Empty description={emptyText} />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table
              rowKey={rowKey}
              columns={columns}
              dataSource={dataSource}
              scroll={scrollX ? { x: scrollX } : undefined}
              pagination={{
                pageSize,
                showSizeChanger: true,
                pageSizeOptions: ["10", "20", "50", "100"],
                showTotal: (total, range) =>
                  `${range[0]}–${range[1]} of ${total}`,
              }}
              className="admin-clean-table"
            />
          </div>
        )}
      </div>
    </>
  );

  if (bare) return body;

  return (
    <Card
      className="!rounded-3xl !border-orange-100 !shadow-sm"
      styles={{ body: { padding: 0 } }}
    >
      {body}
    </Card>
  );
}
// /* Small shared helpers other admin pages can reuse for consistent cell styling */
export function StatusTag({
  value,
  activeLabel = "Active",
  inactiveLabel = "Inactive",
}) {
  const isActive = value === true || value === "active";
  return (
    <Tag color={isActive ? "green" : "default"}>
      {isActive ? activeLabel : inactiveLabel}
    </Tag>
  );
}

export function ActionTag({ value }) {
  return <Tag color="orange">{value}</Tag>;
}
