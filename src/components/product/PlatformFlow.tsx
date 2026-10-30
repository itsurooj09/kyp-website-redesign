"use client";

import React, { useState } from "react";
import { UserCheck, ShieldCheck, Activity, Search, FileCheck, ArrowRight, Check, Sparkles, Database } from "lucide-react";

interface FlowStage {
  id: string;
  step: string;
  title: string;
  action: string;
  description: string;
  inputs: string[];
  outputs: string[];
  techHighlight: string;
  icon: React.ReactNode;
}

const FLOW_STAGES: FlowStage[] = [
  {
    id: "onboard",
    step: "01",
    title: "Onboard",
    action: "AI Intake & Document Extraction",
    description: "Partners complete tailored questionnaires while proprietary AI validates certificate authenticity and extracts core legal entity fields in real time.",
    inputs: ["Questionnaires", "Passport / IDs", "Articles of Association", "Utility Invoices"],
    outputs: ["Normalized JSON Dossier", "Registry Pre-Match", "Discrepancy Alerts"],
    techHighlight: "10× Faster Submissions with Self-Correction Feedback",
    icon: <UserCheck className="w-5 h-5 text-kyp-lime" />,
  },
  {
    id: "verify",
    step: "02",
    title: "Verify",
    action: "Multi-Source Corporate Cross-Referencing",
    description: "Entity data is cross-checked across 180+ global commercial registries, OFAC / UN sanctions, PEP databases, and adverse media gazettes.",
    inputs: ["Companies House API", "Global Sanctions Lists", "PEP Watchlists", "Licence Registries"],
    outputs: ["Verified UBO Hierarchy", "PEP Clearance Flag", "Regulatory Status"],
    techHighlight: "Zero-Latency Sub-Second Entity Disambiguation",
    icon: <ShieldCheck className="w-5 h-5 text-kyp-teal" />,
  },
  {
    id: "monitor",
    step: "03",
    title: "Monitor",
    action: "Always-On Surveillance & WebCompli",
    description: "Background sentinels continuously track filing updates, director changes, merchant website compliance (Mastercard BRAM & Visa VIRP), and transaction signals.",
    inputs: ["Continuous Registry Sweeps", "WebCompli Crawler", "Adverse News Feeds", "Payment Volumetrics"],
    outputs: ["Real-Time Mutation Alerts", "Scheme Risk Scores", "Velocity Warnings"],
    techHighlight: "Move from Annual Reviews to 24/7/365 Event Monitoring",
    icon: <Activity className="w-5 h-5 text-kyp-mint" />,
  },
  {
    id: "investigate",
    step: "04",
    title: "Investigate",
    action: "Graph Intelligence & Evidence Aggregation",
    description: "Analysts review multi-tier ownership graphs, trace contagion pathways from high-risk directors, and synthesize contextual evidence.",
    inputs: ["Graph Intelligence Engine", "Historical Snapshot Diffs", "Analyst Risk Notes"],
    outputs: ["Consolidated Risk Assessment", "SAR Recommendations", "Remediation Paths"],
    techHighlight: "Context-Rich Graph Workspace Eliminates Tab Fatigue",
    icon: <Search className="w-5 h-5 text-kyp-lime" />,
  },
  {
    id: "report",
    step: "05",
    title: "Report",
    action: "Instant Audit-Ready Reporting",
    description: "Automatically package complete due diligence history, evidence files, timestamps, and approved governance notes into regulator-ready exports.",
    inputs: ["Immutable Decision Trail", "Timestamp Signatures", "Verified Upload Vault"],
    outputs: ["Audit-Ready PDF Dossier", "Regulator JSON Exports", "Bank Sponsor Summary"],
    techHighlight: "Turn 3 Weeks of Audit Preparation Into Under 60 Seconds",
    icon: <FileCheck className="w-5 h-5 text-kyp-teal" />,
  },
];

export default function PlatformFlow() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const current = FLOW_STAGES[activeStage];

  return (
    <div className="w-full bg-black border border-kyp-teal/20 rounded-2xl p-6 lg:p-10 relative overflow-hidden kyp-grid-pattern">
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-kyp-navy/40 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kyp-lime/10 border border-kyp-lime/30 text-xs font-mono text-kyp-lime mb-3 font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          End-to-End Platform Pipeline
        </div>
        <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
          How Data Travels: From Onboarding to Audit
        </h3>
        <p className="text-sm md:text-base text-gray-400 mt-2">
          Watch how incoming partner data is ingested, verified against global registries, continuously monitored, and compiled into immutable audit dossiers.
        </p>
      </div>

      {/* Connected Visual Pipeline Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
        {FLOW_STAGES.map((stage, idx) => {
          const isActive = activeStage === idx;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStage(idx)}
              className={`p-4 rounded-xl border text-left transition-all duration-300 relative group ${
                isActive
                  ? "bg-kyp-navy/80 border-kyp-lime shadow-lime-glow"
                  : "bg-kyp-black/80 border-kyp-teal/20 hover:border-kyp-teal/50 hover:bg-kyp-navy/30"
              }`}
            >
              {/* Connector line on desktop */}
              {idx < FLOW_STAGES.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                  <ArrowRight className={`w-4 h-4 ${isActive ? "text-kyp-lime" : "text-kyp-teal/40"}`} />
                </div>
              )}

              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-kyp-teal tracking-widest uppercase">
                  STEP {stage.step}
                </span>
                <div className="p-1 rounded bg-black/60 border border-kyp-teal/20">
                  {stage.icon}
                </div>
              </div>
              <div className={`text-sm font-bold ${isActive ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                {stage.title}
              </div>
              <div className="text-[11px] text-gray-400 line-clamp-1 mt-0.5">
                {stage.action}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Interactive Stage Card */}
      <div className="kyp-glass-card rounded-xl p-6 lg:p-8 border border-kyp-teal/25">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Stage Explanation */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded bg-kyp-lime text-black font-mono font-bold text-xs">
                Stage {current.step}
              </span>
              <span className="text-sm font-mono text-kyp-mint">
                {current.action}
              </span>
            </div>

            <h4 className="text-xl md:text-2xl font-bold text-white">
              {current.title}: {current.techHighlight}
            </h4>

            <p className="text-sm text-gray-300 leading-relaxed">
              {current.description}
            </p>

            {/* Inputs & Outputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-lg bg-black/60 border border-kyp-teal/15 space-y-2">
                <div className="text-[11px] font-mono text-kyp-teal uppercase font-semibold flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  Incoming Data Streams
                </div>
                <ul className="space-y-1">
                  {current.inputs.map((inp, i) => (
                    <li key={i} className="text-xs text-gray-300 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-kyp-teal" />
                      {inp}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-lg bg-black/60 border border-kyp-teal/15 space-y-2">
                <div className="text-[11px] font-mono text-kyp-lime uppercase font-semibold flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  Validated Platform Outputs
                </div>
                <ul className="space-y-1">
                  {current.outputs.map((out, i) => (
                    <li key={i} className="text-xs text-gray-300 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-kyp-lime" />
                      {out}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Stage Telemetry Simulation */}
          <div className="lg:col-span-5 bg-black/90 p-5 rounded-xl border border-kyp-teal/20 space-y-4">
            <div className="flex items-center justify-between border-b border-kyp-teal/15 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-kyp-lime animate-ping" />
                <span className="text-xs font-mono text-white font-semibold uppercase">
                  Telemetry Feed #{current.step}
                </span>
              </div>
              <span className="text-[10px] font-mono text-kyp-mint">LIVE SENTINEL</span>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-2.5 rounded bg-kyp-navy-surface border border-kyp-teal/15 flex justify-between items-center">
                <span className="text-gray-400">Processing Latency</span>
                <span className="text-kyp-lime font-bold">142ms</span>
              </div>
              <div className="p-2.5 rounded bg-kyp-navy-surface border border-kyp-teal/15 flex justify-between items-center">
                <span className="text-gray-400">Integrations Checked</span>
                <span className="text-kyp-teal font-bold">18 Watchlists / 4 Regs</span>
              </div>
              <div className="p-2.5 rounded bg-kyp-navy-surface border border-kyp-teal/15 flex justify-between items-center">
                <span className="text-gray-400">Discrepancy Resolver</span>
                <span className="text-kyp-mint font-bold">Active (0 Unresolved)</span>
              </div>
              <div className="p-2.5 rounded bg-kyp-navy-surface border border-kyp-teal/15 flex justify-between items-center">
                <span className="text-gray-400">Audit Immutability</span>
                <span className="text-white font-bold">SHA-256 Timestamped</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setActiveStage((activeStage + 1) % FLOW_STAGES.length)}
                className="w-full kyp-btn-primary py-2 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2"
              >
                <span>Advance to Next Pipeline Stage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
