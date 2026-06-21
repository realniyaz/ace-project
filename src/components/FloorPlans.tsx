"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projectData } from "@/config/projectData";

export default function FloorPlans() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fallback map assets linked directly to the configurations array indices
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
    <section id="floor-plans" className="relative py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50 overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Section Headers */}
        <div className="text-center space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-gold block">
            Floor Plans
          </span>
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-neutral-950">
            Your Vision, Our Floor Plans
          </h2>
        </div>

        {/* ================= CONTROLLER TABS RIBBON ================= */}
        <div className="flex justify-center border-b border-neutral-200">
          <div className="flex gap-2 sm:gap-6">
            {projectData.configurations.map((config, idx) => (
              <button
                key={config.name}
                onClick={() => setActiveTab(idx)}
                className={`pb-3 text-xs sm:text-sm uppercase tracking-wider font-semibold border-b-2 transition-all duration-300 px-2 cursor-pointer ${
                  activeTab === idx
                    ? "border-brand-gold text-brand-gold"
                    : "border-transparent text-neutral-400 hover:text-neutral-600"
                }`}
              >
                {config.name}
              </button>
            ))}
          </div>
        </div>

        {/* ================= BLUEPRINT RENDERING CARD AREA ================= */}
        <div className="bg-white border border-neutral-200/60 p-4 sm:p-8 shadow-xl transition-all duration-500 max-w-2xl mx-auto rounded-none">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Visual Blueprint Frame */}
            <div className="md:col-span-7 relative w-full h-[240px] sm:h-[320px] bg-neutral-50 overflow-hidden group border border-neutral-100">
              <Image
                src={floorPlanImages[activeTab] || "/floorplan-placeholder.jpg"}
                alt={`${currentConfig?.name || "Property"} Layout Blueprint`}
                fill
                className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-102"
              />
              {/* Blur mask overlay indicating detailed layout locks */}
              <div className="absolute inset-0 bg-neutral-950/5 backdrop-blur-xs transition-opacity duration-300 group-hover:backdrop-blur-none" />
            </div>

            {/* Metric Specs Details Sidebar */}
            <div className="md:col-span-5 flex flex-col justify-center space-y-5 text-center md:text-left">
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase block">Typology Layout</span>
                <h3 className="text-xl font-light text-neutral-900 tracking-wide">{currentConfig?.name} Luxury Suite</h3>
              </div>

              <div className="border-y border-neutral-100 py-3 flex justify-between items-center text-xs px-1">
                <span className="text-neutral-400 uppercase tracking-wider">Super Area</span>
                <span className="text-neutral-800 font-semibold tracking-wide">{currentConfig?.size}</span>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-neutral-900 hover:bg-[#991b1b] text-white px-5 py-3.5 font-bold text-xs uppercase tracking-widest shadow-md transition-all duration-300 active:scale-99"
              >
                View Plan Details
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* ================= INTERACTIVE ENQUIRY FORM MODAL OVERLAY ================= */}
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
                Unlock Layout Layouts
              </h3>
              <p className="text-xs text-brand-gold font-bold uppercase tracking-widest mt-1">
                Blueprint Type: {currentConfig?.name}
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
                  {isSubmitting ? "Submitting Inquiry..." : "Unlock High-Res Plan"}
                </span>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}