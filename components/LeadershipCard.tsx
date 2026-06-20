"use client";

import Image from "next/image";
import { UserCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import type { FacultyMember } from "@/data/faculty";
import { useBilingual, useLanguage, getLocalizedText } from "@/lib/i18n/LanguageContext";
import { fadeUp } from "@/lib/motion";
import { Badge } from "./Badge";

export function LeadershipCard({ member, index = 0 }: { member: FacultyMember; index?: number }) {
  const { language } = useLanguage();
  const name = useBilingual(member.name);
  const designation = useBilingual(member.designation);
  const qualification = useBilingual(member.qualification);
  const message = member.message ? getLocalizedText(member.message, language) : null;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={index * 0.3}
      className="school-card overflow-hidden"
    >
      <div className="h-1.5 bg-gradient-to-r from-primary via-gold to-primary" />
      <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:gap-6 p-8">
        {member.image ? (
          <Image src={member.image} alt={name} width={120} height={120} className="h-28 w-28 shrink-0 rounded-2xl object-cover" />
        ) : (
          <div className="icon-ring h-28 w-28 shrink-0 rounded-2xl">
            {member.initials ? <span className="font-heading text-3xl font-bold text-primary">{member.initials}</span> : <UserCircle2 className="h-16 w-16 text-primary" />}
          </div>
        )}
        <div className="mt-4 md:mt-0 flex-1">
          <Badge variant="gold" className="mb-3">{designation}</Badge>
          <h3 className="font-heading text-2xl font-bold text-text-primary">{name}</h3>
          <p className="mt-1 text-sm text-text-muted">{qualification}</p>
          {message && <p className="mt-4 text-text-primary italic leading-relaxed border-l-2 border-gold pl-4">&ldquo;{message}&rdquo;</p>}
        </div>
      </div>
    </motion.article>
  );
}
