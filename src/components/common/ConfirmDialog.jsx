import { Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

const { confirm } = Modal;

/**
 * Consistent "are you sure?" dialog for destructive actions (delete
 * product, delete category, ...). Call it, don't render it:
 *
 *   confirmDelete({ name: "This Shivling", onConfirm: () => mutate(id) });
 */
export function confirmDelete({ name = "this item", onConfirm }) {
  confirm({
    title: `Delete ${name}?`,
    icon: <ExclamationCircleFilled className="!text-red-500" />,
    content: "This action cannot be undone.",
    okText: "Delete",
    okType: "danger",
    cancelText: "Cancel",
    onOk: onConfirm,
  });
}
