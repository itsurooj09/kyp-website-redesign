"use client";

import React from "react";

interface KYPLogoProps {
  className?: string;
  theme?: "light" | "dark";
}

export default function KYPLogo({ className = "h-8 w-auto", theme = "light" }: KYPLogoProps) {
  const isDark = theme === "dark";
  const textColor = isDark ? "#ffffff" : "#0f172a";
  const accentColor = "#16a34a"; // Vibrant emerald
  const glowColor = "#22c55e";

  return (
    <svg
      viewBox="0 0 160 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="KYP Logo"
    >
      {/* Protective Shield Icon on left */}
      <g transform="translate(4, 6)">
        <path
          d="M18 2 L32 8 C32 24 18 34 18 34 C18 34 4 24 4 8 Z"
          fill={isDark ? "#033653" : "#f0fdf4"}
          stroke={accentColor}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Shield checkmark / network node */}
        <circle cx="18" cy="16" r="3.5" fill={accentColor} />
        <path
          d="M12 18 L16 22 L24 14"
          fill="none"
          stroke={isDark ? "#ffffff" : "#15803d"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Modern Bold 'kyp' Typography */}
      <text
        x="44"
        y="33"
        fill={textColor}
        fontFamily="Inter, var(--font-inter), system-ui, sans-serif"
        fontWeight="900"
        fontSize="30"
        letterSpacing="-1.2px"
      >
        ky<tspan fill={accentColor}>p</tspan>
      </text>

      {/* Sentinel radar dot */}
      <circle cx="106" cy="12" r="3" fill={accentColor} />
      <circle cx="106" cy="12" r="6" stroke={glowColor} strokeWidth="1" strokeOpacity="0.4" />
    </svg>
  );
}
