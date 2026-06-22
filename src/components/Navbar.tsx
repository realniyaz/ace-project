"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { projectData } from "@/config/projectData";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Overview", href: "#overview" },
  { label: "Highlights", href: "#highlights" },
  { label: "Price", href: "#pricing" },
  { label: "Amenities", href: "#amenities" },
  { label: "Floor Plans", href: "#floor-plans" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);

      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <>
      {/* ================= HEADER STRUCTURE CONTAINER ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-neutral-950/95 border-b border-white/10 py-3.5 shadow-2xl shadow-black/50"
            : "bg-black/10 backdrop-blur-xs py-5 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* BRAND LOGO FRAME (Hardware accelerated blend transition engine) */}
          <a href="#hero" className="relative z-110 transition-all duration-500 active:scale-95">
            <Image
              src="/acelogo.png"
              alt="ACE Logo"
              width={130}
              height={40}
              className={`h-8 sm:h-9 w-auto object-contain transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
                isOpen && !isScrolled ? "brightness-0 grayscale contrast-200" : "brightness-0 invert"
              }`}
              priority
            />
          </a>

          {/* DESKTOP LINK CLUSTERS (Symmetrical Center-Expanding Underline Physics) */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-neutral-300 hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1.5px] after:bg-[#991b1b] hover:after:w-4/5 hover:after:left-[10%] after:transition-all after:duration-500 after:cubic-bezier(0.16, 1, 0.3, 1)"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* DESKTOP CALL-TO-ACTION BRAND BUTTON PANEL */}
          <div className="hidden lg:flex items-center">
            <a
              href={`tel:${projectData.contact.phone}`}
              className="group relative bg-[#991b1b] text-white font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-none overflow-hidden transition-all duration-500 shadow-xl"
            >
              <span className="absolute inset-0 bg-white transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) origin-left -translate-x-full group-hover:translate-x-0" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-neutral-950 transition-colors duration-300">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {projectData.contact.phone}
              </span>
            </a>
          </div>

          {/* MASTERED INTERACTIVE HAMBURGER CROSS INDICATOR BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-110 p-2 focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            <div className="w-5 h-3.5 flex flex-col justify-between relative">
              <span
                className={`w-full h-[1.5px] rounded-none transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
                  isOpen ? "bg-neutral-900 rotate-45 translate-y-[6px]" : "bg-white"
                }`}
              />
              <span
                className={`w-full h-[1.5px] rounded-none transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-x-0 bg-neutral-900" : "bg-white scale-x-100"
                }`}
              />
              <span
                className={`w-full h-[1.5px] rounded-none transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
                  isOpen ? "bg-neutral-900 -rotate-45 -translate-y-[6px]" : "bg-white"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* ================= MOBILE FULL-SCREEN CANVAS OVERLAY SYSTEM ================= */}
      <div
        className={`fixed inset-0 z-90 lg:hidden flex flex-col bg-[#fcfbf9] transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
          isOpen ? "opacity-100 pointer-events-auto translate-x-0" : "opacity-0 pointer-events-none translate-x-full"
        }`}
      >
        {/* Fine background geometric micro grid layout */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Links Navigation Matrix Sequence */}
        <div className="relative z-10 my-auto flex flex-col justify-center px-6 sm:px-12 space-y-1">
          <span className={`text-[10px] font-bold tracking-[0.25em] text-[#991b1b] uppercase mb-4 transition-all duration-700 delay-150 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}>
            Navigation Index
          </span>
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-2xl sm:text-3xl font-light tracking-wide text-neutral-800 hover:text-[#991b1b] py-3 border-b border-neutral-200/60 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) transform ${
                isOpen ? "translate-y-0 opacity-100 blur-none" : "translate-y-8 opacity-0 blur-md"
              }`}
              style={{ 
                transitionDelay: `${idx * 45 + 100}ms`,
                ["--delay" as any]: `${idx * 45 + 100}ms`
              } as React.CSSProperties}
            >
              <div className="flex items-center justify-between group">
                <span className="transition-transform duration-300 group-hover:translate-x-2">{link.label}</span>
                <svg className="w-5 h-5 text-[#991b1b] opacity-0 transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Contact Deck inside Mobile Overlay Screen */}
        <div className={`relative z-10 p-6 sm:p-12 border-t border-neutral-200/60 bg-neutral-100/80 backdrop-blur-md transition-all duration-[8500ms] cubic-bezier(0.16, 1, 0.3, 1) transform ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}>
          <div className="flex flex-col gap-3 max-w-sm mx-auto">
            <span className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase text-center">Bespoke Advisory Desk</span>
            <a
              href={`tel:${projectData.contact.phone}`}
              className="group relative flex items-center justify-center gap-3 w-full bg-[#991b1b] text-white font-bold py-4 text-xs uppercase tracking-[0.15em] shadow-xl overflow-hidden transition-all duration-300 active:scale-[0.99]"
            >
              <span className="absolute inset-0 bg-neutral-900 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) origin-left -translate-x-full group-hover:translate-x-0" />
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Direct Line Connection
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}