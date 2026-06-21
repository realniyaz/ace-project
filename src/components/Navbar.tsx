"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
 { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle subtle background shifting on scroll for a premium feel
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-xs border-b border-neutral-100 py-3"
            : "bg-black/20 backdrop-blur-xs py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo Container */}
          <a href="#hero" className="relative transition-transform duration-200 active:scale-95">
            <Image
              src="/acelogo.png" // Handled: Ready for your local file path
              alt="ACE Logo"
              width={140}
              height={45}
              className={`h-9 w-auto object-contain transition-all duration-300 ${
                isScrolled ? "brightness-100" : "brightness-0 invert"
              }`}
              priority
            />
          </a>

          {/* Desktop Navigation Link Cluster */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 relative group ${
                  isScrolled ? "text-neutral-600 hover:text-neutral-900" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                {/* Modern subtle underline sliding animation */}
                <span className={`absolute bottom-1 left-3 right-3 h-[2px] transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left ${
                  isScrolled ? "bg-brand-gold" : "bg-white"
                }`} />
              </a>
            ))}
          </nav>

          {/* Call to Action Trigger */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:+919910233335"
              className="bg-[#991b1b] text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md hover:bg-[#7f1d1d] hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              +91 99102 33335
            </a>
          </div>

          {/* Mobile Hamburguer Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md focus:outline-hidden"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span
                className={`w-full h-[2px] rounded-sm transition-all duration-300 origin-left ${
                  isScrolled ? "bg-neutral-900" : "bg-white"
                } ${isOpen ? "rotate-45 translate-x-[3px] translate-y-[-1px]" : ""}`}
              />
              <span
                className={`w-full h-[2px] rounded-sm transition-opacity duration-200 ${
                  isScrolled ? "bg-neutral-900" : "bg-white"
                } ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-full h-[2px] rounded-sm transition-all duration-300 origin-left ${
                  isScrolled ? "bg-neutral-900" : "bg-white"
                } ${isOpen ? "-rotate-45 translate-x-[3px] translate-y-[1px]" : ""}`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Responsive Mobile Drawer Menu Overlays */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop glass blur tint layer */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xs" onClick={() => setIsOpen(false)} />

        {/* Drawer panel surface */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 max-w-sm bg-white shadow-xl flex flex-col pt-20 px-6 pb-6 space-y-3 transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-neutral-700 font-medium text-lg py-2.5 border-b border-neutral-50 hover:text-brand-gold transition-colors duration-200 animate-fade-in-up"
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              {link.label}
            </a>
          ))}

          <div className="pt-6 mt-auto">
            <a
              href="tel:+919910233335"
              className="block text-center bg-[#991b1b] text-white font-bold py-3.5 rounded-xl shadow-md active:scale-[0.98] transition-all"
            >
              Call +91 99102 33335
            </a>
          </div>
        </div>
      </div>
    </>
  );
}