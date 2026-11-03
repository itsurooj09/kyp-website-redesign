import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Database, Activity, FileCheck, Network, Layers, GitBranch, Lock } from "lucide-react";
import { routes } from "@/lib/routes";
import { platformFeaturesData } from "@/data/platformFeatures";

import ArchitecturalIntelligenceFlow from "@/components/product/ArchitecturalIntelligenceFlow";
import AnalyticsDashboard from "@/components/product/AnalyticsDashboard";
import ClientPlatformInterface from "@/components/product/ClientPlatformInterface";
import AuditInterface from "@/components/product/AuditInterface";
import KYPLottie from "@/components/lottie/KYPLottie";
import RiskIntelligenceGraphShowcase from "@/components/home/RiskIntelligenceGraphShowcase";

export const metadata: Metadata = {
  title: "The KYP Platform | From Onboarding to Audit",
  description:
    "KYP brings merchant onboarding, due diligence, continuous monitoring and audit reporting together in one platform, connecting multiple data sources to eliminate fragmented workflows.",
};

export default function PlatformPage() {
  return (
    <div className="w-full bg-white text-slate-900 relative overflow-hidden">
      
      {/* SECTION 1 – PLATFORM HERO (EXPANSIVE AMBIENT GLOW & CENTERED ARCHITECTURE) */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28  bg-gradient-to-b from-slate-50/80 via-white to-slate-50/40 kyp-grid-pattern">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000000] border border-[#033653] text-xs font-mono text-white mb-6 font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#66cc00]" />
            <span>THE KYP PLATFORM &bull; FROM ONBOARDING TO AUDIT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#000000] max-w-4xl mx-auto leading-[1.08] font-heading">
            Multiple Data Sources. <br />
            <span className="text-[#033653]">
              One Unified Platform.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#033653] font-bold mt-4">
            Faster onboarding. No fragmented reviews. Complete visibility from onboarding to audit.
          </p>

          <p className="text-sm sm:text-base text-slate-600 mt-4 max-w-3xl mx-auto leading-relaxed">
            KYP brings merchant onboarding, due diligence and continuous monitoring together in one platform, connecting multiple data sources to eliminate fragmented workflows, simplify risk assessments and maintain a complete view of each merchant throughout their lifecycle.
          </p>

          {/* Workflow Badges: Onboard -> Verify -> Monitor -> Report */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
            {["Onboard", "Verify", "Monitor", "Report"].map((step, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="px-4 py-1.5 rounded-full bg-[#000000] border border-[#033653] text-white font-bold shadow-xs">
                  {step}
                </span>
                {idx < 3 && <ArrowRight className="w-3.5 h-3.5 text-[#66cc00]" />}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={routes.bookDemo}
              className="px-8 py-3.5 rounded-full bg-[#66cc00] hover:bg-[#55b300] text-[#000000] text-sm font-extrabold flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#overview"
              className="px-8 py-3.5 rounded-full bg-white border border-[#033653] text-[#033653] hover:bg-slate-50 text-sm font-semibold flex items-center gap-2 transition-all"
            >
              <span>Explore Platform Overview</span>
            </a>
          </div>

          {/* Hero Platform Showcase: Client Platform Interface */}
          <div className="mt-14 max-w-6xl mx-auto text-left">
            <ClientPlatformInterface />
          </div>
        </div>
      </section>

      {/* SECTION 2 – ECOSYSTEM OVERVIEW (CENTERED HEADER & BALANCED 5 PILLARS) */}
      <section id="overview" className="py-20 lg:py-28 bg-slate-50 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-14">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <span className="text-xs font-mono bg-[#000000] text-white px-3.5 py-1 rounded-full border border-[#033653] uppercase tracking-widest font-bold">
              Ecosystem Overview
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#000000] tracking-tight">
              Connect Every Stage of Merchant Risk Management.
            </h2>
            <p className="text-lg text-[#033653] font-bold">
              One connected view from onboarding to audit.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Accelerate merchant onboarding with AI-assisted document validation, helping merchants resolve issues before submission. Cross-check information against multiple data sources to build a consolidated risk assessment without switching between tools.
            </p>
          </div>

          {/* 6 Core Pillars Grid - Balanced in 3, 3 */}
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
                title: "Configurable Rules & Alert Engine",
                desc: "Policy-aligned rules, automated alerts, structured investigation workspaces, and multi-tier escalation thresholds.",
                tag: "GOVERNANCE",
              },
              {
                title: "Instant Audit-Ready Reporting",
                desc: "One-click defensible compliance dossiers, complete historical event timelines, and regulatory export packs.",
                tag: "DEFENSIBILITY",
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 space-y-3 group cursor-pointer hover:bg-[#000000] hover:border-[#033653] hover:-translate-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-white group-hover:text-[#66cc00] px-2.5 py-0.5 rounded-full bg-[#000000] border border-[#033653] group-hover:border-[#66cc00] font-bold uppercase tracking-wider transition-colors">
                    {pillar.tag}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#66cc00] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-[#000000] group-hover:text-white transition-colors">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* SECTION 4 – DATA & INTEGRATIONS (CENTERED HEADER & PIPELINE) */}
      <section id="data-integrations" className="py-20 lg:py-28 bg-slate-50 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-14">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#000000] border border-[#033653] text-xs font-mono text-white font-bold">
              <span className="w-2 h-2 rounded-full bg-[#66cc00] animate-pulse" />
              <span>DATA &amp; INTEGRATIONS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#000000] tracking-tight">
              Bring Your Data Together. Build a 360&deg; View of Risk.
            </h2>

            <p className="text-lg text-[#033653] font-bold">
              Connect the data behind your risk assessments.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Bring together information from your business partners, external sources and internal systems to verify onboarding answers, identify discrepancies and build a consolidated risk assessment.
            </p>

            {/* Workflow Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
              {["Connect", "Cross-reference", "Assess", "Monitor"].map((step, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#033653] font-bold shadow-xs">
                    {step}
                  </span>
                  {idx < 3 && <ArrowRight className="w-3.5 h-3.5 text-[#66cc00]" />}
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Flow Diagram with 6 Tabs & Animation (Image 4 & Image 5) */}
          <ArchitecturalIntelligenceFlow />
        </div>
      </section>

      {/* SECTION 5 – GRAPH INTELLIGENCE & 3D ORBITAL SHOWCASE */}
      <RiskIntelligenceGraphShowcase />

      

      {/* SECTION 6 – CONTINUOUS MONITORING & ALERTS (CENTERED) */}
      <section id="monitoring-alerts" className="py-20 lg:py-28 bg-slate-50 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-14">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#000000] border border-[#033653] text-xs font-mono text-white font-bold">
              <span className="w-2 h-2 rounded-full bg-[#66cc00] animate-pulse" />
              <span>CONTINUOUS MONITORING &amp; ALERTS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#000000] tracking-tight">
              Stay Ahead of Changing Risks. Know When to Act.
            </h2>

            <p className="text-lg text-[#033653] font-bold">
              Keep track of the risks that matter.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Monitor changes in your business partners&apos; risk profiles, websites and transaction activity according to your risk management policies. Enable your team to identify emerging risks and prioritise investigations by risk level.
            </p>

            {/* Workflow Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
              {["Monitor", "Alert", "Investigate", "Act"].map((step, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#033653] font-bold shadow-xs">
                    {step}
                  </span>
                  {idx < 3 && <ArrowRight className="w-3.5 h-3.5 text-[#66cc00]" />}
                </div>
              ))}
            </div>
          </div>

          <AnalyticsDashboard />
        </div>
      </section>

      {/* SECTION 7 – EVIDENCE & DECISIONS (CENTERED) */}
      <section id="evidence-decisions" className="py-20 lg:py-28 bg-white ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-14">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#000000] border border-[#033653] text-xs font-mono text-white font-bold">
              <span className="w-2 h-2 rounded-full bg-[#66cc00] animate-pulse" />
              <span>INVESTIGATIONS &amp; AUDIT REPORTING</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#000000] tracking-tight">
              See the Evidence. Trace Your Decisions. Be Audit-Ready.
            </h2>

            <p className="text-lg text-[#033653] font-bold">
              Keep your due diligence and review history in one place.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
              KYP brings together the due diligence, monitoring findings and actions taken on each business partner, helping your team investigate risks, document decisions and generate audit-ready reports in seconds.
            </p>

            {/* Workflow Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
              {["Investigate", "Decide", "Record", "Report"].map((step, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[#033653] font-bold shadow-xs">
                    {step}
                  </span>
                  {idx < 3 && <ArrowRight className="w-3.5 h-3.5 text-[#66cc00]" />}
                </div>
              ))}
            </div>
          </div>

          <AuditInterface />
        </div>
      </section>
    </div>
  );
}
