import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://avarest-ai.vercel.app"),
  title: {
    default: "Avarest AI",
    template: "%s | Avarest AI",
  },
  description:
    "Avarest AI helps teams ship faster with production-grade AI automation, coding support, and scalable workflows.",
  openGraph: {
    title: "Avarest AI",
    description:
      "Production-grade AI automation and engineering workflows for modern teams.",
    url: "https://avarest-ai.vercel.app",
    siteName: "Avarest AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avarest AI",
    description:
      "Production-grade AI automation and engineering workflows for modern teams.",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
