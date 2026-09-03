// import { FaTruck, FaGift, FaPhoneAlt, FaOm } from "react-icons/fa";
// import { GiStonePile } from "react-icons/gi";
// import { ANNOUNCEMENT_CONTENT } from "../../config/content";
// import { useContent } from "../../context/LanguageContext";
// import { SITE } from "../../config/constants";

// export default function AnnouncementBar() {
//   const t = useContent(ANNOUNCEMENT_CONTENT);
//   const icons = [FaTruck, FaGift, FaOm, FaPhoneAlt, GiStonePile];
//   return (
//     <div className="bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 h-10 overflow-hidden text-white">
//       <div className="animate-marquee flex whitespace-nowrap">
//         {[...t, ...t].map((item, index) => {
//           const originalIndex = index % t.length;
//           const Icon = icons[originalIndex];
//           const text = item === "CONTACT_PHONE" ? SITE.phone : item;

//           return (
//             <div key={index} className="flex items-center gap-2 px-10 h-10">
//               <Icon className="text-yellow-300" />

//               <span>{text}</span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }



// import {
//   FaTruck,
//   FaGift,
//   FaPhoneAlt,
//   FaOm,
// } from "react-icons/fa";

// import { GiStonePile } from "react-icons/gi";

// import { ANNOUNCEMENT_CONTENT } from "../../config/content";
// import { useContent } from "../../context/LanguageContext";
// import { SITE } from "../../config/constants";

// export default function AnnouncementBar() {
//   const t = useContent(ANNOUNCEMENT_CONTENT);

//   const icons = [
//     FaTruck,
//     FaGift,
//     FaOm,
//     FaPhoneAlt,
//     GiStonePile,
//   ];

//   // Safety check
//   const announcements = Array.isArray(t) ? t : [];

//   if (!announcements.length) {
//     return null;
//   }

//   return (
//     <div className="bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 h-10 overflow-hidden text-white">
//       <div className="animate-marquee flex whitespace-nowrap">
//         {[...announcements, ...announcements].map(
//           (item, index) => {
//             const originalIndex =
//               index % announcements.length;

//             const Icon =
//               icons[originalIndex % icons.length];

//             const text =
//               item === "CONTACT_PHONE"
//                 ? SITE.phone
//                 : item;

//             return (
//               <div
//                 key={`${item}-${index}`}
//                 className="flex items-center gap-2 px-10 h-10"
//               >
//                 <Icon className="text-yellow-300" />

//                 <span>{text}</span>
//               </div>
//             );
//           }
//         )}
//       </div>
//     </div>
//   );
// }



import {
  FaTruck,
  FaGift,
  FaPhoneAlt,
  FaOm,
} from "react-icons/fa";

import { GiStonePile } from "react-icons/gi";

import { ANNOUNCEMENT_CONTENT } from "../../config/content";
import { useContent } from "../../context/LanguageContext";
import { SITE } from "../../config/constants";

export default function AnnouncementBar() {
  const t = useContent(ANNOUNCEMENT_CONTENT);

  const icons = [
    FaTruck,
    FaGift,
    FaOm,
    FaPhoneAlt,
    GiStonePile,
  ];

  // Safety check
  const announcements = Array.isArray(t) ? t : [];

  if (!announcements.length) {
    return null;
  }

  return (
    <div className="h-10 overflow-hidden border-b border-[#D4AF6A]/[0.12] bg-[#1C1A17] text-[#F2E3C8]">
      <div className="animate-marquee flex h-full items-center whitespace-nowrap">
        {[...announcements, ...announcements].map((item, index) => {
          const originalIndex = index % announcements.length;
          const Icon = icons[originalIndex % icons.length];
          const text = item === "CONTACT_PHONE" ? SITE.phone : item;

          return (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-2 px-4 text-[13px] font-medium tracking-tight sm:px-6 sm:text-sm"
            >
              <Icon className="text-[13px] text-[#D4AF6A] sm:text-sm" aria-hidden="true" />
              <span>{text}</span>
              <span className="ml-4 select-none text-[#D4AF6A]/40 sm:ml-6" aria-hidden="true">
                ✦
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}