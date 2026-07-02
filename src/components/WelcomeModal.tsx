"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { projectData } from "@/config/projectData";

export default function WelcomeModal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
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
      await new Promise((resolve) => setTimeout(resolve, 1000));
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
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-brand-dark/80 backdrop-blur-md select-none">
      <div className="absolute inset-0" onClick={handleClose} />
      
      {/* ================= EDITORIAL ASYMMETRIC OVERLAY MODAL ================= */}
      <div className="relative bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col md:flex-row border border-neutral-200/60 animate-scale-up">
        
        {/* Precise Cross Dismissal Trigger */}
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 text-neutral-400 hover:text-brand-dark p-1.5 cursor-pointer transition-colors rounded-full z-30 bg-neutral-50 md:bg-white/10 md:hover:bg-white/20 md:text-white/70 md:hover:text-white border-none"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* LEFT COLUMN: BRAND PROFILE INSIGNIA (Hidden on compact mobile screens) */}
        <div className="hidden md:flex md:w-5/12 bg-brand-dark p-8 flex-col justify-between relative text-left">
          {/* Ambient vector lighting */}
          <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
          
          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/30 px-2.5 py-0.5 rounded-none">
              <span className="w-1 h-1 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-[9px] font-bold tracking-widest text-brand-gold-light uppercase">Exclusive Invitation</span>
            </div>
            <h4 className="text-xl font-light text-white leading-tight font-serif tracking-wide">
              Bespoke Private Residences
            </h4>
            <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
              Access digital priority allocation inventory documents, real-time availability configurations, and structural engineering specification guides instantly.
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 relative z-10">
            <span className="text-[9px] font-mono tracking-widest uppercase text-brand-gold-light block">Location Priority Hub</span>
            <span className="text-xs font-light text-neutral-300 block mt-0.5">Sector 150, Noida</span>
          </div>
        </div>

        {/* RIGHT COLUMN: HIGH-END DIGITAL PRESETS LEAD DECK */}
        <div className="w-full md:w-7/12 p-6 sm:p-8 flex flex-col justify-center bg-white">
          <div className="text-center md:text-left mb-6 space-y-1.5">
            <span className="md:hidden text-[9px] font-bold tracking-[0.2em] text-brand-gold uppercase block mb-1">Bespoke Advisory Desk</span>
            <h3 className="text-xl font-medium text-brand-dark tracking-tight font-serif">
              Unlock Verified Access
            </h3>
            <p className="text-xs text-neutral-500 font-light leading-normal">
              Register below to coordinate directly with an allocation asset executive.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="space-y-1">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 ml-1">Full Name</label>
              <input suppressHydrationWarning
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-xs text-brand-dark focus:outline-none focus:border-brand-gold focus:bg-white transition-all shadow-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 ml-1">Mobile Contact</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-neutral-400 font-medium border-r border-neutral-200 pr-2.5 font-mono">+91</span>
                <input suppressHydrationWarning
                  type="tel"
                  name="mobile"
                  required
                  pattern="[0-9]{10}"
                  placeholder="10-digit number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-16 pr-4 py-3.5 text-xs text-brand-dark focus:outline-none focus:border-brand-gold focus:bg-white transition-all shadow-xs"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 ml-1">Email Address</label>
              <input suppressHydrationWarning
                type="email"
                name="email"
                required
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-xs text-brand-dark focus:outline-none focus:border-brand-gold focus:bg-white transition-all shadow-xs"
              />
            </div>

            {/* Master Executive Action Blueprint Trigger */}
            <button suppressHydrationWarning
              type="submit"
              disabled={isSubmitting}
              className="w-full relative mt-3 bg-brand-gold text-white font-bold text-xs uppercase tracking-[0.15em] py-4 rounded-xl shadow-lg overflow-hidden disabled:opacity-70 group/btn cursor-pointer active:scale-[0.99] border-none transition-all duration-300"
            >
              <span className="absolute inset-0 bg-brand-gold-dark transition-transform duration-500 origin-left -translate-x-full group-hover/btn:translate-x-0" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? "Verifying Credentials..." : "Request Call Back"}
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
}