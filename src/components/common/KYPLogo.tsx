"use client";

import React from "react";
import Image from "next/image";

interface KYPLogoProps {
  className?: string;
  theme?: "light" | "dark";
}

export default function KYPLogo({ className = "h-8 w-auto", theme = "light" }: KYPLogoProps) {
  const isDark = theme === "dark";

  return (
    <div className={`inline-flex items-center select-none relative ${className}`}>
      <Image
        src={isDark ? "/images/kyp-official-logo-white.png" : "/images/kyp-official-logo.png"}
        alt="KYP • Know Your Partner"
        width={171}
        height={51}
        priority
        className="h-full w-auto object-contain"
      />
    </div>
  );
}
