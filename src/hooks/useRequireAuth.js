// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useSelector } from "react-redux";

// export default function useRequireAuth() {
//   const [showLoginModal, setShowLoginModal] = useState(false);

//   const { isAuthenticated, user } = useSelector(
//     (state) => state.auth
//   );

//   const requireAuth = (action) => {
//     if (isAuthenticated) {
//       return true;
//     }

//     toast.error("Please login to continue.");

//     // Save the action so it can be continued after login.
//     if (action) {
//       sessionStorage.setItem(
//         "pendingAuthAction",
//         JSON.stringify(action)
//       );
//     }

//     setShowLoginModal(true);

//     return false;
//   };

//   const closeLoginModal = () => {
//     setShowLoginModal(false);
//   };

//   return {
//     isAuthenticated,
//     user,
//     showLoginModal,
//     setShowLoginModal,
//     closeLoginModal,
//     requireAuth,
//   };
// }


import { useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

export default function useRequireAuth() {
  const [showLoginModal, setShowLoginModal] =
    useState(false);

  const auth = useSelector(
    (state) => state.auth
  );

  const token =
    auth?.token ||
    localStorage.getItem("token");

  const isAuthenticated =
    Boolean(token);

  const requireAuth = () => {
    if (isAuthenticated) {
      return true;
    }

    toast.error(
      "Please login to continue."
    );

    setShowLoginModal(true);

    return false;
  };

  return {
    isAuthenticated,
    showLoginModal,
    setShowLoginModal,
    requireAuth,
  };
}