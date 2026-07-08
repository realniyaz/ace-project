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
      // Connect to the active backend lead transmission API pipeline routing framework
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          configSelection: "Welcome Modal Auto-Popup Popup Enquiry"
        }),
      });

      if (response.ok) {
        setIsOpen(false);
        sessionStorage.setItem("welcome_modal_triggered", "true");
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-brand-dark/70 backdrop-blur-xs select-none">
      <div className="absolute inset-0" onClick={handleClose} />
      
      {/* Symmetrical, clean single-card container */}
      <div className="relative bg-white border border-neutral-200 w-full max-w-sm rounded-2xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto scrollbar-none animate-scale-up">
        
        {/* Minimalist Dismissal Cross */}
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 text-neutral-400 hover:text-brand-dark p-1.5 cursor-pointer transition-colors rounded-full border-none bg-transparent"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Premium Typographic Heading */}
        <div className="text-center mb-6 space-y-1">
          <h3 className="text-xl font-medium text-brand-dark tracking-tight font-serif">
            Express Interest
          </h3>
          <p className="text-xs text-neutral-400 font-light">
            Enter your details to request an immediate callback.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1 ml-0.5">Full Name</label>
            <input suppressHydrationWarning
              type="text"
              name="name"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs text-brand-dark focus:outline-none focus:border-brand-gold focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1 ml-0.5">Mobile Contact</label>
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
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-16 pr-4 py-3 text-xs text-brand-dark focus:outline-none focus:border-brand-gold focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1 ml-0.5">Email Address</label>
            <input suppressHydrationWarning
              type="email"
              name="email"
              required
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs text-brand-dark focus:outline-none focus:border-brand-gold focus:bg-white transition-all"
            />
          </div>

          {/* Symmetrical Premium Button Action Component */}
          <button suppressHydrationWarning
            type="submit"
            disabled={isSubmitting}
            className="w-full relative mt-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs uppercase tracking-[0.15em] py-3.5 rounded-xl shadow-md transition-all duration-300 overflow-hidden active:scale-[0.99] disabled:opacity-70 cursor-pointer border-none"
          >
            {isSubmitting ? "Transmitting..." : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}