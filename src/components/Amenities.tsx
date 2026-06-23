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

export default function Amenities() {
  return (
    <section id="amenities" className="relative pb-20 lg:pb-28 pt-0 bg-[#FAF9F5] overflow-hidden select-none">
      
      {/* Light subtle geometric background layout vector textures */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* SECTION METRIC EDITORIAL HEADER */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#991b1b]/10 border border-[#991b1b]/20 px-3 py-1 rounded-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#991b1b] animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#991b1b] uppercase">Bespoke Inclusions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extralight tracking-tight text-neutral-950">
            Amenities that Define Excellence
          </h2>
        </div>

        {/* ================= ARCHITECTURAL BOX GRID SYSTEM ================= */}
        {/* Mobile: Symmetrical 2-column square layout grid avoiding page elongation */}
        {/* Desktop: Pristine 4-column balanced architectural matrix layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {amenitiesList.map((item) => (
            <div
              key={item.name}
              className="group relative w-full aspect-square rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200/60 shadow-md hover:shadow-2xl transition-all duration-500 ease-out"
            >
              {/* Core Image Asset Layer */}
              <Image
                src={item.image}
                alt={`${item.name} Feature`}
                fill
                className="object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
                sizes="(max-w-768px) 50vw, 25vw"
              />

              {/* High-Contrast Bottom Vignette Gradient Mask Layer */}
              <div className="absolute inset-0 bg-linear-to-t from-neutral-950/90 via-neutral-950/30 to-transparent z-10 transition-opacity duration-300" />

              {/* Top Structural Border Line Accent - Visible on Hover */}
              <span className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#991b1b] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-20" />

              {/* Typographic Content Title Surface Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-20 transform translate-y-1 sm:translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col space-y-1 whitespace-normal">
                
                {/* Clean inline geometric dot indicator and text */}
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#991b1b] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:inline-block" />
                  <h3 className="font-medium text-xs sm:text-sm lg:text-base text-white tracking-wide leading-tight drop-shadow-md">
                    {item.name}
                  </h3>
                </div>

                {/* Subtext description fading in neatly on hover for desktop monitors */}
                <p className="text-[9px] sm:text-[10px] text-neutral-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block leading-normal max-w-[200px]">
                  Premium allocated lifestyle perimeter layout inclusion.
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}