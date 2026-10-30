import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, ShieldCheck, Sparkles, Building, CheckCircle2, Award, Globe, Network, MapPin, Mail } from "lucide-react";
import { routes } from "@/lib/routes";
import { trustedPartners, credentials } from "@/data/testimonials";
import DashboardMockup from "@/components/product/DashboardMockup";

export const metadata: Metadata = {
  title: "About KYP | Intelligence That Helps Businesses Understand Risk",
  description:
    "KYP is a real-time third-party risk intelligence platform delivering a complete picture of the partners a business relies upon. Headquartered in London.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-black text-white relative overflow-hidden">
      
      {/* HERO */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-kyp-teal/15 kyp-grid-pattern">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-kyp-navy/35 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kyp-lime/10 border border-kyp-lime/30 text-xs font-mono text-kyp-lime mb-6 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            ABOUT KNOW YOUR PARTNER (KYP)
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.08]">
            Intelligence That Helps Businesses Understand Risk.
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
            KYP is a real-time third-party risk intelligence platform that delivers a complete picture of the partners, merchants, and entities a business relies upon.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={routes.bookDemo}
              className="kyp-btn-primary px-8 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-lime-glow"
            >
              <span>Schedule a Discussion</span>
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

      {/* MISSION & WHAT KYP DOES */}
      <section className="py-20 lg:py-28 bg-kyp-charcoal/40 border-b border-kyp-teal/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono text-kyp-lime uppercase tracking-widest font-semibold">
                Our Purpose
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Empowering Regulated Firms with Always-On Risk Intelligence.
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Modern commerce moves at digital speed, but compliance reviews have remained trapped in manual, point-in-time cycles. KYP was founded to close this critical vulnerability.
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                By uniting corporate registries, sanctions screening, adverse media, merchant website surveillance (WebCompli), and transaction patterns into an always-on sentinel, KYP gives compliance leaders the clarity needed to act before risks turn into regulatory penalties or financial losses.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-kyp-navy-surface border border-kyp-teal/20 space-y-1">
                  <div className="text-2xl font-bold text-kyp-lime font-mono">100%</div>
                  <div className="text-xs text-gray-300 font-semibold">Continuous Coverage</div>
                  <div className="text-[10px] text-gray-400">Moving beyond static annual checks</div>
                </div>
                <div className="p-4 rounded-xl bg-kyp-navy-surface border border-kyp-teal/20 space-y-1">
                  <div className="text-2xl font-bold text-kyp-teal font-mono">180+</div>
                  <div className="text-xs text-gray-300 font-semibold">Global Registries</div>
                  <div className="text-[10px] text-gray-400">Direct corporate data feeds</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH TO CONTINUOUS RISK INTELLIGENCE */}
      <section className="py-20 lg:py-28 border-b border-kyp-teal/15 kyp-grid-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono text-kyp-teal uppercase tracking-widest font-semibold">
              The KYP Difference
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2 tracking-tight">
              Our Core Architecture Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="kyp-glass-card p-6 sm:p-8 rounded-2xl border border-kyp-teal/20 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-kyp-navy border border-kyp-teal/30 flex items-center justify-center text-kyp-lime font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-white">Event-Driven Sentinel</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Rather than checking partners once per year, our sentinels continuously listen for corporate registry filings, management resignations, and adverse news 24/7/365.
              </p>
            </div>

            <div className="kyp-glass-card p-6 sm:p-8 rounded-2xl border border-kyp-teal/20 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-kyp-navy border border-kyp-teal/30 flex items-center justify-center text-kyp-teal font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-white">Graph-Powered Entity Resolution</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Corporate risk is rarely isolated. Graph Intelligence maps cross-border connections, director networks, and beneficial ownership trees to expose contagion pathways.
              </p>
            </div>

            <div className="kyp-glass-card p-6 sm:p-8 rounded-2xl border border-kyp-teal/20 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-kyp-navy border border-kyp-teal/30 flex items-center justify-center text-kyp-mint font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-white">Sovereign Human Governance</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                We believe AI should eliminate manual document busywork and surface hidden anomalies, while authorized compliance officers retain full approval authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFIED PARTNERS & CREDENTIALS */}
      <section className="py-20 lg:py-28 bg-kyp-charcoal/40 border-b border-kyp-teal/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto">
            <span className="text-xs font-mono text-kyp-lime uppercase tracking-widest font-semibold">
              Industry Credentials &amp; Alliances
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
              Verified Partners, Certifications &amp; Accreditations
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              Recognized by industry leaders, regulatory bodies, and European fintech accelerators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-kyp-navy-surface border border-kyp-teal/20 text-center space-y-3"
              >
                <div className="relative w-16 h-16 mx-auto">
                  <Image src={cred.logo} alt={cred.name} fill className="object-contain" />
                </div>
                <h4 className="text-sm font-bold text-white">{cred.name}</h4>
                <p className="text-xs text-gray-400">{cred.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-kyp-teal/15">
            <div className="text-center text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">
              Official Strategic Partners &bull; Collaborative Ecosystem
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {trustedPartners.map((partner, idx) => (
                <div key={idx} className="relative w-32 h-10 opacity-70 hover:opacity-100 transition-opacity">
                  <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HEADQUARTERS & CONTACT CTA */}
      <section className="py-24 bg-gradient-to-b from-kyp-navy-surface to-black text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 space-y-6">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-kyp-lime">
            <MapPin className="w-4 h-4" />
            <span>33 Queen St, London, EC4R 1AP, United Kingdom</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            See the Platform in Action.
          </h2>

          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Discover how KYP helps institutions monitor portfolios, detect emerging behavioural risks, and eliminate manual due diligence.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href={routes.contact}
              className="kyp-btn-primary px-8 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-lime-glow"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:hello@kyp.io"
              className="kyp-btn-secondary px-8 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-kyp-teal" />
              <span>Contact hello@kyp.io</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
