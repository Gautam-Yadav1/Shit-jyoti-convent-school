"use client";

import Link from "next/link";
import { Award, BookOpen, Bus, GraduationCap, Heart, Monitor, Palette, Quote, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { PremiumHero } from "@/components/PremiumHero";
import { NewsTicker } from "@/components/NewsTicker";
import { SectionHeading } from "@/components/SectionHeading";
import { TopperCard } from "@/components/TopperCard";
import { FeatureCard, StatBubble, ClassPill } from "@/components/HomeSections";
import { siteConfig } from "@/lib/siteConfig";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { stats, classList } from "@/data/fees";
import { toppers } from "@/data/toppers";
import { fadeUp } from "@/lib/motion";

export default function HomePage() {
  const { t } = useLanguage();

  const features = [
    { icon: <BookOpen className="h-6 w-6" />, titleKey: "home.whyChooseUs.englishMedium", descKey: "home.whyChooseUs.englishMediumDesc" },
    { icon: <GraduationCap className="h-6 w-6" />, titleKey: "home.whyChooseUs.qualifiedTeachers", descKey: "home.whyChooseUs.qualifiedTeachersDesc" },
    { icon: <Shield className="h-6 w-6" />, titleKey: "home.whyChooseUs.safeEnvironment", descKey: "home.whyChooseUs.safeEnvironmentDesc" },
    { icon: <Bus className="h-6 w-6" />, titleKey: "home.whyChooseUs.busFacility", descKey: "home.whyChooseUs.busFacilityDesc" },
    { icon: <Monitor className="h-6 w-6" />, titleKey: "home.whyChooseUs.smartClassrooms", descKey: "home.whyChooseUs.smartClassroomsDesc" },
    { icon: <Sparkles className="h-6 w-6" />, titleKey: "home.whyChooseUs.hygienicCampus", descKey: "home.whyChooseUs.hygienicCampusDesc" },
    { icon: <Palette className="h-6 w-6" />, titleKey: "home.whyChooseUs.coCurricular", descKey: "home.whyChooseUs.coCurricularDesc" },
    { icon: <Award className="h-6 w-6" />, titleKey: "home.whyChooseUs.govtCurriculum", descKey: "home.whyChooseUs.govtCurriculumDesc" },
  ];

  const statItems = [
    { value: stats.years, suffix: "+", labelKey: "home.stats.years" },
    { value: stats.students, suffix: "+", labelKey: "home.stats.students" },
    { value: stats.faculty, suffix: "+", labelKey: "home.stats.faculty" },
    { value: stats.passRate, suffix: "%", labelKey: "home.stats.passRate" },
  ];

  const testimonials = [
    { quoteKey: "home.testimonials.quote1", authorKey: "home.testimonials.author1" },
    { quoteKey: "home.testimonials.quote2", authorKey: "home.testimonials.author2" },
    { quoteKey: "home.testimonials.quote3", authorKey: "home.testimonials.author3" },
  ];

  return (
    <>
      <PremiumHero />
      <NewsTicker />

      {/* Why Choose Us */}
      <section className="section-premium py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title={t("home.whyChooseUs.title")} subtitle={t("home.whyChooseUs.subtitle")} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <FeatureCard key={f.titleKey} icon={f.icon} title={t(f.titleKey)} description={t(f.descKey)} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Classes */}
      <section className="section-premium section-alt-bg py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title={t("home.classes.title")} subtitle={t("home.classes.subtitle")} />
          <div className="scrollbar-hidden flex gap-3 overflow-x-auto pb-2 snap-x md:flex-wrap md:justify-center">
            {classList.map((cls, i) => (
              <ClassPillWrapper key={cls.en} label={cls} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="stat-band py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.08),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title={t("home.stats.title")} light centered />
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {statItems.map((s, i) => (
              <StatBubble key={s.labelKey} value={s.value} suffix={s.suffix} label={t(s.labelKey)} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Toppers */}
      <section className="section-premium py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <SectionHeading title={t("home.toppers.title")} subtitle={t("home.toppers.subtitle")} centered={false} className="mb-0" />
            <Link href="/toppers" className="btn-premium-outline shrink-0">{t("common.viewAll")} →</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {toppers.slice(0, 4).map((topper, i) => (
              <TopperCard key={topper.id} topper={topper} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-premium section-alt-bg py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title={t("home.testimonials.title")} subtitle={t("home.testimonials.subtitle")} />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, i) => (
              <motion.blockquote
                key={item.quoteKey}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.4}
                className="school-card p-7 relative"
              >
                <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/10" />
                <p className="text-text-primary leading-relaxed italic">&ldquo;{t(item.quoteKey)}&rdquo;</p>
                <footer className="mt-5 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-text-muted">{t(item.authorKey)}</span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-premium py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl hero-mesh px-8 py-16 md:px-16 md:py-20 text-center"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.12),transparent_50%)]" />
            <div className="relative">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {t("home.cta.title").replace("{sessionYear}", siteConfig.sessionYear)}
              </h2>
              <p className="mt-4 text-blue-100/80 max-w-xl mx-auto text-lg">{t("home.cta.subtitle")}</p>
              <Link href="/contact" className="btn-premium-gold mt-8 inline-flex">
                {t("home.cta.button")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function ClassPillWrapper({ label, index }: { label: { en: string; hi: string }; index: number }) {
  const { language } = useLanguage();
  return <ClassPill label={label[language]} index={index} />;
}
