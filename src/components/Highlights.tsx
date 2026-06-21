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
    <section id="highlights" className="relative py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950 overflow-hidden min-h-screen lg:min-h-[55vh] flex flex-col justify-between">
      
      {/* ================= BACKGROUND PRESENTATION LAYER ================= */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/highlights-presentation.jpg')" }}
      >
        <div className="absolute inset-0 bg-neutral-950/95 lg:bg-neutral-950/80 backdrop-blur-xs z-10" />
      </div>

      {/* ================= CORE CONTENT WRAPPER ================= */}
      {/* Mobile: Standard flex column block for vertical stacking */}
      {/* Desktop: Asymmetric 12-column grid layout distribution */}
      <div className="relative z-20 max-w-6xl mx-auto w-full flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        
        {/* LEFT COLUMN STRUCTURE: TEXT & HEADLINE AREA */}
        <div className="w-full lg:col-span-5 space-y-3 text-center lg:text-left">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-gold/90 block">
              Highlights
            </span>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white/95 leading-tight">
              Discover the Finest Features & Finishes
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
            Every aspect is engineered to maximize privacy, natural airflow, and luxury. Experience architectural excellence shaped by world-class interior planning.
          </p>
        </div>

        {/* RIGHT COLUMN STRUCTURE: LIST REFLOW STRUCTURAL ENGINE */}
        {/* Mobile: Full block with centered item components */}
        {/* Desktop: Right-aligned block layout */}
        <div className="w-full lg:col-span-7 space-y-1 lg:space-y-0 divide-y divide-white/5">
          {highlightsList.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col sm:flex-row lg:flex-row items-center sm:justify-start gap-3 sm:gap-4 py-4 transition-colors duration-300 hover:border-brand-gold/20"
            >
              {/* Flex Anchor Box for Icon and Text Layout Alignment */}
              <div className="flex items-center gap-3 w-full justify-center sm:justify-start">
                {/* SVG Pointer Framework */}
                <div className="shrink-0 flex items-center justify-center w-5 h-5 rounded-md bg-brand-gold/10 border border-brand-gold/20 text-brand-gold group-hover:bg-brand-gold group-hover:text-neutral-950 transition-all duration-300">
                  <svg 
                    className="w-3 h-3" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                {/* Typography Container Field */}
                <span className="font-light text-sm sm:text-base text-white/90 tracking-wide group-hover:text-white transition-colors duration-200 text-center sm:text-left">
                  {item.title}
                </span>
                
                {/* Optional Badge Block Reflow */}
                {item.badge && (
                  <span className="bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-xs shrink-0 select-none">
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ================= FOOTER CTA ACTION DECK STRUCTURE ================= */}
      {/* Mobile: Dynamic flex rows that scale cleanly across small viewports */}
      <div className="relative z-20 max-w-6xl mx-auto w-full border-t border-white/10 pt-5 mt-6">
        <div className="bg-neutral-900/30 backdrop-blur-md border border-white/5 p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-300 hover:border-white/10">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <span className="bg-brand-gold/15 text-brand-gold text-[9px] font-bold uppercase tracking-widest px-2 py-1 border border-brand-gold/30 shrink-0 select-none">
              SIGNATURE CLUB
            </span>
            <h4 className="text-xs font-light text-neutral-400 tracking-wide leading-snug">
              High Profile Luxury Club House Amenities Included With Every Unit Allocation
            </h4>
          </div>
          
          <a 
            href="#amenities" 
            className="bg-brand-gold text-neutral-950 hover:bg-white hover:text-neutral-950 px-6 py-3 font-bold text-xs uppercase tracking-widest transition-all duration-300 shrink-0 w-full md:w-auto text-center active:scale-[0.99]"
          >
            View Amenities
          </a>
        </div>
      </div>

    </section>
  );
}