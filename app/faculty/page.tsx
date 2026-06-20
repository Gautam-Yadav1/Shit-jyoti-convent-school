"use client";

import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { LeadershipCard } from "@/components/LeadershipCard";
import { FacultyCard } from "@/components/FacultyCard";
import { leadership, teachingStaff } from "@/data/faculty";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FacultyPage() {
  const { t } = useLanguage();

  return (
    <PageTransition className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
      <SectionHeading title={t("faculty.title")} subtitle={t("faculty.subtitle")} />

      <section className="mb-16">
        <h2 className="font-heading text-2xl text-text-primary mb-6 text-center md:text-left">
          {t("faculty.leadership")}
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {leadership.map((member, i) => (
            <LeadershipCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl text-text-primary mb-6 text-center md:text-left">
          {t("faculty.teachingStaff")}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teachingStaff.map((member, i) => (
            <FacultyCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
