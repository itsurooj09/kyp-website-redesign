"use client";

import React, { useState, useEffect } from "react";
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

export default function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState<"velocity" | "scheme" | "contagion" | "audit">("velocity");
  const [hoveredChartIndex, setHoveredChartIndex] = useState<number | null>(null);
  const [isLooping, setIsLooping] = useState<boolean>(true);
  const [events, setEvents] = useState<TelemetryEvent[]>(INITIAL_EVENTS);
  const [activeKpiHover, setActiveKpiHover] = useState<number | null>(null);

  // Auto-looping telemetry events simulation
  useEffect(() => {
    if (!isLooping) return;
    const interval = setInterval(() => {
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
    }, 3500);
    return () => clearInterval(interval);
  }, [isLooping]);

  // Chart data points (Monthly Risk Velocity)
  const chartPoints = [
    { month: "Jan", score: 68, volume: "1.2M", alerts: 8 },
    { month: "Feb", score: 62, volume: "1.5M", alerts: 6 },
    { month: "Mar", score: 54, volume: "1.9M", alerts: 5 },
    { month: "Apr", score: 48, volume: "2.3M", alerts: 4 },
    { month: "May", score: 42, volume: "2.8M", alerts: 3 },
    { month: "Jun", score: 35, volume: "3.2M", alerts: 2 },
    { month: "Jul", score: 31, volume: "3.7M", alerts: 2 },
    { month: "Aug", score: 28, volume: "4.1M", alerts: 1 },
    { month: "Sep", score: 26, volume: "4.6M", alerts: 1 },
    { month: "Oct", score: 24, volume: "5.1M", alerts: 0 },
  ];

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-2xl shadow-slate-200/60 overflow-hidden">
      {/* Console Top Header Bar */}
      <div className="p-6 border-b border-slate-100 bg-slate-50/70 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Enterprise Risk Intelligence Analytics
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold">
              LIVE TELEMETRY
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Real-time portfolio surveillance, automated card scheme sweeps, and continuous contagion telemetry.
          </p>
        </div>

        {/* View Tabs & Play/Pause Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center rounded-full bg-white border border-slate-200 p-1 text-xs font-semibold shadow-sm">
            {(
              [
                { id: "velocity", label: "Risk Velocity" },
                { id: "scheme", label: "Scheme Health" },
                { id: "contagion", label: "Contagion Map" },
                { id: "audit", label: "Audit Readiness" },
              ] as const
            ).map((t) => (
              <button
                type="button"
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeTab === t.id
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsLooping(!isLooping)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-700 hover:bg-slate-50 shadow-sm cursor-pointer"
            title={isLooping ? "Pause auto-loop" : "Resume auto-loop"}
          >
            {isLooping ? (
              <>
                <Pause className="w-3.5 h-3.5 text-emerald-600" />
                <span>Loop Active</span>
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

      {/* 4 Interactive KPI Summary Cards with Hover Animation */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-slate-50/40 border-b border-slate-100">
        {[
          {
            idx: 0,
            label: "Continuous Risk Index",
            value: "24",
            unit: "/100",
            status: "Low Risk Tier",
            trend: "-14.2% this quarter",
            trendGood: true,
            icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />,
            color: "text-emerald-700",
            bg: "bg-emerald-50",
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
            color: "text-sky-700",
            bg: "bg-sky-50",
          },
          {
            idx: 2,
            label: "WebCompli™ Status",
            value: "0 Fines",
            unit: "BRAM / VIRP",
            status: "Mastercard & Visa Pass",
            trend: "Zero scheme violations",
            trendGood: true,
            icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
            color: "text-emerald-700",
            bg: "bg-emerald-50",
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
                ? "border-emerald-500/60 shadow-lg shadow-emerald-500/10"
                : "border-slate-200/80 shadow-sm"
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
              <span className="text-slate-500">{kpi.status}</span>
              <span className="text-emerald-600 font-semibold flex items-center gap-0.5">
                <TrendingDown className="w-3 h-3" />
                {kpi.trend}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Analytics Section: Interactive Waveform Chart + Live Telemetry Stream */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px]">
        {/* Left 8 Cols: Interactive Motion Waveform Chart */}
        <div className="col-span-12 lg:col-span-8 p-6 lg:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base font-bold text-slate-900">
                  Continuous Risk Index Telemetry
                </h4>
                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">
                  Down 64.7% since Jan
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Hover over data nodes to inspect real-time transaction volume and alert resolutions.
              </p>
            </div>

            {/* Micro Legend */}
            <div className="flex items-center gap-4 text-xs font-mono text-slate-600">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>Risk Index (0-100)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                <span>Monthly Volume</span>
              </div>
            </div>
          </div>

          {/* SVG Animated Interactive Waveform Chart */}
          <div className="relative w-full h-64 bg-slate-50/60 rounded-2xl border border-slate-200/80 p-4 select-none overflow-hidden">
            {/* Background horizontal grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-40">
              <div className="border-b border-dashed border-slate-300 w-full" />
              <div className="border-b border-dashed border-slate-300 w-full" />
              <div className="border-b border-dashed border-slate-300 w-full" />
              <div className="border-b border-dashed border-slate-300 w-full" />
            </div>

            <svg viewBox="0 0 900 240" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="chart-area-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#16a34a" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="chart-line-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="50%" stopColor="#0d9488" />
                  <stop offset="100%" stopColor="#16a34a" />
                </linearGradient>
              </defs>

              {/* Area fill */}
              <polygon
                points="40,170 120,150 200,130 280,115 360,100 440,85 520,75 600,68 680,63 760,58 760,220 40,220"
                fill="url(#chart-area-grad)"
              />

              {/* Main Wave Line */}
              <motion.path
                d="M 40 170 Q 120 150, 200 130 T 360 100 T 520 75 T 680 63 T 760 58"
                fill="none"
                stroke="url(#chart-line-grad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
              />

              {/* Data Node Circles */}
              {chartPoints.map((pt, i) => {
                const x = 40 + i * 80;
                // mapping score 68 -> 170, 24 -> 58
                const y = 220 - (pt.score / 100) * 230;
                const isHovered = hoveredChartIndex === i;

                return (
                  <g
                    key={pt.month}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredChartIndex(i)}
                    onMouseLeave={() => setHoveredChartIndex(null)}
                  >
                    {/* Hover Pulse Ring */}
                    {isHovered && (
                      <circle
                        cx={x}
                        cy={y}
                        r="16"
                        fill="#16a34a"
                        fillOpacity="0.2"
                        className="animate-ping"
                      />
                    )}

                    {/* Outer circle */}
                    <circle
                      cx={x}
                      cy={y}
                      r={isHovered ? 8 : 5}
                      fill="#ffffff"
                      stroke="#16a34a"
                      strokeWidth={isHovered ? 3 : 2}
                      className="transition-all duration-200"
                    />

                    {/* Month X-Axis Label */}
                    <text
                      x={x}
                      y="235"
                      textAnchor="middle"
                      fill={isHovered ? "#0f172a" : "#94a3b8"}
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
                className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 shadow-xl text-xs font-mono space-y-1 z-20 pointer-events-none"
              >
                <div className="flex items-center justify-between gap-4 font-bold text-slate-900 border-b border-slate-100 pb-1">
                  <span>Month: {chartPoints[hoveredChartIndex].month}</span>
                  <span className="text-emerald-700">
                    Risk Score: {chartPoints[hoveredChartIndex].score}/100
                  </span>
                </div>
                <div className="flex justify-between gap-4 text-slate-500">
                  <span>Processed Volume:</span>
                  <span className="font-bold text-slate-800">
                    ${chartPoints[hoveredChartIndex].volume}
                  </span>
                </div>
                <div className="flex justify-between gap-4 text-slate-500">
                  <span>Active Alerts Resolved:</span>
                  <span className="font-bold text-emerald-600">
                    {chartPoints[hoveredChartIndex].alerts} Flags Cleared
                  </span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Bottom Bar: Radial Risk Contagion Gauge */}
          <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 font-bold shadow-sm">
                <KYPLottie type="heroRadar" className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900">
                  Portfolio Contagion Breakdown
                </span>
                <p className="text-[11px] text-slate-500">
                  84% Clean &bull; 12% Low Review &bull; 4% Sanctions Scrutiny
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-slate-700 font-bold">1,050 Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="text-slate-700 font-bold">150 Review</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="text-slate-700 font-bold">50 Alerts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right 4 Cols: Auto-Looping Live Telemetry Event Stream */}
        <div className="col-span-12 lg:col-span-4 bg-slate-50/60 border-t lg:border-t-0 lg:border-l border-slate-100 p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
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
                    className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                      <span className="text-slate-400">{evt.time}</span>
                      <span
                        className={`px-2 py-0.5 rounded-full font-bold uppercase ${
                          evt.type === "pass"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-amber-50 text-amber-700 border border-amber-200"
                        }`}
                      >
                        {evt.metric}
                      </span>
                    </div>
                    <div className="font-semibold text-xs text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1">
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
              <span className="text-emerald-600 font-bold text-xs">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
