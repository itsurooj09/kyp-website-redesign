"use client";

import React, { useState, useEffect } from "react";
import { Check, Clock, Globe, Activity, Sparkles } from "lucide-react";

export default function ProvenInProduction() {
  const [pipelineStep, setPipelineStep] = useState(0);

  // Auto-advancing pipeline simulation in KYP brand palette (#000000, #66cc00, #66cc00, #033653)
  useEffect(() => {
    const interval = setInterval(() => {
      setPipelineStep((prev) => (prev + 1) % 5);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-white  relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000000] text-white border border-[#033653] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#66cc00] animate-pulse" />
            <span>PROVEN IN PRODUCTION &bull; HIGH-VOLUME RELIABILITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#000000] font-heading">
            Built for High-Volume Financial Operations
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Enterprise-grade infrastructure delivering defensible risk assessments, real-time telemetry cross-matching, and sub-minute audit packaging at global scale.
          </p>
        </div>

        {/* 4 Cards in 1 Single Line across desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* CARD 1: 99%+ Accuracy SLA | Line-Item Precision */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#66cc00] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer">
            {/* Top Interactive Visual: Invoice / Entity Validation Card */}
            <div className="w-full h-44 rounded-xl bg-slate-50 border border-slate-200 p-4 shadow-xs relative overflow-hidden flex flex-col justify-between kyp-grid-pattern">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-xs font-bold text-[#000000] font-mono">Invoice Validation</span>
                <span className="px-2 py-0.5 rounded-full bg-[#000000] text-white border border-[#033653] text-[10px] font-bold font-mono">
                  99.7%
                </span>
              </div>

              <div className="space-y-2 py-1 text-xs font-mono">
                <div className="flex items-center justify-between text-slate-600">
                  <span className="text-slate-400">Invoice #</span>
                  <span className="font-semibold text-[#000000] flex items-center gap-1.5">
                    INV-10294
                    <Check className="w-3.5 h-3.5 text-[#66cc00]" />
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span className="text-slate-400">Amount</span>
                  <span className="font-semibold text-[#000000] flex items-center gap-1.5">
                    $18,420
                    <Check className="w-3.5 h-3.5 text-[#66cc00]" />
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span className="text-slate-400">Vendor</span>
                  <span className="font-semibold text-[#000000] flex items-center gap-1.5">
                    Prime Ltd
                    <Check className="w-3.5 h-3.5 text-[#66cc00]" />
                  </span>
                </div>
              </div>

              {/* Verified Ribbon in Brand Lime */}
              <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                <div className="w-[99.7%] h-full bg-[#66cc00] rounded-full" />
              </div>
            </div>

            {/* Bottom Metrics */}
            <div className="pt-6 space-y-1">
              <div className="flex items-baseline justify-between">
                <span className="text-4xl font-extrabold text-[#000000] font-heading">
                  99%+
                </span>
                <span className="text-xs font-mono text-slate-500 font-semibold text-right">
                  Accuracy<br />SLA
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 pt-1">
                Line-Item Precision
              </h3>
            </div>
          </div>

          {/* CARD 2: 30 seconds Speed SLA | Fast Turnaround */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#66cc00] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer">
            {/* Top Interactive Visual: 5-Step Pipeline Flow */}
            <div className="w-full h-44 rounded-xl bg-slate-50 border border-slate-200 p-4 shadow-xs relative overflow-hidden flex flex-col justify-between kyp-grid-pattern">
              
              {/* Top Pipeline Stepper */}
              <div className="flex items-center justify-between relative mt-4 px-1">
                {/* Connecting Line */}
                <div className="absolute left-3 right-3 top-3 h-0.5 bg-slate-200 -z-0" />
                <div 
                  className="absolute left-3 top-3 h-0.5 bg-[#66cc00] -z-0 transition-all duration-500" 
                  style={{ width: `${(pipelineStep / 4) * 85}%` }}
                />

                {[
                  { num: 1, label: "Receive" },
                  { num: 2, label: "Structure" },
                  { num: 3, label: "Reason" },
                  { num: 4, label: "Resolve" },
                  { num: 5, label: "Post" },
                ].map((st, sIdx) => {
                  const isPassed = sIdx <= pipelineStep;
                  const isCurrent = sIdx === pipelineStep;

                  return (
                    <div key={st.num} className="flex flex-col items-center relative z-10">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold font-mono transition-all duration-300 ${
                          isCurrent
                            ? "bg-[#000000] text-[#66cc00] ring-2 ring-[#66cc00] scale-110 shadow-sm"
                            : isPassed
                            ? "bg-[#66cc00] text-black"
                            : "bg-white border-2 border-slate-300 text-slate-400"
                        }`}
                      >
                        {st.num}
                      </div>
                      <span className={`text-[9px] font-mono mt-2 font-medium ${
                        isCurrent ? "text-black font-bold" : "text-slate-500"
                      }`}>
                        {st.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Live Timer Pill */}
              <div className="flex justify-end pt-2">
                <span className="px-2.5 py-1 rounded bg-[#000000] border border-slate-800 text-white font-mono text-[11px] font-bold flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-[#66cc00]" />
                  <span>00:30</span>
                </span>
              </div>
            </div>

            {/* Bottom Metrics */}
            <div className="pt-6 space-y-1">
              <div className="flex items-baseline justify-between">
                <span className="text-4xl font-extrabold text-[#66cc00] font-heading flex items-baseline gap-1.5">
                  30 <span className="text-2xl font-bold text-[#000000]">seconds</span>
                </span>
                <span className="text-xs font-mono text-slate-500 font-semibold text-right">
                  Speed<br />SLA
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 pt-1">
                Fast Turnaround
              </h3>
            </div>
          </div>

          {/* CARD 3: 125 Markets and Languages | Global Operational Reach */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#66cc00] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer">
            {/* Top Interactive Visual: Global Registry Route Map */}
            <div className="w-full h-44 rounded-xl bg-slate-50 border border-slate-200 p-3 shadow-xs relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="px-2 py-0.5 rounded bg-[#000000] text-white border border-slate-800 text-[10px] font-bold font-mono">
                  HQ US-East / London
                </span>
                <Globe className="w-4 h-4 text-[#66cc00]" />
              </div>

              {/* SVG Curved Network Flight Lines */}
              <svg viewBox="0 0 300 130" className="w-full h-full">
                {/* Background Regions */}
                <ellipse cx="85" cy="55" rx="42" ry="24" fill="#033653" fillOpacity="0.08" />
                <ellipse cx="175" cy="45" rx="35" ry="20" fill="#033653" fillOpacity="0.08" />
                <ellipse cx="255" cy="110" rx="38" ry="22" fill="#033653" fillOpacity="0.08" />

                {/* Connecting Curved Lines */}
                <path d="M 85 55 Q 130 20 175 45" fill="none" stroke="#66cc00" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M 85 55 Q 120 80 165 110" fill="none" stroke="#66cc00" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M 85 55 Q 170 60 255 110" fill="none" stroke="#033653" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Moving Photons */}
                <circle r="2" fill="#66cc00">
                  <animateMotion path="M 85 55 Q 130 20 175 45" dur="2.4s" repeatCount="indefinite" />
                </circle>
                <circle r="2" fill="#66cc00">
                  <animateMotion path="M 85 55 Q 120 80 165 110" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle r="2" fill="#033653">
                  <animateMotion path="M 85 55 Q 170 60 255 110" dur="3.6s" repeatCount="indefinite" />
                </circle>

                {/* Destination Hubs */}
                <circle cx="175" cy="45" r="3" fill="#66cc00" />
                <circle cx="165" cy="110" r="3" fill="#66cc00" />
                <circle cx="255" cy="110" r="3" fill="#033653" />
              </svg>
            </div>

            {/* Bottom Metrics */}
            <div className="pt-6 space-y-1">
              <div className="flex items-baseline justify-between">
                <span className="text-4xl font-extrabold text-[#000000] font-heading">
                  125
                </span>
                <span className="text-xs font-mono text-slate-500 font-semibold text-right">
                  Markets and<br />Languages
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 pt-1">
                Global Operational Reach
              </h3>
            </div>
          </div>

          {/* CARD 4: 100M+ Transactions Processed | Production-Scale Volume */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#66cc00] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer">
            {/* Top Interactive Visual: Real-Time Batch Processing Card */}
            <div className="w-full h-44 rounded-xl bg-slate-50 border border-slate-200 p-4 shadow-xs relative overflow-hidden flex flex-col justify-between kyp-grid-pattern">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-xs font-bold text-[#000000] font-mono">Batch 48291</span>
                <span className="px-2 py-0.5 rounded-full bg-[#000000] text-white border border-[#033653] text-[10px] font-bold font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#66cc00] animate-ping" />
                  Processing
                </span>
              </div>

              <div className="space-y-2 py-1 text-xs font-mono">
                <div className="flex items-center justify-between text-slate-600">
                  <span className="text-slate-400">TX-2018</span>
                  <span className="font-semibold text-[#000000] flex items-center gap-1.5">
                    $14,920
                    <Check className="w-3.5 h-3.5 text-[#66cc00]" />
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span className="text-slate-400">TX-2019</span>
                  <span className="font-semibold text-[#000000] flex items-center gap-1.5">
                    $8,440
                    <Check className="w-3.5 h-3.5 text-[#66cc00]" />
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span className="text-slate-400">TX-2020</span>
                  <span className="font-semibold text-[#000000] flex items-center gap-1.5">
                    $26,105
                    <Check className="w-3.5 h-3.5 text-[#66cc00]" />
                  </span>
                </div>
              </div>

              {/* Progress Indicator in Brand Lime */}
              <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                <div className="w-4/5 h-full bg-[#66cc00] rounded-full animate-pulse" />
              </div>
            </div>

            {/* Bottom Metrics */}
            <div className="pt-6 space-y-1">
              <div className="flex items-baseline justify-between">
                <span className="text-4xl font-extrabold text-[#000000] font-heading">
                  100M+
                </span>
                <span className="text-xs font-mono text-slate-500 font-semibold text-right">
                  Transactions<br />Processed
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 pt-1">
                Production-Scale Volume
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
