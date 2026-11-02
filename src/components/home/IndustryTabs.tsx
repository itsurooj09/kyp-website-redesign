"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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

  const currentTab = TABS_DATA.find((t) => t.id === activeTabId) || TABS_DATA[0];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/80 border-b border-slate-200/80 relative overflow-hidden">
      {/* Background grid accent */}
      <div className="absolute inset-0 kyp-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header Section matching Image 1 */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c6f5ef] text-[#033653] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INDUSTRY COVERAGE &bull; TAILORED PROTOCOLS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
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

        {/* Tab Content Card (Light Theme 2-Column Showcase) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Narrative & Workflows */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {currentTab.regulatoryBadges.map((badge, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md bg-[#c6f5ef] border border-[#6fd3c4]/40 text-[#033653] text-[10px] font-mono font-bold uppercase"
                      >
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

                {/* 3-Step Tailored Workflow */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Specialized Operational Pipeline:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {currentTab.workflow.map((wf, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-[#033653] font-bold uppercase">
                            STEP {wf.step}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#66cc00]" />
                        </div>
                        <h4 className="text-xs font-bold text-slate-900">{wf.action}</h4>
                        <p className="text-[11px] text-slate-500 leading-normal">{wf.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Impact KPIs & CTA */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-6 text-left">
                    {currentTab.metrics.map((m, i) => (
                      <div key={i}>
                        <div className="text-lg font-bold text-slate-900 font-mono">{m.value}</div>
                        <div className="text-[11px] text-slate-500">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={currentTab.href}
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-sm hover:shadow transition-all group"
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

                  {/* Dynamic Simulation Content per Industry */}
                  {currentTab.id === "igaming" && (
                    <div className="space-y-3 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                        <div className="flex justify-between text-slate-400 text-[10px]">
                          <span>OPERATOR LICENCE REGISTRY</span>
                          <span className="text-[#66cc00]">VERIFIED</span>
                        </div>
                        <div className="font-bold text-white">BetStream International PLC</div>
                        <div className="text-[10px] text-slate-400">Licence MGA/B2C/482/2019 &bull; Clean Sanctions</div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1.5">
                        <div className="flex justify-between text-slate-400 text-[10px]">
                          <span>AFFILIATE URL SWEEPER</span>
                          <span className="text-[#66cc00]">0 REDIRECT DRIFT</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-300">Geo-IP Gateway Rules:</span>
                          <span className="text-[#66cc00] font-bold">Compliant (100%)</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-300">Underage Protection Tag:</span>
                          <span className="text-[#66cc00] font-bold">Active 18+</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-[10px] flex items-center justify-between">
                        <span>Regulator Dossier Ready:</span>
                        <span className="font-bold">60-Sec Audit SLA</span>
                      </div>
                    </div>
                  )}

                  {currentTab.id === "payments" && (
                    <div className="space-y-3 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                        <div className="flex justify-between text-slate-400 text-[10px]">
                          <span>CARD SCHEME COMPLIANCE SWEEP</span>
                          <span className="text-[#66cc00]">PASS</span>
                        </div>
                        <div className="font-bold text-white">Apex Velocity Payments Ltd</div>
                        <div className="text-[10px] text-slate-400">Mastercard BRAM &bull; Visa VIRP &bull; 0 Fines</div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                        <div className="text-[10px] text-slate-400">SETTLEMENT VELOCITY TELEMETRY</div>
                        <div className="flex items-center gap-2 pt-1">
                          <div className="flex-1 bg-slate-700 h-2 rounded-full overflow-hidden">
                            <div className="bg-emerald-400 h-full w-[24%]" />
                          </div>
                          <span className="font-bold text-white">24/100 Risk</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-sky-950/60 border border-sky-500/40 text-sky-300 text-[10px] flex items-center justify-between">
                        <span>Automated Sweep SLA:</span>
                        <span className="font-bold">&lt; 30 Seconds</span>
                      </div>
                    </div>
                  )}

                  {currentTab.id === "acquirers" && (
                    <div className="space-y-3 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                        <div className="flex justify-between text-slate-400 text-[10px]">
                          <span>SUB-MERCHANT PORTFOLIO HEALTH</span>
                          <span className="text-[#66cc00]">100% COVERED</span>
                        </div>
                        <div className="font-bold text-white">1,250 Active Sub-Merchants</div>
                        <div className="text-[10px] text-slate-400">TC40 Chargeback Threshold: All &lt;0.65%</div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                        <div className="text-[10px] text-slate-400">PRODUCT MUTATION RADAR</div>
                        <p className="text-[11px] text-slate-300">Continuous crawler checks landing pages for unauthorized inventory drift post-onboarding.</p>
                      </div>
                    </div>
                  )}

                  {currentTab.id === "banking" && (
                    <div className="space-y-3 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                        <div className="flex justify-between text-slate-400 text-[10px]">
                          <span>GRAPH CONTAGION RESOLUTION</span>
                          <span className="text-purple-400">RESOLVED</span>
                        </div>
                        <div className="font-bold text-white">Apex Global Holdings SA</div>
                        <div className="text-[10px] text-slate-400">Controlling UBO: Marcus Vance (38.5%) &bull; Clean PEP</div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                        <div className="text-[10px] text-slate-400">180+ GLOBAL REGISTRIES SYNC</div>
                        <p className="text-[11px] text-slate-300">Articles of Association &amp; Certificate of Incorporation verified with 0 discrepancies.</p>
                      </div>
                    </div>
                  )}

                  {currentTab.id === "marketplaces" && (
                    <div className="space-y-3 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                        <div className="flex justify-between text-slate-400 text-[10px]">
                          <span>DAC7 SELLER VERIFICATION</span>
                          <span className="text-[#66cc00]">COMPLIANT</span>
                        </div>
                        <div className="font-bold text-white">Seller Intake Questionnaire Engine</div>
                        <div className="text-[10px] text-slate-400">Tax ID &amp; EU VAT cross-checked automatically</div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                        <div className="text-[10px] text-slate-400">STOREFRONT DISCLOSURE SWEEPER</div>
                        <p className="text-[11px] text-slate-300">Refund policies, legal entity notices, and inventory terms verified across 100% of sellers.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
