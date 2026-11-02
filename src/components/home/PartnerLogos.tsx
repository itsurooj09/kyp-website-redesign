"use client";

import React from "react";

interface PartnerLogoProps {
  id: string;
  className?: string;
}

export function PartnerLogo({ id, className = "h-8 w-auto" }: PartnerLogoProps) {
  switch (id) {
    case "neogames":
      return (
        <svg viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text x="0" y="26" fill="#0f172a" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="22" letterSpacing="-0.5">
            neo<tspan fill="#16a34a">games</tspan>
          </text>
          <circle cx="145" cy="14" r="4" fill="#16a34a" />
        </svg>
      );

    case "riskrecon":
      return (
        <svg viewBox="0 0 180 38" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text x="0" y="24" fill="#0f172a" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="19" letterSpacing="-0.3">
            riskrecon
          </text>
          {/* Mastercard circles */}
          <circle cx="130" cy="19" r="10" fill="#EB001B" fillOpacity="0.9" />
          <circle cx="144" cy="19" r="10" fill="#F79E1B" fillOpacity="0.9" />
          <path d="M137 12a10 10 0 0 1 0 14 10 10 0 0 1 0-14z" fill="#FF5F00" />
        </svg>
      );

    case "itemize":
      return (
        <svg viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M12 8H4v20h8" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" />
          <path d="M22 8h8v20h-8" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" />
          <text x="38" y="24" fill="#0f172a" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="20" letterSpacing="-0.5">
            itemize
          </text>
        </svg>
      );

    case "tellmoney":
    case "tell-money":
      return (
        <svg viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text x="0" y="24" fill="#0f172a" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="19" letterSpacing="-0.3">
            tell<tspan fill="#16a34a">.</tspan>money
          </text>
        </svg>
      );

    case "integrated-finance":
      return (
        <svg viewBox="0 0 200 38" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Intersecting loop icon */}
          <rect x="2" y="8" width="18" height="18" rx="4" stroke="#0284c7" strokeWidth="2.5" />
          <rect x="10" y="14" width="18" height="18" rx="4" stroke="#16a34a" strokeWidth="2.5" />
          <text x="38" y="24" fill="#0f172a" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="15" letterSpacing="-0.2">
            INTEGRATED <tspan fill="#0284c7" fontWeight="500">FINANCE</tspan>
          </text>
        </svg>
      );

    case "btobet":
      return (
        <svg viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text x="0" y="26" fill="#033653" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="23" letterSpacing="-0.8">
            BtoBet
          </text>
        </svg>
      );

    case "pariplay":
      return (
        <svg viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text x="0" y="25" fill="#0f172a" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="21" letterSpacing="-0.5">
            pari<tspan fill="#0284c7">play</tspan>
          </text>
          <path d="M125 10l12 7-12 7V10z" fill="#16a34a" />
        </svg>
      );

    default:
      return null;
  }
}

export function CredentialBadge({ id, name, desc }: { id: string; name: string; desc: string }) {
  const getIcon = () => {
    switch (id) {
      case "iso":
        return (
          <div className="w-6 h-6 rounded-md bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 font-mono font-bold text-[10px]">
            ISO
          </div>
        );
      case "ey":
        return (
          <div className="w-6 h-6 rounded-md bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 font-bold text-[10px]">
            EY
          </div>
        );
      case "bloom":
        return (
          <div className="w-6 h-6 rounded-md bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 font-bold text-[10px]">
            BL
          </div>
        );
      case "london":
        return (
          <div className="w-6 h-6 rounded-md bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-800 font-bold text-[10px]">
            LDN
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 shadow-sm font-mono">
      {getIcon()}
      <span>{desc}</span>
    </div>
  );
}
