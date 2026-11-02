"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, FileText, CheckCircle2 } from "lucide-react";
import { routes } from "@/lib/routes";

interface SolutionCard {
  id: string;
  accentColor: string;
  accentBorder: string;
  title: string;
  tagline: string;
  statusText: string;
  statusBadgeColor: string;
  href: string;
  renderVisual: (isHovered: boolean) => React.ReactNode;
}

const SOLUTIONS: SolutionCard[] = [
  {
    id: "lockbox-digital-mailroom",
    accentColor: "bg-[#033653]",
    accentBorder: "border-t-[#033653]",
    title: "AI Onboarding & Digital Intake",
    tagline: "Lockbox and digital extraction workflows",
    statusText: "Balanced",
    statusBadgeColor: "bg-[#c6f5ef] text-[#033653] border-[#6fd3c4]",
    href: routes.onboarding,
    renderVisual: (isHovered) => (
      <div className="relative w-full h-40 flex items-center justify-center">
        {/* Background tilted document card */}
        <motion.div
          animate={{ rotate: isHovered ? -12 : -6, y: [0, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-3 top-3 w-32 h-24 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-between p-2.5 shadow-xs pointer-events-none"
        >
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6fd3c4]" />
            <span className="text-[11px] font-mono font-bold text-slate-500">REG-8921</span>
          </div>
          <div className="space-y-1.5">
            <div className="w-20 h-2 bg-slate-200 rounded" />
            <div className="w-14 h-2 bg-slate-100 rounded" />
          </div>
        </motion.div>

        {/* Foreground prominent document card with large readable text */}
        <motion.div
          animate={{ y: isHovered ? -4 : [0, -3, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-44 bg-white rounded-xl border-2 border-slate-200 p-3.5 shadow-md"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded bg-emerald-50 text-[#66cc00] flex items-center justify-center font-bold">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="text-xs font-bold text-slate-900 font-mono">Check Detail</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#c6f5ef] text-[#033653] border border-[#6fd3c4] font-bold">
              Batch 204
            </span>
          </div>
          <div className="space-y-1">
            <div className="text-base font-extrabold font-mono text-[#000000]">$48,205.00</div>
            <div className="w-full h-1.5 bg-emerald-100 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: ["30%", "100%", "30%"] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-full bg-[#66cc00] rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    id: "deposit-remittance",
    accentColor: "bg-[#66cc00]",
    accentBorder: "border-t-[#66cc00]",
    title: "Continuous Remittance & Scheme Rules",
    tagline: "Deposit operations and automated compliance",
    statusText: "Reconciled",
    statusBadgeColor: "bg-emerald-50 text-emerald-800 border-emerald-300",
    href: routes.websiteCompliance,
    renderVisual: (isHovered) => (
      <div className="relative w-full h-40 flex items-center justify-center">
        {/* Diagram Flow Card with large, clear text */}
        <motion.div
          animate={{ y: isHovered ? -4 : [0, -2, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-52 bg-white rounded-xl border-2 border-slate-200 p-3.5 shadow-md space-y-2 text-xs font-mono"
        >
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
            <span className="text-slate-900 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#66cc00] animate-ping" />
              Deposit Batch
            </span>
            <span className="text-[10px] text-emerald-800 px-2 py-0.5 rounded bg-emerald-50 border border-emerald-300 font-bold">
              Capture
            </span>
          </div>

          <div className="flex items-center justify-between text-slate-700 py-0.5">
            <span className="text-slate-500 font-medium">Check Detail</span>
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              Validate <Check className="w-3 h-3 stroke-[3]" />
            </span>
          </div>

          <div className="flex items-center justify-between text-slate-700 py-0.5">
            <span className="text-slate-500 font-medium">Card Scheme</span>
            <span className="text-[#033653] font-bold">Balance OK</span>
          </div>

          <div className="flex items-center justify-between text-slate-700 py-0.5 border-t border-slate-100 pt-1">
            <span className="text-slate-500 font-medium">BRAM / VIRP</span>
            <span className="text-[#66cc00] font-extrabold">Pass 0 Fines</span>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    id: "cash-app-receivables",
    accentColor: "bg-[#6fd3c4]",
    accentBorder: "border-t-[#6fd3c4]",
    title: "Cash Application & UBO Resolution",
    tagline: "Cash application for merchant receivables",
    statusText: "Matched",
    statusBadgeColor: "bg-[#c6f5ef] text-[#033653] border-[#6fd3c4]",
    href: routes.platformGraphIntelligence,
    renderVisual: (isHovered) => (
      <div className="relative w-full h-40 flex items-center justify-center">
        {/* Payment -> Invoice Flow with animated particle ray */}
        <div className="flex items-center gap-2">
          {/* Payment node */}
          <motion.div
            animate={{ x: isHovered ? -2 : 0 }}
            className="w-22 bg-white rounded-xl border-2 border-slate-200 p-2.5 text-center shadow-md"
          >
            <span className="text-xs font-mono text-[#033653] font-extrabold block mb-1">$48,000</span>
            <div className="px-2 py-0.5 rounded bg-[#c6f5ef] text-[#033653] font-bold text-[10px] font-mono border border-[#6fd3c4]">
              Payment
            </div>
          </motion.div>

          {/* Animated Connecting Arrow Wire */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-1 bg-gradient-to-r from-[#6fd3c4] to-[#66cc00] rounded-full relative">
              <motion.span
                animate={{ left: ["0%", "85%", "0%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2.5 h-2.5 rounded-full bg-[#66cc00] absolute -top-0.5 shadow-[0_0_6px_#66cc00]"
              />
            </div>
          </div>

          {/* Invoice node */}
          <motion.div
            animate={{ x: isHovered ? 2 : 0 }}
            className="w-22 bg-white rounded-xl border-2 border-slate-200 p-2.5 text-center shadow-md"
          >
            <div className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px] font-mono border border-emerald-300 mb-1">
              Invoice
            </div>
            <span className="text-xs font-mono text-[#66cc00] font-bold block">Matched</span>
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    id: "accounts-payable",
    accentColor: "border-t-[#033653]",
    accentBorder: "border-t-[#033653]",
    title: "Accounts Payable & Invoice Processing",
    tagline: "Automated general ledger reconciliation",
    statusText: "Approved",
    statusBadgeColor: "bg-slate-100 text-slate-800 border-slate-300",
    href: routes.transactionMonitoring,
    renderVisual: (isHovered) => (
      <div className="relative w-full h-40 flex items-center justify-center">
        {/* Invoice & GL Codes with high-contrast text */}
        <motion.div
          animate={{ y: isHovered ? -4 : [0, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-48 bg-white rounded-xl border-2 border-slate-200 p-3.5 shadow-md space-y-2"
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
            <span className="text-xs font-bold font-mono text-slate-900 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#033653]" />
              Invoice
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold">
              GL 6100
            </span>
          </div>
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-base font-extrabold text-[#000000]">$12,940</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold">
              CC 835
            </span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: ["20%", "95%", "20%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="h-full bg-[#033653] rounded-full"
            />
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    id: "cycle-management",
    accentColor: "border-t-[#66cc00]",
    accentBorder: "border-t-[#66cc00]",
    title: "Revenue Cycle & Portfolio Management",
    tagline: "End-to-end claim and settlement reconciliation",
    statusText: "Reconciled",
    statusBadgeColor: "bg-emerald-50 text-emerald-800 border-emerald-300",
    href: routes.issuingMonitoring,
    renderVisual: (isHovered) => (
      <div className="relative w-full h-40 flex items-center justify-center">
        {/* Claim 835 & ERA cards with clear typography */}
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            className="w-22 bg-white rounded-xl border-2 border-slate-200 p-2.5 text-center shadow-md"
          >
            <span className="text-[10px] font-mono text-[#033653] font-bold block mb-1">Claim</span>
            <span className="text-sm font-mono text-slate-900 font-extrabold">835</span>
          </motion.div>

          <motion.div
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-[#66cc00] font-bold text-base"
          >
            &rarr;
          </motion.div>

          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            className="w-22 bg-white rounded-xl border-2 border-emerald-200 p-2.5 text-center shadow-md"
          >
            <span className="text-[10px] font-mono text-emerald-700 font-bold block mb-1">ERA</span>
            <span className="text-sm font-mono text-slate-900 font-extrabold">$1,284</span>
          </motion.div>
        </div>
      </div>
    ),
  },
];

export default function PurposeBuiltSolutions() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-slate-50/80 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-emerald-800 uppercase tracking-widest font-bold">
              OPERATING SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 font-heading">
              Connect the work that shapes your financial outcomes.
            </h2>
          </div>
          <Link
            href={routes.onboarding}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 hover:text-emerald-700 transition-colors shrink-0 group font-mono"
          >
            <span>Explore All Solutions</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 5 Cards Row with Enhanced Legibility & Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {SOLUTIONS.map((sol) => {
            const isHovered = hoveredCard === sol.id;

            return (
              <div
                key={sol.id}
                onMouseEnter={() => setHoveredCard(sol.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative border-t-4 ${sol.accentBorder} hover:-translate-y-2`}
              >
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  {/* Title and Tagline */}
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#033653] transition-colors leading-snug">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-normal line-clamp-2">
                      {sol.tagline}
                    </p>
                  </div>

                  {/* Inner Interactive Micro-Visual */}
                  <div className="py-2">
                    {sol.renderVisual(isHovered)}
                  </div>

                  {/* Status Pill Badge */}
                  <div className="pt-2 flex justify-center">
                    <div className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 border shadow-xs ${sol.statusBadgeColor}`}>
                      <span>{sol.statusText}</span>
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/60 flex items-center justify-between text-xs">
                  <Link
                    href={sol.href}
                    className="font-semibold text-slate-800 group-hover:text-[#033653] transition-colors flex items-center gap-1 text-xs"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
