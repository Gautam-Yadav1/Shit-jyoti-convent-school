"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { MobileQuickCallBar } from "./MobileQuickCallBar";
import { cn } from "@/lib/utils";

const navKeys = [
  { href: "/", key: "nav.home" },
  { href: "/about", key: "nav.about" },
  { href: "/faculty", key: "nav.faculty" },
  { href: "/fees", key: "nav.fees" },
  { href: "/toppers", key: "nav.toppers" },
  { href: "/contact", key: "nav.contact" },
] as const;

export function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const onHeroOverlay = pathname === "/" && !scrolled;
  const solidHeader = !onHeroOverlay;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div aria-hidden className={cn("site-header-bg", solidHeader && "is-solid")} />
      <div className={cn("site-header-gold-line relative", solidHeader && "is-solid")} />

      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
          <motion.div whileHover={{ scale: 1.03 }} className="shrink-0">
            <Image
              src={siteConfig.logoSvg}
              alt={`${siteConfig.schoolName} logo`}
              width={48}
              height={56}
              priority
              unoptimized
              className="h-10 w-auto object-contain md:h-11 drop-shadow-md"
            />
          </motion.div>
          <div className="leading-tight">
            <span
              className={cn(
                "block font-heading text-sm font-bold transition-colors duration-500 md:text-base",
                onHeroOverlay ? "text-white" : "text-text-primary"
              )}
            >
              Shiv Jyoti
            </span>
            <span
              className={cn(
                "block text-[10px] font-medium uppercase tracking-widest transition-colors duration-500 md:text-xs",
                onHeroOverlay ? "text-gold" : "text-secondary"
              )}
            >
              Convent School
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navKeys.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-500",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  onHeroOverlay
                    ? active ? "text-gold" : "text-white/80 hover:text-white"
                    : active ? "text-primary" : "text-text-muted hover:text-primary"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className={cn(
                      "absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full transition-colors duration-500",
                      onHeroOverlay ? "bg-gold" : "bg-primary"
                    )}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {t(item.key)}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle
            variant={onHeroOverlay ? "hero" : "default"}
            className="flex"
          />
          <ThemeToggle
            className={cn(
              "transition-colors duration-500",
              onHeroOverlay && "text-white hover:bg-white/10 hover:text-white"
            )}
          />
          <Link href="/contact" className="hidden md:inline-flex btn-premium-gold !py-2 !px-5 !text-xs">
            {t("nav.admissionOpen")}
          </Link>
          <button
            className={cn(
              "rounded-lg p-2 transition-colors duration-500 lg:hidden",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              onHeroOverlay ? "text-white" : "text-text-primary"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={t("nav.menuToggle")}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <MobileQuickCallBar heroStyle={onHeroOverlay} hidden={mobileOpen} />

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden border-t border-border bg-surface/95 backdrop-blur-md lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
              {navKeys.map((item, i) => (
                <motion.div key={item.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                      isActive(item.href) ? "bg-primary/10 text-primary" : "text-text-primary hover:bg-primary/5"
                    )}
                  >
                    {t(item.key)}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-3 flex justify-center">
                <LanguageToggle className="w-full max-w-xs" />
              </div>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-premium-gold mt-3 justify-center">
                {t("nav.admissionOpen")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
