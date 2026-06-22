"use client";

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
    <section id="highlights" className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 overflow-hidden min-h-screen lg:min-h-[60vh] flex flex-col justify-between">
      
      {/* ================= BACKGROUND PRESENTATION LAYER ================= */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/highlights-presentation.jpg')" }}
      >
        {/* Deep mask override matching the primary Hero backdrop shadow configurations */}
        <div className="absolute inset-0 bg-linear-to-b from-black/95 via-neutral-950/90 to-black/95 z-10" />
      </div>

      {/* ================= CORE CONTENT GRID WRAPPER ================= */}
      <div className="relative z-20 max-w-6xl mx-auto w-full flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-center my-auto">
        
        {/* LEFT COLUMN STRUCTURE: EDITORIAL TEXT AREA */}
        <div className="w-full lg:col-span-5 space-y-4 text-center lg:text-left">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#991b1b] bg-[#991b1b]/10 border border-[#991b1b]/30 px-2.5 py-1 inline-block lg:block lg:w-max rounded-sm backdrop-blur-md">
              Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
              Discover the Finest Features & Finishes
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
            Every aspect is engineered to maximize privacy, natural airflow, and luxury. Experience architectural excellence shaped by world-class interior planning models.
          </p>
        </div>

        {/* RIGHT COLUMN STRUCTURE: MASTERED LIST ENGINE */}
        <div className="w-full lg:col-span-7 space-y-0 divide-y divide-white/10">
          {highlightsList.map((item) => (
            <div
              key={item.title}
              className="group flex items-center gap-4 py-4 transition-all duration-300 border-white/5"
            >
              {/* Flex Anchor Box for Icon and Text Layout Alignment */}
              <div className="flex items-center gap-3.5 w-full justify-start text-left">
                
                {/* SVG Pointer Framework - Branded to ACE Crimson Red */}
                <div className="shrink-0 flex items-center justify-center w-5 h-5 rounded-sm bg-[#991b1b]/15 border border-[#991b1b]/30 text-white group-hover:bg-[#991b1b] group-hover:border-[#991b1b] transition-all duration-500 ease-out">
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
                  <span className="font-light text-sm sm:text-base text-neutral-200 tracking-wide group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </span>
                  
                  {/* Optional Badge Block Reflow */}
                  {item.badge && (
                    <span className="bg-[#991b1b]/20 border border-[#991b1b]/40 text-white text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-xs shrink-0 select-none">
                      {item.badge}
                    </span>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ================= BOTTOM CONTENT COMPACT CTA BANNER ================= */}
      <div className="relative z-20 max-w-6xl mx-auto w-full border-t border-white/10 pt-6 mt-10">
        <div className="bg-neutral-900/60 backdrop-blur-xl border border-white/10 p-5 flex flex-col md:flex-row items-center justify-between gap-5 transition-all duration-500 hover:border-white/20">
          
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="bg-[#991b1b] text-white text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1.5 shrink-0 select-none rounded-none">
              SIGNATURE CLUB
            </span>
            <h4 className="text-xs font-light text-neutral-400 tracking-wide leading-relaxed max-w-xl">
              High Profile Luxury Club House Amenities Included With Every Unit Allocation Pipeline Framework.
            </h4>
          </div>
          
          <a 
            href="#amenities" 
            className="group relative bg-white text-neutral-950 font-bold text-xs uppercase tracking-widest px-6 py-3.5 transition-all duration-500 shrink-0 w-full md:w-auto text-center overflow-hidden active:scale-[0.99]"
          >
            <span className="absolute inset-0 bg-[#991b1b] transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) origin-left -translate-x-full group-hover:translate-x-0" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              View Amenities
            </span>
          </a>
        </div>
      </div>

    </section>
  );
}