"use client";

import React from "react";
import KYPLottie from "@/components/lottie/KYPLottie";

interface PartnerLogoProps {
  id: string;
  className?: string;
}

export function PartnerLogo({ id, className = "h-8 w-auto" }: PartnerLogoProps) {
  switch (id) {
    case "neogames":
      return (
        <svg viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text x="0" y="26" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="22" letterSpacing="-0.5">
            neo<tspan fill="#66cc00">games</tspan>
          </text>
          <circle cx="145" cy="14" r="4" fill="#66cc00" />
        </svg>
      );

    case "riskrecon":
      return (
        <svg viewBox="0 0 180 38" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text x="0" y="24" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="19" letterSpacing="-0.3">
            riskrecon
          </text>
          <circle cx="130" cy="19" r="10" fill="#EB001B" fillOpacity="0.9" />
          <circle cx="144" cy="19" r="10" fill="#F79E1B" fillOpacity="0.9" />
          <path d="M137 12a10 10 0 0 1 0 14 10 10 0 0 1 0-14z" fill="#FF5F00" />
        </svg>
      );

    case "itemize":
      return (
        <svg viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M12 8H4v20h8" stroke="#033653" strokeWidth="3" strokeLinecap="round" />
          <path d="M22 8h8v20h-8" stroke="#033653" strokeWidth="3" strokeLinecap="round" />
          <text x="38" y="24" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="20" letterSpacing="-0.5">
            itemize
          </text>
        </svg>
      );

    case "tellmoney":
    case "tell-money":
      return (
        <svg viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <text x="0" y="24" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="19" letterSpacing="-0.3">
            tell<tspan fill="#66cc00">.</tspan>money
          </text>
        </svg>
      );

    case "integrated-finance":
      return (
        <svg viewBox="0 0 200 38" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="2" y="8" width="18" height="18" rx="4" stroke="#033653" strokeWidth="2.5" />
          <rect x="10" y="14" width="18" height="18" rx="4" stroke="#66cc00" strokeWidth="2.5" />
          <text x="38" y="24" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="15" letterSpacing="-0.2">
            INTEGRATED <tspan fill="#033653" fontWeight="500">FINANCE</tspan>
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
          <text x="0" y="25" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="21" letterSpacing="-0.5">
            pari<tspan fill="#033653">play</tspan>
          </text>
          <path d="M125 10l12 7-12 7V10z" fill="#66cc00" />
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
          <div className="w-6 h-6 rounded-md bg-kyp-mint/60 border border-kyp-teal/40 flex items-center justify-center text-kyp-navy font-mono font-bold text-[10px]">
            ISO
          </div>
        );
      case "ey":
        return (
          <div className="w-6 h-6 rounded-md bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-900 font-bold text-[10px]">
            EY
          </div>
        );
      case "bloom":
        return (
          <div className="w-6 h-6 rounded-md bg-kyp-mint/60 border border-kyp-teal/40 flex items-center justify-center text-kyp-navy font-bold text-[10px]">
            BL
          </div>
        );
      case "london":
        return (
          <div className="w-6 h-6 rounded-md bg-sky-50 border border-sky-300 flex items-center justify-center text-sky-900 font-bold text-[10px]">
            LDN
          </div>
        );
      case "fca":
        return (
          <div className="w-6 h-6 rounded-md bg-emerald-50 border border-kyp-lime/60 flex items-center justify-center text-kyp-navy font-bold text-[10px]">
            FCA
          </div>
        );
      case "pci":
        return (
          <div className="w-6 h-6 rounded-md bg-blue-50 border border-blue-300 flex items-center justify-center text-blue-900 font-bold text-[10px]">
            PCI
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 hover:border-kyp-teal text-xs text-slate-700 shadow-xs hover:shadow-sm font-mono whitespace-nowrap transition-all">
      {getIcon()}
      <span className="font-medium">{desc}</span>
    </div>
  );
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

const CREDENTIALS = [
  { id: "iso", name: "ISO 27001", desc: "ISO 27001 Information Security Certified" },
  { id: "ey", name: "EY", desc: "EY Growth FinTech Programme Alumni" },
  { id: "bloom", name: "Bloom", desc: "Bloom Accredited Supplier" },
  { id: "london", name: "London", desc: "Mayor's International Programme Selected" },
  { id: "fca", name: "FCA", desc: "FCA Defensible Risk Infrastructure" },
  { id: "pci", name: "PCI DSS", desc: "PCI-DSS 4.0 Compliant Architecture" },
];

export function PartnerCarouselMarquee() {
  return (
    <section className="py-14 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-xs mb-3">
          <span className="w-4 h-4 inline-block">
            <KYPLottie type="securityShield" className="w-4 h-4" />
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-kyp-lime animate-pulse" />
          <span className="text-[11px] font-mono tracking-widest text-slate-600 uppercase font-bold">
            TRUSTED BY REGULATED LEADERS &bull; INDUSTRY VERIFIED CREDIBILITY
          </span>
        </div>
      </div>

      {/* Row 1: Partner Logos Auto-Moving Marquee */}
      <div
        className="relative w-full overflow-hidden mb-6"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="animate-marquee flex items-center gap-5">
          {/* Duplicate list x2 for seamless continuous infinite marquee */}
          {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((p, idx) => (
            <div
              key={`${p.id}-${idx}`}
              className="h-18 min-w-[190px] px-6 rounded-2xl bg-white border border-slate-200/90 hover:border-kyp-teal hover:shadow-md flex items-center justify-center transition-all group shrink-0"
            >
              <PartnerLogo id={p.id} className="h-6 w-auto opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Credential & Accreditation Badges Auto-Moving Reverse Marquee */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="animate-marquee-reverse flex items-center gap-4">
          {[...CREDENTIALS, ...CREDENTIALS, ...CREDENTIALS].map((c, idx) => (
            <div key={`${c.id}-${idx}`} className="shrink-0">
              <CredentialBadge id={c.id} name={c.name} desc={c.desc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
