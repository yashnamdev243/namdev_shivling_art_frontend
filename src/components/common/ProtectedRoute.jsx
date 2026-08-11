import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAdminAuth } from "../../context/AdminAuthContext";
import { ROUTES } from "../../config/routes";

export default function ProtectedRoute() {
  const { isAuthenticated, loading } = useAdminAuth();
  const location = useLocation();

  if (loading) return <div className="flex min-h-screen items-center justify-center">Checking admin session…</div>;
  if (!isAuthenticated) return <Navigate to={ROUTES.adminLogin} state={{ from: location }} replace />;
  return <Outlet />;
}
