// import { useState } from "react";
// import { Button, Input, Rate } from "antd";

// import useAuth from "../../hooks/useAuth";
// import LoginRequiredModal from "../auth/LoginRequiredModal";

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

//     if (!isAuthenticated) {
//       setLoginOpen(true);
//       return;
//     }

//     if (!comment.trim()) {
//       return;
//     }

//     await onSubmit({
//       rating,
//       comment: comment.trim(),
//     });

//     setComment("");
//     setRating(5);
//   };

//   return (
//     <>
//       <form
//         onSubmit={handleSubmit}
//         className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:p-6"
//       >
//         <h3 className="text-lg font-bold text-slate-900">
//           Write a Review
//         </h3>

//         <div className="mt-4">
//           <p className="mb-2 text-sm font-medium text-gray-600">
//             Your Rating
//           </p>

//           <Rate
//             value={rating}
//             onChange={setRating}
//           />
//         </div>

//         <div className="mt-4">
//           <TextArea
//             rows={4}
//             value={comment}
//             onChange={(event) =>
//               setComment(event.target.value)
//             }
//             placeholder="Share your experience with this product..."
//             maxLength={1000}
//             showCount
//           />
//         </div>

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
      className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:p-6">
        
        <h3 className="text-lg font-semibold text-slate-900">
          Write a Review
        </h3>
        
         <p className="mt-1 text-sm text-gray-500">
          Share your experience with this product.
        </p>


        {/* Rating */}
              <div className="mt-5">
          <p className="mb-2 text-sm font-medium text-gray-600">
            Your Rating
          </p>

          <Rate
            value={rating}
            onChange={setRating}
            disabled={submitting}
          />
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
          />
        </div>

        {/* Submit */}
        <Button
          htmlType="submit"
          type="primary"
          loading={submitting}
          className="!mt-4 !h-11 !rounded-xl !border-0 !bg-gradient-to-r !from-orange-500 !to-amber-500 !font-semibold"
        >
          Submit Review
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