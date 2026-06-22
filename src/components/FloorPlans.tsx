"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { projectData } from "@/config/projectData";

export default function FloorPlans() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const floorPlanImages = [
    "/floorplan-3bhk.jpg",
    "/floorplan-4bhk.jpg",
    "/floorplan-4bhk.jpg",
  ];

  const currentConfig = projectData.configurations[activeTab];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsModalOpen(false);
      router.push("/thank-you");
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="floor-plans" className="relative pb-20 lg:pb-28 pt-0 px-4 sm:px-6 lg:px-8 bg-[#FAF9F5] overflow-hidden select-none">
      
      {/* Light subtle geometric layout line vector textures */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* ================= EDITORIAL SECTION HEADERS ================= */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#991b1b]/10 border border-[#991b1b]/20 px-3 py-1 rounded-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#991b1b] animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#991b1b] uppercase">Architectural Blueprints</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extralight tracking-tight text-neutral-950">
            Bespoke Layout Engineering
          </h2>
        </div>

        {/* ================= TOUCH-OPTIMIZED SEGMENT TAB SWIPER ================= */}
        {/* Centers tabs perfectly on mobile viewports using justify-center while remaining scrollable if oversized */}
        <div className="flex justify-center border-b border-neutral-200 overflow-x-auto scrollbar-none snap-x pb-px">
          <div className="flex gap-4 sm:gap-8 whitespace-nowrap px-4 justify-center w-full md:w-auto">
            {projectData.configurations.map((config, idx) => (
              <button
                key={config.name}
                onClick={() => setActiveTab(idx)}
                className={`pb-4 text-xs uppercase tracking-[0.15em] font-bold border-b-2 transition-all duration-300 relative snap-center cursor-pointer ${
                  activeTab === idx
                    ? "border-[#991b1b] text-[#991b1b]"
                    : "border-transparent text-neutral-400 hover:text-neutral-700"
                }`}
              >
                {config.name}
              </button>
            ))}
          </div>
        </div>

        {/* ================= ASYMMETRIC DASHBOARD STUDIO INTERFACE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white border border-neutral-200/80 rounded-2xl shadow-xl shadow-neutral-950/5 overflow-hidden p-4 sm:p-6 lg:p-8">
          
          {/* LEFT COLUMN: PERMANENTLY BLURRED GRAPHIC VIEWPORT CANVAS */}
          {/* Added dynamic key constraint trigger to handle layout re-renders cleanly when updating current configurations */}
          <div className="lg:col-span-7 relative w-full h-[280px] sm:h-[380px] lg:h-auto min-h-[300px] bg-neutral-50 rounded-xl overflow-hidden group/blueprint border border-neutral-100 flex items-center justify-center">
            <div key={activeTab} className="relative w-full h-full flex items-center justify-center animate-fade-in animate-duration-500">
              <Image
                src={floorPlanImages[activeTab] || "/floorplan-placeholder.jpg"}
                alt={`${currentConfig?.name || "Property"} Blueprint Layout`}
                fill
                className="object-contain p-6 transition-all duration-300 filter blur-xl scale-95 opacity-30 select-none pointer-events-none"
                priority
              />
            </div>

            {/* Permanent Gated Security Layout Prompt Overlay */}
            <div className="absolute inset-0 bg-neutral-900/[0.02] flex items-center justify-center p-6 z-20">
              <div className="bg-white/95 backdrop-blur-md px-5 py-5 text-center border border-neutral-200/80 shadow-xl max-w-xs rounded-xl">
                <svg className="w-5 h-5 text-[#991b1b] mx-auto mb-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Confidential Layout Blueprint</h4>
                <p className="text-[10px] text-neutral-400 font-light mt-1 leading-normal">High-resolution blueprint files are secure. Please request verified digital access below.</p>
              </div>
            </div>

            {/* Outer corner frame dashed lines decor */}
            <span className="absolute inset-3 border border-dashed border-neutral-300/60 rounded-lg pointer-events-none z-10" />
          </div>

          {/* RIGHT COLUMN: METRIC SPEC SIDEBAR CONTROLS */}
          {/* Centered for mobile layout viewports (`text-center lg:text-left`) and dynamically updates active text instances smoothly */}
          <div key={`sidebar-${activeTab}`} className="lg:col-span-5 flex flex-col justify-between p-2 sm:p-4 text-center lg:text-left space-y-6 lg:space-y-0 animate-fade-in animate-duration-300">
            
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[9px] font-bold tracking-[0.15em] text-[#991b1b] uppercase block">Active Typology</span>
                <h3 className="text-2xl sm:text-3xl font-light text-neutral-900 tracking-tight">
                  {currentConfig?.name} Luxury Suite
                </h3>
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm mx-auto lg:mx-0">
                Thoughtfully designed configurations featuring deep utility corridors, expansive wrap-around balconies, and standalone servant allocations.
              </p>
            </div>

            {/* Symmetrical technical measurements sheet layout */}
            <div className="border-t border-b border-neutral-100 py-4 space-y-3 text-xs tracking-wide text-neutral-600 font-light max-w-sm mx-auto lg:mx-0 w-full">
              <div className="flex justify-between items-center px-1">
                <span className="text-neutral-400">Super Area Spec</span>
                <span className="text-neutral-900 font-mono font-medium">{currentConfig?.size}</span>
              </div>
              <div className="flex justify-between items-center px-1">
                <span className="text-neutral-400">Ventilation Matrix</span>
                <span className="text-neutral-900 font-medium">Dual-Faceted Wide Flow</span>
              </div>
              <div className="flex justify-between items-center px-1">
                <span className="text-neutral-400">Balcony Allocations</span>
                <span className="text-neutral-900 font-medium">Double Deck Continuous</span>
              </div>
            </div>

            {/* Premium action pipeline trigger */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full max-w-sm mx-auto lg:mx-0 relative bg-neutral-950 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl overflow-hidden group/btn cursor-pointer shadow-md transition-all duration-500"
            >
              <span className="absolute inset-0 bg-[#991b1b] transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) origin-left -translate-x-full group-hover/btn:translate-x-0" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Unlock High-Res Blueprints
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>

        </div>

      </div>

      {/* ================= PRIVACY DIALOG CAPTURE LEADS MODAL ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in animate-duration-200">
          <div className="absolute inset-0 bg-neutral-950/70 backdrop-blur-md" onClick={() => setIsModalOpen(false)} />
          
          <div className="relative bg-white border border-neutral-100 w-full max-w-md rounded-2xl p-6 sm:p-8 shadow-2xl z-10 animate-fade-in-up">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 p-1 rounded-full cursor-pointer">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-neutral-900 tracking-tight">Unlock High-Res Structural Files</h3>
              <p className="text-xs text-[#991b1b] font-bold uppercase tracking-wider mt-1">
                Blueprint Requested: {currentConfig?.name} Suite
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-sm text-neutral-900 focus:outline-none focus:border-[#991b1b] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1">Mobile Contact</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-neutral-500 font-medium border-r border-neutral-200 pr-2">🇮🇳 +91</span>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10 digit mobile verification code"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-20 pr-4 py-3.5 text-sm text-neutral-900 focus:outline-none focus:border-[#991b1b] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-sm text-neutral-900 focus:outline-none focus:border-[#991b1b] focus:bg-white transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative mt-4 bg-[#991b1b] text-white font-bold text-sm py-4 rounded-xl shadow-lg transition-all duration-300 overflow-hidden disabled:opacity-70 disabled:pointer-events-none active:scale-[0.99] cursor-pointer"
              >
                <div className={`absolute inset-0 bg-neutral-950 transition-transform duration-500 origin-left ${isSubmitting ? "translate-x-0" : "-translate-x-full"}`} />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? "Verifying Authorization..." : "Request Access Token"}
                </span>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}