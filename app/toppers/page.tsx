"use client";

import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { TopperCard } from "@/components/TopperCard";
import { toppers } from "@/data/toppers";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ToppersPage() {
  const { t } = useLanguage();

  return (
    <PageTransition className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
      <SectionHeading title={t("toppers.title")} subtitle={t("toppers.subtitle")} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {toppers.map((topper, index) => (
          <TopperCard key={topper.id} topper={topper} index={index} />
        ))}
      </div>
    </PageTransition>
  );
}
