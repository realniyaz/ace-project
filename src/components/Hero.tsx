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
    <section id="hero" className="relative w-full min-h-screen bg-neutral-950 flex items-center overflow-hidden py-24 lg:py-0">
      
      {/* ================= IMMERSIVE FULL-BLEED CINEMATIC BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
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
        {/* Hardened mask overrides to guarantee 100% text legibility under shifting lights */}
        <div className="absolute inset-0 bg-linear-to-b lg:bg-linear-to-r from-black/95 via-black/60 to-black/80 z-20" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/95 z-20" />
      </div>

      {/* ================= STRUCTURAL RESPONSIVE CONTROLS CONTAINER ================= */}
      <div className="relative z-30 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* LEFT SIDE BLOCK: HIGH-VISIBILITY BRANDED EDITORIAL FIELD */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 text-white animate-fade-in-up">
            
            <div className="space-y-4">
              {/* Branded Adaptive Badge using true ACE Crimson identity tokens */}
              <div className="inline-flex items-center gap-2 bg-[#991b1b]/15 border border-[#991b1b]/40 px-3 py-1 rounded-sm backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#991b1b] animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">{projectData.status}</span>
              </div>
              
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-300 font-semibold block">
                  {projectData.location}
                </span>
                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.1] max-w-2xl drop-shadow-md">
                  {projectData.title}
                </h1>
              </div>
            </div>

            {/* Premium architecture metric specifications grid */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 py-5 border-y border-white/10 w-full max-w-xl text-left">
              <div className="space-y-1">
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-medium block">Land Parcel</span>
                <span className="text-sm font-light text-neutral-100">{projectData.landParcel}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-medium block">Total Suites</span>
                <span className="text-sm font-light text-neutral-100">{projectData.totalUnits} Units</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-medium block">Elevation</span>
                <span className="text-sm font-light text-neutral-100 truncate block">{projectData.structure}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start w-full">
              <span className="px-3.5 py-1.5 border border-white/10 bg-black/50 backdrop-blur-md text-[10px] font-bold tracking-widest text-neutral-200 uppercase">
                Ultra-Luxury 3 & 4 BHK Apartments
              </span>
              <div className="text-base font-light text-neutral-200">
                Starting Price: <span className="text-white font-semibold tracking-wide text-lg">{projectData.startingPrice}</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE BLOCK: HIGH-CONTRAST CONCIERGE FORM CARD */}
          <div className="lg:col-span-5 xl:col-span-4 lg:col-start-8 xl:col-start-9 w-full max-w-md mx-auto lg:mx-0 animate-fade-in-up animation-delay-100">
            <div className="bg-neutral-900/95 border border-white/10 p-6 sm:p-8 shadow-2xl shadow-black/90 transition-all duration-300 hover:border-[#991b1b]/40">
              <div className="mb-6 text-center lg:text-left space-y-1.5">
                <h3 className="text-lg font-medium tracking-wide text-white">
                  Schedule Private Viewing
                </h3>
                <p className="text-[11px] text-neutral-400 font-light tracking-wide leading-relaxed">
                  Register with our verified consultancy desk for priority allocation and inventory access.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-black/40 border border-white/10 px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#991b1b] focus:bg-black/70 transition-all"
                  />
                </div>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-neutral-400 font-medium border-r border-white/10 pr-2.5">
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    pattern="[0-9]{10}"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full bg-black/40 border border-white/10 pl-16 pr-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#991b1b] focus:bg-black/70 transition-all"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-black/40 border border-white/10 px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#991b1b] focus:bg-black/70 transition-all"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer group select-none pt-1">
                  <input
                    type="checkbox"
                    required
                    defaultChecked
                    className="mt-0.5 border-white/20 bg-neutral-950 text-white focus:ring-0 focus:ring-offset-0 scale-95 accent-[#991b1b]"
                  />
                  <span className="text-[10px] leading-normal text-neutral-400 group-hover:text-neutral-300 transition-colors text-left font-light">
                    I authorize representatives to Call, SMS, Email or WhatsApp me regarding this property. This overrides DND registry.
                  </span>
                </label>

                {/* Mastered Branded Button: Transitions from solid white to crisp corporate brand accents */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative mt-2 bg-white text-neutral-950 font-bold text-xs uppercase tracking-[0.15em] py-4 shadow-xl transition-all duration-300 overflow-hidden active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none group/btn cursor-pointer"
                >
                  <span className="absolute inset-0 bg-[#991b1b] transition-transform duration-300 origin-left -translate-x-full group-hover/btn:translate-x-0" />
                  <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:text-white transition-colors duration-200">
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