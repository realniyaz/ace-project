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
      await new Promise((resolve) => setTimeout(resolve, 1200));
      router.push("/thank-you");
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative pb-20 lg:pb-28 pt-0 px-4 sm:px-6 lg:px-8 bg-[#FAF9F5] overflow-hidden select-none">
      
      {/* Light subtle geometric background layout vector textures */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ================= EDITORIAL SECTION HEADERS ================= */}
        <div className="text-center mb-10 lg:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#991b1b]/10 border border-[#991b1b]/20 px-3 py-1 rounded-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#991b1b] animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#991b1b] uppercase">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extralight tracking-tight text-neutral-950 max-w-2xl mx-auto leading-tight">
            Connect with our Bespoke Advisory Desk
          </h2>
        </div>

        {/* Core Layout Split Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT SIDE: ABOUT THE DEVELOPER METRIC PROFILE */}
          <div className="lg:col-span-7 bg-white border border-neutral-200/80 p-6 sm:p-10 rounded-2xl shadow-xl shadow-neutral-950/5 flex flex-col justify-center text-center lg:text-left space-y-4">
            <h3 className="text-xl font-light tracking-tight text-neutral-900">
              About Developer Portfolio
            </h3>
            <div className="text-neutral-600 font-light text-xs sm:text-sm leading-relaxed space-y-4 max-w-2xl text-justify md:text-center lg:text-left">
              <p>
                <strong className="font-medium text-neutral-800">ACE Group</strong> is one of the leading real estate developers in the NCR region, recognized for delivering premium residential developments that combine structural innovation, strict engineering parameters, and ultra-minimal aesthetics.
              </p>
              <p>
                With a diverse footprint of landmark landmarks across Sector 150, Noida, ACE Group builds communities initialized around expansive open-air ventilation layouts, local micro-climate trees, and high-profile private clubhouse systems, preserving absolute investment value across generations.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: PREMIUM HIGH-CONTRAST SECURE LEAD FORM */}
          <div className="lg:col-span-5 w-full flex">
            <div className="bg-neutral-900 border border-neutral-800 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-center w-full relative">
              <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-6 text-center lg:text-left">
                Send Direct Message
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
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#991b1b] focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-neutral-400 font-medium border-r border-white/10 pr-2.5">
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
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-16 pr-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#991b1b] focus:bg-white/10 transition-all"
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
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#991b1b] focus:bg-white/10 transition-all"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer group select-none py-1">
                  <input
                    type="checkbox"
                    required
                    defaultChecked
                    className="mt-0.5 border-neutral-800 bg-neutral-950 text-white focus:ring-0 focus:ring-offset-0 scale-95 accent-[#991b1b]"
                  />
                  <span className="text-[10px] leading-relaxed text-neutral-400 group-hover:text-neutral-300 transition-colors text-left font-light">
                    I authorize verified project representatives to Call, SMS, Email or WhatsApp me regarding this property. This overrides DND/NDNC registries completely.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative mt-2 bg-[#991b1b] text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl shadow-xl transition-all duration-500 overflow-hidden disabled:opacity-70 disabled:pointer-events-none group/btn cursor-pointer active:scale-[0.99]"
                >
                  <span className="absolute inset-0 bg-neutral-950 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) origin-left -translate-x-full group-hover/btn:translate-x-0" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? "Transmitting Profile..." : "Submit Inquiry"}
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