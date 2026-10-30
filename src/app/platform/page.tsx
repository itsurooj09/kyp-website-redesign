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
import KYPLottie from "@/components/lottie/KYPLottie";

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
            THE KYP PLATFORM: FROM ONBOARDING TO AUDIT
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.08]">
            Multiple Data Sources. One Platform.
          </h1>

          <p className="text-xl sm:text-2xl text-kyp-mint font-medium mt-4">
            Faster onboarding. No fragmented reviews. Complete visibility from onboarding to audit.
          </p>

          <p className="text-sm sm:text-base text-gray-300 mt-4 max-w-3xl mx-auto leading-relaxed">
            KYP brings merchant onboarding, due diligence and continuous monitoring together in one platform, connecting multiple data sources to eliminate fragmented workflows, simplify risk assessments and maintain a complete view of each merchant throughout their lifecycle.
          </p>

          {/* Workflow Badges: Onboard -> Verify -> Monitor -> Report */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
            {["Onboard", "Verify", "Monitor", "Report"].map((step, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-lg bg-kyp-navy-surface border border-kyp-teal/30 text-kyp-mint font-semibold">
                  {step}
                </span>
                {idx < 3 && <ArrowRight className="w-3.5 h-3.5 text-kyp-lime" />}
              </div>
            ))}
          </div>

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
              Connect Every Stage of Merchant Risk Management.
            </h2>
            <p className="text-lg text-kyp-mint font-medium mt-2">
              One connected view from onboarding to audit.
            </p>
            <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed">
              Accelerate merchant onboarding with AI-assisted document validation, helping merchants resolve issues before submission. Cross-check information against multiple data sources to build a consolidated risk assessment without switching between tools. Continuously monitor changes in risk against your policies, investigate findings in one place and maintain a complete record of checks, alerts and decisions. Generate audit-ready reports in seconds, reducing manual reviews and making it easier to demonstrate your due diligence.
            </p>
          </div>

          {/* 5 Core Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI-Powered Merchant Onboarding",
                desc: "Questionnaires, document collection and AI validation helping merchants resolve issues before submission.",
                tag: "ONBOARDING",
              },
              {
                title: "Corporate & Beneficial Ownership",
                desc: "Sanctions, PEP and adverse media intelligence drawn from multiple commercial and national registry feeds.",
                tag: "INTELLIGENCE",
              },
              {
                title: "Website Compliance & Blacklists",
                desc: "WebCompli crawler monitoring prohibited content, BRAM/VIRP rules, and potential prohibited market exposure.",
                tag: "COMPLIANCE",
              },
              {
                title: "Transaction Monitoring & Signals",
                desc: "Payment activity, volumetric changes, and emerging behavioural risk indicators where data is integrated.",
                tag: "TRANSACTIONS",
              },
              {
                title: "Configurable Rules & Audit Reports",
                desc: "Policy-aligned rules, automated alerts, structured investigation workspaces, and one-click audit reports.",
                tag: "GOVERNANCE",
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-black border border-kyp-teal/20 hover:border-kyp-lime/40 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-kyp-teal uppercase tracking-wider">{pillar.tag}</span>
                  <CheckCircle2 className="w-4 h-4 text-kyp-lime" />
                </div>
                <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 – AI-POWERED ONBOARDING */}
      <section id="ai-onboarding" className="py-20 lg:py-28 border-b border-kyp-teal/15 kyp-grid-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-kyp-lime uppercase tracking-widest font-semibold">
                Section 01 &bull; AI-Powered Onboarding
              </span>
              <div className="w-6 h-6">
                <KYPLottie type="docScanner" className="w-full h-full" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2 tracking-tight">
              Onboard 10× Faster. Resolve Document Issues Before Submission.
            </h2>
            <p className="text-lg text-kyp-mint font-medium mt-2">
              Get the information you need from the start.
            </p>
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              KYP uses AI to check documents as business partners complete their onboarding questionnaires, helping them resolve issues before submission and reducing the back-and-forth your team needs to manage. Set the checks and submission requirements that match your onboarding policies. Help partners understand what needs correcting while they complete the questionnaire, rather than discovering problems after submission. Bring their answers, documents and verification findings together for review, with your team retaining control of approval decisions.
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-kyp-lime shrink-0" />
                <span>Questionnaires & requirements tailored to policy</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-kyp-lime shrink-0" />
                <span>AI checks assessing against configured rules</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-kyp-lime shrink-0" />
                <span>Clear feedback to fix issues before submission</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-kyp-lime shrink-0" />
                <span>Automatically populated forms via extracted data</span>
              </li>
              <li className="flex items-center gap-2 sm:col-span-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-kyp-lime shrink-0" />
                <span>Discrepancies flagged between documents, answers & registry records</span>
              </li>
            </ul>
          </div>

          {/* Workflow Badges: Collect -> Check -> Resolve -> Submit */}
          <div className="space-y-2">
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
            <p className="text-xs text-kyp-teal font-mono">
              Help partners get it right before submission. Reduce follow-ups. Accelerate onboarding.
            </p>
          </div>

          <OnboardingInterface />
        </div>
      </section>

      {/* SECTION 4 – DATA & INTEGRATIONS */}
      <section id="data-integrations" className="py-20 lg:py-28 bg-kyp-charcoal/40 border-b border-kyp-teal/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-kyp-teal uppercase tracking-widest font-semibold">
              Section 02 &bull; Data &amp; Integrations
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2 tracking-tight">
              Bring Your Data Together. Build a 360° View of Risk.
            </h2>
            <p className="text-lg text-kyp-mint font-medium mt-2">
              Connect the data behind your risk assessments.
            </p>
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              Bring together information from your business partners, external sources and internal systems to verify onboarding answers, identify discrepancies and build a consolidated risk assessment. Cross-check onboarding answers against external and internal data to flag inconsistencies and missing information. Bring the findings and supporting evidence together in a single risk report. Keep assessments current with updated information and monitoring configured around your policies.
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-kyp-teal shrink-0" />
                <span>Business questionnaires & supporting documents</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-kyp-teal shrink-0" />
                <span>Company registry, sanctions, PEP & adverse media</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-kyp-teal shrink-0" />
                <span>Internal transactional and CRM systems data</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-kyp-teal shrink-0" />
                <span>Website compliance, restrictions & blacklists</span>
              </li>
              <li className="flex items-center gap-2 sm:col-span-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-kyp-teal shrink-0" />
                <span>Real-time transaction monitoring & connected cyber-risk intelligence</span>
              </li>
            </ul>
          </div>

          {/* Workflow: Connect -> Cross-reference -> Assess -> Monitor */}
          <div className="space-y-2">
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
            <p className="text-xs text-kyp-teal font-mono">
              Verify information. Surface discrepancies. Identify and act on risks.
            </p>
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
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-kyp-lime uppercase tracking-widest font-semibold">
                Section 04 &bull; Continuous Monitoring &amp; Alerts
              </span>
              <div className="w-6 h-6">
                <KYPLottie type="continuousPulse" className="w-full h-full" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2 tracking-tight">
              Stay Ahead of Changing Risks. Know When to Act.
            </h2>
            <p className="text-lg text-kyp-mint font-medium mt-2">
              Keep track of the risks that matter.
            </p>
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              Monitor changes in your business partners&apos; risk profiles, websites and transaction activity according to your risk management policies. Enable your team to identify emerging risks and prioritise investigations by risk level. Configure monitoring frequencies and alert conditions to match your risk management policies. Track merchant trends over time and flag suspicious transaction activity as it occurs where transaction data is integrated. Receive alerts when new risks are detected, with supporting information to investigate findings and decide what action to take.
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-kyp-lime shrink-0" />
                <span>Changes in company filings, sanctions & adverse media</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-kyp-lime shrink-0" />
                <span>Website content, terms and ownership changes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-kyp-lime shrink-0" />
                <span>Regulatory restrictions and prohibited markets</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-kyp-lime shrink-0" />
                <span>Merchant transaction patterns & real-time signals</span>
              </li>
            </ul>
          </div>

          {/* Workflow: Monitor -> Alert -> Investigate -> Act */}
          <div className="space-y-2">
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
            <p className="text-xs text-kyp-teal font-mono">
              Detect changes. Respond to emerging risks.
            </p>
          </div>

          <DashboardMockup />
        </div>
      </section>

      {/* SECTION 7 – EVIDENCE & DECISIONS */}
      <section id="evidence-decisions" className="py-20 lg:py-28 border-b border-kyp-teal/15 kyp-grid-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-kyp-teal uppercase tracking-widest font-semibold">
                Section 05 &bull; Investigations &amp; Audit Reporting
              </span>
              <div className="w-6 h-6">
                <KYPLottie type="auditSeal" className="w-full h-full" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2 tracking-tight">
              See the Evidence. Trace Your Decisions. Be Audit-Ready.
            </h2>
            <p className="text-lg text-kyp-mint font-medium mt-2">
              Keep your due diligence and review history in one place.
            </p>
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              KYP brings together the due diligence, monitoring findings and actions taken on each business partner, helping your team investigate risks, document decisions and generate audit-ready reports in seconds. Review risks and the evidence behind them. Record your decisions and the reasoning behind them. Generate a single audit-ready report covering onboarding, due diligence, ongoing monitoring and periodic reviews.
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-kyp-teal shrink-0" />
                <span>Onboarding answers, uploads & verification findings</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-kyp-teal shrink-0" />
                <span>External screening results & supporting sources</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-kyp-teal shrink-0" />
                <span>Monitoring alerts & changes in identified risks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-kyp-teal shrink-0" />
                <span>Reviews, approvals, rejections & reasoned rationales</span>
              </li>
              <li className="flex items-center gap-2 sm:col-span-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-kyp-teal shrink-0" />
                <span>Comprehensive history of actions taken on each business entity</span>
              </li>
            </ul>
          </div>

          {/* Workflow: Investigate -> Decide -> Record -> Report */}
          <div className="space-y-2">
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
            <p className="text-xs text-kyp-teal font-mono">
              Log every check, decision and action. Produce audit-ready reports in seconds.
            </p>
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
