"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { projectData } from "@/config/projectData";

export default function Pricing() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedConfig, setSelectedConfig] = useState("");
  const [formData, setFormData] = useState({ name: "", mobile: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openEnquiry = (configName: string) => {
    setSelectedConfig(configName);
    setIsModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePricingSubmit = async (e: React.FormEvent) => {
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
    <section id="pricing" className="relative py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Section Header Text */}
        <div className="text-center space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-gold block">
            Price List
          </span>
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-neutral-950">
            Unlock the Door to Luxury Living
          </h2>
        </div>

        {/* ================= CARDS CONTAINER DECK ================= */}
        {/* Mobile: Smooth, interactive swipeable ribbon container */}
        {/* Desktop: Premium asymmetrical 3-column structural layout */}
        <div className="flex overflow-x-auto pb-6 lg:pb-0 scrollbar-none snap-x snap-mandatory lg:grid lg:grid-cols-3 gap-5">
          {projectData.configurations.map((item) => (
            <div
              key={item.name}
              className="group relative shrink-0 w-[285px] sm:w-[330px] lg:w-full snap-center bg-white border border-neutral-200/60 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-neutral-200/80 hover:border-brand-gold/40"
            >
              <div className="space-y-5 w-full">
                {/* Configuration Typographic Heading */}
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 border border-neutral-200 text-[10px] font-bold tracking-widest text-neutral-800 uppercase bg-neutral-50">
                    {item.name}
                  </span>
                  
                  {/* Luxury Layout Blueprint Icon Overlay */}
                  <svg className="w-5 h-5 text-neutral-300 group-hover:text-brand-gold transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>

                {/* Pricing Display Surface */}
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase block">Starting Value</span>
                  <div className="text-xl sm:text-2xl font-light text-neutral-900 tracking-wide group-hover:text-brand-gold transition-colors duration-300">
                    {item.price}
                  </div>
                </div>

                {/* Symmetrical Dimension Line Dividers */}
                <div className="pt-4 border-t border-dashed border-neutral-200 flex justify-between items-center text-sm">
                  <div className="flex items-center gap-1.5 text-neutral-400 font-light text-xs uppercase tracking-wider">
                    {/* Area Geometry Rule Vector */}
                    <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4M4 4v16m0-4l5-5m11 5v4m0 0h-4m4 0l-5-5M20 4v16" />
                    </svg>
                    Super Area
                  </div>
                  <span className="text-neutral-800 font-medium tracking-wide text-xs sm:text-sm">{item.size}</span>
                </div>
              </div>

              {/* Action Button: Liquid Hover Transition Layer */}
              <button
                onClick={() => openEnquiry(item.name)}
                className="w-full relative mt-8 bg-neutral-900 text-white px-5 py-3.5 font-bold text-xs uppercase tracking-widest transition-all duration-300 overflow-hidden group/btn active:scale-[0.99] shadow-md"
              >
                {/* Horizontal dynamic sliding reveal color block layout */}
                <span className="absolute inset-0 bg-[#991b1b] transition-transform duration-300 origin-left -translate-x-full group-hover/btn:translate-x-0" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Enquire Now
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* ================= OVERLAY POP-UP INTERACTIVE INQUIRY MODAL ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 animate-fade-in animate-duration-200">
          <div 
            className="absolute inset-0 bg-neutral-950/60 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)} 
          />
          
          <div className="relative bg-white border border-neutral-100 w-full max-w-md rounded-2xl p-6 sm:p-8 shadow-2xl z-10 animate-fade-in-up">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 p-1 rounded-full transition-colors"
              aria-label="Close form"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-neutral-900 tracking-tight">
                Request Pricing Details
              </h3>
              <p className="text-xs text-brand-gold font-bold uppercase tracking-widest mt-1">
                Config Selected: {selectedConfig}
              </p>
            </div>

            <form onSubmit={handlePricingSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-sm text-neutral-900 focus:outline-none focus:border-brand-gold focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1">Mobile Contact</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-neutral-500 font-medium border-r border-neutral-200 pr-2">
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10 digit mobile number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-20 pr-4 py-3.5 text-sm text-neutral-900 focus:outline-none focus:border-brand-gold focus:bg-white transition-all"
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
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-sm text-neutral-900 focus:outline-none focus:border-brand-gold focus:bg-white transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative mt-4 bg-brand-gold text-neutral-950 font-bold text-sm py-4 rounded-xl shadow-lg transition-all duration-300 overflow-hidden disabled:opacity-70 disabled:pointer-events-none active:scale-[0.99]"
              >
                <div className={`absolute inset-0 bg-neutral-950 transition-transform duration-500 origin-left ${isSubmitting ? "translate-x-0" : "-translate-x-full"}`} />
                <span className={`relative z-10 flex items-center justify-center gap-2 ${isSubmitting ? "text-white" : "text-neutral-950"}`}>
                  {isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry"}
                </span>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}