// import { Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
// import AdminSidebar from "../components/admin/AdminSidebar";
// /**
//  * Layout shell for every /admin/* route (wrapped by <ProtectedRoute />
//  * in AppRoutes.jsx, so this never renders for a logged-out visitor).
//  */
// export default function AdminLayout() {
//   const collapsed = useSelector((state) => state.ui.adminSidebarCollapsed);

//   return (
//     <div className="flex min-h-screen bg-stone-50">
//       <AdminSidebar />
//       <main
//         className={`flex-1 overflow-x-hidden px-5 py-8 transition-all duration-300 sm:px-8 ${
//           collapsed ? "max-w-[calc(100vw-5rem)]" : "max-w-[calc(100vw-16rem)]"
//         }`}
//       >
//         <Outlet />
//       </main>
//     </div>
//   );
// }

import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { MenuOutlined } from "@ant-design/icons";
import AdminSidebar from "../components/admin/AdminSidebar";

/**
 * Layout shell for every /admin/* route (wrapped by <ProtectedRoute />
 * in AppRoutes.jsx, so this never renders for a logged-out visitor).
 */
export default function AdminLayout() {
  const collapsed = useSelector((state) => state.ui.adminSidebarCollapsed);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-stone-50">
      <AdminSidebar
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Mobile top bar — only visible below lg */}
        <div className="sticky top-0 z-30 flex items-center gap-3 border-b border-orange-100 bg-white/90 px-4 py-3 backdrop-blur lg:hidden">
          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600"
            aria-label="Open menu"
          >
            <MenuOutlined />
          </button>
          <p className="font-display text-base font-bold text-slate-900">
            Namdev Admin
          </p>
        </div>

        <main
          className={`themed-scrollbar min-w-0 flex-1 overflow-x-hidden px-4 py-6 transition-all duration-300 sm:px-6 lg:px-8 lg:py-8 ${
            collapsed
              ? "lg:max-w-[calc(100vw-5rem)]"
              : "lg:max-w-[calc(100vw-16rem)]"
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
