"use client";

import Image from "next/image";
import { Award } from "lucide-react";
import { motion } from "framer-motion";
import type { Topper } from "@/data/toppers";
import { useBilingual } from "@/lib/i18n/LanguageContext";
import { fadeUp } from "@/lib/motion";
import { Badge } from "./Badge";

export function TopperCard({ topper, index = 0 }: { topper: Topper; index?: number }) {
  const name = useBilingual(topper.name);
  const className = useBilingual(topper.className);
  const achievement = useBilingual(topper.achievement);

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={index * 0.3}
      whileHover={{ y: -6 }}
      className="school-card p-6 text-center group"
    >
      {topper.image ? (
        <Image
          src={topper.image}
          alt={name}
          width={80}
          height={80}
          className="mx-auto h-20 w-20 rounded-2xl object-cover transition-transform group-hover:scale-110"
        />
      ) : (
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl icon-ring font-heading text-2xl font-bold text-primary transition-transform group-hover:scale-110">
          {topper.initials}
        </div>
      )}
      <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary">{name}</h3>
      <p className="text-sm text-text-muted">{className}</p>
      <p className="mt-2 font-heading text-3xl font-bold gradient-text-brand">{topper.percentage}%</p>
      <div className="mt-3 flex justify-center">
        <Badge variant="gold">
          <Award className="mr-1 inline h-3 w-3" />
          {achievement}
        </Badge>
      </div>
    </motion.article>
  );
}
