import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/siteConfig";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function validatePayload(data: ContactPayload) {
  const errors: string[] = [];

  if (!data.name?.trim()) errors.push("Name is required");
  if (!data.phone?.trim()) {
    errors.push("Phone is required");
  } else if (!/^[6-9]\d{9}$/.test(data.phone.replace(/\s/g, ""))) {
    errors.push("Invalid phone number");
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Invalid email");
  }
  if (!data.subject?.trim()) errors.push("Subject is required");
  if (!data.message?.trim()) errors.push("Message is required");

  return errors;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function readEnv(name: string) {
  const value = process.env[name];
  if (!value) return undefined;
  return value.trim().replace(/^["']|["']$/g, "");
}

function normalizeFromAddress(raw?: string) {
  const value = raw?.trim();
  if (!value) {
    return `${siteConfig.schoolName} <onboarding@resend.dev>`;
  }
  if (value.includes("<") && value.includes(">")) {
    return value;
  }
  return `${siteConfig.schoolName} <${value}>`;
}

function buildEmailHtml(data: Required<Pick<ContactPayload, "name" | "phone" | "subject" | "message">> & { email?: string }) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a2e;">
      <h2 style="color: #1e3a5f; border-bottom: 2px solid #c9a227; padding-bottom: 8px;">
        New Contact Form Submission
      </h2>
      <p style="color: #666; margin-bottom: 24px;">${siteConfig.schoolName} website</p>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; font-weight: bold; width: 120px; vertical-align: top;">Name</td>
          <td style="padding: 10px 0;">${escapeHtml(data.name.trim())}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Phone</td>
          <td style="padding: 10px 0;">
            <a href="tel:${escapeHtml(data.phone.trim())}">${escapeHtml(data.phone.trim())}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Email</td>
          <td style="padding: 10px 0;">${
            data.email?.trim()
              ? `<a href="mailto:${escapeHtml(data.email.trim())}">${escapeHtml(data.email.trim())}</a>`
              : "Not provided"
          }</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Subject</td>
          <td style="padding: 10px 0;">${escapeHtml(data.subject.trim())}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Message</td>
          <td style="padding: 10px 0; white-space: pre-wrap;">${escapeHtml(data.message.trim())}</td>
        </tr>
      </table>
      <p style="margin-top: 24px; font-size: 12px; color: #999;">
        Sent on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
      </p>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const data: ContactPayload = await request.json();
    const errors = validatePayload(data);

    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const apiKey = readEnv("RESEND_API_KEY");
    if (!apiKey) {
      console.error("[Contact Form] RESEND_API_KEY is not configured");
      return NextResponse.json(
        { success: false, message: "Email service is not configured" },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const from = normalizeFromAddress(readEnv("RESEND_FROM"));
    const to = readEnv("CONTACT_EMAIL") || siteConfig.email;

    const name = data.name!.trim();
    const phone = data.phone!.trim();
    const subject = data.subject!.trim();
    const message = data.message!.trim();
    const email = data.email?.trim();

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email || undefined,
      subject: `[Contact] ${subject} — ${name}`,
      html: buildEmailHtml({ name, phone, email, subject, message }),
    });

    if (error) {
      console.error("[Contact Form] Resend error:", error);
      const isDev = process.env.NODE_ENV === "development";
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email",
          ...(isDev && error.message ? { detail: error.message } : {}),
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (err) {
    console.error("[Contact Form] Unexpected error:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
