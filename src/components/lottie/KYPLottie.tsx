"use client";

import React from "react";
import { motion } from "framer-motion";

export type LottieAnimationType =
  | "heroRadar"
  | "securityShield"
  | "docScanner"
  | "dataSynapse"
  | "continuousPulse"
  | "auditSeal";

interface KYPLottieProps {
  type: LottieAnimationType;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export default function KYPLottie({
  type,
  className = "w-full h-full",
}: KYPLottieProps) {
  switch (type) {
    case "heroRadar":
      return (
        <div className={`relative flex items-center justify-center overflow-hidden ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full max-w-full max-h-full">
            <defs>
              <linearGradient id="radar-sweep-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#66cc00" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#6fd3c4" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#033653" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Concentric rings */}
            <circle cx="50" cy="50" r="45" fill="none" stroke="#6fd3c4" strokeOpacity="0.25" strokeWidth="0.8" />
            <circle cx="50" cy="50" r="32" fill="none" stroke="#6fd3c4" strokeOpacity="0.35" strokeWidth="0.8" />
            <circle cx="50" cy="50" r="18" fill="none" stroke="#6fd3c4" strokeOpacity="0.45" strokeWidth="0.8" />
            {/* Crosshairs */}
            <line x1="5" y1="50" x2="95" y2="50" stroke="#6fd3c4" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="50" y1="5" x2="50" y2="95" stroke="#6fd3c4" strokeOpacity="0.25" strokeWidth="0.8" />
            {/* Rotating Sweep Beam */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              style={{ originX: "50px", originY: "50px" }}
            >
              <path d="M50 50 L50 5 A45 45 0 0 1 88 28 Z" fill="url(#radar-sweep-grad)" />
              <line x1="50" y1="50" x2="50" y2="5" stroke="#66cc00" strokeWidth="1.5" strokeLinecap="round" />
            </motion.g>
            {/* Detected Blips */}
            <motion.circle
              cx="72"
              cy="34"
              r="2.5"
              fill="#66cc00"
              animate={{ opacity: [0, 1, 0.2, 0], scale: [0.8, 1.4, 1, 0.8] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.8 }}
            />
            <motion.circle
              cx="32"
              cy="68"
              r="2"
              fill="#c6f5ef"
              animate={{ opacity: [0, 1, 0.3, 0], scale: [0.8, 1.3, 1, 0.8] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 2.2 }}
            />
            {/* Center Pulse Core */}
            <circle cx="50" cy="50" r="3.5" fill="#66cc00" />
            <circle cx="50" cy="50" r="1.5" fill="#ffffff" />
          </svg>
        </div>
      );

    case "securityShield":
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 120 120" className="w-full h-full max-w-full max-h-full">
            <defs>
              <linearGradient id="shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6fd3c4" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#033653" stopOpacity="0.9" />
              </linearGradient>
              <filter id="shield-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="glow" />
                <feComposite in="SourceGraphic" in2="glow" operator="over" />
              </filter>
            </defs>
            {/* Outer pulsating energy ring */}
            <motion.circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="#66cc00"
              strokeWidth="1"
              strokeDasharray="4 4"
              animate={{ rotate: 360, opacity: [0.3, 0.7, 0.3] }}
              transition={{ rotate: { duration: 12, repeat: Infinity, ease: "linear" }, opacity: { duration: 3, repeat: Infinity } }}
              style={{ originX: "60px", originY: "60px" }}
            />
            {/* Shield outline */}
            <motion.path
              d="M60 18 L92 32 C92 72 60 98 60 98 C60 98 28 72 28 32 Z"
              fill="url(#shield-grad)"
              stroke="#6fd3c4"
              strokeWidth="2.5"
              filter="url(#shield-glow)"
              animate={{ stroke: ["#6fd3c4", "#66cc00", "#6fd3c4"] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            {/* Inner checkmark / keyhole icon */}
            <motion.path
              d="M48 58 L56 66 L74 46"
              fill="none"
              stroke="#66cc00"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ pathLength: [0, 1, 1], opacity: [0.5, 1, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
            />
          </svg>
        </div>
      );

    case "docScanner":
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 120 120" className="w-full h-full max-w-full max-h-full">
            <defs>
              <linearGradient id="scan-beam-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#66cc00" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#66cc00" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Document sheet */}
            <rect x="25" y="16" width="70" height="88" rx="6" fill="#033653" fillOpacity="0.85" stroke="#6fd3c4" strokeWidth="1.5" />
            {/* Text lines */}
            <rect x="36" y="30" width="34" height="4" rx="2" fill="#66cc00" />
            <rect x="36" y="42" width="48" height="3" rx="1.5" fill="#6fd3c4" fillOpacity="0.6" />
            <rect x="36" y="52" width="42" height="3" rx="1.5" fill="#6fd3c4" fillOpacity="0.6" />
            <rect x="36" y="62" width="46" height="3" rx="1.5" fill="#6fd3c4" fillOpacity="0.6" />
            <rect x="36" y="72" width="30" height="3" rx="1.5" fill="#6fd3c4" fillOpacity="0.6" />
            {/* Pass badge in corner */}
            <rect x="64" y="28" width="22" height="10" rx="3" fill="#66cc00" fillOpacity="0.2" stroke="#66cc00" strokeWidth="0.8" />
            <text x="75" y="35.5" fill="#66cc00" fontSize="6" fontWeight="bold" fontFamily="monospace" textAnchor="middle">PASS</text>
            {/* Moving Laser Scanner Line */}
            <motion.g
              animate={{ y: [0, 64, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <rect x="22" y="22" width="76" height="12" fill="url(#scan-beam-grad)" opacity="0.35" />
              <line x1="22" y1="22" x2="98" y2="22" stroke="#66cc00" strokeWidth="2" strokeLinecap="round" />
            </motion.g>
          </svg>
        </div>
      );

    case "dataSynapse":
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 160 160" className="w-full h-full max-w-full max-h-full">
            <defs>
              <radialGradient id="synapse-center" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#66cc00" />
                <stop offset="100%" stopColor="#033653" />
              </radialGradient>
            </defs>
            {/* Background constellation circles */}
            <circle cx="80" cy="80" r="60" fill="none" stroke="#6fd3c4" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="80" cy="80" r="38" fill="none" stroke="#6fd3c4" strokeOpacity="0.25" strokeWidth="1" />

            {/* Connecting arcs to peripheral nodes */}
            <g stroke="#6fd3c4" strokeOpacity="0.4" strokeWidth="1.2">
              <line x1="80" y1="80" x2="30" y2="40" />
              <line x1="80" y1="80" x2="130" y2="40" />
              <line x1="80" y1="80" x2="140" y2="105" />
              <line x1="80" y1="80" x2="80" y2="140" />
              <line x1="80" y1="80" x2="25" y2="115" />
            </g>

            {/* Moving synaptic energy pulses along lines */}
            <motion.circle
              r="3"
              fill="#66cc00"
              animate={{ cx: [80, 30, 80], cy: [80, 40, 80] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              r="3.5"
              fill="#c6f5ef"
              animate={{ cx: [80, 130, 80], cy: [80, 40, 80] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.circle
              r="3"
              fill="#66cc00"
              animate={{ cx: [80, 140, 80], cy: [80, 105, 80] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            />
            <motion.circle
              r="3"
              fill="#6fd3c4"
              animate={{ cx: [80, 80, 80], cy: [80, 140, 80] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.circle
              r="2.5"
              fill="#c6f5ef"
              animate={{ cx: [80, 25, 80], cy: [80, 115, 80] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Peripheral Nodes */}
            <circle cx="30" cy="40" r="7" fill="#033653" stroke="#6fd3c4" strokeWidth="1.5" />
            <circle cx="30" cy="40" r="3" fill="#66cc00" />

            <circle cx="130" cy="40" r="7" fill="#033653" stroke="#6fd3c4" strokeWidth="1.5" />
            <circle cx="130" cy="40" r="3" fill="#c6f5ef" />

            <circle cx="140" cy="105" r="7" fill="#033653" stroke="#66cc00" strokeWidth="1.5" />
            <circle cx="140" cy="105" r="3" fill="#66cc00" />

            <circle cx="80" cy="140" r="7" fill="#033653" stroke="#6fd3c4" strokeWidth="1.5" />
            <circle cx="80" cy="140" r="3" fill="#6fd3c4" />

            <circle cx="25" cy="115" r="7" fill="#033653" stroke="#6fd3c4" strokeWidth="1.5" />
            <circle cx="25" cy="115" r="3" fill="#c6f5ef" />

            {/* Central Intelligence Core with Pulse */}
            <motion.circle
              cx="80"
              cy="80"
              r="22"
              fill="#66cc00"
              fillOpacity="0.2"
              animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              style={{ originX: "80px", originY: "80px" }}
            />
            <circle cx="80" cy="80" r="14" fill="#033653" stroke="#66cc00" strokeWidth="2.5" />
            <circle cx="80" cy="80" r="6" fill="#66cc00" />
            <circle cx="80" cy="80" r="2.5" fill="#ffffff" />
          </svg>
        </div>
      );

    case "continuousPulse":
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 120 120" className="w-full h-full max-w-full max-h-full">
            {/* Expanding pulse wave 1 */}
            <motion.circle
              cx="60"
              cy="60"
              r="20"
              fill="none"
              stroke="#66cc00"
              strokeWidth="1.5"
              animate={{ r: [15, 52], opacity: [0.9, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
            />
            {/* Expanding pulse wave 2 */}
            <motion.circle
              cx="60"
              cy="60"
              r="20"
              fill="none"
              stroke="#6fd3c4"
              strokeWidth="1.5"
              animate={{ r: [15, 52], opacity: [0.9, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
            />
            {/* Expanding pulse wave 3 */}
            <motion.circle
              cx="60"
              cy="60"
              r="20"
              fill="none"
              stroke="#c6f5ef"
              strokeWidth="1"
              animate={{ r: [15, 52], opacity: [0.9, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 1.6 }}
            />
            {/* Rotating satellite dot */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ originX: "60px", originY: "60px" }}
            >
              <circle cx="60" cy="24" r="3.5" fill="#66cc00" />
            </motion.g>
            {/* Center Core */}
            <circle cx="60" cy="60" r="10" fill="#033653" stroke="#66cc00" strokeWidth="2" />
            <circle cx="60" cy="60" r="4" fill="#66cc00" />
          </svg>
        </div>
      );

    case "auditSeal":
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 120 120" className="w-full h-full max-w-full max-h-full">
            {/* Rotating cryptographic gear teeth */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              style={{ originX: "60px", originY: "60px" }}
            >
              <circle cx="60" cy="60" r="48" fill="none" stroke="#6fd3c4" strokeWidth="1.5" strokeDasharray="6 4" />
              <circle cx="60" cy="60" r="42" fill="none" stroke="#66cc00" strokeWidth="1" strokeDasharray="2 3" />
            </motion.g>
            {/* Hexagonal inner badge */}
            <polygon
              points="60,24 88,40 88,72 60,88 32,72 32,40"
              fill="#033653"
              stroke="#66cc00"
              strokeWidth="2"
            />
            {/* Center Verified Check & Shield */}
            <motion.path
              d="M48 56 L56 64 L72 46"
              fill="none"
              stroke="#66cc00"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ pathLength: [0, 1, 1], opacity: [0.6, 1, 0.9] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
            />
            {/* Micro audit ticks */}
            <text x="60" y="78" fill="#c6f5ef" fontSize="5.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
              SHA-256
            </text>
          </svg>
        </div>
      );

    default:
      return null;
  }
}
