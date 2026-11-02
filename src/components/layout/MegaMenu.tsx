"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldAlert,
  UserCheck,
  FileSearch,
  Activity,
  Layers,
  ArrowRight,
  Database,
  Building2,
  FileCheck2,
  Lock,
  Cpu,
  Sparkles,
  ExternalLink,
  CreditCard,
  Gamepad2,
  Landmark,
  Store,
  Compass,
  FileText
} from "lucide-react";
import { MegaMenuCategory } from "@/data/navigation";
import { routes } from "@/lib/routes";

interface MegaMenuProps {
  category: MegaMenuCategory;
  isOpen: boolean;
  onClose: () => void;
}

interface MegaMenuItem {
  title: string;
  href: string;
  desc: string;
  badge?: string;
}

interface MegaMenuColumn {
  key: string;
  title: string;
  icon: React.ReactNode;
  badgeColor: string;
  items: MegaMenuItem[];
}

// 1. USE CASES: The 10 Official Scope of Work Use Cases in 4 SEON Columns
const USE_CASE_COLUMNS: MegaMenuColumn[] = [
  {
    key: "onboarding-edd",
    title: "ONBOARDING & EDD",
    icon: <UserCheck className="w-4 h-4 text-emerald-600" />,
    badgeColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    items: [
      {
        title: "AI-Powered Business Onboarding",
        href: routes.onboarding,
        desc: "Automated document checks & questionnaire pre-screening",
        badge: "Core",
      },
      {
        title: "Enhanced Compliance (EDD)",
        href: routes.enhancedCompliance,
        desc: "In-depth due diligence for high-risk corporate structures",
      },
      {
        title: "Automated Policy Rules",
        href: routes.automatedPolicyRules,
        desc: "Configurable review thresholds tailored to your policies",
      },
    ],
  },
  {
    key: "portfolio-surveillance",
    title: "PORTFOLIO & ISSUING",
    icon: <CreditCard className="w-4 h-4 text-sky-600" />,
    badgeColor: "text-sky-700 bg-sky-50 border-sky-200",
    items: [
      {
        title: "Portfolio Issuing Monitoring",
        href: routes.issuingMonitoring,
        desc: "Continuous visibility for card issuing programmes & limits",
      },
      {
        title: "Transaction Monitoring",
        href: routes.transactionMonitoring,
        desc: "Detect velocity spikes, structuring, and payment anomalies",
      },
      {
        title: "ESG AI Alerting",
        href: routes.esgAlerting,
        desc: "Agentic research into governance controversies & ethics",
      },
    ],
  },
  {
    key: "aml-crime",
    title: "FINANCIAL CRIME & AML",
    icon: <Layers className="w-4 h-4 text-purple-600" />,
    badgeColor: "text-purple-700 bg-purple-50 border-purple-200",
    items: [
      {
        title: "Anti Money Laundering (AML)",
        href: routes.aml,
        desc: "Real-time sanctions, PEP lists, and adverse media scans",
        badge: "Live Sentinel",
      },
      {
        title: "Graph Intelligence™",
        href: routes.platformGraphIntelligence,
        desc: "Map complex UBO webs and circular corporate shareholdings",
        badge: "Interactive",
      },
    ],
  },
  {
    key: "web-audit",
    title: "WEB & AUDIT COMPLIANCE",
    icon: <FileCheck2 className="w-4 h-4 text-blue-600" />,
    badgeColor: "text-blue-700 bg-blue-50 border-blue-200",
    items: [
      {
        title: "Website Compliance (WebCompli)",
        href: routes.websiteCompliance,
        desc: "Mastercard BRAM & Visa VIRP automated policy crawl",
        badge: "Zero Fines",
      },
      {
        title: "Illegal Traffic Detection",
        href: routes.illegalTrafficDetection,
        desc: "Identify unauthorized redirects & blacklisted domains",
      },
      {
        title: "Instant Audit Ready Reporting",
        href: routes.instantAuditReporting,
        desc: "60-second regulator-ready dossiers for FCA & card schemes",
      },
    ],
  },
];

// 2. PLATFORM: Platform Core Architecture in 4 SEON Columns
const PLATFORM_COLUMNS: MegaMenuColumn[] = [
  {
    key: "core",
    title: "CORE ARCHITECTURE",
    icon: <Cpu className="w-4 h-4 text-sky-600" />,
    badgeColor: "text-sky-700 bg-sky-50 border-sky-200",
    items: [
      { title: "Platform Overview", href: routes.platformOverview, desc: "Unified risk sentinel connecting intake to audit" },
      { title: "Data & Integrations", href: routes.platformDataIntegrations, desc: "Live API access to 180+ global registries & watchlists" },
      { title: "Defensible Audit Trails", href: routes.platformEvidenceDecisions, desc: "SHA-256 cryptographically timestamped event logging" },
    ],
  },
  {
    key: "ai-intake",
    title: "AI INTAKE & VERIFICATION",
    icon: <ShieldAlert className="w-4 h-4 text-emerald-600" />,
    badgeColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    items: [
      { title: "AI-Powered Onboarding", href: routes.platformAiOnboarding, desc: "OCR validation & discrepancy detection before submission" },
      { title: "Smart Questionnaire Engine", href: routes.onboarding, desc: "Dynamic risk-tailored intake questionnaires" },
      { title: "Digital Registry Lookup", href: routes.platform, desc: "Instant corporate filings and registry validation" },
    ],
  },
  {
    key: "surveillance",
    title: "SURVEILLANCE & GRAPH",
    icon: <Activity className="w-4 h-4 text-purple-600" />,
    badgeColor: "text-purple-700 bg-purple-50 border-purple-200",
    items: [
      { title: "Graph Intelligence™", href: routes.platformGraphIntelligence, desc: "Interactive multi-tier entity resolution", badge: "Interactive" },
      { title: "Continuous Monitoring & Alerts", href: routes.platformMonitoringAlerts, desc: "24/7 corporate changes, sanctions, and director tracking" },
      { title: "WebCompli Scheme Sentinel", href: routes.websiteCompliance, desc: "Continuous merchant web surveillance" },
    ],
  },
  {
    key: "decisions",
    title: "AUDIT & REPORTING",
    icon: <FileCheck2 className="w-4 h-4 text-blue-600" />,
    badgeColor: "text-blue-700 bg-blue-50 border-blue-200",
    items: [
      { title: "60-Second Audit Dossier", href: routes.instantAuditReporting, desc: "Regulator-ready chronological compliance pack" },
      { title: "Case Management Workspace", href: routes.platformEvidenceDecisions, desc: "Unified evidence timeline & analyst triage" },
      { title: "Sponsor Bank Oversight", href: routes.platform, desc: "Exportable partner oversight packages" },
    ],
  },
];

// 3. INDUSTRIES: 4 Columns covering target risk sectors
const INDUSTRY_COLUMNS: MegaMenuColumn[] = [
  {
    key: "payments",
    title: "PAYMENTS & PSPS",
    icon: <CreditCard className="w-4 h-4 text-sky-600" />,
    badgeColor: "text-sky-700 bg-sky-50 border-sky-200",
    items: [
      { title: "Payments & PSPs", href: routes.payments, desc: "Merchant portfolio monitoring, chargeback alerts & BRAM/VIRP" },
      { title: "Acquirers & PayFacs", href: routes.acquirers, desc: "Oversight across ISOs, agents, and nested merchant portfolios" },
    ],
  },
  {
    key: "gaming",
    title: "IGAMING & GAMBLING",
    icon: <Gamepad2 className="w-4 h-4 text-emerald-600" />,
    badgeColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    items: [
      { title: "iGaming & Gambling", href: routes.igaming, desc: "Automate operator due diligence, affiliate tracking & licensing" },
      { title: "Illegal Traffic Monitoring", href: routes.illegalTrafficDetection, desc: "Block unauthorized affiliate redirect domains" },
    ],
  },
  {
    key: "banking",
    title: "FINANCIAL SERVICES",
    icon: <Landmark className="w-4 h-4 text-purple-600" />,
    badgeColor: "text-purple-700 bg-purple-50 border-purple-200",
    items: [
      { title: "Banking & Financial Services", href: routes.banking, desc: "Connected financial crime intelligence & continuous risk oversight" },
      { title: "Fintech Fast Growth", href: routes.fintech, desc: "API-first scalable KYB and sanctions screening" },
    ],
  },
  {
    key: "marketplaces",
    title: "PLATFORMS & MARKETPLACES",
    icon: <Store className="w-4 h-4 text-blue-600" />,
    badgeColor: "text-blue-700 bg-blue-50 border-blue-200",
    items: [
      { title: "Marketplaces & Platforms", href: routes.marketplaces, desc: "High-volume seller vetting, counterfeit detection & payouts" },
      { title: "Explore Sector Simulator", href: "/#industry-tabs", desc: "Interactive industry pipeline simulation", badge: "Interactive" },
    ],
  },
];

export default function MegaMenu({ category, isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  // Determine active column structure
  let columnsToRender = USE_CASE_COLUMNS;
  if (category.title === "Platform") {
    columnsToRender = PLATFORM_COLUMNS;
  } else if (category.title === "Industries") {
    columnsToRender = INDUSTRY_COLUMNS;
  } else if (category.title === "Use Cases" || category.title === "Solutions") {
    columnsToRender = USE_CASE_COLUMNS;
  } else {
    // For Resources or Company, use their standard section layout
    columnsToRender = [];
  }

  return (
    <div
      className="absolute left-0 right-0 top-full w-full bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-2xl py-8 transition-all duration-200 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {columnsToRender.length > 0 ? (
          /* SEON Style 4 Columns */
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {columnsToRender.map((col) => (
                <div key={col.key} className="space-y-4">
                  {/* Column Header */}
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                    <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                      {col.icon}
                    </div>
                    <span className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase">
                      {col.title}
                    </span>
                  </div>

                  {/* Column Link Items */}
                  <div className="space-y-1">
                    {col.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={onClose}
                        className="group block p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-150"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-slate-700 group-hover:text-[#033653] transition-colors flex items-center gap-2">
                            {item.title}
                            {item.badge && (
                              <span className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-[#c6f5ef] text-[#033653] border border-[#6fd3c4]/50 font-bold">
                                {item.badge}
                              </span>
                            )}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#66cc00] group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5 line-clamp-1 group-hover:text-slate-500">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Bar: Action Strip */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-slate-500 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#66cc00] animate-ping" />
                <span>KYP Enterprise Risk Sentinel &bull; 100% Always-On Surveillance</span>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href={routes.insights}
                  onClick={onClose}
                  className="font-semibold text-slate-700 hover:text-emerald-700 transition-colors flex items-center gap-1"
                >
                  <span>Browse KYP Insights & Whitepapers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={routes.bookDemo}
                  onClick={onClose}
                  className="px-4 py-1.5 rounded-full bg-[#000000] text-white font-bold hover:bg-[#033653] transition-colors shadow-sm"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* General Category Layout (Resources / Company) */
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.sections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase border-b border-slate-100 pb-2">
                    {section.title}
                  </div>
                  <div className="space-y-1">
                    {section.items.map((item, itemIdx) => (
                      <Link
                        key={itemIdx}
                        href={item.href}
                        onClick={onClose}
                        className="group block p-2.5 rounded-xl hover:bg-slate-50 transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-slate-700 group-hover:text-[#033653] transition-colors flex items-center gap-2">
                            {item.title}
                            {item.badge && (
                              <span className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-[#c6f5ef] text-[#033653] border border-[#6fd3c4]/50 font-bold">
                                {item.badge}
                              </span>
                            )}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#66cc00] group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                        </div>
                        {item.description && (
                          <p className="text-xs text-slate-400 mt-0.5 line-clamp-1 group-hover:text-slate-500">
                            {item.description}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Box on Right */}
            {category.featured && (
              <div className="col-span-12 lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  {category.featured.tag}
                </span>
                <h4 className="text-base font-bold text-slate-900 leading-snug">
                  {category.featured.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {category.featured.description}
                </p>
                <Link
                  href={category.featured.href}
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-emerald-700 transition-colors pt-1"
                >
                  <span>Explore Knowledge Hub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
