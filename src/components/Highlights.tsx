"use client";

import Image from "next/image";

interface HighlightItem {
  title: string;
  badge?: string;
}

const highlightsList: HighlightItem[] = [
  { title: "Gauri Khan Designed Interiors", badge: "SIGNATURE" },
  { title: "Prime Sector 150 Hub Location" },
  { title: "Ultra-Low Density Infrastructure" },
  { title: "Expansive Green Scape & Acreage" },
  { title: "Spacious Footprints (1900 | 2600 | 4400 Sq. Ft.)" },
  { title: "High-Ceiling Elevation Architecture" }
];

export default function Highlights() {
  return (
    <section id="highlights" className="relative pb-12 lg:pb-16 pt-0 px-4 sm:px-6 lg:px-8 bg-brand-cream overflow-hidden flex flex-col justify-between select-none">
      
      {/* Light subtle geometric background layout vector textures */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto w-full space-y-10 relative z-20 pt-10">
        
        {/* ================= EDITORIAL SECTION HEADERS (Full-Width Top) ================= */}
        <div className="text-center space-y-3">
          {/* Crimson scheme converted seamlessly over to high-end brand gold tokens */}
          <div className="inline-flex items-center gap-2 bg-white border border-neutral-200 px-3 py-1 rounded-md shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-800 uppercase">Features Index</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-brand-dark leading-tight font-serif">
            Discover the Finest Features & Finishes
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed max-w-2xl mx-auto">
            Every aspect is engineered to maximize privacy, natural airflow, and luxury. Experience architectural excellence shaped by world-class interior planning models.
          </p>
        </div>

        {/* ================= CORE CONTENT ASYMMETRIC GRID WRAPPER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT SIDE COLUMN: PREMIUM LANDSCAPE VIEWPORT CANVAS */}
          <div className="lg:col-span-5 relative w-full h-[240px] sm:h-[320px] lg:h-auto min-h-[320px] bg-white border border-neutral-200/80 rounded-2xl shadow-xl shadow-neutral-950/5 overflow-hidden p-2">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-100">
              <Image
                src="/highlights-presentation.jpg"
                alt="ACE Project Premium Landmark Architecture"
                fill
                className="object-cover transition-transform duration-700 hover:scale-103"
                sizes="(max-w-1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          {/* RIGHT SIDE COLUMN: MASTERED LIGHT LIST SYSTEM ENGINE */}
          <div className="lg:col-span-7 bg-white border border-neutral-200/80 p-5 sm:p-8 rounded-2xl shadow-xl shadow-neutral-950/5 flex flex-col justify-center">
            <div className="space-y-0 divide-y divide-neutral-200/60 w-full">
              {highlightsList.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5 w-full justify-start text-left">
                    
                    {/* SVG Pointer Framework Refined to Luxury Gold */}
                    <div className="shrink-0 flex items-center justify-center w-5 h-5 rounded-lg bg-brand-gold/10 border border-brand-gold/20 text-brand-gold group-hover:bg-brand-gold group-hover:text-white group-hover:border-brand-gold transition-all duration-500 ease-out">
                      <svg 
                        className="w-2.5 h-2.5 transition-transform duration-300 group-hover:scale-110" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>

                    {/* Typography Container Field */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-light text-sm sm:text-base text-neutral-700 tracking-wide group-hover:text-brand-dark transition-colors duration-300">
                        {item.title}
                      </span>
                      
                      {/* Optional Badge Block Reflow */}
                      {item.badge && (
                        <span className="bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm shrink-0 select-none">
                          {item.badge}
                        </span>
                      )}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* ================= BOTTOM CONTENT: PREMIUM CLEAN WHITE CTA BANNER ================= */}
      <div className="relative z-20 max-w-7xl mx-auto w-full border-t border-neutral-200/80 pt-6 mt-6">
        <div className="bg-white border border-neutral-200/80 p-6 rounded-2xl shadow-xl shadow-neutral-950/5 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-500 hover:border-neutral-300">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="bg-brand-dark text-white text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 shrink-0 select-none rounded-lg shadow-xs">
              SIGNATURE ALLOCATION
            </span>
            <h4 className="text-sm font-light text-neutral-500 tracking-wide leading-relaxed max-w-2xl">
              High profile luxury clubhouse inclusions are completely initialized inside your suite portfolio layout asset pipeline framework.
            </h4>
          </div>
          
          {/* Explore Spaces Action CTA configured with your Gold transitions */}
          <a 
            href="#amenities" 
            className="group relative bg-brand-gold text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-500 shrink-0 w-full md:w-auto text-center overflow-hidden shadow-md active:scale-[0.99] cursor-pointer border-none"
          >
            <span className="absolute inset-0 bg-brand-gold-dark transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) origin-left -translate-x-full group-hover:translate-x-0" />
            <span className="relative z-10 transition-colors duration-300">
              Explore Spaces
            </span>
          </a>
        </div>
      </div>

    </section>
  );
}