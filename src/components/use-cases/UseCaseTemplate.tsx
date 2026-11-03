"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Building, UserCheck, ShieldAlert, Sliders, FormInput, AlertCircle, GitCompare, FileText, Activity, BellRing, SlidersHorizontal, FileCheck2, Newspaper, Network } from "lucide-react";
import { UseCaseDetail } from "@/data/useCases";
import { routes } from "@/lib/routes";
import OnboardingInterface from "@/components/product/OnboardingInterface";
import AnalyticsDashboard from "@/components/product/AnalyticsDashboard";
import ClientPlatformInterface from "@/components/product/ClientPlatformInterface";
import GraphIntelligence from "@/components/product/GraphIntelligence";
import AuditInterface from "@/components/product/AuditInterface";
import KYPLottie from "@/components/lottie/KYPLottie";

// Helper for dynamic icons with official KYP brand colors ONLY (#66cc00, #66cc00, #033653)
const renderFeatureIcon = (name: string) => {
  switch (name) {
    case "UserCheck": return <UserCheck className="w-5 h-5 text-[#66cc00]" />;
    case "ShieldAlert": return <ShieldAlert className="w-5 h-5 text-[#66cc00]" />;
    case "Sliders": return <Sliders className="w-5 h-5 text-[#033653] group-hover:text-white" />;
    case "FormInput": return <FormInput className="w-5 h-5 text-[#66cc00]" />;
    case "AlertCircle": return <AlertCircle className="w-5 h-5 text-[#66cc00]" />;
    case "GitCompare": return <GitCompare className="w-5 h-5 text-[#033653] group-hover:text-white" />;
    case "Building": return <Building className="w-5 h-5 text-[#66cc00]" />;
    case "FileText": return <FileText className="w-5 h-5 text-[#66cc00]" />;
    case "ShieldCheck": return <ShieldCheck className="w-5 h-5 text-[#66cc00]" />;
    case "Network": return <Network className="w-5 h-5 text-[#033653] group-hover:text-white" />;
    case "Newspaper": return <Newspaper className="w-5 h-5 text-[#66cc00]" />;
    case "BellRing": return <BellRing className="w-5 h-5 text-[#66cc00]" />;
    case "Activity": return <Activity className="w-5 h-5 text-[#66cc00]" />;
    case "SlidersHorizontal": return <SlidersHorizontal className="w-5 h-5 text-[#033653] group-hover:text-white" />;
    case "FileCheck2": return <FileCheck2 className="w-5 h-5 text-[#66cc00]" />;
    default: return <Sparkles className="w-5 h-5 text-[#66cc00]" />;
  }
};

export default function UseCaseTemplate({ useCase }: { useCase: UseCaseDetail }) {
  return (
    <div className="w-full bg-white text-slate-900 relative overflow-hidden">
      
      {/* SECTION 1 – HERO (EXPANSIVE AMBIENT GLOW & MOTION GRAPHICS) */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28  bg-gradient-to-b from-slate-50/80 via-white to-slate-50/40 kyp-grid-pattern">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] sm:w-[1050px] h-[550px] bg-[#033653]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#66cc00]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000000] border border-[#033653] text-xs font-mono text-white mb-6 font-bold shadow-xs"
          >
            <span className="w-4 h-4 inline-flex items-center justify-center">
              <KYPLottie type="heroRadar" className="w-4 h-4" />
            </span>
            <span>USE CASE &bull; {useCase.category.toUpperCase()}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#000000] max-w-4xl mx-auto leading-[1.15] font-heading"
          >
            {useCase.headline}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#033653] font-semibold mt-4 max-w-3xl mx-auto"
          >
            {useCase.subheading}
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed"
          >
            {useCase.supportingText}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href={routes.bookDemo}
              className="px-8 py-3.5 rounded-full bg-[#66cc00] hover:bg-[#55b300] text-[#000000] text-sm font-extrabold flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <span>{useCase.cta.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#how-it-works"
              className="px-8 py-3.5 rounded-full bg-white border border-[#033653] text-[#033653] hover:bg-slate-50 text-sm font-semibold flex items-center gap-2 transition-all"
            >
              <span>Explore Workflow</span>
            </a>
          </motion.div>

          {/* Hero Interface Visual */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 max-w-5xl mx-auto text-left"
          >
            {useCase.interfaceMockup.type === "onboarding" ? (
              <OnboardingInterface />
            ) : useCase.interfaceMockup.type === "aml" ? (
              <GraphIntelligence />
            ) : (
              <ClientPlatformInterface />
            )}
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 – THE PROBLEM */}
      <section className="py-20 lg:py-28 bg-slate-50 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <span className="text-xs font-mono bg-[#000000] text-white px-3 py-1 rounded-full border border-[#033653] uppercase tracking-widest font-bold">
              The Operational Challenge
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#000000] mt-3 tracking-tight">
              {useCase.problem.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              {useCase.problem.description}
            </p>
          </div>

          <div className={`grid gap-6 ${
            useCase.problem.points.length <= 2
              ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
              : useCase.problem.points.length === 4
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}>
            {useCase.problem.points.map((pt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-300 space-y-3 group cursor-pointer hover:bg-[#000000] hover:border-[#033653] hover:shadow-xl"
              >
                <div className="w-8 h-8 rounded-lg bg-[#000000] border border-[#033653] group-hover:border-[#66cc00] flex items-center justify-center text-white font-mono text-xs font-bold transition-colors">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-[#000000] group-hover:text-white transition-colors">{pt.title}</h3>
                <p className="text-xs text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">{pt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 – THE KYP SOLUTION */}
      <section className="py-20 lg:py-28 bg-white ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <span className="text-xs font-mono bg-[#000000] text-white px-3 py-1 rounded-full border border-[#033653] uppercase tracking-widest font-bold">
              The KYP Capability
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#000000] mt-3 tracking-tight">
              {useCase.solution.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              {useCase.solution.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCase.solution.points.map((pt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm hover:shadow-xl hover:bg-[#000000] hover:border-[#66cc00] transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#000000] border border-[#033653] group-hover:border-[#66cc00] flex items-center justify-center text-white font-mono text-xs font-bold transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#66cc00] stroke-[2.5]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#000000] group-hover:text-white transition-colors">{pt.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-300 leading-relaxed pl-11 transition-colors">
                  {pt.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 – HOW IT WORKS: 6 STEPS BALANCED IN 3, 3 (WITH DARK BLACK HOVER & MOTION) */}
      <section id="how-it-works" className="py-20 lg:py-28 bg-slate-50 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto space-y-3">
            <span className="text-xs font-mono bg-[#000000] text-white px-3.5 py-1 rounded-full border border-[#033653] uppercase tracking-widest font-bold">
              Step-By-Step Workflow
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#000000] tracking-tight">
              How the Compliance Process Executes
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              End-to-end continuous monitoring pipeline keeping your compliance team audit-defensible and in total control.
            </p>
          </div>

          {/* 6 Steps in 3, 3 Layout (3 in Row 1, 3 in Row 2) with Dark Black Hover */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCase.workflow.map((w, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-2xl bg-white border border-slate-200/90 space-y-5 relative group hover:bg-[#000000] hover:border-[#033653] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-mono font-extrabold text-[#033653] group-hover:text-[#66cc00] transition-colors">
                      {w.step}
                    </span>
                    <span className="text-[11px] font-mono text-[#66cc00] px-2.5 py-0.5 rounded-full bg-[#000000] border border-[#033653] font-bold">
                      {w.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#000000] group-hover:text-white transition-colors">
                    {w.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-300 mt-2 leading-relaxed transition-colors">
                    {w.description}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 group-hover:bg-[#033653]/70 border border-slate-200 group-hover:border-[#033653] space-y-1 transition-colors">
                  <div className="text-[10px] font-mono text-slate-500 group-hover:text-white/80 uppercase font-semibold">
                    {w.uiDetail.label}
                  </div>
                  <div className="text-xs font-mono font-bold text-[#033653] group-hover:text-[#66cc00] flex items-center gap-1.5 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-[#66cc00] animate-pulse" />
                    <span>{w.uiDetail.value}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 – FEATURE MATRIX: 6 CARDS STRICTLY IN 3, 3 WITH DARK BLACK HOVER & ANIMATION */}
      <section className="py-20 lg:py-28 bg-white ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-2 text-center mx-auto">
            <span className="text-xs font-mono bg-[#000000] text-white px-3.5 py-1 rounded-full border border-[#033653] uppercase tracking-widest font-bold">
              Feature Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000000] tracking-tight">
              Engineered for Enterprise Compliance Teams
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Purpose-built capabilities designed to eliminate friction and satisfy stringent regulatory audits.
            </p>
          </div>

          {/* 6 Cards strictly in 3, 3 Layout (Row 1: 3 cards, Row 2: 3 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCase.features.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-2xl hover:bg-[#000000] hover:border-[#033653] transition-all duration-300 space-y-4 group cursor-pointer relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#033653] border border-slate-200 group-hover:border-[#033653] flex items-center justify-center group-hover:scale-105 transition-all shadow-xs">
                  {renderFeatureIcon(feat.icon)}
                </div>
                
                <h3 className="text-lg font-bold text-[#000000] group-hover:text-white transition-colors">
                  {feat.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                  {feat.description}
                </p>

                <div className="pt-2 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-[11px] font-mono text-[#66cc00] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#66cc00] animate-pulse" />
                  <span>Continuous Sentinel Guard</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 – PLATFORM INTERFACE DEMO */}
      <section className="py-20 lg:py-28 bg-slate-50 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-2 text-center mx-auto">
            <span className="text-xs font-mono bg-[#000000] text-white px-3.5 py-1 rounded-full border border-[#033653] uppercase tracking-widest font-bold">
              Audit &amp; Decision Trail
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000000] tracking-tight">
              Every Decision Recorded Immutably
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              See the complete audit record that backs every verification check and analyst sign-off.
            </p>
          </div>

          <AuditInterface />
        </div>
      </section>

      {/* SECTION 7 – BUSINESS BENEFITS (WITH DARK BLACK HOVER) */}
      <section className="py-20 lg:py-28 bg-white ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-2 text-center mx-auto">
            <span className="text-xs font-mono bg-[#000000] text-white px-3.5 py-1 rounded-full border border-[#033653] uppercase tracking-widest font-bold">
              Measurable Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000000] tracking-tight">
              Transform Your Operational Footprint
            </h2>
          </div>

          <div className={`grid gap-6 ${
            useCase.benefits.length <= 2
              ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
              : useCase.benefits.length === 4
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}>
            {useCase.benefits.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm hover:shadow-xl hover:bg-[#000000] hover:border-[#033653] transition-all duration-300 group cursor-pointer"
              >
                {b.metric && (
                  <div className="text-2xl lg:text-3xl font-extrabold text-[#033653] group-hover:text-[#66cc00] font-mono transition-colors">
                    {b.metric}
                  </div>
                )}
                <h3 className="text-base font-bold text-[#000000] group-hover:text-white transition-colors">{b.title}</h3>
                <p className="text-xs text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note: Per user explicit specification, final CTA banner is completely removed from all pages. */}
    </div>
  );
}
