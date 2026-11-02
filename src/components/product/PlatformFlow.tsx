"use client";

import React, { useState, useEffect } from "react";
import {
  UserCheck,
  ShieldCheck,
  Activity,
  Search,
  FileCheck2,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  SlidersHorizontal,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  Building2,
  Database,
  Check,
} from "lucide-react";

interface FlowStage {
  id: string;
  step: string;
  title: string;
  action: string;
  clientHeading: string;
  clientDescription: string;
  tagline: string;
  icon: React.ReactNode;
  dataPoints: string[];
  telemetry: {
    latency: string;
    throughput: string;
    accuracy: string;
  };
}

const FLOW_STAGES: FlowStage[] = [
  {
    id: "onboard",
    step: "01",
    title: "Onboard",
    action: "AI Intake & Document Extraction",
    clientHeading: "Reduce Manual Due Diligence",
    clientDescription: "Questionnaires tailored to policy with instant AI validation before submission. Discrepancies flagged between documents, questionnaires, and registry records in real time.",
    tagline: "Help partners get it right before submission. Reduce follow-ups. Accelerate onboarding.",
    icon: <UserCheck className="w-4 h-4 text-kyp-lime" />,
    dataPoints: ["Smart Questionnaires", "OCR Certificate Extraction", "Discrepancy Resolver", "Pre-Screening"],
    telemetry: { latency: "<120ms", throughput: "1,200 docs/hr", accuracy: "99.4%" },
  },
  {
    id: "verify",
    step: "02",
    title: "Verify",
    action: "Corporate Intelligence & UBO Resolution",
    clientHeading: "Corporate Structure Changes",
    clientDescription: "Direct API verification against 180+ global registries, unravelling complex holding companies, parent entities, and ultimate beneficial owners (UBOs).",
    tagline: "Understand relationships. Uncover hidden exposure. Verify corporate entities in sub-seconds.",
    icon: <ShieldCheck className="w-4 h-4 text-kyp-teal" />,
    dataPoints: ["180+ Company Registries", "Global Sanctions & PEP", "UBO Graph Resolution", "Adverse Media Scanning"],
    telemetry: { latency: "<250ms", throughput: "180 Registries", accuracy: "100% Traceable" },
  },
  {
    id: "monitor",
    step: "03",
    title: "Monitor",
    action: "Always-On Surveillance & WebCompli™",
    clientHeading: "Volumetric Monitoring & Webcompli",
    clientDescription: "Continuous tracking of transaction volume spikes, payment velocity, website compliance for Mastercard BRAM / Visa VIRP, and regulatory blacklists.",
    tagline: "Move from point-in-time reviews to 24/7 always-on monitoring. Know when risk changes.",
    icon: <Activity className="w-4 h-4 text-kyp-mint" />,
    dataPoints: ["Volumetric Monitoring", "Webcompli™ Crawler", "Merchant Behavioural Shifts", "Regulatory Blacklist Radar"],
    telemetry: { latency: "Real-time", throughput: "24/7/365 Stream", accuracy: "Zero BRAM Fines" },
  },
  {
    id: "investigate",
    step: "04",
    title: "Investigate",
    action: "Graph Intelligence & Contextual Triage",
    clientHeading: "Merchant Behavioural Shifts",
    clientDescription: "Bring relevant telemetry, contagion pathways, and associated parties into one view. Filter by risk tier and investigate root causes without switching tools.",
    tagline: "What changed. Why it matters. Who requires review. Full contextual intelligence in one view.",
    icon: <Search className="w-4 h-4 text-kyp-lime" />,
    dataPoints: ["Visual Risk Contagion", "Case Management Workspace", "Policy Rule Engine", "Decision Notes"],
    telemetry: { latency: "<15 Mins", throughput: "Unified Workspace", accuracy: "100% Context" },
  },
  {
    id: "report",
    step: "05",
    title: "Report",
    action: "Regulator-Ready Audit Generation",
    clientHeading: "Regulatory Compliance Made Easy",
    clientDescription: "Immutable chronological activity trail recording every upload, screening, alert, and analyst sign-off into exportable dossiers in under 60 seconds.",
    tagline: "Turn weeks of audit preparation into seconds. 100% defensible evidence trails.",
    icon: <FileCheck2 className="w-4 h-4 text-kyp-teal" />,
    dataPoints: ["One-Click Audit Dossiers", "SAR / STR Reporting", "Cryptographic Signatures", "Sponsor Bank Exports"],
    telemetry: { latency: "60 Seconds", throughput: "PDF + JSON Packages", accuracy: "FCA Defensible" },
  },
];

interface FlowNode {
  id: string;
  name: string;
  sub: string;
  stage: number;
  x: number;
  y: number;
  r: number;
  color: string;
  clientHeading: string;
}

const FLOW_NODES: FlowNode[] = [
  // Stage 0: Onboarding Intake
  { id: "fn-1", name: "Intake Questionnaires", sub: "Policy-tailored forms", stage: 0, x: 100, y: 150, r: 24, color: "#66cc00", clientHeading: "Reduce Manual Due Diligence" },
  { id: "fn-2", name: "AI Document Validation", sub: "OCR & registry cross-check", stage: 0, x: 100, y: 360, r: 24, color: "#66cc00", clientHeading: "Reduce Manual Due Diligence" },

  // Stage 1: Verification & Structuring
  { id: "fn-3", name: "180+ Global Registries", sub: "Corporate filings & status", stage: 1, x: 300, y: 130, r: 26, color: "#6fd3c4", clientHeading: "Corporate Structure Changes" },
  { id: "fn-4", name: "Beneficial Ownership", sub: "UBO unbundling graph", stage: 1, x: 300, y: 380, r: 26, color: "#c6f5ef", clientHeading: "Corporate Structure Changes" },

  // Stage 2: Central Surveillance Core (Client's Key Headings)
  { id: "fn-5", name: "Volumetric Monitoring", sub: "Velocity spikes & anomaly", stage: 2, x: 500, y: 120, r: 32, color: "#66cc00", clientHeading: "Volumetric Monitoring" },
  { id: "fn-6", name: "Webcompli™ Scanner", sub: "Mastercard BRAM & Visa VIRP", stage: 2, x: 500, y: 260, r: 34, color: "#6fd3c4", clientHeading: "Webcompli" },
  { id: "fn-7", name: "Merchant Behavioural Shifts", sub: "Product mutations & drift", stage: 2, x: 500, y: 400, r: 30, color: "#c6f5ef", clientHeading: "Merchant Behavioural Shifts" },

  // Stage 3: Investigation Workspace
  { id: "fn-8", name: "Graph Intelligence", sub: "Entity contagion analysis", stage: 3, x: 700, y: 170, r: 28, color: "#6fd3c4", clientHeading: "Customisable & Scalable" },
  { id: "fn-9", name: "Case Management", sub: "Evidence aggregation", stage: 3, x: 700, y: 350, r: 26, color: "#66cc00", clientHeading: "Customisable & Scalable" },

  // Stage 4: Reporting & Audit
  { id: "fn-10", name: "Audit-Ready in 60s", sub: "Regulator dossier export", stage: 4, x: 900, y: 200, r: 30, color: "#66cc00", clientHeading: "Regulatory Compliance Made Easy" },
  { id: "fn-11", name: "SAR / STR Reporting", sub: "Regulatory disclosures", stage: 4, x: 900, y: 360, r: 24, color: "#6fd3c4", clientHeading: "Regulatory Compliance Made Easy" },
];

const FLOW_LINKS = [
  { s: "fn-1", t: "fn-3" },
  { s: "fn-2", t: "fn-4" },
  { s: "fn-3", t: "fn-5" },
  { s: "fn-3", t: "fn-6" },
  { s: "fn-4", t: "fn-6" },
  { s: "fn-4", t: "fn-7" },
  { s: "fn-5", t: "fn-8" },
  { s: "fn-6", t: "fn-8" },
  { s: "fn-6", t: "fn-9" },
  { s: "fn-7", t: "fn-9" },
  { s: "fn-8", t: "fn-10" },
  { s: "fn-9", t: "fn-10" },
  { s: "fn-9", t: "fn-11" },
];

export default function PlatformFlow() {
  const [activeStage, setActiveStage] = useState<number>(2); // Default to Stage 03 Monitor (Volumetric/Webcompli)
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [selectedNode, setSelectedNode] = useState<FlowNode>(FLOW_NODES[5]); // Default Webcompli

  // Automatic cycle through stages
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStage((prev) => {
        const next = (prev + 1) % FLOW_STAGES.length;
        const matchingNode = FLOW_NODES.find((n) => n.stage === next);
        if (matchingNode) setSelectedNode(matchingNode);
        return next;
      });
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const currentStage = FLOW_STAGES[activeStage];

  const handleStageSelect = (idx: number) => {
    setActiveStage(idx);
    const nodeInStage = FLOW_NODES.find((n) => n.stage === idx);
    if (nodeInStage) setSelectedNode(nodeInStage);
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-6 lg:p-10 relative overflow-hidden shadow-xl">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-kyp-navy/40 rounded-full blur-3xl pointer-events-none" />

      {/* Header with Client Image Key Headings */}
      <div className="max-w-4xl mb-8 relative z-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-xs font-mono text-emerald-800 font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          ANIMATED PLATFORM FLOW • ITEMIZE-INSPIRED MOVING GRAPH
        </div>

        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
          Can You See Behavioural Risk Emerging Before It Becomes a Financial Issue?
        </h3>

        <p className="text-base sm:text-lg text-emerald-700 font-bold">
          Move from periodic manual reviews to continuous risk intelligence with KYP.
        </p>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
          Watch real-time risk intelligence flow through the platform: from AI onboarding ingestion and corporate structure verification, to live volumetric and WebCompli™ website surveillance, graph contagion investigations, and instant audit reporting.
        </p>
      </div>

      {/* 5-Step Interactive Pipeline Selector with Vibrant Active States */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8 relative z-10">
        {FLOW_STAGES.map((st, idx) => {
          const isActive = activeStage === idx;
          return (
            <button
              type="button"
              key={st.id}
              onClick={() => handleStageSelect(idx)}
              className={`p-3.5 rounded-xl border text-left transition-all duration-300 relative group cursor-pointer ${
                isActive
                  ? "bg-slate-900 border-slate-900 text-white shadow-md ring-1 ring-slate-900"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-mono tracking-widest uppercase font-bold ${isActive ? "text-emerald-400" : "text-slate-500"}`}>
                  STEP {st.step}
                </span>
                <div className={`p-1 rounded ${isActive ? "bg-kyp-lime text-black" : "bg-black/60 border border-kyp-teal/20"}`}>
                  {st.icon}
                </div>
              </div>
              <div className={`text-sm font-bold ${isActive ? "text-white" : "text-slate-800 group-hover:text-slate-900"}`}>
                {st.title}
              </div>
              <div className="text-[11px] text-gray-400 line-clamp-1 mt-0.5 font-mono">
                {st.clientHeading}
              </div>
            </button>
          );
        })}
      </div>

      {/* GUARANTEED SVG-BASED MOVING GRAPH ENGINE */}
      <div className="relative w-full rounded-2xl bg-gradient-to-b from-kyp-navy-surface/90 to-black/95 border border-kyp-teal/30 overflow-hidden mb-8 shadow-2xl">
        {/* Floating Controls HUD */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-kyp-teal/20 text-xs font-mono">
          <span className="w-2.5 h-2.5 rounded-full bg-kyp-lime animate-ping" />
          <span className="text-white font-semibold">FLOWING GRAPH SENTINEL</span>
          <span className="text-kyp-teal border-l border-kyp-teal/25 pl-2 ml-1">
            ACTIVE STAGE: {currentStage.title.toUpperCase()}
          </span>
        </div>

        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-kyp-teal/25 text-xs font-mono text-kyp-mint hover:border-kyp-lime transition-all cursor-pointer"
          >
            {isAutoPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-kyp-lime" />
                <span>Auto-Cycling Active</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-kyp-mint" />
                <span>Paused (Click to Resume)</span>
              </>
            )}
          </button>
        </div>

        {/* Scalable Vector Graphics Network */}
        <svg
          viewBox="0 0 1000 520"
          className="w-full h-auto min-h-[460px] max-h-[540px] block select-none"
        >
          <defs>
            {/* Grid Pattern */}
            <pattern id="graph-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(111, 211, 196, 0.05)" strokeWidth="1" />
            </pattern>
            <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Grid */}
          <rect width="1000" height="520" fill="url(#graph-grid)" />

          {/* Radar Ambient Rings */}
          <g className="radar-circles" opacity="0.12">
            <circle cx="500" cy="260" r="220" stroke="#6fd3c4" strokeWidth="1" fill="none" />
            <circle cx="500" cy="260" r="140" stroke="#66cc00" strokeWidth="1" fill="none" />
            <circle cx="500" cy="260" r="70" stroke="#c6f5ef" strokeWidth="1" fill="none" />
          </g>

          {/* Connecting Curved Lines */}
          <g className="edges">
            {FLOW_LINKS.map((link, idx) => {
              const sNode = FLOW_NODES.find((n) => n.id === link.s);
              const tNode = FLOW_NODES.find((n) => n.id === link.t);
              if (!sNode || !tNode) return null;

              const isStageActive = sNode.stage === activeStage || tNode.stage === activeStage;
              const isSelectedPath = selectedNode.id === sNode.id || selectedNode.id === tNode.id;

              const midX = (sNode.x + tNode.x) / 2;
              const pathD = `M ${sNode.x} ${sNode.y} C ${midX} ${sNode.y}, ${midX} ${tNode.y}, ${tNode.x} ${tNode.y}`;

              return (
                <g key={idx}>
                  <path
                    d={pathD}
                    fill="none"
                    stroke={isSelectedPath ? "#c6f5ef" : isStageActive ? "#66cc00" : "#6fd3c4"}
                    strokeWidth={isSelectedPath ? 3 : isStageActive ? 2.2 : 1.2}
                    strokeOpacity={isStageActive || isSelectedPath ? 0.9 : 0.25}
                    strokeDasharray={isStageActive ? "none" : "4 4"}
                  />
                  {/* Flowing Animated Photons along path */}
                  <circle r={isStageActive ? 3.5 : 2.5} fill={isStageActive ? "#66cc00" : "#6fd3c4"}>
                    <animateMotion
                      path={pathD}
                      dur={`${2.2 + (idx % 3) * 0.4}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              );
            })}
          </g>

          {/* Graph Nodes */}
          <g className="nodes">
            {FLOW_NODES.map((node) => {
              const isCurrentStage = node.stage === activeStage;
              const isSelected = selectedNode.id === node.id;

              return (
                <g
                  key={node.id}
                  onClick={() => {
                    setSelectedNode(node);
                    setActiveStage(node.stage);
                  }}
                  className="cursor-pointer transition-all duration-200"
                >
                  {/* Glowing Outer Ripple */}
                  {(isCurrentStage || isSelected) && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={node.r + 14}
                      fill={isSelected ? "#c6f5ef" : "#66cc00"}
                      fillOpacity={isSelected ? 0.25 : 0.15}
                      className="animate-pulse"
                    />
                  )}

                  {/* Outer Status Ring */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.r + 4}
                    fill="none"
                    stroke={isSelected ? "#c6f5ef" : isCurrentStage ? "#66cc00" : "#6fd3c4"}
                    strokeWidth={isSelected || isCurrentStage ? 2.5 : 1.2}
                    strokeDasharray={node.stage === 2 ? "3 3" : "none"}
                  />

                  {/* Node Background */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.r}
                    fill="#033653"
                    stroke={isSelected ? "#ffffff" : isCurrentStage ? "#66cc00" : "#033653"}
                    strokeWidth={isSelected ? 2 : 1}
                  />

                  {/* Center Pulsing Core */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.r * 0.35}
                    fill={node.color}
                  />

                  {/* Node Label */}
                  <text
                    x={node.x}
                    y={node.y + node.r + 15}
                    textAnchor="middle"
                    fill={isSelected ? "#ffffff" : isCurrentStage ? "#c6f5ef" : "#94a3b8"}
                    fontSize={isSelected || isCurrentStage ? "12" : "11"}
                    fontWeight={isSelected || isCurrentStage ? "700" : "500"}
                    fontFamily="Inter, sans-serif"
                  >
                    {node.name}
                  </text>

                  {/* Sub-label */}
                  <text
                    x={node.x}
                    y={node.y + node.r + 27}
                    textAnchor="middle"
                    fill={isCurrentStage ? "#66cc00" : "#64748b"}
                    fontSize="9"
                    fontWeight="600"
                    fontFamily="monospace"
                  >
                    {node.sub}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>

        {/* Interactive Bottom Overlay Pill */}
        <div className="p-3 bg-black/90 border-t border-kyp-teal/20 flex flex-wrap items-center justify-between gap-3 text-xs font-mono px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="text-kyp-teal">Selected Node:</span>
            <span className="text-white font-bold">{selectedNode.name}</span>
            <span className="text-gray-400">({selectedNode.sub})</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-kyp-lime font-semibold">
              Client Focus: {selectedNode.clientHeading}
            </span>
            <span className="hidden sm:inline text-gray-500">Click any node to focus</span>
          </div>
        </div>
      </div>

      {/* Detailed Active Stage Breakdown Card */}
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded bg-slate-900 text-white font-mono font-bold text-xs">
                Stage {currentStage.step} &bull; {currentStage.title}
              </span>
              <span className="text-xs font-mono text-emerald-700 font-bold">
                {currentStage.action}
              </span>
            </div>

            <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
              {currentStage.clientHeading}: {currentStage.tagline}
            </h4>

            <p className="text-sm text-slate-600 leading-relaxed">
              {currentStage.clientDescription}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {currentStage.dataPoints.map((dp, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-700 flex items-center gap-1.5"
                >
                  <Check className="w-3 h-3 text-kyp-lime" />
                  {dp}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-5 rounded-xl border border-slate-200 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-kyp-teal/20 pb-2">
              <span className="text-gray-400">Stage Latency:</span>
              <span className="text-kyp-lime font-bold">{currentStage.telemetry.latency}</span>
            </div>
            <div className="flex items-center justify-between border-b border-kyp-teal/20 pb-2">
              <span className="text-gray-400">Coverage Capacity:</span>
              <span className="text-white font-bold">{currentStage.telemetry.throughput}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Audit Status:</span>
              <span className="text-kyp-mint font-bold">{currentStage.telemetry.accuracy}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Official Client Key Feature Cards (Volumetric, Webcompli, Corporate Structure, Behavioural Shifts) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-white border border-slate-200 hover:border-emerald-500/60 shadow-sm transition-all space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase">CLIENT FEATURE 01</span>
            <TrendingUp className="w-4 h-4 text-kyp-lime" />
          </div>
          <h4 className="text-base font-bold text-slate-900">Volumetric Monitoring</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Spot unusual transaction velocity spikes, round-number structuring, and abnormal settlement volume before settlement.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 hover:border-emerald-500/60 shadow-sm transition-all space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase">CLIENT FEATURE 02</span>
            <Globe className="w-4 h-4 text-kyp-teal" />
          </div>
          <h4 className="text-base font-bold text-slate-900">Webcompli™</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Automated crawler screening merchant terms, prohibited items, Mastercard BRAM & Visa VIRP violations, and ghost sites.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 hover:border-emerald-500/60 shadow-sm transition-all space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase">CLIENT FEATURE 03</span>
            <Building2 className="w-4 h-4 text-kyp-mint" />
          </div>
          <h4 className="text-base font-bold text-slate-900">Corporate Structure Changes</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Real-time alerts when partner companies file director mutations, shareholding shifts, or registered office relocations.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 hover:border-emerald-500/60 shadow-sm transition-all space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase">CLIENT FEATURE 04</span>
            <AlertTriangle className="w-4 h-4 text-kyp-lime" />
          </div>
          <h4 className="text-base font-bold text-slate-900">Merchant Behavioural Shifts</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Detect subtle drifts in product lines, unauthorized MCC activity, and hidden cross-border customer exposure.
          </p>
        </div>
      </div>
    </div>
  );
}
