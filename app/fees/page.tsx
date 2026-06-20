"use client";

import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { FeeCard } from "@/components/FeeCard";
import { classFees } from "@/data/fees";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FeesPage() {
  const { t } = useLanguage();

  return (
    <PageTransition className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
      <SectionHeading title={t("fees.title")} subtitle={t("fees.subtitle")} />

      <p className="mx-auto mb-12 max-w-3xl text-center text-text-muted">
        {t("fees.intro")}
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {classFees.map((fee, index) => (
          <FeeCard key={fee.id} fee={fee} index={index} />
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-text-muted italic">
        {t("fees.disclaimer")}
      </p>
    </PageTransition>
  );
}
