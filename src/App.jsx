import { HelmetProvider } from "react-helmet-async";
import { ConfigProvider } from "antd";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import AppRoutes from "./routes/AppRoutes";
import { store } from "./app/store";
import { queryClient } from "./app/queryClient";
import { LanguageProvider } from "./context/Languagecontext";
import { UserAuthProvider } from "./context/UserAuthContext";
import { AdminAuthProvider } from "./context/AdminAuthContext";

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          {/* LanguageProvider sits above everything else that reads
              content, so the EN/HI toggle works from any page or the
              navbar without extra wiring. */}
          <LanguageProvider>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#8a4019",
                  borderRadius: 10,
                  colorLink: "#8a4019",
                },
              }}
            >
              <UserAuthProvider>
                <AdminAuthProvider>
                  <AppRoutes />
                </AdminAuthProvider>

                <Toaster
                  position="top-right"
                  toastOptions={{
                    duration: 3000,
                    style: {
                      borderRadius: "14px",
                      padding: "12px 16px",
                      fontSize: "14px",
                      fontWeight: 500,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                      border: "1px solid #f3f4f6",
                    },
                    success: {
                      iconTheme: { primary: "#16a34a", secondary: "#fff" },
                      style: {
                        background: "#f0fdf4",
                        color: "#166534",
                        border: "1px solid #bbf7d0",
                      },
                    },
                    error: {
                      iconTheme: { primary: "#dc2626", secondary: "#fff" },
                      style: {
                        background: "#fef2f2",
                        color: "#991b1b",
                        border: "1px solid #fecaca",
                      },
                    },
                  }}
                />
              </UserAuthProvider>
            </ConfigProvider>
          </LanguageProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
