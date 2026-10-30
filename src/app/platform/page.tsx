import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Database, Activity, FileCheck, Network, Layers, GitBranch, Lock } from "lucide-react";
import { routes } from "@/lib/routes";
import { platformFeaturesData } from "@/data/platformFeatures";

import GraphIntelligence from "@/components/product/GraphIntelligence";
import PlatformFlow from "@/components/product/PlatformFlow";
import DashboardMockup from "@/components/product/DashboardMockup";
import OnboardingInterface from "@/components/product/OnboardingInterface";
import AuditInterface from "@/components/product/AuditInterface";

export const metadata: Metadata = {
  title: "The KYP Platform | From Onboarding to Audit",
  description:
    "KYP brings merchant onboarding, due diligence, continuous monitoring and audit reporting together in one platform, connecting multiple data sources to eliminate fragmented workflows.",
};

export default function PlatformPage() {
  return (
    <div className="w-full bg-black text-white relative overflow-hidden">
      
      {/* SECTION 1 – PLATFORM HERO */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-kyp-teal/15 kyp-grid-pattern">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-kyp-navy/35 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kyp-lime/10 border border-kyp-lime/30 text-xs font-mono text-kyp-lime mb-6 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            ENTERPRISE ARCHITECTURE SPECIFICATION
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.08]">
            From Onboarding to Audit.
          </h1>

          <p className="text-xl sm:text-2xl text-kyp-mint font-medium mt-4">
            Multiple data sources. One platform.
          </p>

          <p className="text-sm sm:text-base text-gray-300 mt-4 max-w-3xl mx-auto leading-relaxed">
            KYP brings merchant onboarding, due diligence, financial intelligence, continuous monitoring and audit reporting together into one unified platform, eliminating fragmented compliance workflows.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={routes.bookDemo}
              className="kyp-btn-primary px-8 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-lime-glow"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#graph-intelligence"
              className="kyp-btn-secondary px-8 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2"
            >
              <span>Explore Graph Intelligence</span>
            </a>
          </div>

          {/* Hero Dashboard Visual */}
          <div className="mt-14 max-w-5xl mx-auto">
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* SECTION 2 – PLATFORM OVERVIEW */}
      <section id="overview" className="py-20 lg:py-28 bg-kyp-charcoal/50 border-b border-kyp-teal/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono text-kyp-lime uppercase tracking-widest font-semibold">
              Ecosystem Overview
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2 tracking-tight">
              One Connected View of Merchant Risk Management.
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mt-3 leading-relaxed">
              Accelerate merchant onboarding with AI-assisted document validation, cross-check against 180+ global registries, monitor behavioural drift 24/7, and generate audit-ready reports on demand.
            </p>
          </div>

          {/* 12 Platform Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI-Powered Onboarding",
                desc: "Questionnaires tailored to policy with automated extraction and real-time partner feedback.",
              },
              {
                title: "Document Collection & Validation",
                desc: "OCR verification of passports, incorporation certificates, and utility statements.",
              },
              {
                title: "Corporate Intelligence",
                desc: "Direct API verification against official company registries across 180+ countries.",
              },
              {
                title: "Beneficial Ownership (UBO)",
                desc: "Graph-based unbundling of complex holding structures and multi-tier shareholding.",
              },
              {
                title: "Sanctions & PEP Screening",
                desc: "Continuous automated scanning across OFAC, EU, UN, UK HMT, and global watchlists.",
              },
              {
                title: "Adverse Media Scanning",
                desc: "Agentic NLP surveillance across international news feeds, legal gazettes, and court dockets.",
              },
              {
                title: "WebCompli™ Website Compliance",
                desc: "Automated crawling of terms, refund disclosures, and prohibited items for Mastercard BRAM & Visa VIRP.",
              },
              {
                title: "Regulatory Blacklist Monitoring",
                desc: "Proactive alerting if partners or merchants appear on official gambling or financial warnings.",
              },
              {
                title: "Transaction Monitoring",
                desc: "Integrated pattern anomaly detection and payment behaviour tracking where feeds are connected.",
              },
              {
                title: "Configurable Monitoring Rules",
                desc: "Tailor alert cadences, risk scoring weights, and escalation chains to internal policies.",
              },
              {
                title: "Automated Alerts & Triage",
                desc: "Context-rich alerts prioritizing material risk mutations over background false alarms.",
              },
              {
                title: "Exportable Audit Reports",
                desc: "Regulator-ready compliance packs generated in under 60 seconds with full evidentiary backing.",
              },
            ].map((cap, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-black border border-kyp-teal/20 hover:border-kyp-lime/40 transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-kyp-teal">CAPABILITY #{String(idx + 1).padStart(2, "0")}</span>
                  <CheckCircle2 className="w-4 h-4 text-kyp-lime" />
                </div>
                <h3 className="text-base font-bold text-white">{cap.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 – AI-POWERED ONBOARDING */}
      <section id="ai-onboarding" className="py-20 lg:py-28 border-b border-kyp-teal/15 kyp-grid-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-kyp-lime uppercase tracking-widest font-semibold">
              Section 01 &bull; Onboarding Ingestion
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2 tracking-tight">
              Onboard 10× Faster.
            </h2>
            <p className="text-lg text-kyp-mint font-medium mt-2">
              Resolve document issues before submission.
            </p>
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              KYP uses AI to check documents as business partners complete their onboarding questionnaires, helping them resolve issues before submission and reducing the back-and-forth your team needs to manage.
            </p>
          </div>

          {/* Workflow Badges: Collect -> Check -> Resolve -> Submit */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            {["Collect", "Check", "Resolve", "Submit"].map((step, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-lg bg-kyp-navy-surface border border-kyp-teal/25 text-white font-semibold">
                  {idx + 1}. {step}
                </span>
                {idx < 3 && <ArrowRight className="w-3.5 h-3.5 text-kyp-lime" />}
              </div>
            ))}
          </div>

          <OnboardingInterface />
        </div>
      </section>

      {/* SECTION 4 – DATA & INTEGRATIONS */}
      <section id="data-integrations" className="py-20 lg:py-28 bg-kyp-charcoal/40 border-b border-kyp-teal/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-kyp-teal uppercase tracking-widest font-semibold">
              Section 02 &bull; Intelligence Aggregation
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2 tracking-tight">
              Bring Your Data Together. Build a 360° View of Risk.
            </h2>
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              Bring together business information, external intelligence and internal systems to build a consolidated risk assessment without switching between multiple point-in-time tools.
            </p>
          </div>

          {/* Workflow: Connect -> Cross-reference -> Assess -> Monitor */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            {["Connect", "Cross-reference", "Assess", "Monitor"].map((step, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-lg bg-kyp-navy-surface border border-kyp-teal/25 text-kyp-teal font-semibold">
                  {idx + 1}. {step}
                </span>
                {idx < 3 && <ArrowRight className="w-3.5 h-3.5 text-kyp-teal" />}
              </div>
            ))}
          </div>

          <PlatformFlow />
        </div>
      </section>

      {/* SECTION 5 – GRAPH INTELLIGENCE */}
      <section id="graph-intelligence" className="py-20 lg:py-28 border-b border-kyp-teal/15 kyp-grid-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-kyp-mint uppercase tracking-widest font-semibold">
              Section 03 &bull; Entity Resolution &amp; Contagion
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2 tracking-tight">
              See the Connections Behind the Risks.
            </h2>
            <p className="text-lg text-kyp-mint font-medium mt-2">
              Understand relationships. Uncover hidden exposure. Make better-informed decisions.
            </p>
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              KYP Graph Intelligence maps entity relationships in real time, connecting parent companies, beneficial owners (UBOs), directors, subsidiaries, and merchants to uncover hidden contagion risks.
            </p>
          </div>

          <GraphIntelligence />
        </div>
      </section>

      {/* SECTION 6 – CONTINUOUS MONITORING & ALERTS */}
      <section id="monitoring-alerts" className="py-20 lg:py-28 bg-kyp-charcoal/40 border-b border-kyp-teal/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-kyp-lime uppercase tracking-widest font-semibold">
              Section 04 &bull; Always-On Surveillance
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2 tracking-tight">
              Stay Ahead of Changing Risks. Know When to Act.
            </h2>
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              Monitor changes in your business partners&apos; risk profiles, websites, and transaction activity according to your risk management policies. Prioritise investigations with contextual intelligence.
            </p>
          </div>

          {/* Workflow: Monitor -> Alert -> Investigate -> Act */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            {["Monitor", "Alert", "Investigate", "Act"].map((step, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-lg bg-kyp-navy-surface border border-kyp-teal/25 text-white font-semibold">
                  {idx + 1}. {step}
                </span>
                {idx < 3 && <ArrowRight className="w-3.5 h-3.5 text-kyp-lime" />}
              </div>
            ))}
          </div>

          <DashboardMockup />
        </div>
      </section>

      {/* SECTION 7 – EVIDENCE & DECISIONS */}
      <section id="evidence-decisions" className="py-20 lg:py-28 border-b border-kyp-teal/15 kyp-grid-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-kyp-teal uppercase tracking-widest font-semibold">
              Section 05 &bull; Audit Trail Immutability
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2 tracking-tight">
              Every Check. Every Decision. One Audit Trail.
            </h2>
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              KYP automatically captures the evidence behind your compliance checks, monitoring, and decisions, so audit-ready reports can be generated in around one minute instead of taking up to three weeks.
            </p>
          </div>

          {/* Workflow: Investigate -> Decide -> Record -> Report */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            {["Investigate", "Decide", "Record", "Report"].map((step, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-lg bg-kyp-navy-surface border border-kyp-teal/25 text-kyp-mint font-semibold">
                  {idx + 1}. {step}
                </span>
                {idx < 3 && <ArrowRight className="w-3.5 h-3.5 text-kyp-teal" />}
              </div>
            ))}
          </div>

          <AuditInterface />
        </div>
      </section>

      {/* SECTION 8 – FINAL CTA */}
      <section className="py-24 bg-gradient-to-b from-kyp-navy-surface to-black text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            One Platform. Complete Visibility from Onboarding to Audit.
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Speak with our compliance experts to see how the KYP platform can be configured around your specific risk models and regulatory obligations.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href={routes.contact}
              className="kyp-btn-primary px-8 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-lime-glow"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={routes.onboarding}
              className="kyp-btn-secondary px-8 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2"
            >
              <span>Explore Onboarding Use Case</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
