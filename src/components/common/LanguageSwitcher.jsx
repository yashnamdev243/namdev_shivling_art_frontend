// import { useLanguage } from "../../context/LanguageContext";
// import { LANGUAGE_LABELS } from "../../config/content";

// /**
//  * Site-wide EN / हिं toggle. Drop this into your Navbar (desktop) and your
//  * mobile menu — it reads/writes the same shared language state either way.
//  *
//  * <LanguageSwitcher />                 — default pill style
//  * <LanguageSwitcher variant="compact" /> — single icon-button that flips
//  *                                          language on each tap (good for
//  *                                          tight mobile headers)
//  */
// export default function LanguageSwitcher({ className = "", variant = "pill" }) {
//   const { language, setLanguage, toggleLanguage } = useLanguage();

//   if (variant === "compact") {
//     return (
//       <button
//         type="button"
//         onClick={toggleLanguage}
//         aria-label={LANGUAGE_LABELS[language].switchTo}
//         title={LANGUAGE_LABELS[language].switchTo}
//         className={`flex h-9 w-9 items-center justify-center rounded-full border border-orange-200 bg-white text-xs font-bold text-orange-600 shadow-sm transition hover:border-orange-400 hover:bg-orange-50 ${className}`}
//       >
//         {LANGUAGE_LABELS[language === "en" ? "hi" : "en"].short}
//       </button>
//     );
//   }

//   return (
//     <div
//       role="group"
//       aria-label="Select language / भाषा चुनें"
//       className={`inline-flex items-center rounded-full border border-orange-200 bg-white p-1 shadow-sm ${className}`}
//     >
//       {["en", "hi"].map((lng) => {
//         const active = language === lng;

//         return (
//           <button
//             key={lng}
//             type="button"
//             onClick={() => setLanguage(lng)}
//             aria-pressed={active}
//             className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all sm:text-sm ${
//               active
//                 ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow"
//                 : "text-gray-600 hover:text-orange-600"
//             }`}
//           >
//             {LANGUAGE_LABELS[lng].short}
//           </button>
//         );
//       })}
//     </div>
//   );
// }



import { useLanguage } from "../../context/LanguageContext";
import { LANGUAGE_LABELS } from "../../config/content";

/**
 * Site-wide EN / हिं toggle. Drop this into your Navbar (desktop) and your
 * mobile menu — it reads/writes the same shared language state either way.
 *
 * <LanguageSwitcher />                 — default pill style
 * <LanguageSwitcher variant="compact" /> — single icon-button that flips
 *                                          language on each tap (good for
 *                                          tight mobile headers)
 */
export default function LanguageSwitcher({ className = "", variant = "pill" }) {
  const { language, setLanguage, toggleLanguage } = useLanguage();

  if (variant === "compact") {
    return (
      <button
        type="button"
        onClick={toggleLanguage}
        aria-label={LANGUAGE_LABELS[language].switchTo}
        title={LANGUAGE_LABELS[language].switchTo}
        className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#1C1A17]/10 bg-white/50 text-[11px] font-semibold text-[#1C1A17] transition-all duration-200 hover:border-[#A8823C]/40 hover:bg-[#A8823C]/5 hover:text-[#A8823C] ${className}`}
      >
        {LANGUAGE_LABELS[language === "en" ? "hi" : "en"].short}
      </button>
    );
  }

  return (
    <div
      role="group"
      aria-label="Select language / भाषा चुनें"
      className={`inline-flex items-center rounded-full border border-[#1C1A17]/10 bg-white/40 p-1 ${className}`}
    >
      {["en", "hi"].map((lng) => {
        const active = language === lng;

        return (
          <button
            key={lng}
            type="button"
            onClick={() => setLanguage(lng)}
            aria-pressed={active}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 sm:text-sm ${
              active
                ? "bg-[#1C1A17] text-[#FBF7EF] shadow-sm"
                : "text-[#4A453D] hover:text-[#1C1A17]"
            }`}
          >
            {LANGUAGE_LABELS[lng].short}
          </button>
        );
      })}
    </div>
  );
}