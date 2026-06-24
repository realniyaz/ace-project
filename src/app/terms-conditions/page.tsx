"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { projectData } from "@/config/projectData";

export default function TermsConditions() {
  const lastUpdatedDate = "June 2026";

  return (
    <>
      {/* Global Fixed Navigation Header */}
      <Navbar />

      <main className="relative min-h-dvh bg-[#FAF9F5] text-neutral-800 antialiased pt-28 pb-16 px-4 sm:px-6 lg:px-8 selection:bg-[#991b1b]/10 selection:text-[#991b1b]">
        <div className="max-w-4xl mx-auto space-y-10 relative z-10">
          
          {/* ================= EDITORIAL HEADER ================= */}
          <div className="border-b border-neutral-200 pb-6 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-neutral-950">
              Terms & Conditions
            </h1>
            <p className="text-xs text-neutral-500 font-light tracking-wide">
              Last Updated: {lastUpdatedDate} | Site Managed by Margaux Tech
            </p>
          </div>

          {/* ================= LEGAL TEXT LAYERS ================= */}
          <div className="space-y-8 text-xs sm:text-sm text-neutral-700 font-light leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-base font-semibold text-neutral-950 tracking-tight">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing, browsing, or entering data on this digital real estate platform, you agree to be bound unconditionally by these Terms and Conditions and all applicable statutory real estate guidelines inside the territory of India. If you do not accept these provisions, please terminate usage of this interface immediately.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-neutral-950 tracking-tight">
                2. Nature of Platform & RERA Disclaimers
              </h2>
              <p>
                This platform functions exclusively as an informative landing and lead-routing portal managed by an authorized channel partner. 
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
                <li>The visual representations, artistic renderings, simulated walk-throughs, and mock imagery displayed are conceptual templates only and do not constitute actual programmatic offers.</li>
                <li>Project descriptions, unit pricing metrics, layouts, and amenity provisions are subject to change by the principal developer without static updating rules on this interface.</li>
                <li>Users are explicitly directed to verify official records, registry codes, and layout maps against government-published Real Estate Regulatory Authority (RERA) dashboards before finalizing reservation steps.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-neutral-950 tracking-tight">
                3. Accuracy of Information & Liability Limits
              </h2>
              <p>
                While we make reasonable efforts to maintain precision across digital assets, all contents are distributed strictly on an "as-is" and "as-available" framework. The system operator disclaims any liability for transaction errors, structural variance, price updating anomalies, or misunderstandings emerging from data mapped on this portal.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-neutral-950 tracking-tight">
                4. Communication Authorization (DND Override)
              </h2>
              <p>
                By processing entry fields inside form modals, user-triggered callback drawers, or floating actions on this interface, you explicitly establish a commercial relationship with our desk. 
              </p>
              <blockquote className="border-l-2 border-[#991b1b] pl-4 py-1 my-2 bg-white/50 text-neutral-600 italic">
                You declare that all inputs provided are accurate and authorize our real estate professionals to forward project assets, brochures, and call queries over SMS, direct cellular networks, and WhatsApp platforms, bypassing national DND limits under TRAI rules.
              </blockquote>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-neutral-950 tracking-tight">
                5. Intellectual Property Shields
              </h2>
              <p>
                The typographic combinations, customized styling matrices, system interface code (Next.js components, Tailwind CSS styling logic), brand identity files, and creative imagery are protected under Indian intellectual property laws. Unauthorized cloning, code-scraping, or redistribution of these assets for speculative marketing networks is strictly prohibited.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-neutral-950 tracking-tight">
                6. Indemnification Loops
              </h2>
              <p>
                You agree to indemnify, shield, and hold harmless the platform operators, development groups, managers (Margaux Tech), and affiliated personnel from any claims, damage parameters, legal cost files, or compliance loops emerging from your violation of these terms or improper usage of layout tools.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-neutral-950 tracking-tight">
                7. Governing Law & Dispute Resolution
              </h2>
              <p>
                These conditions are interpreted under the laws of the Republic of India. Any conflicts or structural disputes emerging from the interaction profile of this application will reside under the exclusive jurisdictional authority of local courts where the primary registered company assets are legally logged.
              </p>
            </section>

          </div>

          {/* ================= COMPACT BACK TO HOME CALLOUT ================= */}
          <div className="pt-6 border-t border-neutral-200 text-center">
            <a 
              href="/" 
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-neutral-950 hover:text-[#991b1b] transition-colors"
            >
              &larr; Return to Master Platform
            </a>
          </div>

        </div>
      </main>

      {/* Global Context Footer Strip Blocks */}
      <Footer />

      {/* Persistent Conversion Desktop Actions */}
      <FloatingActions />
    </>
  );
}