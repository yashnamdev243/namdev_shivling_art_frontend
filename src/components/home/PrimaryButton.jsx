import { Button } from "antd";

export default function PrimaryButton({
  children,
  ...props
}) {
  return (
    <Button
      type="primary"
      size="large"
      className="!bg-amber-700 hover:!bg-amber-800 !border-none !rounded-full px-8"
      {...props}
    >
      {children}
    </Button>
  );
}