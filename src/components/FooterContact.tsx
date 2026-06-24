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
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Completely synchronized target endpoint redirection sequence
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

          {/* RIGHT SIDE: PREMIUM BRIGHT THEMING LEAD FORM */}
          <div className="lg:col-span-5 w-full flex">
            <div className="bg-white border border-neutral-200 w-full max-w-sm rounded-2xl p-6 shadow-xl flex flex-col justify-center mx-auto relative">
              <h3 className="text-lg font-medium text-neutral-900 tracking-tight text-center mb-5">
                Enter Your Details
              </h3>
              
              <form onSubmit={handleContactSubmit} className="space-y-4">
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
                  className="w-full relative mt-2 bg-[#991b1b] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 overflow-hidden active:scale-[0.99] disabled:opacity-70 cursor-pointer border-none"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}