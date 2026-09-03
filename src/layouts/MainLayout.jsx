// // import { Layout } from "antd";
// // import { Outlet } from "react-router-dom";
// // import Header from "./Header";
// // import Footer from "./Footer";

// // const { Content } = Layout;

// // export default function MainLayout() {
// //   return (
// //     <Layout className="min-h-screen">

// //       <Header />

// //       <Content>

// //         <Outlet />

// //       </Content>

// //       <Footer />

// //     </Layout>
// //   );
// // }

// import { Layout } from "antd";
// import { Outlet, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect } from "react";

// import Header from "./Header";
// import Footer from "./Footer";
// import PageLoader from "../components/common/PageLoader";
// import AnnouncementBar from "../components/common/AnnouncementBar";
// import FloatingContactWidget from "../components/common/FloatingContactWidget";

// const { Content } = Layout;

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, [pathname]);

//   return null;
// }

// export default function MainLayout() {
//   const location = useLocation();

//   return (
//     //  <Layout className="min-h-screen overflow-x-hidden bg-stone-50">
//     <Layout className="min-h-screen overflow-x-hidden ">
//       {/* <FloatingContactWidget /> */}

//       <ScrollToTop />
//       <div className="fixed inset-x-0 top-0 z-50">
//         <AnnouncementBar />

//         <Header />
//       </div>

//       <Content className="flex-1 pt-[40px]">
//         <PageLoader />
//         {/* <AnimatePresence mode="wait"> */}
//         {/* <motion.div
//             key={location.pathname}
//             initial={{ opacity: 0, y: 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -18 }}
//             transition={{
//               duration: 0.35,
//               ease: "easeOut",
//             }} */}
//         <motion.div
//           key={location.pathname}
//           initial={{
//             opacity: 0,
//             y: 12,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.25,
//             ease: "easeOut",
//           }}
//         >
//           <Outlet />
//         </motion.div>
//         {/* </AnimatePresence> */}
//       </Content>

//       <Footer />
//       <FloatingContactWidget />
//     </Layout>
//   );
// }






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
import AnnouncementBar from "../components/common/AnnouncementBar";
import FloatingContactWidget from "../components/common/FloatingContactWidget";

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
    <Layout className="min-h-screen overflow-x-hidden bg-[#FBF7EF]">
      {/* <FloatingContactWidget /> */}

      <ScrollToTop />
      <div className="fixed inset-x-0 top-0 z-50">
        <AnnouncementBar />

        <Header />
      </div>

      {/*
        AnnouncementBar (40px) + Header's own top-10 offset (40px) +
        the floating Navbar's height (~68px) + a little breathing room
        before the first section starts. Verify against the live
        Navbar height and adjust these two values if either changes.
      */}
     <Content className="flex-1 pt-[40px]">
        <PageLoader />
        {/* <AnimatePresence mode="wait"> */}
        {/* <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }} */}
        <motion.div
          key={location.pathname}
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
        >
          <Outlet />
        </motion.div>
        {/* </AnimatePresence> */}
      </Content>

      <Footer />
      <FloatingContactWidget />
    </Layout>
  );
}