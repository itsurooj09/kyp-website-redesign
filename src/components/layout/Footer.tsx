"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Mail } from "lucide-react";
import { routes } from "@/lib/routes";
import KYPLogo from "@/components/common/KYPLogo";

export default function Footer() {
  const currentYear = 2026;

  // Exactly the 20 Scope of Work Pages
  const companyAndPlatformPages = [
    { label: "Home", href: routes.home },
    { label: "Platform", href: routes.platform },
    { label: "About KYP", href: routes.about },
    { label: "Careers", href: routes.careers },
    { label: "Contact", href: routes.contact },
    { label: "Privacy and Cookies", href: routes.privacy },
  ];

  const resourcePages = [
    { label: "FAQ", href: routes.faq },
    { label: "Insights", href: routes.insights },
    { label: "News", href: routes.news },
    { label: "Whitepapers", href: routes.whitepapers },
  ];

  const useCasesGroupA = [
    { label: "Onboarding", href: routes.onboarding },
    { label: "Portfolio Issuing monitoring", href: routes.issuingMonitoring },
    { label: "Anti Money Laundering", href: routes.aml },
    { label: "Automated Policy Continuous Monitoring Rules", href: routes.automatedPolicyRules },
    { label: "Website Compliance", href: routes.websiteCompliance },
  ];

  const useCasesGroupB = [
    { label: "Transaction monitoring", href: routes.transactionMonitoring },
    { label: "Illegal website traffic detection", href: routes.illegalTrafficDetection },
    { label: "ESG AI Alerting", href: routes.esgAlerting },
    { label: "Enhanced Compliance", href: routes.enhancedCompliance },
    { label: "Instant Audit Ready Reporting", href: routes.instantAuditReporting },
  ];

  return (
    <footer className="bg-[#000000] text-white border-t-2 border-[#033653] pt-16 pb-12 relative overflow-hidden select-none">
      {/* Subtle brand ambient glow */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[350px] bg-[#033653]/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[300px] bg-[#66cc00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 space-y-12">
        {/* Top Header Row: Clean Branding + Direct Action */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-10 border-b border-[#033653]/80">
          <div className="space-y-3 max-w-xl">
            <Link href={routes.home} className="inline-block">
              <KYPLogo className="h-9 w-auto" theme="dark" />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed">
              Risk and compliance continuous monitoring platform built for payments, iGaming, and fintech businesses.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#033653] border border-[#033653] text-xs font-mono text-white">
              <span className="w-2 h-2 rounded-full bg-[#66cc00] animate-pulse" />
              <span>Continuous Compliance Platform</span>
            </div>
            <Link
              href={routes.contact}
              className="px-6 py-2.5 rounded-full bg-[#66cc00] hover:bg-[#55b300] text-[#000000] text-xs font-bold transition-all shadow-md flex items-center gap-2"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4 Clean Columns strictly housing the 20 Scope Pages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-2">
          
          {/* Column 1: Core Platform & Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-[#66cc00] uppercase font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#66cc00]" />
              Platform &amp; Firm
            </h4>
            <ul className="space-y-2.5 text-xs">
              {companyAndPlatformPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-slate-300 hover:text-[#66cc00] transition-colors block py-0.5"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-[#66cc00] uppercase font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#66cc00]" />
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              {resourcePages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-slate-300 hover:text-[#66cc00] transition-colors block py-0.5"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Use Cases Part 1 */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-[#66cc00] uppercase font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#66cc00]" />
              Use Cases (01 - 05)
            </h4>
            <ul className="space-y-2.5 text-xs">
              {useCasesGroupA.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-slate-300 hover:text-[#66cc00] transition-colors block py-0.5"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Use Cases Part 2 */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-[#66cc00] uppercase font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#66cc00]" />
              Use Cases (06 - 10)
            </h4>
            <ul className="space-y-2.5 text-xs">
              {useCasesGroupB.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-slate-300 hover:text-[#66cc00] transition-colors block py-0.5"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Clean Copyright & Legal Bottom Bar */}
        <div className="pt-8 border-t border-[#033653]/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} Know Your Partner (KYP). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href={routes.privacy} className="hover:text-white transition-colors">
              Privacy and Cookies
            </Link>
            <Link href={routes.contact} className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
