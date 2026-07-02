"use client";

import { useState } from "react";
import { projectData } from "@/config/projectData";

export default function FloatingActions() {
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsEnquireOpen(false);
      window.location.href = "/thank-you";
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(`Hi, I am interested in ${projectData.title}. Please share the digital brochure, inventory details, and floor plans.`);
  const whatsappUrl = `https://wa.me/${projectData.contact.phone.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <>
      {/* ================= PREMIUM FLOATING CONTROLS ENGINE ================= */}
      {/* Mobile Bar: Solid White Call, Brand Gold Enquire, and WhatsApp Brand Green */}
      <div className="fixed bottom-0 left-0 right-0 z-[150] bg-white divide-x divide-neutral-200 lg:divide-x-0 flex h-14 items-stretch lg:bottom-10 lg:left-auto lg:right-10 lg:bg-transparent lg:flex-col lg:gap-4 lg:w-auto lg:h-auto">
        
        {/* ACTION 1: TELEPHONE CHANNEL */}
        <a
          href={`tel:${projectData.contact.phone}`}
          className="flex-1 lg:flex-none flex items-center justify-center bg-white text-brand-dark lg:w-14 lg:h-14 lg:border lg:border-neutral-200/80 lg:rounded-full lg:shadow-xl hover:lg:bg-neutral-50 transition-all duration-300 group"
          title="Call Expert"
        >
          <svg className="w-4 h-4 lg:w-5 lg:h-5 text-brand-dark shrink-0 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.384 17.791l-3.75-3.75a1.254 1.254 0 00-1.768 0l-1.396 1.396c-2.828-1.414-4.526-3.112-5.94-5.94l1.396-1.396a1.254 1.254 0 000-1.768l-3.75-3.75a1.254 1.254 0 00-1.768 0L2.343 4.654C1.523 5.474 1 7.156 1 9c0 6.075 4.925 11 11 11 1.844 0 3.526-.523 4.346-1.343l2.038-2.038a1.254 1.254 0 000-1.768z" />
          </svg>
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-dark lg:hidden ml-2">
            Call
          </span>
        </a>

        {/* ACTION 2: CRM POPUP TRIGGER (Shifted to Premium Brand Gold) */}
        <button suppressHydrationWarning
          onClick={() => setIsEnquireOpen(true)}
          className="flex-1 lg:flex-none flex items-center justify-center bg-brand-gold text-white lg:w-14 lg:h-14 lg:bg-white lg:text-brand-gold lg:border lg:border-neutral-200/80 lg:rounded-full lg:shadow-xl hover:lg:bg-neutral-50 transition-all duration-300 group cursor-pointer border-none"
          title="Enquire Now"
        >
          <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white lg:text-brand-gold shrink-0 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-white lg:text-brand-dark lg:hidden ml-2">
            Enquire
          </span>
        </button>

        {/* ACTION 3: SECURE CHAT INTERFACE */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 lg:flex-none flex items-center justify-center bg-[#00D254] text-white lg:w-14 lg:h-14 lg:bg-white lg:border lg:border-neutral-200/80 lg:rounded-full lg:shadow-xl hover:lg:bg-neutral-50 transition-all duration-300 group"
          title="WhatsApp Us"
        >
          <div className="relative w-4 h-4 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform flex items-center justify-center shrink-0">
            <img 
              src="/wh.png" 
              alt="WhatsApp" 
              className="w-full h-full object-contain block mx-auto"
            />
          </div>
          <span className="text-[11px] font-bold tracking-wide text-white lg:hidden ml-2">
            WhatsApp
          </span>
        </a>

      </div>

      {/* ================= POPUP CANVAS OVERLAY MODAL INTERFACE ================= */}
      {isEnquireOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-brand-dark/70 backdrop-blur-xs select-none">
          <div className="absolute inset-0" onClick={() => setIsEnquireOpen(false)} />
          
          <div className="relative bg-white border border-neutral-200/80 w-full max-w-md rounded-2xl p-6 sm:p-8 shadow-2xl z-10 max-h-[85vh] sm:max-h-[90vh] overflow-y-auto scrollbar-none animate-scale-up">
            <button
              onClick={() => setIsEnquireOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 p-1.5 transition-colors cursor-pointer rounded-full"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-5 space-y-2">
              {/* Premium Gold ribbon identifier */}
              <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 px-3 py-1 rounded-none">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                <span className="text-[9px] font-bold tracking-[0.2em] text-brand-gold uppercase">Immediate Callback</span>
              </div>
              <h3 className="text-xl font-light text-brand-dark tracking-tight font-serif">Express Interest</h3>
              <p className="text-xs text-neutral-500 font-light max-w-xs mx-auto leading-relaxed">
                Provide your contact data to receive an official digital pricing brochure sheet instantly.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-600 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-xs text-neutral-900 focus:outline-none focus:border-brand-gold focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-600 mb-1">Mobile Contact</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-neutral-500 font-medium border-r border-neutral-200 pr-2.5">🇮🇳 +91</span>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-16 pr-4 py-3.5 text-xs text-neutral-900 focus:outline-none focus:border-brand-gold focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-600 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-xs text-neutral-900 focus:outline-none focus:border-brand-gold focus:bg-white transition-all"
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer group select-none py-0.5">
                <input
                  type="checkbox"
                  required
                  defaultChecked
                  className="mt-0.5 border-neutral-300 bg-white text-brand-gold focus:ring-0 focus:ring-offset-0 scale-95 accent-brand-gold rounded-sm shrink-0"
                />
                <span className="text-[10px] leading-relaxed text-neutral-500 group-hover:text-neutral-700 transition-colors text-left font-light">
                  I authorize project desk verification systems to share updates via SMS, Call, or WhatsApp platforms.
                </span>
              </label>

              {/* Master Class Button Component with custom Gold transitions */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative mt-1 bg-brand-gold text-white font-bold text-xs uppercase tracking-[0.15em] py-4 rounded-xl shadow-lg overflow-hidden disabled:opacity-70 group/btn cursor-pointer active:scale-[0.99] border-none"
              >
                <span className="absolute inset-0 bg-brand-gold-dark transition-transform duration-500 origin-left -translate-x-full group-hover/btn:translate-x-0" />
                <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-200">
                  {isSubmitting ? "Transmitting Profile..." : "Submit Enquiry"}
                </span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}