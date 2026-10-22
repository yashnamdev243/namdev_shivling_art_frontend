// import { Link } from "react-router-dom";
// import { Badge } from "antd";
// import { HeartOutlined } from "@ant-design/icons";
// import { useWishlist } from "../../hooks/useWishlist";

// /**
//  * Header wishlist icon with a live count badge. Kept the same component
//  * name (CartWishlistIcons) so Navbar.jsx doesn't need to change its
//  * import -- cart has been removed, this now only renders wishlist.
//  */
// export default function CartWishlistIcons({ className = "" }) {
//   const { wishlistCount } = useWishlist();

//   return (
//     <div className={`flex items-center ${className}`}>
//       <Link to="/wishlist" aria-label="Wishlist" className="relative">
//         <Badge count={wishlistCount} size="small" offset={[-2, 2]} color="#f97316">
//           <span className="flex h-10 w-10 items-center justify-center rounded-full text-xl text-slate-700 transition hover:bg-orange-50 hover:text-orange-600">
//             <HeartOutlined aria-hidden="true" />
//           </span>
//         </Badge>
//       </Link>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { Badge } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { useWishlist } from "../../hooks/useWishlist";

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
        <Badge count={wishlistCount} size="small" offset={[-2, 2]} color="#A8823C">
          <span className="flex h-10 w-10 items-center justify-center rounded-full text-[18px] text-[#1C1A17]/70 transition-all duration-200 hover:scale-105 hover:bg-[#1C1A17]/[0.04] hover:text-[#A8823C]">
            <HeartOutlined aria-hidden="true" />
          </span>
        </Badge>
      </Link>
    </div>
  );
}