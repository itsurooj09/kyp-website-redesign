"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { routes } from "@/lib/routes";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleAccordion = (key: string) => {
    setActiveSection(activeSection === key ? null : key);
  };

  const mobileNav = [
    {
      title: "Use Cases",
      key: "useCases",
      items: [
        { title: "Onboarding", href: routes.onboarding },
        { title: "Portfolio Issuing monitoring", href: routes.issuingMonitoring },
        { title: "Anti Money Laundering", href: routes.aml },
        { title: "Automated Policy Continuous Monitoring Rules", href: routes.automatedPolicyRules },
        { title: "Website Compliance", href: routes.websiteCompliance },
        { title: "Transaction monitoring", href: routes.transactionMonitoring },
        { title: "Illegal website traffic detection", href: routes.illegalTrafficDetection },
        { title: "ESG AI Alerting", href: routes.esgAlerting },
        { title: "Enhanced Compliance", href: routes.enhancedCompliance },
        { title: "Instant Audit Ready Reporting", href: routes.instantAuditReporting },
      ],
    },
    {
      title: "Resources",
      key: "resources",
      items: [
        { title: "FAQ", href: routes.faq },
        { title: "Insights", href: routes.insights },
        { title: "News", href: routes.news },
        { title: "Whitepapers", href: routes.whitepapers },
      ],
    },
    {
      title: "Company",
      key: "company",
      items: [
        { title: "About KYP", href: routes.about },
        { title: "Careers", href: routes.careers },
        { title: "Contact", href: routes.contact },
        { title: "Privacy and Cookies", href: routes.privacy },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 top-24 bg-white/98 backdrop-blur-2xl z-40 overflow-y-auto px-6 py-6 border-t border-slate-200 lg:hidden shadow-2xl">
      <div className="flex flex-col space-y-4">
        
        {/* Direct Link to Platform */}
        <div className="border-b border-slate-100 pb-3">
          <Link
            href={routes.platform}
            onClick={onClose}
            className="block py-2 text-base font-semibold text-slate-900 hover:text-[#033653]"
          >
            Platform
          </Link>
        </div>

        {/* Dropdown Accordions strictly matching 20 pages scope */}
        {mobileNav.map((sec) => {
          const isExpanded = activeSection === sec.key;

          return (
            <div key={sec.key} className="border-b border-slate-100 pb-3">
              <button
                type="button"
                onClick={() => toggleAccordion(sec.key)}
                className="w-full flex items-center justify-between text-left py-2 font-medium text-slate-900 hover:text-[#033653] transition-colors"
                aria-expanded={isExpanded}
              >
                <span className="text-base font-semibold">{sec.title}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    isExpanded ? "rotate-180 text-[#66cc00]" : ""
                  }`}
                />
              </button>

              {isExpanded && (
                <div className="mt-2 pl-3 space-y-2 border-l-2 border-[#033653]">
                  {sec.items.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={onClose}
                      className="block py-1.5 text-sm text-slate-700 hover:text-[#033653] font-medium"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Action Button */}
        <div className="pt-4 space-y-3">
          <Link
            href={routes.contact}
            onClick={onClose}
            className="w-full bg-[#66cc00] hover:bg-[#55b300] text-[#000000] py-3.5 px-6 rounded-full text-sm font-extrabold flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4 text-[#000000]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
