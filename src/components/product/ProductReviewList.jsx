


// import {
//   Avatar,
//   Empty,
//   Rate,
//   Spin,
// } from "antd";

// import {
//   UserOutlined,
// } from "@ant-design/icons";

// export default function ProductReviewList({
//   reviews = [],
//   loading = false,
// }) {
//   // =====================================================
//   // LOADING
//   // =====================================================

//   if (loading) {
//     return (
//       <div className="flex justify-center py-10">
//         <Spin size="large" />
//       </div>
//     );
//   }

//   // =====================================================
//   // EMPTY
//   // =====================================================

//   if (!reviews.length) {
//     return (
//       <div className="rounded-2xl border border-orange-100 bg-white p-6">
//         <Empty
//           description="No reviews yet. Be the first to review this product."
//         />
//       </div>
//     );
//   }

//   // =====================================================
//   // REVIEWS
//   // =====================================================

//   return (
//     <div className="space-y-4">
//       {reviews.map((review, index) => {
//         const reviewId =
//           review?.id ||
//           review?._id ||
//           `${review?.user_id || "user"}-${index}`;

//         // -----------------------------------------------
//         // USER
//         // -----------------------------------------------

//         const userName =
//           review?.user?.name ||
//           review?.user_name ||
//           review?.name ||
//           "Customer";

//         const userCity =
//           review?.user?.city ||
//           review?.user_city ||
//           review?.city ||
//           "";

//         const avatar =
//           review?.user?.avatar ||
//           review?.avatar ||
//           undefined;

//         // -----------------------------------------------
//         // RATING
//         // -----------------------------------------------

//         const rating = Math.min(
//           5,
//           Math.max(
//             0,
//             Number(review?.rating) || 0
//           )
//         );

//         // -----------------------------------------------
//         // DATE
//         // -----------------------------------------------

//         const createdAt =
//           review?.createdAt ||
//           review?.created_at;

//         return (
//           <article
//             key={reviewId}
//             className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition hover:shadow-md"
//           >
//             <div className="flex gap-4">

//               {/* Avatar */}

//               <Avatar
//                 size={48}
//                 src={avatar}
//                 icon={<UserOutlined />}
//                 className="shrink-0"
//               />

//               {/* Content */}

//               <div className="min-w-0 flex-1">

//                 {/* User + Rating */}

//                 <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">

//                   {/* User */}

//                   <div>
//                     <h4 className="font-semibold text-slate-900">
//                       {userName}
//                     </h4>

//                     {userCity && (
//                       <p className="text-xs text-gray-400">
//                         {userCity}
//                       </p>
//                     )}
//                   </div>

//                   {/* Rating */}

//                   <div className="flex items-center gap-2">
//                     <Rate
//                       disabled
//                       allowHalf
//                       value={rating}
//                       className="text-sm"
//                     />

//                     <span className="text-xs font-semibold text-gray-500">
//                       {rating}/5
//                     </span>
//                   </div>
//                 </div>

//                 {/* Comment */}

//                 <p className="mt-3 text-sm leading-7 text-gray-600">
//                   {review?.comment ||
//                     "No comment provided."}
//                 </p>

//                 {/* Date */}

//                 {createdAt && (
//                   <p className="mt-3 text-xs text-gray-400">
//                     Reviewed on{" "}
//                     {new Date(
//                       createdAt
//                     ).toLocaleDateString(
//                       "en-IN",
//                       {
//                         day: "2-digit",
//                         month: "short",
//                         year: "numeric",
//                       }
//                     )}
//                   </p>
//                 )}

//               </div>
//             </div>
//           </article>
//         );
//       })}
//     </div>
//   );
// }



import {
  Avatar,
  Empty,
  Rate,
  Spin,
} from "antd";

import {
  UserOutlined,
} from "@ant-design/icons";

export default function ProductReviewList({
  reviews = [],
  loading = false,
}) {
  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <div className="flex justify-center py-14">
        <Spin size="large" />
      </div>
    );
  }

  // =====================================================
  // EMPTY
  // =====================================================

  if (!reviews.length) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-dashed border-[#D4AF6A]/30 bg-[#FBF7EF] px-6 py-14 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF6A]/25 bg-[#A8823C]/[0.06] text-[#A8823C]">
          <UserOutlined />
        </div>
        <h4 className="mt-4 text-base font-semibold text-[#1C1A17]">No stories yet</h4>
        <p className="mt-1.5 max-w-xs text-sm text-[#6B6459]">
          Be the first customer to share your experience with this piece.
        </p>
      </div>
    );
  }

  // =====================================================
  // REVIEWS
  // =====================================================

  return (
    <div className="space-y-4">
      {reviews.map((review, index) => {
        const reviewId =
          review?.id ||
          review?._id ||
          `${review?.user_id || "user"}-${index}`;

        // -----------------------------------------------
        // USER
        // -----------------------------------------------

        const userName =
          review?.user?.name ||
          review?.user_name ||
          review?.name ||
          "Customer";

        const userCity =
          review?.user?.city ||
          review?.user_city ||
          review?.city ||
          "";

        const avatar =
          review?.user?.avatar ||
          review?.avatar ||
          undefined;

        // -----------------------------------------------
        // RATING
        // -----------------------------------------------

        const rating = Math.min(
          5,
          Math.max(
            0,
            Number(review?.rating) || 0
          )
        );

        // -----------------------------------------------
        // DATE
        // -----------------------------------------------

        const createdAt =
          review?.createdAt ||
          review?.created_at;

        return (
          <article
            key={reviewId}
            className="rounded-2xl border border-[#1C1A17]/[0.06] bg-white p-5 transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(28,26,23,0.06)]"
          >
            <div className="flex gap-4">

              {/* Avatar */}
                <div>
              <div className="shrink-0 rounded-full border-2 border-[#D4AF6A]/40 p-0.5">
                <Avatar
                  size={44}
                  src={avatar}
                  icon={<UserOutlined />}
                  className="!bg-[#F7F2E7] !text-[#A8823C]"
                />
              </div>
              </div>

              {/* Content */}

              <div className="min-w-0 flex-1">

                {/* User + Rating */}

                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">

                  {/* User */}

                  <div>
                    <h4 className="font-semibold text-[#1C1A17]">
                      {userName}
                    </h4>

                    {userCity && (
                      <p className="text-xs text-[#8A8377]">
                        {userCity}
                      </p>
                    )}
                  </div>

                  {/* Rating */}

                  <div className="flex items-center gap-2">
                    <Rate
                      disabled
                      allowHalf
                      value={rating}
                      className="text-sm [&_.ant-rate-star-full_svg]:!fill-[#A8823C] [&_.ant-rate-star-half_svg]:!fill-[#A8823C]"
                    />

                    <span className="text-xs font-semibold text-[#8A8377]">
                      {rating}/5
                    </span>
                  </div>
                </div>

                {/* Comment */}

                <p className="mt-3 text-[15px] leading-[1.75] text-[#4A453D]">
                  {review?.comment ||
                    "No comment provided."}
                </p>

                {/* Date */}

                {createdAt && (
                  <p className="mt-3 text-xs text-[#8A8377]">
                    Reviewed on{" "}
                    {new Date(
                      createdAt
                    ).toLocaleDateString(
                      "en-IN",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </p>
                )}

              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}