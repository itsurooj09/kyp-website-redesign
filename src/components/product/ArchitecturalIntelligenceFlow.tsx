"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  ShieldCheck,
  UserCheck,
  Database,
  Activity,
  Coins,
  Newspaper,
  CreditCard,
  FileCheck,
  Settings,
  Bell,
  Monitor,
  Building,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Zap,
  Server,
  Layers,
} from "lucide-react";

interface FlowTab {
  id: string;
  tabLabel: string;
  subFeature: string;
  headline: string;
  description: string;
  activeInputs: string[];
  activeEngine: string[];
  activeOutput: string;
}

const FLOW_TABS: FlowTab[] = [
  {
    id: "onboarding-ai",
    tabLabel: "Onboarding AI",
    subFeature: "Document scanning instant results",
    headline: "Instant Document Extraction & Automated Director Vetting",
    description: "Business documents, certificates of incorporation, and passports are scanned with sub-second OCR extraction. Discrepancies are flagged instantly before analyst review.",
    activeInputs: ["kyb-checks", "company-scores", "internal-data"],
    activeEngine: ["risk-feeds", "risk-scoring"],
    activeOutput: "Instant Approval / Discrepancy Flag",
  },
  {
    id: "merchant-monitoring",
    tabLabel: "Continuous Merchant Monitoring",
    subFeature: "Automated Policy Continuous Monitoring Rules",
    headline: "Always-On Surveillance & Policy-Aligned Rules Engine",
    description: "Configurable rules continuously evaluate merchant portfolio health. Triggers automated escalation whenever corporate registry, management, or risk thresholds drift.",
    activeInputs: ["peps-sanctions", "internal-data", "volumetric"],
    activeEngine: ["rules-engine", "volumetric-agg"],
    activeOutput: "Automated Escalation & Policy Rules Triggered",
  },
  {
    id: "website-compliance",
    tabLabel: "Website Compliance",
    subFeature: "Illegal blacklisted website traffic detection",
    headline: "WebCompli™ Crawler & Card Scheme Non-Compliance Shield",
    description: "24/7 autonomous crawlers sweep partner storefronts for unauthorized products, BRAM/VIRP violations, prohibited redirect hops, and illicit transaction pathways.",
    activeInputs: ["webcompli", "adverse-media", "company-scores"],
    activeEngine: ["risk-feeds", "rules-engine"],
    activeOutput: "Zero BRAM / VIRP Penalties Guarantee",
  },
  {
    id: "transaction-monitoring",
    tabLabel: "Transaction monitoring",
    subFeature: "ESG AI Alerting",
    headline: "Real-Time Volumetric Telemetry & ESG Risk Radar",
    description: "Ingests payment activity in real-time, detecting sudden velocity spikes, abnormal cross-border routing, and environmental/social regulatory sanction breaches.",
    activeInputs: ["transactions", "esg-fatf", "volumetric"],
    activeEngine: ["volumetric-agg", "risk-scoring"],
    activeOutput: "Real-Time Behavioral Spikes & ESG Triage",
  },
  {
    id: "graph-linking",
    tabLabel: "Graph Linking intelligence",
    subFeature: "Enhanced DD Compliance",
    headline: "Multi-Entity Graph Resolution & Contagion Pathway Mapping",
    description: "Connects cross-border parent entities, shadow directors, and ultimate beneficial owners (UBOs) in an interactive graph, preventing hidden entity contamination.",
    activeInputs: ["kyb-checks", "peps-sanctions", "adverse-media"],
    activeEngine: ["risk-feeds", "risk-scoring", "rules-engine"],
    activeOutput: "Contagion Pathways & UBO Unmasked",
  },
  {
    id: "instant-audit",
    tabLabel: "Instant Audit Ready Reporting",
    subFeature: "AI automation recalibrating risk scoring",
    headline: "Immutable Cryptographic Audit Trail & 60-Second Dossiers",
    description: "Every verification, document check, policy rule calculation, and analyst decision is logged immutably. Export regulator-ready defense dossiers on demand.",
    activeInputs: ["webcompli", "peps-sanctions", "transactions", "company-scores"],
    activeEngine: ["risk-scoring", "volumetric-agg", "rules-engine"],
    activeOutput: "100% FCA Defensible Dossier Generated",
  },
];

const INGESTION_FEEDS = [
  { id: "webcompli", name: "Webcompli", icon: <Globe className="w-4 h-4" /> },
  { id: "peps-sanctions", name: "PEPS & Sanctions", icon: <ShieldCheck className="w-4 h-4" /> },
  { id: "kyb-checks", name: "KYB/KYC Director Checks", icon: <UserCheck className="w-4 h-4" /> },
  { id: "internal-data", name: "Internal Company Data", icon: <Database className="w-4 h-4" /> },
  { id: "volumetric", name: "Volumetric Monitoring", icon: <Activity className="w-4 h-4" /> },
  { id: "esg-fatf", name: "ESG FATF", icon: <Coins className="w-4 h-4" /> },
  { id: "adverse-media", name: "Adverse Media", icon: <Newspaper className="w-4 h-4" /> },
  { id: "transactions", name: "Real-Time Transaction Monitoring", icon: <CreditCard className="w-4 h-4" /> },
  { id: "company-scores", name: "Company Credit Scores", icon: <FileCheck className="w-4 h-4" /> },
];

export default function ArchitecturalIntelligenceFlow() {
  const [activeTabId, setActiveTabId] = useState<string>("onboarding-ai");
  const [pulseTick, setPulseTick] = useState(0);

  const currentTab = FLOW_TABS.find((t) => t.id === activeTabId) || FLOW_TABS[0];

  // Moving animated packet clock
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseTick((prev) => (prev + 1) % 100);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#10141a] text-white rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-10 relative overflow-hidden select-none">
      {/* Background ambient circular glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#033653]/35 rounded-full blur-3xl pointer-events-none" />

      {/* TOP HEADER & TABS MATCHING USER IMAGE 4 */}
      <div className="relative z-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4  pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#000000] border border-slate-700 text-xs font-mono text-white font-bold mb-2">
              <span className="w-2 h-2 rounded-full bg-[#66cc00] animate-pulse" />
              <span>PLATFORM ARCHITECTURE &bull; MULTI-STREAM RISK CORE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Continuous Intelligence Pipeline
            </h3>
          </div>

          <div className="text-xs font-mono text-slate-400 bg-[#161c24] border border-slate-800 px-3.5 py-2 rounded-xl flex items-center gap-2">
            <span className="text-[#66cc00] font-bold">&bull; Real-Time</span>
            <span>AI automation recalibrating risk scoring</span>
          </div>
        </div>

        {/* 6 Tabs as specified in Image 4 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-1">
          {FLOW_TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTabId(tab.id)}
                className={`p-3 rounded-xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                  isActive
                    ? "bg-[#033653] border-[#66cc00] shadow-[0_0_15px_rgba(102,204,0,0.25)] scale-102"
                    : "bg-[#161c24] border-slate-800/90 text-slate-400 hover:text-white hover:bg-[#1d2530]"
                }`}
              >
                <div className="text-xs font-bold leading-snug line-clamp-2">
                  <span className={isActive ? "text-white" : "text-slate-300"}>
                    {tab.tabLabel}
                  </span>
                </div>
                <div className={`text-[10px] font-mono mt-2 line-clamp-1 ${isActive ? "text-[#66cc00] font-bold" : "text-slate-500"}`}>
                  {tab.subFeature}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ==================== MAIN ARCHITECTURAL FLOW DIAGRAM (MATCHING USER IMAGE 5) ==================== */}
      <div className="relative z-10 mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0c1015] p-6 sm:p-8 rounded-2xl border border-slate-800/90 shadow-inner overflow-hidden">
        
        {/* LEFT COLUMN: 9 INGESTION INPUTS (IMAGE 5 LEFT) */}
        <div className="lg:col-span-3 space-y-2">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest font-bold mb-3 flex items-center justify-between">
            <span>Multi-Source Ingestion</span>
            <span className="text-[#66cc00] font-bold text-[10px]">9 Feeds</span>
          </div>

          <div className="space-y-1.5">
            {INGESTION_FEEDS.map((feed) => {
              const isHighlight = currentTab.activeInputs.includes(feed.id);
              return (
                <div
                  key={feed.id}
                  className={`flex items-center justify-between p-2 rounded-lg border text-xs transition-all ${
                    isHighlight
                      ? "bg-[#182633] border-[#66cc00] text-white shadow-[0_0_10px_rgba(102,204,0,0.2)] font-bold translate-x-1"
                      : "bg-[#12161c] border-slate-800/70 text-slate-400"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={isHighlight ? "text-[#66cc00]" : "text-slate-500"}>
                      {feed.icon}
                    </span>
                    <span className="text-[11px]">{feed.name}</span>
                  </div>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isHighlight ? "bg-[#66cc00] animate-ping" : "bg-slate-700"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* CENTER COLUMN: THE RISK ENGINE CORE (IMAGE 5 CENTER DARK CIRCLE) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[460px]">
          {/* Connector Gear Left */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-8 h-8 rounded-full bg-[#033653] border-2 border-[#66cc00] flex items-center justify-center text-[#66cc00] shadow-md z-20">
            <Settings className="w-4 h-4 animate-spin" style={{ animationDuration: "12s" }} />
          </div>

          {/* Central Dark Circular Intelligence Hub */}
          <div className="relative w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] rounded-full bg-[#033653] border-2 border-[#033653] shadow-[0_0_50px_rgba(3,54,83,0.8)] flex items-center justify-center overflow-hidden">
            
            {/* SVG Connecting Tracks inside the core */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 380 380">
              <circle cx="190" cy="190" r="160" fill="none" stroke="#223a4d" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="80" y1="190" x2="190" y2="190" stroke="#66cc00" strokeWidth="2" strokeDasharray="3 3" />
              <line x1="190" y1="90" x2="190" y2="190" stroke="#66cc00" strokeWidth="2" strokeDasharray="3 3" />
              <line x1="190" y1="190" x2="190" y2="290" stroke="#66cc00" strokeWidth="2" strokeDasharray="3 3" />
              <line x1="190" y1="190" x2="300" y2="190" stroke="#66cc00" strokeWidth="2" strokeDasharray="3 3" />

              {/* Animated traveling packets */}
              <circle r="3.5" fill="#66cc00">
                <animateMotion path="M 80 190 L 190 190 L 300 190" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle r="3.5" fill="#66cc00">
                <animateMotion path="M 190 90 L 190 190 L 190 290" dur="2.5s" repeatCount="indefinite" />
              </circle>
            </svg>

            {/* Top Node: Risk Scoring Server */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center">
              <div className="w-14 h-16 rounded-xl bg-[#111720] border border-[#033653]/60 p-1.5 flex flex-col items-center justify-center shadow-lg">
                <Server className="w-5 h-5 text-[#66cc00]" />
                <div className="w-6 h-1 bg-[#66cc00] rounded-full mt-1.5 animate-pulse" />
              </div>
              <span className="text-[10px] font-mono text-slate-300 font-bold block mt-1">Risk Scoring</span>
            </div>

            {/* Left Node: Risk Feeds Server */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-center">
              <div className="w-14 h-16 rounded-xl bg-[#111720] border border-[#66cc00]/60 p-1.5 flex flex-col items-center justify-center shadow-lg">
                <Database className="w-5 h-5 text-[#66cc00]" />
                <div className="w-6 h-1 bg-[#66cc00] rounded-full mt-1.5 animate-pulse" />
              </div>
              <span className="text-[10px] font-mono text-slate-300 font-bold block mt-1">Risk Feeds</span>
            </div>

            {/* Central 3D Isometric Cluster (Intelligence Engine) */}
            <div className="relative z-10 w-24 h-24 rounded-2xl bg-[#122330] border-2 border-[#66cc00] flex flex-col items-center justify-center p-2 shadow-2xl group cursor-pointer hover:scale-105 transition-transform">
              <Layers className="w-8 h-8 text-[#66cc00] animate-bounce" style={{ animationDuration: "3s" }} />
              <span className="text-[9px] font-mono text-white font-extrabold uppercase mt-1 tracking-tight">
                AI Core
              </span>
            </div>

            {/* Bottom-Left Node: Rules Engine */}
            <div className="absolute bottom-6 left-16 text-center">
              <div className="w-14 h-16 rounded-xl bg-[#111720] border border-slate-700 p-1.5 flex flex-col items-center justify-center shadow-lg">
                <Zap className="w-5 h-5 text-[#66cc00]" />
                <div className="w-6 h-1 bg-[#66cc00] rounded-full mt-1.5" />
              </div>
              <span className="text-[10px] font-mono text-slate-300 font-bold block mt-1">Rules Engine</span>
            </div>

            {/* Bottom-Right Node: Volumetric Aggregates */}
            <div className="absolute bottom-6 right-16 text-center">
              <div className="w-14 h-16 rounded-xl bg-[#111720] border border-slate-700 p-1.5 flex flex-col items-center justify-center shadow-lg">
                <Activity className="w-5 h-5 text-[#66cc00]" />
                <div className="w-6 h-1 bg-[#66cc00] rounded-full mt-1.5" />
              </div>
              <span className="text-[10px] font-mono text-slate-300 font-bold block mt-1">Volumetric Agg</span>
            </div>
          </div>

          {/* Connector Gear Right (Alerts) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-8 h-8 rounded-full bg-[#033653] border-2 border-[#033653] flex items-center justify-center text-[#66cc00] shadow-md z-20">
            <Bell className="w-4 h-4 animate-bounce" style={{ animationDuration: "2s" }} />
          </div>
        </div>

        {/* RIGHT COLUMN: ACTIONABLE INTELLIGENCE & PROTECTED CUSTOMER (IMAGE 5 RIGHT) */}
        <div className="lg:col-span-3 space-y-4">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest font-bold mb-3 flex items-center justify-between">
            <span>Actionable Output</span>
            <span className="text-[#66cc00] font-bold text-[10px]">Active</span>
          </div>

          {/* Top Badge: KYP Platform providing Actionable intelligence */}
          <div className="p-3 rounded-xl bg-[#000000] border border-[#033653] text-center space-y-1 shadow-md">
            <div className="text-[10px] font-mono text-slate-300">KYP Platform providing</div>
            <div className="text-xs font-bold text-[#66cc00]">Actionable intelligence</div>
          </div>

          {/* Insights Platform / Control Panel Card */}
          <div className="p-4 rounded-xl bg-[#12161c] border border-slate-800 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#033653] border border-[#033653] flex items-center justify-center text-[#66cc00]">
                <Monitor className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Insights Platform</h4>
                <small className="text-[9.5px] text-slate-400 font-mono">Control Panel</small>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#0c1015] border border-slate-800 text-[10.5px] font-mono text-slate-300">
              <span className="text-[#66cc00] font-bold block mb-1">Status Trigger:</span>
              <span>{currentTab.activeOutput}</span>
            </div>
          </div>

          {/* Client Protected & Customer Building */}
          <div className="p-4 rounded-xl bg-[#12161c] border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#000000] border border-[#66cc00] flex items-center justify-center text-[#66cc00] shadow-xs">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Customer</div>
                <small className="text-[10px] text-slate-400">Regulated Firm</small>
              </div>
            </div>

            <div className="px-2.5 py-1 rounded-full bg-[#000000] border border-[#66cc00] text-[10px] font-mono text-[#66cc00] font-bold flex items-center gap-1 shadow-xs">
              <CheckCircle2 className="w-3 h-3 stroke-[3]" />
              <span>Protected</span>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM NARRATIVE & METRICS BAR (IMAGE 4 SUB-HEADING) */}
      <div className="mt-8 pt-6  flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-2xl space-y-1">
          <div className="text-xs font-mono text-[#66cc00] font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#66cc00] animate-pulse" />
            <span>MODE: {currentTab.headline.toUpperCase()}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {currentTab.description}
          </p>
        </div>

        <div className="flex items-center gap-6 shrink-0">
          <div className="text-right">
            <div className="text-lg font-extrabold text-white font-mono">&lt;30s</div>
            <div className="text-[10px] font-mono text-slate-400">Decision SLA</div>
          </div>
          <div className="h-8 w-px bg-slate-800" />
          <div className="text-right">
            <div className="text-lg font-extrabold text-[#66cc00] font-mono">100%</div>
            <div className="text-[10px] font-mono text-slate-400">Audit Defensible</div>
          </div>
        </div>
      </div>
    </div>
  );
}
