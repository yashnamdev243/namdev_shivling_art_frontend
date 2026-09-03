

// import { useState } from "react";

// import {
//   HeartFilled,
//   HeartOutlined,
// } from "@ant-design/icons";

// import { Button } from "antd";

// import { useWishlist } from "../../hooks/useWishlist";
// import useAuth from "../../hooks/useAuth";

// import LoginRequiredModal from "../auth/LoginRequiredModal";

// export default function WishlistButton({
//   product,
//   size = "middle",
// }) {
//   const { isAuthenticated } =
//     useAuth();

//   const {
//     isWishlisted,
//     toggleWishlist,
//   } = useWishlist();

//   const [loginOpen, setLoginOpen] =
//     useState(false);

//   const [loading, setLoading] =
//     useState(false);

//   const productId =
//     product?._id || product?.id;

//   const active =
//     Boolean(productId) &&
//     isWishlisted(productId);

//   const handleClick = async (event) => {
//     event?.preventDefault();
//     event?.stopPropagation();

//     // =====================================================
//     // LOGIN CHECK
//     // =====================================================

//     if (!isAuthenticated) {
//       setLoginOpen(true);
//       return;
//     }

//     if (!productId || loading) {
//       return;
//     }

//     try {
//       setLoading(true);

//       await toggleWishlist(product);
//     } catch (error) {
//       console.error(
//         "Wishlist error:",
//         error
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Button
//         size={size}
//         shape="circle"
//         loading={loading}
//         aria-label={
//           active
//             ? "Remove from wishlist"
//             : "Add to wishlist"
//         }
//         aria-pressed={active}
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
//         onClose={() =>
//           setLoginOpen(false)
//         }
//         title="Login to save this product"
//         description="Login to add products to your wishlist and access them from any device."
//       />
//     </>
//   );
// }



// import { useState } from "react";

// import {
//   HeartFilled,
//   HeartOutlined,
// } from "@ant-design/icons";

// import { Button } from "antd";

// import { useWishlist } from "../../hooks/useWishlist";
// import useAuth from "../../hooks/useAuth";

// import LoginRequiredModal from "../auth/LoginRequiredModal";

// export default function WishlistButton({
//   product,
//   size = "middle",
// }) {
//   const { isAuthenticated } =
//     useAuth();

//   const {
//     isWishlisted,
//     toggleWishlist,
//   } = useWishlist();

//   const [loginOpen, setLoginOpen] =
//     useState(false);

//   const [loading, setLoading] =
//     useState(false);

//   const productId =
//     product?._id || product?.id;

//   const active =
//     Boolean(productId) &&
//     isWishlisted(productId);

//   const handleClick = async (event) => {
//     event?.preventDefault();
//     event?.stopPropagation();

//     // =====================================================
//     // LOGIN CHECK
//     // =====================================================

//     if (!isAuthenticated) {
//       setLoginOpen(true);
//       return;
//     }

//     if (!productId || loading) {
//       return;
//     }

//     try {
//       setLoading(true);

//       await toggleWishlist(product);
//     } catch (error) {
//       console.error(
//         "Wishlist error:",
//         error
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Button
//         size={size}
//         shape="circle"
//         loading={loading}
//         aria-label={
//           active
//             ? "Remove from wishlist"
//             : "Add to wishlist"
//         }
//         aria-pressed={active}
//         onClick={handleClick}
//         icon={
//           active ? (
//             <HeartFilled className="!text-[15px] text-[#9B4444] transition-transform duration-200" />
//           ) : (
//             <HeartOutlined className="!text-[15px] text-[#1C1A17]/60 transition-transform duration-200" />
//           )
//         }
//         className={`!flex !h-8 !w-8 !items-center !justify-center !border-none !bg-transparent !shadow-none transition-transform duration-200 hover:!scale-110 hover:!bg-transparent ${
//           active ? "!scale-105" : ""
//         }`}
//       />

//       <LoginRequiredModal
//         open={loginOpen}
//         onClose={() =>
//           setLoginOpen(false)
//         }
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
            <HeartFilled className="!text-[15px] text-[#9B4444] transition-transform duration-200" />
          ) : (
            <HeartOutlined className="!text-[15px] text-[#1C1A17]/60 transition-transform duration-200" />
          )
        }
        className={`!flex !h-8 !w-8 !items-center !justify-center !border-none !shadow-none transition-all duration-200 hover:!scale-110 hover:!shadow-sm ${
          active
            ? "!scale-105 !bg-[#9B4444]/[0.08] hover:!bg-[#9B4444]/[0.12]"
            : "!bg-transparent hover:!bg-[#1C1A17]/[0.05]"
        }`}
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