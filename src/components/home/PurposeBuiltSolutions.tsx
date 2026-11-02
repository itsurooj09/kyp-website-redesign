"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Activity,
  Share2,
  CreditCard,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import { routes } from "@/lib/routes";

interface SolutionItem {
  number: string;
  title: string;
  description: string;
  pills: string[];
  icon: React.ReactNode;
  href: string;
}

const SOLUTIONS: SolutionItem[] = [
  {
    number: "01",
    title: "AI Onboarding & Digital Intake",
    description: "Lockbox and digital extraction workflows resolving document discrepancies before submission.",
    pills: ["Lockbox Intake", "OCR Extraction", "Instant Decision"],
    icon: <FileText className="w-6 h-6 stroke-[2.4]" />,
    href: routes.onboarding,
  },
  {
    number: "02",
    title: "Continuous Remittance & Scheme Rules",
    description: "Deposit operations and 24/7 automated compliance for Mastercard BRAM and Visa VIRP.",
    pills: ["Deposit Capture", "Card Scheme Rules", "Zero BRAM Fines"],
    icon: <Activity className="w-6 h-6 stroke-[2.4]" />,
    href: routes.websiteCompliance,
  },
  {
    number: "03",
    title: "Acquirer, Agent & Intermediary",
    description: "Full visibility of sub-merchants, nested aggregators, and agent networks.",
    pills: ["Sub-merchants", "Agent networks", "UBO Resolution"],
    icon: <Share2 className="w-6 h-6 stroke-[2.4]" />,
    href: routes.platformGraphIntelligence,
  },
  {
    number: "04",
    title: "Accounts Payable & Invoice Processing",
    description: "Automated general ledger reconciliation with multi-tiered analyst approval routing.",
    pills: ["General Ledger", "Invoice Matching", "Approval Routing"],
    icon: <CreditCard className="w-6 h-6 stroke-[2.4]" />,
    href: routes.transactionMonitoring,
  },
  {
    number: "05",
    title: "Revenue Cycle & Portfolio Management",
    description: "End-to-end claim and settlement reconciliation across multi-currency acquiring streams.",
    pills: ["Claim Settlement", "Velocity Checks", "Portfolio Health"],
    icon: <TrendingUp className="w-6 h-6 stroke-[2.4]" />,
    href: routes.portfolioIssuing,
  },
  {
    number: "06",
    title: "Automated Audit & Instant Reporting",
    description: "Cryptographic immutable audit trails and 60-second regulator defense dossiers on demand.",
    pills: ["Audit Ready", "Immutable Ledger", "FCA Defensible"],
    icon: <ShieldCheck className="w-6 h-6 stroke-[2.4]" />,
    href: routes.instantAudit,
  },
];

export default function PurposeBuiltSolutions() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Spacious 80px background tech grid with subtle ambient depth */}
      <div className="absolute inset-0 kyp-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12 relative z-10">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000000] text-white border border-[#033653] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#66cc00] animate-pulse" />
              <span>OPERATING SOLUTIONS &bull; PURPOSE-BUILT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#000000] font-heading">
              Connect the work that shapes your financial outcomes.
            </h2>
          </div>
          <Link
            href={routes.onboarding}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#033653] hover:text-[#66cc00] transition-colors shrink-0 group font-mono"
          >
            <span>Explore All Solutions</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6-Card Grid (3, 3) - Default White, Transforms to Luxury Dark on Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SOLUTIONS.map((sol) => {
            const isHovered = hoveredCard === sol.number;

            return (
              <motion.div
                key={sol.number}
                onMouseEnter={() => setHoveredCard(sol.number)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden transition-all duration-300 cursor-pointer min-h-[380px]"
                style={{
                  background: isHovered
                    ? "linear-gradient(145deg, #0d140e 0%, #080d09 60%, #050806 100%)"
                    : "#ffffff",
                  border: isHovered
                    ? "1px solid rgba(102, 204, 0, 0.6)"
                    : "1px solid #e2e8f0",
                  boxShadow: isHovered
                    ? "0 25px 50px -10px rgba(0, 0, 0, 0.7), 0 0 35px rgba(102, 204, 0, 0.2)"
                    : "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
                }}
              >
                {/* Subtle top-right ambient green reflection on hover */}
                {isHovered && (
                  <div className="absolute top-0 right-0 w-44 h-44 bg-[#66cc00]/10 rounded-full blur-2xl pointer-events-none animate-pulse" />
                )}

                {/* Top Row: Lime Green Squircle Icon & Stencil Number */}
                <div className="flex items-start justify-between relative z-10">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isHovered
                        ? "bg-[#66cc00] text-black shadow-[0_4px_16px_rgba(102,204,0,0.45)] scale-105"
                        : "bg-slate-100 text-slate-800 border border-slate-200"
                    }`}
                  >
                    {sol.icon}
                  </div>

                  <span
                    className={`text-5xl font-mono font-extrabold select-none tracking-tight transition-colors duration-300 ${
                      isHovered ? "text-[#213824]" : "text-slate-200"
                    }`}
                  >
                    {sol.number}
                  </span>
                </div>

                {/* Middle: Title, Description & Pill Tags */}
                <div className="space-y-3.5 my-6 relative z-10">
                  <h3
                    className={`text-xl sm:text-2xl font-bold tracking-tight leading-snug transition-colors duration-300 ${
                      isHovered ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {sol.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed transition-colors duration-300 ${
                      isHovered ? "text-[#9db39d]" : "text-slate-600"
                    }`}
                  >
                    {sol.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {sol.pills.map((pill, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs font-semibold shadow-xs transition-colors duration-300 ${
                          isHovered
                            ? "bg-[#111e13] border border-[#234327] text-[#66cc00]"
                            : "bg-slate-100 border border-slate-200 text-slate-700"
                        }`}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Talk to us + Circular Arrow Button */}
                <div
                  className={`pt-4 border-t flex items-center justify-between relative z-10 transition-colors duration-300 ${
                    isHovered ? "border-[#1a2b1c]" : "border-slate-100"
                  }`}
                >
                  <Link
                    href={sol.href}
                    className={`text-sm font-bold flex items-center gap-1.5 transition-colors duration-300 ${
                      isHovered
                        ? "text-[#66cc00] hover:text-[#88ea28]"
                        : "text-[#033653] hover:text-[#66cc00]"
                    }`}
                  >
                    <span>Talk to us</span>
                  </Link>

                  <Link
                    href={sol.href}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isHovered
                        ? "bg-[#66cc00] text-black shadow-[0_4px_12px_rgba(102,204,0,0.4)] scale-110"
                        : "bg-slate-100 text-slate-700 hover:bg-[#66cc00] hover:text-black border border-slate-200"
                    }`}
                  >
                    <ArrowRight className="w-4 h-4 stroke-[2.8]" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
