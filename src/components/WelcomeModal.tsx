"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-neutral-950/50 backdrop-blur-xs select-none">
      <div className="absolute inset-0" onClick={handleClose} />
      
      <div className="relative bg-white border border-neutral-200 w-full max-w-sm rounded-2xl p-6 shadow-xl z-10 max-h-[90vh] overflow-y-auto scrollbar-none">
        
        {/* Dismiss Button */}
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 p-1 cursor-pointer transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-lg font-medium text-neutral-900 tracking-tight text-center mb-5">
          Enter Your Details
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-medium text-neutral-600 mb-1">Full Name</label>
            <input
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
              <input
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
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs text-neutral-900 focus:outline-none focus:border-[#991b1b] focus:bg-white transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full relative mt-2 bg-[#991b1b] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 overflow-hidden active:scale-[0.99] disabled:opacity-70 cursor-pointer"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}