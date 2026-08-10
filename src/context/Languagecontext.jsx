import { createContext, useContext, useEffect, useMemo, useState } from "react";

// ============================================================================
// src/context/LanguageContext.jsx
//
// Site-wide EN / HI language switch.
//
// - Persists the chosen language to localStorage so it survives a refresh.
// - Keeps <html lang="..."> in sync (good for accessibility + SEO).
// - Exposes a `useContent(block)` hook that picks the right half of any
//   { en: {...}, hi: {...} } object from src/config/content.js, and always
//   falls back to English if a Hindi string is ever missing.
//
// USAGE
// ---------------------------------------------------------------------------
// 1. Wrap the app once, in App.jsx:
//
//      <LanguageProvider>
//        <AppRoutes />
//      </LanguageProvider>
//
// 2. In any component:
//
//      import { CONTENT_BLOCK } from "../../config/content";
//      import { useContent } from "../../context/LanguageContext";
//
//      const t = useContent(CONTENT_BLOCK);
//      <h1>{t.title}</h1>
//
// 3. For the language toggle button itself, use `useLanguage()`:
//
//      const { language, setLanguage, toggleLanguage } = useLanguage();
// ============================================================================

const LanguageContext = createContext(undefined);

const STORAGE_KEY = "nds_language"; // kept out of STORAGE_KEYS in constants.js
                                     // on purpose — this is UI preference,
                                     // not auth/cart state.
const SUPPORTED_LANGUAGES = ["en", "hi"];
const DEFAULT_LANGUAGE = "en";

function readInitialLanguage() {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGUAGES.includes(saved)) return saved;
  } catch {
    // localStorage can throw in private-browsing / restricted contexts —
    // silently fall back rather than crashing the app.
  }

  return DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(readInitialLanguage);

  // Keep <html lang> and localStorage in sync whenever language changes.
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore write failures (private browsing, storage full, etc.)
    }
  }, [language]);

  function setLanguage(next) {
    setLanguageState(SUPPORTED_LANGUAGES.includes(next) ? next : DEFAULT_LANGUAGE);
  }

  function toggleLanguage() {
    setLanguageState((prev) => (prev === "en" ? "hi" : "en"));
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      isHindi: language === "hi",
      isEnglish: language === "en",
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/** Access { language, setLanguage, toggleLanguage, isHindi, isEnglish }. */
export function useLanguage() {
  const ctx = useContext(LanguageContext);

  if (!ctx) {
    throw new Error("useLanguage() must be used inside <LanguageProvider>.");
  }

  return ctx;
}

/**
 * Pick the active language's slice out of a bilingual content block
 * (anything shaped like `{ en: {...}, hi: {...} }`, as defined in
 * src/config/content.js). Always falls back to English so the UI never
 * renders blank text if a Hindi translation is missing for a new key.
 */
export function useContent(block) {
  const { language } = useLanguage();

  if (!block) return null;

  return block[language] ?? block[DEFAULT_LANGUAGE] ?? null;
}