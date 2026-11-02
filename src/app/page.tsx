import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, Sparkles, Network, Activity, FileCheck, ExternalLink, Quote, Database, Cpu, Lock } from "lucide-react";
import { routes } from "@/lib/routes";
import { industriesData } from "@/data/industries";
import { useCasesData } from "@/data/useCases";
import { platformFeaturesData } from "@/data/platformFeatures";
import { testimonialsData, trustedPartners, credentials } from "@/data/testimonials";
import { newsArticlesData } from "@/data/news";

import BrandOrbHeroStage from "@/components/home/BrandOrbHeroStage";
import PlatformFlow from "@/components/product/PlatformFlow";
import IndustryTabs from "@/components/home/IndustryTabs";
import UseCaseCard from "@/components/cards/UseCaseCard";
import NewsCard from "@/components/cards/NewsCard";
import AnalyticsDashboard from "@/components/product/AnalyticsDashboard";
import OnboardingInterface from "@/components/product/OnboardingInterface";
import ArchitecturalIntelligenceFlow from "@/components/product/ArchitecturalIntelligenceFlow";
import GraphIntelligence from "@/components/product/GraphIntelligence";
import { PartnerLogo, CredentialBadge, PartnerCarouselMarquee } from "@/components/home/PartnerLogos";
import KYPLottie from "@/components/lottie/KYPLottie";
import PurposeBuiltSolutions from "@/components/home/PurposeBuiltSolutions";
import WorkflowSLADemo from "@/components/home/WorkflowSLADemo";
import ProvenInProduction from "@/components/home/ProvenInProduction";
import RiskIntelligenceGraphShowcase from "@/components/home/RiskIntelligenceGraphShowcase";

export default function HomePage() {
  const latestThreeNews = newsArticlesData.slice(0, 3);

  return (
    <div className="w-full bg-white text-slate-900 overflow-hidden">
      
      {/* SECTION 1 – HERO (SIDE-BY-SIDE WITH LAYERED MOTION GRAPHICS) */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-28 border-b border-slate-200/80 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/40 kyp-grid-pattern">
        {/* Expansive Ambient Radial Lighting in Official Brand Tones */}
        <div className="absolute top-1/4 left-1/4 w-[850px] sm:w-[1050px] h-[550px] bg-[#033653]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#66cc00]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000000] border border-[#033653] text-xs font-mono text-white font-bold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#66cc00] animate-pulse" />
                <span>AI-POWERED ENTERPRISE RISK &amp; COMPLIANCE</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#000000] leading-[1.08] font-heading">
                Know Your Portfolio. <br />
                <span className="text-[#033653]">
                  Uncover Hidden Risks.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Empowering regulated firms, acquirers, and fintech platforms to proactively detect financial, regulatory, and reputational risks across their entire merchant network.
              </p>

              {/* Trust Metric Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
                  180+ Global Registries
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#000000] border border-[#033653] text-white font-bold">
                  &lt;30s Decision SLA
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
                  100% FCA Defensible
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href={routes.bookDemo}
                  className="px-8 py-3.5 rounded-full bg-[#66cc00] hover:bg-[#55b300] text-[#000000] text-sm font-extrabold flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={routes.platform}
                  className="px-8 py-3.5 rounded-full bg-white border border-[#033653] text-[#033653] hover:bg-slate-50 text-sm font-semibold flex items-center gap-2 transition-all"
                >
                  <span>Explore the Platform</span>
                </Link>
              </div>
            </div>

            {/* Right Side: Iconic 3D Brand Risk Intelligence Core Orb */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <BrandOrbHeroStage />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 – TRUST AND CREDIBILITY MOVING CAROUSEL MARQUEE */}
      <PartnerCarouselMarquee />

      {/* PROVEN IN PRODUCTION (Itemize-Style 4-Card SLA Matrix from User Image) */}
      <ProvenInProduction />

      {/* SECTION 3 – THE PROBLEM */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono bg-[#000000] text-white px-3.5 py-1 rounded-full border border-[#033653] uppercase tracking-widest font-bold">
                The Compliance Blind Spot
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#000000] tracking-tight leading-tight">
                Can You See Risk Emerging Before It Becomes a Financial Issue?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Traditional periodic reviews leave institutions dangerously exposed. When compliance teams rely on manual annual checks and fragmented point-in-time screening tools, they remain blind to the continuous changes that occur across customer, merchant, and partner networks.
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#033653] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Post-Onboarding Drift</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Approved partners alter product lines, appoint sanctioned directors, or experience website non-compliance months after initial vetting.
                    </p>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#033653] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Disjointed Intelligence Silos</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Registry data, PEP screening, website crawling, and transaction patterns reside in disconnected databases with no unified context.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Comparison Matrix */}
            <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 flex items-center justify-between">
                <span>Periodic Reviews vs Continuous KYP</span>
                <span className="text-xs font-mono text-[#033653] font-bold">EVOLUTION</span>
              </h3>

              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-100 border border-slate-300 space-y-1">
                  <div className="font-semibold text-slate-700 uppercase font-mono">Legacy Approach: Point-in-Time</div>
                  <p className="text-slate-600 leading-relaxed">
                    Reviews performed once every 12 months. Weeks spent taking screenshots, re-requesting utility bills, and compiling manual audit reports.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#033653]/10 border border-[#033653] space-y-1 shadow-xs">
                  <div className="font-semibold text-[#033653] uppercase font-mono flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#66cc00]" />
                    <span>The KYP Approach: Always-On Risk Intelligence</span>
                  </div>
                  <p className="text-[#033653] leading-relaxed">
                    24/7 background sentinel tracking corporate filings, beneficial ownership mutations, adverse media, WebCompli card scheme rules, and transactional signals with audit reports generated in 60 seconds.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={routes.platform}
                  className="w-full kyp-btn-primary py-3 px-4 rounded-full text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <span>See How KYP Replaces Point-in-Time Reviews</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 – INDUSTRY TABS (Replaces Image 1 card grid with interactive tabs & simulation) */}
      <IndustryTabs />

      {/* THE RISK INTELLIGENCE GRAPH™ (Flagship Section from Recording 2026-11-02 153705) */}
      <RiskIntelligenceGraphShowcase />

      {/* PURPOSE-BUILT OPERATING SOLUTIONS CARDS (Horizontal Suite from Recording 2026-11-02 153808) */}
      <PurposeBuiltSolutions />

      {/* SECTION 5 – PLATFORM HIGHLIGHTS (Expansive light layout & animated analytics command center) */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000000] text-white border border-[#033653] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#66cc00] animate-pulse" />
              <span>PLATFORM ARCHITECTURE &bull; UNIFIED ENGINE</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mt-3 tracking-tight">
              One Platform. Complete Risk Intelligence.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              KYP brings merchant onboarding, due diligence, continuous monitoring, and audit reporting together in one unified command center.
            </p>
          </div>

          {/* Feature 1: AI-Powered Onboarding & Live Command Sentinel (Image 2 Interactive Demo) */}
          <div className="space-y-6 pt-4 border-b border-slate-200 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000000] text-white border border-[#033653] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#66cc00] animate-pulse" />
                  <span>Feature 01 &bull; Onboarding Acceleration &amp; Live Command</span>
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#000000] tracking-tight">
                  AI-Powered Onboarding &amp; Portfolio Risk Command
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                  Check documents, validate information, and resolve issues before submission. Help partners correct blurry or outdated documentation in real time rather than discovering issues after submission. Filter records, investigate high-risk flags, and export 60-second compliance dossiers.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end items-start lg:items-end font-mono text-xs">
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#66cc00]" />
                  <span>Auto-populated questionnaires</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#66cc00]" />
                  <span>Discrepancy detection engine</span>
                </div>
                <Link
                  href={routes.platformAiOnboarding}
                  className="kyp-btn-primary px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 mt-2 shadow-sm"
                >
                  <span>Explore AI Onboarding</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* AI Onboarding Interactive Sentinel with Motion Effects (Image 2) */}
            <div className="w-full pt-4">
              <OnboardingInterface />
            </div>
          </div>

          {/* Feature 2: Continuous Intelligence Pipeline (Filling Red Box from Image 1 with Full Narrative) */}
          <div className="py-16 border-b border-slate-200 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000000] text-white border border-[#033653] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#66cc00] animate-pulse" />
                  <span>Feature 02 &bull; Multi-Stream Risk Pipeline</span>
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#000000] tracking-tight">
                  Continuous Intelligence Pipeline
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                  Synthesize multi-source telemetry feeds into automated risk scoring, real-time policy rules, and sub-second compliance decisions across your entire merchant ecosystem.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end items-start lg:items-end font-mono text-xs">
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#66cc00]" />
                  <span>9-Stream Telemetry Ingestion</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#66cc00]" />
                  <span>Sub-30s SLA Decisioning</span>
                </div>
              </div>
            </div>

            <ArchitecturalIntelligenceFlow />
          </div>

          {/* Feature 3: Graph Intelligence */}
          <div className="space-y-6 pt-12 border-t border-slate-200">
            <div className="max-w-3xl">
              <span className="text-xs font-mono bg-[#000000] text-white px-3.5 py-1 rounded-full border border-[#033653] uppercase tracking-wider font-bold">
                Feature 03 &bull; Visual Contagion Analysis
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#000000] tracking-tight mt-3">
                Graph Intelligence
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-2">
                Understand relationships between businesses, individuals, ownership structures, and connected risks. Unravel circular holdings and exposed beneficial ownership.
              </p>
            </div>
            <GraphIntelligence />
          </div>
        </div>
      </section>

      {/* SECTION 6 – USE CASES */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono text-white uppercase tracking-widest font-bold">
              Application Matrix
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mt-2 tracking-tight">
              From Onboarding to Continuous Risk Intelligence.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Explore how KYP addresses complex regulatory demands across every stage of the third-party risk lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCasesData.slice(0, 9).map((uc) => (
              <UseCaseCard key={uc.slug} useCase={uc} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSING SPEED SLAS & LIVE WORKFLOW DEMO */}
      <WorkflowSLADemo />

      {/* SECTION 7 – ANIMATED PLATFORM FLOW (Detailed Pipeline Section) */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <PlatformFlow />
        </div>
      </section>

      {/* SECTION 8 – PLATFORM BENEFITS */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono text-white uppercase tracking-widest font-bold">
              Enterprise Outcomes
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mt-2 tracking-tight">
              Move from Periodic Reviews to Continuous Risk Intelligence.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-all">
              <div className="text-2xl font-mono font-bold text-white">60 Seconds</div>
              <h3 className="text-lg font-bold text-slate-900">Full Audit Reports in Seconds</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Replace weeks of manual screenshot gathering and file compiling with instant, tamper-evident audit dossiers ready for regulators.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-all">
              <div className="text-2xl font-mono font-bold text-sky-700">24/7 Sentinel</div>
              <h3 className="text-lg font-bold text-slate-900">Continuous Ecosystem Surveillance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Always-on tracking across partner registries, watchlists, and websites so compliance teams never miss a material risk shift.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-all">
              <div className="text-2xl font-mono font-bold text-teal-700">Policy Matched</div>
              <h3 className="text-lg font-bold text-slate-900">Monitoring Aligned to Internal Policy</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Configure alert thresholds, review frequencies, and escalation rules strictly around your institution&apos;s risk tolerance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-all">
              <div className="text-2xl font-mono font-bold text-white">WebCompli™</div>
              <h3 className="text-lg font-bold text-slate-900">Zero Card Scheme Non-Compliance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated website crawler detecting Mastercard BRAM &amp; Visa VIRP issues before card schemes issue non-compliance fines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-all">
              <div className="text-2xl font-mono font-bold text-indigo-700">-75% Hours</div>
              <h3 className="text-lg font-bold text-slate-900">Reduced Manual Due Diligence</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Eliminate repetitive chasing and document verification tasks, freeing senior compliance officers for high-value risk governance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-all">
              <div className="text-2xl font-mono font-bold text-white">Early Warning</div>
              <h3 className="text-lg font-bold text-slate-900">Behavioural &amp; Financial Signals</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Surface emerging risk signals, management turnover, and volumetric anomalies before they escalate into financial write-offs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 – TESTIMONIALS */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto">
            <span className="text-xs font-mono text-white uppercase tracking-widest font-bold">
              Industry Testimonials
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mt-2 tracking-tight">
              Hear What Our Clients and Partners Have to Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="relative w-28 h-8">
                      <Image
                        src={item.logo}
                        alt={item.company}
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                    <span className="text-[10px] font-mono text-slate-600 px-2.5 py-0.5 rounded bg-white border border-slate-200 font-semibold">
                      {item.tag}
                    </span>
                  </div>
                  <Quote className="w-5 h-5 text-emerald-600" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {item.quote}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <div className="text-xs font-bold text-slate-900">{item.author}</div>
                  <div className="text-[11px] text-slate-500">{item.role} &bull; {item.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 – LATEST NEWS */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono bg-[#000000] text-white px-3.5 py-1 rounded-full border border-[#033653] uppercase tracking-widest font-bold">
                Intelligence Dispatch
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 tracking-tight">
                Latest News &amp; Perspectives
              </h2>
            </div>
            <Link
              href={routes.news}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#033653] hover:text-[#66cc00] transition-colors"
            >
              <span>View All News &amp; Press</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestThreeNews.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
