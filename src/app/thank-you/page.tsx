"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { projectData } from "@/config/projectData";

export default function ThankYouPage() {
  // Safe WhatsApp Link Format Logic
  const whatsappMessage = encodeURIComponent(`Hi, I just submitted my details on the portal for ${projectData.title}. Please connect and share the pricing details and brochure here.`);
  const whatsappUrl = `https://wa.me/${projectData.contact.mobile.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <>
      {/* Global Navigation Header */}
      <Navbar />

      <main className="relative min-h-dvh bg-[#FAF9F5] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 selection:bg-[#991b1b]/10 selection:text-[#991b1b] antialiased">
        {/* Subtle Decorative Background Layer */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* Minimal Content Card */}
        <div className="relative bg-white border border-neutral-200/80 w-full max-w-md rounded-2xl p-6 sm:p-10 shadow-xl text-center space-y-6 z-10">
          
          {/* Green Success Icon */}
          <div className="mx-auto w-14 h-14 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
            <svg className="w-6 h-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Understandable Message */}
          <div className="space-y-2">
            <h1 className="text-xl sm:text-2xl font-medium text-neutral-900 tracking-tight">
              Thank You!
            </h1>
            <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
              We have received your details. Our relationship manager is reviewing your request and will call you back within 15 minutes.
            </p>
          </div>

          {/* ================= PRIMARY HIGH-VISIBILITY WHATSAPP SHORTCUT ================= */}
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-[#00D254] text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg hover:bg-[#00b849] active:scale-[0.99] transition-all duration-300"
            >
              <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
                <img 
                  src="/wh.png" 
                  alt="WhatsApp" 
                  className="w-full h-full object-contain block brightness-0 invert"
                />
              </div>
              <span>Connect Instantly on WhatsApp</span>
            </a>
          </div>

          {/* Secondary Action: Back to Home */}
          <div className="pt-2 border-t border-neutral-100">
            <Link 
              href="/" 
              className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer"
            >
              &larr; Back to Home Page
            </Link>
          </div>

        </div>
      </main>

      {/* Global Context Footer Strip */}
      <Footer />

      {/* Global Floating Handlers */}
      <FloatingActions />
    </>
  );
}