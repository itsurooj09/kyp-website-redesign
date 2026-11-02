"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, CheckCircle2, Shield, FileText, Network, Search, FileCheck, Sparkles, ExternalLink } from "lucide-react";
import { routes } from "@/lib/routes";

interface SolutionCard {
  id: string;
  accentColor: string;
  accentHex: string;
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
    accentColor: "border-t-[#0284c7]",
    accentHex: "#0284c7",
    title: "AI Onboarding & Digital Intake",
    tagline: "Lockbox and digital extraction workflows",
    statusText: "Balanced",
    statusBadgeColor: "bg-sky-50 text-sky-700 border-sky-200",
    href: routes.onboarding,
    renderVisual: (isHovered) => (
      <div className="relative w-full h-36 flex items-center justify-center">
        {/* Background tilted document card */}
        <div className="absolute left-4 top-4 w-28 h-20 bg-slate-50 rounded-xl border border-slate-200 -rotate-6 transition-transform duration-300 group-hover:-rotate-12 flex flex-col justify-between p-2 shadow-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="text-[8px] font-mono text-slate-400">REG-8921</span>
          </div>
          <div className="space-y-1">
            <div className="w-16 h-1.5 bg-slate-200 rounded" />
            <div className="w-10 h-1.5 bg-slate-100 rounded" />
          </div>
        </div>

        {/* Foreground prominent document card */}
        <div className="relative z-10 w-38 bg-white rounded-xl border border-slate-200 p-3 shadow-md transition-transform duration-300 group-hover:scale-105">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Check className="w-2.5 h-2.5" />
              </div>
              <span className="text-[10px] font-bold text-slate-900 font-mono">Check Detail</span>
            </div>
            <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200 font-bold">
              Batch 204
            </span>
          </div>
          <div className="space-y-1.5">
            <div className="text-xs font-bold font-mono text-slate-800">$48,205</div>
            <div className="w-24 h-1.5 bg-slate-100 rounded" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "deposit-remittance",
    accentColor: "border-t-[#16a34a]",
    accentHex: "#16a34a",
    title: "Continuous Remittance & Scheme Rules",
    tagline: "Deposit operations and automated compliance",
    statusText: "Reconciled",
    statusBadgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    href: routes.websiteCompliance,
    renderVisual: (isHovered) => (
      <div className="relative w-full h-36 flex items-center justify-center">
        {/* Diagram Flow Card matching Video 2 */}
        <div className="w-48 bg-white rounded-xl border border-slate-200 p-3 shadow-md space-y-1.5 text-[9px] font-mono">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
            <span className="text-slate-900 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Deposit Batch
            </span>
            <span className="text-[8px] text-emerald-700 px-1.5 py-0.5 rounded bg-emerald-50 border border-emerald-200 font-bold">
              Capture
            </span>
          </div>

          <div className="flex items-center justify-between text-slate-600 py-0.5">
            <span className="text-slate-400">Check Detail</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              Validate <Check className="w-2.5 h-2.5" />
            </span>
          </div>

          <div className="flex items-center justify-between text-slate-600 py-0.5">
            <span className="text-slate-400">Card Scheme</span>
            <span className="text-sky-700 font-semibold">Balance</span>
          </div>

          <div className="flex items-center justify-between text-slate-600 py-0.5 border-t border-slate-100 pt-1">
            <span className="text-slate-400">BRAM / VIRP</span>
            <span className="text-emerald-700 font-bold">Pass 0 Fines</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "cash-app-receivables",
    accentColor: "border-t-[#8b5cf6]",
    accentHex: "#8b5cf6",
    title: "Cash Application & UBO Resolution",
    tagline: "Cash application for merchant receivables",
    statusText: "Matched",
    statusBadgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    href: routes.platformGraphIntelligence,
    renderVisual: (isHovered) => (
      <div className="relative w-full h-36 flex items-center justify-center">
        {/* Payment -> Invoice Flow matching Video 2 */}
        <div className="flex items-center gap-2">
          {/* Payment node */}
          <div className="w-18 bg-white rounded-xl border border-purple-200 p-2 text-center shadow-md transition-transform duration-300 group-hover:-translate-x-1">
            <span className="text-[8px] font-mono text-purple-600 font-bold block mb-1">$48K</span>
            <div className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-bold text-[8px] font-mono border border-purple-200">
              Payment
            </div>
          </div>

          {/* Connection arrow */}
          <div className="flex flex-col items-center">
            <div className="w-6 h-0.5 bg-gradient-to-r from-purple-500 to-sky-500 relative">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 absolute right-0 -top-0.5 animate-ping" />
            </div>
          </div>

          {/* Invoice node */}
          <div className="w-18 bg-white rounded-xl border border-sky-200 p-2 text-center shadow-md transition-transform duration-300 group-hover:translate-x-1">
            <div className="px-2 py-0.5 rounded bg-sky-50 text-sky-700 font-bold text-[8px] font-mono border border-sky-200 mb-1">
              Invoice
            </div>
            <span className="text-[8px] font-mono text-slate-500 block">Matched</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "accounts-payable",
    accentColor: "border-t-[#0369a1]",
    accentHex: "#0369a1",
    title: "Accounts Payable & Invoice Processing",
    tagline: "Automated general ledger reconciliation",
    statusText: "Approved",
    statusBadgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    href: routes.transactionMonitoring,
    renderVisual: (isHovered) => (
      <div className="relative w-full h-36 flex items-center justify-center">
        {/* Invoice & GL Codes matching Video 2 */}
        <div className="w-44 bg-white rounded-xl border border-slate-200 p-3 shadow-md space-y-2">
          <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
            <span className="text-[9px] font-bold font-mono text-slate-800 flex items-center gap-1">
              <FileText className="w-3 h-3 text-sky-600" />
              Invoice
            </span>
            <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
              GL 6100
            </span>
          </div>
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="font-bold text-slate-900">$12,940</span>
            <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
              CC 835
            </span>
          </div>
          <div className="w-full h-1 bg-sky-100 rounded-full overflow-hidden">
            <div className="w-full h-full bg-sky-600 rounded-full" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "cycle-management",
    accentColor: "border-t-[#0d9488]",
    accentHex: "#0d9488",
    title: "Revenue Cycle & Portfolio Management",
    tagline: "End-to-end claim and settlement reconciliation",
    statusText: "Reconciled",
    statusBadgeColor: "bg-teal-50 text-teal-700 border-teal-200",
    href: routes.issuingMonitoring,
    renderVisual: (isHovered) => (
      <div className="relative w-full h-36 flex items-center justify-center">
        {/* Claim 835 & ERA cards matching Video 2 */}
        <div className="flex items-center gap-2">
          <div className="w-18 bg-white rounded-xl border border-teal-200 p-2 text-center shadow-md">
            <span className="text-[8px] font-mono text-teal-700 font-bold block mb-1">Claim</span>
            <span className="text-[9px] font-mono text-slate-700 font-bold">835</span>
          </div>
          <div className="text-slate-300 font-bold text-xs">&rarr;</div>
          <div className="w-18 bg-white rounded-xl border border-emerald-200 p-2 text-center shadow-md">
            <span className="text-[8px] font-mono text-emerald-700 font-bold block mb-1">ERA</span>
            <span className="text-[9px] font-mono text-slate-700 font-bold">$1,284</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function PurposeBuiltSolutions() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        {/* Top Header matching Video 2 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-emerald-700 uppercase tracking-widest font-bold">
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

        {/* 5 Cards Row matching Video 2 1:1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {SOLUTIONS.map((sol) => {
            const isHovered = hoveredCard === sol.id;

            return (
              <div
                key={sol.id}
                onMouseEnter={() => setHoveredCard(sol.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative border-t-4 ${sol.accentColor} hover:-translate-y-2`}
              >
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  {/* Title and Tagline */}
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {sol.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-normal line-clamp-2">
                      {sol.tagline}
                    </p>
                  </div>

                  {/* Inner Interactive Micro-Visual */}
                  <div className="py-2">
                    {sol.renderVisual(isHovered)}
                  </div>

                  {/* Status Pill Badge matching Video 2 */}
                  <div className="pt-2 flex justify-center">
                    <div className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold flex items-center gap-1.5 border shadow-xs ${sol.statusBadgeColor}`}>
                      <span>{sol.statusText}</span>
                      <Check className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs">
                  <Link
                    href={sol.href}
                    className="font-semibold text-slate-700 group-hover:text-emerald-700 transition-colors flex items-center gap-1 text-[11px]"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
