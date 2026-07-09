import type { Metadata } from "next";
import Script from "next/script";
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
        
        {/* ================= GOOGLE ADS TRACKING ENGINE ================= */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18243414829"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18243414829');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}