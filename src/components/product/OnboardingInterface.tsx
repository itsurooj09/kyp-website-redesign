"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  ShieldCheck,
  Check,
  UploadCloud,
  FileCheck2,
  Clock,
  Layers,
  Search,
} from "lucide-react";

export default function OnboardingInterface() {
  const [activeStep, setActiveStep] = useState<number>(2);
  const [fixedDiscrepancy, setFixedDiscrepancy] = useState<boolean>(false);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [scanProgress, setScanProgress] = useState<number>(0);

  // Trigger self-correction simulation with animated progress
  const handleSimulate = () => {
    setIsSimulating(true);
    setScanProgress(0);

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSimulating(false);
          setFixedDiscrepancy(true);
          return 100;
        }
        return prev + 25;
      });
    }, 250);
  };

  const handleReset = () => {
    setFixedDiscrepancy(false);
    setScanProgress(0);
  };

  return (
    <div className="w-full bg-[#080d09] rounded-3xl border border-[#1a2b1c] overflow-hidden shadow-2xl relative select-none">
      {/* Top Ambient Glow Reflection */}
      <div className="absolute top-0 right-1/4 w-96 h-48 bg-[#66cc00]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner Matching Image 2 */}
      <div className="p-4 sm:p-6 border-b border-[#1a2b1c] bg-[#0d140e]/90 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 relative z-10">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#66cc00] animate-ping" />
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              AI-Powered KYB Onboarding Sentinel
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#111e13] text-[#66cc00] border border-[#234327] font-bold shadow-xs">
              Interactive Self-Correction Demo
            </span>
          </div>
          <p className="text-xs text-[#9db39d] mt-1">
            Applicant self-corrects document discrepancies in real time before formal submission.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="px-3 py-1 rounded-full bg-[#000000] border border-[#033653] text-[#66cc00] font-semibold">
            Policy: Strict UK / EU FinTech KYB
          </span>
        </div>
      </div>

      {/* Progress Stepper with Animated Active Line */}
      <div className="grid grid-cols-4 border-b border-[#1a2b1c] text-center text-xs font-mono relative bg-[#090f0a]">
        {[
          { num: 1, label: "Upload" },
          { num: 2, label: "AI Check" },
          { num: 3, label: "Resolve" },
          { num: 4, label: "Submit" },
        ].map((st) => {
          const isActive = activeStep === st.num;
          return (
            <button
              type="button"
              key={st.num}
              onClick={() => setActiveStep(st.num)}
              className={`py-3.5 px-2 border-r border-[#1a2b1c] transition-all relative cursor-pointer font-bold ${
                isActive
                  ? "bg-[#111e13] text-[#66cc00] shadow-inner"
                  : "text-slate-400 hover:text-white hover:bg-[#0d140e]"
              }`}
            >
              <span>{st.num}. {st.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeStepperBar"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#66cc00] shadow-[0_0_8px_#66cc00]"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Interactive Stage Body */}
      <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Left Column: Uploaded Document Verification Evidence */}
        <div className="lg:col-span-7 space-y-4">
          <div className="text-xs font-mono text-[#66cc00] uppercase font-bold flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#66cc00]" />
              Uploaded Entity Verification Evidence
            </span>
            <span className="text-slate-400">3 of 3 Files Scanned</span>
          </div>

          {/* Doc 1: Articles of Association (Matched 100%) */}
          <motion.div
            whileHover={{ y: -2 }}
            className="p-4.5 rounded-2xl bg-[#0d140e] border border-[#1a2b1c] space-y-2 relative overflow-hidden group shadow-md transition-all"
          >
            {/* Subtle Laser Scan Line Animation */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#66cc00]/40 to-transparent pointer-events-none"
              style={{
                animation: "laser-scan 4s ease-in-out infinite alternate",
              }}
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#111e13] border border-[#234327] flex items-center justify-center text-[#66cc00]">
                  <FileText className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white tracking-tight">
                    Articles_of_Association_2024.pdf
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">
                    UK Companies House Certified Copy
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#66cc00] bg-[#111e13] px-2.5 py-1 rounded-full border border-[#234327] font-bold">
                <CheckCircle2 className="w-3 h-3" />
                MATCHED 100%
              </span>
            </div>
            <div className="text-[11px] text-[#9db39d] pl-12 leading-relaxed">
              AI extracted Registration #09823411, incorporation date 14/02/2019, and confirmed active status.
            </div>
          </motion.div>

          {/* Doc 2: Proof of Address with Discrepancy & Motion Transition */}
          <motion.div
            layout
            transition={{ duration: 0.4 }}
            className={`p-4.5 rounded-2xl transition-all duration-300 border relative overflow-hidden shadow-md ${
              fixedDiscrepancy
                ? "bg-[#0d140e] border-[#234327]"
                : "bg-[#180a0a] border-red-900/60"
            }`}
          >
            {/* Animated Laser Scan on Red Error state */}
            {!fixedDiscrepancy && (
              <div
                className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-red-500/60 to-transparent pointer-events-none"
                style={{
                  animation: "laser-scan 2.8s ease-in-out infinite alternate",
                  boxShadow: "0 0 10px #ef4444",
                }}
              />
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                    fixedDiscrepancy
                      ? "bg-[#111e13] border border-[#234327] text-[#66cc00]"
                      : "bg-red-950/50 border border-red-800/60 text-red-400"
                  }`}
                >
                  <FileText className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white tracking-tight">
                    {fixedDiscrepancy
                      ? "Utility_Bill_Updated_Oct2024.pdf"
                      : "Utility_Bill_Outdated_Mar2023.pdf"}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">
                    Registered Office Address Verification
                  </div>
                </div>
              </div>

              <span
                className={`inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-full border font-bold transition-all ${
                  fixedDiscrepancy
                    ? "text-[#66cc00] bg-[#111e13] border-[#234327]"
                    : "text-red-400 bg-red-950/50 border-red-800/60"
                }`}
              >
                {fixedDiscrepancy ? (
                  <>
                    <Check className="w-3 h-3 stroke-[3]" />
                    DISCREPANCY RESOLVED
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-3 h-3 text-red-400 animate-pulse" />
                    ISSUE FLAGGED (&gt;90 DAYS OLD)
                  </>
                )}
              </span>
            </div>

            <div className="text-[11px] pl-12 leading-relaxed pt-1">
              {fixedDiscrepancy ? (
                <span className="text-[#66cc00]">
                  Fresh utility statement provided (issued 18 days ago). Registered address matches Companies House registry 100%.
                </span>
              ) : (
                <span className="text-red-300">
                  Document issue date is older than configured 90-day compliance threshold. Partner notified to upload a recent statement prior to submitting.
                </span>
              )}
            </div>

            {/* Simulation Button / Progress Bar */}
            <div className="pl-12 pt-2">
              {isSimulating ? (
                <div className="space-y-1.5 max-w-md">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#66cc00]">
                    <span className="flex items-center gap-1">
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      Uploading &amp; Scanning Fresh Document...
                    </span>
                    <span>{scanProgress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-black/60 overflow-hidden border border-[#234327]">
                    <motion.div
                      className="h-full bg-[#66cc00] rounded-full shadow-[0_0_10px_#66cc00]"
                      style={{ width: `${scanProgress}%` }}
                    />
                  </div>
                </div>
              ) : !fixedDiscrepancy ? (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleSimulate}
                  type="button"
                  className="px-3.5 py-2 rounded-xl bg-[#66cc00] text-black font-bold text-xs flex items-center gap-2 hover:bg-[#7ced14] transition-all shadow-[0_4px_14px_rgba(102,204,0,0.4)] cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Simulate Partner Self-Correcting Document</span>
                </motion.button>
              ) : (
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-[11px] font-mono text-slate-400 hover:text-white underline transition-colors cursor-pointer"
                >
                  &larr; Reset Simulation
                </button>
              )}
            </div>
          </motion.div>

          {/* Doc 3: Passport UBO */}
          <motion.div
            whileHover={{ y: -2 }}
            className="p-4.5 rounded-2xl bg-[#0d140e] border border-[#1a2b1c] space-y-2 relative overflow-hidden group shadow-md transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#111e13] border border-[#234327] flex items-center justify-center text-[#66cc00]">
                  <FileText className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white tracking-tight">
                    Passport_Marcus_Vance_UBO.pdf
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">
                    Director &bull; 38.5% Beneficial Controller
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#66cc00] bg-[#000000] px-2.5 py-1 rounded-full border border-[#033653] font-bold">
                <CheckCircle2 className="w-3 h-3 text-[#66cc00]" />
                OCR &amp; MRZ VERIFIED
              </span>
            </div>
            <div className="text-[11px] text-[#9db39d] pl-12 leading-relaxed">
              Biometric checksum verified. Watchlist screening executed: 0 Sanctions matches, 1 cleared homonym.
            </div>
          </motion.div>
        </div>

        {/* Right Column: Compliance Gatekeeper Status Panel */}
        <div className="lg:col-span-5 bg-[#0d140e] p-6 sm:p-7 rounded-2xl border border-[#1a2b1c] space-y-5 shadow-xl relative overflow-hidden">
          <div className="text-xs font-mono text-[#66cc00] uppercase font-bold flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#66cc00]" />
            <span>Compliance Gatekeeper Status</span>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div className="flex justify-between py-2.5 border-b border-[#1a2b1c]">
              <span className="text-slate-400">Partner Entity</span>
              <span className="text-white font-bold">Apex Velocity Ltd</span>
            </div>
            <div className="flex justify-between py-2.5 border-b border-[#1a2b1c]">
              <span className="text-slate-400">Questionnaire Completion</span>
              <span className="text-[#66cc00] font-bold">100% (Auto-Populated)</span>
            </div>
            <div className="flex justify-between py-2.5 border-b border-[#1a2b1c]">
              <span className="text-slate-400">Document Discrepancies</span>
              <span
                className={`font-bold transition-colors ${
                  fixedDiscrepancy ? "text-[#66cc00]" : "text-yellow-400"
                }`}
              >
                {fixedDiscrepancy ? "0 Remaining" : "1 Unresolved"}
              </span>
            </div>
            <div className="flex justify-between py-2.5 border-b border-[#1a2b1c]">
              <span className="text-slate-400">Submission Gate</span>
              <span
                className={`font-bold transition-colors ${
                  fixedDiscrepancy ? "text-[#66cc00]" : "text-red-400"
                }`}
              >
                {fixedDiscrepancy ? "CLEARED FOR APPROVAL" : "BLOCKED (Self-Service)"}
              </span>
            </div>
          </div>

          {/* Dynamic Warning / Success Alert Box */}
          <AnimatePresence mode="wait">
            {fixedDiscrepancy ? (
              <motion.div
                key="cleared"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 rounded-xl bg-[#111e13] border border-[#234327] text-xs text-[#9db39d] leading-relaxed space-y-1.5"
              >
                <div className="flex items-center gap-2 text-[#66cc00] font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#66cc00]" />
                  <span>All compliance criteria satisfied!</span>
                </div>
                <p>
                  Partner dossier has been validated automatically and delivered straight into your analyst queue with full audit evidence.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="blocked"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 rounded-xl bg-black/70 border border-yellow-500/30 text-xs text-slate-300 leading-relaxed space-y-1.5"
              >
                <div className="flex items-center gap-2 text-yellow-400 font-bold">
                  <AlertTriangle className="w-4 h-4 text-yellow-400" />
                  <span>Submission Blocked</span>
                </div>
                <p>
                  The applicant cannot submit an incomplete or outdated package. This eliminates 80% of back-and-forth emails for your compliance team.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Action Button */}
          <button
            type="button"
            disabled={!fixedDiscrepancy}
            className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
              fixedDiscrepancy
                ? "bg-[#66cc00] text-black hover:bg-[#7ced14] shadow-[0_4px_16px_rgba(102,204,0,0.45)] cursor-pointer scale-102"
                : "bg-[#161c24] text-slate-500 border border-slate-800 cursor-not-allowed"
            }`}
          >
            <span>
              {fixedDiscrepancy
                ? "Approve Partner KYB Dossier"
                : "Awaiting Partner Document Correction"}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="p-3 bg-[#050806] border-t border-[#1a2b1c] text-center text-[10px] font-mono text-slate-500">
        KYP AI-Powered Business Onboarding Flow &bull; Human-in-the-Loop Governance Retained
      </div>
    </div>
  );
}
