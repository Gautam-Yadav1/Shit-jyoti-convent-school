"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { siteConfig } from "@/lib/siteConfig";

export function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.ceil(value / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function FeatureCard({
  icon,
  title,
  description,
  index = 0,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeUp}
      custom={index * 0.5}
      whileHover={{ y: -6 }}
      className="school-card group p-6 md:p-7"
    >
      <div className="icon-ring mb-5 w-fit transition-transform duration-500 group-hover:scale-110">
        <span className="text-primary">{icon}</span>
      </div>
      <h3 className="font-heading text-lg font-semibold text-text-primary">{title}</h3>
      <p className="mt-2.5 text-sm text-text-muted leading-relaxed">{description}</p>
      <div className="mt-4 h-0.5 w-0 rounded-full bg-gold transition-all duration-500 group-hover:w-12" />
    </motion.div>
  );
}

export function StatBubble({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={index * 0.3}
      className="text-center"
    >
      <p className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold gradient-text-brand">
        <AnimatedCounter value={value} suffix={suffix} />
      </p>
      <p className="mt-2 text-sm md:text-base font-medium text-blue-200/80 uppercase tracking-wider">
        {label}
      </p>
    </motion.div>
  );
}

export function ClassPill({
  label,
  index,
  data,
}: {
  label: string;
  index: number;
  // bilingual label object { en, hi } used for message generation
  data?: { en: string; hi: string };
}) {
  const { language } = useLanguage();
  const phone = siteConfig.whatsappNumber?.replace(/[^0-9]/g, "") || "";
  const classNameForMsg = data ? (language === "hi" ? data.hi : data.en) : label;
  const message =
    language === "hi"
      ? `नमस्ते, मुझे ${classNameForMsg} में दाखिले के बारे में जानकारी चाहिए। धन्यवाद।`
      : `Namaste, mujhe ${classNameForMsg} mein admission ke baare mein jankari chahiye. Dhanyavaad.`;
  const waUrl = phone ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}` : "#";

  return (
    <motion.a
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={index * 0.2}
      whileHover={{ scale: 1.06, y: -2 }}
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "snap-start shrink-0 cursor-pointer rounded-xl px-5 py-2.5 font-heading text-sm font-semibold",
        "border border-primary/20 bg-surface text-primary shadow-sm",
        "hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
      )}
    >
      {label}
    </motion.a>
  );
}
