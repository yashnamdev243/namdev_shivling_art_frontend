// import React, {
//   createContext,
//   useContext,
//   useMemo,
//   useState,
// } from "react";

// const LanguageContext = createContext(null);

// const LANGUAGE_KEY = "site_language";

// const CONTENT = {
//   en: {
//     nav: {
//       home: "Home",
//       products: "Products",
//       gallery: "Gallery",
//       about: "About Us",
//       contact: "Contact",
//       wishlist: "Wishlist",
//     },

//     common: {
//       loading: "Loading...",
//       search: "Search",
//       viewAll: "View All",
//       readMore: "Read More",
//       learnMore: "Learn More",
//       submit: "Submit",
//       cancel: "Cancel",
//       close: "Close",
//     },

//     home: {
//       heroTitle: "Authentic Narmadeshwar Shivlings",
//       heroSubtitle:
//         "Handcrafted sacred stone art from the holy Narmada River.",
//     },

//     products: {
//       title: "Our Products",
//       subtitle:
//         "Explore our collection of authentic handcrafted Narmadeshwar Shivlings.",
//     },

//     reviews: {
//       title: "Customer Reviews",
//       subtitle: "What our customers say about us.",
//     },

//     contact: {
//       title: "Contact Us",
//       subtitle: "We would love to hear from you.",
//     },
//   },

//   hi: {
//     nav: {
//       home: "होम",
//       products: "उत्पाद",
//       gallery: "गैलरी",
//       about: "हमारे बारे में",
//       contact: "संपर्क करें",
//       wishlist: "विशलिस्ट",
//     },

//     common: {
//       loading: "लोड हो रहा है...",
//       search: "खोजें",
//       viewAll: "सभी देखें",
//       readMore: "और पढ़ें",
//       learnMore: "और जानें",
//       submit: "सबमिट करें",
//       cancel: "रद्द करें",
//       close: "बंद करें",
//     },

//     home: {
//       heroTitle: "प्रामाणिक नर्मदेश्वर शिवलिंग",
//       heroSubtitle:
//         "पवित्र नर्मदा नदी से प्राप्त हस्तनिर्मित आध्यात्मिक पत्थर कला।",
//     },

//     products: {
//       title: "हमारे उत्पाद",
//       subtitle:
//         "प्रामाणिक हस्तनिर्मित नर्मदेश्वर शिवलिंग का संग्रह देखें।",
//     },

//     reviews: {
//       title: "ग्राहक समीक्षा",
//       subtitle: "हमारे ग्राहकों का अनुभव।",
//     },

//     contact: {
//       title: "संपर्क करें",
//       subtitle: "हम आपसे जुड़कर खुश होंगे।",
//     },
//   },
// };

// export function LanguageProvider({ children }) {
//   const [language, setLanguage] = useState(() => {
//     try {
//       return localStorage.getItem(LANGUAGE_KEY) || "en";
//     } catch {
//       return "en";
//     }
//   });

//   const changeLanguage = (nextLanguage) => {
//     const next =
//       nextLanguage === "hi" ? "hi" : "en";

//     setLanguage(next);

//     try {
//       localStorage.setItem(LANGUAGE_KEY, next);
//     } catch {
//       // Ignore localStorage errors
//     }
//   };

//   const toggleLanguage = () => {
//     changeLanguage(language === "en" ? "hi" : "en");
//   };

//   const content = CONTENT[language] || CONTENT.en;

//   const value = useMemo(
//     () => ({
//       language,
//       setLanguage: changeLanguage,
//       changeLanguage,
//       toggleLanguage,
//       content,
//     }),
//     [language, content]
//   );

//   return (
//     <LanguageContext.Provider value={value}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// export function useLanguage() {
//   const context = useContext(LanguageContext);

//   if (!context) {
//     throw new Error(
//       "useLanguage must be used inside LanguageProvider"
//     );
//   }

//   return {
//     language: context.language,
//     setLanguage: context.setLanguage,
//     changeLanguage: context.changeLanguage,
//     toggleLanguage: context.toggleLanguage,
//   };
// }

// export function useContent() {
//   const context = useContext(LanguageContext);

//   if (!context) {
//     throw new Error(
//       "useContent must be used inside LanguageProvider"
//     );
//   }

//   return context.content;
// }

// export default LanguageContext;


import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const LanguageContext = createContext(null);

const LANGUAGE_KEY = "site_language";

const CONTENT = {
  en: {
    nav: {
      home: "Home",
      products: "Products",
      gallery: "Gallery",
      about: "About Us",
      contact: "Contact",
      wishlist: "Wishlist",
    },

    common: {
      loading: "Loading...",
      search: "Search",
      viewAll: "View All",
      readMore: "Read More",
      learnMore: "Learn More",
      submit: "Submit",
      cancel: "Cancel",
      close: "Close",
    },

    home: {
      heroTitle: "Authentic Narmadeshwar Shivlings",
      heroSubtitle:
        "Handcrafted sacred stone art from the holy Narmada River.",
    },

    products: {
      title: "Our Products",
      subtitle:
        "Explore our collection of authentic handcrafted Narmadeshwar Shivlings.",
    },

    reviews: {
      title: "Customer Reviews",
      subtitle: "What our customers say about us.",
    },

    contact: {
      title: "Contact Us",
      subtitle: "We would love to hear from you.",
    },
  },

  hi: {
    nav: {
      home: "होम",
      products: "उत्पाद",
      gallery: "गैलरी",
      about: "हमारे बारे में",
      contact: "संपर्क करें",
      wishlist: "विशलिस्ट",
    },

    common: {
      loading: "लोड हो रहा है...",
      search: "खोजें",
      viewAll: "सभी देखें",
      readMore: "और पढ़ें",
      learnMore: "और जानें",
      submit: "सबमिट करें",
      cancel: "रद्द करें",
      close: "बंद करें",
    },

    home: {
      heroTitle: "प्रामाणिक नर्मदेश्वर शिवलिंग",
      heroSubtitle:
        "पवित्र नर्मदा नदी से प्राप्त हस्तनिर्मित आध्यात्मिक पत्थर कला।",
    },

    products: {
      title: "हमारे उत्पाद",
      subtitle:
        "प्रामाणिक हस्तनिर्मित नर्मदेश्वर शिवलिंग का संग्रह देखें।",
    },

    reviews: {
      title: "ग्राहक समीक्षा",
      subtitle: "हमारे ग्राहकों का अनुभव।",
    },

    contact: {
      title: "संपर्क करें",
      subtitle: "हम आपसे जुड़कर खुश होंगे।",
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem(LANGUAGE_KEY) || "en";
    } catch {
      return "en";
    }
  });

  const changeLanguage = (nextLanguage) => {
    const next = nextLanguage === "hi" ? "hi" : "en";

    setLanguage(next);

    try {
      localStorage.setItem(LANGUAGE_KEY, next);
    } catch {
      // Ignore localStorage errors
    }
  };

  const toggleLanguage = () => {
    changeLanguage(language === "en" ? "hi" : "en");
  };

  const content = CONTENT[language] || CONTENT.en;

  const value = useMemo(
    () => ({
      language,
      setLanguage: changeLanguage,
      changeLanguage,
      toggleLanguage,
      content,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Returns current language:
 *
 * const { language } = useLanguage();
 */
export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return {
    language: context.language,
    setLanguage: context.setLanguage,
    changeLanguage: context.changeLanguage,
    toggleLanguage: context.toggleLanguage,
  };
}

/**
 * Returns translated content.
 *
 * Usage:
 * const t = useContent(ANNOUNCEMENT_CONTENT);
 *
 * OR:
 * const t = useContent(HERO_CONTENT);
 *
 * It automatically selects:
 * ANNOUNCEMENT_CONTENT.en
 * OR
 * ANNOUNCEMENT_CONTENT.hi
 */
export function useContent(source) {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useContent must be used inside LanguageProvider"
    );
  }

  // If a specific content object was provided
  if (source) {
    return source[context.language] ?? source.en ?? source;
  }

  // Backward compatibility:
  // useContent() returns the main context content
  return context.content;
}

export default LanguageContext;