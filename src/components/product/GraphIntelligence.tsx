"use client";

import React, { useState, useEffect } from "react";
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Info,
  Network,
  ArrowUpRight,
  AlertTriangle,
  Edit3,
  Save,
  CheckCircle2,
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
    y: 490,
    size: 26,
    jurisdiction: "Digital Services / US",
    riskScore: 76,
    connections: ["co-1"],
    notes: "Sudden spike in refund velocity (+42%). Storefront domain mismatch flagged.",
  },
  {
    id: "m-3",
    name: "BetStream Interactive",
    type: "merchant",
    status: "review",
    x: 740,
    y: 480,
    size: 26,
    jurisdiction: "iGaming Affiliate / MT",
    riskScore: 52,
    connections: ["co-2"],
    notes: "Affiliate redirect tracker detecting secondary destination URL variation.",
  },
];

const INITIAL_LINKS: GraphLink[] = [
  { source: "parent-1", target: "ubo-1", label: "38.5% Equity" },
  { source: "parent-1", target: "dir-1", label: "Director" },
  { source: "parent-1", target: "co-1", label: "100% Owned" },
  { source: "parent-1", target: "co-2", label: "80% Owned" },
  { source: "co-1", target: "dir-1", label: "Secretary" },
  { source: "co-1", target: "m-1", label: "Acquiring Bin" },
  { source: "co-1", target: "m-2", label: "PayFac Merchant" },
  { source: "co-2", target: "m-3", label: "White Label Partner" },
  { source: "co-2", target: "ubo-2", label: "26.0% UBO" },
];

export default function GraphIntelligence() {
  const [nodes, setNodes] = useState<GraphNode[]>(INITIAL_NODES);
  const [selectedNode, setSelectedNode] = useState<GraphNode>(INITIAL_NODES[0]);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isHoveredNode, setIsHoveredNode] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editForm, setEditForm] = useState<Partial<GraphNode>>({});
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleZoom = (delta: number) => {
    setZoomLevel((prev) => Math.min(Math.max(0.65, prev + delta), 1.4));
  };

  const handleReset = () => {
    setZoomLevel(1);
    setActiveFilter("all");
    setSelectedNode(nodes[0]);
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleNodeSelect = (node: GraphNode) => {
    setSelectedNode(node);
    setIsEditing(false);
  };

  const handleStartEdit = () => {
    setEditForm({
      name: selectedNode.name,
      riskScore: selectedNode.riskScore,
      status: selectedNode.status,
      notes: selectedNode.notes,
    });
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    setNodes((prev) =>
      prev.map((n) => (n.id === selectedNode.id ? { ...n, ...editForm } : n))
    );
    setSelectedNode((prev) => ({ ...prev, ...editForm }));
    setIsEditing(false);
    showToast(`✓ Updated node ${editForm.name || selectedNode.name}`);
  };

  const getNodeColor = (status: GraphNode["status"], isSelected: boolean) => {
    if (isSelected) return "#66cc00";
    switch (status) {
      case "compliant":
        return "#66cc00"; // KYP Lime
      case "review":
        return "#6fd3c4"; // KYP Teal
      case "alert":
        return "#ef4444"; // Alert Red
      default:
        return "#6fd3c4";
    }
  };

  const currentUboCount = nodes.filter((n) => n.type === "ubo").length;
  const currentSubsidiaryCount = nodes.filter((n) => n.type === "subsidiary").length;
  const currentMerchantCount = nodes.filter((n) => n.type === "merchant").length;

  return (
    <div className="w-full bg-[#000000] rounded-3xl border-2 border-[#033653] overflow-hidden shadow-2xl relative select-none">
      {/* Toast Notification */}
      {toast && (
        <div className="absolute top-4 right-4 z-50 bg-[#66cc00] text-[#000000] px-4 py-2 rounded-xl font-mono text-xs font-bold shadow-lg flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-black" />
          <span>{toast}</span>
        </div>
      )}

      {/* Graph Toolbar (Deep Obsidian #000000 & Navy #033653) */}
      <div className="p-4 md:p-6 border-b border-[#033653] bg-[#033653]/40 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-[#000000] border-2 border-[#66cc00] flex items-center justify-center text-[#66cc00] shadow-[0_0_15px_rgba(102,204,0,0.35)]">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                KYP Graph Intelligence™ Engine
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#66cc00]/20 text-[#66cc00] border border-[#66cc00]/40 font-bold">
                Live Interactive Graph
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Click any entity node to inspect beneficial ownership, cross-border contagion, or edit node risk status.
            </p>
          </div>
        </div>

        {/* Filter & Zoom Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Node Category Filters with High-Visibility Active Feedback */}
          <div className="flex items-center rounded-xl bg-[#000000] border border-[#033653] p-1 text-xs font-mono">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 font-semibold cursor-pointer ${
                activeFilter === "all"
                  ? "bg-[#66cc00] text-[#000000] font-bold shadow-[0_0_12px_rgba(102,204,0,0.6)]"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              All Nodes ({nodes.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("ubo")}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 font-semibold cursor-pointer ${
                activeFilter === "ubo"
                  ? "bg-[#c6f5ef] text-[#033653] font-bold shadow-[0_0_12px_rgba(198,245,239,0.6)]"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              UBOs ({currentUboCount})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("subsidiary")}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 font-semibold cursor-pointer ${
                activeFilter === "subsidiary"
                  ? "bg-[#6fd3c4] text-[#033653] font-bold shadow-[0_0_12px_rgba(111,211,196,0.6)]"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Subsidiaries ({currentSubsidiaryCount})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("merchant")}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 font-semibold cursor-pointer ${
                activeFilter === "merchant"
                  ? "bg-[#66cc00] text-[#000000] font-bold shadow-[0_0_12px_rgba(102,204,0,0.6)]"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Merchants ({currentMerchantCount})
            </button>
          </div>

          {/* Zoom Actions */}
          <div className="flex items-center gap-1 bg-[#000000] border border-[#033653] rounded-xl p-1 text-slate-300 text-xs font-mono">
            <button
              type="button"
              onClick={() => handleZoom(0.15)}
              className="p-1.5 hover:text-[#66cc00] hover:bg-white/5 rounded-lg cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <span className="px-1 text-[11px] text-[#6fd3c4] font-bold">{Math.round(zoomLevel * 100)}%</span>
            <button
              type="button"
              onClick={() => handleZoom(-0.15)}
              className="p-1.5 hover:text-[#66cc00] hover:bg-white/5 rounded-lg cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="p-1.5 hover:text-[#66cc00] hover:bg-white/5 rounded-lg border-l border-[#033653] ml-1 pl-2 cursor-pointer"
              title="Reset View"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Graph Visualization Area + Side Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px]">
        {/* SVG Network Visualizer */}
        <div className="col-span-12 lg:col-span-8 relative bg-[#000000] flex items-center justify-center p-4 overflow-hidden select-none">
          {/* Concentric Radar Background Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
            <div className="w-[520px] h-[520px] rounded-full border border-[#033653]" />
            <div className="w-[360px] h-[360px] rounded-full border border-[#6fd3c4]/40" />
            <div className="w-[200px] h-[200px] rounded-full border border-[#66cc00]/30" />
          </div>

          {!isMounted ? (
            <div className="h-96 flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-8 h-8 rounded-full border-2 border-[#66cc00] border-t-transparent animate-spin" />
              <div className="text-xs font-mono text-[#c6f5ef]">Loading Risk Intelligence Graph Canvas...</div>
            </div>
          ) : (
            <svg
              viewBox="0 0 1000 600"
              className="w-full h-auto max-h-[580px] transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              {/* Links / Edges */}
              <g className="links">
                {INITIAL_LINKS.map((link, idx) => {
                  const sNode = nodes.find((n) => n.id === link.source);
                  const tNode = nodes.find((n) => n.id === link.target);
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
                    <g key={idx}>
                      <line
                        x1={sNode.x}
                        y1={sNode.y}
                        x2={tNode.x}
                        y2={tNode.y}
                        stroke={isConnectedToSelected ? "#c6f5ef" : isHovered ? "#66cc00" : "#6fd3c4"}
                        strokeWidth={isConnectedToSelected ? 3 : 1.5}
                        strokeOpacity={isMuted ? 0.15 : isConnectedToSelected ? 0.95 : 0.4}
                        strokeDasharray={isConnectedToSelected ? "none" : "4 4"}
                      />
                      {/* Pulse circle along connection */}
                      {!isMuted && (
                        <circle
                          cx={(sNode.x + tNode.x) / 2}
                          cy={(sNode.y + tNode.y) / 2}
                          r={isConnectedToSelected ? 3.5 : 2}
                          fill={isConnectedToSelected ? "#c6f5ef" : "#66cc00"}
                          className="animate-ping"
                        />
                      )}
                    </g>
                  );
                })}
              </g>

              {/* Nodes */}
              <g className="nodes">
                {nodes.map((node) => {
                  const isSelected = selectedNode.id === node.id;
                  const isHovered = isHoveredNode === node.id;
                  const matchesFilter = activeFilter === "all" || node.type === activeFilter;
                  const nodeFill = getNodeColor(node.status, isSelected);

                  return (
                    <g
                      key={node.id}
                      className="cursor-pointer transition-all duration-300"
                      style={{ opacity: matchesFilter ? 1 : 0.25 }}
                      onClick={() => handleNodeSelect(node)}
                      onMouseEnter={() => setIsHoveredNode(node.id)}
                      onMouseLeave={() => setIsHoveredNode(null)}
                    >
                      {/* Ambient Glow for selected/hovered nodes */}
                      {(isSelected || isHovered || (matchesFilter && activeFilter !== "all")) && (
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={node.size + 16}
                          fill={isSelected ? "#c6f5ef" : "#66cc00"}
                          fillOpacity={isSelected ? 0.35 : 0.25}
                          className="animate-pulse"
                        />
                      )}

                      {/* Outer Status Ring */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={node.size + 5}
                        fill="none"
                        stroke={nodeFill}
                        strokeWidth={isSelected ? 4 : 2}
                        strokeDasharray={node.status === "alert" ? "4 4" : "none"}
                      />

                      {/* Node Body (Brand Navy #033653) */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={node.size}
                        fill="#033653"
                        stroke={isSelected ? "#ffffff" : "#033653"}
                        strokeWidth={isSelected ? 3 : 1.5}
                      />

                      {/* Center Core */}
                      <circle cx={node.x} cy={node.y} r={node.size * 0.35} fill={nodeFill} />

                      {/* Node Name Label */}
                      <text
                        x={node.x}
                        y={node.y + node.size + 18}
                        textAnchor="middle"
                        fill={isSelected ? "#ffffff" : matchesFilter ? "#c6f5ef" : "#94a3b8"}
                        fontSize={isSelected ? "14" : "12"}
                        fontWeight={isSelected ? "800" : "600"}
                        fontFamily="Inter, sans-serif"
                      >
                        {node.name}
                      </text>

                      {/* Sub-label */}
                      <text
                        x={node.x}
                        y={node.y + node.size + 32}
                        textAnchor="middle"
                        fill={node.status === "alert" ? "#ef4444" : node.status === "review" ? "#6fd3c4" : "#66cc00"}
                        fontSize="10"
                        fontWeight="700"
                        fontFamily="monospace"
                      >
                        {node.type.toUpperCase()} • RISK: {node.riskScore}
                      </text>
                    </g>
                  );
                })}
              </g>
            </svg>
          )}

          {/* Quick HUD Legend */}
          <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-[#000000]/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#033653] text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#66cc00]" />
              <span className="text-slate-300">Compliant</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6fd3c4]" />
              <span className="text-slate-300">Review</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
              <span className="text-slate-300">Alert</span>
            </div>
          </div>
        </div>

        {/* Side Inspector Drawer (Deep Black #000000 & Navy #033653) */}
        <div className="col-span-12 lg:col-span-4 bg-[#000000] border-t lg:border-t-0 lg:border-l-2 border-[#033653] p-6 sm:p-7 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-[#033653] pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c6f5ef] uppercase font-bold">
                <Info className="w-4 h-4 text-[#66cc00]" />
                <span>Entity Dossier Inspector</span>
              </div>
              <button
                type="button"
                onClick={isEditing ? () => setIsEditing(false) : handleStartEdit}
                className={`px-3 py-1 rounded-lg border text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer ${
                  isEditing
                    ? "bg-[#66cc00] text-[#000000] border-[#66cc00]"
                    : "bg-[#033653] border-[#6fd3c4]/40 text-[#c6f5ef] hover:border-[#66cc00]"
                }`}
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{isEditing ? "Cancel" : "Edit Node"}</span>
              </button>
            </div>

            {/* Entity Name & Type */}
            <div>
              {isEditing ? (
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-slate-400 uppercase">Node Name</label>
                  <input
                    type="text"
                    value={editForm.name || ""}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className="w-full bg-[#033653] border border-[#66cc00] rounded-lg px-3 py-2 text-white text-base font-bold focus:outline-none"
                  />
                </div>
              ) : (
                <>
                  <h4 className="text-2xl font-extrabold text-white tracking-tight">{selectedNode.name}</h4>
                  <p className="text-xs font-mono text-slate-400 mt-1.5">
                    Type: <strong className="text-[#66cc00] uppercase">{selectedNode.type}</strong> &bull; {selectedNode.jurisdiction}
                  </p>
                </>
              )}
            </div>

            {/* Metrics cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#033653]/40 border border-[#033653]">
                <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">Risk Index</span>
                {isEditing ? (
                  <div className="mt-1 space-y-1">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={editForm.riskScore ?? selectedNode.riskScore}
                      onChange={(e) => setEditForm({ ...editForm, riskScore: Number(e.target.value) })}
                      className="w-full"
                    />
                    <div className="text-sm font-bold text-white font-mono">{editForm.riskScore}/100</div>
                  </div>
                ) : (
                  <div className="text-3xl font-extrabold mt-1">
                    <span className={selectedNode.riskScore > 70 ? "text-[#ef4444]" : selectedNode.riskScore > 40 ? "text-amber-400" : "text-[#66cc00]"}>
                      {selectedNode.riskScore}
                    </span>
                    <span className="text-xs text-slate-400 font-normal"> /100</span>
                  </div>
                )}
              </div>

              <div className="p-3.5 rounded-xl bg-[#033653]/40 border border-[#033653]">
                <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">Status Tier</span>
                {isEditing ? (
                  <select
                    value={editForm.status || selectedNode.status}
                    onChange={(e) => setEditForm({ ...editForm, status: e.target.value as any })}
                    className="w-full mt-2 bg-[#000000] border border-[#6fd3c4] rounded-lg px-2.5 py-1 text-white text-xs font-mono focus:outline-none"
                  >
                    <option value="compliant">Compliant</option>
                    <option value="review">Review</option>
                    <option value="alert">High Alert</option>
                  </select>
                ) : (
                  <div className="mt-2">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-md text-xs font-mono font-bold uppercase ${
                        selectedNode.status === "compliant"
                          ? "bg-[#66cc00]/20 text-[#66cc00] border border-[#66cc00]/50"
                          : selectedNode.status === "review"
                          ? "bg-[#6fd3c4]/20 text-[#6fd3c4] border border-[#6fd3c4]/50"
                          : "bg-red-500/20 text-[#ef4444] border border-red-500/50"
                      }`}
                    >
                      {selectedNode.status === "alert" ? "HIGH RISK" : selectedNode.status.toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Ownership / Registration Details */}
            <div className="space-y-2.5 text-xs font-mono border-t border-[#033653] pt-4">
              {selectedNode.equity && (
                <div className="flex justify-between py-1 border-b border-[#033653]/60">
                  <span className="text-slate-400">Declared Equity:</span>
                  <span className="text-[#c6f5ef] font-bold">{selectedNode.equity}</span>
                </div>
              )}
              {selectedNode.regNumber && (
                <div className="flex justify-between py-1 border-b border-[#033653]/60">
                  <span className="text-slate-400">Registration / Filing:</span>
                  <span className="text-white font-bold">{selectedNode.regNumber}</span>
                </div>
              )}
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Surveillance Status:</span>
                <span className="text-[#66cc00] font-bold">Continuous 24/7 Active</span>
              </div>
            </div>

            {/* Contextual Intelligence Note */}
            <div className="p-4 rounded-xl bg-[#033653]/30 border border-[#033653] space-y-2">
              <div className="text-xs font-mono text-[#6fd3c4] flex items-center gap-1.5 font-bold">
                <AlertTriangle className="w-4 h-4 text-[#66cc00]" />
                <span>Intelligence Summary &amp; Contagion Context</span>
              </div>
              {isEditing ? (
                <textarea
                  rows={3}
                  value={editForm.notes || ""}
                  onChange={(e) => setEditForm({ ...editForm, notes: e.target.value })}
                  className="w-full bg-[#000000] border border-[#6fd3c4] rounded-lg p-2 text-white text-xs focus:outline-none"
                />
              ) : (
                <p className="text-xs text-slate-300 leading-relaxed">{selectedNode.notes}</p>
              )}
            </div>
          </div>

          <div className="pt-6 border-t border-[#033653] mt-6">
            {isEditing ? (
              <button
                type="button"
                onClick={handleSaveEdit}
                className="w-full py-3 px-4 rounded-full bg-[#66cc00] text-[#000000] text-xs font-mono font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:bg-[#55b300]"
              >
                <Save className="w-4 h-4" />
                <span>Save Node Changes</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => showToast(`✓ Opening FCA audit dossier for ${selectedNode.name}...`)}
                className="w-full py-3 px-4 rounded-full bg-[#66cc00] text-[#000000] hover:bg-[#c6f5ef] font-mono font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>View Full Continuous Audit Log</span>
                <ArrowUpRight className="w-4 h-4 text-[#000000]" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
