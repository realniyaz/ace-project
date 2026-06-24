"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { projectData } from "@/config/projectData";

export default function PrivacyPolicy() {
  const lastUpdatedDate = "June 2026";

  return (
    <>
      {/* Global Fixed Navigation Header */}
      <Navbar />

      <main className="relative min-h-dvh bg-[#FAF9F5] text-neutral-800 antialiased pt-28 pb-16 px-4 sm:px-6 lg:px-8 selection:bg-[#991b1b]/10 selection:text-[#991b1b]">
        <div className="max-w-4xl mx-auto space-y-10 relative z-10">
          
          {/* ================= EDITORIAL SHEET HEADER ================= */}
          <div className="border-b border-neutral-200 pb-6 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-neutral-950">
              Privacy Policy
            </h1>
            <p className="text-xs text-neutral-500 font-light tracking-wide">
              Last Updated: {lastUpdatedDate} | Site Managed by Margaux Tech
            </p>
          </div>

          {/* ================= DOCUMENT BODY SECTION MATRIX ================= */}
          <div className="space-y-8 text-xs sm:text-sm text-neutral-700 font-light leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-base font-semibold text-neutral-950 tracking-tight">
                1. General Overview
              </h2>
              <p>
                We appreciate your trust in sharing your information with us. This Privacy Policy documents how we handle personal records collected through this landing platform representing real estate inventory profiles linked with authorized channel partners. By submitting data on this portal, you assent to the information workflows logged below.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-neutral-950 tracking-tight">
                2. Nature of Data Gathered
              </h2>
              <p>
                To route priority assignment information pipelines, brochure requests, and scheduled unit site visits, we assemble personal verification coordinates that you provide explicitly within user form input fields. This information vectors include:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
                <li>First & Last Legal Identifiers (Full Name)</li>
                <li>Telecommunication Numbers (Mobile Contact)</li>
                <li>Electronic Correspondence Mail Coordinates (Email Address)</li>
                <li>Device attributes, baseline IP signatures, and structural cookie metadata tracked silently to maintain layout stability.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-neutral-950 tracking-tight">
                3. Purpose & Utilization of Collected Data
              </h2>
              <p>
                Information coordinates are mapped to secure cloud pipelines explicitly deployed for the following conversion objectives:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
                <li>Transmitting explicit layout brochures, master plans, and luxury inventory allocations.</li>
                <li>Scheduling structured physical or digital product inspection routines.</li>
                <li>Executing immediate desk advisor call-backs via SMS, direct voice frequencies, or authenticated text streams (WhatsApp).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-neutral-950 tracking-tight">
                4. DND Override Consent & Statutory Adherence
              </h2>
              <blockquote className="border-l-2 border-[#991b1b] pl-4 py-1 my-2 bg-white/50 text-neutral-600 italic">
                Important: By checking compliance boxes or executing form submissions on this interface, you explicitly authorize project desk verification systems to share updates over phone calls, SMS notifications, and WhatsApp updates. This authorization overrides any prior preferences logged within national Do Not Disturb (DND) registers or TRAI commercial filter networks.
              </blockquote>
              <p>
                This processing aligns natively with provisions mapped inside Section 43A of the **Information Technology Act, 2000 (India)** and relative RERA channel partner compliance directives.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-neutral-950 tracking-tight">
                5. Third-Party Information Shields
              </h2>
              <p>
                Your verification records are treated under premium data protection schemas. We do not engage in trade, leasing models, or speculative marketing arrays utilizing your unique personal records. Data vectors are shared exclusively with the principal development groups linked with authorized project clearances to process structural transaction logs.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-neutral-950 tracking-tight">
                6. Storage Lifespan & Security Control Loops
              </h2>
              <p>
                Data sets reside securely in state-of-the-art hosted networks reinforced by end-to-end transport layer encryptions ($SSL / TLS$). Files are maintained only as long as necessary to fulfill the commercial advisory framework or legal record requirements dictated under Indian real estate tracking laws.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-neutral-950 tracking-tight">
                7. User Rights & Data Rectification Pipelines
              </h2>
              <p>
                You retain total autonomy over your information entries. At any given moment in your browsing timeline, you can query, update, or completely purge your records from our systems by transmitting a deletion brief directly to our technical desk at <span className="font-medium text-[#991b1b]">{projectData.contact.email}</span>.
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