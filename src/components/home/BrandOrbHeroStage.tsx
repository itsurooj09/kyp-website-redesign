"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BrandOrbHeroStage() {
  const [secondsAgo, setSecondsAgo] = useState(2);

  // Live seconds ticker on alert card
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsAgo((s) => (s >= 15 ? 1 : s + 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full flex items-center justify-center py-6 lg:py-10 select-none overflow-visible">
      {/* ----------------- EXPANSIVE AMBIENT GLOW BACKDROP ----------------- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[620px] h-[620px] sm:w-[750px] sm:h-[750px] lg:w-[860px] lg:h-[860px] rounded-full pointer-events-none animate-pulse-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(102, 204, 0, 0.16) 0%, rgba(3, 54, 83, 0.08) 45%, transparent 75%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* ----------------- LARGE ORBIT STAGE CONTAINER ----------------- */}
      <div className="relative w-[420px] h-[420px] sm:w-[540px] sm:h-[540px] lg:w-[680px] lg:h-[680px] flex items-center justify-center">

        {/* ----------------- ORBIT RING 1 (INNER): WITH SATELLITE 1 ----------------- */}
        <div
          className="animate-orbit-cw-fast absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] lg:w-[540px] lg:h-[540px] rounded-full border border-[#66cc00]/50 pointer-events-none"
        >
          {/* Satellite 1: Fast Vibrant Lime Green Orb with Pulsing Halo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-5 h-5 rounded-full bg-[#66cc00]/30 flex items-center justify-center animate-ping absolute" />
            <div className="w-4 h-4 rounded-full bg-[#66cc00] border-2 border-white shadow-[0_0_14px_#66cc00]" />
          </div>
        </div>

        {/* ----------------- ORBIT RING 2 (MIDDLE DASHED): WITH SATELLITE 2 & SATELLITE 3 ----------------- */}
        <div
          className="animate-orbit-ccw-mid absolute w-[420px] h-[420px] sm:w-[530px] sm:h-[530px] lg:w-[630px] lg:h-[630px] rounded-full border border-dashed border-[#66cc00]/50 pointer-events-none"
        >
          {/* Satellite 2: Fast Turquoise Teal Glowing Node */}
          <div className="absolute top-[28%] right-[2%] -translate-y-1/2">
            <div className="w-5 h-5 rounded-full bg-[#66cc00]/20 flex items-center justify-center animate-ping absolute" />
            <div className="w-4 h-4 rounded-full bg-[#66cc00] border-2 border-white shadow-[0_0_14px_#66cc00]" />
          </div>

          {/* Satellite 3: Fast Lime Glowing Satellite on Opposite Side (180 deg offset) */}
          <div className="absolute bottom-[28%] left-[2%] translate-y-1/2">
            <div className="w-4.5 h-4.5 rounded-full bg-[#66cc00]/30 flex items-center justify-center animate-ping absolute" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#000000] border-2 border-[#66cc00] shadow-[0_0_12px_#66cc00]" />
          </div>
        </div>

        {/* ----------------- ORBIT RING 3 (OUTER DOTTED): WITH SATELLITE 4 ----------------- */}
        <div
          className="animate-orbit-cw-slow absolute w-[470px] h-[470px] sm:w-[600px] sm:h-[600px] lg:w-[720px] lg:h-[720px] rounded-full border border-dotted border-slate-300/80 pointer-events-none"
        >
          {/* Satellite 4: Fast Dark Sentinel Core with Glowing Lime Ring */}
          <div className="absolute bottom-[14%] right-[22%] translate-x-1/2">
            <div className="w-6 h-6 rounded-full border-2 border-[#66cc00] flex items-center justify-center bg-white shadow-[0_0_10px_rgba(102,204,0,0.6)]">
              <span className="w-3 h-3 rounded-full bg-[#000000]" />
            </div>
          </div>
        </div>

        {/* ----------------- THE BOLDER, LARGER 3D GREEN GLOSSY SPHERE ----------------- */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-20 w-[270px] h-[270px] sm:w-[340px] sm:h-[340px] lg:w-[390px] lg:h-[390px] rounded-full flex flex-col items-center justify-center text-white cursor-pointer group shadow-2xl shrink-0"
          style={{
            maxWidth: "390px",
            maxHeight: "390px",
            aspectRatio: "1 / 1",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 44% 30%, #82e800 0%, #66cc00 24%, #429500 52%, #1e5000 78%, #092000 100%)",
            boxShadow:
              "0 35px 80px -10px rgba(102, 204, 0, 0.5), 0 16px 36px rgba(3, 54, 83, 0.3), inset 0 10px 20px rgba(255, 255, 255, 0.55), inset 0 -24px 32px rgba(0, 0, 0, 0.7)",
          }}
        >
          {/* High-gloss top-left glass reflection */}
          <div
            className="absolute top-4 left-8 sm:top-6 sm:left-12 w-28 sm:w-36 h-14 sm:h-18 rounded-full pointer-events-none opacity-70 transform -rotate-25"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.05) 100%)",
              filter: "blur(4px)",
            }}
          />

          {/* Continuous Radar Scan Line across Sphere Face */}
          <div
            className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
            style={{ borderRadius: "50%" }}
          >
            <div
              className="w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              style={{
                animation: "radar-sweep 3.2s ease-in-out infinite alternate",
              }}
            />
          </div>

          {/* Central Sphere Typography: EXACT MATCH TO USER IMAGE */}
          <div className="relative z-10 text-center px-4 space-y-1.5 flex flex-col items-center justify-center">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.28em] text-white/90 uppercase drop-shadow-md">
              KYP
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight font-heading drop-shadow-lg">
              AI Agents
              <br />
              Continuous
              <br />
              Compliance
            </h2>
          </div>
        </motion.div>

        {/* ----------------- 6 SURROUNDING SATELLITE PILLS ----------------- */}
        
        {/* 1. Top-Left Pill: PEPs & Sanctions */}
        <motion.div
          animate={{ y: [0, -8, 0], x: [0, 2, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[8%] left-[10%] sm:top-[9%] sm:left-[14%] z-30 flex items-center gap-2.5 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl text-xs sm:text-sm font-bold text-slate-900 transition-transform hover:scale-105"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#66cc00] shadow-[0_0_8px_#66cc00]" />
          <span>PEPs &amp; Sanctions</span>
        </motion.div>

        {/* 2. Top-Right Pill: WebCompli */}
        <motion.div
          animate={{ y: [0, -9, 0], x: [0, -3, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="absolute top-[6%] right-[10%] sm:top-[7%] sm:right-[14%] z-30 flex items-center gap-2.5 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl text-xs sm:text-sm font-bold text-slate-900 transition-transform hover:scale-105"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#66cc00] shadow-[0_0_8px_#66cc00]" />
          <span>WebCompli</span>
        </motion.div>

        {/* 3. Middle-Left Pill: Directors & UBOs */}
        <motion.div
          animate={{ y: [0, -8, 0], x: [0, 3, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute top-[44%] -left-[6%] sm:-left-[4%] z-30 flex items-center gap-2.5 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl text-xs sm:text-sm font-bold text-slate-900 transition-transform hover:scale-105"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#66cc00] shadow-[0_0_8px_#66cc00]" />
          <span>Directors &amp; UBOs</span>
        </motion.div>

        {/* 4. Middle-Right Pill: Transactions */}
        <motion.div
          animate={{ y: [0, -7, 0], x: [0, -2, 0] }}
          transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute top-[38%] -right-[6%] sm:-right-[4%] z-30 flex items-center gap-2.5 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl text-xs sm:text-sm font-bold text-slate-900 transition-transform hover:scale-105"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#66cc00] shadow-[0_0_8px_#66cc00]" />
          <span>Transactions</span>
        </motion.div>

        {/* 5. Bottom-Left Pill: Adverse Media (Red Dot) */}
        <motion.div
          animate={{ y: [0, -6, 0], x: [0, 2, 0] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="absolute bottom-[24%] left-[0%] sm:bottom-[26%] sm:left-[2%] z-30 flex items-center gap-2.5 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl text-xs sm:text-sm font-bold text-slate-900 transition-transform hover:scale-105"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] shadow-[0_0_8px_#ef4444]" />
          <span>Adverse Media</span>
        </motion.div>

        {/* 6. Lower-Left Pill: ESG / FATF (Safely on the left) */}
        <motion.div
          animate={{ y: [0, -8, 0], x: [0, 3, 0] }}
          transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[8%] left-[8%] sm:bottom-[10%] sm:left-[12%] z-30 flex items-center gap-2.5 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl text-xs sm:text-sm font-bold text-slate-900 transition-transform hover:scale-105"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#66cc00] shadow-[0_0_8px_#66cc00]" />
          <span>ESG / FATF</span>
        </motion.div>

        {/* 7. Bottom-Right Alert Card (Safely separated on right with zero overlap) */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          className="absolute -bottom-2 right-[-14px] sm:bottom-[2%] sm:right-[0%] z-40 bg-[#000000] text-white p-4.5 sm:p-5 rounded-2xl border border-[#033653] shadow-[0_22px_50px_rgba(0,0,0,0.6)] max-w-[270px] sm:max-w-[300px] text-left transition-all hover:scale-102"
        >
          <div className="flex items-start gap-3">
            {/* Red pulsing indicator dot */}
            <div className="relative mt-1 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] block shadow-[0_0_8px_#ef4444]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] animate-ping absolute inset-0 opacity-75" />
            </div>

            <div className="space-y-1">
              <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                Director added to sanctions list
              </h4>
              <p className="text-[11px] text-slate-400 font-mono">
                Merchant risk recalculated 41 &rarr; 78
              </p>
              <p className="text-[10px] text-slate-500 font-mono">
                {secondsAgo}s ago
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
