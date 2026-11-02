"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Activity,
  Network,
  FileCheck2,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Zap,
  Globe,
  Lock,
} from "lucide-react";

export default function HeroMotionGraphicsStack() {
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);
  const [activeCycle, setActiveCycle] = useState<number>(0);

  // Auto-cycle through highlighting the 4 layers in a loop (Official Brand Palette: #000000, #66cc00, #c6f5ef, #6fd3c4, #033653)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveCycle((prev) => (prev + 1) % 4);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none h-[480px] sm:h-[540px] flex items-center justify-center select-none perspective-[1200px]">
      {/* Background ambient lighting with brand ice cyan and navy */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#c6f5ef]/50 via-[#6fd3c4]/20 to-[#033653]/10 rounded-3xl blur-3xl -z-10" />

      {/* Vertical Continuous Scanning Laser Beam in Signature KYP Brand Lime (#66cc00) */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-4/5 h-1 bg-gradient-to-r from-transparent via-[#66cc00] to-transparent shadow-[0_0_24px_rgba(102,204,0,0.9)] z-30 pointer-events-none"
        animate={{
          top: ["15%", "85%", "15%"],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Stacking Layers Container */}
      <div className="relative w-full h-full flex flex-col justify-center items-center py-6">
        
        {/* ================= LAYER 4: Instant Decision & Audit Pack (Top Layer) ================= */}
        <motion.div
          className="absolute z-20 w-[92%] sm:w-[86%] cursor-pointer"
          animate={{
            y: hoveredLayer !== null ? -110 : -75,
            scale: hoveredLayer === 4 || activeCycle === 3 ? 1.03 : 1,
            rotateX: hoveredLayer !== null ? 10 : 6,
            rotateZ: hoveredLayer !== null ? -2 : -1,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onMouseEnter={() => setHoveredLayer(4)}
          onMouseLeave={() => setHoveredLayer(null)}
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-xl border-2 border-[#66cc00]/60 shadow-2xl shadow-[#033653]/10 space-y-2.5 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#c6f5ef] text-[#033653] flex items-center justify-center font-bold">
                  <FileCheck2 className="w-4 h-4 text-[#033653]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-[#033653] uppercase font-bold">
                    Layer 04 &bull; Decision &amp; Audit
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#000000]">
                    60-Second Regulator Dossier Pack
                  </h4>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#c6f5ef] text-[#033653] border border-[#6fd3c4]/50 text-[10px] font-mono font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-[#66cc00]" />
                <span>PASS: SHA-256</span>
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400">Audit Trail</span>
                <p className="font-bold text-[#000000] mt-0.5">100% Immutable</p>
              </div>
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400">FCA Readiness</span>
                <p className="font-bold text-[#66cc00] mt-0.5">Defensible</p>
              </div>
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400">Export Time</span>
                <p className="font-bold text-[#033653] mt-0.5">&lt;60 Seconds</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= LAYER 3: WebCompli & Volumetric Surveillance ================= */}
        <motion.div
          className="absolute z-15 w-[88%] sm:w-[82%] cursor-pointer"
          animate={{
            y: hoveredLayer !== null ? -30 : -10,
            scale: hoveredLayer === 3 || activeCycle === 2 ? 1.03 : 0.98,
            rotateX: hoveredLayer !== null ? 10 : 6,
            rotateZ: hoveredLayer !== null ? 1 : 0.5,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onMouseEnter={() => setHoveredLayer(3)}
          onMouseLeave={() => setHoveredLayer(null)}
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-xl border border-[#6fd3c4]/50 shadow-xl shadow-[#033653]/10 space-y-2 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#c6f5ef] text-[#033653] flex items-center justify-center font-bold">
                  <Activity className="w-4 h-4 text-[#033653]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-[#033653] uppercase font-bold">
                    Layer 03 &bull; Continuous Monitoring
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#000000]">
                    WebCompli™ Card Scheme Radar
                  </h4>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#c6f5ef] text-[#033653] text-[10px] font-mono font-bold border border-[#6fd3c4]/50">
                Zero BRAM Fines
              </span>
            </div>

            {/* Live animated SVG Waveform bar */}
            <div className="h-6 w-full flex items-center gap-1 px-1">
              {[40, 65, 30, 85, 95, 45, 70, 50, 90, 60, 40, 75, 88, 55, 62].map((val, idx) => (
                <div
                  key={idx}
                  className="flex-1 rounded-full transition-all duration-300"
                  style={{
                    height: `${val}%`,
                    backgroundColor: idx % 3 === 0 ? "#66cc00" : idx % 2 === 0 ? "#6fd3c4" : "#033653",
                    opacity: activeCycle === 2 ? 1 : 0.65,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* ================= LAYER 2: Graph Contagion & Entity Resolution ================= */}
        <motion.div
          className="absolute z-10 w-[84%] sm:w-[78%] cursor-pointer"
          animate={{
            y: hoveredLayer !== null ? 45 : 55,
            scale: hoveredLayer === 2 || activeCycle === 1 ? 1.03 : 0.96,
            rotateX: hoveredLayer !== null ? 10 : 6,
            rotateZ: hoveredLayer !== null ? -1 : -0.5,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onMouseEnter={() => setHoveredLayer(2)}
          onMouseLeave={() => setHoveredLayer(null)}
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-white/85 backdrop-blur-xl border border-[#033653]/20 shadow-lg shadow-[#033653]/5 space-y-2 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-slate-100 text-[#033653] flex items-center justify-center font-bold">
                  <Network className="w-4 h-4 text-[#033653]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase font-bold">
                    Layer 02 &bull; Entity Resolution
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#000000]">
                    KYP Graph Contagion Engine™
                  </h4>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#033653] bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                38.5% UBO Flag
              </span>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-600 pt-1">
              <span>Parent: Apex Holdings</span>
              <span className="text-[#66cc00] font-bold">&rarr; Cross-Jurisdiction Clean</span>
            </div>
          </div>
        </motion.div>

        {/* ================= LAYER 1: Core AI Ingestion & Registry Connect (Base Layer) ================= */}
        <motion.div
          className="absolute z-5 w-[80%] sm:w-[74%] cursor-pointer"
          animate={{
            y: hoveredLayer !== null ? 115 : 120,
            scale: hoveredLayer === 1 || activeCycle === 0 ? 1.03 : 0.94,
            rotateX: hoveredLayer !== null ? 10 : 6,
            rotateZ: hoveredLayer !== null ? 1 : 0.5,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onMouseEnter={() => setHoveredLayer(1)}
          onMouseLeave={() => setHoveredLayer(null)}
        >
          <div className="p-4 rounded-2xl bg-white/75 backdrop-blur-md border border-slate-200 shadow-md space-y-1.5 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#c6f5ef] text-[#033653] flex items-center justify-center font-bold">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-[#000000]">
                  180+ Global Registries API Ingestion
                </span>
              </div>
              <span className="text-[9px] font-mono text-[#66cc00] font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#66cc00] animate-ping" />
                Live Sync
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
