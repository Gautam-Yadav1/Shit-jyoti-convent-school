"use client";

import Link from "next/link";
import { Megaphone } from "lucide-react";
import { latestNews } from "@/data/news";
import { useLanguage, getLocalizedText } from "@/lib/i18n/LanguageContext";

export function NewsTicker() {
  const { language, t } = useLanguage();

  const items = latestNews.map((item) => getLocalizedText(item.text, language));
  const tickerText = items.join("   •   ");

  return (
    <section
      className="relative z-20 border-y border-gold/25 bg-[#0f2744] shadow-lg shadow-black/10"
      aria-label={t("home.news.label")}
    >
      <div className="mx-auto flex max-w-7xl items-stretch">
        <div className="flex shrink-0 items-center justify-center gap-2 bg-gold px-3 py-3 text-slate-900 md:px-5">
          <Megaphone className="h-4 w-4 shrink-0" aria-hidden />
          <span className="hidden whitespace-nowrap font-heading text-xs font-bold uppercase tracking-wider md:inline md:text-sm">
            {t("home.news.label")}
          </span>
        </div>

          <div className="relative min-w-0 flex-1 overflow-hidden py-3">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#0f2744] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#0f2744] to-transparent" />
          <div className="news-marquee flex w-max items-center">
            {[0, 1].map((copy) => (
              <p
                key={copy}
                className="whitespace-nowrap px-6 text-sm font-medium text-blue-50/90 md:text-base"
                aria-hidden={copy === 1}
              >
                {tickerText}
                <span className="mx-6 text-gold/60">•</span>
              </p>
            ))}
          </div>
        </div>

        <Link
          href="/contact"
          className="flex w-[4.25rem] shrink-0 items-center justify-center bg-primary px-1 py-3 text-center font-heading text-[10px] font-semibold leading-tight text-white transition-colors hover:bg-primary-light sm:w-auto sm:px-4 sm:text-xs md:px-6 md:text-sm"
        >
          <span className="md:hidden">{t("home.news.ctaShort")}</span>
          <span className="hidden md:inline">{t("home.news.cta")}</span>
        </Link>
      </div>
    </section>
  );
}
