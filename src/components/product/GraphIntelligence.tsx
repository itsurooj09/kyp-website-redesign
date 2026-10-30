"use client";

import React, { useState, useRef, useEffect } from "react";
import { ZoomIn, ZoomOut, RotateCcw, Shield, AlertTriangle, CheckCircle, Info, ExternalLink, Network, ArrowUpRight, Search } from "lucide-react";

export interface GraphNode {
  id: string;
  name: string;
  type: "company" | "director" | "ubo" | "subsidiary" | "merchant" | "risk";
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
  flowSpeed?: number;
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
  { source: "ubo-1", target: "parent-1", label: "Controls 38.5% Equity" },
  { source: "dir-1", target: "parent-1", label: "Appointed Director" },
  { source: "dir-1", target: "co-1", label: "Board Member" },
  { source: "parent-1", target: "co-1", label: "100% Parent Ownership" },
  { source: "parent-1", target: "co-2", label: "80% Controlling Stake" },
  { source: "ubo-2", target: "co-2", label: "20% Minority Partner" },
  { source: "co-1", target: "m-1", label: "Acquiring Facility" },
  { source: "co-1", target: "m-2", label: "Settlement Account" },
  { source: "co-2", target: "m-3", label: "Licensing Sub-Merchant" },
];

export default function GraphIntelligence() {
  const [selectedNode, setSelectedNode] = useState<GraphNode>(INITIAL_NODES[0]);
  const [filterType, setFilterType] = useState<string>("all");
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isHoveredNode, setIsHoveredNode] = useState<string | null>(null);

  const filteredNodes = INITIAL_NODES.filter((n) => {
    const matchesFilter = filterType === "all" || n.type === filterType;
    const matchesSearch =
      searchQuery === "" ||
      n.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (n.jurisdiction && n.jurisdiction.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const getNodeColor = (status: GraphNode["status"], isSelected: boolean) => {
    if (isSelected) return "#c6f5ef"; // Light Mint
    switch (status) {
      case "compliant":
        return "#66cc00"; // Lime
      case "review":
        return "#6fd3c4"; // Teal
      case "alert":
        return "#ff5555"; // High Risk Red Accent
      default:
        return "#6fd3c4";
    }
  };

  const handleZoom = (delta: number) => {
    setZoomLevel((prev) => Math.min(Math.max(0.7, prev + delta), 1.6));
  };

  const handleReset = () => {
    setZoomLevel(1);
    setSelectedNode(INITIAL_NODES[0]);
    setFilterType("all");
    setSearchQuery("");
  };

  return (
    <div className="w-full bg-black/80 rounded-2xl border border-kyp-teal/20 overflow-hidden shadow-2xl relative kyp-grid-pattern">
      {/* Graph Toolbar */}
      <div className="p-4 md:p-6 border-b border-kyp-teal/15 bg-kyp-navy-surface/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-kyp-navy border border-kyp-teal/30 flex items-center justify-center text-kyp-lime">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-semibold text-white">
                KYP Graph Intelligence™ Engine
              </h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-kyp-lime/10 text-kyp-lime border border-kyp-lime/30">
                Interactive Multi-Tier Resolution
              </span>
            </div>
            <p className="text-xs text-gray-400">
              Click any node to explore entity relationships, contagion risk, and UBO disclosures.
            </p>
          </div>
        </div>

        {/* Filter & Zoom Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Node Category Filters */}
          <div className="flex items-center rounded-lg bg-kyp-black border border-kyp-teal/20 p-0.5 text-xs">
            <button
              onClick={() => setFilterType("all")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filterType === "all" ? "bg-kyp-navy text-white font-medium" : "text-gray-400 hover:text-white"
              }`}
            >
              All Nodes
            </button>
            <button
              onClick={() => setFilterType("ubo")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filterType === "ubo" ? "bg-kyp-navy text-kyp-mint font-medium" : "text-gray-400 hover:text-white"
              }`}
            >
              UBOs
            </button>
            <button
              onClick={() => setFilterType("subsidiary")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filterType === "subsidiary" ? "bg-kyp-navy text-kyp-teal font-medium" : "text-gray-400 hover:text-white"
              }`}
            >
              Subsidiaries
            </button>
            <button
              onClick={() => setFilterType("merchant")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filterType === "merchant" ? "bg-kyp-navy text-kyp-lime font-medium" : "text-gray-400 hover:text-white"
              }`}
            >
              Merchants
            </button>
          </div>

          {/* Zoom Actions */}
          <div className="flex items-center gap-1 bg-kyp-black border border-kyp-teal/20 rounded-lg p-1 text-gray-300">
            <button
              onClick={() => handleZoom(0.15)}
              className="p-1.5 hover:text-kyp-lime hover:bg-white/5 rounded"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleZoom(-0.15)}
              className="p-1.5 hover:text-kyp-lime hover:bg-white/5 rounded"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleReset}
              className="p-1.5 hover:text-kyp-lime hover:bg-white/5 rounded"
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
            viewBox="0 0 1000 620"
            className="w-full h-auto max-h-[580px] transition-transform duration-300 ease-out"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6fd3c4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#033653" stopOpacity="0.3" />
              </linearGradient>
              <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
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

                return (
                  <g key={idx} className="cursor-pointer">
                    <line
                      x1={sNode.x}
                      y1={sNode.y}
                      x2={tNode.x}
                      y2={tNode.y}
                      stroke={isConnectedToSelected ? "#c6f5ef" : isHovered ? "#66cc00" : "#6fd3c4"}
                      strokeWidth={isConnectedToSelected ? 2.5 : 1.2}
                      strokeOpacity={isConnectedToSelected ? 0.9 : 0.35}
                      strokeDasharray={isConnectedToSelected ? "none" : "4 4"}
                    />
                    {/* Animated Data Pulse dot moving along link */}
                    <circle r={isConnectedToSelected ? 3 : 2} fill="#66cc00">
                      <animateMotion
                        path={`M ${sNode.x} ${sNode.y} L ${tNode.x} ${tNode.y}`}
                        dur={`${2.5 + (idx % 3)}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                );
              })}
            </g>

            {/* Nodes */}
            <g className="nodes">
              {filteredNodes.map((node) => {
                const isSelected = selectedNode.id === node.id;
                const isHovered = isHoveredNode === node.id;
                const nodeFill = getNodeColor(node.status, isSelected);

                return (
                  <g
                    key={node.id}
                    className="cursor-pointer transition-transform duration-200"
                    onClick={() => setSelectedNode(node)}
                    onMouseEnter={() => setIsHoveredNode(node.id)}
                    onMouseLeave={() => setIsHoveredNode(null)}
                  >
                    {/* Ambient Glow for selected/hovered nodes */}
                    {(isSelected || isHovered) && (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={node.size + 14}
                        fill={isSelected ? "#c6f5ef" : "#66cc00"}
                        opacity="0.18"
                        filter="url(#glow-filter)"
                      />
                    )}

                    {/* Outer Ring */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={node.size + 4}
                      fill="none"
                      stroke={nodeFill}
                      strokeWidth={isSelected ? 2 : 1}
                      strokeOpacity={isSelected ? 1 : 0.4}
                    />

                    {/* Core Node Circle */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={node.size}
                      fill="#033653"
                      stroke={nodeFill}
                      strokeWidth={isSelected ? 2.5 : 1.5}
                    />

                    {/* Inner status beacon */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={5}
                      fill={nodeFill}
                      className={isSelected ? "animate-pulse" : ""}
                    />

                    {/* Node Text Label */}
                    <text
                      x={node.x}
                      y={node.y + node.size + 16}
                      textAnchor="middle"
                      fill={isSelected ? "#c6f5ef" : "#ffffff"}
                      fontSize="12"
                      fontWeight={isSelected ? "600" : "500"}
                      className="font-sans drop-shadow-md pointer-events-none"
                    >
                      {node.name}
                    </text>
                    <text
                      x={node.x}
                      y={node.y + node.size + 28}
                      textAnchor="middle"
                      fill="#6fd3c4"
                      fontSize="9"
                      fontFamily="monospace"
                      className="pointer-events-none"
                    >
                      {node.type.toUpperCase()} • Risk: {node.riskScore}/100
                    </text>
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Illustrative Sample Notice */}
          <div className="absolute bottom-3 left-4 bg-black/80 px-2.5 py-1 rounded border border-kyp-teal/20 text-[10px] font-mono text-gray-400">
            Illustrative sample data • Entity resolution demo
          </div>
        </div>

        {/* Selected Entity Context Panel (Inspector) */}
        <div className="col-span-12 lg:col-span-4 bg-kyp-navy-surface/90 border-t lg:border-t-0 lg:border-l border-kyp-teal/15 p-6 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-kyp-teal/15 pb-4">
              <span className="text-[11px] font-mono tracking-widest text-kyp-teal uppercase font-semibold flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" />
                Entity Dossier Inspector
              </span>
              <span
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold uppercase ${
                  selectedNode.status === "compliant"
                    ? "bg-kyp-lime/15 text-kyp-lime border border-kyp-lime/30"
                    : selectedNode.status === "review"
                    ? "bg-kyp-teal/15 text-kyp-teal border border-kyp-teal/30"
                    : "bg-red-500/15 text-red-400 border border-red-500/30"
                }`}
              >
                {selectedNode.status === "compliant"
                  ? "Cleared • Monitored"
                  : selectedNode.status === "review"
                  ? "Requires Review"
                  : "High Risk Alert"}
              </span>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white tracking-tight">
                {selectedNode.name}
              </h4>
              <p className="text-xs text-kyp-mint font-mono mt-1">
                Type: {selectedNode.type.toUpperCase()}{" "}
                {selectedNode.jurisdiction && `• ${selectedNode.jurisdiction}`}
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-kyp-black/50 border border-kyp-teal/15">
                <div className="text-[10px] font-mono text-gray-400 uppercase">Risk Index</div>
                <div className="text-lg font-bold text-white mt-0.5 flex items-baseline gap-1">
                  <span>{selectedNode.riskScore}</span>
                  <span className="text-xs text-gray-500 font-normal">/100</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-kyp-black/50 border border-kyp-teal/15">
                <div className="text-[10px] font-mono text-gray-400 uppercase">Connections</div>
                <div className="text-lg font-bold text-kyp-teal mt-0.5">
                  {selectedNode.connections.length} Linked Nodes
                </div>
              </div>
            </div>

            {/* Specific Meta */}
            <div className="space-y-2 text-xs">
              {selectedNode.regNumber && (
                <div className="flex justify-between py-1.5 border-b border-kyp-navy-light/40">
                  <span className="text-gray-400">Registration / Filing:</span>
                  <span className="font-mono text-white">{selectedNode.regNumber}</span>
                </div>
              )}
              {selectedNode.equity && (
                <div className="flex justify-between py-1.5 border-b border-kyp-navy-light/40">
                  <span className="text-gray-400">Equity Ownership:</span>
                  <span className="font-semibold text-kyp-lime">{selectedNode.equity}</span>
                </div>
              )}
              <div className="flex justify-between py-1.5 border-b border-kyp-navy-light/40">
                <span className="text-gray-400">Surveillance Status:</span>
                <span className="text-kyp-mint">Continuous 24/7 Active</span>
              </div>
            </div>

            {/* Analyst Risk Notes */}
            <div className="p-3.5 rounded-lg bg-kyp-black/60 border border-kyp-teal/20 space-y-1.5">
              <div className="text-[10px] font-mono text-kyp-teal uppercase font-semibold flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-kyp-lime" />
                Intelligence Summary & Contagion Context
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                {selectedNode.notes}
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-kyp-teal/15 mt-6">
            <a
              href="#monitoring-alerts"
              className="w-full kyp-btn-secondary py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2"
            >
              <span>View Full Continuous Audit Log</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
