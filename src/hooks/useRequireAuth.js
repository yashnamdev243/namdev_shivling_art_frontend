

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