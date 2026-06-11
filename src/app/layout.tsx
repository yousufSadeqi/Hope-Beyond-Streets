import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteChrome } from "@/components/layout/site-chrome";
import { BRAND } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${BRAND.name}, ${BRAND.tagline}`,
  description: BRAND.mission,
  icons: {
    icon: [{ url: BRAND.logo, type: "image/png" }],
    apple: [{ url: BRAND.logo, type: "image/png" }],
    shortcut: BRAND.logo,
  },
  keywords: [
    "nonprofit",
    "children",
    "charity",
    "France",
    "undocumented families",
    "street begging prevention",
    "education",
    "donations",
    "humanitarian NGO",
    "Lyon",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-text font-sans">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
