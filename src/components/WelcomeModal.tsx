"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WelcomeModal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Session defense framework: tracks tab session storage to prevent aggressive popups on reload
    const hasSeenModal = sessionStorage.getItem("welcome_modal_triggered");
    
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("welcome_modal_triggered", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsOpen(false);
      sessionStorage.setItem("welcome_modal_triggered", "true");
      router.push("/thank-you");
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-xs select-none">
      {/* Absolute Backdrop Click Intercept Layer */}
      <div className="absolute inset-0" onClick={handleClose} />
      
      {/* ================= COMPACT BULLETPROOF MODAL CARD CONTAINER ================= */}
      {/* Mobile Keyboard Safety: Bound with max-h-[85vh] and hidden native scrollbars so input fields are fully scroll-accessible when keyboards emerge */}
      <div className="relative bg-white border border-neutral-200/80 w-full max-w-md rounded-2xl p-6 sm:p-8 shadow-2xl z-10 max-h-[85vh] sm:max-h-[90vh] overflow-y-auto scrollbar-none flex flex-col justify-between">
        
        {/* Absolute Corner Dismiss Button Frame */}
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 p-1.5 rounded-full cursor-pointer transition-colors z-30"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div>
          {/* Section Heading Metadata Matrix */}
          <div className="text-center mb-5 space-y-2.5">
            <div className="inline-flex items-center gap-2 bg-[#991b1b]/10 border border-[#991b1b]/20 px-3 py-1 rounded-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#991b1b] animate-pulse" />
              <span className="text-[9px] font-bold tracking-[0.2em] text-[#991b1b] uppercase">Priority Access</span>
            </div>
            <h3 className="text-xl font-light text-neutral-900 tracking-tight">
              Unlock Premium Inventory
            </h3>
            <p className="text-xs text-neutral-500 font-light max-w-xs mx-auto leading-relaxed">
              Register your verification profile for instant floor plans, digital brochures, and direct line advisory access.
            </p>
          </div>

          {/* Core Structured Input Fields */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#991b1b] focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-700 mb-1">Mobile Contact</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-neutral-500 font-medium border-r border-neutral-200 pr-2.5">🇮🇳 +91</span>
                <input
                  type="tel"
                  name="mobile"
                  required
                  pattern="[0-9]{10}"
                  placeholder="10-digit smartphone number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-16 pr-4 py-3.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#991b1b] focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#991b1b] focus:bg-white transition-all"
              />
            </div>

            {/* Compliance Tracking Terms Row Layout */}
            <label className="flex items-start gap-3 cursor-pointer group select-none pt-1">
              <input
                type="checkbox"
                required
                defaultChecked
                className="mt-0.5 border-neutral-300 bg-white text-[#991b1b] focus:ring-0 focus:ring-offset-0 scale-100 accent-[#991b1b] rounded-sm shrink-0"
              />
              <span className="text-[10px] leading-relaxed text-neutral-500 group-hover:text-neutral-700 transition-colors text-left font-light">
                I authorize company desk agents to track updates and call back via SMS, Call, or WhatsApp, overriding baseline DND records.
              </span>
            </label>

            {/* Solid ACE Branded Accent Action Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full relative mt-2 bg-[#991b1b] text-white font-bold text-xs uppercase tracking-[0.15em] py-4 rounded-xl shadow-lg transition-all duration-500 overflow-hidden active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none group/btn cursor-pointer"
            >
              <span className="absolute inset-0 bg-neutral-950 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) origin-left -translate-x-full group-hover/btn:translate-x-0" />
              <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-200">
                {isSubmitting ? "Activating Profile..." : "Request Call Back"}
              </span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}