"use client";

import React from "react";

interface KYPLogoProps {
  className?: string;
  theme?: "light" | "dark";
}

export default function KYPLogo({ className = "h-8 w-auto", theme = "light" }: KYPLogoProps) {
  const isDark = theme === "dark";
  
  // Official KYP Brand Colours (#000000, #66cc00, #c6f5ef, #6fd3c4, #033653)
  const brandBlack = "#000000";
  const brandLime = "#66cc00";
  const brandIce = "#c6f5ef";
  const brandTeal = "#6fd3c4";
  const brandNavy = "#033653";

  const textColor = isDark ? "#ffffff" : brandBlack;

  return (
    <svg
      viewBox="0 0 160 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="KYP Logo"
    >
      {/* Protective Shield Icon on left with brand navy & lime keyhole */}
      <g transform="translate(4, 6)">
        <path
          d="M18 2 L32 8 C32 24 18 34 18 34 C18 34 4 24 4 8 Z"
          fill={isDark ? brandNavy : brandIce}
          stroke={brandLime}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Shield checkmark / network node */}
        <circle cx="18" cy="16" r="3.5" fill={brandLime} />
        <path
          d="M12 18 L16 22 L24 14"
          fill="none"
          stroke={isDark ? "#ffffff" : brandNavy}
          strokeWidth="2.2"
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
        ky<tspan fill={brandLime}>p</tspan>
      </text>

      {/* Sentinel radar dot with teal halo */}
      <circle cx="106" cy="12" r="3" fill={brandLime} />
      <circle cx="106" cy="12" r="6" stroke={brandTeal} strokeWidth="1.2" strokeOpacity="0.7" />
    </svg>
  );
}
