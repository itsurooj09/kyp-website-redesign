"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamic import of named export Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react").then((mod) => mod.Lottie as any), {
  ssr: false,
}) as React.ComponentType<any>;

import heroRadar from "./data/hero_radar.json";
import securityShield from "./data/security_shield.json";
import docScanner from "./data/doc_scanner.json";
import dataSynapse from "./data/data_synapse.json";
import continuousPulse from "./data/continuous_pulse.json";
import auditSeal from "./data/audit_seal.json";

export type LottieAnimationType =
  | "heroRadar"
  | "securityShield"
  | "docScanner"
  | "dataSynapse"
  | "continuousPulse"
  | "auditSeal";

const ANIMATION_MAP: Record<LottieAnimationType, any> = {
  heroRadar,
  securityShield,
  docScanner,
  dataSynapse,
  continuousPulse,
  auditSeal,
};

interface KYPLottieProps {
  type: LottieAnimationType;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export default function KYPLottie({
  type,
  className = "w-full h-full",
  loop = true,
  autoplay = true,
}: KYPLottieProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={`flex items-center justify-center ${className}`} />;
  }

  const animationData = ANIMATION_MAP[type] || heroRadar;

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Lottie
        animationData={animationData}
        loop={loop}
        autoPlay={autoplay}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
