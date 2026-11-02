"use client";

import React, { useState, useEffect } from "react";
import { Check, Clock, Globe, Activity, ArrowRight, Sparkles } from "lucide-react";

export default function ProvenInProduction() {
  const [pipelineStep, setPipelineStep] = useState(0);

  // Auto-advancing pipeline simulation in KYP brand palette (#000000, #66cc00, #c6f5ef, #6fd3c4, #033653)
  useEffect(() => {
    const interval = setInterval(() => {
      setPipelineStep((prev) => (prev + 1) % 5);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c6f5ef] border border-[#6fd3c4]/50 text-xs font-mono text-[#033653] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#66cc00]" />
            <span>PROVEN IN PRODUCTION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#000000] font-heading">
            Built for High-Volume Financial Operations
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Enterprise-grade infrastructure delivering defensible risk assessments, real-time telemetry cross-matching, and sub-minute audit packaging at global scale.
          </p>
        </div>

        {/* 4 Cards Grid Matching User Image 1:1 with Brand Palette */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* CARD 1: 99%+ Accuracy SLA | Line-Item Precision */}
          <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#6fd3c4] transition-all duration-300 flex flex-col justify-between group">
            {/* Top Interactive Visual: Invoice / Entity Validation Card */}
            <div className="w-full h-44 rounded-xl bg-white border border-slate-200 p-4 shadow-xs relative overflow-hidden flex flex-col justify-between kyp-grid-pattern">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-[#000000] font-mono">Invoice Validation</span>
                <span className="px-2 py-0.5 rounded-full bg-[#c6f5ef] text-[#033653] border border-[#6fd3c4]/50 text-[10px] font-bold font-mono">
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
              <div className="w-full h-1.5 rounded-full bg-[#c6f5ef] overflow-hidden">
                <div className="w-[99.7%] h-full bg-[#66cc00] rounded-full" />
              </div>
            </div>

            {/* Bottom Metrics */}
            <div className="pt-6 space-y-1">
              <div className="flex items-baseline justify-between">
                <span className="text-4xl font-extrabold text-[#000000] font-heading">
                  99%+
                </span>
                <span className="text-xs font-mono text-[#033653] font-semibold text-right">
                  Accuracy<br />SLA
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-800 pt-1">
                Line-Item Precision
              </h3>
            </div>
          </div>

          {/* CARD 2: 30 seconds Speed SLA | Fast Turnaround */}
          <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#6fd3c4] transition-all duration-300 flex flex-col justify-between group">
            {/* Top Interactive Visual: 5-Step Pipeline Flow */}
            <div className="w-full h-44 rounded-xl bg-white border border-slate-200 p-4 shadow-xs relative overflow-hidden flex flex-col justify-between kyp-grid-pattern">
              
              {/* Top Pipeline Stepper */}
              <div className="flex items-center justify-between relative mt-4 px-1">
                {/* Connecting Line */}
                <div className="absolute left-3 right-3 top-3 h-0.5 bg-slate-200 -z-0" />
                <div 
                  className="absolute left-3 top-3 h-0.5 bg-[#6fd3c4] -z-0 transition-all duration-500" 
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
                            ? "bg-[#033653] text-white ring-4 ring-[#c6f5ef] scale-110 shadow-sm"
                            : isPassed
                            ? "bg-[#66cc00] text-[#000000]"
                            : "bg-white border-2 border-slate-300 text-slate-400"
                        }`}
                      >
                        {st.num}
                      </div>
                      <span className={`text-[9px] font-mono mt-2 font-medium ${
                        isCurrent ? "text-[#033653] font-bold" : "text-slate-500"
                      }`}>
                        {st.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Live Timer Pill */}
              <div className="flex justify-end pt-2">
                <span className="px-2.5 py-1 rounded bg-[#c6f5ef] border border-[#6fd3c4]/50 text-[#033653] font-mono text-[11px] font-bold flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-[#033653]" />
                  <span>00:30</span>
                </span>
              </div>
            </div>

            {/* Bottom Metrics */}
            <div className="pt-6 space-y-1">
              <div className="flex items-baseline justify-between">
                <span className="text-4xl font-extrabold text-[#000000] font-heading">
                  30 seconds
                </span>
                <span className="text-xs font-mono text-[#033653] font-semibold text-right">
                  Speed<br />SLA
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-800 pt-1">
                Fast Turnaround
              </h3>
            </div>
          </div>

          {/* CARD 3: 125 Markets and Languages | Global Operational Reach */}
          <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#6fd3c4] transition-all duration-300 flex flex-col justify-between group">
            {/* Top Interactive Visual: World Map with Glowing Animated Hub */}
            <div className="w-full h-44 rounded-xl bg-white border border-slate-200 p-3 shadow-xs relative overflow-hidden flex flex-col items-center justify-center kyp-grid-pattern">
              
              <div className="absolute top-2 left-3 px-2 py-0.5 rounded bg-[#c6f5ef] text-[#033653] text-[10px] font-mono font-bold border border-[#6fd3c4]/40">
                HQ US-East / London
              </div>

              {/* Minimal SVG World Map Contours & Glowing Animated Rays */}
              <svg className="w-full h-32 text-slate-200" viewBox="0 0 320 160">
                <path
                  d="M40,50 Q60,30 90,45 Q110,60 100,90 Q80,120 50,110 Q30,90 40,50 Z"
                  fill="#f1f5f9"
                  stroke="#cbd5e1"
                  strokeWidth="0.8"
                />
                <path
                  d="M130,40 Q170,25 210,40 Q250,60 230,90 Q190,110 160,95 Q140,80 130,40 Z"
                  fill="#f1f5f9"
                  stroke="#cbd5e1"
                  strokeWidth="0.8"
                />
                <path
                  d="M150,90 Q180,90 190,130 Q170,150 150,135 Z"
                  fill="#f1f5f9"
                  stroke="#cbd5e1"
                  strokeWidth="0.8"
                />
                <path
                  d="M240,100 Q270,95 280,120 Q260,140 240,120 Z"
                  fill="#f1f5f9"
                  stroke="#cbd5e1"
                  strokeWidth="0.8"
                />

                {/* HQ Node */}
                <circle cx="85" cy="55" r="5" fill="#66cc00" className="animate-ping" />
                <circle cx="85" cy="55" r="3.5" fill="#033653" />

                {/* Animated Curved Connecting Rays in Brand Teal #6fd3c4 */}
                <path d="M 85 55 Q 130 30 175 45" fill="none" stroke="#6fd3c4" strokeWidth="1.2" strokeDasharray="3 3" />
                <path d="M 85 55 Q 120 80 165 110" fill="none" stroke="#66cc00" strokeWidth="1.2" strokeDasharray="3 3" />
                <path d="M 85 55 Q 170 60 255 110" fill="none" stroke="#033653" strokeWidth="1.2" strokeDasharray="3 3" />

                {/* Animated Data Packets along routes */}
                <circle r="2" fill="#6fd3c4">
                  <animateMotion path="M 85 55 Q 130 30 175 45" dur="2.4s" repeatCount="indefinite" />
                </circle>
                <circle r="2" fill="#66cc00">
                  <animateMotion path="M 85 55 Q 120 80 165 110" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle r="2" fill="#033653">
                  <animateMotion path="M 85 55 Q 170 60 255 110" dur="3.6s" repeatCount="indefinite" />
                </circle>

                {/* Destination Hubs */}
                <circle cx="175" cy="45" r="3" fill="#6fd3c4" />
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
                <span className="text-xs font-mono text-[#033653] font-semibold text-right">
                  Markets and<br />Languages
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-800 pt-1">
                Global Operational Reach
              </h3>
            </div>
          </div>

          {/* CARD 4: 100M+ Transactions Processed | Production-Scale Volume */}
          <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#6fd3c4] transition-all duration-300 flex flex-col justify-between group">
            {/* Top Interactive Visual: Real-Time Batch Processing Card */}
            <div className="w-full h-44 rounded-xl bg-white border border-slate-200 p-4 shadow-xs relative overflow-hidden flex flex-col justify-between kyp-grid-pattern">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-[#000000] font-mono">Batch 48291</span>
                <span className="px-2 py-0.5 rounded-full bg-[#c6f5ef] text-[#033653] border border-[#6fd3c4]/50 text-[10px] font-bold font-mono flex items-center gap-1">
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
              <div className="w-full h-1.5 rounded-full bg-[#c6f5ef] overflow-hidden">
                <div className="w-4/5 h-full bg-[#66cc00] rounded-full animate-pulse" />
              </div>
            </div>

            {/* Bottom Metrics */}
            <div className="pt-6 space-y-1">
              <div className="flex items-baseline justify-between">
                <span className="text-4xl font-extrabold text-[#000000] font-heading">
                  100M+
                </span>
                <span className="text-xs font-mono text-[#033653] font-semibold text-right">
                  Transactions<br />Processed
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-800 pt-1">
                Production-Scale Volume
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
