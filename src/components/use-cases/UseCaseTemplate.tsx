"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Sparkles, Building, UserCheck, ShieldAlert, Sliders, FormInput, AlertCircle, GitCompare, FileText, Activity, BellRing, SlidersHorizontal, FileCheck2, Newspaper, Network } from "lucide-react";
import { UseCaseDetail } from "@/data/useCases";
import { routes } from "@/lib/routes";
import OnboardingInterface from "@/components/product/OnboardingInterface";
import AnalyticsDashboard from "@/components/product/AnalyticsDashboard";
import GraphIntelligence from "@/components/product/GraphIntelligence";
import AuditInterface from "@/components/product/AuditInterface";
import KYPLottie from "@/components/lottie/KYPLottie";

// Helper for dynamic icons
const renderFeatureIcon = (name: string) => {
  switch (name) {
    case "UserCheck": return <UserCheck className="w-5 h-5 text-emerald-600" />;
    case "ShieldAlert": return <ShieldAlert className="w-5 h-5 text-rose-500" />;
    case "Sliders": return <Sliders className="w-5 h-5 text-sky-600" />;
    case "FormInput": return <FormInput className="w-5 h-5 text-teal-600" />;
    case "AlertCircle": return <AlertCircle className="w-5 h-5 text-amber-500" />;
    case "GitCompare": return <GitCompare className="w-5 h-5 text-indigo-600" />;
    case "Building": return <Building className="w-5 h-5 text-emerald-600" />;
    case "FileText": return <FileText className="w-5 h-5 text-teal-600" />;
    case "ShieldCheck": return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
    case "Network": return <Network className="w-5 h-5 text-sky-600" />;
    case "Newspaper": return <Newspaper className="w-5 h-5 text-teal-600" />;
    case "BellRing": return <BellRing className="w-5 h-5 text-amber-500" />;
    case "Activity": return <Activity className="w-5 h-5 text-emerald-600" />;
    case "SlidersHorizontal": return <SlidersHorizontal className="w-5 h-5 text-sky-600" />;
    case "FileCheck2": return <FileCheck2 className="w-5 h-5 text-emerald-600" />;
    default: return <Sparkles className="w-5 h-5 text-emerald-600" />;
  }
};

export default function UseCaseTemplate({ useCase }: { useCase: UseCaseDetail }) {
  return (
    <div className="w-full bg-white text-slate-900 relative overflow-hidden">
      
      {/* SECTION 1 – HERO */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-200 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/40 kyp-grid-pattern">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-kyp-mint/30 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kyp-mint/30 border border-kyp-teal/40 text-xs font-mono text-kyp-navy mb-6 font-bold shadow-sm">
            <span className="w-4 h-4 inline-flex items-center justify-center">
              <KYPLottie type="heroRadar" className="w-4 h-4" />
            </span>
            <span>USE CASE • {useCase.category.toUpperCase()}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.15] font-heading">
            {useCase.headline}
          </h1>

          <p className="text-lg sm:text-xl text-kyp-navy font-semibold mt-4 max-w-3xl mx-auto">
            {useCase.subheading}
          </p>

          <p className="text-sm sm:text-base text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            {useCase.supportingText}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={routes.bookDemo}
              className="kyp-btn-primary px-8 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <span>{useCase.cta.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#how-it-works"
              className="kyp-btn-secondary px-8 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2"
            >
              <span>Explore Workflow</span>
            </a>
          </div>

          {/* Hero Interface Visual */}
          <div className="mt-14 max-w-5xl mx-auto text-left">
            {useCase.interfaceMockup.type === "onboarding" ? (
              <OnboardingInterface />
            ) : useCase.interfaceMockup.type === "aml" ? (
              <GraphIntelligence />
            ) : (
              <AnalyticsDashboard />
            )}
          </div>
        </div>
      </section>

      {/* SECTION 2 – THE PROBLEM */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-rose-700 uppercase tracking-widest font-bold">
              The Operational Challenge
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mt-2 tracking-tight">
              {useCase.problem.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              {useCase.problem.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCase.problem.points.map((pt, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-rose-200/80 hover:border-rose-300 shadow-sm transition-all space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700 font-mono text-xs font-bold">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-semibold text-slate-900">{pt.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 – THE KYP SOLUTION */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-kyp-navy uppercase tracking-widest font-bold">
              The KYP Capability
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mt-2 tracking-tight">
              {useCase.solution.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              {useCase.solution.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCase.solution.points.map((pt, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-kyp-mint/40 border border-kyp-teal/30 flex items-center justify-center text-kyp-navy font-mono text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4 text-kyp-lime stroke-[2.5]" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{pt.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 – HOW IT WORKS (STEP-BY-STEP WORKFLOW) */}
      <section id="how-it-works" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto">
            <span className="text-xs font-mono text-kyp-navy uppercase tracking-widest font-bold">
              Step-By-Step Workflow
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mt-2 tracking-tight">
              How the Compliance Process Executes
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              End-to-end automation keeping your team fully in control of every approval decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCase.workflow.map((w, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 relative group hover:border-kyp-teal shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl font-mono font-extrabold text-kyp-navy">
                    {w.step}
                  </span>
                  <span className="text-[10px] font-mono text-kyp-navy px-2 py-0.5 rounded bg-kyp-mint/40 border border-kyp-teal/30 font-bold">
                    {w.highlight}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">{w.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {w.description}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-[9px] font-mono text-slate-500 uppercase font-semibold">
                    {w.uiDetail.label}
                  </div>
                  <div className="text-[11px] font-mono font-bold text-slate-800">
                    {w.uiDetail.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 – KEY FEATURES */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono text-kyp-navy uppercase tracking-widest font-bold">
              Feature Matrix
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mt-2 tracking-tight">
              Engineered for Enterprise Compliance Teams
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              Purpose-built capabilities designed to eliminate friction and satisfy stringent regulatory audits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCase.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-kyp-teal shadow-sm transition-all space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                  {renderFeatureIcon(feat.icon)}
                </div>
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-kyp-navy transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 – PLATFORM INTERFACE DEMO (Secondary Interactive Element) */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-kyp-navy uppercase tracking-widest font-bold">
              Audit & Decision Trail
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mt-2 tracking-tight">
              Every Decision Recorded Immutably
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              See the complete audit record that backs every verification check and analyst sign-off.
            </p>
          </div>

          <AuditInterface />
        </div>
      </section>

      {/* SECTION 7 – BUSINESS BENEFITS */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-kyp-navy uppercase tracking-widest font-bold">
              Measurable Impact
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mt-2 tracking-tight">
              Transform Your Operational Footprint
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCase.benefits.map((b, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-all"
              >
                {b.metric && (
                  <div className="text-2xl lg:text-3xl font-extrabold text-kyp-navy font-mono">
                    {b.metric}
                  </div>
                )}
                <h3 className="text-base font-bold text-slate-900">{b.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 – FINAL CTA */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-kyp-mint/20 to-white text-center border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 space-y-6">
          <div className="w-14 h-14 mx-auto">
            <KYPLottie type="auditSeal" className="w-full h-full" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            {useCase.cta.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Discover how KYP helps compliance teams monitor risks, eliminate manual review friction, and stay continuously audit-ready.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href={routes.bookDemo}
              className="kyp-btn-primary px-8 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <span>{useCase.cta.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={routes.platform}
              className="kyp-btn-secondary px-8 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2"
            >
              <span>Explore Platform Capabilities</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
