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
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Completely synchronized target endpoint redirection sequence
      router.push("/thank-you");
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen bg-[#FAF9F5] lg:bg-neutral-950 flex flex-col lg:flex-row lg:items-center overflow-hidden pt-16 lg:pt-0">
      
      {/* ================= IMMERSIVE SLIDESHOW CONTAINER ================= */}
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
        <div className="hidden lg:block absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-black/80 z-20" />
        <div className="hidden lg:block absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/90 z-20" />
      </div>

      {/* ================= MAIN CONTENT DECK FRAME WORKSPACE ================= */}
      <div className="relative z-30 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-0 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full">
          
          {/* LEFT SIDE BLOCK: ARCHITECTURAL TECHNICAL HEADERS */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 lg:space-y-6 text-neutral-900 lg:text-white animate-fade-in-up">
            <div className="space-y-3.5 sm:space-y-4">
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

          {/* RIGHT SIDE BLOCK: PREMIUM LIGHT CONCIERGE MINIMAL FORM CARD */}
          <div className="lg:col-span-5 xl:col-span-4 lg:col-start-8 xl:col-start-9 w-full max-w-sm mx-auto lg:mx-0">
            <div className="bg-white border border-neutral-200 w-full rounded-2xl p-6 shadow-xl lg:shadow-2xl transition-all duration-300 relative">
              
              <h3 className="text-lg font-medium text-neutral-900 tracking-tight text-center mb-5">
                Enter Your Details
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-medium text-neutral-600 mb-1">Full Name</label>
                  <input suppressHydrationWarning
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs text-neutral-900 focus:outline-none focus:border-[#991b1b] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-neutral-600 mb-1">Mobile Number</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-neutral-400 font-medium border-r border-neutral-200 pr-2">+91</span>
                    <input suppressHydrationWarning
                      type="tel"
                      name="mobile"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit number"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-14 pr-4 py-3 text-xs text-neutral-900 focus:outline-none focus:border-[#991b1b] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-neutral-600 mb-1">Email Address</label>
                  <input suppressHydrationWarning
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs text-neutral-900 focus:outline-none focus:border-[#991b1b] focus:bg-white transition-all"
                  />
                </div>

                <button suppressHydrationWarning
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative mt-2 bg-[#991b1b] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 overflow-hidden active:scale-[0.99] disabled:opacity-70 cursor-pointer border-none"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}