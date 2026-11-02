"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BrandOrbHeroStage() {
  return (
    <div className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex items-center justify-center select-none overflow-visible">
      {/* Ambient background glow layers */}
      <div
        className="absolute w-[520px] h-[520px] sm:w-[650px] sm:h-[650px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 48% 46%, rgba(198,245,239,0.45) 0%, rgba(111,211,196,0.18) 35%, rgba(3,54,83,0.04) 60%, transparent 72%)",
          filter: "blur(20px)",
        }}
      />

      {/* Outer concentric subtle edge rings */}
      <div
        className="absolute w-[460px] h-[460px] sm:w-[580px] sm:h-[580px] rounded-full pointer-events-none border border-slate-200/60 shadow-[0_0_0_40px_rgba(198,245,239,0.12),0_0_0_80px_rgba(111,211,196,0.06)]"
      />

      {/* 3D Orb Stage Container */}
      <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] lg:w-[480px] lg:h-[480px] flex items-center justify-center">
        
        {/* Outer Orbital Ring 1 (Rotates with breathing animation) */}
        <div
          className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] lg:w-[510px] lg:h-[510px] rounded-full border border-kyp-teal/40 pointer-events-none animate-spin"
          style={{
            animationDuration: "28s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            boxShadow: "0 0 35px rgba(111,211,196,0.15)",
          }}
        >
          {/* Orbital Satellite Node on Ring 1 */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-kyp-lime border-2 border-white shadow-[0_0_12px_rgba(102,204,0,0.8)]" />
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-kyp-teal border border-white shadow-[0_0_8px_rgba(111,211,196,0.8)]" />
        </div>

        {/* Outer Orbital Ring 2 (Counter-rotates) */}
        <div
          className="absolute w-[310px] h-[310px] sm:w-[390px] sm:h-[390px] lg:w-[430px] lg:h-[430px] rounded-full border border-dashed border-kyp-teal/30 pointer-events-none animate-spin"
          style={{
            animationDuration: "20s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDirection: "reverse",
          }}
        >
          {/* Orbital Satellite Node on Ring 2 */}
          <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-kyp-lime border-2 border-white shadow-[0_0_10px_rgba(102,204,0,0.9)]" />
        </div>

        {/* The Central Iconic 3D Sphere (Platform Core) */}
        <div
          className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[340px] lg:h-[340px] rounded-full flex flex-col items-center justify-center text-white transition-transform duration-500 hover:scale-[1.02] cursor-pointer shadow-2xl"
          style={{
            background:
              "radial-gradient(circle at 46% 38%, #0d4e75 0%, #083c5e 28%, #033653 58%, #02253a 82%, #011624 100%)",
            boxShadow:
              "0 28px 60px rgba(3,54,83,0.35), 0 0 0 1px rgba(255,255,255,0.18), inset 0 3px 0 rgba(255,255,255,0.25), inset 0 -24px 36px rgba(0,0,0,0.45), 0 0 40px rgba(111,211,196,0.2)",
          }}
        >
          {/* Specular Ambient Glow inside Core */}
          <div
            className="absolute inset-4 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 45% 36%, rgba(198,245,239,0.35), rgba(111,211,196,0.12) 36%, transparent 68%)",
            }}
          />

          {/* Concentric Inner Glass Ring A */}
          <div className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[250px] lg:h-[250px] rounded-full border border-kyp-mint/20 pointer-events-none animate-pulse" />

          {/* Concentric Inner Glass Ring B */}
          <div className="absolute w-[210px] h-[210px] sm:w-[260px] sm:h-[260px] lg:w-[295px] lg:h-[295px] rounded-full border border-kyp-teal/15 pointer-events-none" />

          {/* 7 Orbiting Core Particles */}
          {[
            { id: 1, duration: 4.8, distance: 95, color: "#66cc00", size: 5 },
            { id: 2, duration: 6.2, distance: 110, color: "#c6f5ef", size: 4 },
            { id: 3, duration: 5.4, distance: 125, color: "#6fd3c4", size: 4.5 },
            { id: 4, duration: 7.1, distance: 100, color: "#66cc00", size: 4 },
            { id: 5, duration: 5.9, distance: 135, color: "#ffffff", size: 3.5 },
            { id: 6, duration: 8.0, distance: 115, color: "#66cc00", size: 4.5 },
            { id: 7, duration: 6.6, distance: 140, color: "#6fd3c4", size: 4 },
          ].map((p, idx) => (
            <div
              key={p.id}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{
                animation: `spin 10s linear infinite`,
                animationDuration: `${p.duration}s`,
                animationDirection: idx % 2 === 0 ? "normal" : "reverse",
              }}
            >
              <div
                className="rounded-full shadow-md"
                style={{
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  backgroundColor: p.color,
                  transform: `translateX(${p.distance}px)`,
                  boxShadow: `0 0 10px ${p.color}`,
                }}
              />
            </div>
          ))}

          {/* Center Platform Core Label matching itemize style with KYP brand identity */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center font-heading leading-tight tracking-tight px-4 pointer-events-none">
            {/* Top Brand Name with padlock accent */}
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-wider drop-shadow-md">
                KYP
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-kyp-lime animate-ping shadow-[0_0_8px_#66cc00]" />
            </div>

            {/* Sub-label rows identical to Itemize layout */}
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white/95 drop-shadow">
              AI
            </span>
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-kyp-mint drop-shadow">
              Risk &amp;
            </span>
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white/95 drop-shadow">
              Compliance
            </span>

            {/* Bottom mini status badge */}
            <div className="mt-3 px-2.5 py-0.5 rounded-full bg-black/40 border border-kyp-teal/30 text-[10px] font-mono text-kyp-lime flex items-center gap-1.5 backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-kyp-lime animate-pulse" />
              <span>LIVE SENTINEL CORE</span>
            </div>
          </div>
        </div>

        {/* Floating Contextual Telemetry Chips around the Orb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute -top-3 -left-4 sm:-left-8 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-200/50 flex items-center gap-2.5 z-20 pointer-events-none"
        >
          <div className="w-2 h-2 rounded-full bg-kyp-lime animate-pulse" />
          <div className="text-left">
            <div className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Graph Contagion</div>
            <div className="text-xs font-bold text-slate-900 font-mono">180+ Registries Synced</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute -bottom-3 -right-4 sm:-right-8 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-200/50 flex items-center gap-2.5 z-20 pointer-events-none"
        >
          <div className="w-2 h-2 rounded-full bg-kyp-lime animate-ping" />
          <div className="text-left">
            <div className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Autonomous SLA</div>
            <div className="text-xs font-bold text-slate-900 font-mono">&lt; 30s Decision SLA</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-6 -left-6 sm:-left-12 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md border border-kyp-teal/30 shadow-md text-left z-20 pointer-events-none hidden sm:block"
        >
          <div className="text-[9px] font-mono text-kyp-navy font-bold uppercase">WebCompli™ Radar</div>
          <div className="text-[11px] font-mono text-kyp-lime font-bold">0 Scheme Fines</div>
        </motion.div>
      </div>
    </div>
  );
}
