"use client";

import React from "react";
import KYPLottie from "@/components/lottie/KYPLottie";

interface PartnerLogoProps {
  id: string;
  className?: string;
}

export function PartnerLogo({ id, className = "h-10 sm:h-11 w-auto" }: PartnerLogoProps) {
  switch (id) {
    case "neogames":
      return (
        <svg viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text x="0" y="28" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="26" letterSpacing="-0.8">
            neo<tspan fill="#66cc00">games</tspan>
          </text>
          <circle cx="152" cy="15" r="5" fill="#66cc00" />
        </svg>
      );

    case "riskrecon":
      return (
        <svg viewBox="0 0 200 42" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text x="0" y="27" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="23" letterSpacing="-0.5">
            riskrecon
          </text>
          <circle cx="145" cy="21" r="12" fill="#EB001B" fillOpacity="0.95" />
          <circle cx="162" cy="21" r="12" fill="#F79E1B" fillOpacity="0.95" />
          <path d="M153.5 12.8a12 12 0 0 1 0 16.4 12 12 0 0 1 0-16.4z" fill="#FF5F00" />
        </svg>
      );

    case "itemize":
      return (
        <svg viewBox="0 0 175 42" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M14 8H5v24h9" stroke="#033653" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M26 8h9v24h-9" stroke="#033653" strokeWidth="3.5" strokeLinecap="round" />
          <text x="44" y="28" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="24" letterSpacing="-0.6">
            itemize
          </text>
        </svg>
      );

    case "tellmoney":
    case "tell-money":
      return (
        <svg viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text x="0" y="28" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="24" letterSpacing="-0.5">
            tell<tspan fill="#66cc00">.</tspan>money
          </text>
        </svg>
      );

    case "integrated-finance":
      return (
        <svg viewBox="0 0 220 42" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="2" y="8" width="20" height="20" rx="5" stroke="#033653" strokeWidth="3" />
          <rect x="12" y="15" width="20" height="20" rx="5" stroke="#66cc00" strokeWidth="3" />
          <text x="42" y="27" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="17" letterSpacing="-0.3">
            INTEGRATED <tspan fill="#033653" fontWeight="600">FINANCE</tspan>
          </text>
        </svg>
      );

    case "btobet":
      return (
        <svg viewBox="0 0 170 42" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text x="0" y="30" fill="#033653" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="27" letterSpacing="-1">
            BtoBet
          </text>
        </svg>
      );

    case "pariplay":
      return (
        <svg viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text x="0" y="29" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="25" letterSpacing="-0.6">
            pari<tspan fill="#033653">play</tspan>
          </text>
          <path d="M136 12l14 8-14 8V12z" fill="#66cc00" />
        </svg>
      );

    default:
      return null;
  }
}

export function CredentialBadge({ id, name, desc }: { id: string; name: string; desc: string }) {
  return null;
}

const PARTNERS = [
  { id: "neogames", name: "NeoGames" },
  { id: "riskrecon", name: "RiskRecon (Mastercard)" },
  { id: "itemize", name: "Itemize" },
  { id: "tellmoney", name: "tell.money" },
  { id: "integrated-finance", name: "Integrated Finance" },
  { id: "btobet", name: "BtoBet" },
  { id: "pariplay", name: "Pariplay" },
];

export function PartnerCarouselMarquee() {
  return (
    <section className="py-14 sm:py-16 bg-white border-b border-slate-200/80 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-xs mb-2">
          <span className="w-4 h-4 inline-block">
            <KYPLottie type="securityShield" className="w-4 h-4" />
          </span>
          <span className="w-2 h-2 rounded-full bg-kyp-lime animate-pulse" />
          <span className="text-xs font-mono tracking-wider text-slate-700 uppercase font-bold">
            TRUSTED BY REGULATED LEADERS &bull; INDUSTRY VERIFIED CREDIBILITY
          </span>
        </div>
      </div>

      {/* Prominent Partner Logos Auto-Moving Marquee (Large, Clear, High-Visibility) */}
      <div
        className="relative w-full overflow-hidden py-2"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="animate-marquee flex items-center gap-6">
          {/* Continuous Infinite Marquee with large prominent logo cards */}
          {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((p, idx) => (
            <div
              key={`${p.id}-${idx}`}
              className="h-22 sm:h-24 min-w-[220px] sm:min-w-[260px] px-8 rounded-2xl bg-white border-2 border-slate-200/80 hover:border-kyp-teal shadow-xs hover:shadow-lg flex items-center justify-center transition-all group shrink-0"
            >
              <PartnerLogo
                id={p.id}
                className="h-9 sm:h-11 w-auto opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
