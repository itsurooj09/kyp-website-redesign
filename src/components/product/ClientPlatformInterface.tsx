"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldAlert,
  Building,
  Activity,
  ChevronDown,
  Check,
  ExternalLink,
  Sliders,
  Bell,
  Search,
  UserCheck,
  FolderKanban,
  FileText,
  HelpCircle,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export default function ClientPlatformInterface() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [activeTab, setActiveTab] = useState<"key" | "contact" | "additional" | "warnings">("key");
  const [riskScore, setRiskScore] = useState(0);
  const [radarPulse, setRadarPulse] = useState(0);

  // Auto-fit responsive scaler matching client code's aspect ratio (1200 / 640)
  useEffect(() => {
    function handleResize() {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth || 1200;
      setScale(Math.min(1, width / 1200));
    }
    handleResize();
    const observer = new ResizeObserver(handleResize);
    if (containerRef.current) observer.observe(containerRef.current);
    window.addEventListener("resize", handleResize);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Animated risk score counter
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current >= 47) {
        setRiskScore(47);
        clearInterval(interval);
      } else {
        setRiskScore(current);
      }
    }, 25);
    return () => clearInterval(interval);
  }, []);

  // Subtle radar breathing animation loop
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setRadarPulse((prev) => (prev + 1) % 100);
    }, 2000);
    return () => clearInterval(pulseInterval);
  }, []);

  // Radar chart geometry for 6 risk axes
  const cx = 210;
  const cy = 170;
  const R = 112;
  const axes = [
    { name: "Credit Risk", angle: -90, company: 22, portfolio: 40 },
    { name: "Cyber Risk", angle: -30, company: 20, portfolio: 24 },
    { name: "AML Risk", angle: 30, company: 62, portfolio: 20 },
    { name: "Dark Web Risk", angle: 90, company: 45, portfolio: 20 },
    { name: "Legal Risk", angle: 150, company: 22, portfolio: 20 },
    { name: "Stakeholder Risk", angle: 210, company: 68, portfolio: 20 },
  ];

  const rad = (deg: number) => (deg * Math.PI) / 180;
  const getPoint = (angle: number, value: number) => {
    const r = (R * value) / 100;
    return [cx + r * Math.cos(rad(angle)), cy + r * Math.sin(rad(angle))];
  };

  const companyPolygonPoints = axes
    .map((a) => getPoint(a.angle, a.company).join(","))
    .join(" ");

  const portfolioPolygonPoints = axes
    .map((a) => getPoint(a.angle, a.portfolio).join(","))
    .join(" ");

  // Tabbed company details rows
  const companyData = {
    key: [
      { label: "Registration Number:", val: "04241161" },
      { label: "Legal Name:", val: "BET365 GROUP LIMITED" },
      { label: "Trading Status:", val: "Active", isPill: true },
      { label: "Trading Status Description:", val: "Active - Accounts Filed", isTall: true },
      { label: "Company Type:", val: "Private limited with Share Capital" },
      { label: "VAT Number:", val: "GB 823 4820 91" },
      { label: "Registration Date:", val: "26/06/2001" },
      { label: "Websites:", val: "bet365.com", isTall: true, isLink: true },
    ],
    contact: [
      { label: "Registered Office:", val: "Bet365 House, Media Way, Stoke-On-Trent, ST1 5SZ", isTall: true },
      { label: "Jurisdiction:", val: "United Kingdom (FCA / UKGC Area)" },
      { label: "Official Registry:", val: "Companies House UK (Direct API)" },
      { label: "Corporate Secretary:", val: "Active • Verified Corporate Agent" },
      { label: "Primary Country:", val: "United Kingdom (GBR)" },
      { label: "Contact Channel:", val: "compliance-monitoring@bet365.com" },
    ],
    additional: [
      { label: "SIC Industry Code:", val: "92000 - Gambling and betting activities" },
      { label: "Accounts Category:", val: "Total Exemption Full Group Reporting" },
      { label: "Last Accounts Date:", val: "26/03/2023 (Latest Approved Filing)" },
      { label: "Annual Confirmation:", val: "Up to date • Nil Adverse Filings" },
      { label: "Capitalization:", val: "GBP 100,000 Ordinary Shares Issued" },
      { label: "Ultimate Holding:", val: "Coates Family Controlling Interest" },
    ],
    warnings: [
      { label: "High Risk Stakeholder:", val: "Director has cross-directorship in high-risk PEP entity", isAlert: true, isTall: true },
      { label: "WebCompli™ Surveillance:", val: "24/7 BRAM/VIRP Storefront check active • 0 Fines" },
      { label: "Adverse Media Scan:", val: "2 Mentions detected in regulatory tribunal hearings" },
      { label: "Audit Readiness:", val: "Chronological dossier compiled • 1-Click Export Ready" },
    ],
  };

  return (
    <div
      ref={containerRef}
      className="w-full relative mx-auto overflow-hidden rounded-3xl shadow-2xl border border-slate-800 bg-[#000000]"
      style={{
        maxWidth: "1200px",
        height: `${640 * scale}px`,
        transition: "height 0.15s ease-out",
      }}
    >
      <div
        className="absolute top-0 left-0 w-[1200px] h-[640px] flex bg-[#12161c] text-[#e6edf3] font-sans overflow-hidden select-none"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "0 0",
        }}
      >
        {/* ===================== SIDEBAR ===================== */}
        <aside className="w-[224px] flex-none bg-[#151a21] border-r border-[#222a33] p-5 pt-6 flex flex-col justify-between relative overflow-hidden">
          <div>
            {/* Logo */}
            <div className="flex justify-between items-center px-1.5 mb-6 text-3xl font-light tracking-tighter leading-none">
              <span className="text-white">
                ky<b className="text-[#66cc00] font-normal">p</b>
              </span>
              <span className="text-xs text-[#7d8896] font-mono tracking-normal">&laquo;</span>
            </div>

            {/* User Pill */}
            <div className="flex items-center gap-2.5 bg-[#252c35] border border-slate-700/50 rounded-lg p-2.5 mb-6 font-semibold text-xs">
              <span className="w-7 h-7 rounded-full bg-[#39424d] flex items-center justify-center text-[#aeb7c2] text-xs font-bold">
                J
              </span>
              <div>
                <div className="text-white text-xs leading-tight">John Doe</div>
                <small className="block text-[8.5px] text-[#8a95a3] font-mono font-medium">
                  CLIENT_ADMIN
                </small>
              </div>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col gap-2">
              {[
                { label: "Alerts & Notifications", icon: <Bell className="w-3.5 h-3.5" />, active: false },
                { label: "Portfolio Overview", icon: <FolderKanban className="w-3.5 h-3.5" />, active: true },
                { label: "Portfolio Manager", icon: <Building className="w-3.5 h-3.5" />, active: false },
                { label: "Matches", icon: <UserCheck className="w-3.5 h-3.5" />, active: false },
                { label: "Company Search", icon: <Search className="w-3.5 h-3.5" />, active: false },
                { label: "Individual Search", icon: <Search className="w-3.5 h-3.5" />, active: false },
                { label: "Monitoring Settings", icon: <Sliders className="w-3.5 h-3.5" />, active: false },
                { label: "How-To Guides", icon: <HelpCircle className="w-3.5 h-3.5" />, active: false },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2.5 rounded-md px-3 h-7 text-[10.5px] font-bold shadow-xs cursor-pointer transition-all ${
                    item.active
                      ? "bg-[#2a313b] text-[#66cc00] border-l-2 border-[#66cc00]"
                      : "bg-[#1c222a] text-[#aeb7c2] hover:bg-[#252c35] hover:text-white"
                  }`}
                >
                  <span className={item.active ? "text-[#66cc00]" : "text-[#8a95a3]"}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
              ))}
            </nav>
          </div>

          {/* Decorative Bottom Sentinel Ring */}
          <div className="relative h-16 pointer-events-none">
            <div className="absolute left-6 -bottom-12 w-28 h-28 border border-dashed border-[#2c3540] rounded-full" />
            <div className="absolute left-14 bottom-3 w-7 h-5 bg-[#252c35] rounded border border-slate-700" />
            <div className="absolute left-28 -bottom-1 w-5 h-4 bg-[#66cc00]/20 rounded border border-[#66cc00]/40" />
          </div>
        </aside>

        {/* ===================== MAIN CONTENT AREA ===================== */}
        <main className="flex-1 px-7 pt-4 pb-4 min-w-0 flex flex-col justify-between overflow-hidden">
          {/* Top Header */}
          <div className="flex justify-between items-start h-[64px]">
            <div>
              <div className="text-[13.5px] font-bold text-[#f3f6f9] flex items-center gap-2">
                <span>Company Overview</span>
                <span className="text-[#66cc00] font-mono font-bold tracking-tight">BET365 GROUP LIMITED</span>
              </div>
              <div className="mt-1.5 text-[10.5px] text-[#8a95a3] flex gap-3.5">
                <div>Country:<b className="text-[#c3ccd6] ml-1">United Kingdom</b></div>
                <div>Portfolio:<b className="text-[#c3ccd6] ml-1">Tier-1 Gaming</b></div>
                <div>Status:<b className="text-[#f0883e] ml-1 flex-inline items-center gap-1 font-bold">Under Investigation</b></div>
              </div>
              <div className="mt-1 text-[9.5px] text-[#66cc00] font-mono font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#66cc00] animate-pulse" />
                <span>Portfolio Overview &bull; Real-Time Continuous Monitoring View</span>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-[#2c343e] border border-slate-700 flex items-center justify-center text-[#aeb7c2] text-xs font-bold shadow-xs">
              J
            </div>
          </div>

          {/* Alert Banner */}
          <div className="h-[46px] border-1.5 border-[#e0803a] rounded-lg bg-[#1a1f26] flex items-center px-3 gap-3 shadow-md my-1">
            <div className="text-[10px] leading-tight text-[#c3ccd6] font-bold uppercase tracking-tight">
              Risk<br />Score
            </div>
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-7 h-7 border-1.5 border-[#e0803a] rounded bg-[#252c35] text-[#f0883e] font-extrabold text-sm flex items-center justify-center shadow-xs font-mono"
            >
              {riskScore}
            </motion.div>
            <div className="flex-1 text-[10.5px] text-[#aeb7c2] leading-tight">
              Alert type: <b className="text-[#f3f6f9]">Stakeholder is a Profile of Interest</b> triggered
              <strong className="block text-[11.5px] text-[#f0883e] font-bold">
                Stakeholder is a Profile of Interest &bull; Elevated Ownership Drift
              </strong>
            </div>
            <button className="bg-[#000000] hover:bg-[#033653] text-[#66cc00] border border-[#66cc00]/50 text-[10px] font-bold px-3 py-1.5 rounded transition-all cursor-pointer shadow-xs">
              Graph
            </button>
            <button className="bg-[#66cc00] hover:bg-[#55b300] text-[#000000] text-[10px] font-extrabold px-3 py-1.5 rounded flex items-center gap-1 transition-all cursor-pointer shadow-sm">
              <span>Reports</span>
              <ChevronDown className="w-3 h-3 stroke-[3]" />
            </button>
          </div>

          {/* 6 Risk Category Tiles */}
          <div className="grid grid-cols-6 gap-2.5 my-2">
            {[
              { label: "Credit", status: "Low Risk", color: "text-[#66cc00]", bg: "bg-[#222931]", border: "border-slate-800" },
              { label: "Cyber", status: "Low Risk", color: "text-[#66cc00]", bg: "bg-[#222931]", border: "border-slate-800" },
              { label: "AML", status: "Medium Risk", color: "text-[#f0883e]", bg: "bg-[#222931]", border: "border-[#f0883e]/30" },
              { label: "Dark Web", status: "Medium Risk", color: "text-[#f0883e]", bg: "bg-[#222931]", border: "border-[#f0883e]/30" },
              { label: "Legal", status: "Low Risk", color: "text-[#66cc00]", bg: "bg-[#222931]", border: "border-slate-800" },
              { label: "Stakeholder", status: "High Risk", color: "text-[#ef4444]", bg: "bg-[#2a1b1e]", border: "border-[#ef4444]/60", isHigh: true },
            ].map((tile, idx) => (
              <div
                key={idx}
                className={`${tile.bg} border ${tile.border} rounded-lg h-12 flex flex-col items-center justify-center text-xs font-bold shadow-xs relative overflow-hidden`}
              >
                {tile.isHigh && (
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#ef4444] animate-ping" />
                )}
                <span className="text-[#e6edf3] text-[12px]">{tile.label}</span>
                <small className={`text-[9px] font-extrabold ${tile.color} tracking-tight`}>
                  {tile.status}
                </small>
              </div>
            ))}
          </div>

          {/* Two Interactive Panels */}
          <div className="grid grid-cols-2 gap-3 flex-1 min-h-[380px] overflow-hidden">
            {/* Panel 1: Company Details */}
            <section className="bg-[#1b2027] border border-[#262f3a] rounded-xl flex flex-col justify-between overflow-hidden shadow-md">
              <div>
                <div className="flex items-center gap-2.5 h-10 px-3.5 text-xs font-bold text-[#f3f6f9] border-b-2 border-[#3d8b7a] bg-[#171c23]">
                  <Building className="w-4 h-4 text-[#66cc00]" />
                  <span>Company Details &bull; Legal Registry Feed</span>
                </div>

                {/* Sub-Tabs */}
                <div className="mx-3 mt-2.5 mb-2 bg-[#252c35] border border-slate-700/60 rounded-md h-8 flex items-center justify-around text-[10.5px] font-semibold text-[#8a95a3]">
                  {(["key", "contact", "additional", "warnings"] as const).map((tabKey) => (
                    <button
                      key={tabKey}
                      onClick={() => setActiveTab(tabKey)}
                      className={`px-3 py-1 rounded transition-colors cursor-pointer capitalize font-bold ${
                        activeTab === tabKey
                          ? "text-[#66cc00] border-b-2 border-[#66cc00] bg-[#1a1f26]"
                          : "hover:text-white"
                      }`}
                    >
                      {tabKey === "key"
                        ? "Key info"
                        : tabKey === "contact"
                        ? "Contact info"
                        : tabKey === "additional"
                        ? "Additional info"
                        : "Warnings"}
                    </button>
                  ))}
                </div>

                {/* Data Rows */}
                <div className="mx-3 overflow-hidden text-[10.5px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="divide-y divide-[#222a33]"
                    >
                      {companyData[activeTab].map((row, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center py-1.5 px-2 ${
                            idx % 2 === 1 ? "bg-[#252c35]/60" : "bg-transparent"
                          } ${row.isTall ? "min-h-[34px]" : "min-h-[26px]"}`}
                        >
                          <b className="w-[140px] text-right pr-2.5 text-[#c3ccd6] flex-none font-semibold text-[10px]">
                            {row.label}
                          </b>
                          <span
                            className={`flex-1 font-mono text-[10.5px] ${
                              row.isAlert
                                ? "text-[#f0883e] font-bold"
                                : row.isPill
                                ? "text-[#66cc00] font-bold"
                                : row.isLink
                                ? "text-[#66cc00] underline"
                                : "text-[#e6edf3]"
                            }`}
                          >
                            {row.val}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Bottom Security Timestamp */}
              <div className="px-3 py-1.5 bg-[#171c23] border-t border-[#222a33] text-[9.5px] font-mono text-slate-400 flex items-center justify-between">
                <span>Verified via UK Companies House API</span>
                <span className="text-[#66cc00] font-bold flex items-center gap-1">
                  <Check className="w-3 h-3 stroke-[3]" /> Live Sentinel Synced
                </span>
              </div>
            </section>

            {/* Panel 2: Risk Analysis Radar */}
            <section className="bg-[#1b2027] border border-[#262f3a] rounded-xl flex flex-col justify-between overflow-hidden shadow-md">
              <div>
                <div className="flex items-center gap-2.5 h-10 px-3.5 text-xs font-bold text-[#f3f6f9] border-b-2 border-[#3d8b7a] bg-[#171c23]">
                  <Activity className="w-4 h-4 text-[#66cc00]" />
                  <span>Risk Analysis &bull; Multi-Vector Assessment Radar</span>
                </div>

                {/* Legend */}
                <div className="flex justify-center gap-4 mt-2.5 text-[9.5px] text-[#c3ccd6] font-mono font-semibold">
                  <span className="flex items-center gap-1.5">
                    <i className="inline-block w-4 h-2.5 rounded-xs bg-[#4fb500]/60 border border-[#66cc00]" />
                    Company Risk Score
                  </span>
                  <span className="flex items-center gap-1.5">
                    <i className="inline-block w-4 h-2.5 rounded-xs bg-[#6f93d0]/60 border border-[#6f93d0]" />
                    Portfolio Baseline
                  </span>
                </div>

                {/* Live Animated SVG Radar Chart */}
                <div className="w-full flex items-center justify-center pt-1">
                  <svg id="kdRadar" viewBox="0 0 420 310" className="w-[390px] h-[255px]">
                    {/* Concentric Grid Polygons */}
                    {[20, 40, 60, 80, 100].map((v) => (
                      <g key={v}>
                        <polygon
                          points={axes.map((a) => getPoint(a.angle, v).join(",")).join(" ")}
                          fill="none"
                          stroke="#2e3742"
                          strokeWidth="1"
                        />
                        <text x={cx + 4} y={cy - (R * v) / 100 + 3} fill="#8a95a3" fontSize="8" fontFamily="monospace">
                          {v}
                        </text>
                      </g>
                    ))}

                    {/* Radial Axis Spokes */}
                    {axes.map((a, i) => {
                      const p = getPoint(a.angle, 100);
                      return <line key={i} x1={cx} y1={cy} x2={p[0]} y2={p[1]} stroke="#2e3742" strokeWidth="1" />;
                    })}

                    {/* Rotating Radar Laser Sweep */}
                    <g transform={`rotate(${radarPulse * 3.6} ${cx} ${cy})`}>
                      <line x1={cx} y1={cy} x2={cx + R} y2={cy} stroke="#66cc00" strokeWidth="1.5" strokeOpacity="0.7" />
                      <circle cx={cx + R} cy={cy} r="3" fill="#66cc00" />
                    </g>

                    {/* Portfolio Risk Score Polygon (Blue Area) */}
                    <polygon
                      points={portfolioPolygonPoints}
                      fill="rgba(110, 150, 210, 0.35)"
                      stroke="#6f93d0"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />

                    {/* Company Risk Score Polygon (Vibrant Green Animated Area) */}
                    <motion.polygon
                      points={companyPolygonPoints}
                      fill="rgba(80, 180, 40, 0.45)"
                      stroke="#66cc00"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      animate={{
                        fillOpacity: [0.4, 0.55, 0.4],
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Vertex Data Points */}
                    {axes.map((a, i) => {
                      const cp = getPoint(a.angle, a.company);
                      const pp = getPoint(a.angle, a.portfolio);
                      return (
                        <g key={i}>
                          <circle cx={pp[0]} cy={pp[1]} r="2.5" fill="#6f93d0" />
                          <circle cx={cp[0]} cy={cp[1]} r="3.5" fill="#66cc00" />
                          <circle cx={cp[0]} cy={cp[1]} r="6" fill="#66cc00" opacity="0.3" className="animate-ping" />
                        </g>
                      );
                    })}

                    {/* Outer Axis Labels */}
                    {axes.map((a, i) => {
                      const c = Math.cos(rad(a.angle));
                      const s = Math.sin(rad(a.angle));
                      const lx = cx + (R + 18) * c;
                      const ly = cy + (R + 18) * s + (s < -0.9 ? -2 : s > 0.9 ? 8 : 3);
                      const anchor = c > 0.3 ? "start" : c < -0.3 ? "end" : "middle";
                      return (
                        <text
                          key={i}
                          x={lx}
                          y={ly}
                          textAnchor={anchor}
                          fill="#dfe5ec"
                          fontSize="9"
                          fontWeight="700"
                          fontFamily="sans-serif"
                        >
                          {a.name}
                        </text>
                      );
                    })}
                  </svg>
                </div>
              </div>

              {/* Bottom Radar Footnote */}
              <div className="px-3 py-1.5 bg-[#171c23] border-t border-[#222a33] text-[9.5px] font-mono text-slate-400 flex items-center justify-between">
                <span>Calculated on 180+ Data Sources</span>
                <span className="text-[#f0883e] font-bold">Stakeholder Drift Flagged</span>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
