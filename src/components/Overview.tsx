"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projectData } from "@/config/projectData";

const overviewImages = [
  "/overview-1.jpg",
  "/overview-2.jpg",
  "/overview-3.jpg",
  "/overview-5.jpg",
];

export default function Overview() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeLightboxImg, setActiveLightboxImg] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", mobile: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
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
    <section id="overview" className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-neutral-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* ================= LEFT COLUMN: CONTEXT & COPY ================= */}
        <div className="lg:col-span-6 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold block">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-neutral-950 leading-tight">
              {projectData.title}
            </h2>
          </div>

          <div className="text-neutral-600 space-y-4 text-sm sm:text-base leading-relaxed font-light max-w-2xl">
            <p>
              <strong className="font-medium text-neutral-900">ACE Sector 150 Noida</strong> is an upcoming ultra-luxury residential development that redefines modern living with its elegant architecture, spacious residences, and premium lifestyle amenities. Offering thoughtfully designed 3 and 4 BHK apartments, the project combines contemporary aesthetics with functional layouts, expansive balconies, abundant natural light, and superior ventilation.
            </p>
            <p>
              Strategically located in the lush green surroundings of Sector 150, Noida, the development enjoys seamless connectivity to the Noida-Greater Noida Expressway, Yamuna Expressway, and the upcoming Jewar International Airport, while remaining close to leading schools, hospitals, business hubs, and entertainment destinations.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 bg-[#991b1b] text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-md hover:bg-[#7f1d1d] hover:shadow-lg transition-all duration-300 transform active:scale-98"
          >
            Download Brochure
          </button>
        </div>

        {/* ================= RIGHT COLUMN: SYMMETRICAL INTERACTIVE GALLERY ================= */}
        <div className="lg:col-span-6 w-full">
          {/* Mobile: Horizontal Swipe Container | Desktop: Perfectly Symmetric 2x2 Grid */}
          <div className="flex overflow-x-auto pb-4 lg:pb-0 scrollbar-none snap-x snap-mandatory lg:grid lg:grid-cols-2 gap-4 lg:gap-5">
            {overviewImages.map((src, index) => (
              <div
                key={src}
                onClick={() => setActiveLightboxImg(src)}
                className="relative shrink-0 w-[280px] sm:w-[340px] lg:w-full snap-center h-[200px] sm:h-[240px] xl:h-[260px] rounded-2xl overflow-hidden bg-neutral-200 transition-all duration-500 hover:shadow-xl group cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`ACE 150 Presentation Detail ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Subtle Hover Overlay for Interactivity Hint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ================= IMAGE POPOUT LIGHTBOX MODAL ================= */}
      {activeLightboxImg && (
        <div className="fixed inset-0 z-110 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <button 
            onClick={() => setActiveLightboxImg(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 transition-colors z-120"
            aria-label="Close Lightbox"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative w-full max-w-5xl h-[50vh] sm:h-[70vh] rounded-xl overflow-hidden animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <Image
              src={activeLightboxImg}
              alt="Expanded Architectural Render Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* ================= INTERACTIVE BROCHURE DIALOG MODAL ================= */}
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
                Unlock Project Brochure
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Please enter your details to receive full specifications and layouts instantly.
              </p>
            </div>

            <form onSubmit={handleModalSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-brand-gold focus:bg-white transition-all"
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
                    placeholder="10 digit number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-20 pr-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-brand-gold focus:bg-white transition-all"
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
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-brand-gold focus:bg-white transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative mt-4 bg-brand-gold text-neutral-950 font-bold text-sm py-3.5 rounded-xl shadow-lg transition-all duration-300 overflow-hidden disabled:opacity-70 disabled:pointer-events-none"
              >
                <div className={`absolute inset-0 bg-neutral-950 transition-transform duration-500 origin-left ${isSubmitting ? "translate-x-0" : "-translate-x-full"}`} />
                <span className={`relative z-10 flex items-center justify-center gap-2 ${isSubmitting ? "text-white" : "text-neutral-950"}`}>
                  {isSubmitting ? "Generating Download..." : "Access Brochure Now"}
                </span>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}