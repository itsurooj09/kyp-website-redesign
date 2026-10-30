"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, CheckCircle2, Shield, FileText, Network, Search, FileCheck, Sparkles, ExternalLink } from "lucide-react";
import { routes } from "@/lib/routes";

interface SolutionCard {
  id: string;
  accentColor: string; // Tailwind border or hex
  accentHex: string;
  title: string;
  tagline: string;
  statusText: string;
  statusVariant: "cyan" | "lime" | "purple" | "blue" | "mint";
  href: string;
  renderVisual: (isHovered: boolean) => React.ReactNode;
}

const SOLUTIONS: SolutionCard[] = [
  {
    id: "onboarding-mailroom",
    accentColor: "border-t-[#6fd3c4]",
    accentHex: "#6fd3c4",
    title: "AI Onboarding & Digital Intake",
    tagline: "OCR document validation & registry cross-check",
    statusText: "Pre-Screened",
    statusVariant: "cyan",
    href: routes.onboarding,
    renderVisual: (isHovered) => (
      <div className="relative w-full h-32 flex items-center justify-center">
        {/* Background tilted card */}
        <div className="absolute left-3 top-3 w-28 h-20 bg-kyp-navy/80 rounded-xl border border-kyp-teal/20 -rotate-6 transition-transform duration-300 group-hover:-rotate-12 flex flex-col justify-between p-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-kyp-teal" />
            <span className="text-[8px] font-mono text-gray-400">REG-8921</span>
          </div>
          <div className="space-y-1">
            <div className="w-16 h-1.5 bg-gray-700 rounded" />
            <div className="w-10 h-1.5 bg-gray-700/60 rounded" />
          </div>
        </div>

        {/* Foreground prominent card */}
        <div className="relative z-10 w-36 bg-black/90 rounded-xl border border-kyp-teal/40 p-2.5 shadow-xl transition-transform duration-300 group-hover:scale-105">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-kyp-lime/20 flex items-center justify-center text-kyp-lime">
                <Check className="w-2.5 h-2.5" />
              </div>
              <span className="text-[9px] font-bold text-white font-mono">Check Detail</span>
            </div>
            <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-kyp-navy text-kyp-teal border border-kyp-teal/30">
              Batch 204
            </span>
          </div>
          <div className="space-y-1">
            <div className="w-24 h-1.5 bg-gray-700 rounded" />
            <div className="w-16 h-1.5 bg-gray-800 rounded" />
          </div>
          <div className="mt-2 pt-1.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono">
            <span className="text-gray-400">Match Rate</span>
            <span className="text-kyp-lime font-bold">100%</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "volumetric-remittance",
    accentColor: "border-t-[#66cc00]",
    accentHex: "#66cc00",
    title: "Scheme & Volumetric Automation",
    tagline: "Real-time BRAM & VIRP compliance pipeline",
    statusText: "Reconciled",
    statusVariant: "lime",
    href: routes.platform,
    renderVisual: (isHovered) => (
      <div className="relative w-full h-32 flex items-center justify-center">
        {/* Diagram Flow Card */}
        <div className="w-44 bg-black/90 rounded-xl border border-kyp-lime/30 p-2.5 shadow-xl space-y-1.5 text-[9px] font-mono">
          <div className="flex items-center justify-between pb-1.5 border-b border-kyp-teal/15">
            <span className="text-white font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-kyp-lime animate-ping" />
              Deposit Batch
            </span>
            <span className="text-[8px] text-kyp-lime px-1.5 py-0.2 rounded bg-kyp-lime/10 border border-kyp-lime/30">
              Capture
            </span>
          </div>

          <div className="flex items-center justify-between text-gray-300 py-0.5">
            <span className="text-gray-400">Check Detail</span>
            <span className="text-kyp-mint font-semibold">Validate</span>
          </div>

          <div className="flex items-center justify-between text-gray-300 py-0.5">
            <span className="text-gray-400">Card Scheme</span>
            <span className="text-kyp-teal font-semibold">Balance</span>
          </div>

          <div className="flex items-center justify-between text-gray-300 py-0.5 border-t border-white/5 pt-1">
            <span className="text-gray-400">BRAM / VIRP</span>
            <span className="text-kyp-lime font-bold">Pass 0 Fines</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "cash-app-graph",
    accentColor: "border-t-[#a855f7]",
    accentHex: "#a855f7",
    title: "Graph Contagion & UBO Resolution",
    tagline: "Unravel multi-tier ownership & connected risks",
    statusText: "Matched",
    statusVariant: "purple",
    href: routes.platform,
    renderVisual: (isHovered) => (
      <div className="relative w-full h-32 flex items-center justify-center">
        {/* Payment -> Invoice Flow */}
        <div className="flex items-center gap-1.5">
          {/* Source node */}
          <div className="w-18 bg-black/90 rounded-xl border border-purple-500/40 p-2 text-center shadow-lg transition-transform duration-300 group-hover:-translate-x-1">
            <span className="text-[8px] font-mono text-purple-300 block mb-1">Controller</span>
            <div className="w-6 h-6 mx-auto rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 font-bold text-[9px]">
              UBO
            </div>
            <span className="text-[8px] font-mono text-gray-400 block mt-1">38.5%</span>
          </div>

          {/* Connection arrow */}
          <div className="flex flex-col items-center">
            <span className="text-[7px] font-mono text-purple-400 font-semibold mb-0.5">Equity</span>
            <div className="w-7 h-0.5 bg-gradient-to-r from-purple-500 to-kyp-teal relative">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 absolute right-0 -top-0.5" />
            </div>
          </div>

          {/* Target node */}
          <div className="w-18 bg-black/90 rounded-xl border border-kyp-teal/40 p-2 text-center shadow-lg transition-transform duration-300 group-hover:translate-x-1">
            <span className="text-[8px] font-mono text-kyp-teal block mb-1">Subsidiary</span>
            <div className="w-6 h-6 mx-auto rounded-full bg-kyp-teal/20 border border-kyp-teal/40 flex items-center justify-center text-kyp-teal font-bold text-[9px]">
              PSP
            </div>
            <span className="text-[8px] font-mono text-kyp-lime font-bold block mt-1">Clean</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "agentic-ap-sentinel",
    accentColor: "border-t-[#38bdf8]",
    accentHex: "#38bdf8",
    title: "Agentic AML & Watchlist Sentinel",
    tagline: "Autonomous sanctions, PEP, and adverse media crawler",
    statusText: "Approved",
    statusVariant: "blue",
    href: routes.aml,
    renderVisual: (isHovered) => (
      <div className="relative w-full h-32 flex items-center justify-center">
        {/* Invoice / Sanctions Card with GL Tags */}
        <div className="flex items-center gap-2">
          {/* Main Inspection Sheet */}
          <div className="w-24 bg-black/90 rounded-xl border border-sky-500/40 p-2 shadow-xl space-y-1">
            <div className="flex items-center gap-1">
              <span className="w-3.5 h-3.5 rounded bg-sky-500/20 text-sky-400 flex items-center justify-center text-[8px] font-bold">
                §
              </span>
              <span className="text-[9px] font-mono text-white font-bold">AML File</span>
            </div>
            <div className="w-14 h-1.5 bg-gray-700 rounded mt-1" />
            <div className="w-10 h-1.5 bg-gray-800 rounded" />
            <div className="pt-1.5 border-t border-white/5 text-[9px] font-mono text-kyp-lime font-bold">
              Score: 12/100
            </div>
          </div>

          {/* Floating GL Tags */}
          <div className="space-y-1.5 text-[8px] font-mono">
            <div className="px-2 py-1 rounded bg-kyp-navy-surface border border-sky-400/30 text-sky-300 font-semibold shadow">
              OFAC 0
            </div>
            <div className="px-2 py-1 rounded bg-kyp-navy-surface border border-kyp-teal/30 text-kyp-teal font-semibold shadow">
              PEP Clear
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "healthcare-audit-cycle",
    accentColor: "border-t-[#10b981]",
    accentHex: "#10b981",
    title: "Regulator-Ready Audit Generation",
    tagline: "60-second defensible dossiers with SHA-256 seal",
    statusText: "Reconciled",
    statusVariant: "mint",
    href: routes.whitepapers,
    renderVisual: (isHovered) => (
      <div className="relative w-full h-32 flex items-center justify-center">
        {/* Claims & ERA Dual Cards */}
        <div className="flex items-center gap-2">
          {/* Claim card */}
          <div className="w-18 bg-black/90 rounded-xl border border-emerald-500/40 p-2 text-center shadow-lg">
            <div className="w-5 h-5 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold mb-1">
              +
            </div>
            <span className="text-[8px] font-mono text-gray-300 block font-semibold">Dossier</span>
            <span className="text-[8px] font-mono text-kyp-teal block mt-0.5">835 Pkg</span>
          </div>

          {/* ERA card */}
          <div className="w-18 bg-black/90 rounded-xl border border-emerald-500/40 p-2 text-center shadow-lg">
            <div className="w-5 h-5 mx-auto rounded-full bg-kyp-lime/20 text-kyp-lime flex items-center justify-center text-[10px] font-bold mb-1">
              ✓
            </div>
            <span className="text-[8px] font-mono text-gray-300 block font-semibold">SHA-256</span>
            <span className="text-[8px] font-mono text-kyp-lime font-bold block mt-0.5">Defensible</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function PurposeBuiltSolutions() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getPillStyles = (variant: SolutionCard["statusVariant"]) => {
    switch (variant) {
      case "lime":
        return "bg-kyp-lime/10 text-kyp-lime border-kyp-lime/30";
      case "cyan":
        return "bg-kyp-teal/10 text-kyp-teal border-kyp-teal/30";
      case "purple":
        return "bg-purple-500/10 text-purple-300 border-purple-500/30";
      case "blue":
        return "bg-sky-500/10 text-sky-300 border-sky-500/30";
      case "mint":
        return "bg-emerald-500/10 text-emerald-300 border-emerald-500/30";
    }
  };

  return (
    <section className="py-20 lg:py-28 border-b border-kyp-teal/15 bg-black relative overflow-hidden kyp-grid-pattern">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-kyp-navy/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Ribbon */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kyp-teal/10 border border-kyp-teal/30 text-xs font-mono text-kyp-teal font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OPERATING SOLUTIONS • RISK MODULES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Purpose-Built Solutions for Enterprise Risk &amp; Compliance Operations
            </h2>

            <p className="text-sm sm:text-base text-gray-400">
              Each module delivers automated intelligence tailored to modern regulatory obligations across onboarding, scheme monitoring, UBO contagion, and audit defence.
            </p>
          </div>

          <div>
            <Link
              href={routes.platform}
              className="inline-flex items-center gap-2 text-sm font-mono text-kyp-lime hover:text-white font-semibold transition-colors group"
            >
              <span>Explore All Solutions</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 5-Card Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {SOLUTIONS.map((sol) => {
            const isHovered = hoveredCard === sol.id;
            return (
              <div
                key={sol.id}
                onMouseEnter={() => setHoveredCard(sol.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative rounded-2xl bg-gradient-to-b from-kyp-navy-surface/90 to-black border border-kyp-teal/20 hover:border-kyp-lime/60 p-5 flex flex-col justify-between transition-all duration-300 shadow-xl border-t-4 ${sol.accentColor} hover:-translate-y-1 hover:shadow-lime-glow/20`}
              >
                <div>
                  {/* Card Title */}
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-kyp-lime transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                    {sol.tagline}
                  </p>

                  {/* Micro Visual Diagram Container */}
                  <div className="my-5 bg-black/60 rounded-xl border border-white/5 p-2 overflow-hidden flex items-center justify-center">
                    {sol.renderVisual(isHovered)}
                  </div>
                </div>

                {/* Card Bottom: Status Pill + Explore Link */}
                <div className="space-y-3 pt-3 border-t border-kyp-teal/15">
                  <div className="flex justify-end">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold border ${getPillStyles(
                        sol.statusVariant
                      )}`}
                    >
                      <span>{sol.statusText}</span>
                      <Check className="w-3 h-3" />
                    </span>
                  </div>

                  <Link
                    href={sol.href}
                    className="flex items-center justify-between text-xs font-mono font-semibold text-gray-300 group-hover:text-kyp-lime transition-colors pt-1"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
