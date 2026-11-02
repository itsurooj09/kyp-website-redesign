"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  UserCheck, 
  ShieldAlert, 
  Globe, 
  FileCheck, 
  FileText, 
  HelpCircle, 
  Building2, 
  Lock,
  Layers,
  Activity
} from "lucide-react";
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
}

interface MenuColumn {
  title: string;
  icon: React.ReactNode;
  items: MenuLink[];
}

// Exactly the 10 Scope Use Cases formatted in Image 4 style (Teal icon + Uppercase Header + Clean Links)
const USE_CASES_COLUMNS: MenuColumn[] = [
  {
    title: "ONBOARDING & EDD",
    icon: <UserCheck className="w-5 h-5 text-[#66cc00]" />,
    items: [
      { title: "Onboarding", href: routes.onboarding },
      { title: "Enhanced Compliance", href: routes.enhancedCompliance },
      { title: "Automated Policy Continuous Monitoring Rules", href: routes.automatedPolicyRules },
    ],
  },
  {
    title: "AML & SURVEILLANCE",
    icon: <ShieldAlert className="w-5 h-5 text-[#66cc00]" />,
    items: [
      { title: "Anti Money Laundering", href: routes.aml },
      { title: "Transaction monitoring", href: routes.transactionMonitoring },
      { title: "Portfolio Issuing monitoring", href: routes.issuingMonitoring },
    ],
  },
  {
    title: "WEB INTEGRITY & ESG",
    icon: <Globe className="w-5 h-5 text-[#66cc00]" />,
    items: [
      { title: "Website Compliance", href: routes.websiteCompliance },
      { title: "Illegal website traffic detection", href: routes.illegalTrafficDetection },
      { title: "ESG AI Alerting", href: routes.esgAlerting },
    ],
  },
  {
    title: "AUDIT & PLATFORM",
    icon: <FileCheck className="w-5 h-5 text-[#66cc00]" />,
    items: [
      { title: "Instant Audit Ready Reporting", href: routes.instantAuditReporting },
      { title: "Platform Architecture", href: routes.platform },
      { title: "The Risk Intelligence Graph™", href: routes.platformGraphIntelligence },
    ],
  },
];

// Resources Pages strictly from the 20 Scope of Work Pages
const RESOURCES_COLUMNS: MenuColumn[] = [
  {
    title: "RESEARCH & INTEL",
    icon: <FileText className="w-5 h-5 text-[#66cc00]" />,
    items: [
      { title: "Insights", href: routes.insights },
      { title: "Whitepapers", href: routes.whitepapers },
    ],
  },
  {
    title: "NEWS & GUIDANCE",
    icon: <HelpCircle className="w-5 h-5 text-[#66cc00]" />,
    items: [
      { title: "News", href: routes.news },
      { title: "FAQ", href: routes.faq },
    ],
  },
];

// Company Pages strictly from the 20 Scope of Work Pages
const COMPANY_COLUMNS: MenuColumn[] = [
  {
    title: "ABOUT KYP",
    icon: <Building2 className="w-5 h-5 text-[#66cc00]" />,
    items: [
      { title: "About KYP", href: routes.about },
      { title: "Careers", href: routes.careers },
    ],
  },
  {
    title: "CONTACT & GOVERNANCE",
    icon: <Lock className="w-5 h-5 text-[#66cc00]" />,
    items: [
      { title: "Contact", href: routes.contact },
      { title: "Privacy and Cookies", href: routes.privacy },
    ],
  },
];

export default function MegaMenu({ category, isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  let columnsToRender = USE_CASES_COLUMNS;
  if (category.title === "Use Cases") {
    columnsToRender = USE_CASES_COLUMNS;
  } else if (category.title === "Resources") {
    columnsToRender = RESOURCES_COLUMNS;
  } else if (category.title === "Company") {
    columnsToRender = COMPANY_COLUMNS;
  }

  const gridColsClass =
    columnsToRender.length === 2
      ? "grid-cols-1 md:grid-cols-2 max-w-2xl"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl";

  return (
    <div
      className="absolute left-0 right-0 top-full w-full bg-white border-b border-slate-200/90 shadow-2xl py-10 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid ${gridColsClass} gap-8 lg:gap-12 mx-auto`}>
          {columnsToRender.map((col, cIdx) => (
            <div key={cIdx} className="space-y-4">
              
              {/* Header with Teal Icon + Uppercase Label matching Image 4 */}
              <div className="flex items-center gap-2.5 pb-2.5 border-b border-slate-100">
                {col.icon}
                <span className="text-xs font-mono font-bold tracking-wider text-[#033653] uppercase">
                  {col.title}
                </span>
              </div>

              {/* Clean, spacious vertical links list matching Image 4 */}
              <ul className="space-y-2.5">
                {col.items.map((item, iIdx) => (
                  <li key={iIdx}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center justify-between text-sm text-slate-700 hover:text-[#033653] font-medium py-1 transition-colors"
                    >
                      <span className="group-hover:translate-x-1.5 transition-transform group-hover:text-[#033653] group-hover:font-semibold">
                        {item.title}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#66cc00] opacity-0 group-hover:opacity-100 transition-all shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
