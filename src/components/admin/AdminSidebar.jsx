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
// } from "@ant-design/icons";
// import { toggleAdminSidebar } from "../../redux/uiSlice";
// import { ROUTES } from "../../config/routes";
// import { useAuth } from "../../hooks/useAuth";

// const links = [
//   { to: ROUTES.adminDashboard, label: "Dashboard", icon: <DashboardOutlined /> },
//   { to: ROUTES.adminProducts, label: "Products", icon: <AppstoreOutlined /> },
//   { to: ROUTES.adminCategories, label: "Categories", icon: <TagsOutlined /> },
// ];

// /**
//  * Collapsible admin sidebar. Collapse state lives in redux (uiSlice) so
//  * it's easy to also reflect it elsewhere (e.g. a topbar toggle) later.
//  */
// export default function AdminSidebar() {
//   const collapsed = useSelector((state) => state.ui.adminSidebarCollapsed);
//   const dispatch = useDispatch();
//   const { user, logout } = useAuth();

//   return (
//     <aside
//       className={`sticky top-0 flex h-screen flex-col bg-stone-950 text-stone-300 transition-all duration-300 ${
//         collapsed ? "w-20" : "w-64"
//       }`}
//     >
//       <div className="flex items-center justify-between px-4 py-6">
//         {!collapsed && (
//           <div>
//             <p className="font-display text-lg font-bold text-white">Namdev Admin</p>
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
//         <div className={`flex items-center gap-3 rounded-xl px-2 py-2 ${collapsed ? "justify-center" : ""}`}>
//           <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-700 font-semibold text-white">
//             {(user?.name || "A")[0].toUpperCase()}
//           </div>
//           {!collapsed && (
//             <div className="min-w-0">
//               <p className="truncate text-sm font-medium text-white">{user?.name || "Admin"}</p>
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


// import { NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   DashboardOutlined,
//   AppstoreOutlined,
//   TagsOutlined,
//   ShoppingOutlined,
//   TeamOutlined,
//   LogoutOutlined,
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   GlobalOutlined,
// } from "@ant-design/icons";
// import { toggleAdminSidebar } from "../../redux/uiSlice";
// import { ROUTES } from "../../config/routes";
// import { useAuth } from "../../hooks/useAuth";

// const links = [
//   { to: ROUTES.adminDashboard, label: "Dashboard", icon: <DashboardOutlined /> },
//   { to: ROUTES.adminProducts, label: "Products", icon: <AppstoreOutlined /> },
//   { to: ROUTES.adminCategories, label: "Categories", icon: <TagsOutlined /> },
//   { to: ROUTES.adminOrders, label: "Orders", icon: <ShoppingOutlined /> },
//   { to: ROUTES.adminCustomers, label: "Customers", icon: <TeamOutlined /> },
// ];

// /**
//  * Collapsible admin sidebar. Collapse state lives in redux (uiSlice) so
//  * it's easy to also reflect it elsewhere (e.g. a topbar toggle) later.
//  */
// export default function AdminSidebar() {
//   const collapsed = useSelector((state) => state.ui.adminSidebarCollapsed);
//   const dispatch = useDispatch();
//   const { user, logout } = useAuth();

//   return (
//     <aside
//       className={`sticky top-0 flex h-screen flex-col bg-stone-950 text-stone-300 transition-all duration-300 ${
//         collapsed ? "w-20" : "w-64"
//       }`}
//     >
//       <div className="flex items-center justify-between px-4 py-6">
//         {!collapsed && (
//           <div>
//             <p className="font-display text-lg font-bold text-white">Namdev Admin</p>
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
//         <div className={`flex items-center gap-3 rounded-xl px-2 py-2 ${collapsed ? "justify-center" : ""}`}>
//           <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-700 font-semibold text-white">
//             {(user?.name || "A")[0].toUpperCase()}
//           </div>
//           {!collapsed && (
//             <div className="min-w-0">
//               <p className="truncate text-sm font-medium text-white">{user?.name || "Admin"}</p>
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


// import { NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   DashboardOutlined,
//   AppstoreOutlined,
//   TagsOutlined,
//   ShoppingOutlined,
//   TeamOutlined,
//   LogoutOutlined,
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   GlobalOutlined,
// } from "@ant-design/icons";
// import { toggleAdminSidebar } from "../../redux/uiSlice";
// import { ROUTES } from "../../config/routes";
// import { useAuth } from "../../hooks/useAuth";

// const links = [
//   { to: ROUTES.adminDashboard, label: "Dashboard", icon: <DashboardOutlined /> },
//   { to: ROUTES.adminProducts, label: "Products", icon: <AppstoreOutlined /> },
//   { to: ROUTES.adminCategories, label: "Categories", icon: <TagsOutlined /> },
//   { to: ROUTES.adminOrders, label: "Orders", icon: <ShoppingOutlined /> },
//   { to: ROUTES.adminCustomers, label: "Customers", icon: <TeamOutlined /> },
// ];

// /**
//  * Collapsible admin sidebar. Collapse state lives in redux (uiSlice) so
//  * it's easy to also reflect it elsewhere (e.g. a topbar toggle) later.
//  */
// export default function AdminSidebar() {
//   const collapsed = useSelector((state) => state.ui.adminSidebarCollapsed);
//   const dispatch = useDispatch();
//   const { user, logout } = useAuth();

//   return (
//     <aside
//       className={`sticky top-0 flex h-screen flex-col bg-stone-950 text-stone-300 transition-all duration-300 ${
//         collapsed ? "w-20" : "w-64"
//       }`}
//     >
//       <div className="flex items-center justify-between px-4 py-6">
//         {!collapsed && (
//           <div>
//             <p className="font-display text-lg font-bold text-white">Namdev Admin</p>
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
//         <div className={`flex items-center gap-3 rounded-xl px-2 py-2 ${collapsed ? "justify-center" : ""}`}>
//           <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-700 font-semibold text-white">
//             {(user?.name || "A")[0].toUpperCase()}
//           </div>
//           {!collapsed && (
//             <div className="min-w-0">
//               <p className="truncate text-sm font-medium text-white">{user?.name || "Admin"}</p>
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


import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  DashboardOutlined,
  AppstoreOutlined,
  TagsOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { toggleAdminSidebar } from "../../redux/uiSlice";
import { ROUTES } from "../../config/routes";
import { useAuth } from "../../hooks/useAuth";

const links = [
  { to: ROUTES.adminDashboard, label: "Dashboard", icon: <DashboardOutlined /> },
  { to: ROUTES.adminProducts, label: "Products", icon: <AppstoreOutlined /> },
  { to: ROUTES.adminCategories, label: "Categories", icon: <TagsOutlined /> },
];

/**
 * Collapsible admin sidebar. Collapse state lives in redux (uiSlice) so
 * it's easy to also reflect it elsewhere (e.g. a topbar toggle) later.
 */
export default function AdminSidebar() {
  const collapsed = useSelector((state) => state.ui.adminSidebarCollapsed);
  const dispatch = useDispatch();
  const { user, logout } = useAuth();

  return (
    <aside
      className={`sticky top-0 flex h-screen flex-col bg-stone-950 text-stone-300 transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-6">
        {!collapsed && (
          <div>
            <p className="font-display text-lg font-bold text-white">Namdev Admin</p>
            <p className="text-xs text-gold-300/80">Shivling Art</p>
          </div>
        )}
        <button
          onClick={() => dispatch(toggleAdminSidebar())}
          className="rounded-lg p-2 text-stone-400 hover:bg-stone-800 hover:text-white"
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </button>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === ROUTES.adminDashboard}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow"
                  : "text-stone-400 hover:bg-stone-800 hover:text-white"
              }`
            }
          >
            <span className="text-lg">{link.icon}</span>
            {!collapsed && link.label}
          </NavLink>
        ))}

        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-stone-400 hover:bg-stone-800 hover:text-white"
        >
          <GlobalOutlined className="text-lg" />
          {!collapsed && "View Website"}
        </a>
      </nav>

      <div className="border-t border-stone-800 p-3">
        <div className={`flex items-center gap-3 rounded-xl px-2 py-2 ${collapsed ? "justify-center" : ""}`}>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-700 font-semibold text-white">
            {(user?.name || "A")[0].toUpperCase()}
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white">{user?.name || "Admin"}</p>
              <p className="truncate text-xs text-stone-500">{user?.email}</p>
            </div>
          )}
        </div>
        <button
          onClick={logout}
          className={`mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-red-400 hover:bg-stone-800 ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <LogoutOutlined />
          {!collapsed && "Logout"}
        </button>
      </div>
    </aside>
  );
}