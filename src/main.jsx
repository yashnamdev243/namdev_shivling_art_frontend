import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
    <WishlistProvider>
    <App />
     </WishlistProvider>
     </CartProvider>
  </React.StrictMode>
);
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import App from "./App";
// import "./index.css";
// import { CartProvider } from "./context/CartContext";
// import { WishlistProvider } from "./context/WishlistContext";
// import { UserAuthProvider } from "./context/UserAuthContext";
// import { queryClient } from "./app/queryClient";
// import { QueryClientProvider } from "@tanstack/react-query";
// import LoginModal from "./components/common/LoginModal";

// const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <QueryClientProvider client={queryClient}>
//     <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
//       <UserAuthProvider>
//         <CartProvider>
//           <WishlistProvider>
//             <App />
//             <LoginModal />
//           </WishlistProvider>
//         </CartProvider>
//       </UserAuthProvider>
//     </GoogleOAuthProvider>
//     </QueryClientProvider>
//   </React.StrictMode>
// );