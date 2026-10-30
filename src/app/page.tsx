import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, Sparkles, Network, Activity, FileCheck, ExternalLink, Quote } from "lucide-react";
import { routes } from "@/lib/routes";
import { industriesData } from "@/data/industries";
import { useCasesData } from "@/data/useCases";
import { platformFeaturesData } from "@/data/platformFeatures";
import { testimonialsData, trustedPartners, credentials } from "@/data/testimonials";
import { newsArticlesData } from "@/data/news";

import HeroGraphVisualization from "@/components/product/HeroGraphVisualization";
import PlatformFlow from "@/components/product/PlatformFlow";
import IndustryCard from "@/components/cards/IndustryCard";
import UseCaseCard from "@/components/cards/UseCaseCard";
import NewsCard from "@/components/cards/NewsCard";
import DashboardMockup from "@/components/product/DashboardMockup";
import GraphIntelligence from "@/components/product/GraphIntelligence";

export default function HomePage() {
  const latestThreeNews = newsArticlesData.slice(0, 3);

  return (
    <div className="w-full bg-black text-white overflow-hidden">
      
      {/* SECTION 1 – HERO */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-kyp-teal/15 kyp-grid-pattern">
        {/* Ambient Radial Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-kyp-navy/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-kyp-teal/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kyp-lime/10 border border-kyp-lime/30 text-xs font-mono text-kyp-lime mb-6 font-semibold animate-pulse-slow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-POWERED ENTERPRISE RISK &amp; COMPLIANCE PLATFORM</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.08] font-heading">
            Know Your Portfolio. <br />
            <span className="kyp-gradient-text">Uncover Hidden Risks.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
            Empowering regulated firms to proactively detect financial, regulatory and reputational risks across their entire network.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={routes.bookDemo}
              className="kyp-btn-primary px-8 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-lime-glow"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={routes.platform}
              className="kyp-btn-secondary px-8 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2"
            >
              <span>Explore the Platform</span>
            </Link>
          </div>

          {/* Hero Visual Layer Composition */}
          <HeroGraphVisualization />
        </div>
      </section>

      {/* SECTION 2 – TRUST AND CREDIBILITY STRIP */}
      <section className="py-12 bg-kyp-charcoal/70 border-b border-kyp-teal/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[11px] font-mono tracking-widest text-kyp-teal uppercase font-semibold">
              Trusted by Regulated Leaders &bull; Industry Verified Credibility
            </span>
          </div>

          {/* Partner & Client Logo Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-center">
            {trustedPartners.map((partner, idx) => (
              <div
                key={idx}
                className="h-14 p-2 rounded-xl bg-kyp-navy-surface/40 border border-kyp-teal/10 hover:border-kyp-teal/30 flex items-center justify-center transition-all group"
              >
                <div className="relative w-28 h-8 opacity-70 group-hover:opacity-100 transition-opacity">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Accreditations & Certifications */}
          <div className="mt-8 pt-8 border-t border-kyp-teal/10 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 font-mono">
            {credentials.map((cred, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="relative w-5 h-5">
                  <Image src={cred.logo} alt={cred.name} fill className="object-contain" />
                </div>
                <span>{cred.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 – THE PROBLEM */}
      <section className="py-20 lg:py-28 border-b border-kyp-teal/15 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono text-kyp-lime uppercase tracking-widest font-semibold">
                The Compliance Blind Spot
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                Can You See Risk Emerging Before It Becomes a Financial Issue?
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Traditional periodic reviews leave institutions dangerously exposed. When compliance teams rely on manual annual checks and fragmented point-in-time screening tools, they remain blind to the continuous changes that occur across customer, merchant, and partner networks.
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-kyp-navy-surface border border-kyp-teal/20 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Post-Onboarding Drift</h4>
                    <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                      Approved partners alter product lines, appoint sanctioned directors, or experience website non-compliance months after initial vetting.
                    </p>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-kyp-navy-surface border border-kyp-teal/20 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Disjointed Intelligence Silos</h4>
                    <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                      Registry data, PEP screening, website crawling, and transaction patterns reside in disconnected databases with no unified context.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Comparison Matrix */}
            <div className="lg:col-span-6 bg-kyp-navy-surface/80 p-6 sm:p-8 rounded-2xl border border-kyp-teal/25 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center justify-between">
                <span>Periodic Reviews vs Continuous KYP</span>
                <span className="text-xs font-mono text-kyp-lime">EVOLUTION</span>
              </h3>

              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-xl bg-black border border-red-500/20 space-y-1">
                  <div className="font-semibold text-red-400 uppercase font-mono">Legacy Approach: Point-in-Time</div>
                  <p className="text-gray-400 leading-relaxed">
                    Reviews performed once every 12 months. Weeks spent taking screenshots, re-requesting utility bills, and compiling manual audit reports.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black border border-kyp-lime/40 space-y-1 shadow-lime-glow">
                  <div className="font-semibold text-kyp-lime uppercase font-mono flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-kyp-lime" />
                    <span>The KYP Approach: Always-On Risk Intelligence</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    24/7 background sentinel tracking corporate filings, beneficial ownership mutations, adverse media, WebCompli card scheme rules, and transactional signals with audit reports generated in 60 seconds.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={routes.platform}
                  className="w-full kyp-btn-primary py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <span>See How KYP Replaces Point-in-Time Reviews</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 – INDUSTRIES */}
      <section className="py-20 lg:py-28 bg-kyp-charcoal/40 border-b border-kyp-teal/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono text-kyp-teal uppercase tracking-widest font-semibold">
              Industry Coverage
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2 tracking-tight">
              Built for Complex Risk Environments.
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mt-3 leading-relaxed">
              Tailored risk models for payment institutions, acquirers, iGaming operators, banks, and high-growth fintech platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesData.map((ind) => (
              <IndustryCard key={ind.id} industry={ind} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 – PLATFORM HIGHLIGHTS */}
      <section className="py-20 lg:py-28 border-b border-kyp-teal/15 kyp-grid-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono text-kyp-lime uppercase tracking-widest font-semibold">
              Platform Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2 tracking-tight">
              One Platform. Complete Risk Intelligence.
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mt-3 leading-relaxed">
              KYP brings merchant onboarding, due diligence, continuous monitoring, and audit reporting together in one unified command center.
            </p>
          </div>

          {/* Feature 1: AI-Powered Onboarding */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-12 border-b border-kyp-teal/10">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono text-kyp-lime uppercase tracking-wider font-semibold">
                Feature 01 &bull; Onboarding Acceleration
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                AI-Powered Onboarding
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Check documents, validate information, and resolve issues before submission. Help partners correct blurry or outdated documentation in real time rather than discovering issues after submission.
              </p>
              <ul className="space-y-2 text-xs text-gray-400 pt-2 font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-kyp-lime" />
                  Auto-populated questionnaires from registry filings
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-kyp-lime" />
                  Discrepancy detection across documents &amp; registries
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href={routes.platformAiOnboarding}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-kyp-lime hover:text-white transition-colors"
                >
                  <span>Explore AI Onboarding</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <DashboardMockup />
            </div>
          </div>

          {/* Feature 2: Data & Integrations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-12 border-b border-kyp-teal/10">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <PlatformFlow />
            </div>
            <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
              <span className="text-xs font-mono text-kyp-teal uppercase tracking-wider font-semibold">
                Feature 02 &bull; Unified Aggregation
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Data &amp; Integrations
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Bring together business information, external intelligence, and internal systems to build a consolidated risk assessment. Cross-reference onboarding answers against 180+ commercial registries and watchlists.
              </p>
              <ul className="space-y-2 text-xs text-gray-400 pt-2 font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-kyp-teal" />
                  Global registry feeds &amp; PEP/Sanction databases
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-kyp-teal" />
                  Connected cyber-risk feeds from partners like RiskRecon
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href={routes.platformDataIntegrations}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-kyp-teal hover:text-white transition-colors"
                >
                  <span>Explore Data Integrations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Feature 3: Graph Intelligence */}
          <div className="py-12">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono text-kyp-mint uppercase tracking-wider font-semibold">
                Feature 03 &bull; Visual Contagion Analysis
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Graph Intelligence
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mt-2">
                Understand relationships between businesses, individuals, ownership structures, and connected risks. Unravel circular holdings and exposed beneficial ownership.
              </p>
            </div>
            <GraphIntelligence />
          </div>
        </div>
      </section>

      {/* SECTION 6 – USE CASES */}
      <section className="py-20 lg:py-28 bg-kyp-charcoal/50 border-b border-kyp-teal/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono text-kyp-mint uppercase tracking-widest font-semibold">
              Application Matrix
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2 tracking-tight">
              From Onboarding to Continuous Risk Intelligence.
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mt-3 leading-relaxed">
              Explore how KYP addresses complex regulatory demands across every stage of the third-party risk lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCasesData.map((uc) => (
              <UseCaseCard key={uc.slug} useCase={uc} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 – ANIMATED PLATFORM FLOW (Detailed Pipeline Section) */}
      <section className="py-20 lg:py-28 border-b border-kyp-teal/15 kyp-grid-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <PlatformFlow />
        </div>
      </section>

      {/* SECTION 8 – PLATFORM BENEFITS */}
      <section className="py-20 lg:py-28 bg-kyp-charcoal/30 border-b border-kyp-teal/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono text-kyp-lime uppercase tracking-widest font-semibold">
              Enterprise Outcomes
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2 tracking-tight">
              Move from Periodic Reviews to Continuous Risk Intelligence.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-kyp-navy-surface border border-kyp-teal/20 space-y-3">
              <div className="text-2xl font-mono font-bold text-kyp-lime">60 Seconds</div>
              <h3 className="text-lg font-bold text-white">Full Audit Reports in Seconds</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Replace weeks of manual screenshot gathering and file compiling with instant, tamper-evident audit dossiers ready for regulators.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-kyp-navy-surface border border-kyp-teal/20 space-y-3">
              <div className="text-2xl font-mono font-bold text-kyp-teal">24/7 Sentinel</div>
              <h3 className="text-lg font-bold text-white">Continuous Ecosystem Surveillance</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Always-on tracking across partner registries, watchlists, and websites so compliance teams never miss a material risk shift.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-kyp-navy-surface border border-kyp-teal/20 space-y-3">
              <div className="text-2xl font-mono font-bold text-kyp-mint">Policy Matched</div>
              <h3 className="text-lg font-bold text-white">Monitoring Aligned to Internal Policy</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Configure alert thresholds, review frequencies, and escalation rules strictly around your institution&apos;s risk tolerance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-kyp-navy-surface border border-kyp-teal/20 space-y-3">
              <div className="text-2xl font-mono font-bold text-kyp-lime">WebCompli™</div>
              <h3 className="text-lg font-bold text-white">Zero Card Scheme Non-Compliance</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Automated website crawler detecting Mastercard BRAM &amp; Visa VIRP issues before card schemes issue non-compliance fines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-kyp-navy-surface border border-kyp-teal/20 space-y-3">
              <div className="text-2xl font-mono font-bold text-kyp-teal">-75% Hours</div>
              <h3 className="text-lg font-bold text-white">Reduced Manual Due Diligence</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Eliminate repetitive chasing and document verification tasks, freeing senior compliance officers for high-value risk governance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-kyp-navy-surface border border-kyp-teal/20 space-y-3">
              <div className="text-2xl font-mono font-bold text-kyp-mint">Early Warning</div>
              <h3 className="text-lg font-bold text-white">Behavioural &amp; Financial Signals</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Surface emerging risk signals, management turnover, and volumetric anomalies before they escalate into financial write-offs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 – TESTIMONIALS */}
      <section className="py-20 lg:py-28 border-b border-kyp-teal/15 kyp-grid-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto">
            <span className="text-xs font-mono text-kyp-lime uppercase tracking-widest font-semibold">
              Industry Testimonials
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2 tracking-tight">
              Hear What Our Clients and Partners Have to Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="kyp-glass-card p-6 sm:p-7 rounded-2xl border border-kyp-teal/20 flex flex-col justify-between space-y-4"
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
                    <span className="text-[10px] font-mono text-kyp-teal px-2 py-0.5 rounded bg-black/60 border border-kyp-teal/20">
                      {item.tag}
                    </span>
                  </div>
                  <Quote className="w-5 h-5 text-kyp-lime/60" />
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {item.quote}
                  </p>
                </div>

                <div className="pt-3 border-t border-kyp-teal/15">
                  <div className="text-xs font-bold text-white">{item.author}</div>
                  <div className="text-[11px] text-gray-400">{item.role} &bull; {item.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 – LATEST NEWS */}
      <section className="py-20 lg:py-28 bg-kyp-charcoal/40 border-b border-kyp-teal/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono text-kyp-teal uppercase tracking-widest font-semibold">
                Intelligence Dispatch
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
                Latest News &amp; Perspectives
              </h2>
            </div>
            <Link
              href={routes.news}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-kyp-lime hover:text-white transition-colors"
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

      {/* SECTION 11 – FINAL CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-kyp-navy-surface via-kyp-navy/60 to-black text-center relative overflow-hidden">
        <div className="absolute inset-0 kyp-radial-glow pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kyp-lime/10 border border-kyp-lime/30 text-xs font-mono text-kyp-lime font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            READY TO TRANSFORM YOUR COMPLIANCE OPERATIONS?
          </span>

          <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
            See the KYP Platform in Action.
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover how KYP can help you monitor risks, simplify compliance and reduce manual due diligence.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={routes.contact}
              className="kyp-btn-primary px-8 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-lime-glow"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={routes.platform}
              className="kyp-btn-secondary px-8 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2"
            >
              <span>Explore Platform Technology</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
