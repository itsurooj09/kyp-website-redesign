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

// 4 Signature Pillars matching SEON's clean 4-column architecture in Image 2
const SEON_COLUMNS: MegaMenuColumn[] = [
  {
    key: "onboarding",
    title: "ONBOARDING & KYB",
    icon: <ShieldAlert className="w-4 h-4 text-sky-600" />,
    badgeColor: "text-sky-700 bg-sky-50 border-sky-200",
    items: [
      { title: "AI-Powered KYB Intake", href: routes.onboarding, desc: "Instant extraction & discrepancy checks before submission" },
      { title: "OCR Document Verification", href: routes.onboarding, desc: "Articles of association & registry cross-checks" },
      { title: "Digital Registry Lookup", href: routes.platform, desc: "Live API access to 180+ global registries" },
      { title: "Smart Intake Questionnaires", href: routes.onboarding, desc: "Policy-tailored partner verification forms" },
      { title: "Pre-Screening Radar", href: routes.platform, desc: "Proactive fraud & bot entity detection" },
    ],
  },
  {
    key: "monitoring",
    title: "CONTINUOUS SURVEILLANCE",
    icon: <Activity className="w-4 h-4 text-emerald-600" />,
    badgeColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    items: [
      { title: "Volumetric Monitoring", href: routes.platform, desc: "Real-time payment volume & velocity anomaly detection" },
      { title: "WebCompli™ Scheme Crawler", href: routes.platform, desc: "Automated Mastercard BRAM & Visa VIRP surveillance" },
      { title: "Merchant Behavioural Shifts", href: routes.platform, desc: "Detect unauthorized product drift & URL redirects" },
      { title: "24/7 Regulatory Blacklist Alerting", href: routes.platform, desc: "Immediate warning when partners breach compliance" },
      { title: "Automated Policy Engine", href: routes.platform, desc: "Custom threshold rules per tier and portfolio" },
    ],
  },
  {
    key: "aml",
    title: "AML & INVESTIGATIONS",
    icon: <Layers className="w-4 h-4 text-purple-600" />,
    badgeColor: "text-purple-700 bg-purple-50 border-purple-200",
    items: [
      { title: "AML Compliance & Screening", href: routes.aml, desc: "Global OFAC, EU, UN, and UK HMT sanctions lists synced 24/7" },
      { title: "PEP & Adverse Media Scanning", href: routes.aml, desc: "Autonomous news & regulatory gazette analysis" },
      { title: "KYP Graph Intelligence™", href: routes.platform, desc: "Unravel multi-tier holding companies & circular equity", badge: "Interactive" },
      { title: "UBO Resolution Engine", href: routes.platform, desc: "38.5%+ controlling shareholder detection" },
      { title: "Case Management Workspace", href: routes.platform, desc: "Unified evidence timeline & analyst notes" },
    ],
  },
  {
    key: "audit",
    title: "AUDIT & REPORTING",
    icon: <FileCheck2 className="w-4 h-4 text-blue-600" />,
    badgeColor: "text-blue-700 bg-blue-50 border-blue-200",
    items: [
      { title: "60-Second Audit Dossier", href: routes.platform, desc: "Regulator-ready chronological compliance pack" },
      { title: "Cryptographic SHA-256 Trails", href: routes.platform, desc: "100% defensible immutable activity logs" },
      { title: "SAR / STR Reporting Hub", href: routes.aml, desc: "Automated regulatory disclosure formatting" },
      { title: "Sponsor Bank Oversight", href: routes.platform, desc: "Exportable partner oversight packages" },
      { title: "Investigate with AI", href: routes.platform, desc: "Natural language query over merchant ecosystem" },
    ],
  },
];

export default function MegaMenu({ category, isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  // For Platform or Use Cases, show the comprehensive 4-column SEON-inspired mega menu
  const isPlatformOrSolutions = category.title === "Platform" || category.title === "Use Cases";

  return (
    <div
      className="absolute left-0 right-0 top-full w-full bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-2xl py-8 transition-all duration-200 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {isPlatformOrSolutions ? (
          /* SEON Style 4 Columns exactly matching Image 2 */
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SEON_COLUMNS.map((col) => (
                <div key={col.key} className="space-y-4">
                  {/* Column Header matching SEON Image 2 */}
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
                          <span className="text-sm font-semibold text-slate-700 group-hover:text-emerald-700 transition-colors flex items-center gap-2">
                            {item.title}
                            {item.badge && (
                              <span className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                                {item.badge}
                              </span>
                            )}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
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
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>KYP Enterprise Risk Sentinel &bull; 100% Always-On Surveillance</span>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href={routes.onboarding}
                  onClick={onClose}
                  className="font-semibold text-slate-700 hover:text-emerald-700 transition-colors flex items-center gap-1"
                >
                  <span>Explore AI Onboarding Spec</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={routes.bookDemo}
                  onClick={onClose}
                  className="px-4 py-1.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* General Category Layout (Industries / Resources / Company) */
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
                          <span className="text-sm font-semibold text-slate-700 group-hover:text-emerald-700 transition-colors flex items-center gap-2">
                            {item.title}
                            {item.badge && (
                              <span className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                                {item.badge}
                              </span>
                            )}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                        </div>
                        {item.description && (
                          <p className="text-xs text-slate-400 mt-0.5 line-clamp-2">
                            {item.description}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Highlight Box */}
            <div className="col-span-12 lg:col-span-4 border-l border-slate-100 pl-0 lg:pl-8">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold uppercase">
                  <Sparkles className="w-3 h-3" />
                  Regulatory Leadership
                </span>
                <h4 className="text-base font-bold text-slate-900">
                  Defending Portfolios Against $100k+ Card Scheme Violations
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  How KYP&apos;s WebCompli™ automated crawling eliminates Mastercard BRAM and Visa VIRP non-compliance for payment institutions.
                </p>
                <div className="pt-2">
                  <Link
                    href={routes.whitepapers}
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    <span>Read Whitepaper</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
