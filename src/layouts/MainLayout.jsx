// import { Layout } from "antd";
// import { Outlet } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";

// const { Content } = Layout;

// export default function MainLayout() {
//   return (
//     <Layout className="min-h-screen">

//       <Header />

//       <Content>

//         <Outlet />

//       </Content>

//       <Footer />

//     </Layout>
//   );
// }

import { Layout } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import PageLoader from "../components/common/PageLoader";

const { Content } = Layout;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

export default function MainLayout() {
  const location = useLocation();

  return (
    //  <Layout className="min-h-screen overflow-x-hidden bg-stone-50">
    <Layout className="min-h-screen overflow-x-hidden ">
      <ScrollToTop />

      <Header />

      <Content className="flex-1">
        <PageLoader />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </Content>

      <Footer />
    </Layout>
  );
}
