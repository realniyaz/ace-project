"use client";

import { projectData } from "@/config/projectData";

interface LocationMilestone {
  label: string;
  time: string;
}

const milestones: LocationMilestone[] = [
  { label: "Prime Location – Sector 150, Noida", time: "Core Hub" },
  { label: "Noida-Greater Noida Expressway", time: "2 Mins" },
  { label: "Yamuna Expressway Connectivity", time: "Close Proximity" },
  { label: "2025 Milestone 06: Airport Operations Begin", time: "30 Mins" }
];

export default function Location() {
  return (
    <section id="location" className="relative pb-20 lg:pb-28 pt-0 px-4 sm:px-6 lg:px-8 bg-brand-cream overflow-hidden select-none">
      
      {/* Light subtle geometric background layout vector textures */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
        
        {/* ================= LEFT COLUMN: TYPOGRAPHY & MILESTONES TIMELINE ================= */}
        <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="space-y-3">
            {/* Crimson tag badge reflowed to high-end brand gold tokens */}
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 px-3 py-1 rounded-none">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-brand-gold uppercase">Connectivity Index</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-brand-dark leading-tight font-serif">
              Strategic Proximity Benefits
            </h2>
          </div>

          {/* Symmetrical Proximity List Map Layout */}
          <div className="w-full space-y-3.5 pt-2">
            {milestones.map((item) => (
              <div
                key={item.label}
                className="group flex items-center justify-between p-4.5 bg-white border border-neutral-200/80 rounded-xl shadow-xs transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) hover:shadow-xl hover:shadow-neutral-900/5 hover:border-brand-gold/30"
              >
                <div className="flex items-center gap-3.5 text-left">
                  {/* Custom Minimalist Map Point Branded to Luxury Gold */}
                  <div className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-neutral-50 text-neutral-400 group-hover:bg-brand-gold/15 group-hover:text-brand-gold transition-colors duration-300">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="font-light text-neutral-700 tracking-wide text-xs sm:text-sm group-hover:text-brand-dark transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
                
                {/* Time Indicator Blocks shifted over to gold status parameters */}
                <span className="shrink-0 ml-4 px-3 py-1 bg-neutral-50 rounded-lg text-[10px] font-mono tracking-wider font-semibold uppercase text-neutral-500 border border-neutral-100 group-hover:bg-brand-gold/10 group-hover:text-brand-gold group-hover:border-brand-gold/20 transition-all duration-300">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT COLUMN: GOOGLE MAPS IFRAME ================= */}
        <div className="lg:col-span-7 w-full h-[300px] sm:h-[400px] xl:h-[460px] relative rounded-2xl overflow-hidden border border-neutral-200/80 shadow-2xl shadow-neutral-950/5 bg-white p-2">
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-100">
            <iframe 
              src="https://maps.google.com/maps?q=Sector%20150%20Noida&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
}