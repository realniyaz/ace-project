"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projectData } from "@/config/projectData";

const overviewImages = [
  { id: "tl", src: "/overview-1.jpg", alt: "Architectural Exterior", position: "top-0 left-0" },
  { id: "tr", src: "/overview-2.jpg", alt: "Private Balcony View", position: "top-0 right-0" },
  { id: "bl", src: "/overview-3.jpg", alt: "Modern Living Room", position: "bottom-0 left-0" },
  { id: "br", src: "/overview-5.jpg", alt: "Sophisticated Interior", position: "bottom-0 right-0" },
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
    <section id="overview" className="relative py-16 lg:py-0 lg:h-[100vh] min-h-screen lg:min-h-[850px] bg-[#FAF9F5] flex items-center justify-center overflow-hidden">
      
      {/* Light subtle geometric background token texture */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* ================= DESKTOP LAYOUT SYSTEM ================= */}
      <div className="relative z-10 max-w-[88rem] mx-auto w-full h-[80vh] min-h-[650px] hidden lg:flex items-center justify-center">
        
        {/* FOUR CORNER MATRIX IMAGES */}
        {overviewImages.map((image) => (
          <div
            key={image.id}
            onClick={() => setActiveLightboxImg(image.src)}
            className={`absolute ${image.position} w-[24%] xl:w-[22%] h-[42%] bg-white p-3 rounded-2xl border border-neutral-200/80 shadow-lg group cursor-pointer transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) hover:-translate-y-2 hover:shadow-2xl hover:border-[#991b1b]/30`}
          >
            <div className="relative w-full h-full bg-neutral-100 rounded-xl overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-[9000ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-90 z-20" />
              <span className="absolute inset-3 border border-white/20 rounded-lg z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        ))}

        {/* FLOATING CENTRAL EDITORIAL CONTENT CARD */}
        <div className="relative z-30 max-w-xl w-full bg-white border border-neutral-200/70 p-10 xl:p-12 rounded-2xl shadow-2xl text-center space-y-6 flex flex-col items-center transform -translate-y-2 transition-transform duration-500">
          <div className="space-y-3 w-full">
            <div className="inline-flex items-center gap-2 bg-[#991b1b]/10 border border-[#991b1b]/20 px-3 py-1 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#991b1b] animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#991b1b] uppercase">ACE Signature • Editorial Overview</span>
            </div>
            <h2 className="text-3xl xl:text-4xl font-extralight tracking-tight text-neutral-950 leading-tight">
              {projectData.title}
            </h2>
          </div>

          <div className="text-neutral-600 space-y-4 text-xs xl:text-sm leading-relaxed font-light text-center">
            <p>
              <strong className="font-medium text-neutral-900">ACE Sector 150 Noida</strong> is an upcoming ultra-luxury residential development that redefines modern living with its elegant architecture, spacious residences, and premium lifestyle amenities. The project combines contemporary aesthetics with functional layouts and absolute architectural clarity.
            </p>
            <p>
              Strategically positioned in the expansive green space of Sector 150, Noida, this iconic development features direct line highway interfaces while prioritizing personal space and an ecosystem layout model.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full relative bg-neutral-950 text-white font-bold text-xs uppercase tracking-widest py-4 transition-all duration-500 overflow-hidden active:scale-[0.99] group/btn cursor-pointer shadow-md rounded-xl"
          >
            <span className="absolute inset-0 bg-[#991b1b] transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) origin-left -translate-x-full group-hover/btn:translate-x-0" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Download Brochure
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>

      </div>

      {/* ================= MASTERED MOBILE LAYOUT FLOW ================= */}
      <div className="relative z-20 w-full max-w-md mx-auto flex flex-col lg:hidden px-2 space-y-8 animate-fade-in">
        
        {/* TEXT OVERVIEW PACKET CARD */}
        <div className="bg-white border border-neutral-200/60 p-6 sm:p-8 rounded-2xl shadow-xl space-y-5 text-center flex flex-col items-center">
          <div className="space-y-2 w-full">
            <div className="inline-flex items-center gap-2 bg-[#991b1b]/10 border border-[#991b1b]/20 px-2.5 py-0.5 rounded-xs">
              <span className="text-[9px] font-bold tracking-wider text-[#991b1b] uppercase">Editorial Overview</span>
            </div>
            <h2 className="text-2xl font-light text-neutral-950 tracking-tight leading-tight">
              {projectData.title}
            </h2>
          </div>

          <div className="text-neutral-600 space-y-3.5 text-xs sm:text-sm font-light text-justify leading-relaxed">
            <p>
              <strong className="font-medium text-neutral-900">ACE Sector 150 Noida</strong> is an upcoming ultra-luxury residential development that redefines modern living with elegant architecture, spacious layouts, and premium specifications.
            </p>
            <p>
              Located strategically within the prime growth zone of Sector 150, it blends natural green vistas with seamless corridor connectivity directly linked to the National Capital Region infrastructure.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-neutral-950 text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl shadow-md active:scale-99"
          >
            Download Brochure
          </button>
        </div>

        {/* SYMMETRICAL IMAGES MATRIX GRID */}
        <div className="grid grid-cols-2 gap-3.5 pt-2">
          {overviewImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setActiveLightboxImg(image.src)}
              className="relative aspect-square bg-white p-2 border border-neutral-200/80 shadow-md rounded-2xl active:scale-98 transition-all"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ================= LIGHTBOX PREVIEW POPUP ================= */}
      {activeLightboxImg && (
        <div className="fixed inset-0 z-110 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in" onClick={() => setActiveLightboxImg(null)}>
          <button onClick={() => setActiveLightboxImg(null)} className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 cursor-pointer">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative w-full max-w-4xl h-[60vh]" onClick={(e) => e.stopPropagation()}>
            <Image src={activeLightboxImg} alt="Preview" fill className="object-contain" />
          </div>
        </div>
      )}

      {/* ================= POPUP LEAD INQUIRY FORM MODAL ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 animate-fade-in animate-duration-200">
          <div className="absolute inset-0 bg-neutral-950/70 backdrop-blur-md" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white border border-neutral-100 w-full max-w-md rounded-2xl p-6 sm:p-8 shadow-2xl z-10 animate-fade-in-up">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 p-1 rounded-full cursor-pointer">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-neutral-900 tracking-tight">Unlock Project Brochure</h3>
              <p className="text-xs text-neutral-400 mt-1">Please enter your details to receive full specifications and layouts instantly.</p>
            </div>

            <form onSubmit={handleModalSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
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
                    placeholder="10 digit mobile number"
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
                  {isSubmitting ? "Generating Download Link..." : "Access Brochure Now"}
                </span>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}