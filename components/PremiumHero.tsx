"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { HeroParticles } from "@/components/AnimatedBackground";
import { siteConfig } from "@/lib/siteConfig";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { fadeUp, slideFromRight, staggerContainer } from "@/lib/motion";

export function PremiumHero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[72vh] items-center overflow-hidden hero-mesh lg:min-h-[92vh]">
      <HeroParticles />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.2),transparent_55%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto max-w-7xl w-full px-4 pb-20 md:px-6 lg:px-8 site-header-offset">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                {t("home.hero.badge")}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="mt-6 font-heading text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl"
            >
              {siteConfig.schoolName}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-4 font-heading text-2xl md:text-3xl gradient-text-brand font-semibold"
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={3}
              className="mt-5 max-w-lg text-base md:text-lg text-blue-100/85 leading-relaxed"
            >
              {t("home.hero.intro")}
            </motion.p>

            <motion.div variants={fadeUp} custom={4} className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-premium-gold group">
                {t("home.hero.ctaAdmission")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/faculty" className="btn-premium-outline !text-white !border-white/30 hover:!bg-white/10">
                {t("home.hero.ctaFaculty")}
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={5}
              className="mt-10 flex flex-wrap gap-6 text-sm text-blue-200/70"
            >
              <span className="flex items-center gap-2">
                <span className="font-bold text-gold text-lg">15+</span> Years
              </span>
              <span className="h-4 w-px bg-white/20" />
              <span className="flex items-center gap-2">
                <span className="font-bold text-gold text-lg">450+</span> Students
              </span>
              <span className="h-4 w-px bg-white/20" />
              <span>LKG – Class 8</span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideFromRight}
            initial="hidden"
            animate="visible"
            className="relative hidden justify-center lg:flex lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full border border-gold/30 animate-rotate-slow scale-110" />
              <div className="absolute inset-0 rounded-full border border-white/10 animate-rotate-slow scale-125 [animation-direction:reverse]" />
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative glass-panel rounded-3xl p-6 md:p-8 shadow-2xl shadow-black/30"
              >
                {/* SVG for crisp rendering at any size — PNG was low resolution */}
                <img
                  src={siteConfig.logoSvg}
                  alt={siteConfig.schoolName}
                  width={320}
                  height={400}
                  className="h-52 w-auto object-contain md:h-64 lg:h-72 drop-shadow-2xl"
                  fetchPriority="high"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-4 glass-panel rounded-2xl px-5 py-3 shadow-xl"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">Soin Kalan</p>
                <p className="text-sm font-bold text-white">Sheopur, MP</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/50 lg:flex"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-scroll-hint" />
      </motion.div>
    </section>
  );
}
