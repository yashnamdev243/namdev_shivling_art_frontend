import { useState } from "react";
import { Button, Avatar, Tooltip } from "antd";
import { LikeFilled, LikeOutlined, UserOutlined } from "@ant-design/icons";
import useAuth from "../../hooks/useAuth";
import useProductLike from "../../hooks/useProductLike";
import LoginRequiredModal from "../auth/LoginRequiredModal";

export default function ProductLikeButton({ productId }) {
  const { isAuthenticated } = useAuth();
  const { liked, likeCount, users, loading, toggleLike } = useProductLike(productId);
  const [loginOpen, setLoginOpen] = useState(false);

  const handleLike = async () => {
    if (!isAuthenticated) {
      setLoginOpen(true);
      return;
    }
    await toggleLike();
  };

  return (
    <>
      <div className="inline-flex flex-col items-start gap-2">
        <Button
          loading={loading}
          onClick={handleLike}
          icon={liked ? <LikeFilled className="text-orange-600" /> : <LikeOutlined />}
          className="!rounded-full"
          aria-pressed={liked}
        >
          {likeCount} {likeCount === 1 ? "Like" : "Likes"}
        </Button>

        {users?.length > 0 && (
          <Tooltip title={users.map((u) => u.name).join(", ")}>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Avatar.Group max={{ count: 4 }} size="small">
                {users.map((u) => (
                  <Avatar key={u.id} src={u.avatar || undefined} icon={<UserOutlined />}>
                    {u.name?.charAt(0)?.toUpperCase()}
                  </Avatar>
                ))}
              </Avatar.Group>
              <span>
                Liked by {users.slice(0, 2).map((u) => u.name).join(", ")}
                {likeCount > 2 ? ` +${likeCount - 2} more` : ""}
              </span>
            </div>
          </Tooltip>
        )}
      </div>

      <LoginRequiredModal
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        title="Login to like this product"
        description="Please login before liking a product. Your like will be saved to your account."
      />
    </>
  );
}
