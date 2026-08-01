// import { Link } from "react-router-dom";
// import { Badge } from "antd";
// import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
// import { useCart } from "../../context/CartContext";
// import { useWishlist } from "../../context/WishlistContext";

// /**
//  * Standalone header widget: wishlist + cart icons with live count badges.
//  * Import this into your existing Navbar/Header component, e.g.:
//  *
//  *   import CartWishlistIcons from "../common/CartWishlistIcons";
//  *   ...
//  *   <CartWishlistIcons />
//  *
//  * Requires <CartProvider> and <WishlistProvider> to be mounted above it
//  * in the tree (see src/context/CartContext.jsx and WishlistContext.jsx).
//  */
// export default function CartWishlistIcons({ className = "" }) {
//   const { cartCount } = useCart();
//   const { wishlistCount } = useWishlist();

//   return (
//     <div className={`flex items-center gap-3 sm:gap-4 ${className}`}>
//       <Link to="/wishlist" aria-label="Wishlist" className="relative">
//         <Badge
//           count={wishlistCount}
//           size="small"
//           offset={[-2, 2]}
//           color="#FF0000"
//         >
//           <span className="flex h-10 w-10 items-center justify-center rounded-full text-xl transition bg-orange-50 text-orange-600 shadow-lg">
//             <HeartOutlined aria-hidden="true" />
//           </span>
//         </Badge>
//       </Link>

//       <Link to="/cart" aria-label="Cart" className="relative">
//         <Badge count={cartCount} size="small" offset={[-2, 2]} color="#FF0000">
//           <span className="flex h-10 w-10 items-center justify-center rounded-full text-xl  transition bg-orange-50 text-orange-600 shadow-lg">
//             <ShoppingCartOutlined aria-hidden="true" />
//           </span>
//         </Badge>
//       </Link>
//     </div>
//   );
// }


import { Link } from "react-router-dom";
import { Badge } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { useWishlist } from "../../context/WishlistContext";

/**
 * Header wishlist icon with a live count badge. Kept the same component
 * name (CartWishlistIcons) so Navbar.jsx doesn't need to change its
 * import -- cart has been removed, this now only renders wishlist.
 */
export default function CartWishlistIcons({ className = "" }) {
  const { wishlistCount } = useWishlist();

  return (
    <div className={`flex items-center ${className}`}>
      <Link to="/wishlist" aria-label="Wishlist" className="relative">
        <Badge count={wishlistCount} size="small" offset={[-2, 2]} color="#f97316">
          <span className="flex h-10 w-10 items-center justify-center rounded-full text-xl text-slate-700 transition hover:bg-orange-50 hover:text-orange-600">
            <HeartOutlined aria-hidden="true" />
          </span>
        </Badge>
      </Link>
    </div>
  );
}