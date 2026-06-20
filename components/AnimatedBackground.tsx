"use client";

import { motion } from "framer-motion";

const orbs = [
  { color: "var(--orb-1)", size: "600px", top: "-10%", left: "-10%", duration: 25 },
  { color: "var(--orb-2)", size: "500px", top: "40%", right: "-15%", duration: 30 },
  { color: "var(--orb-3)", size: "400px", bottom: "-5%", left: "30%", duration: 22 },
];

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 grid-bg opacity-60 dark:opacity-100" />
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[100px]"
          style={{
            background: orb.color,
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            opacity: "var(--orb-opacity)",
          }}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function HeroParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${(i * 17 + 5) % 95}%`,
    top: `${(i * 23 + 10) % 80}%`,
    size: 2 + (i % 3),
    delay: i * 0.3,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white/30 dark:bg-sky-400/20"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4 + (p.id % 3), repeat: Infinity, delay: p.delay }}
        />
      ))}
    </div>
  );
}
