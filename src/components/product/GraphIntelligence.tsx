"use client";

import React, { useState } from "react";
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Shield,
  AlertTriangle,
  CheckCircle2,
  Info,
  ExternalLink,
  Network,
  ArrowUpRight,
  Search,
  Check,
  Building2,
  User,
  Sliders,
  FileCheck2,
} from "lucide-react";

export interface GraphNode {
  id: string;
  name: string;
  type: "company" | "director" | "ubo" | "subsidiary" | "merchant";
  status: "compliant" | "review" | "alert";
  x: number;
  y: number;
  size: number;
  jurisdiction?: string;
  regNumber?: string;
  equity?: string;
  riskScore: number;
  connections: string[];
  notes: string;
}

export interface GraphLink {
  source: string;
  target: string;
  label: string;
}

const INITIAL_NODES: GraphNode[] = [
  {
    id: "parent-1",
    name: "Apex Global Holdings SA",
    type: "company",
    status: "review",
    x: 480,
    y: 180,
    size: 42,
    jurisdiction: "Luxembourg (LU)",
    regNumber: "B284910",
    riskScore: 68,
    connections: ["ubo-1", "co-1", "co-2", "dir-1"],
    notes: "Ultimate holding company. Recent change in shareholding structure filed 14 days ago.",
  },
  {
    id: "ubo-1",
    name: "Marcus Vance",
    type: "ubo",
    status: "alert",
    x: 230,
    y: 120,
    size: 34,
    jurisdiction: "United Kingdom",
    equity: "38.5% Direct Ownership",
    riskScore: 84,
    connections: ["parent-1"],
    notes: "Adverse media alert detected in foreign registry gazette. PEP relationship flagged for review.",
  },
  {
    id: "dir-1",
    name: "Sarah Jenkins",
    type: "director",
    status: "compliant",
    x: 690,
    y: 110,
    size: 30,
    jurisdiction: "United Kingdom",
    riskScore: 12,
    connections: ["parent-1", "co-1"],
    notes: "FCA-approved person. Clean sanctions screening and verified corporate register identity.",
  },
  {
    id: "co-1",
    name: "Velocity Pay Limited",
    type: "subsidiary",
    status: "compliant",
    x: 340,
    y: 350,
    size: 38,
    jurisdiction: "United Kingdom (FCA Regulated)",
    regNumber: "09823411",
    riskScore: 24,
    connections: ["parent-1", "m-1", "m-2"],
    notes: "Licensed Payment Institution. Full continuous monitoring active with zero BRAM violations.",
  },
  {
    id: "co-2",
    name: "Aura Gaming Services Ltd",
    type: "subsidiary",
    status: "review",
    x: 640,
    y: 340,
    size: 36,
    jurisdiction: "Malta (MGA Licensed)",
    regNumber: "C-94812",
    riskScore: 59,
    connections: ["parent-1", "m-3", "ubo-2"],
    notes: "iGaming white-label platform operator. Active licence verified; affiliate compliance review pending.",
  },
  {
    id: "ubo-2",
    name: "Elena Rostova",
    type: "ubo",
    status: "compliant",
    x: 850,
    y: 280,
    size: 30,
    jurisdiction: "Cyprus",
    equity: "26.0% Beneficial Owner",
    riskScore: 18,
    connections: ["co-2"],
    notes: "Verified passport, proof of address, and source of funds documentation on file.",
  },
  {
    id: "m-1",
    name: "OmniCart Digital Ltd",
    type: "merchant",
    status: "compliant",
    x: 180,
    y: 470,
    size: 26,
    jurisdiction: "E-Commerce / UK",
    riskScore: 15,
    connections: ["co-1"],
    notes: "E-commerce merchant. WebCompli automated monthly sweep passed with clean disclosures.",
  },
  {
    id: "m-2",
    name: "CloudTech Direct",
    type: "merchant",
    status: "alert",
    x: 410,
    y: 500,
    size: 28,
    jurisdiction: "SaaS / Ireland",
    riskScore: 78,
    connections: ["co-1"],
    notes: "Sudden 400% volumetric spike in cross-border settlements detected. Requires MLRO review.",
  },
  {
    id: "m-3",
    name: "BetStream Interactive",
    type: "merchant",
    status: "review",
    x: 740,
    y: 490,
    size: 26,
    jurisdiction: "Online Casino / Curacao",
    riskScore: 52,
    connections: ["co-2"],
    notes: "Affiliate redirect link flagged for potential traffic from restricted EU jurisdiction.",
  },
];

const INITIAL_LINKS: GraphLink[] = [
  { source: "parent-1", target: "ubo-1", label: "38.5% Controlling Shareholder" },
  { source: "parent-1", target: "dir-1", label: "Managing Director" },
  { source: "parent-1", target: "co-1", label: "100% Subsidiary (UK)" },
  { source: "parent-1", target: "co-2", label: "74% Subsidiary (MT)" },
  { source: "ubo-2", target: "co-2", label: "26% Minority Partner" },
  { source: "co-1", target: "m-1", label: "Acquiring Facility" },
  { source: "co-1", target: "m-2", label: "Settlement Account" },
  { source: "co-2", target: "m-3", label: "Licensing Sub-Merchant" },
];

export default function GraphIntelligence() {
  const [selectedNode, setSelectedNode] = useState<GraphNode>(INITIAL_NODES[0]);
  const [activeFilter, setActiveFilter] = useState<"all" | "ubo" | "subsidiary" | "merchant">("all");
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isHoveredNode, setIsHoveredNode] = useState<string | null>(null);

  const handleFilterClick = (type: "all" | "ubo" | "subsidiary" | "merchant") => {
    setActiveFilter(type);
    if (type === "all") {
      setSelectedNode(INITIAL_NODES[0]);
    } else {
      const match = INITIAL_NODES.find((n) => n.type === type);
      if (match) setSelectedNode(match);
    }
  };

  const handleZoom = (delta: number) => {
    setZoomLevel((prev) => Math.min(Math.max(0.7, prev + delta), 1.5));
  };

  const handleReset = () => {
    setZoomLevel(1);
    setSelectedNode(INITIAL_NODES[0]);
    setActiveFilter("all");
  };

  const getNodeColor = (status: GraphNode["status"], isSelected: boolean) => {
    if (isSelected) return "#c6f5ef";
    switch (status) {
      case "compliant":
        return "#66cc00";
      case "review":
        return "#6fd3c4";
      case "alert":
        return "#ff5555";
      default:
        return "#6fd3c4";
    }
  };

  return (
    <div className="w-full bg-black/90 rounded-2xl border border-kyp-teal/30 overflow-hidden shadow-2xl relative kyp-grid-pattern">
      {/* Graph Toolbar */}
      <div className="p-4 md:p-6 border-b border-kyp-teal/15 bg-kyp-navy-surface/90 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-kyp-navy border border-kyp-teal/30 flex items-center justify-center text-kyp-lime shadow-lime-glow">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                KYP Graph Intelligence™ Engine
              </h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-kyp-lime/10 text-kyp-lime border border-kyp-lime/30 font-semibold">
                Interactive Multi-Tier Resolution
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-0.5">
              Click any node to explore entity relationships, contagion risk, and UBO disclosures.
            </p>
          </div>
        </div>

        {/* Filter & Zoom Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Node Category Filters with High-Visibility Active Feedback */}
          <div className="flex items-center rounded-xl bg-black/80 border border-kyp-teal/25 p-1 text-xs font-mono">
            <button
              type="button"
              onClick={() => handleFilterClick("all")}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 font-semibold ${
                activeFilter === "all"
                  ? "bg-kyp-lime text-black shadow-lime-glow"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              All Nodes ({INITIAL_NODES.length})
            </button>
            <button
              type="button"
              onClick={() => handleFilterClick("ubo")}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 font-semibold ${
                activeFilter === "ubo"
                  ? "bg-kyp-mint text-black shadow-md"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              UBOs (2)
            </button>
            <button
              type="button"
              onClick={() => handleFilterClick("subsidiary")}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 font-semibold ${
                activeFilter === "subsidiary"
                  ? "bg-kyp-teal text-black shadow-md"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Subsidiaries (2)
            </button>
            <button
              type="button"
              onClick={() => handleFilterClick("merchant")}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 font-semibold ${
                activeFilter === "merchant"
                  ? "bg-kyp-lime text-black shadow-lime-glow"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Merchants (3)
            </button>
          </div>

          {/* Zoom Actions */}
          <div className="flex items-center gap-1 bg-black/80 border border-kyp-teal/25 rounded-xl p-1 text-gray-300 text-xs font-mono">
            <button
              type="button"
              onClick={() => handleZoom(0.15)}
              className="p-1.5 hover:text-kyp-lime hover:bg-white/5 rounded-lg"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <span className="px-1 text-[11px] text-kyp-teal">{Math.round(zoomLevel * 100)}%</span>
            <button
              type="button"
              onClick={() => handleZoom(-0.15)}
              className="p-1.5 hover:text-kyp-lime hover:bg-white/5 rounded-lg"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="p-1.5 hover:text-kyp-lime hover:bg-white/5 rounded-lg border-l border-kyp-teal/20 ml-1 pl-2"
              title="Reset View"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Graph Visualization Area + Side Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
        {/* SVG Network Visualizer */}
        <div className="col-span-12 lg:col-span-8 relative bg-black flex items-center justify-center p-4 overflow-hidden select-none">
          {/* Subtle Radar Background Grid */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="w-[500px] h-[500px] rounded-full border border-kyp-teal/40" />
            <div className="w-[340px] h-[340px] rounded-full border border-kyp-teal/30" />
            <div className="w-[180px] h-[180px] rounded-full border border-kyp-teal/20" />
          </div>

          <svg
            viewBox="0 0 1000 600"
            className="w-full h-auto max-h-[560px] transition-transform duration-300 ease-out"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6fd3c4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#033653" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Links / Edges */}
            <g className="links">
              {INITIAL_LINKS.map((link, idx) => {
                const sNode = INITIAL_NODES.find((n) => n.id === link.source);
                const tNode = INITIAL_NODES.find((n) => n.id === link.target);
                if (!sNode || !tNode) return null;

                const isConnectedToSelected =
                  selectedNode.id === sNode.id || selectedNode.id === tNode.id;
                const isHovered =
                  isHoveredNode === sNode.id || isHoveredNode === tNode.id;

                const isMuted =
                  activeFilter !== "all" &&
                  sNode.type !== activeFilter &&
                  tNode.type !== activeFilter;

                return (
                  <g key={idx} className="cursor-pointer">
                    <line
                      x1={sNode.x}
                      y1={sNode.y}
                      x2={tNode.x}
                      y2={tNode.y}
                      stroke={isConnectedToSelected ? "#c6f5ef" : isHovered ? "#66cc00" : "#6fd3c4"}
                      strokeWidth={isConnectedToSelected ? 2.5 : 1.2}
                      strokeOpacity={isMuted ? 0.15 : isConnectedToSelected ? 0.9 : 0.35}
                      strokeDasharray={isConnectedToSelected ? "none" : "4 4"}
                    />
                    {/* Animated Data Pulse dot moving along link */}
                    {!isMuted && (
                      <circle r={isConnectedToSelected ? 3.5 : 2} fill={isConnectedToSelected ? "#c6f5ef" : "#66cc00"}>
                        <animateMotion
                          path={`M ${sNode.x} ${sNode.y} L ${tNode.x} ${tNode.y}`}
                          dur={`${2.4 + (idx % 3)}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                  </g>
                );
              })}
            </g>

            {/* Nodes */}
            <g className="nodes">
              {INITIAL_NODES.map((node) => {
                const isSelected = selectedNode.id === node.id;
                const isHovered = isHoveredNode === node.id;
                const matchesFilter = activeFilter === "all" || node.type === activeFilter;
                const nodeFill = getNodeColor(node.status, isSelected);

                return (
                  <g
                    key={node.id}
                    className="cursor-pointer transition-all duration-300"
                    style={{ opacity: matchesFilter ? 1 : 0.25 }}
                    onClick={() => setSelectedNode(node)}
                    onMouseEnter={() => setIsHoveredNode(node.id)}
                    onMouseLeave={() => setIsHoveredNode(null)}
                  >
                    {/* Ambient Glow for selected/hovered nodes */}
                    {(isSelected || isHovered || (matchesFilter && activeFilter !== "all")) && (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={node.size + 14}
                        fill={isSelected ? "#c6f5ef" : "#66cc00"}
                        fillOpacity={isSelected ? 0.25 : 0.15}
                        className="animate-pulse"
                      />
                    )}

                    {/* Outer Status Ring */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={node.size + 4}
                      fill="none"
                      stroke={nodeFill}
                      strokeWidth={isSelected ? 3 : 1.5}
                      strokeDasharray={node.status === "alert" ? "3 3" : "none"}
                    />

                    {/* Node Body */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={node.size}
                      fill="#033653"
                      stroke={isSelected ? "#ffffff" : "#033653"}
                      strokeWidth={isSelected ? 2 : 1}
                    />

                    {/* Center Core */}
                    <circle cx={node.x} cy={node.y} r={node.size * 0.35} fill={nodeFill} />

                    {/* Node Label */}
                    <text
                      x={node.x}
                      y={node.y + node.size + 16}
                      textAnchor="middle"
                      fill={isSelected ? "#ffffff" : matchesFilter ? "#c6f5ef" : "#64748b"}
                      fontSize={isSelected ? "13" : "11"}
                      fontWeight={isSelected ? "700" : "500"}
                      fontFamily="Inter, sans-serif"
                    >
                      {node.name}
                    </text>

                    {/* Sub-label */}
                    <text
                      x={node.x}
                      y={node.y + node.size + 28}
                      textAnchor="middle"
                      fill={node.status === "alert" ? "#ff8888" : "#66cc00"}
                      fontSize="9"
                      fontWeight="600"
                      fontFamily="monospace"
                    >
                      {node.type.toUpperCase()} • RISK: {node.riskScore}
                    </text>
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Quick HUD Legend */}
          <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-black/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-kyp-teal/20 text-[11px] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-kyp-lime" />
              <span className="text-gray-300">Compliant</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-kyp-teal" />
              <span className="text-gray-300">Review</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="text-gray-300">Alert</span>
            </div>
          </div>
        </div>

        {/* Side Inspector Drawer */}
        <div className="col-span-12 lg:col-span-4 bg-kyp-navy-surface/95 border-t lg:border-t-0 lg:border-l border-kyp-teal/20 p-6 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-kyp-teal/15 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-kyp-mint uppercase font-semibold">
                <Info className="w-3.5 h-3.5 text-kyp-teal" />
                <span>Entity Dossier Inspector</span>
              </div>
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                  selectedNode.status === "compliant"
                    ? "bg-kyp-lime/10 text-kyp-lime border border-kyp-lime/30"
                    : selectedNode.status === "review"
                    ? "bg-kyp-teal/10 text-kyp-teal border border-kyp-teal/30"
                    : "bg-red-500/10 text-red-400 border border-red-500/30"
                }`}
              >
                {selectedNode.status === "alert" ? "High Risk Alert" : selectedNode.status.toUpperCase()}
              </span>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white tracking-tight">{selectedNode.name}</h4>
              <p className="text-xs font-mono text-gray-400 mt-1">
                Type: <strong className="text-white uppercase">{selectedNode.type}</strong> &bull; {selectedNode.jurisdiction}
              </p>
            </div>

            {/* Metrics cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-black/60 border border-kyp-teal/15">
                <span className="text-[10px] font-mono text-gray-400 uppercase">Risk Index</span>
                <div className="text-2xl font-bold mt-0.5">
                  <span className={selectedNode.riskScore > 70 ? "text-red-400" : selectedNode.riskScore > 40 ? "text-yellow-400" : "text-kyp-lime"}>
                    {selectedNode.riskScore}
                  </span>
                  <span className="text-xs text-gray-500 font-normal"> /100</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/60 border border-kyp-teal/15">
                <span className="text-[10px] font-mono text-gray-400 uppercase">Connections</span>
                <div className="text-2xl font-bold text-white mt-0.5">
                  {selectedNode.connections.length} <span className="text-xs text-gray-400 font-normal">Linked Nodes</span>
                </div>
              </div>
            </div>

            {/* Ownership / Registration Details */}
            <div className="space-y-2 text-xs font-mono border-t border-kyp-teal/15 pt-3">
              {selectedNode.equity && (
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Declared Equity:</span>
                  <span className="text-kyp-mint font-semibold">{selectedNode.equity}</span>
                </div>
              )}
              {selectedNode.regNumber && (
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Registration / Filing:</span>
                  <span className="text-white font-semibold">{selectedNode.regNumber}</span>
                </div>
              )}
              <div className="flex justify-between py-1">
                <span className="text-gray-400">Surveillance Status:</span>
                <span className="text-kyp-lime font-semibold">Continuous 24/7 Active</span>
              </div>
            </div>

            {/* Contextual Intelligence Note */}
            <div className="p-3.5 rounded-xl bg-black/60 border border-kyp-teal/20 space-y-1.5">
              <div className="text-[11px] font-mono text-kyp-teal flex items-center gap-1.5 font-semibold">
                <AlertTriangle className="w-3.5 h-3.5 text-yellow-400" />
                <span>Intelligence Summary &amp; Contagion Context</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">{selectedNode.notes}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-kyp-teal/15 mt-4">
            <button
              type="button"
              onClick={() => alert(`Opening Full Continuous Audit Log for ${selectedNode.name}...`)}
              className="w-full py-2.5 px-4 rounded-xl bg-kyp-navy hover:bg-kyp-navy-light border border-kyp-teal/30 hover:border-kyp-lime text-xs font-mono font-semibold text-white transition-all flex items-center justify-center gap-2"
            >
              <span>View Full Continuous Audit Log</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-kyp-lime" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
