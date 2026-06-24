"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { projectData } from "@/config/projectData";

export default function DisclaimerPage() {
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
              Disclaimer
            </h1>
            <p className="text-xs text-neutral-500 font-light tracking-wide">
              Last Updated: {lastUpdatedDate} | Site Managed by Margaux Tech
            </p>
          </div>

          {/* ================= LEGAL TEXT LAYERS ================= */}
          <div className="space-y-8 text-xs sm:text-sm text-neutral-700 font-light leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-base font-semibold text-neutral-950 tracking-tight">
                1. Informational & Marketing Purpose Only
              </h2>
              <p>
                This website is purely conceptual and informative in nature and does not constitute a legal offering or contract. The data, descriptions, figures, project milestones, and pricing models mapped on this platform are curated solely for baseline presentation and marketing awareness campaigns. 
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-neutral-950 tracking-tight">
                2. Independent Real Estate Advisor Status
              </h2>
              <blockquote className="border-l-2 border-[#991b1b] pl-4 py-1 my-2 bg-white/50 text-neutral-600 italic">
                Notice: This portal is managed independently by an authorized real estate channel partner. It does not represent the official direct corporate office of the principal developer group. All inquiries, profile verification routing matrices, and data submissions are captured to serve asset booking advisory routines executed by our professional desk.
              </blockquote>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-neutral-950 tracking-tight">
                3. Artistic Renderings & Imagery Variance
              </h2>
              <p>
                All project imagery, architectural mock-ups, elevations, interior configurations, simulated walk-through animations, and landscaping graphics are conceptual artist impressions. Actual construction specs, floor dimensions, materials, view parameters, and layout finishes may vary considerably from digital renderings.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-neutral-950 tracking-tight">
                4. Mandatory RERA Cross-Verification
              </h2>
              <p>
                We highly encourage and direct all end-users, buyers, and investors to cross-verify structural schedules, pricing, master allocations, and layout configurations directly against the officially published government RERA portal and development registries. We assume no legal or financial liability for inventory blocks or buying steps taken without cross-checking government registries first.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-neutral-950 tracking-tight">
                5. Outbound Links & External Assets
              </h2>
              <p>
                This site may contain hyper-linked assets leading to external mapping, local infrastructure updates, or third-party analytical portals. These links are for reference utility only. We do not control, support, or guarantee the privacy systems or transactional safety maintained on external web nodes.
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