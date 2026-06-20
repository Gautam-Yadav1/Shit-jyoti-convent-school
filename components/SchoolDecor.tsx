"use client";

import { motion } from "framer-motion";

const stars = [
  { top: "10%", left: "8%", size: 20, delay: 0, color: "#FFD54F" },
  { top: "22%", right: "12%", size: 14, delay: 0.5, color: "#6EC8FF" },
  { top: "58%", left: "5%", size: 12, delay: 1, color: "#FF7EB3" },
  { top: "72%", right: "8%", size: 18, delay: 0.3, color: "#C4A5FF" },
  { top: "40%", right: "20%", size: 10, delay: 0.8, color: "#6EE7A0" },
];

export function FloatingStars({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {stars.map((star, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 24 24"
          className="absolute"
          style={{
            top: star.top,
            left: star.left,
            right: star.right,
            width: star.size,
            height: star.size,
          }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3.5 + i * 0.4,
            repeat: Infinity,
            delay: star.delay,
          }}
        >
          <path
            fill={star.color}
            d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z"
          />
        </motion.svg>
      ))}
    </div>
  );
}

export function FloatingClouds({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="absolute top-10 left-[6%] text-white/90 dark:text-white/40"
        animate={{ x: [0, 24, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <CloudSvg className="h-16 w-28 md:h-24 md:w-40" />
      </motion.div>
      <motion.div
        className="absolute top-20 right-[10%] text-white/75 dark:text-white/30"
        animate={{ x: [0, -18, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <CloudSvg className="h-12 w-24 md:h-20 md:w-36" />
      </motion.div>
    </div>
  );
}

function CloudSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" className={className} fill="currentColor">
      <ellipse cx="40" cy="40" rx="35" ry="22" />
      <ellipse cx="75" cy="35" rx="30" ry="20" />
      <ellipse cx="55" cy="28" rx="28" ry="22" />
    </svg>
  );
}

export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 opacity-50 dark:opacity-30 ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage:
          "radial-gradient(circle, var(--dot-color) 1.5px, transparent 1.5px)",
        backgroundSize: "28px 28px",
      }}
    />
  );
}

export function RainbowStripe({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`h-1 w-full bg-gradient-to-r from-sky-400 via-amber-300 via-pink-400 via-lime-400 to-violet-400 ${className}`}
      aria-hidden="true"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ transformOrigin: "left" }}
    />
  );
}

export function Bubbles({ className = "" }: { className?: string }) {
  const bubbles = [
    { size: 80, left: "15%", top: "30%", color: "rgba(59,158,255,0.15)", delay: 0 },
    { size: 120, left: "75%", top: "20%", color: "rgba(255,184,48,0.12)", delay: 1 },
    { size: 60, left: "85%", top: "60%", color: "rgba(255,92,138,0.1)", delay: 0.5 },
    { size: 100, left: "5%", top: "70%", color: "rgba(155,123,255,0.12)", delay: 1.5 },
  ];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            top: b.top,
            background: b.color,
          }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: b.delay }}
        />
      ))}
    </div>
  );
}
