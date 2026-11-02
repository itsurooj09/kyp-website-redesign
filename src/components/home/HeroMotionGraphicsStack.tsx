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

  // Auto-cycle through highlighting the 4 layers in a loop
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveCycle((prev) => (prev + 1) % 4);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none h-[480px] sm:h-[540px] flex items-center justify-center select-none perspective-[1200px]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/40 via-sky-100/30 to-blue-50/40 rounded-3xl blur-3xl -z-10" />

      {/* Vertical Continuous Scanning Laser Beam */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-4/5 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent shadow-[0_0_20px_rgba(22,163,74,0.8)] z-30 pointer-events-none"
        animate={{
          top: ["15%", "85%", "15%"],
          opacity: [0.2, 0.9, 0.2],
        }}
        transition={{
          duration: 6,
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
          <div className="p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-xl border-2 border-emerald-500/40 shadow-2xl shadow-emerald-900/10 space-y-2.5 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <FileCheck2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-emerald-700 uppercase font-bold">
                    Layer 04 &bull; Decision &amp; Audit
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    60-Second Regulator Dossier Pack
                  </h4>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>PASS: SHA-256</span>
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400">Audit Trail</span>
                <p className="font-bold text-slate-800 mt-0.5">100% Immutable</p>
              </div>
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400">FCA Readiness</span>
                <p className="font-bold text-emerald-600 mt-0.5">Defensible</p>
              </div>
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400">Export Time</span>
                <p className="font-bold text-slate-800 mt-0.5">&lt;60 Seconds</p>
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
          <div className="p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-xl border border-sky-400/40 shadow-xl shadow-sky-900/10 space-y-2 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-sky-700 uppercase font-bold">
                    Layer 03 &bull; Always-On Surveillance
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    WebCompli™ &amp; Transaction Velocity
                  </h4>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-[10px] font-mono font-bold">
                24/7/365 Stream
              </span>
            </div>

            {/* Live Waveform Indicator */}
            <div className="h-7 w-full flex items-center gap-1 px-1">
              {[40, 65, 30, 85, 45, 95, 60, 40, 75, 50, 90, 70, 35, 80, 55, 100].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-sky-500 to-emerald-400 rounded-full"
                  animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.5}%`] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: (i % 5) * 0.15 }}
                />
              ))}
            </div>
            <div className="flex justify-between text-[9px] font-mono text-slate-400 pt-1">
              <span>Mastercard BRAM: 0 Violations</span>
              <span>Visa VIRP: Pass</span>
            </div>
          </div>
        </motion.div>

        {/* ================= LAYER 2: Graph Intelligence & Contagion ================= */}
        <motion.div
          className="absolute z-10 w-[84%] sm:w-[78%] cursor-pointer"
          animate={{
            y: hoveredLayer !== null ? 50 : 55,
            scale: hoveredLayer === 2 || activeCycle === 1 ? 1.03 : 0.95,
            rotateX: hoveredLayer !== null ? 10 : 6,
            rotateZ: hoveredLayer !== null ? -1 : -0.5,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onMouseEnter={() => setHoveredLayer(2)}
          onMouseLeave={() => setHoveredLayer(null)}
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-white/85 backdrop-blur-xl border border-purple-400/40 shadow-lg shadow-purple-900/10 space-y-2 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                  <Network className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-purple-700 uppercase font-bold">
                    Layer 02 &bull; Graph Contagion
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    KYP Graph Intelligence™ &amp; UBO
                  </h4>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-[10px] font-mono font-bold">
                Multi-Tier
              </span>
            </div>

            {/* Micro network node connections */}
            <div className="flex items-center justify-around py-1 text-[9px] font-mono">
              <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-100 border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-purple-600" />
                <span>HoldCo SA (LU)</span>
              </div>
              <span className="text-slate-300">&rarr;</span>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>UBO (38.5%)</span>
              </div>
              <span className="text-slate-300">&rarr;</span>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-sky-50 border border-sky-200 text-sky-800">
                <span className="w-2 h-2 rounded-full bg-sky-600" />
                <span>Payment Entity</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= LAYER 1: 180+ Registries & OCR Data Ingestion (Base Layer) ================= */}
        <motion.div
          className="absolute z-5 w-[80%] sm:w-[74%] cursor-pointer"
          animate={{
            y: hoveredLayer !== null ? 130 : 120,
            scale: hoveredLayer === 1 || activeCycle === 0 ? 1.03 : 0.92,
            rotateX: hoveredLayer !== null ? 10 : 6,
            rotateZ: hoveredLayer !== null ? 2 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onMouseEnter={() => setHoveredLayer(1)}
          onMouseLeave={() => setHoveredLayer(null)}
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-300 shadow-md space-y-2 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase font-bold">
                    Layer 01 &bull; Ingestion Core
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    180+ Global Registries &amp; OCR Intake
                  </h4>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-mono font-bold">
                100% Traceable
              </span>
            </div>

            <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 px-1 pt-1">
              <span>Articles of Association Checked</span>
              <span className="text-emerald-600 font-bold">0 Discrepancies</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Hover Indicator Hint */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-slate-200 shadow-md text-[10px] font-mono text-slate-600 z-30">
        <Sparkles className="w-3 h-3 text-emerald-600" />
        <span>Hover or click layers to inspect architecture</span>
      </div>
    </div>
  );
}
