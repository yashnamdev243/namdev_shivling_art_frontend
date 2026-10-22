// // src/components/layout/Header.jsx

// import { useEffect, useState } from "react";
// import Navbar from "./Navbar";

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? " " : ""
//         // scrolled ? " " : " py-4"
//       }`}
//     >
//       <Navbar />
//     </header>
//   );
// }




// src/components/layout/Header.jsx

import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-10 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_12px_32px_rgba(28,26,23,0.10)]" : "shadow-none"
      }`}
    >
      <Navbar />
    </header>
  );
}