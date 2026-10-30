"use client";

import React, { useState } from "react";
import { UploadCloud, CheckCircle2, AlertTriangle, FileText, Sparkles, ArrowRight, RefreshCw, ShieldAlert, Check } from "lucide-react";

export default function OnboardingInterface() {
  const [activeStep, setActiveStep] = useState<number>(2);
  const [fixedDiscrepancy, setFixedDiscrepancy] = useState(false);

  return (
    <div className="w-full bg-black/95 rounded-2xl border border-kyp-teal/25 overflow-hidden shadow-2xl kyp-grid-pattern">
      {/* Top Banner */}
      <div className="p-4 sm:p-6 border-b border-kyp-teal/15 bg-kyp-navy-surface/80 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-kyp-lime animate-pulse" />
            <h3 className="text-base sm:text-lg font-bold text-white">
              AI-Powered KYB Onboarding Sentinel
            </h3>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-kyp-lime/10 text-kyp-lime border border-kyp-lime/30">
              Interactive Self-Correction Demo
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-0.5">
            Applicant self-corrects document discrepancies in real time before formal submission.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="px-3 py-1 rounded bg-kyp-navy border border-kyp-teal/20 text-kyp-mint">
            Policy: Strict UK / EU FinTech KYB
          </span>
        </div>
      </div>

      {/* Progress Stepper */}
      <div className="grid grid-cols-4 border-b border-kyp-teal/15 text-center text-xs font-mono">
        <button
          onClick={() => setActiveStep(1)}
          className={`py-3 px-2 border-r border-kyp-teal/15 transition-colors ${
            activeStep === 1 ? "bg-kyp-navy/60 text-kyp-lime font-bold border-b-2 border-b-kyp-lime" : "text-gray-400"
          }`}
        >
          1. Upload
        </button>
        <button
          onClick={() => setActiveStep(2)}
          className={`py-3 px-2 border-r border-kyp-teal/15 transition-colors ${
            activeStep === 2 ? "bg-kyp-navy/60 text-kyp-lime font-bold border-b-2 border-b-kyp-lime" : "text-gray-400"
          }`}
        >
          2. AI Check
        </button>
        <button
          onClick={() => setActiveStep(3)}
          className={`py-3 px-2 border-r border-kyp-teal/15 transition-colors ${
            activeStep === 3 ? "bg-kyp-navy/60 text-kyp-lime font-bold border-b-2 border-b-kyp-lime" : "text-gray-400"
          }`}
        >
          3. Resolve
        </button>
        <button
          onClick={() => setActiveStep(4)}
          className={`py-3 px-2 transition-colors ${
            activeStep === 4 ? "bg-kyp-navy/60 text-kyp-lime font-bold border-b-2 border-b-kyp-lime" : "text-gray-400"
          }`}
        >
          4. Submit
        </button>
      </div>

      {/* Main Interactive Stage Body */}
      <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Document List & AI Verification Results */}
        <div className="lg:col-span-7 space-y-4">
          <div className="text-xs font-mono text-kyp-teal uppercase font-semibold flex items-center justify-between">
            <span>Uploaded Entity Verification Evidence</span>
            <span>3 of 3 Files Scanned</span>
          </div>

          {/* Doc 1: Articles of Association */}
          <div className="p-4 rounded-xl bg-kyp-navy-surface border border-kyp-teal/20 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-kyp-lime" />
                <div>
                  <div className="text-xs font-semibold text-white">Articles_of_Association_2024.pdf</div>
                  <div className="text-[10px] font-mono text-gray-400">UK Companies House Certified Copy</div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-kyp-lime bg-kyp-lime/10 px-2 py-0.5 rounded border border-kyp-lime/30">
                <CheckCircle2 className="w-3 h-3" />
                MATCHED 100%
              </span>
            </div>
            <div className="text-[11px] text-gray-400 pl-8">
              AI extracted Registration #09823411, incorporation date 14/02/2019, and confirmed active status.
            </div>
          </div>

          {/* Doc 2: Proof of Address with Discrepancy */}
          <div
            className={`p-4 rounded-xl transition-all duration-300 ${
              fixedDiscrepancy
                ? "bg-kyp-navy-surface border-kyp-lime"
                : "bg-red-950/20 border-red-500/40"
            } border space-y-2`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className={`w-5 h-5 ${fixedDiscrepancy ? "text-kyp-lime" : "text-red-400"}`} />
                <div>
                  <div className="text-xs font-semibold text-white">
                    {fixedDiscrepancy ? "Utility_Bill_Updated_Oct2024.pdf" : "Utility_Bill_Outdated_Mar2023.pdf"}
                  </div>
                  <div className="text-[10px] font-mono text-gray-400">Registered Office Address Verification</div>
                </div>
              </div>
              <span
                className={`inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded border ${
                  fixedDiscrepancy
                    ? "text-kyp-lime bg-kyp-lime/10 border-kyp-lime/30"
                    : "text-red-400 bg-red-500/10 border-red-500/30"
                }`}
              >
                {fixedDiscrepancy ? (
                  <>
                    <Check className="w-3 h-3" />
                    DISCREPANCY RESOLVED
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-3 h-3" />
                    ISSUE FLAGGED (&gt;90 DAYS OLD)
                  </>
                )}
              </span>
            </div>
            <div className="text-[11px] text-gray-300 pl-8 leading-relaxed">
              {fixedDiscrepancy ? (
                <span className="text-kyp-mint">
                  Fresh utility bill provided (issued 18 days ago). Registered address matches UK Companies House filing perfectly.
                </span>
              ) : (
                <span className="text-red-300">
                  Document issue date is older than your configured 90-day compliance rule. Partner was notified to upload a recent statement prior to submitting.
                </span>
              )}
            </div>

            {!fixedDiscrepancy && (
              <div className="pl-8 pt-2">
                <button
                  onClick={() => setFixedDiscrepancy(true)}
                  className="px-3 py-1.5 rounded-lg bg-kyp-lime text-black font-semibold text-xs flex items-center gap-1.5 hover:bg-kyp-lime/90 transition-colors shadow-lime-glow"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Simulate Partner Self-Correcting Document</span>
                </button>
              </div>
            )}
          </div>

          {/* Doc 3: UBO Identity Verification */}
          <div className="p-4 rounded-xl bg-kyp-navy-surface border border-kyp-teal/20 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-kyp-teal" />
                <div>
                  <div className="text-xs font-semibold text-white">Passport_Marcus_Vance_UBO.pdf</div>
                  <div className="text-[10px] font-mono text-gray-400">Director &amp; 38.5% Beneficial Controller</div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-kyp-teal bg-kyp-teal/10 px-2 py-0.5 rounded border border-kyp-teal/30">
                <CheckCircle2 className="w-3 h-3" />
                OCR &amp; MRZ VERIFIED
              </span>
            </div>
            <div className="text-[11px] text-gray-400 pl-8">
              Biometric checksum verified. Watchlist screening executed: 0 Sanctions matches, 1 cleared homonym.
            </div>
          </div>
        </div>

        {/* Right: Submission Status & Policy Compliance Summary */}
        <div className="lg:col-span-5 bg-kyp-navy/40 p-6 rounded-xl border border-kyp-teal/20 space-y-5">
          <div className="text-xs font-mono text-kyp-mint uppercase font-semibold flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-kyp-lime" />
            Compliance Gatekeeper Status
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div className="flex justify-between py-2 border-b border-kyp-teal/15">
              <span className="text-gray-400">Partner Entity</span>
              <span className="text-white font-bold">Apex Velocity Ltd</span>
            </div>
            <div className="flex justify-between py-2 border-b border-kyp-teal/15">
              <span className="text-gray-400">Questionnaire Completion</span>
              <span className="text-kyp-lime font-bold">100% (Auto-Populated)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-kyp-teal/15">
              <span className="text-gray-400">Document Discrepancies</span>
              <span className={fixedDiscrepancy ? "text-kyp-lime font-bold" : "text-yellow-400 font-bold"}>
                {fixedDiscrepancy ? "0 Remaining" : "1 Unresolved"}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-kyp-teal/15">
              <span className="text-gray-400">Submission Gate</span>
              <span className={fixedDiscrepancy ? "text-kyp-lime font-bold" : "text-red-400 font-bold"}>
                {fixedDiscrepancy ? "CLEARED FOR APPROVAL" : "BLOCKED (Self-Service)"}
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-black/70 border border-kyp-teal/20 text-xs text-gray-300 leading-relaxed">
            {fixedDiscrepancy ? (
              <div className="flex items-start gap-2 text-kyp-lime">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  All submission criteria satisfied! The partner dossier has been delivered directly into your analyst review queue with complete audit evidence.
                </span>
              </div>
            ) : (
              <div className="flex items-start gap-2 text-yellow-300">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-yellow-400" />
                <span>
                  The applicant cannot submit an incomplete or outdated package. This eliminates 80% of back-and-forth emails for your compliance team.
                </span>
              </div>
            )}
          </div>

          <button
            disabled={!fixedDiscrepancy}
            className={`w-full py-3 px-4 rounded-lg font-semibold text-xs flex items-center justify-center gap-2 transition-all ${
              fixedDiscrepancy
                ? "kyp-btn-primary shadow-lime-glow cursor-pointer"
                : "bg-gray-800 text-gray-500 cursor-not-allowed"
            }`}
          >
            <span>{fixedDiscrepancy ? "Approve Partner KYB Dossier" : "Awaiting Partner Document Correction"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-3 bg-black/80 border-t border-kyp-teal/15 text-center text-[10px] font-mono text-gray-500">
        KYP AI-Powered Business Onboarding Flow • Human-in-the-Loop Governance Retained
      </div>
    </div>
  );
}
