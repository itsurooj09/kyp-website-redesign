import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Clock, ShieldCheck, ExternalLink } from "lucide-react";
import { routes } from "@/lib/routes";
import KYPLogo from "@/components/common/KYPLogo";

export default function Footer() {
  const currentYear = 2026;

  // The 20 Scope of Work Pages cleanly organized
  const platformLinks = [
    { label: "Platform Overview", href: routes.platformOverview },
    { label: "The Risk Intelligence Graph™", href: routes.platformGraphIntelligence },
    { label: "AI Onboarding & Extraction", href: routes.platformAiOnboarding },
    { label: "Continuous Sentinel Surveillance", href: routes.platformMonitoringAlerts },
    { label: "Instant Audit Ready Reports", href: routes.platformEvidenceDecisions },
  ];

  const useCasesFirstHalf = [
    { label: "Onboarding (AI-Powered)", href: routes.onboarding },
    { label: "Enhanced Compliance (EDD)", href: routes.enhancedCompliance },
    { label: "Anti Money Laundering (AML)", href: routes.aml },
    { label: "Automated Policy Rules", href: routes.automatedPolicyRules },
    { label: "Website Compliance (WebCompli™)", href: routes.websiteCompliance },
  ];

  const useCasesSecondHalf = [
    { label: "Transaction Monitoring", href: routes.transactionMonitoring },
    { label: "Illegal Website Traffic Detection", href: routes.illegalTrafficDetection },
    { label: "ESG AI Alerting", href: routes.esgAlerting },
    { label: "Portfolio Issuing Monitoring", href: routes.issuingMonitoring },
    { label: "Instant Audit Ready Reporting", href: routes.instantAuditReporting },
  ];

  const resourcesAndCompany = [
    { label: "Insights Hub", href: routes.insights },
    { label: "Latest News & Perspectives", href: routes.news },
    { label: "Research & Whitepapers", href: routes.whitepapers },
    { label: "Frequently Asked Questions (FAQ)", href: routes.faq },
    { label: "About KYP", href: routes.about },
    { label: "Careers & Culture", href: routes.careers },
    { label: "Contact Us", href: routes.contact },
    { label: "Privacy and Cookies Policy", href: routes.privacy },
  ];

  return (
    <footer className="bg-[#000000] border-t-2 border-[#033653] pt-16 pb-12 relative overflow-hidden select-none text-white">
      {/* Subtle ambient lighting with brand palette */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#033653]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#66cc00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 space-y-12">
        {/* Top Header Strip: Brand Logo + Mission + CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-[#033653] items-center">
          <div className="lg:col-span-6 space-y-4">
            <Link href={routes.home} className="inline-block">
              <KYPLogo className="h-10 w-auto" theme="dark" />
            </Link>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              KYP (Know Your Portfolio / Know Your Partner) empowers regulated firms, payment providers, and iGaming operators to proactively detect financial, regulatory, and reputational risks across their entire third-party ecosystem.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-wrap gap-3.5 items-center justify-start lg:justify-end">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#033653]/50 border border-[#6fd3c4]/40 text-xs text-[#c6f5ef] font-mono">
              <ShieldCheck className="w-4 h-4 text-[#66cc00]" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#033653]/50 border border-[#6fd3c4]/40 text-xs text-[#c6f5ef] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#66cc00] animate-pulse" />
              <span>Live Sentinel Active</span>
            </div>
            <Link
              href={routes.bookDemo}
              className="px-5 py-2 rounded-full bg-[#66cc00] hover:bg-[#55b300] text-[#000000] text-xs font-bold transition-all shadow-md flex items-center gap-2"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 5-Column Navigation Grid covering the 20 Scope of Work Pages */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-4 border-b border-[#033653]">
          {/* Column 1: Platform */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#033653] pb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#66cc00]" />
              <h4 className="text-xs font-mono tracking-widest text-[#6fd3c4] uppercase font-bold">
                Platform
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs">
              {platformLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-[#66cc00] transition-colors block font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Use Cases (Part 1) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#033653] pb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#66cc00]" />
              <h4 className="text-xs font-mono tracking-widest text-[#6fd3c4] uppercase font-bold">
                Use Cases (01 - 05)
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs">
              {useCasesFirstHalf.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-[#66cc00] transition-colors block font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Use Cases (Part 2) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#033653] pb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#66cc00]" />
              <h4 className="text-xs font-mono tracking-widest text-[#6fd3c4] uppercase font-bold">
                Use Cases (06 - 10)
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs">
              {useCasesSecondHalf.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-[#66cc00] transition-colors block font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources & Company */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#033653] pb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#66cc00]" />
              <h4 className="text-xs font-mono tracking-widest text-[#6fd3c4] uppercase font-bold">
                Resources &amp; Firm
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs">
              {resourcesAndCompany.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-[#66cc00] transition-colors block font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Headquarters & Support */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 border-b border-[#033653] pb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#66cc00]" />
              <h4 className="text-xs font-mono tracking-widest text-[#6fd3c4] uppercase font-bold">
                Headquarters
              </h4>
            </div>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#66cc00] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  33 Queen St, London, EC4R 1AP, United Kingdom
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#6fd3c4] shrink-0" />
                <a
                  href="mailto:hello@kyp.io"
                  className="hover:text-[#66cc00] transition-colors font-medium"
                >
                  hello@kyp.io
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#c6f5ef] shrink-0" />
                <span>Mon – Fri: 8:00 – 18:00 GMT</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="p-3.5 rounded-xl bg-[#033653]/40 border border-[#033653] space-y-1">
                <div className="text-[11px] font-bold text-white">Regulated &amp; Institutional Inquiries</div>
                <p className="text-[10px] text-slate-400 leading-normal">
                  Dedicated compliance sandbox environments available upon request.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-2 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} &bull; Cinnte Solutions trading as Know Your Partner (KYP). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href={routes.about} className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href={routes.privacy} className="hover:text-white transition-colors">
              Privacy &amp; Cookies
            </Link>
            <Link href={routes.about} className="hover:text-white transition-colors">
              Security &amp; ISO 27001
            </Link>
            <a
              href="https://kyp.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#66cc00] transition-colors inline-flex items-center gap-1 text-[#6fd3c4]"
            >
              <span>Official kyp.io</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
