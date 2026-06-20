"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import en from "./en.json";
import hi from "./hi.json";
import type { Dictionary, Language } from "./types";

const STORAGE_KEY = "school-website-language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const dictionaries: Record<Language, Dictionary> = { en, hi };

function getNestedValue(obj: Dictionary, path: string): string | undefined {
  const value = path.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in (acc as Dictionary)) {
      return (acc as Dictionary)[part];
    }
    return undefined;
  }, obj);

  return typeof value === "string" ? value : undefined;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "hi") {
      setLanguageState(stored);
    }
    setMounted(true);
  }, []);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const t = useCallback(
    (key: string) => {
      const current = getNestedValue(dictionaries[language], key);
      if (current) return current;
      return getNestedValue(dictionaries.en, key) ?? key;
    },
    [language]
  );

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t]
  );

  if (!mounted) {
    return (
      <LanguageContext.Provider value={value}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export function useBilingual(text: { en: string; hi: string }) {
  const { language } = useLanguage();
  return getLocalizedText(text, language);
}

export function getLocalizedText(
  text: { en: string; hi: string },
  language: Language
) {
  return text[language];
}
