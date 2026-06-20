"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

type LanguageToggleProps = {
  className?: string;
  variant?: "default" | "hero";
};

export function LanguageToggle({ className, variant = "default" }: LanguageToggleProps) {
  const { language, setLanguage, t } = useLanguage();
  const onHero = variant === "hero";

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "hi" : "en")}
      className={cn(
        "flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-500 hover:scale-[1.02] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        onHero
          ? "border-white/40 bg-white/10 backdrop-blur-sm hover:bg-white/20 focus-visible:ring-white/50"
          : "border-border bg-surface hover:shadow-md",
        className
      )}
      aria-label={
        language === "en" ? t("language.switchToHindi") : t("language.switchToEnglish")
      }
    >
      <span
        className={cn(
          onHero
            ? language === "en"
              ? "font-bold text-gold"
              : "text-white/70"
            : language === "en"
              ? "font-bold text-primary"
              : "text-text-muted",
          "transition-colors duration-500"
        )}
      >
        EN
      </span>
      <span className={cn(onHero ? "text-white/40" : "text-text-muted", "transition-colors duration-500")}>|</span>
      <span
        className={cn(
          onHero
            ? language === "hi"
              ? "font-bold text-gold"
              : "text-white/70"
            : language === "hi"
              ? "font-bold text-primary"
              : "text-text-muted",
          "transition-colors duration-500"
        )}
      >
        हिं
      </span>
    </button>
  );
}
