import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diamond Paving Inc. | Professional Asphalt Paving | Front Royal, VA",
  description:
    "Diamond Paving Inc. provides quality residential and commercial paving, sealcoating, excavation, and snow removal services in Front Royal, VA and surrounding areas. Call 540-635-6194 for a free quote.",
  keywords:
    "paving, asphalt, sealcoating, driveway paving, commercial paving, Front Royal VA, excavation, snow removal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
