import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Clock, ShieldCheck, ExternalLink } from "lucide-react";
import { routes } from "@/lib/routes";
import KYPLogo from "@/components/common/KYPLogo";

export default function Footer() {
  const currentYear = 2026;

  const platformLinks = [
    { label: "Platform Overview", href: routes.platformOverview },
    { label: "Graph Intelligence", href: routes.platformGraphIntelligence },
    { label: "Data & Integrations", href: routes.platformDataIntegrations },
    { label: "AI-Powered Onboarding", href: routes.platformAiOnboarding },
    { label: "Continuous Monitoring & Alerts", href: routes.platformMonitoringAlerts },
    { label: "Investigations & Audit Reporting", href: routes.platformEvidenceDecisions },
  ];

  const industryLinks = [
    { label: "iGaming & Gambling", href: routes.igaming },
    { label: "Payments & PSPs", href: routes.payments },
    { label: "Acquirers / Agents / Intermediaries", href: routes.acquirers },
    { label: "Banking & Financial Services", href: routes.banking },
    { label: "Fintech", href: routes.fintech },
    { label: "Marketplaces & Platforms", href: routes.marketplaces },
  ];

  const useCaseLinks = [
    { label: "Onboarding (AI-Powered)", href: routes.onboarding },
    { label: "Anti Money Laundering (AML)", href: routes.aml },
    { label: "Portfolio Issuing Monitoring", href: routes.issuingMonitoring },
    { label: "Automated Policy Rules", href: routes.automatedPolicyRules },
    { label: "Website Compliance (WebCompli)", href: routes.websiteCompliance },
    { label: "Transaction Monitoring", href: routes.transactionMonitoring },
    { label: "Illegal Traffic Detection", href: routes.illegalTrafficDetection },
    { label: "ESG AI Alerting", href: routes.esgAlerting },
    { label: "Enhanced Compliance (EDD)", href: routes.enhancedCompliance },
    { label: "Instant Audit Ready Reporting", href: routes.instantAuditReporting },
  ];

  const resourceLinks = [
    { label: "Insights Hub", href: routes.insights },
    { label: "Frequently Asked Questions", href: routes.faq },
    { label: "Latest News & Press", href: routes.news },
    { label: "Research & Whitepapers", href: routes.whitepapers },
  ];

  const companyLinks = [
    { label: "About KYP", href: routes.about },
    { label: "Careers", href: routes.careers },
    { label: "Contact Us", href: routes.contact },
    { label: "Privacy & Cookies", href: routes.privacy },
    { label: "Book a Demo", href: routes.bookDemo },
  ];

  return (
    <footer className="bg-black border-t border-kyp-teal/20 pt-16 pb-12 relative overflow-hidden kyp-grid-pattern">
      {/* Decorative ambient glows */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-kyp-navy/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-kyp-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Top Bar with Brand & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-kyp-teal/15 items-center">
          <div className="lg:col-span-5 space-y-4">
            <Link href={routes.home} className="inline-block">
              <KYPLogo className="h-9 w-auto" theme="dark" />
            </Link>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              KYP (Know Your Portfolio / Know Your Partner) empowers regulated firms, payment providers, and iGaming operators to proactively detect financial, regulatory, and reputational risks across their entire third-party ecosystem.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-wrap gap-4 items-center justify-start lg:justify-end">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-kyp-navy/40 border border-kyp-teal/20 text-xs text-gray-300">
              <ShieldCheck className="w-4 h-4 text-kyp-lime" />
              <span>ISO 27001 Information Security Certified</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-kyp-navy/40 border border-kyp-teal/20 text-xs text-gray-300">
              <span className="w-2 h-2 rounded-full bg-kyp-lime animate-pulse" />
              <span>Live Sentinel: Always-On Surveillance</span>
            </div>
            <Link
              href={routes.bookDemo}
              className="kyp-btn-primary px-5 py-2 rounded-lg text-xs font-semibold flex items-center gap-2"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Multi-column Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-12 border-b border-kyp-teal/15">
          {/* Column 1: Platform */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-kyp-teal uppercase font-semibold">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {platformLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-kyp-lime transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Industries */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-kyp-teal uppercase font-semibold">
              Industries
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {industryLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-kyp-lime transition-colors block opacity-80 hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Use Cases */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-kyp-teal uppercase font-semibold">
              Use Cases
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {useCaseLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-kyp-lime transition-colors block text-gray-300 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources & Company */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-xs font-mono tracking-widest text-kyp-teal uppercase font-semibold">
                Resources
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                {resourceLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="hover:text-kyp-lime transition-colors block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-mono tracking-widest text-kyp-teal uppercase font-semibold">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                {companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="hover:text-kyp-lime transition-colors block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 5: Official Contact & Headquarters */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h4 className="text-xs font-mono tracking-widest text-kyp-teal uppercase font-semibold">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-kyp-lime shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  33 Queen St, London, EC4R 1AP, United Kingdom
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-kyp-teal shrink-0" />
                <a
                  href="mailto:hello@kyp.io"
                  className="hover:text-kyp-lime transition-colors"
                >
                  hello@kyp.io
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-kyp-mint shrink-0" />
                <span>Monday – Friday: 8:00 – 18:00 GMT</span>
              </div>
            </div>

            <div className="pt-3">
              <div className="p-3 rounded-lg bg-kyp-navy/30 border border-kyp-teal/15 space-y-1.5">
                <div className="text-[11px] font-semibold text-white">Regulated & Institutional Inquiries</div>
                <p className="text-[10px] text-gray-400 leading-normal">
                  Dedicated compliance sandbox environments available upon request.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {currentYear} • Cinnte Solutions trading as Know Your Partner (KYP). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href={routes.about} className="hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
            <Link href={routes.privacy} className="hover:text-gray-400 transition-colors">
              Privacy & Cookies
            </Link>
            <Link href={routes.about} className="hover:text-gray-400 transition-colors">
              Security & ISO 27001
            </Link>
            <a
              href="https://kyp.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-kyp-lime transition-colors inline-flex items-center gap-1"
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
