"use client";

import Image from "next/image";

interface AmenityItem {
  name: string;
  image: string;
}

const amenitiesList: AmenityItem[] = [
  { name: "Swimming Pool", image: "/amenity-pool.png" },
  { name: "Gym", image: "/amenity-gym.png" },
  { name: "Jogging Track", image: "/amenity-track.png" },
  { name: "Yoga Pavilion", image: "/amenity-yoga.png" },
  { name: "Tennis Court", image: "/amenity-tennis.png" },
  { name: "24/7 CCTV Security", image: "/amenity-cctv.png" },
  { name: "Luxury Club House", image: "/amenity-clubhouse.png" },
  { name: "Mini Theater", image: "/amenity-theatre.png" }
];

export default function Amenities() {
  return (
    <section id="amenities" className="relative py-14 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header Text Area */}
        <div className="text-center space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-gold block">
            Amenities 
          </span>
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-neutral-950">
            Amenities that Define Excellence 
          </h2>
        </div>

        {/* ================= HIGH-END INTERACTIVE GRID SYSTEM ================= */}
        {/* Mobile: Symmetrical 2-column square layout grid avoiding page elongation */}
        {/* Desktop: Pristine 4-column balanced architectural matrix layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {amenitiesList.map((item, idx) => (
            <div
              key={item.name}
              className="group relative w-full aspect-square rounded-xl overflow-hidden bg-neutral-100 shadow-xs hover:shadow-xl transition-all duration-500 ease-out"
            >
              {/* Core Image Asset Layer */}
              <Image
                src={item.image}
                alt={`${item.name} Feature Illustration`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-w-768px) 50vw, 25vw"
              />

              {/* High-Contrast Bottom Vignette Gradient Mask Layer */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90 z-10" />

              {/* Top Structural Border Line Accent - Visible on Hover */}
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-20" />

              {/* Typographic Content Title Surface Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5 z-20 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300 ease-out flex items-center gap-2.5">
                {/* Clean inline geometric dot indicator */}
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:inline-block" />
                
                <h3 className="font-light text-sm sm:text-base text-white tracking-wide leading-tight drop-shadow-xs">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}