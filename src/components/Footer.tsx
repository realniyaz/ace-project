"use client";

import Image from "next/image";
import { projectData } from "@/config/projectData";

interface FooterLink {
  label: string;
  href: string;
}

const quickNavLinks: FooterLink[] = [
  { label: "Overview", href: "#overview" },
  { label: "Highlights", href: "#highlights" },
  { label: "Luxury Price", href: "#pricing" },
  { label: "Amenities", href: "#amenities" },
  { label: "Floor Plan", href: "#floor-plans" },
  { label: "Location", href: "#location" },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-neutral-300 text-neutral-800 text-xs overflow-hidden select-none">
      
      {/* Light subtle geometric background layout vector textures */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* ================= UPPER CORE MATRIX CONTAINER (Bright High-Contrast Theme) ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* BRAND PROFILE PLATFORM */}
          <div className="lg:col-span-5 space-y-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative flex items-center bg-white p-2.5 rounded-xl shadow-xl shadow-neutral-950/5 max-w-[210px] border border-neutral-200/80">
              <Image
                src="/acelogo.png" 
                alt="Authorized Partner Badge"
                width={125}
                height={42}
                className="h-8 w-auto object-contain brightness-100"
              />
              <div className="ml-3 pl-3 border-l border-neutral-300 flex flex-col justify-center">
                <span className="text-[9px] font-extrabold text-neutral-950 tracking-wider uppercase leading-none">Authorised</span>
                <span className="text-[8px] font-bold text-neutral-600 tracking-widest uppercase mt-1 leading-none">Channel Partner</span>
              </div>
            </div>
            {/* Boosted description visibility to text-neutral-700 */}
            <p className="text-neutral-700 font-normal leading-relaxed text-[11px] max-w-sm">
              {projectData.footerDesc}
            </p>
          </div>

          {/* QUICK LINKS RIBBON INDEX */}
          <div className="lg:col-span-2 space-y-4 text-center lg:text-left">
            <h4 className="text-neutral-950 text-[10px] font-black uppercase tracking-[0.2em]">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2.5">
              {quickNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#991b1b] text-neutral-800 font-medium transition-colors duration-300 text-[11px] block tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* COMPLIANCE LEGAL RIBBON INDEX */}
          <div className="lg:col-span-2 space-y-4 text-center lg:text-left">
            <h4 className="text-neutral-950 text-[10px] font-black uppercase tracking-[0.2em]">
              Policies
            </h4>
            <nav className="flex flex-col gap-2.5">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#991b1b] text-neutral-800 font-medium transition-colors duration-300 text-[11px] block tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* CONTACT DETAIL MATRIX PANELS */}
          <div className="lg:col-span-3 space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-neutral-950 text-[10px] font-black uppercase tracking-[0.2em]">
              Advisory Desk
            </h4>
            <div className="space-y-3 text-[11px] font-medium text-neutral-800 w-full">
              
              {/* Address Map Component Link */}
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <svg className="w-4 h-4 text-[#991b1b] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed text-neutral-800 font-normal">{projectData.contact.address}</span>
              </div>

              {/* Direct Telephone Row */}
              <div className="flex items-center gap-3 justify-center lg:justify-start pt-1">
                <svg className="w-4 h-4 text-[#991b1b] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${projectData.contact.phone}`} className="text-neutral-950 hover:text-[#991b1b] font-bold tracking-wide transition-colors duration-300">
                  {projectData.contact.phone}
                </a>
              </div>

              {/* Electronic Correspondence Mail Row */}
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <svg className="w-4 h-4 text-[#991b1b] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${projectData.contact.email}`} className="text-neutral-800 hover:text-[#991b1b] transition-colors duration-300">
                  {projectData.contact.email}
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ================= LOWER COMPLIANCE STRIP (High-Visibility Dark Theme) ================= */}
      <div className="bg-neutral-950 border-t border-neutral-900 py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Statutory Registration Codes Array */}
          <div className="space-y-1 text-[11px] tracking-wide text-neutral-200 font-normal">
            <p>Agent RERA Registration ID: <span className="text-white font-mono font-semibold uppercase ml-1">{projectData.agentRera}</span></p>
            <p>Project RERA Registration ID: <span className="text-white font-mono font-semibold ml-1">{projectData.reraNumber}</span></p>
          </div>

          {/* Clean Copyright Stamp */}
          <div className="text-[10px] tracking-[0.2em] text-neutral-400 font-bold uppercase">
            COPYRIGHT &copy; {new Date().getFullYear()} | SITE MANAGED BY{" "}
            <span className="text-white hover:text-[#991b1b] transition-colors duration-300 font-black cursor-pointer">
              MARGAUX TECH
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}