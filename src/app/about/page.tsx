import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, ShieldCheck, Sparkles, Building, CheckCircle2, Award, Globe, Network, MapPin, Mail } from "lucide-react";
import { routes } from "@/lib/routes";
import { trustedPartners, credentials } from "@/data/testimonials";
import AnalyticsDashboard from "@/components/product/AnalyticsDashboard";
import KYPLottie from "@/components/lottie/KYPLottie";

export const metadata: Metadata = {
  title: "About KYP | Intelligence That Helps Businesses Understand Risk",
  description:
    "KYP is a real-time third-party risk intelligence platform delivering a complete picture of the partners a business relies upon. Headquartered in London.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-slate-900 relative overflow-hidden">
      
      {/* HERO */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28  bg-gradient-to-b from-slate-50/80 via-white to-slate-50/40 kyp-grid-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000000] border border-[#033653] text-xs font-mono text-white mb-6 font-bold shadow-xs">
            <span className="w-4 h-4 inline-flex items-center justify-center">
              <KYPLottie type="heroRadar" className="w-4 h-4" />
            </span>
            <span>ABOUT KNOW YOUR PARTNER (KYP)</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#000000] max-w-4xl mx-auto leading-[1.08] font-heading">
            Intelligence That Helps Businesses Understand Risk.
          </h1>

          <p className="text-lg sm:text-xl text-[#033653] mt-6 max-w-3xl mx-auto leading-relaxed font-semibold">
            KYP is a real-time third-party risk intelligence platform that delivers a complete picture of the partners, merchants, and entities a business relies upon.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={routes.bookDemo}
              className="px-8 py-3.5 rounded-full bg-[#66cc00] hover:bg-[#55b300] text-[#000000] text-sm font-extrabold flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <span>Schedule a Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={routes.platform}
              className="px-8 py-3.5 rounded-full bg-white border border-[#033653] text-[#033653] hover:bg-slate-50 text-sm font-semibold flex items-center gap-2 transition-all"
            >
              <span>Explore Platform Technology</span>
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION & WHAT KYP DOES – STACKED TOP-TO-BOTTOM (UPPER NEACHE) */}
      <section className="py-20 lg:py-28 bg-slate-50 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          {/* Upper Section: Centered Narrative & KPIs */}
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#000000] text-white border border-[#033653] text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#66cc00] animate-pulse" />
              <span>Our Purpose</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#000000] tracking-tight">
              Empowering Regulated Firms with Always-On Risk Intelligence.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Modern commerce moves at digital speed, but compliance reviews have remained trapped in manual, point-in-time cycles. KYP was founded to close this critical vulnerability.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
              By uniting corporate registries, sanctions screening, adverse media, merchant website surveillance (WebCompli), and transaction patterns into an always-on sentinel, KYP gives compliance leaders the clarity needed to act before risks turn into regulatory penalties or financial losses.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <div className="p-4 px-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4 text-left">
                <div className="text-3xl font-extrabold text-[#66cc00] font-mono">100%</div>
                <div>
                  <div className="text-xs text-slate-900 font-bold">Continuous Coverage</div>
                  <div className="text-[10px] text-slate-500 font-mono">Real-time event sentinels</div>
                </div>
              </div>
              <div className="p-4 px-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4 text-left">
                <div className="text-3xl font-extrabold text-[#033653] font-mono">180+</div>
                <div>
                  <div className="text-xs text-slate-900 font-bold">Global Registries</div>
                  <div className="text-[10px] text-slate-500 font-mono">Direct corporate data feeds</div>
                </div>
              </div>
            </div>
          </div>

          {/* Neache (Below): Full-Width Centered Analytics Dashboard */}
          <div className="max-w-6xl mx-auto pt-2">
            <AnalyticsDashboard />
          </div>
        </div>
      </section>

      {/* APPROACH TO CONTINUOUS RISK INTELLIGENCE WITH DARK BLACK HOVER */}
      <section className="py-20 lg:py-28 bg-white ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto space-y-3">
            <span className="text-xs font-mono bg-[#000000] text-white px-3.5 py-1 rounded-full border border-[#033653] uppercase tracking-widest font-bold">
              The KYP Difference
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#000000] tracking-tight">
              Our Core Architecture Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm hover:shadow-2xl hover:bg-[#000000] hover:border-[#033653] group cursor-pointer transition-all duration-300 hover:-translate-y-1.5">
              <div className="w-10 h-10 rounded-xl bg-[#000000] border border-[#033653] group-hover:border-[#66cc00] flex items-center justify-center text-white group-hover:text-[#66cc00] font-mono font-bold transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-[#000000] group-hover:text-white transition-colors">Event-Driven Sentinel</h3>
              <p className="text-xs text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                Rather than checking partners once per year, our sentinels continuously listen for corporate registry filings, management resignations, and adverse news 24/7/365.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm hover:shadow-2xl hover:bg-[#000000] hover:border-[#033653] group cursor-pointer transition-all duration-300 hover:-translate-y-1.5">
              <div className="w-10 h-10 rounded-xl bg-[#000000] border border-[#033653] group-hover:border-[#66cc00] flex items-center justify-center text-white group-hover:text-[#66cc00] font-mono font-bold transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-[#000000] group-hover:text-white transition-colors">Graph-Powered Entity Resolution</h3>
              <p className="text-xs text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                Corporate risk is rarely isolated. Graph Intelligence maps cross-border connections, director networks, and beneficial ownership trees to expose contagion pathways.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm hover:shadow-2xl hover:bg-[#000000] hover:border-[#033653] group cursor-pointer transition-all duration-300 hover:-translate-y-1.5">
              <div className="w-10 h-10 rounded-xl bg-[#000000] border border-[#033653] group-hover:border-[#66cc00] flex items-center justify-center text-white group-hover:text-[#66cc00] font-mono font-bold transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-[#000000] group-hover:text-white transition-colors">Sovereign Human Governance</h3>
              <p className="text-xs text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                We believe AI should eliminate manual document busywork and surface hidden anomalies, while authorized compliance officers retain full approval authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFIED PARTNERS & CREDENTIALS */}
      <section className="py-20 lg:py-28 bg-slate-50 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto">
            <span className="text-xs font-mono bg-[#000000] text-white px-3.5 py-1 rounded-full border border-[#033653] uppercase tracking-widest font-bold">
              Industry Credentials &amp; Alliances
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000000] mt-2 tracking-tight">
              Verified Partners, Certifications &amp; Accreditations
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Recognized by industry leaders, regulatory bodies, and European fintech accelerators.
            </p>
          </div>

          {/* 4 Credentials Cards in 1 Single Line across desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3 shadow-sm hover:shadow-2xl hover:bg-[#000000] hover:border-[#033653] group cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative w-16 h-16 mx-auto group-hover:brightness-125 transition-all">
                  <Image src={cred.logo} alt={cred.name} fill className="object-contain" />
                </div>
                <h4 className="text-sm font-bold text-[#000000] group-hover:text-white transition-colors">{cred.name}</h4>
                <p className="text-xs text-slate-600 group-hover:text-slate-300 transition-colors">{cred.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-slate-200">
            <div className="text-center text-xs font-mono text-slate-500 uppercase tracking-widest mb-6 font-semibold">
              Official Strategic Partners &bull; Collaborative Ecosystem
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {trustedPartners.map((partner, idx) => (
                <div key={idx} className="relative w-32 h-10 opacity-80 hover:opacity-100 transition-opacity">
                  <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Note: Per user explicit specification, final CTA banner is completely removed from all pages. */}
    </div>
  );
}
