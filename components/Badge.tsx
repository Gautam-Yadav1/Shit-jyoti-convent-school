import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "primary" | "gold" | "outline" | "success";
  className?: string;
};

const variants = {
  primary: "bg-primary/10 text-primary border-primary/25",
  gold: "bg-secondary/15 text-secondary border-secondary/30 dark:text-gold dark:border-gold/30",
  outline: "bg-transparent text-text-muted border-border",
  success: "bg-success/10 text-success border-success/25",
};

export function Badge({ children, variant = "primary", className }: BadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center rounded-full border px-3.5 py-1 text-xs font-semibold uppercase tracking-wider",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
