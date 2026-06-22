"use client";

import Image from "next/image";

interface AmenityItem {
  name: string;
  image: string;
}

const amenitiesList: AmenityItem[] = [
  { name: "Infinity Swimming Pool", image: "/amenity-pool.png" },
  { name: "State-of-the-Art Gym", image: "/amenity-gym.png" },
  { name: "Jogging Track", image: "/amenity-track.png" },
  { name: "Yoga Pavilion", image: "/amenity-yoga.png" },
  { name: "Tennis Court", image: "/amenity-tennis.png" },
  { name: "24/7 Concierge Desk", image: "/amenity-cctv.png" },
  { name: "Luxury Club House", image: "/amenity-clubhouse.png" },
  { name: "Private Mini Theater", image: "/amenity-theatre.png" }
];

// Tripled list array to achieve seamless infinite loop scrolling without gaps
const tripleMarqueeList = [...amenitiesList, ...amenitiesList, ...amenitiesList];

export default function Amenities() {
  return (
    <section id="amenities" className="relative pb-20 lg:pb-28 pt-0 bg-[#FAF9F5] overflow-hidden select-none">
      
      {/* Light subtle geometric background layout vector textures */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="space-y-12 relative z-10 w-full">
        
        {/* SECTION METRIC EDITORIAL HEADER */}
        <div className="text-center space-y-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#991b1b]/10 border border-[#991b1b]/20 px-3 py-1 rounded-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#991b1b] animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#991b1b] uppercase">Bespoke Inclusions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extralight tracking-tight text-neutral-950">
            Amenities that Define Excellence
          </h2>
        </div>

        {/* ================= INFINITE LOOP CAROUSEL WINDOW PORT ================= */}
        <div className="w-full relative overflow-hidden mask-linear-horizontal py-4 group/marquee-container">
          
          <div className="flex gap-6 w-max whitespace-nowrap shrink-0 animate-marquee-horizontal group-hover/marquee-container:[animation-play-state:paused]">
            {tripleMarqueeList.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="relative w-[280px] sm:w-[340px] aspect-square rounded-2xl border border-neutral-200/80 bg-neutral-900 shadow-xl overflow-hidden group cursor-pointer transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) hover:scale-[1.03] hover:z-30 hover:shadow-2xl hover:border-[#991b1b]/30"
              >
                {/* Core Image Asset Layer */}
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) grayscale opacity-40 blur-xs group-hover:grayscale-0 group-hover:opacity-100 group-hover:blur-none"
                  sizes="340px"
                />

                {/* Adaptive shadow protection gradient layer mask */}
                <div className="absolute inset-0 bg-linear-to-t from-neutral-950/90 via-neutral-950/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-60" />

                {/* ================= HIGH-VISIBILITY TYPOGRAPHY TEXT LAYERS ================= */}
                <div className="absolute inset-0 p-6 z-20 flex flex-col justify-end text-left whitespace-normal">
                  <div className="space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1)">
                    
                    {/* Tiny inline identity red trace indicator dot marker */}
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#991b1b] scale-0 group-hover:scale-100 transition-transform duration-500" />
                      <h3 className="font-medium text-base sm:text-lg text-white tracking-wide leading-tight drop-shadow-md">
                        {item.name}
                      </h3>
                    </div>

                    <p className="text-[10px] text-neutral-400 font-light opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 max-w-[240px] leading-relaxed">
                      Exclusive lifestyle space allocated inside the upcoming premium residential portfolio perimeter.
                    </p>
                  </div>
                </div>

                {/* Tiny top asset branding visual frame tag line decoration */}
                <span className="absolute top-0 inset-x-0 h-[2.5px] bg-[#991b1b] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-30" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}