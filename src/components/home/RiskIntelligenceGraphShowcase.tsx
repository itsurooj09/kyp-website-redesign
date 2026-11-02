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
  Layers,
  CheckCircle2,
  Lock,
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
  glowColor: string;
}

const LEFT_PILLS: GraphPill[] = [
  { id: "docs", label: "Documents", icon: <FileText className="w-3.5 h-3.5" />, category: "input", tag: "KYB Intake", activeColor: "border-emerald-500 text-emerald-800 bg-emerald-50", glowColor: "#10b981" },
  { id: "tx", label: "Transactions", icon: <Activity className="w-3.5 h-3.5" />, category: "input", tag: "Telemetry", activeColor: "border-sky-500 text-sky-800 bg-sky-50", glowColor: "#0ea5e9" },
  { id: "payments", label: "Payments", icon: <CreditCard className="w-3.5 h-3.5" />, category: "input", tag: "Settlement", activeColor: "border-teal-500 text-teal-800 bg-teal-50", glowColor: "#14b8a6" },
  { id: "line-items", label: "Line Items", icon: <Globe className="w-3.5 h-3.5" />, category: "input", tag: "WebCompli", activeColor: "border-indigo-500 text-indigo-800 bg-indigo-50", glowColor: "#6366f1" },
  { id: "customers", label: "Customers", icon: <Users className="w-3.5 h-3.5" />, category: "input", tag: "UBO Webs", activeColor: "border-purple-500 text-purple-800 bg-purple-50", glowColor: "#8b5cf6" },
  { id: "suppliers", label: "Suppliers", icon: <Building2 className="w-3.5 h-3.5" />, category: "input", tag: "3rd Parties", activeColor: "border-blue-500 text-blue-800 bg-blue-50", glowColor: "#3b82f6" },
];

const RIGHT_PILLS: GraphPill[] = [
  { id: "audit", label: "Audit Logs", icon: <ShieldCheck className="w-3.5 h-3.5" />, category: "output", tag: "SHA-256", activeColor: "border-emerald-500 text-emerald-800 bg-emerald-50", glowColor: "#10b981" },
  { id: "history", label: "History", icon: <Clock className="w-3.5 h-3.5" />, category: "output", tag: "Timeline", activeColor: "border-sky-500 text-sky-800 bg-sky-50", glowColor: "#0ea5e9" },
  { id: "decisions", label: "Decisions", icon: <TrendingUp className="w-3.5 h-3.5" />, category: "output", tag: "Risk Score", activeColor: "border-teal-500 text-teal-800 bg-teal-50", glowColor: "#14b8a6" },
  { id: "exceptions", label: "Exceptions", icon: <AlertTriangle className="w-3.5 h-3.5" />, category: "output", tag: "Anomaly Flags", activeColor: "border-amber-500 text-amber-800 bg-amber-50", glowColor: "#f59e0b" },
  { id: "rules", label: "Rules", icon: <Sliders className="w-3.5 h-3.5" />, category: "output", tag: "Policy Engine", activeColor: "border-purple-500 text-purple-800 bg-purple-50", glowColor: "#8b5cf6" },
  { id: "accounts", label: "Accounts", icon: <Landmark className="w-3.5 h-3.5" />, category: "output", tag: "Bank Rails", activeColor: "border-blue-500 text-blue-800 bg-blue-50", glowColor: "#3b82f6" },
];

export default function RiskIntelligenceGraphShowcase() {
  const [activeLeftIndex, setActiveLeftIndex] = useState(0);
  const [activeRightIndex, setActiveRightIndex] = useState(0);
  const [isManualHover, setIsManualHover] = useState(false);

  // Auto-looping smooth transition every 3 seconds (as requested: "loop mn chal rhi ho")
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
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200 relative overflow-hidden">
      {/* Background soft ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header (Matching itemize2026.com video 1 style) */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>THE RISK INTELLIGENCE GRAPH™</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 font-heading leading-tight">
            The Intelligence Foundation for Sovereign Compliance
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            KYP&apos;s proprietary Risk Intelligence Graph™ provides the context, control, and precision required to automate complex partner &amp; merchant compliance operations.
          </p>
        </div>

        {/* Outer Showcase Box with Grid Background (Video 1 Architecture) */}
        <div className="relative rounded-3xl border border-slate-200/90 bg-white shadow-xl p-6 sm:p-10 lg:p-12 overflow-hidden kyp-grid-pattern">
          
          {/* Subtle Radar Ripple Rings behind central container */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            <div className="w-[720px] h-[720px] rounded-full border border-slate-200/80 animate-pulse-slow" />
            <div className="w-[520px] h-[520px] rounded-full border border-slate-200" />
            <div className="w-[340px] h-[340px] rounded-full border border-slate-200" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* MAIN CARD: The Risk Intelligence Graph (Bottom/Left - 8 Cols) */}
            <div className="lg:col-span-8 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-sm font-bold text-slate-900 font-mono">
                    Financial &amp; Risk Intelligence Graph™
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-bold">
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
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-medium transition-all duration-300 text-left cursor-pointer ${
                          isActive
                            ? `${pill.activeColor} shadow-sm font-bold scale-102`
                            : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={isActive ? "text-emerald-700" : "text-slate-400"}>
                            {pill.icon}
                          </span>
                          <span>{pill.label}</span>
                        </div>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Center Column: 3D Orbital Network Sphere (Video 1 Exact Motion) */}
                <div className="sm:col-span-6 relative flex flex-col items-center justify-center min-h-[340px]">
                  
                  {/* Concentric Glowing Gradient Backdrops */}
                  <div className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-emerald-100/60 via-sky-100/40 to-purple-100/50 blur-2xl pointer-events-none" />
                  
                  {/* Circular Radar Orbit Plate */}
                  <div className="relative w-72 h-72 rounded-full border border-slate-200/90 bg-slate-50/60 shadow-inner flex items-center justify-center">
                    
                    {/* Outer Rotating Ring */}
                    <svg className="absolute inset-0 w-full h-full animate-[spin_24s_linear_infinite]" viewBox="0 0 288 288">
                      <circle cx="144" cy="144" r="136" fill="none" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
                      <circle cx="144" cy="8" r="4" fill="#10b981" />
                      <circle cx="280" cy="144" r="3.5" fill="#0ea5e9" />
                      <circle cx="144" cy="280" r="3" fill="#8b5cf6" />
                      <circle cx="8" cy="144" r="3.5" fill="#14b8a6" />
                    </svg>

                    {/* Middle Reverse Rotating Ring */}
                    <svg className="absolute inset-4 w-[256px] h-[256px] animate-[spin_18s_linear_infinite_reverse]" viewBox="0 0 256 256">
                      <circle cx="128" cy="128" r="118" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="8 8" opacity="0.4" />
                      <circle cx="128" cy="10" r="3" fill="#8b5cf6" />
                      <circle cx="246" cy="128" r="3.5" fill="#10b981" />
                    </svg>

                    {/* Inner Network Graph Web with Animated SVG Laser Lines */}
                    <svg className="w-56 h-56 relative z-10" viewBox="0 0 200 200">
                      <defs>
                        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#66cc00" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="#033653" stopOpacity="0.2" />
                        </radialGradient>
                        <linearGradient id="laserBeam" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="50%" stopColor="#0ea5e9" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>

                      {/* Network Link Lines */}
                      <g stroke="#94a3b8" strokeWidth="1.2" opacity="0.4">
                        <line x1="100" y1="100" x2="50" y2="60" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.6" />
                        <line x1="100" y1="100" x2="150" y2="60" stroke="#10b981" strokeWidth="1.5" opacity="0.6" />
                        <line x1="100" y1="100" x2="160" y2="130" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.6" />
                        <line x1="100" y1="100" x2="110" y2="160" stroke="#14b8a6" strokeWidth="1.5" opacity="0.6" />
                        <line x1="100" y1="100" x2="40" y2="140" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" />
                        
                        {/* Cross ties */}
                        <line x1="50" y1="60" x2="150" y2="60" strokeDasharray="3 3" />
                        <line x1="150" y1="60" x2="160" y2="130" strokeDasharray="3 3" />
                        <line x1="160" y1="130" x2="110" y2="160" strokeDasharray="3 3" />
                        <line x1="110" y1="160" x2="40" y2="140" strokeDasharray="3 3" />
                        <line x1="40" y1="140" x2="50" y2="60" strokeDasharray="3 3" />
                      </g>

                      {/* Moving Energy Laser Photons along links */}
                      <circle r="2.5" fill="#10b981">
                        <animateMotion path="M 100 100 L 50 60 L 150 60 L 100 100" dur="3s" repeatCount="indefinite" />
                      </circle>
                      <circle r="2.5" fill="#0ea5e9">
                        <animateMotion path="M 100 100 L 160 130 L 110 160 L 100 100" dur="3.5s" repeatCount="indefinite" />
                      </circle>
                      <circle r="2.5" fill="#8b5cf6">
                        <animateMotion path="M 100 100 L 40 140 L 50 60 L 100 100" dur="4s" repeatCount="indefinite" />
                      </circle>

                      {/* Surrounding Nodes */}
                      <circle cx="50" cy="60" r="9" fill="#0ea5e9" className="animate-pulse" />
                      <circle cx="50" cy="60" r="4" fill="#ffffff" />

                      <circle cx="150" cy="60" r="8" fill="#10b981" />
                      <circle cx="150" cy="60" r="3.5" fill="#ffffff" />

                      <circle cx="160" cy="130" r="9" fill="#8b5cf6" />
                      <circle cx="160" cy="130" r="4" fill="#ffffff" />

                      <circle cx="110" cy="160" r="7" fill="#14b8a6" />
                      <circle cx="110" cy="160" r="3" fill="#ffffff" />

                      <circle cx="40" cy="140" r="8" fill="#3b82f6" />
                      <circle cx="40" cy="140" r="3.5" fill="#ffffff" />

                      {/* Center Hub Node */}
                      <circle cx="100" cy="100" r="16" fill="url(#nodeGlow)" />
                      <circle cx="100" cy="100" r="9" fill="#0f172a" />
                      <circle cx="100" cy="100" r="4" fill="#10b981" className="animate-ping" />
                    </svg>

                    {/* Active State Pulse Badge */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-md text-[10px] font-mono font-bold text-slate-800 flex items-center gap-1.5 whitespace-nowrap">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Mapping: {currentLeft.label} &rarr; {currentRight.label}</span>
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
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-medium transition-all duration-300 text-left cursor-pointer ${
                          isActive
                            ? `${pill.activeColor} shadow-sm font-bold scale-102`
                            : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={isActive ? "text-emerald-700" : "text-slate-400"}>
                            {pill.icon}
                          </span>
                          <span>{pill.label}</span>
                        </div>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        )}
                      </button>
                    );
                  })}
                </div>

              </div>

              {/* Bottom Quick Context Bar */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Sub-Second Entity Resolution &bull; Zero Blind Spots</span>
                </div>
                <div className="text-slate-700 font-semibold">
                  Active Ingestion: <span className="text-emerald-600 font-bold">{currentLeft.tag}</span> | Output: <span className="text-purple-600 font-bold">{currentRight.tag}</span>
                </div>
              </div>
            </div>

            {/* FLOATING TOP/RIGHT CARD: The Platform Console (Video 1 Architecture) */}
            <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl border border-slate-800 shadow-2xl p-6 space-y-5 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-3 relative z-10">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold font-mono tracking-wider text-slate-200">
                    KYP PLATFORM SENTINEL
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                  Sovereign AI
                </span>
              </div>

              {/* Layered Architectural Stack (Matching Video 1) */}
              <div className="space-y-3 relative z-10 text-xs font-mono">
                
                {/* Layer 1: Real-Time Risk Intelligence */}
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                  <div className="flex items-center justify-between text-slate-300 font-bold">
                    <span>Real-Time Risk &amp; Reporting</span>
                    <span className="text-emerald-400 text-[10px]">&lt;15ms</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <span>&bull; Executive Insight</span>
                    <span>&bull; Merchant Exposure</span>
                    <span>&bull; VIRP / BRAM</span>
                  </div>
                </div>

                {/* Layer 2: Agentic Operations */}
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                  <div className="flex items-center justify-between text-slate-300 font-bold">
                    <span>Agentic Compliance Operations</span>
                    <span className="text-sky-400 text-[10px]">Autonomous</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <span>&bull; Document Ingestion</span>
                    <span>&bull; PEP Cross-Check</span>
                    <span>&bull; EDD Dossier</span>
                  </div>
                </div>

                {/* Layer 3: Shared Capabilities */}
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                  <div className="flex items-center justify-between text-slate-300 font-bold">
                    <span>Shared Platform Capabilities</span>
                    <span className="text-purple-400 text-[10px]">24/7 Watch</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <span>&bull; Identification &amp; Validation</span>
                    <span>&bull; Adverse Media Radar</span>
                  </div>
                </div>

                {/* Layer 4: Transaction & Registry Telemetry */}
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                  <div className="flex items-center justify-between text-slate-300 font-bold">
                    <span>Transaction &amp; Registry Data</span>
                    <span className="text-teal-400 text-[10px]">180+ APIs</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <span>&bull; Companies Houses</span>
                    <span>&bull; Scheme Watchlists</span>
                  </div>
                </div>

              </div>

              {/* CTA Link */}
              <div className="pt-2 relative z-10">
                <Link
                  href={routes.platform}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
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
