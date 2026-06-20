"use client";

import Image from "next/image";
import { UserCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import type { FacultyMember } from "@/data/faculty";
import { useBilingual, useLanguage, getLocalizedText } from "@/lib/i18n/LanguageContext";
import { fadeUp } from "@/lib/motion";

export function FacultyCard({ member, index = 0 }: { member: FacultyMember; index?: number }) {
  const { language, t } = useLanguage();
  const name = useBilingual(member.name);
  const designation = useBilingual(member.designation);
  const qualification = useBilingual(member.qualification);
  const subjects = useBilingual(member.subjects);
  const classes = member.classes ? getLocalizedText(member.classes, language) : null;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={index * 0.2}
      whileHover={{ y: -6 }}
      className="school-card p-6 group"
    >
      <div className="flex flex-col items-center text-center">
        {member.image ? (
          <Image src={member.image} alt={name} width={96} height={96} className="h-24 w-24 rounded-2xl object-cover" />
        ) : (
          <div className="icon-ring h-24 w-24 rounded-2xl">
            {member.initials ? <span className="font-heading text-2xl font-bold text-primary">{member.initials}</span> : <UserCircle2 className="h-12 w-12 text-primary" />}
          </div>
        )}
        <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary">{name}</h3>
        <p className="text-sm font-medium text-secondary">{designation}</p>
        <div className="mt-4 w-full space-y-2 text-left text-sm text-text-muted border-t border-border pt-4">
          <p><span className="font-semibold text-text-primary">{t("faculty.qualification")}: </span>{qualification}</p>
          <p><span className="font-semibold text-text-primary">{t("faculty.subjects")}: </span>{subjects}</p>
          {classes && <p><span className="font-semibold text-text-primary">{t("faculty.classes")}: </span>{classes}</p>}
          {member.experience && <p><span className="font-semibold text-text-primary">{t("faculty.experience")}: </span>{member.experience} {t("common.yearsExperience")}</p>}
        </div>
      </div>
    </motion.article>
  );
}
