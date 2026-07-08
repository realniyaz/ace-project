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
      // Direct pipeline dispatch with accurate metadata attachment payload formats
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          configSelection: selectedConfig // Enriches lead notification with selected card variant
        }),
      });

      if (response.ok) {
        setIsModalOpen(false);
        // Clear routing transition upon guaranteed backend pipeline fulfillment confirmation
        router.push("/thank-you");
      } else {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          console.error("Server lead rejection details:", errorData);
        } else {
          console.error("Server returned non-JSON fallback raw formats:", await response.text());
        }
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Network transport layer connection exception:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="pricing" className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-brand-cream overflow-hidden">
      
      {/* Light subtle grid vector canvas layers */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* ================= EDITORIAL SECTION HEADERS ================= */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 px-3 py-1 rounded-none">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-brand-gold uppercase">Investment Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-brand-dark max-w-xl mx-auto leading-tight font-serif">
            Luxurious Spaces Calibrated to Perfection
          </h2>
        </div>

        {/* ================= MASTERED LEDGER SHEET CONTAINER ================= */}
        <div className="bg-white border border-neutral-200/80 rounded-2xl shadow-xl shadow-neutral-900/5 overflow-hidden transition-all duration-300">
          
          {/* DESKTOP MATRIX HEADER TAB (Hidden on Mobile) */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-4 bg-neutral-50 border-b border-neutral-200 text-[10px] font-bold tracking-widest text-neutral-400 uppercase select-none">
            <div className="col-span-4">Typology Arrangement</div>
            <div className="col-span-3">Super Area Footprint</div>
            <div className="col-span-3">Starting Value Allocation</div>
            <div className="col-span-2 text-right">Portfolio Actions</div>
          </div>

          {/* LEDGER DATA ROW COMPILER PIPELINE */}
          <div className="divide-y divide-neutral-100">
            {projectData.configurations.map((item) => (
              <div
                key={item.name}
                className="group relative px-6 py-6 md:px-8 md:py-7 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 items-center bg-white transition-all duration-500 ease-out hover:bg-neutral-50/60"
              >
                <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center" />

                {/* COLUMN 1: CONFIG TYPOLOGY */}
                <div className="col-span-1 md:col-span-4 flex items-center justify-between md:justify-start gap-4">
                  <span className="text-sm font-medium text-brand-dark uppercase tracking-wide">
                    {item.name}
                  </span>
                  
                  <svg className="w-4 h-4 text-neutral-300 group-hover:text-brand-gold md:block hidden transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  
                  <span className="md:hidden px-2.5 py-1 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[10px] font-bold rounded-sm">
                    {item.price}
                  </span>
                </div>

                {/* COLUMN 2: GEOMETRIC AREA VALUES */}
                <div className="col-span-1 md:col-span-3 flex md:block items-center justify-between border-t border-dashed border-neutral-100 md:border-none pt-2 md:pt-0">
                  <span className="md:hidden text-[10px] uppercase tracking-wider text-neutral-400 font-light">Super Area</span>
                  <div className="flex items-center gap-2 text-xs xl:text-sm text-neutral-600 font-light">
                    <svg className="w-3.5 h-3.5 text-neutral-400 md:inline hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4M4 4v16m0-4l5-5m11 5v4m0 0h-4m4 0l-5-5M20 4v16" />
                    </svg>
                    {item.size}
                  </div>
                </div>

                {/* COLUMN 3: VALUATION VALUES */}
                <div className="col-span-1 md:col-span-3 hidden md:block">
                  <div className="text-sm xl:text-base font-medium text-brand-dark group-hover:text-brand-gold transition-colors duration-300">
                    {item.price}
                  </div>
                </div>

                {/* COLUMN 4: ACTION TRIGGER SYSTEM BUTTON */}
                <div className="col-span-1 md:col-span-2 pt-2 md:pt-0">
                  <button suppressHydrationWarning
                    onClick={() => openEnquiry(item.name)}
                    className="w-full relative bg-brand-dark text-white font-bold text-[11px] uppercase tracking-widest py-3 shadow-md rounded-xl md:rounded-none overflow-hidden group/btn cursor-pointer transition-all duration-300 border-none"
                  >
                    <span className="absolute inset-0 bg-brand-gold transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) origin-left -translate-x-full group-hover/btn:translate-x-0" />
                    <span className="relative z-10 flex items-center justify-center gap-1.5">
                      Enquire
                      <svg className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ================= INQUIRY SCREEN DIALOG POPUP OVERLAY MODAL ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-200 flex items-center justify-center p-4 bg-brand-dark/50 backdrop-blur-xs select-none">
          <div className="absolute inset-0" onClick={() => setIsModalOpen(false)} />
          
          <div className="relative bg-white border border-neutral-200 w-full max-w-sm rounded-2xl p-6 shadow-xl z-10 max-h-[90vh] overflow-y-auto scrollbar-none animate-scale-up">
            <button suppressHydrationWarning
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 p-1 rounded-full cursor-pointer transition-colors border-none"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-lg font-medium text-brand-dark tracking-tight text-center mb-5 font-serif">
              Enquire: {selectedConfig}
            </h3>

            <form onSubmit={handlePricingSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-medium text-neutral-500 mb-1">Full Name</label>
                <input suppressHydrationWarning
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs text-brand-dark focus:outline-none focus:border-brand-gold focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-neutral-500 mb-1">Mobile Number</label>
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
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-14 pr-4 py-3 text-xs text-brand-dark focus:outline-none focus:border-brand-gold focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-neutral-500 mb-1">Email Address</label>
                <input suppressHydrationWarning
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs text-brand-dark focus:outline-none focus:border-brand-gold focus:bg-white transition-all"
                />
              </div>

              <button suppressHydrationWarning
                type="submit"
                disabled={isSubmitting}
                className="w-full relative mt-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 overflow-hidden active:scale-[0.99] disabled:opacity-70 cursor-pointer border-none"
              >
                {isSubmitting ? "Transmitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}