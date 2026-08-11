// import { useState } from "react";
// import {
//   HeartFilled,
//   HeartOutlined,
// } from "@ant-design/icons";
// import { Button } from "antd";

// import { useWishlist } from "../../hooks/useWishlist";
// import { useAuth } from "../../hooks/useAuth";
// import LoginRequiredModal from "../auth/LoginRequiredModal";

// export default function WishlistButton({
//   product,
//   size = "middle",
// }) {
//   const { isAuthenticated } = useAuth();

//   const {
//     isWishlisted,
//     toggleWishlist,
//   } = useWishlist();

//   const [loginOpen, setLoginOpen] =
//     useState(false);

//   const productId =
//     product?._id || product?.id;

//   const active = isWishlisted(productId);

//   const handleClick = async () => {
//     if (!isAuthenticated) {
//       setLoginOpen(true);
//       return;
//     }

//     await toggleWishlist(product);
//   };

//   return (
//     <>
//       <Button
//         size={size}
//         shape="circle"
//         aria-label={
//           active
//             ? "Remove from wishlist"
//             : "Add to wishlist"
//         }
//         onClick={handleClick}
//         icon={
//           active ? (
//             <HeartFilled className="text-red-500" />
//           ) : (
//             <HeartOutlined />
//           )
//         }
//       />

//       <LoginRequiredModal
//         open={loginOpen}
//         onClose={() => setLoginOpen(false)}
//         title="Login to save this product"
//         description="Login to add products to your wishlist and access them from any device."
//       />
//     </>
//   );
// }


import { useState } from "react";

import {
  HeartFilled,
  HeartOutlined,
} from "@ant-design/icons";

import { Button } from "antd";

import { useWishlist } from "../../hooks/useWishlist";
import useAuth from "../../hooks/useAuth";

import LoginRequiredModal from "../auth/LoginRequiredModal";

export default function WishlistButton({
  product,
  size = "middle",
}) {
  const { isAuthenticated } =
    useAuth();

  const {
    isWishlisted,
    toggleWishlist,
  } = useWishlist();

  const [loginOpen, setLoginOpen] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const productId =
    product?._id || product?.id;

  const active =
    Boolean(productId) &&
    isWishlisted(productId);

  const handleClick = async (event) => {
    event?.preventDefault();
    event?.stopPropagation();

    // =====================================================
    // LOGIN CHECK
    // =====================================================

    if (!isAuthenticated) {
      setLoginOpen(true);
      return;
    }

    if (!productId || loading) {
      return;
    }

    try {
      setLoading(true);

      await toggleWishlist(product);
    } catch (error) {
      console.error(
        "Wishlist error:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        size={size}
        shape="circle"
        loading={loading}
        aria-label={
          active
            ? "Remove from wishlist"
            : "Add to wishlist"
        }
        aria-pressed={active}
        onClick={handleClick}
        icon={
          active ? (
            <HeartFilled className="text-red-500" />
          ) : (
            <HeartOutlined />
          )
        }
      />

      <LoginRequiredModal
        open={loginOpen}
        onClose={() =>
          setLoginOpen(false)
        }
        title="Login to save this product"
        description="Login to add products to your wishlist and access them from any device."
      />
    </>
  );
}