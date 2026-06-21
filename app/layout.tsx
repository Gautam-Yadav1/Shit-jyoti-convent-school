import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: siteConfig.schoolName, template: `%s | ${siteConfig.schoolName}` },
  description: `${siteConfig.schoolName} — Government certified NCERT-affiliated English medium school offering LKG to Class 8 in Soin Kalan, Sheopur, Madhya Pradesh.`,
  openGraph: {
    title: siteConfig.schoolName,
    description: siteConfig.tagline,
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.schoolName,
    images: [{ url: siteConfig.logo, width: 512, height: 512, alt: siteConfig.schoolName }],
  },
  icons: {
    icon: [{ url: siteConfig.logo, type: "image/jpeg" }],
    apple: siteConfig.logo,
    shortcut: siteConfig.logo,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${inter.variable} flex min-h-screen flex-col antialiased`}>
        <Providers>
          <AnimatedBackground />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloatingButton />
        </Providers>
      </body>
    </html>
  );
}
