"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bubbles } from "./SchoolDecor";

export function SchoolHeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <Bubbles />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-[2rem] border-[4px] border-primary/25 shadow-[0_12px_0_0] shadow-primary/15 dark:shadow-primary/25"
      >
        <Image
          src="/images/hero-scene.svg"
          alt="Colourful school scene with children, building and playground"
          width={800}
          height={600}
          className="w-full h-auto"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
      </motion.div>
      <motion.div
        className="absolute -bottom-3 -right-3 rounded-2xl border-[3px] border-secondary bg-surface px-4 py-2 font-heading text-sm font-bold text-text-primary shadow-lg"
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        LKG – Class 8
      </motion.div>
    </motion.div>
  );
}
