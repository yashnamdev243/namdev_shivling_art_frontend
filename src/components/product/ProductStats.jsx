// import {
//   HeartFilled,
//   MessageOutlined,
//   StarFilled,
// } from "@ant-design/icons";

// export default function ProductStats({
//   likeCount = 0,
//   reviewCount = 0,
//   rating = 0,
// }) {
//   return (
//     <div className="flex flex-wrap items-center gap-3 text-sm">
//       <div className="flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1.5 text-red-600">
//         <HeartFilled />
//         <span>{likeCount}</span>
//       </div>

//       <div className="flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-amber-600">
//         <StarFilled />
//         <span>
//           {Number(rating || 0).toFixed(1)}
//         </span>
//       </div>

//       <div className="flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1.5 text-orange-600">
//         <MessageOutlined />
//         <span>{reviewCount}</span>
//       </div>
//     </div>
//   );
// }


import {
  HeartFilled,
  MessageOutlined,
  StarFilled,
} from "@ant-design/icons";

export default function ProductStats({
  likeCount = 0,
  reviewCount = 0,
  rating = 0,
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">

      {/* Likes */}
      <div className="flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1.5 text-red-500">
        <HeartFilled />

        <span>
          {Number(likeCount) || 0}
        </span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-amber-600">
        <StarFilled />

        <span>
          {Number(rating || 0).toFixed(1)}
        </span>
      </div>

      {/* Reviews */}
      <div className="flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1.5 text-orange-600">
        <MessageOutlined />

        <span>
          {Number(reviewCount) || 0}
        </span>
      </div>

    </div>
  );
}