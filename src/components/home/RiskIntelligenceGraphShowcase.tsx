"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FileText, 
  Activity, 
  CreditCard, 
  Globe, 
  Users, 
  Building2, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  Sliders, 
  Landmark,
  ArrowRight,
  Sparkles,
  Cpu
} from "lucide-react";
import { routes } from "@/lib/routes";

interface GraphPill {
  id: string;
  label: string;
  icon: React.ReactNode;
  category: "input" | "output";
  tag: string;
  activeColor: string;
}

// Official KYP Brand Palette (#000000, #66cc00, #c6f5ef, #66cc00, #033653)
const LEFT_PILLS: GraphPill[] = [
  { id: "docs", label: "Documents", icon: <FileText className="w-3.5 h-3.5" />, category: "input", tag: "KYB Intake", activeColor: "border-[#66cc00] text-white bg-[#033653] font-bold shadow-[0_0_10px_rgba(102,204,0,0.5)]" },
  { id: "tx", label: "Transactions", icon: <Activity className="w-3.5 h-3.5" />, category: "input", tag: "Telemetry", activeColor: "border-[#033653] text-white bg-[#033653] font-bold shadow-[0_0_10px_rgba(111,211,196,0.5)]" },
  { id: "payments", label: "Payments", icon: <CreditCard className="w-3.5 h-3.5" />, category: "input", tag: "Settlement", activeColor: "border-[#c6f5ef] text-white bg-[#033653] font-bold shadow-[0_0_10px_rgba(198,245,239,0.5)]" },
  { id: "line-items", label: "Line Items", icon: <Globe className="w-3.5 h-3.5" />, category: "input", tag: "WebCompli", activeColor: "border-[#033653] text-white bg-[#033653] font-bold shadow-[0_0_10px_rgba(111,211,196,0.5)]" },
  { id: "customers", label: "Customers", icon: <Users className="w-3.5 h-3.5" />, category: "input", tag: "UBO Webs", activeColor: "border-[#66cc00] text-white bg-[#033653] font-bold shadow-[0_0_10px_rgba(102,204,0,0.5)]" },
  { id: "suppliers", label: "Suppliers", icon: <Building2 className="w-3.5 h-3.5" />, category: "input", tag: "3rd Parties", activeColor: "border-[#033653] text-white bg-[#033653] font-bold shadow-[0_0_10px_rgba(111,211,196,0.5)]" },
];

const RIGHT_PILLS: GraphPill[] = [
  { id: "audit", label: "Audit Logs", icon: <ShieldCheck className="w-3.5 h-3.5" />, category: "output", tag: "SHA-256", activeColor: "border-[#66cc00] text-white bg-[#033653] font-bold shadow-[0_0_10px_rgba(102,204,0,0.5)]" },
  { id: "history", label: "History", icon: <Clock className="w-3.5 h-3.5" />, category: "output", tag: "Timeline", activeColor: "border-[#033653] text-white bg-[#033653] font-bold shadow-[0_0_10px_rgba(111,211,196,0.5)]" },
  { id: "decisions", label: "Decisions", icon: <TrendingUp className="w-3.5 h-3.5" />, category: "output", tag: "Risk Score", activeColor: "border-[#c6f5ef] text-white bg-[#033653] font-bold shadow-[0_0_10px_rgba(198,245,239,0.5)]" },
  { id: "exceptions", label: "Exceptions", icon: <AlertTriangle className="w-3.5 h-3.5" />, category: "output", tag: "Anomaly Flags", activeColor: "border-amber-400 text-amber-200 bg-amber-950/60 font-bold shadow-[0_0_10px_rgba(251,191,36,0.5)]" },
  { id: "rules", label: "Rules", icon: <Sliders className="w-3.5 h-3.5" />, category: "output", tag: "Policy Engine", activeColor: "border-[#66cc00] text-white bg-[#033653] font-bold shadow-[0_0_10px_rgba(102,204,0,0.5)]" },
  { id: "accounts", label: "Accounts", icon: <Landmark className="w-3.5 h-3.5" />, category: "output", tag: "Bank Rails", activeColor: "border-[#033653] text-white bg-[#033653] font-bold shadow-[0_0_10px_rgba(111,211,196,0.5)]" },
];

export default function RiskIntelligenceGraphShowcase() {
  const [activeLeftIndex, setActiveLeftIndex] = useState(0);
  const [activeRightIndex, setActiveRightIndex] = useState(0);
  const [isManualHover, setIsManualHover] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-looping smooth transition every 3.2 seconds
  useEffect(() => {
    if (isManualHover) return;
    const interval = setInterval(() => {
      setActiveLeftIndex((prev) => (prev + 1) % LEFT_PILLS.length);
      setActiveRightIndex((prev) => (prev + 1) % RIGHT_PILLS.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isManualHover]);

  const currentLeft = LEFT_PILLS[activeLeftIndex];
  const currentRight = RIGHT_PILLS[activeRightIndex];

  return (
    <section className="py-20 lg:py-24 bg-[#000000] text-white border-y-2 border-[#033653] relative overflow-hidden select-none">
      {/* Background ambient radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-[#033653]/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-[#66cc00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#033653] border border-[#033653] text-xs font-mono text-white font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#66cc00]" />
            <span>THE RISK INTELLIGENCE GRAPH™</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading leading-tight">
            The Intelligence Foundation for <br />
            <span className="text-[#66cc00]">Sovereign Compliance</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            KYP&apos;s proprietary Risk Intelligence Graph™ provides the context, control, and precision required to automate complex partner &amp; merchant compliance operations.
          </p>
        </div>

        {/* Outer Showcase Box with Grid Background */}
        <div className="relative rounded-3xl border-2 border-[#033653] bg-[#02131e] shadow-2xl p-6 sm:p-10 lg:p-12 overflow-hidden">
          
          {/* Concentric Ambient Radar Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
            <div className="w-[720px] h-[720px] rounded-full border border-[#033653]" />
            <div className="w-[520px] h-[520px] rounded-full border border-[#033653]" />
            <div className="w-[340px] h-[340px] rounded-full border border-[#66cc00]/30" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* MAIN CARD: The Risk Intelligence Graph (Bottom/Left - 8 Cols) */}
            <div className="lg:col-span-8 bg-[#000000]/90 backdrop-blur-md rounded-2xl border border-[#033653] shadow-xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-[#033653] pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-[#66cc00] animate-ping" />
                  <span className="text-sm font-bold text-white font-mono">
                    Financial &amp; Risk Intelligence Graph™
                  </span>
                </div>
                <span className="text-[11px] font-mono text-white bg-[#033653] px-3 py-1 rounded-full border border-[#033653] font-bold">
                  1,100+ Live Signals
                </span>
              </div>

              {/* The 3-Column Visual Layout (Left Pills - Center Orb - Right Pills) */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                
                {/* Left Column: Input Data Categories */}
                <div className="sm:col-span-3 space-y-2.5">
                  {LEFT_PILLS.map((pill, idx) => {
                    const isActive = activeLeftIndex === idx;
                    return (
                      <button
                        key={pill.id}
                        type="button"
                        onMouseEnter={() => {
                          setIsManualHover(true);
                          setActiveLeftIndex(idx);
                        }}
                        onMouseLeave={() => setIsManualHover(false)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs transition-all duration-300 text-left cursor-pointer ${
                          isActive
                            ? `${pill.activeColor} scale-102`
                            : "bg-[#033653]/30 border-[#033653] text-slate-300 hover:text-white hover:border-[#033653] hover:bg-[#033653]/50"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={isActive ? "text-[#66cc00]" : "text-slate-400"}>
                            {pill.icon}
                          </span>
                          <span>{pill.label}</span>
                        </div>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#66cc00] animate-pulse" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Center Column: 3D Orbital Network Sphere */}
                <div className="sm:col-span-6 relative flex flex-col items-center justify-center min-h-[340px]">
                  
                  {/* Concentric Glowing Gradient Backdrops */}
                  <div className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-[#66cc00]/20 via-[#66cc00]/20 to-[#033653]/40 blur-2xl pointer-events-none" />
                  
                  {/* Circular Radar Orbit Plate */}
                  <div className="relative w-72 h-72 rounded-full border border-[#033653] bg-[#000000] shadow-inner flex items-center justify-center">
                    
                    {/* Outer Rotating Ring */}
                    <svg className="absolute inset-0 w-full h-full animate-[spin_24s_linear_infinite]" viewBox="0 0 288 288">
                      <circle cx="144" cy="144" r="136" fill="none" stroke="#033653" strokeWidth="1.5" strokeDasharray="4 6" />
                      <circle cx="144" cy="8" r="4" fill="#66cc00" />
                      <circle cx="280" cy="144" r="3.5" fill="#66cc00" />
                      <circle cx="144" cy="280" r="3.5" fill="#c6f5ef" />
                      <circle cx="8" cy="144" r="3.5" fill="#66cc00" />
                    </svg>

                    {/* Middle Reverse Rotating Ring */}
                    <svg className="absolute inset-4 w-[256px] h-[256px] animate-[spin_18s_linear_infinite_reverse]" viewBox="0 0 256 256">
                      <circle cx="128" cy="128" r="118" fill="none" stroke="#66cc00" strokeWidth="1" strokeDasharray="8 8" opacity="0.4" />
                      <circle cx="128" cy="10" r="3" fill="#66cc00" />
                      <circle cx="246" cy="128" r="3.5" fill="#66cc00" />
                    </svg>

                    {/* Inner Network Graph Web */}
                    <svg className="w-56 h-56 relative z-10" viewBox="0 0 200 200">
                      <defs>
                        <radialGradient id="kypNodeGlowDark" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#66cc00" stopOpacity="0.9" />
                          <stop offset="70%" stopColor="#66cc00" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#033653" stopOpacity="0.2" />
                        </radialGradient>
                      </defs>

                      {/* Network Link Lines */}
                      <g stroke="#033653" strokeWidth="1.5" opacity="0.7">
                        <line x1="100" y1="100" x2="50" y2="60" stroke="#66cc00" strokeWidth="1.5" />
                        <line x1="100" y1="100" x2="150" y2="60" stroke="#66cc00" strokeWidth="1.5" />
                        <line x1="100" y1="100" x2="160" y2="130" stroke="#033653" strokeWidth="1.5" />
                        <line x1="100" y1="100" x2="110" y2="160" stroke="#66cc00" strokeWidth="1.5" />
                        <line x1="100" y1="100" x2="40" y2="140" stroke="#66cc00" strokeWidth="1.5" />
                        
                        {/* Cross ties */}
                        <line x1="50" y1="60" x2="150" y2="60" strokeDasharray="3 3" />
                        <line x1="150" y1="60" x2="160" y2="130" strokeDasharray="3 3" />
                        <line x1="160" y1="130" x2="110" y2="160" strokeDasharray="3 3" />
                        <line x1="110" y1="160" x2="40" y2="140" strokeDasharray="3 3" />
                        <line x1="40" y1="140" x2="50" y2="60" strokeDasharray="3 3" />
                      </g>

                      {/* Moving Energy Laser Photons */}
                      {isMounted && (
                        <>
                          <circle r="2.5" fill="#66cc00">
                            <animateMotion path="M 100 100 L 50 60 L 150 60 L 100 100" dur="2.8s" repeatCount="indefinite" />
                          </circle>
                          <circle r="2.5" fill="#66cc00">
                            <animateMotion path="M 100 100 L 160 130 L 110 160 L 100 100" dur="3.4s" repeatCount="indefinite" />
                          </circle>
                          <circle r="2.5" fill="#c6f5ef">
                            <animateMotion path="M 100 100 L 40 140 L 50 60 L 100 100" dur="4s" repeatCount="indefinite" />
                          </circle>
                        </>
                      )}

                      {/* Surrounding Nodes in Brand Palette */}
                      <circle cx="50" cy="60" r="9" fill="#66cc00" className="animate-pulse" />
                      <circle cx="50" cy="60" r="4" fill="#000000" />

                      <circle cx="150" cy="60" r="8" fill="#66cc00" />
                      <circle cx="150" cy="60" r="3.5" fill="#000000" />

                      <circle cx="160" cy="130" r="9" fill="#c6f5ef" />
                      <circle cx="160" cy="130" r="4" fill="#000000" />

                      <circle cx="110" cy="160" r="7" fill="#66cc00" />
                      <circle cx="110" cy="160" r="3" fill="#000000" />

                      <circle cx="40" cy="140" r="8" fill="#66cc00" />
                      <circle cx="40" cy="140" r="3.5" fill="#000000" />

                      {/* Center Hub Node */}
                      <circle cx="100" cy="100" r="16" fill="url(#kypNodeGlowDark)" />
                      <circle cx="100" cy="100" r="9" fill="#000000" />
                      <circle cx="100" cy="100" r="4" fill="#66cc00" className="animate-ping" />
                    </svg>

                    {/* Active State Pulse Badge */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#000000] border border-[#033653] shadow-md text-[10px] font-mono font-bold text-white flex items-center gap-1.5 whitespace-nowrap">
                      <span className="w-2 h-2 rounded-full bg-[#66cc00] animate-pulse" />
                      <span>Active Flow: {currentLeft.label} &rarr; {currentRight.label}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Output Intelligence Categories */}
                <div className="sm:col-span-3 space-y-2.5">
                  {RIGHT_PILLS.map((pill, idx) => {
                    const isActive = activeRightIndex === idx;
                    return (
                      <button
                        key={pill.id}
                        type="button"
                        onMouseEnter={() => {
                          setIsManualHover(true);
                          setActiveRightIndex(idx);
                        }}
                        onMouseLeave={() => setIsManualHover(false)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs transition-all duration-300 text-left cursor-pointer ${
                          isActive
                            ? `${pill.activeColor} scale-102`
                            : "bg-[#033653]/30 border-[#033653] text-slate-300 hover:text-white hover:border-[#033653] hover:bg-[#033653]/50"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={isActive ? "text-[#66cc00]" : "text-slate-400"}>
                            {pill.icon}
                          </span>
                          <span>{pill.label}</span>
                        </div>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#66cc00] animate-pulse" />
                        )}
                      </button>
                    );
                  })}
                </div>

              </div>

              {/* Bottom Quick Context Bar */}
              <div className="pt-4 border-t border-[#033653] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#66cc00]" />
                  <span>Sub-Second Entity Resolution &bull; Zero Blind Spots</span>
                </div>
                <div>
                  Active Ingestion: <span className="text-[#66cc00] font-bold">{currentLeft.tag}</span> | Output: <span className="text-white font-bold">{currentRight.tag}</span>
                </div>
              </div>
            </div>

            {/* FLOATING TOP/RIGHT CARD: The Platform Console */}
            <div className="lg:col-span-4 bg-[#000000] text-white rounded-2xl border-2 border-[#033653] shadow-2xl p-6 space-y-5 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-64 h-64 bg-[#66cc00]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-[#033653] pb-3 relative z-10">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#66cc00]" />
                  <span className="text-xs font-bold font-mono tracking-wider text-white">
                    KYP PLATFORM SENTINEL
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#000000] bg-[#66cc00] px-2.5 py-0.5 rounded-full font-bold">
                  Sovereign AI
                </span>
              </div>

              {/* Layered Architectural Stack */}
              <div className="space-y-3 relative z-10 text-xs font-mono">
                
                {/* Layer 1: Real-Time Risk Intelligence */}
                <div className="p-3 rounded-xl bg-[#033653]/40 border border-[#033653] space-y-1">
                  <div className="flex items-center justify-between text-white font-bold">
                    <span>Real-Time Risk &amp; Reporting</span>
                    <span className="text-[#66cc00] text-[10px]">&lt;15ms</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                    <span>&bull; Executive Insight</span>
                    <span>&bull; Merchant Exposure</span>
                    <span>&bull; VIRP / BRAM</span>
                  </div>
                </div>

                {/* Layer 2: Agentic Operations */}
                <div className="p-3 rounded-xl bg-[#033653]/40 border border-[#033653] space-y-1">
                  <div className="flex items-center justify-between text-white font-bold">
                    <span>Agentic Compliance Operations</span>
                    <span className="text-[#66cc00] text-[10px]">Autonomous</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                    <span>&bull; Document Ingestion</span>
                    <span>&bull; PEP Cross-Check</span>
                    <span>&bull; EDD Dossier</span>
                  </div>
                </div>

                {/* Layer 3: Shared Capabilities */}
                <div className="p-3 rounded-xl bg-[#033653]/40 border border-[#033653] space-y-1">
                  <div className="flex items-center justify-between text-white font-bold">
                    <span>Shared Platform Capabilities</span>
                    <span className="text-white text-[10px]">24/7 Watch</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                    <span>&bull; Identification &amp; Validation</span>
                    <span>&bull; Adverse Media Radar</span>
                  </div>
                </div>

                {/* Layer 4: Transaction & Registry Telemetry */}
                <div className="p-3 rounded-xl bg-[#033653]/40 border border-[#033653] space-y-1">
                  <div className="flex items-center justify-between text-white font-bold">
                    <span>Transaction &amp; Registry Data</span>
                    <span className="text-[#66cc00] text-[10px]">180+ APIs</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                    <span>&bull; Companies Houses</span>
                    <span>&bull; Scheme Watchlists</span>
                  </div>
                </div>

              </div>

              {/* CTA Link in Brand Lime (#66cc00) */}
              <div className="pt-2 relative z-10">
                <Link
                  href={routes.platform}
                  className="w-full py-3 px-4 rounded-full bg-[#66cc00] hover:bg-[#55b300] text-[#000000] font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>Explore Architecture Specification</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
