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
  { label: "Upcoming Noida International Airport (Jewar)", time: "30 Mins" }
];

export default function Location() {
  return (
    <section id="location" className="relative py-14 lg:py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 border-t border-neutral-200/50 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* ================= LEFT COLUMN: TYPOGRAPHY & MILESTONES TIMELINE ================= */}
        <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-gold block">
              Location Advantages
            </span>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-neutral-950 leading-tight">
              Discover Your Perfect Place in the Perfect Location
            </h2>
          </div>

          {/* Upgraded Symmetrical Proximity List Map Layout */}
          <div className="w-full space-y-3 pt-2">
            {milestones.map((item) => (
              <div
                key={item.label}
                className="group flex items-center justify-between p-4 bg-white border border-neutral-200/50 shadow-xs transition-all duration-300 hover:shadow-md hover:border-brand-gold/30"
              >
                <div className="flex items-center gap-3 text-left">
                  {/* Custom Minimalist Map Vector Point Component */}
                  <div className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-neutral-50 text-neutral-400 group-hover:bg-brand-gold/15 group-hover:text-brand-gold transition-colors duration-300">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="font-light text-neutral-700 tracking-wide text-xs sm:text-sm group-hover:text-neutral-950 transition-colors">
                    {item.label}
                  </span>
                </div>
                
                <span className="shrink-0 ml-4 px-2.5 py-1 bg-neutral-50 rounded-md text-[10px] font-mono tracking-wider font-semibold uppercase text-neutral-500 border border-neutral-100 group-hover:bg-brand-gold/10 group-hover:text-brand-gold group-hover:border-brand-gold/20 transition-all">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT COLUMN: UPGRADED MAP VISUAL CONTAINER ================= */}
        {/* Mobile: Full block layout below text configuration flow */}
        {/* Desktop: Spans remaining columns seamlessly */}
        <div className="lg:col-span-7 w-full h-[280px] sm:h-[380px] xl:h-[420px] relative rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-white p-2">
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-100">
            {/* Embedded interactive maps fallback. You can cleanly swap this layer out for an iframe or map kit module */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.3489849501556!2d77.50280209999999!3d28.3936302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc7b9f8f2b7a3%3A0x7d6537bf7c54f5c!2sSector%20150%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1718974800000!5m2!1sen!2sin"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700 ease-out"
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