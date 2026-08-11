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
    <div className="bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 h-10 overflow-hidden text-white">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...announcements, ...announcements].map(
          (item, index) => {
            const originalIndex =
              index % announcements.length;

            const Icon =
              icons[originalIndex % icons.length];

            const text =
              item === "CONTACT_PHONE"
                ? SITE.phone
                : item;

            return (
              <div
                key={`${item}-${index}`}
                className="flex items-center gap-2 px-10 h-10"
              >
                <Icon className="text-yellow-300" />

                <span>{text}</span>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}