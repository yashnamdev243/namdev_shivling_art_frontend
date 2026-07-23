import { Empty, Button } from "antd";

/**
 * Shown whenever a list has genuinely nothing in it (no products match
 * the filter, no categories yet, etc). Always give the person a next
 * action instead of a dead end.
 */
export default function EmptyState({
  title = "Nothing here yet",
  description,
  actionLabel,
  onAction,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <Empty description={false} />
      <h3 className="mt-4 text-lg font-semibold text-stone-800">{title}</h3>
      {description && (
        <p className="mt-2 max-w-sm text-sm text-gray-500">{description}</p>
      )}
      {actionLabel && onAction && (
        <Button type="primary" className="!bg-brand-700 mt-6" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
