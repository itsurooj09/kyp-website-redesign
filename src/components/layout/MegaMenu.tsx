"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { routes } from "@/lib/routes";

interface MegaMenuProps {
  category: {
    title: string;
    href: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

interface MenuLink {
  title: string;
  href: string;
  badge?: string;
}

interface MenuColumn {
  title: string;
  items: MenuLink[];
}

// 1. USE CASES: The 10 Official Scope of Work Use Cases in Clean SEON-Style Columns (NO ICONS)
const USE_CASES_MENU: MenuColumn[] = [
  {
    title: "ONBOARDING & EDD",
    items: [
      { title: "Onboarding (AI-Powered)", href: routes.onboarding },
      { title: "Enhanced Compliance (EDD)", href: routes.enhancedCompliance },
      { title: "Automated Policy Continuous Monitoring Rules", href: routes.automatedPolicyRules },
    ],
  },
  {
    title: "FINANCIAL CRIME & AML",
    items: [
      { title: "Anti Money Laundering (AML)", href: routes.aml },
      { title: "Transaction Monitoring", href: routes.transactionMonitoring },
      { title: "Portfolio Issuing Monitoring", href: routes.issuingMonitoring },
    ],
  },
  {
    title: "WEB & AUDIT COMPLIANCE",
    items: [
      { title: "Website Compliance (WebCompli™)", href: routes.websiteCompliance },
      { title: "Illegal Website Traffic Detection", href: routes.illegalTrafficDetection },
      { title: "ESG AI Alerting", href: routes.esgAlerting },
      { title: "Instant Audit Ready Reporting", href: routes.instantAuditReporting },
    ],
  },
];

// 2. PLATFORM: Core Platform Architecture (NO ICONS)
const PLATFORM_MENU: MenuColumn[] = [
  {
    title: "PLATFORM ARCHITECTURE",
    items: [
      { title: "Platform Overview", href: routes.platformOverview },
      { title: "Graph Intelligence Engine", href: routes.platformGraphIntelligence, badge: "Graph" },
      { title: "AI-Powered Intake & OCR", href: routes.platformAiOnboarding },
    ],
  },
  {
    title: "CONTINUOUS SURVEILLANCE",
    items: [
      { title: "24/7 Sentinel Surveillance", href: routes.platformMonitoringAlerts },
      { title: "180+ Global Registries Sync", href: routes.platformDataIntegrations },
      { title: "60-Second Audit Dossier Packs", href: routes.platformEvidenceDecisions },
    ],
  },
  {
    title: "REGULATORY ALIGNMENT",
    items: [
      { title: "Mastercard BRAM & Visa VIRP Shield", href: routes.websiteCompliance },
      { title: "FCA Defensible Audit Trails", href: routes.instantAuditReporting },
      { title: "Explore Platform Command", href: routes.platform },
    ],
  },
];

// 3. INDUSTRIES: SEON Style Sector Columns (NO ICONS)
const INDUSTRIES_MENU: MenuColumn[] = [
  {
    title: "PAYMENTS & FINTECH",
    items: [
      { title: "Payments & PSPs", href: routes.payments },
      { title: "Acquirers / Agents / Intermediaries", href: routes.acquirers },
      { title: "Banking & Financial Services", href: routes.banking },
      { title: "Fintech Fast-Growth", href: routes.fintech },
    ],
  },
  {
    title: "DIGITAL PLATFORMS",
    items: [
      { title: "iGaming & Gambling", href: routes.igaming },
      { title: "Marketplaces & High-Volume Sellers", href: routes.marketplaces },
      { title: "Affiliate & Partner Networks", href: routes.illegalTrafficDetection },
    ],
  },
  {
    title: "INTELLIGENCE DEPLOYMENT",
    items: [
      { title: "Interactive Industry Simulator", href: "/#industry-tabs" },
      { title: "The Risk Intelligence Graph™", href: routes.platformGraphIntelligence },
      { title: "Continuous Risk Telemetry", href: routes.platform },
    ],
  },
];

// 4. RESOURCES (Scope of Work Pages: Insights, News, Whitepapers, FAQ)
const RESOURCES_MENU: MenuColumn[] = [
  {
    title: "INTELLIGENCE DISPATCH",
    items: [
      { title: "Insights Hub", href: routes.insights },
      { title: "Latest News & Press", href: routes.news },
    ],
  },
  {
    title: "RESEARCH & REGULATION",
    items: [
      { title: "Research & Whitepapers", href: routes.whitepapers },
      { title: "Frequently Asked Questions (FAQ)", href: routes.faq },
    ],
  },
];

// 5. COMPANY (Scope of Work Pages: About KYP, Careers, Contact, Privacy and Cookies)
const COMPANY_MENU: MenuColumn[] = [
  {
    title: "ABOUT THE FIRM",
    items: [
      { title: "About KYP", href: routes.about },
      { title: "Careers & Culture", href: routes.careers },
    ],
  },
  {
    title: "INSTITUTIONAL CONTACT",
    items: [
      { title: "Contact Us & Global Offices", href: routes.contact },
      { title: "Privacy and Cookies Policy", href: routes.privacy },
      { title: "Book an Executive Demo", href: routes.bookDemo },
    ],
  },
];

export default function MegaMenu({ category, isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  let columnsToRender = USE_CASES_MENU;
  if (category.title === "Platform") {
    columnsToRender = PLATFORM_MENU;
  } else if (category.title === "Industries") {
    columnsToRender = INDUSTRIES_MENU;
  } else if (category.title === "Use Cases") {
    columnsToRender = USE_CASES_MENU;
  } else if (category.title === "Resources") {
    columnsToRender = RESOURCES_MENU;
  } else if (category.title === "Company") {
    columnsToRender = COMPANY_MENU;
  }

  const gridColsClass =
    columnsToRender.length === 2
      ? "grid-cols-1 md:grid-cols-2 max-w-3xl"
      : columnsToRender.length === 3
      ? "grid-cols-1 md:grid-cols-3 max-w-5xl"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl";

  return (
    <div
      className="absolute left-0 right-0 top-full w-full bg-white border-b border-slate-200 shadow-2xl py-9 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid ${gridColsClass} gap-8 lg:gap-12 mx-auto`}>
          {columnsToRender.map((col, cIdx) => (
            <div key={cIdx} className="space-y-4">
              {/* Clean Uppercase Section Header with Brand Underline Accent (SEON Style) */}
              <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#033653] uppercase">
                  {col.title}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#66cc00]" />
              </div>

              {/* Clean Text Links List WITHOUT ICONS */}
              <ul className="space-y-2.5">
                {col.items.map((item, iIdx) => (
                  <li key={iIdx}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center justify-between text-sm text-slate-700 hover:text-[#000000] font-medium py-1 transition-colors"
                    >
                      <span className="group-hover:translate-x-1 transition-transform flex items-center gap-2">
                        <span>{item.title}</span>
                        {item.badge && (
                          <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-[#c6f5ef] text-[#033653] border border-[#6fd3c4] font-bold">
                            {item.badge}
                          </span>
                        )}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#66cc00] opacity-0 group-hover:opacity-100 transition-all shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Micro Action Bar */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-500 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#66cc00] animate-pulse" />
            <span className="text-[11px]">KYP Enterprise Risk Intelligence &bull; Continuous Sentinel Monitoring</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={routes.insights}
              onClick={onClose}
              className="font-semibold text-slate-700 hover:text-[#033653] transition-colors flex items-center gap-1 text-[11px]"
            >
              <span>Explore Knowledge &amp; Insights</span>
              <ArrowRight className="w-3 h-3 text-[#66cc00]" />
            </Link>
            <Link
              href={routes.bookDemo}
              onClick={onClose}
              className="px-4 py-1.5 rounded-full bg-[#000000] text-white font-bold hover:bg-[#033653] transition-colors shadow-sm text-[11px]"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
