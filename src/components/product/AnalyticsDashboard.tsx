"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingDown,
  TrendingUp,
  ShieldCheck,
  AlertTriangle,
  Activity,
  CheckCircle2,
  Clock,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Sliders,
  Filter,
  ArrowUpRight,
  ChevronRight,
  Eye,
  FileCheck2,
} from "lucide-react";
import KYPLottie from "@/components/lottie/KYPLottie";

interface TelemetryEvent {
  id: string;
  entity: string;
  action: string;
  type: "pass" | "review" | "alert";
  time: string;
  metric: string;
}

const INITIAL_EVENTS: TelemetryEvent[] = [
  { id: "e-1", entity: "Apex Velocity Payments Ltd", action: "Companies House filing cross-check", type: "pass", time: "Just now", metric: "0 Discrepancies" },
  { id: "e-2", entity: "Aura Gaming Services Ltd", action: "WebCompli™ affiliate redirect scan", type: "pass", time: "1m ago", metric: "BRAM Compliant" },
  { id: "e-3", entity: "Solstice Cloud Solutions", action: "Annual beneficial ownership review", type: "pass", time: "3m ago", metric: "UBO 51.0% Verified" },
  { id: "e-4", entity: "Kronos Logistics Global", action: "Sanctions list delta match detected", type: "review", time: "5m ago", metric: "Director Co-Directorship" },
  { id: "e-5", entity: "OmniCart Digital Store", action: "Cross-border volume velocity check", type: "pass", time: "7m ago", metric: "+12.4% Safe Drift" },
  { id: "e-6", entity: "Nexus Global Pay Limited", action: "Visa VIRP storefront sweep", type: "pass", time: "9m ago", metric: "Zero Prohibited Goods" },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];

interface RiskTier {
  id: "high" | "medium" | "low" | "compliant";
  label: string;
  shortLabel: string;
  score: number;
  status: string;
  trend: string;
  trendGood: boolean;
  color: string;
  badgeBg: string;
  accent: string;
  readings: number[];
  volumes: string[];
  contagion: {
    compliant: number;
    review: number;
    alerts: number;
  };
}

const RISK_TIERS: RiskTier[] = [
  {
    id: "high",
    label: "High Risk Triggered",
    shortLabel: "High Risk (78)",
    score: 78,
    status: "Elevated Drift Detected",
    trend: "+42.4% Anomaly Spike",
    trendGood: false,
    color: "#ef4444",
    badgeBg: "bg-rose-50 border-rose-200 text-rose-800",
    accent: "#ef4444",
    readings: [52, 60, 74, 86, 92, 84, 78, 82, 75, 78],
    volumes: ["1.2M", "1.5M", "2.1M", "3.4M", "4.2M", "4.8M", "5.1M", "5.5M", "5.8M", "6.2M"],
    contagion: { compliant: 620, review: 380, alerts: 250 },
  },
  {
    id: "medium",
    label: "Medium Review Triage",
    shortLabel: "Medium (46)",
    score: 46,
    status: "Policy Rule Verification",
    trend: "-8.2% Under Investigation",
    trendGood: true,
    color: "#f59e0b",
    badgeBg: "bg-amber-50 border-amber-200 text-amber-800",
    accent: "#f59e0b",
    readings: [58, 54, 50, 48, 46, 44, 45, 47, 44, 46],
    volumes: ["1.2M", "1.4M", "1.8M", "2.2M", "2.7M", "3.1M", "3.6M", "4.0M", "4.3M", "4.7M"],
    contagion: { compliant: 880, review: 240, alerts: 130 },
  },
  {
    id: "low",
    label: "Low Risk Tier",
    shortLabel: "Low Risk (24)",
    score: 24,
    status: "Continuous Surveillance",
    trend: "-28.4% this quarter",
    trendGood: true,
    color: "#66cc00",
    badgeBg: "bg-kyp-mint/40 border-[#033653] text-kyp-navy",
    accent: "#66cc00",
    readings: [68, 62, 54, 48, 42, 35, 31, 28, 26, 24],
    volumes: ["1.2M", "1.5M", "1.9M", "2.3M", "2.8M", "3.2M", "3.7M", "4.1M", "4.6M", "5.1M"],
    contagion: { compliant: 1050, review: 150, alerts: 50 },
  },
  {
    id: "compliant",
    label: "Optimal Compliant Tier",
    shortLabel: "Compliant (12)",
    score: 12,
    status: "Zero Scheme Fines",
    trend: "-64.7% since Jan",
    trendGood: true,
    color: "#66cc00",
    badgeBg: "bg-[#000000] border border-[#033653] text-[#66cc00]",
    accent: "#66cc00",
    readings: [32, 26, 22, 19, 17, 15, 14, 13, 12, 12],
    volumes: ["1.2M", "1.6M", "2.0M", "2.5M", "3.1M", "3.8M", "4.4M", "5.0M", "5.4M", "5.9M"],
    contagion: { compliant: 1230, review: 18, alerts: 2 },
  },
];

export default function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState<"velocity" | "scheme" | "contagion" | "audit">("velocity");
  const [activeTierIndex, setActiveTierIndex] = useState<number>(2); // Default: Low Risk (24)
  const [isLooping, setIsLooping] = useState<boolean>(true);
  const [hoveredChartIndex, setHoveredChartIndex] = useState<number | null>(null);
  const [events, setEvents] = useState<TelemetryEvent[]>(INITIAL_EVENTS);
  const [activeKpiHover, setActiveKpiHover] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const currentTier = RISK_TIERS[activeTierIndex];

  // Auto-cycling risk simulation: High -> Medium -> Low -> Compliant -> High
  useEffect(() => {
    if (!isMounted || !isLooping) return;
    const tierInterval = setInterval(() => {
      setActiveTierIndex((prev) => (prev + 1) % RISK_TIERS.length);
    }, 4500);

    const eventInterval = setInterval(() => {
      setEvents((prev) => {
        const last = prev[prev.length - 1];
        const rest = prev.slice(0, prev.length - 1);
        const newEvent = {
          ...last,
          id: `e-${Date.now()}`,
          time: "Just now",
        };
        return [newEvent, ...rest];
      });
    }, 3200);

    return () => {
      clearInterval(tierInterval);
      clearInterval(eventInterval);
    };
  }, [isLooping]);

  // Compute SVG Points for the current risk tier readings
  // x from 50 to 770 (80px spacing), y from 40 (high score 100) to 200 (score 0)
  const graphPoints = useMemo(() => {
    return currentTier.readings.map((score, i) => {
      const x = 50 + i * 80;
      const y = Math.round(200 - (score / 100) * 160);
      return { x, y, score, month: MONTHS[i], volume: currentTier.volumes[i] };
    });
  }, [currentTier]);

  // Build smooth bezier path string
  const pathD = useMemo(() => {
    if (graphPoints.length === 0) return "";
    let d = `M ${graphPoints[0].x} ${graphPoints[0].y}`;
    for (let i = 0; i < graphPoints.length - 1; i++) {
      const p0 = graphPoints[i];
      const p1 = graphPoints[i + 1];
      const mx = (p0.x + p1.x) / 2;
      d += ` C ${mx} ${p0.y}, ${mx} ${p1.y}, ${p1.x} ${p1.y}`;
    }
    return d;
  }, [graphPoints]);

  // Build area fill polygon points
  const areaD = useMemo(() => {
    if (graphPoints.length === 0) return "";
    const firstX = graphPoints[0].x;
    const lastX = graphPoints[graphPoints.length - 1].x;
    return `${pathD} L ${lastX} 220 L ${firstX} 220 Z`;
  }, [pathD, graphPoints]);

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-2xl shadow-slate-200/60 overflow-hidden select-none">
      {/* Console Top Header Bar */}
      <div className="p-6 border-b border-slate-100 bg-slate-50/70 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full animate-ping"
              style={{ backgroundColor: currentTier.color }}
            />
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Enterprise Risk Intelligence Analytics
            </h3>
            <span
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border font-bold ${currentTier.badgeBg}`}
            >
              {currentTier.label.toUpperCase()}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Dynamic risk index waveform updating in real-time across card schemes, AML contagion, and settlement telemetry.
          </p>
        </div>

        {/* Dynamic Risk Level Simulator Buttons & Play/Pause */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Interactive Tier Switcher */}
          <div className="flex items-center rounded-full bg-white border border-slate-200 p-1 text-xs font-semibold shadow-xs">
            {RISK_TIERS.map((tier, idx) => (
              <button
                type="button"
                key={tier.id}
                onClick={() => {
                  setActiveTierIndex(idx);
                  setIsLooping(false);
                }}
                className={`px-3 py-1 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                  activeTierIndex === idx
                    ? "bg-[#000000] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tier.shortLabel}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsLooping(!isLooping)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-700 hover:bg-slate-50 shadow-xs cursor-pointer"
            title={isLooping ? "Pause auto-loop" : "Resume auto-loop"}
          >
            {isLooping ? (
              <>
                <Pause className="w-3.5 h-3.5 text-kyp-lime stroke-[2.5]" />
                <span className="font-bold text-slate-900">Live Auto-Cycle</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-slate-500" />
                <span>Paused</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 4 Interactive KPI Summary Cards Responding to Active Risk Reading */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-slate-50/40 border-b border-slate-100">
        {[
          {
            idx: 0,
            label: "Continuous Risk Index",
            value: `${currentTier.score}`,
            unit: "/100",
            status: currentTier.status,
            trend: currentTier.trend,
            trendGood: currentTier.trendGood,
            icon: <ShieldCheck className="w-4 h-4" style={{ color: currentTier.color }} />,
            color: "text-kyp-navy",
            bg: "bg-kyp-mint/40",
          },
          {
            idx: 1,
            label: "Monitored Entities",
            value: "1,250",
            unit: "Active",
            status: "100% Continuous Coverage",
            trend: "+38 new merchants",
            trendGood: true,
            icon: <Activity className="w-4 h-4 text-sky-600" />,
            color: "text-kyp-navy",
            bg: "bg-kyp-mint/40",
          },
          {
            idx: 2,
            label: "WebCompli™ Status",
            value: currentTier.id === "high" ? "2 Flags" : "0 Fines",
            unit: "BRAM / VIRP",
            status: currentTier.id === "high" ? "Redirect Warning" : "Mastercard & Visa Pass",
            trend: currentTier.id === "high" ? "1 Review Needed" : "Zero scheme violations",
            trendGood: currentTier.id !== "high",
            icon: <CheckCircle2 className="w-4 h-4 text-kyp-lime" />,
            color: "text-kyp-navy",
            bg: "bg-kyp-mint/40",
          },
          {
            idx: 3,
            label: "Audit Dossier SLA",
            value: "<60s",
            unit: "Instant",
            status: "SHA-256 Cryptographic",
            trend: "FCA & Sponsor Ready",
            trendGood: true,
            icon: <FileCheck2 className="w-4 h-4 text-purple-600" />,
            color: "text-purple-700",
            bg: "bg-purple-50",
          },
        ].map((kpi) => (
          <motion.div
            key={kpi.idx}
            onMouseEnter={() => setActiveKpiHover(kpi.idx)}
            onMouseLeave={() => setActiveKpiHover(null)}
            whileHover={{ y: -3 }}
            className={`p-4 rounded-2xl bg-white border transition-all cursor-pointer ${
              activeKpiHover === kpi.idx
                ? "border-[#033653] shadow-lg shadow-kyp-teal/10"
                : "border-slate-200/80 shadow-xs"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-slate-500 font-semibold uppercase">
                {kpi.label}
              </span>
              <div className={`p-1.5 rounded-lg ${kpi.bg}`}>{kpi.icon}</div>
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tracking-tight">
                {kpi.value}
              </span>
              <span className="text-xs font-mono text-slate-400 font-medium">{kpi.unit}</span>
            </div>
            <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
              <span className="text-slate-500 font-medium">{kpi.status}</span>
              <span
                className={`font-semibold flex items-center gap-0.5 ${
                  kpi.trendGood ? "text-kyp-lime" : "text-rose-500"
                }`}
              >
                {kpi.trendGood ? <TrendingDown className="w-3 h-3" /> : <TrendingUp className="w-3 h-3" />}
                {kpi.trend}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Analytics Section: Live Moving Waveform Chart + Live Telemetry Stream */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        {/* Left 8 Cols: Dynamic Moving Waveform Chart */}
        <div className="col-span-12 lg:col-span-8 p-6 lg:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base font-bold text-slate-900">
                  Continuous Risk Index Telemetry
                </h4>
                <motion.span
                  key={currentTier.id}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={`text-xs font-mono px-2.5 py-0.5 rounded-full font-bold border ${currentTier.badgeBg}`}
                >
                  Current Reading: {currentTier.score}/100 ({currentTier.label})
                </motion.span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Waveform actively recalculates based on live telemetry feeds. Hover over nodes or select a tier above.
              </p>
            </div>

            {/* Micro Legend */}
            <div className="flex items-center gap-4 text-xs font-mono text-slate-600">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-kyp-lime" />
                <span>Risk Index (0-100)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#66cc00]" />
                <span>Monthly Volume</span>
              </div>
            </div>
          </div>

          {/* SVG Animated Interactive Waveform Chart */}
          <div className="relative w-full h-72 bg-slate-50/70 rounded-2xl border border-slate-200/90 p-4 select-none overflow-hidden">
            {/* Background horizontal dashed grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-40">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-b border-dashed border-slate-300 pb-1">
                <span>100 (Critical Risk)</span>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-b border-dashed border-slate-300 pb-1">
                <span>75 (High Risk Tier)</span>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-b border-dashed border-slate-300 pb-1">
                <span>50 (Medium Triage)</span>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-b border-dashed border-slate-300 pb-1">
                <span>25 (Compliant Tier)</span>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-1">
                <span>0 (Zero Risk Baseline)</span>
              </div>
            </div>

            {/* Moving Laser Scanner Bar sweeping across graph */}
            <div
              className="absolute top-0 bottom-0 w-0.5 z-20 pointer-events-none"
              style={{
                background: `linear-gradient(to bottom, transparent, ${currentTier.color}, transparent)`,
                animation: "laser-scan 4s ease-in-out infinite alternate",
                boxShadow: `0 0 12px ${currentTier.color}`,
              }}
            />

            <svg viewBox="0 0 840 240" className="w-full h-full overflow-visible relative z-10">
              <defs>
                <linearGradient id="live-area-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={currentTier.color} stopOpacity="0.25" />
                  <stop offset="100%" stopColor={currentTier.color} stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="live-line-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#033653" />
                  <stop offset="50%" stopColor="#66cc00" />
                  <stop offset="100%" stopColor={currentTier.color} />
                </linearGradient>
              </defs>

              {/* Dynamic Animated Area Fill */}
              <motion.path
                key={`area-${currentTier.id}`}
                d={areaD}
                fill="url(#live-area-grad)"
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />

              {/* Dynamic Animated Line Path */}
              <motion.path
                key={`line-${currentTier.id}`}
                d={pathD}
                fill="none"
                stroke="url(#live-line-grad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0.6 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />

              {/* Interactive Data Nodes along the moving curve */}
              {graphPoints.map((pt, i) => {
                const isHovered = hoveredChartIndex === i;

                return (
                  <g
                    key={`${pt.month}-${currentTier.id}`}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredChartIndex(i)}
                    onMouseLeave={() => setHoveredChartIndex(null)}
                  >
                    {/* Hover Pulse Halo */}
                    {isHovered && (
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="16"
                        fill={currentTier.color}
                        fillOpacity="0.25"
                        className="animate-ping"
                      />
                    )}

                    {/* Data Node Point */}
                    <motion.circle
                      cx={pt.x}
                      cy={pt.y}
                      r={isHovered ? 8 : 5}
                      fill="#ffffff"
                      stroke={currentTier.color}
                      strokeWidth={isHovered ? 3 : 2.5}
                      className="transition-all duration-300"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                    />

                    {/* Score Tag above node if active or hovered */}
                    {(isHovered || i === graphPoints.length - 1) && (
                      <g>
                        <rect
                          x={pt.x - 22}
                          y={pt.y - 26}
                          width="44"
                          height="18"
                          rx="4"
                          fill="#000000"
                          opacity="0.85"
                        />
                        <text
                          x={pt.x}
                          y={pt.y - 13}
                          textAnchor="middle"
                          fill="#ffffff"
                          fontSize="10"
                          fontWeight="bold"
                          fontFamily="monospace"
                        >
                          {pt.score}
                        </text>
                      </g>
                    )}

                    {/* Month X-Axis Label */}
                    <text
                      x={pt.x}
                      y="235"
                      textAnchor="middle"
                      fill={isHovered ? "#000000" : "#64748b"}
                      fontSize="11"
                      fontWeight={isHovered ? "bold" : "normal"}
                      fontFamily="monospace"
                    >
                      {pt.month}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Interactive Tooltip Card on Hover */}
            {hoveredChartIndex !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 shadow-xl text-xs font-mono space-y-1 z-30 pointer-events-none"
              >
                <div className="flex items-center justify-between gap-4 font-bold text-slate-900 border-b border-slate-100 pb-1">
                  <span>Month: {graphPoints[hoveredChartIndex].month}</span>
                  <span className="font-bold" style={{ color: currentTier.color }}>
                    Risk Score: {graphPoints[hoveredChartIndex].score}/100
                  </span>
                </div>
                <div className="flex justify-between gap-4 text-slate-500">
                  <span>Processed Volume:</span>
                  <span className="font-bold text-slate-800">
                    ${graphPoints[hoveredChartIndex].volume}
                  </span>
                </div>
                <div className="flex justify-between gap-4 text-slate-500">
                  <span>Telemetry State:</span>
                  <span className="font-bold" style={{ color: currentTier.color }}>
                    {currentTier.label}
                  </span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Bottom Bar: Radial Risk Contagion Breakdown */}
          <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-kyp-lime font-bold shadow-xs">
                <KYPLottie type="heroRadar" className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900">
                  Portfolio Contagion Breakdown
                </span>
                <p className="text-[11px] text-slate-500">
                  Real-time entity health distribution across regulated partner portfolio
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-kyp-lime" />
                <span className="text-slate-700 font-bold">{currentTier.contagion.compliant} Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="text-slate-700 font-bold">{currentTier.contagion.review} Review</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="text-slate-700 font-bold">{currentTier.contagion.alerts} Alerts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right 4 Cols: Auto-Looping Live Telemetry Event Stream */}
        <div className="col-span-12 lg:col-span-4 bg-slate-50/60 border-t lg:border-t-0 lg:border-l border-slate-100 p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-kyp-lime animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase text-slate-800">
                  Live Event Stream
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">Looping Feed</span>
            </div>

            {/* Scrolling Events Feed with Framer Motion AnimatePresence */}
            <div className="space-y-2.5 overflow-hidden">
              <AnimatePresence initial={false}>
                {events.slice(0, 5).map((evt) => (
                  <motion.div
                    key={evt.id}
                    layout
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.35 }}
                    className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-[#033653] transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                      <span className="text-slate-400">{evt.time}</span>
                      <span
                        className={`px-2 py-0.5 rounded-full font-bold uppercase ${
                          evt.type === "pass"
                            ? "bg-kyp-mint/40 text-kyp-navy border border-[#033653]"
                            : "bg-amber-50 text-amber-700 border border-amber-200"
                        }`}
                      >
                        {evt.metric}
                      </span>
                    </div>
                    <div className="font-semibold text-xs text-slate-900 group-hover:text-kyp-navy transition-colors line-clamp-1">
                      {evt.entity}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      {evt.action}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200/80 mt-4">
            <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
                <KYPLottie type="continuousPulse" className="w-5 h-5" />
                <span>24/7 Autonomous Sentinel</span>
              </div>
              <span className="text-kyp-lime font-bold text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-kyp-lime animate-pulse" />
                Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
