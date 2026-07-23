import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTES } from "../../config/routes";

/**
 * Wrap admin-only routes with this in AppRoutes.jsx. Redirects to the
 * admin login page (and remembers where the user was headed) if
 * there's no valid session.
 */
export default function ProtectedRoute() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.adminLogin} state={{ from: location }} replace />;
  }

  return <Outlet />;
}
