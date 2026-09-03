import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/content/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Zaira Shahid — AI Automation Engineer & Full-Stack Developer";
const description =
  "Zaira Shahid is an AI Automation Engineer, Full-Stack Developer and GTM Engineer building intelligent automation systems, modern interfaces and AI-powered digital products.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: "%s — Zaira Shahid",
  },
  description,
  keywords: [
    "Zaira Shahid",
    "AI Automation Engineer",
    "Full-Stack Developer",
    "GTM Engineer",
    "Next.js Developer",
    "AI Automation",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    title,
    description,
    url: profile.siteUrl,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text-primary">{children}</body>
    </html>
  );
}
