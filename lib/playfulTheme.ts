export const cardAccentStyles = [
  {
    border: "border-sky-300 dark:border-sky-500",
    bg: "bg-sky-50 dark:bg-sky-500/15",
    icon: "bg-sky-200 text-sky-700 dark:bg-sky-500/30 dark:text-sky-200",
    pill: "bg-sky-400 hover:bg-sky-500 text-white border-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400",
  },
  {
    border: "border-amber-300 dark:border-amber-500",
    bg: "bg-amber-50 dark:bg-amber-500/15",
    icon: "bg-amber-200 text-amber-700 dark:bg-amber-500/30 dark:text-amber-200",
    pill: "bg-amber-400 hover:bg-amber-500 text-white border-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400",
  },
  {
    border: "border-pink-300 dark:border-pink-500",
    bg: "bg-pink-50 dark:bg-pink-500/15",
    icon: "bg-pink-200 text-pink-700 dark:bg-pink-500/30 dark:text-pink-200",
    pill: "bg-pink-400 hover:bg-pink-500 text-white border-pink-500 dark:bg-pink-500 dark:hover:bg-pink-400",
  },
  {
    border: "border-lime-300 dark:border-lime-500",
    bg: "bg-lime-50 dark:bg-lime-500/15",
    icon: "bg-lime-200 text-lime-700 dark:bg-lime-500/30 dark:text-lime-200",
    pill: "bg-lime-500 hover:bg-lime-600 text-white border-lime-600 dark:bg-lime-500 dark:hover:bg-lime-400",
  },
  {
    border: "border-violet-300 dark:border-violet-500",
    bg: "bg-violet-50 dark:bg-violet-500/15",
    icon: "bg-violet-200 text-violet-700 dark:bg-violet-500/30 dark:text-violet-200",
    pill: "bg-violet-400 hover:bg-violet-500 text-white border-violet-500 dark:bg-violet-500 dark:hover:bg-violet-400",
  },
  {
    border: "border-orange-300 dark:border-orange-500",
    bg: "bg-orange-50 dark:bg-orange-500/15",
    icon: "bg-orange-200 text-orange-700 dark:bg-orange-500/30 dark:text-orange-200",
    pill: "bg-orange-400 hover:bg-orange-500 text-white border-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400",
  },
  {
    border: "border-teal-300 dark:border-teal-500",
    bg: "bg-teal-50 dark:bg-teal-500/15",
    icon: "bg-teal-200 text-teal-700 dark:bg-teal-500/30 dark:text-teal-200",
    pill: "bg-teal-400 hover:bg-teal-500 text-white border-teal-500 dark:bg-teal-500 dark:hover:bg-teal-400",
  },
  {
    border: "border-rose-300 dark:border-rose-500",
    bg: "bg-rose-50 dark:bg-rose-500/15",
    icon: "bg-rose-200 text-rose-700 dark:bg-rose-500/30 dark:text-rose-200",
    pill: "bg-rose-400 hover:bg-rose-500 text-white border-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400",
  },
] as const;

export function getCardAccent(index: number) {
  return cardAccentStyles[index % cardAccentStyles.length];
}
