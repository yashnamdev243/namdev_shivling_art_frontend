import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import authService from "../services/authService";
import { loginSuccess, logout as logoutAction } from "../redux/authSlice";
import { ROUTES } from "../config/routes";

/**
 * Single place that owns "is the admin logged in" logic -- wraps the
 * redux auth slice + authService so components never talk to either
 * directly.
 */
export function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token, isAuthenticated } = useSelector((state) => state.auth);

  const loginMutation = useMutation({
    mutationFn: (credentials) => authService.login(credentials),
    onSuccess: (data) => {
      dispatch(loginSuccess({ user: data.user, token: data.token }));
      toast.success(`Welcome back, ${data.user?.name || "Admin"}`);
      navigate(ROUTES.adminDashboard);
    },
    onError: (err) => {
      toast.error(err.message || "Invalid email or password");
    },
  });

  const logout = useCallback(async () => {
    await authService.logout();
    dispatch(logoutAction());
    navigate(ROUTES.adminLogin);
  }, [dispatch, navigate]);

  return {
    user,
    token,
    isAuthenticated,
    login: loginMutation.mutateAsync,
    isLoggingIn: loginMutation.isPending,
    logout,
  };
}

export default useAuth;
