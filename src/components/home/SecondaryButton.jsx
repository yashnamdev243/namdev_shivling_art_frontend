import { Button } from "antd";

export default function SecondaryButton({
  children,
  ...props
}) {
  return (
    <Button
      size="large"
      className="rounded-full border-amber-700 text-amber-700"
      {...props}
    >
      {children}
    </Button>
  );
}