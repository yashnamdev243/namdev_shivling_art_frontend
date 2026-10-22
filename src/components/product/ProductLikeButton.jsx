import { useState } from "react";
import { Button, Avatar, Tooltip } from "antd";
import { LikeFilled, LikeOutlined, UserOutlined } from "@ant-design/icons";
import useAuth from "../../hooks/useAuth";
import useProductLike from "../../hooks/useProductLike";
import LoginRequiredModal from "../auth/LoginRequiredModal";

export default function ProductLikeButton({ productId }) {
  const { isAuthenticated } = useAuth();
  const { liked, likeCount, users, loading, toggleLike } =
    useProductLike(productId);
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
      <div className="flex w-full items-center justify-between gap-6">
        {users?.length > 0 && (
          <Tooltip title={users.map((u) => u.name).join(", ")}>
            <div className="flex items-center gap-2 text-xs text-[#6B6459]">
              <Avatar.Group max={{ count: 3 }} size="small">
                {users.map((u) => (
                  <Avatar
                    key={u.id}
                    src={u.avatar || undefined}
                    icon={<UserOutlined />}
                    className="!border !border-[#D4AF6A]/60 !bg-[#F7F2E7] !text-[#D4AF6A]"
                  >
                    {u.name?.charAt(0)?.toUpperCase()}
                  </Avatar>
                ))}
              </Avatar.Group>
              <span>
                Liked by{" "}
                {users
                  .slice(0, 2)
                  .map((u) => u.name)
                  .join(", ")}
                {likeCount > 2 ? ` +${likeCount - 2} more` : ""}
              </span>
            </div>
          </Tooltip>
        )}
        <div className="ml-auto flex shrink-0 items-center">
          <Button
            loading={loading}
            onClick={handleLike}
            icon={
              liked ? (
                <LikeFilled className="!text-[13px] text-[#A8823C]" />
              ) : (
                <LikeOutlined className="!text-[13px] text-[#1C1A17]/60" />
              )
            }
            className="!mb-2.5 !inline-flex !h-8 !items-center !gap-1.5 !rounded-full !border !border-[#1C1A17]/10 !bg-transparent !px-3 !text-xs !font-medium !text-[#1C1A17] !shadow-none transition-colors duration-200 hover:!border-[#A8823C]/40 hover:!bg-[#A8823C]/[0.05] sm:!mb-3"
            aria-pressed={liked}
          >
            {likeCount} {likeCount === 1 ? "Like" : "Likes"}
          </Button>
        </div>
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
