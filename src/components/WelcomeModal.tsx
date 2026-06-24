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
      // Simulation delay for smooth user feedback transition
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsOpen(false);
      sessionStorage.setItem("welcome_modal_triggered", "true");
      
      // Navigate cleanly straight to the confirmation layout context frame
      router.push("/thank-you");
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs select-none animate-fade-in">
      <div className="absolute inset-0" onClick={handleClose} />
      
      {/* Container structured with your premium dark background palette profile */}
      <div className="relative bg-[#1A3B4E] border border-white/10 w-full max-w-sm rounded-xl p-7 shadow-2xl z-10 max-h-[90vh] overflow-y-auto scrollbar-none animate-scale-up">
        
        {/* Precise Cross Dismissal Button Anchor */}
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 text-white/70 hover:text-white p-1 cursor-pointer transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Heading text structure directly synchronized from your layout screenshot reference */}
        <h3 className="text-xl font-medium text-white tracking-wide text-center mt-2 mb-6">
          Get More Details Enquire Now
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              required
              placeholder="Name*"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-white/30 rounded-none px-4 py-3 text-sm text-white placeholder-white/60 focus:outline-none focus:border-white transition-all font-light"
            />
          </div>

          <div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-white/60 font-light border-r border-white/20 pr-2.5">+91</span>
              <input
                type="tel"
                name="mobile"
                required
                pattern="[0-9]{10}"
                placeholder="Mobile*"
                value={formData.mobile}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-white/30 rounded-none pl-16 pr-4 py-3 text-sm text-white placeholder-white/60 focus:outline-none focus:border-white transition-all font-light"
              />
            </div>
          </div>

          <div>
            <input
              type="email"
              name="email"
              required
              placeholder="Email*"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-white/30 rounded-none px-4 py-3 text-sm text-white placeholder-white/60 focus:outline-none focus:border-white transition-all font-light"
            />
          </div>

          {/* Button maintaining your luxury project aesthetic parameters */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-auto bg-[#BC8A6B] hover:bg-[#A37457] text-white text-sm tracking-wide px-8 py-2.5 rounded-none transition-all duration-300 active:scale-[0.98] disabled:opacity-70 cursor-pointer border-none font-light"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}