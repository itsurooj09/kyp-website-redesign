"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Check, Clock, Sparkles, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import { routes } from "@/lib/routes";

interface WorkflowStep {
  id: string;
  label: string;
  timeDisplay: string;
  timeSeconds: number;
  description: string;
  metric: string;
  metricLabel: string;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: "receive",
    label: "Receive",
    timeDisplay: "2.5s",
    timeSeconds: 2.5,
    description: "Multi-channel ingestion of corporate registry filings, passports, and merchant KYC intake data.",
    metric: "<3.0s",
    metricLabel: "Ingestion SLA",
  },
  {
    id: "structure",
    label: "Structure",
    timeDisplay: "9.0s",
    timeSeconds: 9.0,
    description: "OCR document parsing, discrepancy detection, and automated cross-checking against 180+ global registries.",
    metric: "99.4%",
    metricLabel: "Extraction Accuracy",
  },
  {
    id: "reason",
    label: "Reason",
    timeDisplay: "18.0s",
    timeSeconds: 18.0,
    description: "Agentic AI graph traversal, unravelling complex holding structures and beneficial ownership contagion.",
    metric: "Sub-Second",
    metricLabel: "UBO Resolution",
  },
  {
    id: "resolve",
    label: "Resolve",
    timeDisplay: "24.5s",
    timeSeconds: 24.5,
    description: "WebCompli™ automated card scheme checks (Mastercard BRAM & Visa VIRP) and volumetric transaction anomaly detection.",
    metric: "0 BRAM Fines",
    metricLabel: "Rule Compliance",
  },
  {
    id: "post",
    label: "Post",
    timeDisplay: "30.0s",
    timeSeconds: 30.0,
    description: "Generating cryptographic SHA-256 immutable audit trail and regulator-ready compliance pack in under 30 seconds.",
    metric: "FCA Defensible",
    metricLabel: "Regulator Readiness",
  },
];

export default function WorkflowSLADemo() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(2); // Default to "Reason" like video frame 1
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Automatic progression through stages
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % WORKFLOW_STEPS.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentStep = WORKFLOW_STEPS[activeStepIndex];
  const isFinalStep = activeStepIndex === WORKFLOW_STEPS.length - 1;

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-kyp-charcoal/60 via-kyp-navy/30 to-black border-b border-kyp-teal/15 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-kyp-navy/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative & SLA Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kyp-lime/10 border border-kyp-lime/30 text-xs font-mono text-kyp-lime font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>PROCESSING SPEED SLAS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Better Risk Outcomes for Every Transaction.
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              From fragmented inputs to validated transactions in as fast as 10 seconds, backed by a{" "}
              <strong className="text-kyp-lime font-bold">30-second processing SLA</strong>.{" "}
              <strong className="text-white">100% Agentic Processing</strong>.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <div className="p-3.5 rounded-xl bg-kyp-navy-surface/90 border border-kyp-teal/20">
                <div className="text-[10px] font-mono text-gray-400 uppercase">Legacy Review Cycle</div>
                <div className="text-xl font-bold text-red-400 line-through mt-0.5">Weeks to Months</div>
              </div>
              <div className="p-3.5 rounded-xl bg-kyp-navy-surface/90 border border-kyp-lime/30 shadow-lime-glow/10">
                <div className="text-[10px] font-mono text-kyp-lime uppercase font-semibold">KYP Processing SLA</div>
                <div className="text-xl font-bold text-white mt-0.5 flex items-center gap-1.5">
                  <span>&lt; 30.0s</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-kyp-lime/20 text-kyp-lime font-mono">100% Defensible</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={routes.bookDemo}
                className="kyp-btn-primary px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2 shadow-lime-glow"
              >
                <span>Experience Live Sentinel</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Console Terminal with 5 Interactive Step Nodes */}
          <div className="lg:col-span-7">
            <div className="w-full bg-gradient-to-b from-[#031d2e] via-[#02131f] to-black rounded-3xl border border-kyp-teal/30 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden kyp-grid-pattern">
              {/* Terminal Top Window Bar */}
              <div className="flex items-center justify-between border-b border-kyp-teal/15 pb-4 mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[11px] font-mono text-kyp-teal tracking-wider ml-2 uppercase font-semibold">
                    ITEMIZE WORKFLOW / LIVE DEMO
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/60 border border-kyp-teal/20 text-xs font-mono text-kyp-mint hover:border-kyp-lime transition-all cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3 h-3 text-kyp-lime" />
                      <span>Auto</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-kyp-mint" />
                      <span>Paused</span>
                    </>
                  )}
                </button>
              </div>

              {/* 5 Connected Step Circles (Horizontal Stream) */}
              <div className="relative py-6 my-2">
                {/* Background Connecting Line */}
                <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-0.5 bg-kyp-teal/20 z-0" />

                {/* Animated Glowing Progress Line */}
                <div
                  className="absolute top-1/2 left-8 -translate-y-1/2 h-0.5 bg-gradient-to-r from-kyp-teal via-kyp-lime to-emerald-400 z-0 transition-all duration-500 ease-out"
                  style={{
                    width: `${(activeStepIndex / (WORKFLOW_STEPS.length - 1)) * (100 - 16)}%`,
                  }}
                />

                {/* Node Circles */}
                <div className="relative z-10 flex items-center justify-between">
                  {WORKFLOW_STEPS.map((step, idx) => {
                    const isActive = idx === activeStepIndex;
                    const isPassed = idx < activeStepIndex;

                    return (
                      <button
                        type="button"
                        key={step.id}
                        onClick={() => {
                          setActiveStepIndex(idx);
                          setIsPlaying(false);
                        }}
                        className="group flex flex-col items-center focus:outline-none cursor-pointer"
                      >
                        {/* Circle Element */}
                        <div
                          className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm transition-all duration-300 relative ${
                            isActive
                              ? isFinalStep
                                ? "bg-emerald-500 text-black font-bold scale-110 shadow-[0_0_30px_rgba(16,185,129,0.7)] ring-4 ring-emerald-400/40"
                                : "bg-gradient-to-br from-kyp-teal to-blue-600 text-white font-bold scale-115 shadow-[0_0_28px_rgba(0,229,255,0.6)] ring-4 ring-kyp-teal/40"
                              : isPassed
                              ? "bg-kyp-navy-surface border-2 border-kyp-lime/60 text-kyp-lime"
                              : "bg-kyp-navy/60 border border-kyp-teal/30 text-gray-400 group-hover:border-kyp-teal group-hover:text-white"
                          }`}
                        >
                          {isPassed ? (
                            <Check className="w-5 h-5 text-kyp-lime stroke-[3]" />
                          ) : (
                            <span>{step.label}</span>
                          )}

                          {/* Outer pulse wave on active node */}
                          {isActive && (
                            <span className="absolute inset-0 rounded-full border-2 border-white/60 animate-ping opacity-30" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* END-TO-END PROCESSING Stopwatch Indicator */}
              <div className="text-center my-6 space-y-2">
                <div className="text-[10px] sm:text-xs font-mono text-gray-400 uppercase tracking-widest font-semibold">
                  END-TO-END PROCESSING
                </div>

                <div className="inline-flex items-center justify-center gap-2">
                  <div
                    className={`text-2xl sm:text-4xl font-mono font-bold px-5 py-2 rounded-2xl border transition-all duration-300 flex items-center gap-2 ${
                      isFinalStep
                        ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.3)]"
                        : "bg-black/60 border-kyp-teal/30 text-white"
                    }`}
                  >
                    <span>{currentStep.timeDisplay}</span>
                    {isFinalStep && (
                      <span className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-black">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Dynamic Step Intelligence Brief */}
                <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto pt-1 leading-relaxed">
                  <strong className="text-kyp-mint">{currentStep.label}:</strong> {currentStep.description}
                </p>
              </div>

              {/* Bottom Footer Tags: VALIDATED • TRACEABLE • AUDITABLE */}
              <div className="pt-6 border-t border-kyp-teal/15 flex flex-wrap items-center justify-center gap-4 text-[10px] sm:text-[11px] font-mono tracking-widest text-kyp-teal font-semibold">
                <span className="hover:text-white transition-colors">VALIDATED</span>
                <span className="text-gray-600">&bull;</span>
                <span className="hover:text-white transition-colors">TRACEABLE</span>
                <span className="text-gray-600">&bull;</span>
                <span className="hover:text-white transition-colors">AUDITABLE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
