"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  const cards = [
    { titleKey: "about.missionTitle", textKey: "about.mission" },
    { titleKey: "about.visionTitle", textKey: "about.vision" },
    { titleKey: "about.valuesTitle", textKey: "about.values" },
  ];

  return (
    <PageTransition className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
      <SectionHeading title={t("about.title")} subtitle={t("about.subtitle")} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-3xl school-card border-amber-300 bg-amber-50/80 dark:bg-amber-950/20 dark:border-amber-700 p-8 shadow-black/5"
      >
        <h2 className="font-heading text-2xl text-text-primary mb-4">
          {t("about.historyTitle")}
        </h2>
        <p className="text-text-muted leading-relaxed">{t("about.history")}</p>
        <p className="mt-4 text-text-muted leading-relaxed">{t("about.history2")}</p>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((card, i) => (
          <motion.article
            key={card.titleKey}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="school-card p-6 shadow-black/5 border-sky-300 bg-sky-50/80 dark:bg-sky-950/20 dark:border-sky-700 hover:shadow-black/10"
          >
            <h3 className="font-heading text-xl text-primary mb-3">
              {t(card.titleKey)}
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">{t(card.textKey)}</p>
          </motion.article>
        ))}
      </div>

      <p className="mt-12 text-center">
        <Link
          href="/faculty"
          className="font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg px-2 py-1"
        >
          {t("about.leadershipLink")}
        </Link>
      </p>
    </PageTransition>
  );
}
