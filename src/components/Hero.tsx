"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { projectData } from "@/config/projectData";

const bannerSlides = [
  "/hero-banner-1.jpg",
  "/hero-banner-2.jpg",
  "/hero-banner-3.jpg",
];

export default function Hero() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: "", mobile: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      router.push("/thank-you");
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen bg-[#FAF9F5] lg:bg-neutral-950 flex flex-col lg:flex-row lg:items-center overflow-hidden pt-16 lg:pt-0">
      
      {/* ================= IMMERSIVE SLIDESHOW CONTAINER ================= */}
      {/* Mobile: Full-bleed static height frame on top without overlay masks */}
      {/* Desktop: Spans full screen canvas boundaries absolute behind panels */}
      <div className="relative w-full h-[40vh] sm:h-[45vh] lg:absolute lg:inset-0 lg:h-full z-0 shrink-0">
        {bannerSlides.map((slide, index) => (
          <div
            key={slide}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              index === currentSlide ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
            }`}
          >
            <Image
              src={slide}
              alt={`ACE Luxury Presentation View ${index + 1}`}
              fill
              className="object-cover object-center transition-transform duration-[6500ms] ease-out"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Layer masks are strictly isolated to desktop screens to keep mobile view 100% clean and bright */}
        <div className="hidden lg:block absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-black/80 z-20" />
        <div className="hidden lg:block absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/90 z-20" />
      </div>

      {/* ================= MAIN CONTENT DECK FRAME WORKSPACE ================= */}
      {/* Mobile: Stacks naturally below the image block frame container */}
      <div className="relative z-30 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-0 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full">
          
          {/* LEFT SIDE BLOCK: ARCHITECTURAL TECHNICAL HEADERS */}
          {/* Mobile: Inverted text presentation coloring token layout system */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 lg:space-y-6 text-neutral-900 lg:text-white animate-fade-in-up">
            
            <div className="space-y-3.5 sm:space-y-4">
              {/* Branded Status Badge */}
              <div className="inline-flex items-center gap-2 bg-[#991b1b]/10 lg:bg-[#991b1b]/15 border border-[#991b1b]/30 lg:border-[#991b1b]/40 px-3 py-1 rounded-none backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#991b1b] animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#991b1b] lg:text-white uppercase">{projectData.status}</span>
              </div>
              
              <div className="space-y-1.5 sm:space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 lg:text-neutral-300 font-semibold block">
                  {projectData.location}
                </span>
                <h1 className="text-3xl sm:text-4xl xl:text-6xl font-light tracking-tight text-neutral-950 lg:text-white leading-[1.15] lg:leading-[1.1] max-w-2xl drop-shadow-xs lg:drop-shadow-md">
                  {projectData.title}
                </h1>
              </div>
            </div>

            {/* Premium Metric Details Split Grid Row Layout */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 py-4 lg:py-5 border-y border-neutral-200 lg:border-white/10 w-full max-w-xl text-left">
              <div className="space-y-1">
                <span className="text-[9px] sm:text-[10px] text-neutral-400 uppercase tracking-wider font-medium block">Land Parcel</span>
                <span className="text-xs sm:text-sm font-light text-neutral-700 lg:text-neutral-100">{projectData.landParcel}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] sm:text-[10px] text-neutral-400 uppercase tracking-wider font-medium block">Total Suites</span>
                <span className="text-xs sm:text-sm font-light text-neutral-700 lg:text-neutral-100">{projectData.totalUnits} Units</span>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] sm:text-[10px] text-neutral-400 uppercase tracking-wider font-medium block">Elevation</span>
                <span className="text-xs sm:text-sm font-light text-neutral-700 lg:text-neutral-100 truncate block">{projectData.structure}</span>
              </div>
            </div>

            <div className="pt-1 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start w-full">
              <span className="px-3 py-1.5 border border-neutral-200 lg:border-white/10 bg-white lg:bg-black/50 backdrop-blur-md text-[9px] sm:text-[10px] font-bold tracking-widest text-neutral-800 lg:text-neutral-200 uppercase shadow-xs">
                Ultra-Luxury 3 & 4 BHK Apartments
              </span>
              <div className="text-sm sm:text-base font-light text-neutral-500 lg:text-neutral-200">
                Starting Price: <span className="text-neutral-950 lg:text-white font-semibold tracking-wide text-base sm:text-lg">{projectData.startingPrice}</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE BLOCK: PREMIUM LIGHT CONCIERGE FORM CARD */}
          {/* Positioned cleanly below text layers on mobile screens */}
          <div className="lg:col-span-5 xl:col-span-4 lg:col-start-8 xl:col-start-9 w-full max-w-md mx-auto lg:mx-0">
            <div className="bg-white border border-neutral-200/80 p-6 sm:p-8 rounded-2xl shadow-xl lg:shadow-2xl shadow-neutral-950/5 lg:shadow-black/40 transition-all duration-300 relative w-full">
              <div className="mb-6 text-center lg:text-left space-y-1.5">
                <h3 className="text-lg font-medium tracking-wide text-neutral-900">
                  Schedule Private Viewing
                </h3>
                <p className="text-[11px] text-neutral-500 font-light tracking-wide leading-relaxed">
                  Register with our verified consultancy desk for priority allocation and inventory access.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input suppressHydrationWarning
                    type="text"
                    name="name"
                    required
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-50 border border-neutral-200/60 rounded-xl px-4 py-3.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#991b1b] focus:bg-white transition-all"
                  />
                </div>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-neutral-500 font-medium border-r border-neutral-200 pr-2.5">
                    🇮🇳 +91
                  </span>
                  <input suppressHydrationWarning
                    type="tel"
                    name="mobile"
                    required
                    pattern="[0-9]{10}"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-50 border border-neutral-200/60 rounded-xl pl-16 pr-4 py-3.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#991b1b] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <input suppressHydrationWarning
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-50 border border-neutral-200/60 rounded-xl px-4 py-3.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#991b1b] focus:bg-white transition-all"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer group select-none pt-1">
                  <input suppressHydrationWarning
                    type="checkbox"
                    required
                    defaultChecked
                    className="mt-0.5 border-neutral-300 bg-white text-[#991b1b] focus:ring-0 focus:ring-offset-0 scale-95 accent-[#991b1b] rounded-sm"
                  />
                  <span className="text-[10px] leading-normal text-neutral-500 group-hover:text-neutral-700 transition-colors text-left font-light">
                    I authorize representatives to Call, SMS, Email or WhatsApp me regarding this property. This overrides DND registry.
                  </span>
                </label>

                {/* Secure Action Submit Button Layer Locked to Solid Branded Red Color */}
                <button suppressHydrationWarning
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative mt-2 bg-[#991b1b] text-white font-bold text-xs uppercase tracking-[0.15em] py-4 rounded-xl shadow-lg transition-all duration-500 overflow-hidden active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none group/btn cursor-pointer"
                >
                  <span className="absolute inset-0 bg-neutral-950 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) origin-left -translate-x-full group-hover/btn:translate-x-0" />
                  <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-200">
                    {isSubmitting ? "Processing Request..." : "Request Call Back"}
                  </span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}