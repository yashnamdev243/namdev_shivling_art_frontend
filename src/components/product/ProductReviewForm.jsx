// import { useState } from "react";
// import { Button, Input, Rate } from "antd";

// import useAuth from "../../hooks/useAuth";
// import LoginRequiredModal from "../auth/LoginRequiredModal";
// import toast from "react-hot-toast";

// const { TextArea } = Input;

// export default function ProductReviewForm({
//   onSubmit,
//   submitting = false,
// }) {
//   const { isAuthenticated } = useAuth();

//   const [rating, setRating] =
//     useState(5);

//   const [comment, setComment] =
//     useState("");

//   const [loginOpen, setLoginOpen] =
//     useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // =====================================================
//     // LOGIN CHECK
//     // =====================================================

//     if (!isAuthenticated) {
//       setLoginOpen(true);
//       return;
//     }

//     // =====================================================
//     // COMMENT VALIDATION
//     // =====================================================

//     const trimmedComment =
//       comment.trim();

//     if (!trimmedComment) {
//        toast.error("Please write a review.");
//       return;
//     }
//     if (!rating) {
//     toast.error("Please select a rating.");
//     return;
//   }

//     try {
//       await onSubmit({
//         rating,
//         comment: trimmedComment,
//       });

//       // Clear only after successful submission
//       setComment("");
//       setRating(5);
//     } catch (error) {
//       // Parent/onSubmit can handle the actual error toast.
//       console.error(
//         "Review submission error:",
//         error
//       );
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}
//       className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:p-6">
        
//         <h3 className="text-lg font-semibold text-slate-900">
//           Write a Review
//         </h3>
        
//          <p className="mt-1 text-sm text-gray-500">
//           Share your experience with this product.
//         </p>


//         {/* Rating */}
//               <div className="mt-5">
//           <p className="mb-2 text-sm font-medium text-gray-600">
//             Your Rating
//           </p>

//           <Rate
//             value={rating}
//             onChange={setRating}
//             disabled={submitting}
//           />
//         </div>


//         {/* Comment */}
//         <div className="mt-5">
//           <TextArea
//             rows={4}
//             value={comment}
//             disabled={submitting}
//             onChange={(event) =>
//               setComment(event.target.value)
//             }
//             placeholder="Share your experience with this product..."
//             maxLength={1000}
//             showCount
//           />
//         </div>

//         {/* Submit */}
//         <Button
//           htmlType="submit"
//           type="primary"
//           loading={submitting}
//           className="!mt-4 !h-11 !rounded-xl !border-0 !bg-gradient-to-r !from-orange-500 !to-amber-500 !font-semibold"
//         >
//           Submit Review
//         </Button>
//       </form>

//       <LoginRequiredModal
//         open={loginOpen}
//         onClose={() => setLoginOpen(false)}
//         title="Login to write a review"
//         description="Please login before submitting a review. This helps us keep reviews authentic and connected to real customers."
//       />
//     </>
//   );
// }



import { useState } from "react";
import { Button, Input, Rate } from "antd";

import useAuth from "../../hooks/useAuth";
import LoginRequiredModal from "../auth/LoginRequiredModal";
import toast from "react-hot-toast";

const { TextArea } = Input;

export default function ProductReviewForm({
  onSubmit,
  submitting = false,
}) {
  const { isAuthenticated } = useAuth();

  const [rating, setRating] =
    useState(5);

  const [comment, setComment] =
    useState("");

  const [loginOpen, setLoginOpen] =
    useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // =====================================================
    // LOGIN CHECK
    // =====================================================

    if (!isAuthenticated) {
      setLoginOpen(true);
      return;
    }

    // =====================================================
    // COMMENT VALIDATION
    // =====================================================

    const trimmedComment =
      comment.trim();

    if (!trimmedComment) {
       toast.error("Please write a review.");
      return;
    }
    if (!rating) {
    toast.error("Please select a rating.");
    return;
  }

    try {
      await onSubmit({
        rating,
        comment: trimmedComment,
      });

      // Clear only after successful submission
      setComment("");
      setRating(5);
    } catch (error) {
      // Parent/onSubmit can handle the actual error toast.
      console.error(
        "Review submission error:",
        error
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}
      className="rounded-2xl border border-[#1C1A17]/[0.06] bg-white p-5 shadow-[0_4px_20px_rgba(28,26,23,0.04)] sm:p-6">

        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A8823C]">
          Your Experience
        </span>

        <h3 className="mt-1.5 text-lg font-semibold text-[#1C1A17]">
          Share Your Experience
        </h3>

         <p className="mt-1 text-sm text-[#6B6459]">
          Tell us about your experience with this handcrafted piece.
        </p>


        {/* Rating */}
              <div className="mt-5 rounded-xl border border-[#1C1A17]/[0.06] bg-[#FBF7EF] p-4">
          <p className="mb-2 text-sm font-medium text-[#4A453D]">
            Your Rating
          </p>

          <div className="flex items-center gap-3">
            <Rate
              value={rating}
              onChange={setRating}
              disabled={submitting}
              className="text-lg [&_.ant-rate-star-full_svg]:!fill-[#A8823C] [&_.ant-rate-star-zero_svg]:!fill-[#1C1A17]/10"
            />
            <span className="text-xs font-semibold text-[#8A8377]">{rating}/5</span>
          </div>
        </div>


        {/* Comment */}
        <div className="mt-5">
          <TextArea
            rows={4}
            value={comment}
            disabled={submitting}
            onChange={(event) =>
              setComment(event.target.value)
            }
            placeholder="Share your experience with this product..."
            maxLength={1000}
            showCount
            className="!rounded-xl !border-[#1C1A17]/10 !bg-[#FBF7EF] !p-3.5 focus-within:!border-[#A8823C]/50 focus-within:!shadow-[0_0_0_3px_rgba(168,130,60,0.1)]"
          />
        </div>

        {/* Submit */}
        <Button
          htmlType="submit"
        //  type="primary"
          loading={submitting}
          className="!mt-4 !flex !h-11 !items-center !rounded-xl !border-0 !bg-[#1C1A17] !font-medium !shadow-none transition-all duration-200 hover:!-translate-y-0.5 hover:!bg-[#2A2620] !text-[#D4AF6A]"
        >
          <span className="flex items-center gap-2">
            Submit Review
            <span className="text-[#D4AF6A]">→</span>
          </span>
        </Button>
      </form>

      <LoginRequiredModal
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        title="Login to write a review"
        description="Please login before submitting a review. This helps us keep reviews authentic and connected to real customers."
      />
    </>
  );
}