// import { FaTruck, FaPhoneAlt, FaGift, FaOm } from "react-icons/fa";
// // import { GiShivaLingam } from "react-icons/gi";
// import { SITE } from "../../config/constants";
// import { GiStonePile } from "react-icons/gi";

// export default function AnnouncementBar() {
//   const items = [
//     {
//       icon: <FaTruck />,
//       text: "Free Shipping Across India*",
//     },
//     {
//       icon: <FaGift />,
//       text: "Special Discount on Bulk Orders",
//     },
//     {
//       icon: <FaOm />,
//       text: "100% Original Narmadeshwar Shivlings",
//     },
//     {
//       icon: <FaPhoneAlt />,
//       text: SITE.phone,
//     },
//     {
//       icon: <GiStonePile />,
//       text: "Custom Shivling Orders Available",
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 text-white overflow-hidden h-10 flex items-center">
//       <div className="flex whitespace-nowrap animate-marquee">
//         {[...items, ...items].map((item, i) => (
//           <div
//             key={i}
//             className="flex items-center gap-2 px-10 text-sm font-medium"
//           >
//             <span className="text-yellow-300">{item.icon}</span>
//             <span>{item.text}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import { ANNOUNCEMENTS } from "../../config/announcements";

export default function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 h-10 overflow-hidden text-white">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-2 px-10 h-10"
            >
              <Icon className="text-yellow-300" />

              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}