"use client";

import React, { useState, useEffect, useRef } from "react";
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
  Layers,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  Building2,
  FileSearch,
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
}

const FLOW_STAGES: FlowStage[] = [
  {
    id: "onboard",
    step: "01",
    title: "Onboard",
    action: "AI Intake & Document Extraction",
    clientHeading: "Reduce Manual Due Diligence",
    clientDescription: "Questionnaires tailored to policy with instant AI validation before submission. Discrepancies flagged between documents, questionnaires, and registry records.",
    tagline: "Help partners get it right before submission. Reduce follow-ups. Accelerate onboarding.",
    icon: <UserCheck className="w-4 h-4 text-kyp-lime" />,
    dataPoints: ["Smart Questionnaires", "OCR Certificate Extraction", "Discrepancy Resolver", "Pre-Screening"],
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
  },
];

// Graph Nodes for the Animated Canvas
interface Particle {
  stageIdx: number;
  t: number; // 0 to 1 along the path
  speed: number;
  color: string;
  size: number;
}

interface CanvasNode {
  id: string;
  label: string;
  sub: string;
  category: "input" | "core" | "output";
  stage: number;
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  radius: number;
  color: string;
  risk: "compliant" | "review" | "alert" | "info";
  clientHeading?: string;
}

export default function PlatformFlow() {
  const [activeStage, setActiveStage] = useState<number>(2); // Default to Monitor (Volumetric/Webcompli)
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [selectedNode, setSelectedNode] = useState<string | null>("node-webcompli");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);

  // Define graph nodes corresponding to the client's headings & Itemize architecture
  const nodesRef = useRef<CanvasNode[]>([
    // Stage 0: Ingest
    { id: "node-questionnaires", label: "Onboarding Intake", sub: "Policy-tailored forms", category: "input", stage: 0, baseX: 0.12, baseY: 0.28, x: 0, y: 0, radius: 24, color: "#66cc00", risk: "compliant", clientHeading: "Reduce Manual Due Diligence" },
    { id: "node-ocr", label: "AI Document Validation", sub: "OCR & registry cross-check", category: "input", stage: 0, baseX: 0.12, baseY: 0.68, x: 0, y: 0, radius: 24, color: "#66cc00", risk: "compliant", clientHeading: "Reduce Manual Due Diligence" },

    // Stage 1: Verify & Structure
    { id: "node-registries", label: "Corporate Structure", sub: "180+ global registries", category: "core", stage: 1, baseX: 0.32, baseY: 0.22, x: 0, y: 0, radius: 28, color: "#6fd3c4", risk: "review", clientHeading: "Corporate Structure Changes" },
    { id: "node-ubo", label: "Beneficial Ownership", sub: "UBO unbundling graph", category: "core", stage: 1, baseX: 0.32, baseY: 0.72, x: 0, y: 0, radius: 26, color: "#c6f5ef", risk: "alert", clientHeading: "Corporate Structure Changes" },

    // Stage 2: Central Moving Core (Client Key Headings)
    { id: "node-volumetric", label: "Volumetric Monitoring", sub: "Payment velocity & spikes", category: "core", stage: 2, baseX: 0.52, baseY: 0.24, x: 0, y: 0, radius: 32, color: "#66cc00", risk: "alert", clientHeading: "Volumetric Monitoring" },
    { id: "node-webcompli", label: "Webcompli™ Scanner", sub: "Mastercard BRAM & Visa VIRP", category: "core", stage: 2, baseX: 0.52, baseY: 0.50, x: 0, y: 0, radius: 34, color: "#6fd3c4", risk: "alert", clientHeading: "Webcompli" },
    { id: "node-behavioural", label: "Merchant Shifts", sub: "Product mutations & drift", category: "core", stage: 2, baseX: 0.52, baseY: 0.76, x: 0, y: 0, radius: 30, color: "#c6f5ef", risk: "review", clientHeading: "Merchant Behavioural Shifts" },

    // Stage 3: Investigate
    { id: "node-contagion", label: "Graph Intelligence", sub: "Cross-entity risk contagion", category: "core", stage: 3, baseX: 0.72, baseY: 0.32, x: 0, y: 0, radius: 30, color: "#6fd3c4", risk: "review", clientHeading: "Customisable & Scalable" },
    { id: "node-triage", label: "Case Investigation", sub: "Unified evidence workspace", category: "core", stage: 3, baseX: 0.72, baseY: 0.68, x: 0, y: 0, radius: 26, color: "#66cc00", risk: "compliant", clientHeading: "Customisable & Scalable" },

    // Stage 4: Report / Audit
    { id: "node-audit", label: "Audit-Ready in 1 Min", sub: "Regulator dossier export", category: "output", stage: 4, baseX: 0.88, baseY: 0.35, x: 0, y: 0, radius: 28, color: "#66cc00", risk: "compliant", clientHeading: "Regulatory Compliance Made Easy" },
    { id: "node-sar", label: "SAR / STR Reporting", sub: "Automated regulatory filing", category: "output", stage: 4, baseX: 0.88, baseY: 0.65, x: 0, y: 0, radius: 24, color: "#6fd3c4", risk: "compliant", clientHeading: "Regulatory Compliance Made Easy" },
  ]);

  // Edges connecting nodes
  const edges = [
    { from: "node-questionnaires", to: "node-registries" },
    { from: "node-ocr", to: "node-ubo" },
    { from: "node-registries", to: "node-volumetric" },
    { from: "node-registries", to: "node-webcompli" },
    { from: "node-ubo", to: "node-webcompli" },
    { from: "node-ubo", to: "node-behavioural" },
    { from: "node-volumetric", to: "node-contagion" },
    { from: "node-webcompli", to: "node-contagion" },
    { from: "node-webcompli", to: "node-triage" },
    { from: "node-behavioural", to: "node-triage" },
    { from: "node-contagion", to: "node-audit" },
    { from: "node-triage", to: "node-audit" },
    { from: "node-triage", to: "node-sar" },
  ];

  // Particles moving along edges
  const particlesRef = useRef<Particle[]>(
    edges.map((e, idx) => ({
      stageIdx: idx % 5,
      t: (idx * 0.17) % 1,
      speed: 0.004 + (idx % 3) * 0.002,
      color: idx % 2 === 0 ? "#66cc00" : "#6fd3c4",
      size: 3 + (idx % 3),
    }))
  );

  // Auto-play through stages if enabled
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % FLOW_STAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Canvas render animation loop (moving graph)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 900);
    let height = (canvas.height = Math.max(480, Math.min(560, width * 0.52)));

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = Math.max(480, Math.min(560, width * 0.52));
    };

    window.addEventListener("resize", handleResize);

    let time = 0;

    const render = () => {
      time += 0.02;

      ctx.clearRect(0, 0, width, height);

      // Background subtle grid
      ctx.strokeStyle = "rgba(111, 211, 196, 0.04)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update positions with subtle floating harmonic motion (Itemize style)
      const nodes = nodesRef.current;
      nodes.forEach((node, i) => {
        const floatOffset = Math.sin(time + i * 1.3) * 6;
        const floatOffsetX = Math.cos(time * 0.8 + i * 0.9) * 4;
        node.x = node.baseX * width + floatOffsetX;
        node.y = node.baseY * height + floatOffset;
      });

      // Draw Edges with curved Bezier connections
      edges.forEach((edge) => {
        const source = nodes.find((n) => n.id === edge.from);
        const target = nodes.find((n) => n.id === edge.to);
        if (!source || !target) return;

        const isStageActive =
          source.stage === activeStage || target.stage === activeStage;

        ctx.beginPath();
        ctx.moveTo(source.x, source.y);

        const midX = (source.x + target.x) / 2;
        const cpY = (source.y + target.y) / 2 + Math.sin(time + source.stage) * 12;
        ctx.quadraticCurveTo(midX, cpY, target.x, target.y);

        ctx.strokeStyle = isStageActive
          ? "rgba(102, 204, 0, 0.55)"
          : "rgba(111, 211, 196, 0.18)";
        ctx.lineWidth = isStageActive ? 2 : 1.2;
        ctx.stroke();
      });

      // Draw Flowing Particles along edges
      const particles = particlesRef.current;
      particles.forEach((p, idx) => {
        const edge = edges[idx % edges.length];
        const source = nodes.find((n) => n.id === edge.from);
        const target = nodes.find((n) => n.id === edge.to);
        if (!source || !target) return;

        p.t += p.speed;
        if (p.t > 1) p.t = 0;

        const midX = (source.x + target.x) / 2;
        const cpY = (source.y + target.y) / 2 + Math.sin(time + source.stage) * 12;

        // Quadratic Bezier interpolation: B(t) = (1-t)^2*P0 + 2(1-t)t*P1 + t^2*P2
        const t = p.t;
        const px =
          (1 - t) * (1 - t) * source.x + 2 * (1 - t) * t * midX + t * t * target.x;
        const py =
          (1 - t) * (1 - t) * source.y + 2 * (1 - t) * t * cpY + t * t * target.y;

        // Particle Glow
        ctx.save();
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw Nodes
      nodes.forEach((node) => {
        const isCurrentStage = node.stage === activeStage;
        const isSelected = selectedNode === node.id;

        // Ambient Outer Glow for active/selected node
        if (isCurrentStage || isSelected) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + 10, 0, Math.PI * 2);
          ctx.fillStyle = isSelected
            ? "rgba(102, 204, 0, 0.22)"
            : "rgba(111, 211, 196, 0.15)";
          ctx.fill();
          ctx.restore();
        }

        // Main Node Body (Dark Navy / Black)
        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#033653";
        ctx.fill();

        // Node Border
        ctx.strokeStyle = isSelected
          ? "#66cc00"
          : isCurrentStage
          ? "#6fd3c4"
          : "rgba(111, 211, 196, 0.35)";
        ctx.lineWidth = isSelected || isCurrentStage ? 2.5 : 1.5;
        ctx.stroke();
        ctx.restore();

        // Center Pulsing Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Labels
        ctx.font = "bold 11px Inter, sans-serif";
        ctx.fillStyle = isCurrentStage || isSelected ? "#ffffff" : "#c6f5ef";
        ctx.textAlign = "center";
        ctx.fillText(node.label, node.x, node.y + node.radius + 15);

        ctx.font = "9px Inter, monospace";
        ctx.fillStyle = isCurrentStage ? "#66cc00" : "#94a3b8";
        ctx.fillText(node.sub, node.x, node.y + node.radius + 27);
      });

      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeStage, selectedNode]);

  // Click on canvas to select node
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const clicked = nodesRef.current.find((n) => {
      const dx = n.x - clickX;
      const dy = n.y - clickY;
      return Math.sqrt(dx * dx + dy * dy) <= n.radius + 8;
    });

    if (clicked) {
      setSelectedNode(clicked.id);
      setActiveStage(clicked.stage);
    }
  };

  const currentStage = FLOW_STAGES[activeStage];
  const activeNodeInfo = nodesRef.current.find((n) => n.id === selectedNode) || nodesRef.current[5];

  return (
    <div className="w-full bg-black border border-kyp-teal/20 rounded-2xl p-6 lg:p-10 relative overflow-hidden kyp-grid-pattern">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-kyp-navy/40 rounded-full blur-3xl pointer-events-none" />

      {/* Header with Client Image Key Headings */}
      <div className="max-w-4xl mb-8 relative z-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kyp-lime/10 border border-kyp-lime/30 text-xs font-mono text-kyp-lime font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          ANIMATED PLATFORM FLOW • ITEMIZE-INSPIRED GRAPH ENGINE
        </div>

        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
          Can You See Behavioural Risk Emerging Before It Becomes a Financial Issue?
        </h3>

        <p className="text-base sm:text-lg text-kyp-mint font-medium">
          Move from periodic manual reviews to continuous risk intelligence with KYP.
        </p>

        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-3xl">
          Watch real-time risk intelligence flow through the platform: from AI onboarding ingestion and corporate structure verification, to live volumetric and WebCompli™ website surveillance, graph contagion investigations, and instant audit reporting.
        </p>
      </div>

      {/* 5-Step Interactive Pipeline Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8 relative z-10">
        {FLOW_STAGES.map((st, idx) => {
          const isActive = activeStage === idx;
          return (
            <button
              key={st.id}
              onClick={() => {
                setActiveStage(idx);
                // Select a relevant node in this stage
                const stageNode = nodesRef.current.find((n) => n.stage === idx);
                if (stageNode) setSelectedNode(stageNode.id);
              }}
              className={`p-3.5 rounded-xl border text-left transition-all duration-300 relative group ${
                isActive
                  ? "bg-kyp-navy/90 border-kyp-lime shadow-lime-glow"
                  : "bg-kyp-black/80 border-kyp-teal/20 hover:border-kyp-teal/50 hover:bg-kyp-navy/30"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono text-kyp-teal tracking-widest uppercase">
                  STEP {st.step}
                </span>
                <div className="p-1 rounded bg-black/60 border border-kyp-teal/20">
                  {st.icon}
                </div>
              </div>
              <div className={`text-sm font-bold ${isActive ? "text-white" : "text-gray-300"}`}>
                {st.title}
              </div>
              <div className="text-[11px] text-gray-400 line-clamp-1 mt-0.5 font-mono">
                {st.clientHeading}
              </div>
            </button>
          );
        })}
      </div>

      {/* ANIMATED MOVING GRAPH CANVAS CONTAINER */}
      <div className="relative w-full rounded-2xl bg-gradient-to-b from-kyp-navy-surface/90 to-black/95 border border-kyp-teal/30 overflow-hidden mb-8 shadow-2xl">
        {/* Floating Controls HUD */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-kyp-teal/20 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-kyp-lime animate-ping" />
          <span className="text-white font-semibold">FLOWING GRAPH SENTINEL</span>
          <span className="text-kyp-teal border-l border-kyp-teal/25 pl-2 ml-1">STAGE: {currentStage.title.toUpperCase()}</span>
        </div>

        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-kyp-teal/25 text-xs font-mono text-kyp-mint hover:border-kyp-lime transition-all"
            title={isPlaying ? "Pause automatic stage cycling" : "Resume automatic stage cycling"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-kyp-lime" />
                <span>Auto-Cycling</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-kyp-mint" />
                <span>Paused</span>
              </>
            )}
          </button>
        </div>

        {/* HTML5 Canvas for Moving Graph */}
        <canvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          className="w-full h-[480px] lg:h-[540px] cursor-pointer block"
        />

        {/* Interactive Bottom Overlay Pill */}
        <div className="absolute bottom-3 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 bg-black/85 backdrop-blur-md p-3 rounded-xl border border-kyp-teal/20 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-kyp-teal">Selected Node:</span>
            <span className="text-white font-bold">{activeNodeInfo.label}</span>
            <span className="text-gray-400">({activeNodeInfo.sub})</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-kyp-lime font-semibold">
              Client Focus: {activeNodeInfo.clientHeading || "Continuous Monitoring"}
            </span>
            <span className="hidden sm:inline text-gray-500">Click any node to focus</span>
          </div>
        </div>
      </div>

      {/* 4 Official Client Key Feature Cards (Volumetric, Webcompli, Corporate Structure, Behavioural Shifts) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-black/70 border border-kyp-teal/20 hover:border-kyp-lime/40 transition-all space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-kyp-teal uppercase">CLIENT FEATURE 01</span>
            <TrendingUp className="w-4 h-4 text-kyp-lime" />
          </div>
          <h4 className="text-base font-bold text-white">Volumetric Monitoring</h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            Spot unusual transaction velocity spikes, round-number structuring, and abnormal settlement volume before settlement.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-black/70 border border-kyp-teal/20 hover:border-kyp-lime/40 transition-all space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-kyp-teal uppercase">CLIENT FEATURE 02</span>
            <Globe className="w-4 h-4 text-kyp-teal" />
          </div>
          <h4 className="text-base font-bold text-white">Webcompli™</h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            Automated crawler screening merchant terms, prohibited items, Mastercard BRAM & Visa VIRP violations, and ghost sites.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-black/70 border border-kyp-teal/20 hover:border-kyp-lime/40 transition-all space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-kyp-teal uppercase">CLIENT FEATURE 03</span>
            <Building2 className="w-4 h-4 text-kyp-mint" />
          </div>
          <h4 className="text-base font-bold text-white">Corporate Structure Changes</h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            Real-time alerts when partner companies file director mutations, shareholding shifts, or registered office relocations.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-black/70 border border-kyp-teal/20 hover:border-kyp-lime/40 transition-all space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-kyp-teal uppercase">CLIENT FEATURE 04</span>
            <AlertTriangle className="w-4 h-4 text-kyp-lime" />
          </div>
          <h4 className="text-base font-bold text-white">Merchant Behavioural Shifts</h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            Detect subtle drifts in product lines, unauthorized MCC activity, and hidden cross-border customer exposure.
          </p>
        </div>
      </div>
    </div>
  );
}
