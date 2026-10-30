"use client";

import React, { useState } from "react";
import { FileCheck, Download, CheckCircle, Clock, Shield, Sparkles, FileText, ArrowRight } from "lucide-react";

export default function AuditInterface() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGenerated(true);
    }, 1200);
  };

  return (
    <div className="w-full bg-black/95 rounded-2xl border border-kyp-teal/25 overflow-hidden shadow-2xl kyp-grid-pattern">
      <div className="p-4 sm:p-6 border-b border-kyp-teal/15 bg-kyp-navy-surface/80 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-kyp-lime animate-pulse" />
            <h3 className="text-base sm:text-lg font-bold text-white">
              Instant Audit-Ready Reporting Engine
            </h3>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-kyp-lime/10 text-kyp-lime border border-kyp-lime/30">
              60-Second Generation
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-0.5">
            Compile complete onboarding evidence, continuous screening logs, and analyst decisions in seconds.
          </p>
        </div>

        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="kyp-btn-primary px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 shadow-lime-glow"
        >
          {isGenerating ? (
            <>
              <span className="w-3.5 h-3.5 rounded-full border-2 border-black border-t-transparent animate-spin" />
              <span>Compiling Audit Pack...</span>
            </>
          ) : generated ? (
            <>
              <CheckCircle className="w-4 h-4 text-black" />
              <span>Regulator Pack Generated (1.4MB)</span>
            </>
          ) : (
            <>
              <FileCheck className="w-4 h-4 text-black" />
              <span>Generate Audit Pack in 60s</span>
            </>
          )}
        </button>
      </div>

      <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Immutable Audit Ledger */}
        <div className="lg:col-span-7 space-y-3">
          <div className="text-xs font-mono text-kyp-teal uppercase font-semibold flex items-center justify-between">
            <span>Cryptographic Activity Ledger</span>
            <span>All Timestamps Verified GMT</span>
          </div>

          <div className="space-y-2.5 font-mono text-xs">
            <div className="p-3 rounded-lg bg-kyp-navy-surface border border-kyp-teal/20 flex items-start justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-kyp-lime shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold">Initial KYB Approval Executed</div>
                  <div className="text-[10px] text-gray-400">Signed off by MLRO (User #4812) • Articles &amp; UBOs verified</div>
                </div>
              </div>
              <span className="text-[10px] text-gray-400 shrink-0">14 Oct 10:14:02</span>
            </div>

            <div className="p-3 rounded-lg bg-kyp-navy-surface border border-kyp-teal/20 flex items-start justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-kyp-teal shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold">WebCompli Periodic Sweep Passed</div>
                  <div className="text-[10px] text-gray-400">Mastercard BRAM &amp; Visa VIRP rule sets: 0 flags detected</div>
                </div>
              </div>
              <span className="text-[10px] text-gray-400 shrink-0">18 Oct 04:00:19</span>
            </div>

            <div className="p-3 rounded-lg bg-kyp-navy-surface border border-kyp-teal/20 flex items-start justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-kyp-mint shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold">Continuous PEP / Sanctions Re-Screening</div>
                  <div className="text-[10px] text-gray-400">OFAC, EU, UN, UK HMT watchlists verified clean</div>
                </div>
              </div>
              <span className="text-[10px] text-gray-400 shrink-0">24 Oct 16:32:41</span>
            </div>

            <div className="p-3 rounded-lg bg-kyp-navy-surface border border-kyp-teal/20 flex items-start justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-kyp-lime shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold">Director Filing Verification (UK Companies House)</div>
                  <div className="text-[10px] text-gray-400">Confirmation statement CS01 matched with zero changes</div>
                </div>
              </div>
              <span className="text-[10px] text-gray-400 shrink-0">29 Oct 11:20:05</span>
            </div>
          </div>
        </div>

        {/* Right Column: One-Click Audit Pack Preview */}
        <div className="lg:col-span-5 bg-kyp-navy/40 p-6 rounded-xl border border-kyp-teal/20 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-kyp-mint uppercase font-semibold">
              Export Dossier Package
            </span>
            <span className="text-[10px] font-mono text-kyp-lime">FCA / PRA Compliant</span>
          </div>

          <div className="p-4 rounded-xl bg-black border border-kyp-teal/20 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-kyp-navy flex items-center justify-center text-kyp-lime font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">KYP_Audit_Dossier_ApexVelocity.pdf</div>
                <div className="text-[10px] font-mono text-gray-400">Generated: 30 Oct 2026 • 28 Pages</div>
              </div>
            </div>

            <ul className="text-xs text-gray-300 space-y-1 font-mono pt-1">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-kyp-lime" />
                Entity Identification &amp; UBO Graph
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-kyp-lime" />
                Watchlist &amp; Adverse Media Screening Logs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-kyp-lime" />
                WebCompli Website Audit Snapshots
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-kyp-lime" />
                Complete Chronological Decision History
              </li>
            </ul>
          </div>

          <div className="text-xs text-gray-400 leading-relaxed">
            Eliminate 3 weeks of manual spreadsheet gathering, screenshotting, and email chasing during regulatory examinations.
          </div>

          <button
            onClick={handleGenerate}
            className="w-full kyp-btn-secondary py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 hover:border-kyp-lime transition-all"
          >
            <Download className="w-3.5 h-3.5 text-kyp-lime" />
            <span>Download Sample Compliance Dossier</span>
          </button>
        </div>
      </div>
    </div>
  );
}
