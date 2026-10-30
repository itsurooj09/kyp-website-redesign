"use client";

import React from "react";
import Image from "next/image";
import { Shield, AlertCircle, CheckCircle2, TrendingUp, Network, Sparkles, Activity, FileCheck } from "lucide-react";

export default function HeroGraphVisualization() {
  return (
    <div className="relative w-full max-w-5xl mx-auto mt-12 lg:mt-16 select-none">
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-kyp-lime/20 via-kyp-teal/20 to-kyp-navy/40 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000 -z-10" />

      {/* Main Layered Canvas Surface */}
      <div className="relative rounded-2xl border border-kyp-teal/30 bg-black/90 backdrop-blur-xl overflow-hidden shadow-2xl p-4 sm:p-6 lg:p-8 kyp-grid-pattern">
        
        {/* Top Control Bar of Dashboard */}
        <div className="flex flex-wrap items-center justify-between pb-6 border-b border-kyp-teal/15 gap-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-kyp-lime" />
            </div>
            <div className="h-4 w-px bg-kyp-teal/20 mx-1" />
            <span className="text-xs font-mono text-gray-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-kyp-lime animate-pulse" />
              KYP Enterprise Risk Sentinel • v4.2 Live
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <div className="px-3 py-1 rounded-md bg-kyp-navy/60 border border-kyp-teal/25 text-kyp-mint flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-kyp-lime" />
              <span>1,248 Merchants Monitored</span>
            </div>
            <div className="px-3 py-1 rounded-md bg-kyp-navy/60 border border-kyp-teal/25 text-gray-300">
              Audit Readiness: <span className="text-kyp-lime font-bold">100%</span>
            </div>
          </div>
        </div>

        {/* Central Layered Architecture: Actual UI Display Screenshot + Layered Interactive Node Overlay */}
        <div className="relative mt-6 rounded-xl overflow-hidden border border-kyp-teal/25 bg-kyp-navy-surface/60">
          
          {/* Real Platform Screenshot Base */}
          <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px]">
            <Image
              src="/images/screenshots/kyp-ui-display.webp"
              alt="KYP Risk Intelligence Platform Interface"
              fill
              priority
              className="object-cover object-top opacity-85 hover:opacity-95 transition-opacity duration-500"
            />
            {/* Dark gradient overlay for enterprise legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>

          {/* Floating Data Card 1: Top Left - AI Discrepancy Check */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 max-w-xs p-3.5 rounded-xl bg-black/90 backdrop-blur-md border border-kyp-teal/30 shadow-2xl animate-float hidden sm:block">
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="text-[10px] font-mono uppercase text-kyp-teal font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-kyp-lime" />
                AI Document Sentinel
              </span>
              <span className="px-1.5 py-0.5 rounded bg-kyp-lime/10 text-kyp-lime text-[9px] font-mono">
                PASS
              </span>
            </div>
            <div className="text-xs font-bold text-white">
              Apex Global Merchant Ltd
            </div>
            <p className="text-[11px] text-gray-400 mt-0.5">
              Articles of Association cross-checked with UK Companies House. 0 Discrepancies.
            </p>
          </div>

          {/* Floating Data Card 2: Top Right - Graph Intelligence Node */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 max-w-xs p-3.5 rounded-xl bg-black/90 backdrop-blur-md border border-kyp-mint/30 shadow-2xl hidden md:block">
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="text-[10px] font-mono uppercase text-kyp-mint font-semibold flex items-center gap-1">
                <Network className="w-3 h-3 text-kyp-teal" />
                Graph Intelligence
              </span>
              <span className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-400 text-[9px] font-mono">
                FLAGGED
              </span>
            </div>
            <div className="text-xs font-bold text-white">
              Beneficial Ownership Contagion
            </div>
            <p className="text-[11px] text-gray-400 mt-0.5">
              38.5% UBO connected to secondary entity under regulatory review.
            </p>
          </div>

          {/* Floating Data Card 3: Bottom Left - Continuous WebCompli Status */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 max-w-xs p-3.5 rounded-xl bg-black/95 backdrop-blur-md border border-kyp-teal/30 shadow-2xl">
            <div className="flex items-center justify-between gap-3 mb-1.5">
              <span className="text-[10px] font-mono uppercase text-kyp-lime font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-kyp-lime" />
                WebCompli Automated Sweep
              </span>
              <span className="text-[9px] font-mono text-gray-400">12m ago</span>
            </div>
            <div className="text-xs font-semibold text-white">
              Mastercard BRAM & Visa VIRP: Compliant
            </div>
            <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-kyp-lime h-full rounded-full w-full" />
            </div>
          </div>

          {/* Floating Data Card 4: Bottom Right - One-Click Audit Report */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 max-w-xs p-3.5 rounded-xl bg-black/95 backdrop-blur-md border border-kyp-teal/30 shadow-2xl hidden sm:block">
            <div className="flex items-center justify-between gap-3 mb-1.5">
              <span className="text-[10px] font-mono uppercase text-kyp-mint font-semibold flex items-center gap-1">
                <FileCheck className="w-3.5 h-3.5 text-kyp-mint" />
                Audit Trail Immutability
              </span>
              <span className="text-[9px] font-mono text-kyp-lime">READY</span>
            </div>
            <div className="text-xs font-bold text-white">
              Regulator Audit Pack: 60 Seconds
            </div>
            <p className="text-[10px] text-gray-400 mt-0.5">
              Timestamped cryptographic log covering full KYC, AML & monitoring history.
            </p>
          </div>
        </div>

        {/* Bottom Metrics Ticker */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-kyp-teal/15 text-center">
          <div className="p-2">
            <div className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              10×
            </div>
            <div className="text-xs text-gray-400 font-mono mt-0.5">
              Faster Partner Onboarding
            </div>
          </div>
          <div className="p-2">
            <div className="text-2xl lg:text-3xl font-extrabold text-kyp-lime tracking-tight">
              60 Sec
            </div>
            <div className="text-xs text-gray-400 font-mono mt-0.5">
              Audit Report Generation
            </div>
          </div>
          <div className="p-2">
            <div className="text-2xl lg:text-3xl font-extrabold text-kyp-teal tracking-tight">
              24/7/365
            </div>
            <div className="text-xs text-gray-400 font-mono mt-0.5">
              Continuous Portfolio Surveillance
            </div>
          </div>
          <div className="p-2">
            <div className="text-2xl lg:text-3xl font-extrabold text-kyp-mint tracking-tight">
              Zero
            </div>
            <div className="text-xs text-gray-400 font-mono mt-0.5">
              Scheme Violations (BRAM / VIRP)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
