"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import type { ClassFee } from "@/data/fees";
import { useBilingual, useLanguage } from "@/lib/i18n/LanguageContext";
import { fadeUp } from "@/lib/motion";
import { Badge } from "./Badge";

export function FeeCard({ fee, index }: { fee: ClassFee; index: number }) {
  const { t } = useLanguage();
  const className = useBilingual(fee.className);
  const periodLabel = fee.tuitionPeriod === "monthly" ? t("common.perMonth") : t("common.perYear");
  const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={index * 0.15}
      whileHover={{ y: -4 }}
      className="school-card p-6"
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-heading text-xl font-bold text-text-primary">{className}</h3>
        <Badge variant="gold">{t("common.included")}</Badge>
      </div>
      <dl className="space-y-3 text-sm">
        {[
          [t("fees.admissionFee"), fmt(fee.admissionFee)],
          [t("fees.tuitionFee"), `${fmt(fee.tuitionFee)} (${periodLabel})`],
          [t("fees.transportFee"), fmt(fee.transportFee)],
        ].map(([label, val]) => (
          <div key={String(label)} className="flex justify-between border-b border-border pb-2 last:border-0">
            <dt className="text-text-muted">{label}</dt>
            <dd className="font-semibold text-text-primary">{val}</dd>
          </div>
        ))}
        <div className="flex justify-between border-b border-border pb-2 pt-3">
          <dt className="text-text-muted font-semibold">{t("Total")}</dt>
          <dd className="font-semibold text-text-primary">{fmt(fee.admissionFee + fee.tuitionFee + fee.transportFee + fee.otherCharges)}</dd>
        </div>
      </dl>
      <p className="mt-3 text-xs text-text-muted">{t("fees.transportNote")}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {fee.facilities.map((f) => (
          <span key={f} className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-medium text-primary border border-primary/15 bg-surface">
            <Check className="h-3 w-3" />{t(`fees.facilityLabels.${f}`)}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
