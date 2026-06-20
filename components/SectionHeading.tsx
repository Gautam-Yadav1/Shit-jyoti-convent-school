"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
};

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      className={cn(centered && "text-center", "mb-12 md:mb-16", className)}
    >
      <p className={cn(
        "text-xs font-bold uppercase tracking-[0.2em] mb-3",
        light ? "text-gold" : "text-secondary"
      )}>
        Shiv Jyoti Convent School
      </p>
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-[2.75rem] font-bold",
        light ? "text-white" : "text-text-primary"
      )}>
        {title}
      </h2>
      <div className={cn("mt-4 gold-line w-24", centered && "mx-auto")} />
      {subtitle && (
        <p className={cn(
          "mt-5 max-w-2xl text-base md:text-lg leading-relaxed mx-auto",
          light ? "text-blue-100/80" : "text-text-muted"
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
