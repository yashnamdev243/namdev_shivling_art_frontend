// import { NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   DashboardOutlined,
//   AppstoreOutlined,
//   TagsOutlined,
//   LogoutOutlined,
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   GlobalOutlined,
//   UserOutlined,
//   MessageOutlined,
//   HistoryOutlined,
//   PercentageOutlined,
//   HeartOutlined,
//   LikeOutlined,
// } from "@ant-design/icons";
// import { toggleAdminSidebar } from "../../redux/uiSlice";
// import { ROUTES } from "../../config/routes";
// import { useAdminAuth } from "../../context/AdminAuthContext";

// const links = [
//   {
//     to: ROUTES.adminDashboard,
//     label: "Dashboard",
//     icon: <DashboardOutlined />,
//   },
//   { to: ROUTES.adminCategories, label: "Categories", icon: <TagsOutlined /> },
//   { to: ROUTES.adminProducts, label: "Products", icon: <AppstoreOutlined /> },

//   {
//     to: "/admin/reviews",
//     label: "Reviews",
//     icon: <MessageOutlined />,
//   },

//   { to: "/admin/wishlists", label: "Wishlists", icon: <HeartOutlined /> },
//   { to: "/admin/likes", label: "Likes", icon: <LikeOutlined /> },
//   { to: "/admin/coupons", label: "Coupons", icon: <PercentageOutlined /> },
//   {
//     to: "/admin/users",
//     label: "Customers",
//     icon: <UserOutlined />,
//   },
//   {
//     to: "/admin/activity",
//     label: "Activity",
//     icon: <HistoryOutlined />,
//   },
// ];

// /**
//  * Collapsible admin sidebar. Collapse state lives in redux (uiSlice) so
//  * it's easy to also reflect it elsewhere (e.g. a topbar toggle) later.
//  */
// export default function AdminSidebar() {
//   const collapsed = useSelector((state) => state.ui.adminSidebarCollapsed);
//   const dispatch = useDispatch();
//   const { user, logout } = useAdminAuth();

//   return (
//     <aside
//       className={`sticky top-0 flex h-screen flex-col bg-stone-950 text-stone-300 transition-all duration-300 ${
//         collapsed ? "w-20" : "w-64"
//       }`}
//     >
//       <div className="flex items-center justify-between px-4 py-6">
//         {!collapsed && (
//           <div>
//             <p className="font-display text-lg font-bold text-white">
//               Namdev Admin
//             </p>
//             <p className="text-xs text-gold-300/80">Shivling Art</p>
//           </div>
//         )}
//         <button
//           onClick={() => dispatch(toggleAdminSidebar())}
//           className="rounded-lg p-2 text-stone-400 hover:bg-stone-800 hover:text-white"
//         >
//           {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//         </button>
//       </div>

//       <nav className="flex-1 space-y-1 px-3">
//         {links.map((link) => (
//           <NavLink
//             key={link.to}
//             to={link.to}
//             end={link.to === ROUTES.adminDashboard}
//             className={({ isActive }) =>
//               `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
//                 isActive
//                   ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow"
//                   : "text-stone-400 hover:bg-stone-800 hover:text-white"
//               }`
//             }
//           >
//             <span className="text-lg">{link.icon}</span>
//             {!collapsed && link.label}
//           </NavLink>
//         ))}

//         <a
//           href="/"
//           target="_blank"
//           rel="noreferrer"
//           className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-stone-400 hover:bg-stone-800 hover:text-white"
//         >
//           <GlobalOutlined className="text-lg" />
//           {!collapsed && "View Website"}
//         </a>
//       </nav>

//       <div className="border-t border-stone-800 p-3">
//         <div
//           className={`flex items-center gap-3 rounded-xl px-2 py-2 ${collapsed ? "justify-center" : ""}`}
//         >
//           <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-700 font-semibold text-white">
//             {(user?.name || "A")[0].toUpperCase()}
//           </div>
//           {!collapsed && (
//             <div className="min-w-0">
//               <p className="truncate text-sm font-medium text-white">
//                 {user?.name || "Admin"}
//               </p>
//               <p className="truncate text-xs text-stone-500">{user?.email}</p>
//             </div>
//           )}
//         </div>
//         <button
//           onClick={logout}
//           className={`mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-red-400 hover:bg-stone-800 ${
//             collapsed ? "justify-center" : ""
//           }`}
//         >
//           <LogoutOutlined />
//           {!collapsed && "Logout"}
//         </button>
//       </div>
//     </aside>
//   );
// }

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd";
import {
  DashboardOutlined,
  AppstoreOutlined,
  TagsOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  GlobalOutlined,
  UserOutlined,
  MessageOutlined,
  HistoryOutlined,
  PercentageOutlined,
  HeartOutlined,
  LikeOutlined,
  ExclamationCircleFilled,
  CloseOutlined,
} from "@ant-design/icons";
import { toggleAdminSidebar } from "../../redux/uiSlice";
import { ROUTES } from "../../config/routes";
import { useAdminAuth } from "../../context/AdminAuthContext";

const links = [
  {
    to: ROUTES.adminDashboard,
    label: "Dashboard",
    icon: <DashboardOutlined />,
  },
  { to: ROUTES.adminCategories, label: "Categories", icon: <TagsOutlined /> },
  { to: ROUTES.adminProducts, label: "Products", icon: <AppstoreOutlined /> },
  { to: "/admin/reviews", label: "Reviews", icon: <MessageOutlined /> },
  { to: "/admin/wishlists", label: "Wishlists", icon: <HeartOutlined /> },
  { to: "/admin/likes", label: "Likes", icon: <LikeOutlined /> },
  { to: "/admin/coupons", label: "Coupons", icon: <PercentageOutlined /> },
  { to: "/admin/users", label: "Customers", icon: <UserOutlined /> },
  { to: "/admin/activity", label: "Activity", icon: <HistoryOutlined /> },
];

/**
 * Responsive collapsible admin sidebar.
 * - Desktop (lg+): fixed column, collapse/expand toggled from redux (uiSlice).
 * - Mobile (<lg): off-canvas drawer, opened via `mobileOpen`/`onCloseMobile`
 *   props controlled by AdminLayout's hamburger button.
 */
export default function AdminSidebar({ mobileOpen = false, onCloseMobile }) {
  const collapsed = useSelector((state) => state.ui.adminSidebarCollapsed);
  const dispatch = useDispatch();
  const { user, logout } = useAdminAuth();
  const [logoutConfirmOpen, setLogoutConfirmOpen] = useState(false);

  const handleLogoutConfirm = () => {
    setLogoutConfirmOpen(false);
    logout();
  };

  const sidebarContent = (isMobile) => (
    <>
      {/* <div className="flex items-center justify-between px-4 py-6">
        {(!collapsed || isMobile) && (
          <div>
            <p className="font-display text-lg font-bold text-white">Namdev Admin</p>
            <p className="text-xs text-amber-300/80">Shivling Art</p>
          </div>
        )}

        {isMobile ? (
          <button
            onClick={onCloseMobile}
            className="rounded-lg p-2 text-stone-400 hover:bg-stone-800 hover:text-white"
            aria-label="Close menu"
          >
            <CloseOutlined />
          </button>
        ) : (
          <button
            onClick={() => dispatch(toggleAdminSidebar())}
            className="rounded-lg p-2 text-stone-400 hover:bg-stone-800 hover:text-white"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </button>
        )}
      </div> */}
      <div className="flex items-center justify-between px-4 py-6">
        {/* LOGO + ADMIN NAME */}
        <div
          className={`flex min-w-0 items-center ${
            collapsed && !isMobile ? "justify-center" : "gap-3"
          }`}
        >
          {/* OM CIRCLE */}
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                 border-2 border-amber-400 bg-slate-950
                 shadow-lg shadow-amber-500/20"
          >
            <span className="text-xl font-semibold leading-none text-orange-300">
              ॐ
            </span>
          </div>

          {/* NAMDEV ADMIN */}
          {(!collapsed || isMobile) && (
            <div className="min-w-0">
              <p className="truncate font-display text-lg font-bold text-white">
                Namdev Admin
              </p>
              <p className="text-xs text-amber-300/80">Narmadeshwar Shivling</p>
            </div>
          )}
        </div>

        {/* TOGGLE / CLOSE BUTTON */}
        {isMobile ? (
          <button
            onClick={onCloseMobile}
            className="rounded-lg p-2 text-stone-400 hover:bg-stone-800 hover:text-white"
            aria-label="Close menu"
          >
            <CloseOutlined />
          </button>
        ) : (
          <button
            onClick={() => dispatch(toggleAdminSidebar())}
            className="rounded-lg p-2 text-stone-400 hover:bg-stone-800 hover:text-white"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </button>
        )}
      </div>

      <nav className="sidebar-scrollbar flex-1 space-y-1 overflow-y-auto px-3 pb-3">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === ROUTES.adminDashboard}
            onClick={isMobile ? onCloseMobile : undefined}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow"
                  : "text-stone-400 hover:bg-stone-800 hover:text-white"
              }`
            }
          >
            <span className="shrink-0 text-lg">{link.icon}</span>
            {(!collapsed || isMobile) && (
              <span className="truncate">{link.label}</span>
            )}
          </NavLink>
        ))}

        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-stone-400 hover:bg-stone-800 hover:text-white"
        >
          <GlobalOutlined className="shrink-0 text-lg" />
          {(!collapsed || isMobile) && "View Website"}
        </a>
      </nav>

      <div className="shrink-0 border-t border-stone-800 p-3">
        <div
          className={`flex items-center gap-3 rounded-xl px-2 py-2 ${collapsed && !isMobile ? "justify-center" : ""}`}
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500 font-semibold text-white">
            {(user?.name || "A")[0].toUpperCase()}
          </div>
          {(!collapsed || isMobile) && (
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white">
                {user?.name || "Admin"}
              </p>
              <p className="truncate text-xs text-stone-500">{user?.email}</p>
            </div>
          )}
        </div>

        <button
          onClick={() => setLogoutConfirmOpen(true)}
          className={`mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-red-400 transition hover:bg-stone-800 ${
            collapsed && !isMobile ? "justify-center" : ""
          }`}
        >
          <LogoutOutlined />
          {(!collapsed || isMobile) && "Logout"}
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside
        className={`sticky top-0 hidden h-screen shrink-0 flex-col bg-stone-950 text-stone-300 transition-all duration-300 lg:flex ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        {sidebarContent(false)}
      </aside>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onCloseMobile}
        aria-hidden="true"
      />

      {/* MOBILE DRAWER */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex h-screen w-72 max-w-[85vw] flex-col bg-stone-950 text-stone-300 shadow-2xl transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarContent(true)}
      </aside>

      {/* LOGOUT CONFIRMATION MODAL */}
      <Modal
        open={logoutConfirmOpen}
        onCancel={() => setLogoutConfirmOpen(false)}
        footer={null}
        centered
        width={380}
        destroyOnClose
      >
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
            <ExclamationCircleFilled className="text-2xl text-red-500" />
          </div>
          <h2 className="mt-4 text-lg font-bold text-slate-900">
            Logout from admin?
          </h2>
          <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-gray-500">
            You'll need to sign in again to access the admin dashboard.
          </p>

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => setLogoutConfirmOpen(false)}
              className="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleLogoutConfirm}
              className="flex-1 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
