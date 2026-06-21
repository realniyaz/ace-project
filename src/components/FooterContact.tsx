"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { projectData } from "@/config/projectData";

export default function FooterContact() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", mobile: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate submission network transfer validation overhead
      await new Promise((resolve) => setTimeout(resolve, 1200));
      router.push("/thank-you");
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-14 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-neutral-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Section Header Text */}
        <div className="text-center mb-10 lg:mb-14 space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-gold block">
            Contact Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-neutral-950">
            We're Here to Help You Find Your Perfect Property
          </h2>
        </div>

        {/* Core Layout Split Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT SIDE: ABOUT THE DEVELOPER METRIC PROFILE */}
          <div className="lg:col-span-7 space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-lg font-medium tracking-tight text-neutral-900">
              About Developer
            </h3>
            <div className="text-neutral-500 font-light text-xs sm:text-sm leading-relaxed space-y-4 max-w-2xl">
              <p>
                <strong className="font-medium text-neutral-800">ACE Group</strong> is one of the leading real estate developers in the NCR region, recognized for delivering premium residential and commercial developments that combine innovation, quality, and modern design. Established in 2010, the company has earned a strong reputation through its commitment to timely delivery, superior construction standards, and customer-centric approach.
              </p>
              <p>
                With a diverse portfolio of landmark projects, ACE Group focuses on creating thoughtfully planned communities that offer world-class amenities, sustainable living, and exceptional value. Driven by excellence and a vision for the future, the developer continues to redefine urban lifestyles while maintaining the trust and confidence of homebuyers and investors across India.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: PREMIUM GLASSMORPHIC LEAD FORM GENERATOR */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-neutral-900 border border-neutral-800 p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:border-brand-gold/20 w-full">
              <h3 className="text-base font-medium tracking-wider uppercase text-white mb-6 text-center lg:text-left">
                Send A Message
              </h3>
              
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-brand-gold focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-neutral-400 font-medium border-r border-white/10 pr-2">
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    pattern="[0-9]{10}"
                    placeholder="Mobile Contact"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-none pl-20 pr-4 py-3 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-brand-gold focus:bg-white/10 transition-all"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-brand-gold focus:bg-white/10 transition-all"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer group select-none py-1">
                  <input
                    type="checkbox"
                    required
                    defaultChecked
                    className="mt-0.5 border-neutral-700 bg-neutral-900 text-brand-gold focus:ring-0 focus:ring-offset-0 scale-95 accent-brand-gold"
                  />
                  <span className="text-[10px] leading-snug text-neutral-400 group-hover:text-neutral-300 transition-colors text-left">
                    I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.
                  </span>
                </label>

                {/* Animated Submit button fold layer */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative mt-2 bg-[#991b1b] text-white font-bold text-xs uppercase tracking-widest py-3.5 shadow-md transition-all duration-300 overflow-hidden disabled:opacity-70 disabled:pointer-events-none group/btn cursor-pointer active:scale-99"
                >
                  <span className="absolute inset-0 bg-neutral-950 transition-transform duration-300 origin-left -translate-x-full group-hover/btn:translate-x-0" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? "Transmitting Lead..." : "Submit Now"}
                  </span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}