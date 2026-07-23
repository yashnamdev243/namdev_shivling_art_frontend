import { Button, Result } from "antd";
import { ReloadOutlined } from "@ant-design/icons";

/**
 * Shown when a query fails (API down, network error, etc). Distinct
 * from EmptyState -- this means "something went wrong", not "there's
 * genuinely no data".
 */
export default function ErrorState({ message, onRetry }) {
  return (
    <Result
      status="error"
      title="Couldn't load this"
      subTitle={
        message || "Please check your connection and try again."
      }
      extra={
        onRetry && (
          <Button icon={<ReloadOutlined />} onClick={onRetry}>
            Try again
          </Button>
        )
      }
    />
  );
}
