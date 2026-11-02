"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Gamepad2,
  CreditCard,
  Building2,
  Landmark,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ExternalLink,
  Sparkles,
  Zap,
  Globe,
} from "lucide-react";
import { routes } from "@/lib/routes";

interface IndustryTab {
  id: string;
  name: string;
  shortName: string;
  icon: React.ReactNode;
  headline: string;
  subheadline: string;
  description: string;
  regulatoryBadges: string[];
  workflow: {
    step: string;
    action: string;
    detail: string;
  }[];
  metrics: {
    value: string;
    label: string;
  }[];
  href: string;
  demoType: "igaming" | "payments" | "acquirers" | "banking" | "marketplaces";
}

const TABS_DATA: IndustryTab[] = [
  {
    id: "igaming",
    name: "iGaming & Gambling",
    shortName: "iGaming",
    icon: <Gamepad2 className="w-4 h-4" />,
    headline: "Protect Brand Integrity Across Operators & White-Labels",
    subheadline: "Onboard partners faster. Monitor risk across your iGaming ecosystem.",
    description: "KYP brings onboarding, due diligence, website compliance, and continuous monitoring into one unified view of your operators, affiliates, payment partners, and software suppliers, helping compliance teams identify emerging threats before licence suspension.",
    regulatoryBadges: ["MGA Regulated", "UKGC Compliant", "Curacao Oversight", "SGA Ready"],
    workflow: [
      { step: "01", action: "Operator Due Diligence", detail: "Automated corporate registry cross-check & director vetting" },
      { step: "02", action: "Affiliate & WebCompli", detail: "24/7 web crawler scanning for unauthorized redirects & geo-blocking" },
      { step: "03", action: "Instant Regulator Pack", detail: "Pre-compiled audit dossiers ready for licensing audits in 60s" },
    ],
    metrics: [
      { value: "10x", label: "Faster Partner Onboarding" },
      { value: "24/7", label: "Affiliate Redirect Radar" },
      { value: "Zero", label: "Licensing Non-Compliance Fines" },
    ],
    href: routes.onboarding,
    demoType: "igaming",
  },
  {
    id: "payments",
    name: "Payments & PSPs",
    shortName: "Payments & PSPs",
    icon: <CreditCard className="w-4 h-4" />,
    headline: "Automate Merchant Due Diligence & Eliminate BRAM / VIRP Fines",
    subheadline: "Onboard merchants faster. Monitor risk across your payment ecosystem.",
    description: "KYP brings merchant onboarding, due diligence, transaction monitoring, and continuous risk intelligence into one platform, helping payment service providers, acquirers, and payment facilitators identify emerging merchant risk without operational bottlenecks.",
    regulatoryBadges: ["Mastercard BRAM", "Visa VIRP", "FCA Authorized", "PCI-DSS 4.0"],
    workflow: [
      { step: "01", action: "Digital Intake & KYC", detail: "OCR extraction of business certificates & discrepancy alerts" },
      { step: "02", action: "Volumetric Velocity", detail: "Real-time anomaly detection across SEPA, SWIFT & card streams" },
      { step: "03", action: "Scheme Non-Compliance Shield", detail: "Automated web crawling verifying disclosures & refund terms" },
    ],
    metrics: [
      { value: "0 Fines", label: "Card Scheme Violations" },
      { value: "<30s", label: "Automated Decision SLA" },
      { value: "100%", label: "Traceable Audit Trails" },
    ],
    href: routes.platform,
    demoType: "payments",
  },
  {
    id: "acquirers",
    name: "Acquirers & PayFacs",
    shortName: "Acquirers",
    icon: <Building2 className="w-4 h-4" />,
    headline: "Comprehensive Oversight Across Sub-Merchants & Sales Agents",
    subheadline: "Protect your acquiring BINs from rogue merchant drift and hidden liabilities.",
    description: "Eliminate blind spots across nested aggregator structures, ISOs, and sub-merchants. KYP continually validates trading URL legitimacy, chargeback ratio trends (TC40), and beneficial ownership changes.",
    regulatoryBadges: ["Card Schemes Direct", "Payment Facilitator SLA", "PSD2 / PSD3", "FinCEN Ready"],
    workflow: [
      { step: "01", action: "Portfolio Vetting", detail: "Instant multi-merchant ingestion with automated risk scoring" },
      { step: "02", action: "TC40 & Product Drift", detail: "Detect unauthorized inventory sales or redirected checkout pages" },
      { step: "03", action: "Sponsor Bank Reporting", detail: "Automated risk tier summaries formatted for scheme reviews" },
    ],
    metrics: [
      { value: "1,250+", label: "Entities Actively Tracked" },
      { value: "<15 Mins", label: "Triage & Alert Time" },
      { value: "99.4%", label: "Discrepancy Accuracy" },
    ],
    href: routes.platform,
    demoType: "acquirers",
  },
  {
    id: "banking",
    name: "Banking & Financial Services",
    shortName: "Banking & Fintech",
    icon: <Landmark className="w-4 h-4" />,
    headline: "Institutional-Grade Third-Party KYB & Beneficial Ownership",
    subheadline: "Unravel complex corporate structures, PEP ties, and adverse media exposure.",
    description: "Built for banks and regulated financial institutions managing thousands of commercial relationships. Replace fragmented legacy screening tools with automated graph contagion analysis and 60-second FCA audit defensibility.",
    regulatoryBadges: ["FCA SYSC 8", "EBA Outsourcing", "Wolfsberg Group", "5th / 6th AMLD"],
    workflow: [
      { step: "01", action: "180+ Registries Cross-Check", detail: "Direct API verification against Companies House & global registers" },
      { step: "02", action: "Graph Contagion Traversal", detail: "Resolve complex multi-tier holding companies & 38.5%+ UBOs" },
      { step: "03", action: "Sanctions & PEP Sync", detail: "24/7 automated matching against OFAC, EU, UN & UK HMT lists" },
    ],
    metrics: [
      { value: "60 Sec", label: "Audit Dossier Generation" },
      { value: "180+", label: "Global Registries Connected" },
      { value: "100%", label: "FCA Defensible Proof" },
    ],
    href: routes.aml,
    demoType: "banking",
  },
  {
    id: "marketplaces",
    name: "Marketplaces & Platforms",
    shortName: "Marketplaces",
    icon: <ShoppingBag className="w-4 h-4" />,
    headline: "Frictionless Seller Onboarding Without Compromising Trust",
    subheadline: "Scale vendor ecosystems safely while satisfying DAC7 and marketplace regulations.",
    description: "Provide high-converting, policy-tailored onboarding questionnaires for commercial sellers while continuously screening storefronts for prohibited products, illegal traffic, and sanctioned beneficial controllers.",
    regulatoryBadges: ["DAC7 Reporting", "Informed Consumers Act", "DSA Compliance", "AML6"],
    workflow: [
      { step: "01", action: "Smart Seller Intake", detail: "Tailored self-service questionnaires with instant OCR verification" },
      { step: "02", action: "Storefront Compliance Sweep", detail: "Continuous crawling of merchant catalog & seller legal disclosures" },
      { step: "03", action: "Automated DAC7 Dossiers", detail: "Tax identification & commercial volume compilation" },
    ],
    metrics: [
      { value: "85%", label: "Reduction in Onboarding Time" },
      { value: "0", label: "Prohibited Goods Fines" },
      { value: "24/7", label: "Automated Storefront Sweeps" },
    ],
    href: routes.onboarding,
    demoType: "marketplaces",
  },
];

export default function IndustryTabs() {
  const [activeTabId, setActiveTabId] = useState<string>("igaming");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const currentTab = TABS_DATA.find((t) => t.id === activeTabId) || TABS_DATA[0];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/80 border-b border-slate-200/80 relative overflow-hidden">
      {/* Background grid accent */}
      <div className="absolute inset-0 kyp-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header Section matching Image 1 */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000000] text-white border border-[#033653] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#66cc00] animate-pulse" />
            <span>INDUSTRY COVERAGE &bull; TAILORED PROTOCOLS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#000000] tracking-tight">
            Built for Complex Risk Environments.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Tailored risk models for payment institutions, acquirers, iGaming operators, banks, and high-growth fintech platforms.
          </p>
        </div>

        {/* Tab Selector Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200">
          {TABS_DATA.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                type="button"
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#000000] text-white shadow-md scale-102"
                    : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <span className={isActive ? "text-[#66cc00]" : "text-slate-400"}>
                  {tab.icon}
                </span>
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Card (Immediate High-Performance Rendering) */}
        <div
          key={currentTab.id}
          className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 transition-all duration-300 animate-fade-in"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Narrative & Workflows */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {currentTab.regulatoryBadges.map((badge, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-[#000000] border border-[#033653] text-white text-[10.5px] font-mono font-bold uppercase tracking-wide flex items-center gap-1.5 shadow-xs hover:border-[#66cc00] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#66cc00]" />
                      {badge}
                    </span>
                  ))}
                </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                    {currentTab.headline}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                    {currentTab.description}
                  </p>
                </div>

                {/* 3-Step Tailored Workflow with Dark Black Hover */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Specialized Operational Pipeline:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {currentTab.workflow.map((wf, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -4 }}
                        className="p-4 rounded-2xl bg-slate-50 hover:bg-[#000000] border border-slate-200 hover:border-[#033653] space-y-2 group cursor-pointer transition-all duration-300 shadow-xs hover:shadow-xl"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-[#033653] group-hover:text-[#66cc00] transition-colors">
                            {wf.step}
                          </span>
                          <span className="w-2 h-2 rounded-full bg-[#66cc00] group-hover:animate-ping" />
                        </div>
                        <h4 className="text-xs font-bold text-[#000000] group-hover:text-white transition-colors">
                          {wf.action}
                        </h4>
                        <p className="text-[11px] text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                          {wf.detail}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Impact KPIs & CTA */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-6 text-left">
                    {currentTab.metrics.map((m, i) => (
                      <div key={i}>
                        <div className="text-xl font-bold text-[#000000] font-mono">{m.value}</div>
                        <div className="text-[11px] text-slate-500">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={currentTab.href}
                    className="inline-flex items-center gap-2 bg-[#000000] hover:bg-[#033653] text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-sm hover:shadow transition-all group"
                  >
                    <span>Explore {currentTab.shortName} Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Live Interactive Simulation Widget */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden space-y-4">
                  {/* Window Bar */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest ml-2">
                        {currentTab.shortName.toUpperCase()} PROTOCOL &bull; LIVE
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-[#66cc00]/20 text-[#66cc00] border border-emerald-500/30 font-bold">
                      ACTIVE
                    </span>
                  </div>

                  {/* Dynamic Motion Animated Graph Content per Industry */}
                  {currentTab.id === "igaming" && (
                    <div className="space-y-4 text-xs font-mono">
                      {/* Top Metric Header */}
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                        <div>
                          <div className="text-[10px] text-slate-400">AFFILIATE TRAFFIC INTEGRITY RADAR</div>
                          <div className="font-bold text-white text-sm">BetStream &bull; 0 Drift Drift</div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-kyp-lime/20 text-kyp-lime border border-kyp-lime/40">
                          100% CLEAN
                        </span>
                      </div>

                      {/* Animated SVG Radar & Waveform Graph */}
                      <div className="relative h-44 rounded-xl bg-black/60 border border-[#033653] p-2 overflow-hidden flex items-center justify-center">
                        {/* Radar concentric circles */}
                        <div className="absolute w-36 h-36 rounded-full border border-[#033653]" />
                        <div className="absolute w-24 h-24 rounded-full border border-[#033653]" />
                        <div className="absolute w-12 h-12 rounded-full border border-kyp-lime/40" />

                        {/* 360 Rotating Radar Beam */}
                        <div
                          className="absolute w-36 h-36 rounded-full pointer-events-none animate-spin"
                          style={{
                            animationDuration: "4s",
                            background: "conic-gradient(from 0deg, transparent 70%, rgba(102,204,0,0.35) 100%)",
                          }}
                        />

                        {/* Moving Oscillating Sine Wave Graph Across Radar */}
                        <svg viewBox="0 0 400 120" className="w-full h-full relative z-10 overflow-visible">
                          <defs>
                            <linearGradient id="igaming-wave" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="#66cc00" stopOpacity="0.8" />
                              <stop offset="50%" stopColor="#66cc00" stopOpacity="1" />
                              <stop offset="100%" stopColor="#66cc00" stopOpacity="0.8" />
                            </linearGradient>
                          </defs>

                          {/* Undulating Animated Path */}
                          <path
                            d="M 10,60 Q 60,20 110,60 T 210,60 T 310,60 T 390,60"
                            fill="none"
                            stroke="url(#igaming-wave)"
                            strokeWidth="2.5"
                            className="opacity-90"
                          >
                            <animate
                              attributeName="d"
                              dur="3s"
                              repeatCount="indefinite"
                              values="
                                M 10,60 Q 60,20 110,60 T 210,60 T 310,60 T 390,60;
                                M 10,60 Q 60,90 110,60 T 210,60 T 310,60 T 390,60;
                                M 10,60 Q 60,20 110,60 T 210,60 T 310,60 T 390,60
                              "
                            />
                          </path>

                          {/* Radar Scan Nodes with pulse animation */}
                          <circle cx="110" cy="60" r="4" fill="#66cc00" className="animate-ping opacity-75" />
                          <circle cx="110" cy="60" r="3" fill="#66cc00" />
                          <text x="115" y="55" fill="#66cc00" fontSize="9" fontFamily="monospace">URL: Safe</text>

                          <circle cx="260" cy="45" r="4" fill="#66cc00" className="animate-ping opacity-75" />
                          <circle cx="260" cy="45" r="3" fill="#66cc00" />
                          <text x="265" y="40" fill="#66cc00" fontSize="9" fontFamily="monospace">Geo-IP: 18+</text>
                        </svg>
                      </div>

                      {/* Live Status Indicators */}
                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                          <span className="text-slate-400">Licence MGA:</span>
                          <span className="text-kyp-lime font-bold">VERIFIED</span>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                          <span className="text-slate-400">Underage Shield:</span>
                          <span className="text-kyp-lime font-bold">ACTIVE</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentTab.id === "payments" && (
                    <div className="space-y-4 text-xs font-mono">
                      {/* Top Metric Header */}
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                        <div>
                          <div className="text-[10px] text-slate-400">SETTLEMENT VELOCITY &amp; SCHEME RADAR</div>
                          <div className="font-bold text-white text-sm">Apex Velocity Payments</div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-kyp-lime/20 text-kyp-lime border border-kyp-lime/40">
                          BRAM / VIRP: 0 FINES
                        </span>
                      </div>

                      {/* Moving Waveform Graph with Moving Laser Scan */}
                      <div className="relative h-44 rounded-xl bg-black/60 border border-[#033653] p-2 overflow-hidden flex items-center justify-center">
                        {/* Background Grid */}
                        <div className="absolute inset-0 flex flex-col justify-between p-3 pointer-events-none opacity-20">
                          <div className="border-b border-dashed border-slate-400 w-full" />
                          <div className="border-b border-dashed border-slate-400 w-full" />
                          <div className="border-b border-dashed border-slate-400 w-full" />
                        </div>

                        {/* Moving Vertical Laser Scan Bar */}
                        <div
                          className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-kyp-lime to-transparent z-20 pointer-events-none"
                          style={{
                            animation: "laser-scan 3.5s ease-in-out infinite alternate",
                            boxShadow: "0 0 10px #66cc00",
                          }}
                        />

                        {/* SVG Dynamic Waveform */}
                        <svg viewBox="0 0 400 120" className="w-full h-full relative z-10 overflow-visible">
                          <defs>
                            <linearGradient id="payments-area" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#66cc00" stopOpacity="0.35" />
                              <stop offset="100%" stopColor="#033653" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>

                          {/* Animated Area Fill */}
                          <path
                            d="M 0,90 Q 70,30 140,70 T 260,50 T 400,30 L 400,120 L 0,120 Z"
                            fill="url(#payments-area)"
                          >
                            <animate
                              attributeName="d"
                              dur="4s"
                              repeatCount="indefinite"
                              values="
                                M 0,90 Q 70,30 140,70 T 260,50 T 400,30 L 400,120 L 0,120 Z;
                                M 0,70 Q 70,80 140,40 T 260,75 T 400,50 L 400,120 L 0,120 Z;
                                M 0,90 Q 70,30 140,70 T 260,50 T 400,30 L 400,120 L 0,120 Z
                              "
                            />
                          </path>

                          {/* Animated Top Wave Stroke */}
                          <path
                            d="M 0,90 Q 70,30 140,70 T 260,50 T 400,30"
                            fill="none"
                            stroke="#66cc00"
                            strokeWidth="2.5"
                          >
                            <animate
                              attributeName="d"
                              dur="4s"
                              repeatCount="indefinite"
                              values="
                                M 0,90 Q 70,30 140,70 T 260,50 T 400,30;
                                M 0,70 Q 70,80 140,40 T 260,75 T 400,50;
                                M 0,90 Q 70,30 140,70 T 260,50 T 400,30
                              "
                            />
                          </path>

                          {/* Data node indicator */}
                          <circle cx="260" cy="50" r="4" fill="#ffffff" stroke="#66cc00" strokeWidth="2" />
                          <text x="245" y="35" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="monospace">
                            $1.2M/hr &bull; 24/100
                          </text>
                        </svg>
                      </div>

                      {/* Live Status Indicators */}
                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                          <span className="text-slate-400">Mastercard BRAM:</span>
                          <span className="text-kyp-lime font-bold">ZERO FINES</span>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                          <span className="text-slate-400">Decision SLA:</span>
                          <span className="text-kyp-mint font-bold">&lt; 30 SECONDS</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentTab.id === "acquirers" && (
                    <div className="space-y-4 text-xs font-mono">
                      {/* Top Metric Header */}
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                        <div>
                          <div className="text-[10px] text-slate-400">SUB-MERCHANT HIERARCHY TREE &bull; TC40</div>
                          <div className="font-bold text-white text-sm">1,250 Merchants Monitored</div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-kyp-lime/20 text-kyp-lime border border-kyp-lime/40">
                          TC40 &lt; 0.65% PASS
                        </span>
                      </div>

                      {/* Animated Node Hierarchy Tree */}
                      <div className="relative h-44 rounded-xl bg-black/60 border border-[#033653] p-2 overflow-hidden flex items-center justify-center">
                        <svg viewBox="0 0 380 140" className="w-full h-full overflow-visible">
                          {/* Connection Lines from Root Acquirer to PayFac to Sub-Merchants */}
                          <path
                            d="M 50,70 L 150,70 M 150,70 L 260,30 M 150,70 L 260,70 M 150,70 L 260,110"
                            stroke="#66cc00"
                            strokeWidth="1.8"
                            strokeDasharray="4 3"
                            fill="none"
                            className="opacity-70"
                          />

                          {/* Animated Moving Pulses Along Connections */}
                          <circle r="3" fill="#66cc00">
                            <animateMotion path="M 50,70 L 150,70" dur="1.5s" repeatCount="indefinite" />
                          </circle>
                          <circle r="2.5" fill="#66cc00">
                            <animateMotion path="M 150,70 L 260,30" dur="2s" repeatCount="indefinite" />
                          </circle>
                          <circle r="2.5" fill="#66cc00">
                            <animateMotion path="M 150,70 L 260,70" dur="1.8s" repeatCount="indefinite" />
                          </circle>
                          <circle r="2.5" fill="#66cc00">
                            <animateMotion path="M 150,70 L 260,110" dur="2.2s" repeatCount="indefinite" />
                          </circle>

                          {/* Root Acquirer Node */}
                          <g transform="translate(50, 70)">
                            <circle r="16" fill="#033653" stroke="#66cc00" strokeWidth="2" />
                            <circle r="6" fill="#66cc00" />
                            <text x="0" y="26" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Acquirer</text>
                          </g>

                          {/* PayFac Mid Node */}
                          <g transform="translate(150, 70)">
                            <circle r="14" fill="#033653" stroke="#66cc00" strokeWidth="2" />
                            <circle r="4" fill="#c6f5ef" />
                            <text x="0" y="24" textAnchor="middle" fill="#c6f5ef" fontSize="9">PayFac</text>
                          </g>

                          {/* Sub-Merchant 1 */}
                          <g transform="translate(260, 30)">
                            <circle r="11" fill="#082b40" stroke="#66cc00" strokeWidth="1.5" />
                            <circle r="3" fill="#66cc00" />
                            <text x="18" y="4" fill="#ffffff" fontSize="8">Sub-Merchant A (0.12%)</text>
                          </g>

                          {/* Sub-Merchant 2 */}
                          <g transform="translate(260, 70)">
                            <circle r="11" fill="#082b40" stroke="#66cc00" strokeWidth="1.5" />
                            <circle r="3" fill="#66cc00" />
                            <text x="18" y="4" fill="#ffffff" fontSize="8">Sub-Merchant B (0.24%)</text>
                          </g>

                          {/* Sub-Merchant 3 */}
                          <g transform="translate(260, 110)">
                            <circle r="11" fill="#082b40" stroke="#66cc00" strokeWidth="1.5" />
                            <circle r="3" fill="#66cc00" />
                            <text x="18" y="4" fill="#ffffff" fontSize="8">Sub-Merchant C (0.08%)</text>
                          </g>
                        </svg>
                      </div>

                      {/* Live Status Indicators */}
                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                          <span className="text-slate-400">Rogue URL Scan:</span>
                          <span className="text-kyp-lime font-bold">0 MUTATIONS</span>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                          <span className="text-slate-400">Coverage:</span>
                          <span className="text-white font-bold">100% PORTFOLIO</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentTab.id === "banking" && (
                    <div className="space-y-4 text-xs font-mono">
                      {/* Top Metric Header */}
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                        <div>
                          <div className="text-[10px] text-slate-400">UBO CONTAGION GRAPH &bull; 180+ REGISTRIES</div>
                          <div className="font-bold text-white text-sm">Apex Global Holdings SA</div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-kyp-lime/20 text-kyp-lime border border-kyp-lime/40">
                          UBO 38.5% VERIFIED
                        </span>
                      </div>

                      {/* Animated Contagion Cluster Visualizer */}
                      <div className="relative h-44 rounded-xl bg-black/60 border border-[#033653] p-2 overflow-hidden flex items-center justify-center">
                        <svg viewBox="0 0 380 140" className="w-full h-full overflow-visible">
                          {/* Outer Orbit Rings */}
                          <circle cx="190" cy="70" r="55" fill="none" stroke="#0d4e75" strokeWidth="1" strokeDasharray="3 3" />
                          <circle cx="190" cy="70" r="30" fill="none" stroke="#66cc00" strokeWidth="0.8" opacity="0.4" />

                          {/* Radial Connecting Rays */}
                          <line x1="190" y1="70" x2="135" y2="45" stroke="#66cc00" strokeWidth="1.5" />
                          <line x1="190" y1="70" x2="245" y2="45" stroke="#66cc00" strokeWidth="1.5" />
                          <line x1="190" y1="70" x2="150" y2="105" stroke="#66cc00" strokeWidth="1.8" />
                          <line x1="190" y1="70" x2="230" y2="105" stroke="#66cc00" strokeWidth="1.5" />

                          {/* Animated moving photons */}
                          <circle r="3" fill="#66cc00">
                            <animateMotion path="M 190,70 L 150,105" dur="1.8s" repeatCount="indefinite" />
                          </circle>
                          <circle r="2.5" fill="#c6f5ef">
                            <animateMotion path="M 190,70 L 245,45" dur="2.2s" repeatCount="indefinite" />
                          </circle>

                          {/* Center Entity Node */}
                          <g transform="translate(190, 70)">
                            <circle r="18" fill="#033653" stroke="#66cc00" strokeWidth="2.5" />
                            <circle r="6" fill="#c6f5ef" />
                            <text x="0" y="32" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Primary Target</text>
                          </g>

                          {/* Satellite Holding Node 1 */}
                          <g transform="translate(135, 45)">
                            <circle r="10" fill="#0b3751" stroke="#66cc00" strokeWidth="1.5" />
                            <circle r="3" fill="#66cc00" />
                            <text x="-14" y="-12" fill="#c6f5ef" fontSize="8">Holding SA (LU)</text>
                          </g>

                          {/* Satellite Holding Node 2 */}
                          <g transform="translate(245, 45)">
                            <circle r="10" fill="#0b3751" stroke="#66cc00" strokeWidth="1.5" />
                            <circle r="3" fill="#66cc00" />
                            <text x="0" y="-12" fill="#c6f5ef" fontSize="8">Fintech BV (NL)</text>
                          </g>

                          {/* Controlling UBO Node */}
                          <g transform="translate(150, 105)">
                            <circle r="12" fill="#0b3751" stroke="#66cc00" strokeWidth="2" />
                            <circle r="4" fill="#66cc00" />
                            <text x="-10" y="24" fill="#66cc00" fontSize="8" fontWeight="bold">UBO: Marcus V. (38.5%)</text>
                          </g>

                          {/* Clean Sanctions Match */}
                          <g transform="translate(230, 105)">
                            <circle r="10" fill="#0b3751" stroke="#66cc00" strokeWidth="1.5" />
                            <circle r="3" fill="#66cc00" />
                            <text x="14" y="16" fill="#ffffff" fontSize="8">OFAC / EU: Clean</text>
                          </g>
                        </svg>
                      </div>

                      {/* Live Status Indicators */}
                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                          <span className="text-slate-400">Registry Delta:</span>
                          <span className="text-kyp-lime font-bold">0 DISCREPANCIES</span>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                          <span className="text-slate-400">PEP Resolution:</span>
                          <span className="text-white font-bold">PASS &bull; NO MATCH</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentTab.id === "marketplaces" && (
                    <div className="space-y-4 text-xs font-mono">
                      {/* Top Metric Header */}
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                        <div>
                          <div className="text-[10px] text-slate-400">DAC7 SELLER INTAKE &bull; SPLIT-PAYOUTS</div>
                          <div className="font-bold text-white text-sm">Storefront Sweeper Active</div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-kyp-lime/20 text-kyp-lime border border-kyp-lime/40">
                          DAC7: 100% COMPLIANT
                        </span>
                      </div>

                      {/* Dynamic Bar Graph with Moving Payout Heights */}
                      <div className="relative h-44 rounded-xl bg-black/60 border border-[#033653] p-4 overflow-hidden flex items-end justify-between gap-3">
                        {/* 6 Animated Dynamic Bars */}
                        {[
                          { day: "Mon", height: "65%", val: "€140K", pass: true },
                          { day: "Tue", height: "85%", val: "€210K", pass: true },
                          { day: "Wed", height: "50%", val: "€115K", pass: true },
                          { day: "Thu", height: "92%", val: "€260K", pass: true },
                          { day: "Fri", height: "78%", val: "€195K", pass: true },
                          { day: "Sat", height: "88%", val: "€240K", pass: true },
                        ].map((b, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end z-10">
                            <span className="text-[9px] text-kyp-lime font-bold">{b.val}</span>
                            <div className="w-full bg-slate-800/80 rounded-t-lg h-full flex items-end p-0.5 overflow-hidden">
                              <motion.div
                                animate={{
                                  height: [b.height, `${parseInt(b.height) - 15}%`, `${parseInt(b.height) + 10}%`, b.height],
                                }}
                                transition={{
                                  duration: 3 + i * 0.5,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                                className="w-full rounded-t bg-gradient-to-t from-kyp-navy via-kyp-teal to-kyp-lime"
                              />
                            </div>
                            <span className="text-[9px] text-slate-400">{b.day}</span>
                          </div>
                        ))}
                      </div>

                      {/* Live Status Indicators */}
                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                          <span className="text-slate-400">EU VAT Validation:</span>
                          <span className="text-kyp-lime font-bold">100% PASS</span>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                          <span className="text-slate-400">Storefront Terms:</span>
                          <span className="text-white font-bold">VERIFIED</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
