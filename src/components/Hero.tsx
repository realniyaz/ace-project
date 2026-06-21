"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { projectData } from "@/config/projectData";

const bannerSlides = [
  "/hero-banner-1.jpg",
  "/hero-banner-2.jpg",
  "/hero-banner-3.jpg",
//   "/hero-banner-4.jpg",
];

export default function Hero() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: "", mobile: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Cinematic Background Slide Engine (Slow 6-second cross-fade)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 6000);
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
    <section id="hero" className="relative w-full min-h-screen bg-neutral-950 flex flex-col lg:justify-center overflow-x-hidden">
      
      {/* ================= GLOBAL BACKGROUND CAROUSEL AREA ================= */}
      {/* Handled: Anchored perfectly to ensure high-visibility structure across viewports */}
      <div className="absolute top-0 left-0 right-0 h-[45vh] sm:h-[50vh] lg:h-full overflow-hidden z-0">
        {bannerSlides.map((slide, index) => (
          <div
            key={slide}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
            }`}
          >
            <Image
              src={slide}
              alt={`ACE 150 Luxury Presentation View ${index + 1}`}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Adaptive Gradient Masking Layer */}
        <div className="absolute inset-0 hero-gradient-overlay z-25" />
      </div>

      {/* ================= COMPONENT INTERFACE CONTAINER ================= */}
      <div className="relative z-30 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-[45vh] sm:mt-[50vh] lg:mt-0 pt-8 pb-16 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: PROJECT SPECIFICATIONS INFO CARD (CENTERED ON MOBILE) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 text-white animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/30 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">{projectData.status}</span>
            </div>
            
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium block">{projectData.location}</span>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-light tracking-tight text-white leading-tight max-w-2xl">
                {projectData.title}
              </h1>
            </div>

            {/* Content Specifications Grid (Centered items on mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y border-white/10 w-full max-w-2xl text-left sm:text-center lg:text-left">
              <div className="flex items-center sm:justify-center lg:justify-start gap-3 text-sm text-neutral-300">
                <span className="text-brand-gold text-base">✓</span> Land Parcel: {projectData.landParcel}
              </div>
              <div className="flex items-center sm:justify-center lg:justify-start gap-3 text-sm text-neutral-300">
                <span className="text-brand-gold text-base">✓</span> Total Units: {projectData.totalUnits} Units
              </div>
              <div className="flex items-center sm:justify-center lg:justify-start gap-3 text-sm text-neutral-300">
                <span className="text-brand-gold text-base">✓</span> Architecture: {projectData.totalTowers} High-Rise Towers
              </div>
              <div className="flex items-center sm:justify-center lg:justify-start gap-3 text-sm text-neutral-300">
                <span className="text-brand-gold text-base">✓</span> Elevation: {projectData.structure}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <span className="px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/40 backdrop-blur-xs text-xs font-medium text-neutral-300">
                Luxurious 3 & 4 BHK Apartments
              </span>
              <div className="text-xl font-light text-neutral-300">
                Starting Price: <span className="text-brand-gold font-semibold tracking-wide">{projectData.startingPrice}</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: HIGH-VISIBILITY GLASSMORPHISM INQUIRY FORM */}
          {/* Handled: Enhanced backdrop-blend darkness opacity layer for high element prominence */}
          <div className="lg:col-span-5 xl:col-span-4 animate-fade-in-up animation-delay-100">
            <div className="bg-neutral-900/95 lg:bg-black/65 border border-white/15 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/50 transition-all duration-300 hover:border-brand-gold/40">
              <h3 className="text-lg font-medium tracking-wide text-white mb-6 text-center">
                Book Site Visit Now
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-brand-gold focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-neutral-400 font-medium border-r border-white/10 pr-2.5">
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
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-20 pr-4 py-3.5 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-brand-gold focus:bg-white/10 transition-all"
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
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-brand-gold focus:bg-white/10 transition-all"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer group select-none py-1">
                  <input
                    type="checkbox"
                    required
                    defaultChecked
                    className="mt-0.5 rounded-sm border-neutral-700 bg-neutral-900 text-brand-gold focus:ring-0 focus:ring-offset-0 scale-95 accent-brand-gold"
                  />
                  <span className="text-[11px] leading-snug text-neutral-400 group-hover:text-neutral-300 transition-colors text-left">
                    I authorize representatives to Call, SMS, Email or WhatsApp me regarding this property. This overrides DND registry.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative mt-2 bg-brand-gold text-neutral-950 font-bold text-sm py-4 rounded-xl shadow-lg transition-all duration-300 overflow-hidden active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none group/btn"
                >
                  <div className={`absolute inset-0 bg-neutral-950 transition-transform duration-500 origin-left ${isSubmitting ? "translate-x-0" : "-translate-x-full"}`} />
                  
                  <span className={`relative z-10 flex items-center justify-center gap-2 ${isSubmitting ? "text-white" : "text-neutral-950"}`}>
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing Request...
                      </>
                    ) : (
                      "Submit Inquiry"
                    )}
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