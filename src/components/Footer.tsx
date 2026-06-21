"use client";

import Image from "next/image";
import { projectData } from "@/config/projectData";

interface FooterLink {
  label: string;
  href: string;
}

// Fixed: The anchor strings are calibrated to match the exact element IDs built into the layout
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
    <footer className="relative bg-[#0c0a09] border-t border-neutral-900 text-neutral-400 text-xs py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* ================= TOP ROW: FOUR-COLUMN METRIC BREAKDOWN ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 text-left">
          
          {/* COLUMN 1: BRAND IDENTITY OVERLAY */}
          <div className="lg:col-span-4 space-y-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="relative flex items-center bg-white p-2 border border-neutral-800 rounded-none max-w-[200px]">
              <Image
                src="/acelogo.png" 
                alt="Authorized Partner Badge"
                width={120}
                height={40}
                className="h-8 w-auto object-contain brightness-100"
              />
              <div className="ml-3 pl-3 border-l border-neutral-300 flex flex-col justify-center">
                <span className="text-[9px] font-bold text-neutral-900 tracking-wider uppercase leading-none">Authorised</span>
                <span className="text-[8px] font-medium text-neutral-600 tracking-widest uppercase mt-0.5 leading-none">Channel Partner</span>
              </div>
            </div>
            <p className="text-neutral-500 font-light leading-relaxed text-[11px] max-w-sm">
              {projectData.footerDesc}
            </p>
          </div>

          {/* COLUMN 2: QUICK NAVIGATION RIBBON (FIXED TRACKING LINKS) */}
          <div className="lg:col-span-2 space-y-3 text-center sm:text-left">
            <h4 className="text-white text-[10px] font-bold uppercase tracking-widest">
              Quick Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {quickNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-brand-gold font-light transition-colors duration-200 text-[11px]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* COLUMN 3: COMPLIANCE LEGAL POLICIES */}
          <div className="lg:col-span-2 space-y-3 text-center sm:text-left">
            <h4 className="text-white text-[10px] font-bold uppercase tracking-widest">
              Legal & Policies
            </h4>
            <nav className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-brand-gold font-light transition-colors duration-200 text-[11px]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* COLUMN 4: DIRECT CONTACT SPECIFICATION DECK (FIXED CONFIG INTERFACE MAP) */}
          <div className="lg:col-span-4 space-y-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-white text-[10px] font-bold uppercase tracking-widest">
              Contact Details
            </h4>
            <div className="space-y-3 text-[11px] font-light text-neutral-400">
              
              {/* Address Row */}
              <div className="flex items-start gap-3 justify-center sm:justify-start">
                <svg className="w-4 h-4 text-brand-gold/80 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed">{projectData.contact.address}</span>
              </div>

              {/* Phone Dial Row */}
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <svg className="w-4 h-4 text-brand-gold/80 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${projectData.contact.phone}`} className="hover:text-white transition-colors">
                  {projectData.contact.phone}
                </a>
              </div>

              {/* Email Communication Row */}
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <svg className="w-4 h-4 text-brand-gold/80 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${projectData.contact.email}`} className="hover:text-white transition-colors">
                  {projectData.contact.email}
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* ================= BOTTOM ROW: COMPLIANCE METRICS & COPYRIGHTS ================= */}
        <div className="border-t border-neutral-900 pt-8 text-center space-y-4">
          
          {/* Statutory Registration Numbers */}
          <div className="flex flex-col items-center gap-1 text-[11px] tracking-wide text-neutral-500">
            <p>Agent RERA Registration No: <span className="text-neutral-300 font-mono font-medium uppercase">{projectData.agentRera}</span></p>
            <p>Project RERA Registration No: <span className="text-brand-gold font-mono font-medium">{projectData.reraNumber}</span></p>
          </div>

          {/* Copyright Layer */}
          <div className="text-[10px] tracking-widest text-neutral-600 font-medium uppercase pt-2">
            COPYRIGHT &copy; {new Date().getFullYear()} | MANAGED BY{" "}
            <span className="text-neutral-400 hover:text-white transition-colors duration-200 font-semibold cursor-pointer">
              MARGAUX TECH
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}