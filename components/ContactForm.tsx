"use client";

import { FormEvent, useRef, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Modal } from "@/components/Modal";
import { cn } from "@/lib/utils";

type FormData = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const FIELD_ORDER: (keyof FormData)[] = ["name", "phone", "email", "subject", "message"];

const EMPTY_FORM: FormData = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const fieldRefs = useRef<Partial<Record<keyof FormData, HTMLInputElement | HTMLTextAreaElement>>>({});
  const errorAlertRef = useRef<HTMLParagraphElement>(null);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = t("contact.form.required");
    if (!form.phone.trim()) {
      next.phone = t("contact.form.required");
    } else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ""))) {
      next.phone = t("contact.form.invalidPhone");
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = t("contact.form.invalidEmail");
    }
    if (!form.subject.trim()) next.subject = t("contact.form.required");
    if (!form.message.trim()) next.message = t("contact.form.required");
    return next;
  };

  const focusField = (key: keyof FormData) => {
    window.requestAnimationFrame(() => {
      const el = fieldRefs.current[key];
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.focus({ preventScroll: true });
    });
  };

  const focusFirstError = (validationErrors: FormErrors) => {
    const firstKey = FIELD_ORDER.find((key) => validationErrors[key]);
    if (firstKey) focusField(firstKey);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      focusFirstError(validationErrors);
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setShowSuccessModal(true);
    } catch {
      setStatus("error");
      window.requestAnimationFrame(() => {
        errorAlertRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    setForm(EMPTY_FORM);
    setErrors({});
    setStatus("idle");
  };

  const inputClass =
    "w-full rounded-2xl border border-border bg-background px-4 py-3 text-text-primary placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

  const setFieldRef =
    (key: keyof FormData) => (el: HTMLInputElement | HTMLTextAreaElement | null) => {
      if (el) fieldRefs.current[key] = el;
    };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text-primary">
            {t("contact.form.name")} *
          </label>
          <input
            ref={setFieldRef("name")}
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder={t("contact.form.namePlaceholder")}
            className={cn(inputClass, errors.name && "border-accent ring-1 ring-accent/30")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-accent">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-text-primary">
            {t("contact.form.phone")} *
          </label>
          <input
            ref={setFieldRef("phone")}
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder={t("contact.form.phonePlaceholder")}
            className={cn(inputClass, errors.phone && "border-accent ring-1 ring-accent/30")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-accent">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-primary">
            {t("contact.form.email")}
          </label>
          <input
            ref={setFieldRef("email")}
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder={t("contact.form.emailPlaceholder")}
            className={cn(inputClass, errors.email && "border-accent ring-1 ring-accent/30")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-accent">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-text-primary">
            {t("contact.form.subject")} *
          </label>
          <input
            ref={setFieldRef("subject")}
            id="subject"
            type="text"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            placeholder={t("contact.form.subjectPlaceholder")}
            className={cn(inputClass, errors.subject && "border-accent ring-1 ring-accent/30")}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
          {errors.subject && (
            <p id="subject-error" className="mt-1 text-sm text-accent">
              {errors.subject}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-primary">
            {t("contact.form.message")} *
          </label>
          <textarea
            ref={setFieldRef("message")}
            id="message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder={t("contact.form.messagePlaceholder")}
            className={cn(inputClass, "resize-none", errors.message && "border-accent ring-1 ring-accent/30")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-accent">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-premium-primary w-full sm:w-auto disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              {t("contact.form.sending")}
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              {t("contact.form.submit")}
            </>
          )}
        </button>

        {status === "error" && (
          <p
            ref={errorAlertRef}
            className="rounded-2xl bg-accent/10 px-4 py-3 text-sm text-accent"
            role="alert"
          >
            {t("contact.error")}
          </p>
        )}
      </form>

      <Modal open={showSuccessModal} onClose={handleSuccessClose} actionLabel={t("common.ok")}>
        <p>{t("contact.success")}</p>
      </Modal>
    </>
  );
}
