"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/siteConfig";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`;

  const hasMap =
    siteConfig.mapEmbedUrl &&
    !siteConfig.mapEmbedUrl.startsWith("[") &&
    siteConfig.mapEmbedUrl.includes("http");

  return (
    <PageTransition className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
      <SectionHeading title={t("contact.title")} subtitle={t("contact.subtitle")} />

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="school-card border-sky-300 bg-sky-50/50 dark:bg-sky-950/20 dark:border-sky-700 p-6 md:p-8 shadow-black/5">
          <ContactForm />
        </div>

        <div className="space-y-8">
          <div className="school-card border-pink-300 bg-pink-50/50 dark:bg-pink-950/20 dark:border-pink-700 p-6 md:p-8 shadow-black/5">
            <h2 className="font-heading text-xl text-text-primary mb-6">
              {t("contact.getInTouch")}
            </h2>
            <ul className="space-y-5 text-sm text-text-muted">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.village}, Dist. {siteConfig.address.district}
                  <br />
                  {siteConfig.address.state} — {siteConfig.address.pincode}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <p className="mt-6 text-sm text-text-muted">{t("contact.officeHours")}</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] sm:w-auto"
            >
              {t("contact.chatWhatsApp")}
            </a>
          </div>

          <div className="school-card border-violet-300 bg-violet-50/50 dark:bg-violet-950/20 dark:border-violet-700 overflow-hidden shadow-black/5">
            <h2 className="font-heading text-xl text-text-primary p-6 pb-0">
              {t("contact.mapTitle")}
            </h2>
            {hasMap ? (
              <iframe
                src={siteConfig.mapEmbedUrl}
                title={t("contact.mapTitle")}
                className="mt-4 h-64 w-full border-0 md:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="flex h-64 items-center justify-center p-6 text-center text-sm text-text-muted md:h-80">
                {t("contact.mapPlaceholder")}
              </div>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
