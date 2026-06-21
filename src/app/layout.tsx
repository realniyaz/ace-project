import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { projectData } from "@/config/projectData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Upgraded: Replaced placeholder text with data parameters driven from your config pipeline
export const metadata: Metadata = {
  title: `${projectData.title} | Luxury Residences ${projectData.location}`,
  description: `Experience ultra-luxury living at ${projectData.title} in ${projectData.location}. ${projectData.structure} featuring premium architecture and world-class design plan alignments.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-white font-sans text-neutral-900 selection:bg-brand-gold/20 selection:text-neutral-900">
        {children}
      </body>
    </html>
  );
}