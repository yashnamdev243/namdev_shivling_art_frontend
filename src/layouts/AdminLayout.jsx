import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminSidebar from "../components/admin/AdminSidebar";

/**
 * Layout shell for every /admin/* route (wrapped by <ProtectedRoute />
 * in AppRoutes.jsx, so this never renders for a logged-out visitor).
 */
export default function AdminLayout() {
  const collapsed = useSelector((state) => state.ui.adminSidebarCollapsed);

  return (
    <div className="flex min-h-screen bg-stone-50">
      <AdminSidebar />
      <main
        className={`flex-1 overflow-x-hidden px-5 py-8 transition-all duration-300 sm:px-8 ${
          collapsed ? "max-w-[calc(100vw-5rem)]" : "max-w-[calc(100vw-16rem)]"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
}
