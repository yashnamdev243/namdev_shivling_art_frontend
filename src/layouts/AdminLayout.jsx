// import { useState } from "react";
// import { Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { MenuOutlined } from "@ant-design/icons";
// import AdminSidebar from "../components/admin/AdminSidebar";

// /**
//  * Layout shell for every /admin/* route (wrapped by <ProtectedRoute />
//  * in AppRoutes.jsx, so this never renders for a logged-out visitor).
//  */
// export default function AdminLayout() {
//   const collapsed = useSelector((state) => state.ui.adminSidebarCollapsed);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen bg-stone-50">
//       <AdminSidebar
//         mobileOpen={mobileOpen}
//         onCloseMobile={() => setMobileOpen(false)}
//       />

//       <div className="flex min-w-0 flex-1 flex-col">
//         {/* Mobile top bar — only visible below lg */}
//         <div className="sticky top-0 z-30 flex items-center gap-3 border-b border-orange-100 bg-white/90 px-4 py-3 backdrop-blur lg:hidden">
//           <button
//             onClick={() => setMobileOpen(true)}
//             className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600"
//             aria-label="Open menu"
//           >
//             <MenuOutlined />
//           </button>
//           <p className="font-display text-base font-bold text-slate-900">
//             Namdev Admin
//           </p>
//         </div>

//         <main
//           className={`themed-scrollbar min-w-0 flex-1 overflow-x-hidden px-4 py-6 transition-all duration-300 sm:px-6 lg:px-8 lg:py-8 ${
//             collapsed
//               ? "lg:max-w-[calc(100vw-5rem)]"
//               : "lg:max-w-[calc(100vw-16rem)]"
//           }`}
//         >
//           <Outlet />
//         </main>
//       </div>
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
    <div className="relative flex min-h-screen bg-[#FAF8F3]">
      {/* extremely subtle ambient warmth, not a texture/pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-1/3 top-0 h-96 w-96 rounded-full bg-[#A8823C]/[0.04] blur-[140px]"
      />

      <AdminSidebar
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <div className="relative flex min-w-0 flex-1 flex-col">
        {/* Mobile top bar — only visible below lg */}
        <div className="sticky top-0 z-30 flex items-center gap-3 border-b border-[#1C1A17]/[0.06] bg-white/85 px-4 py-3 backdrop-blur-md lg:hidden">
          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1C1A17]/10 text-[#1C1A17] transition-colors duration-200 hover:border-[#A8823C]/40 hover:text-[#A8823C]"
            aria-label="Open menu"
          >
            <MenuOutlined />
          </button>
          <div>
            <p className="font-display text-base font-bold leading-tight text-[#1C1A17]">
              Namdev Admin
            </p>
            <p className="text-[11px] leading-tight text-[#8A8377]">
              Control Center
            </p>
          </div>
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