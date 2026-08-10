import { HelmetProvider } from "react-helmet-async";
import { ConfigProvider } from "antd";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import AppRoutes from "./routes/AppRoutes";
import { store } from "./app/store";
import { queryClient } from "./app/queryClient";
import { LanguageProvider } from "./context/Languagecontext";


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
            <AppRoutes />

            <Toaster
              position="top-right"
              toastOptions={{
                duration: 3000,
              }}
            />
          </ConfigProvider>
          </LanguageProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;