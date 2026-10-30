"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Gamepad2, CreditCard, Network, Building2, Zap, ShoppingBag } from "lucide-react";
import { IndustryItem } from "@/data/industries";

const renderIcon = (name: string) => {
  switch (name) {
    case "Gamepad2": return <Gamepad2 className="w-6 h-6 text-kyp-lime" />;
    case "CreditCard": return <CreditCard className="w-6 h-6 text-kyp-teal" />;
    case "Network": return <Network className="w-6 h-6 text-kyp-mint" />;
    case "Building2": return <Building2 className="w-6 h-6 text-kyp-lime" />;
    case "Zap": return <Zap className="w-6 h-6 text-kyp-teal" />;
    case "ShoppingBag": return <ShoppingBag className="w-6 h-6 text-kyp-mint" />;
    default: return <Building2 className="w-6 h-6 text-kyp-lime" />;
  }
};

export default function IndustryCard({ industry }: { industry: IndustryItem }) {
  return (
    <Link
      href={industry.href}
      className="group block p-6 sm:p-7 rounded-2xl bg-kyp-navy-surface/80 border border-kyp-teal/20 hover:border-kyp-lime/50 hover:bg-kyp-navy/60 transition-all duration-300 relative overflow-hidden"
    >
      {/* Background glow on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-kyp-teal/10 rounded-full blur-2xl group-hover:bg-kyp-lime/15 transition-colors pointer-events-none" />

      <div className="relative z-10 space-y-4">
        <div className="w-12 h-12 rounded-xl bg-black/60 border border-kyp-teal/30 flex items-center justify-center group-hover:scale-105 group-hover:border-kyp-lime/50 transition-all">
          {renderIcon(industry.icon)}
        </div>

        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-kyp-mint transition-colors">
            {industry.name}
          </h3>
          <p className="text-xs text-kyp-teal/90 font-mono mt-1">
            {industry.tagline}
          </p>
        </div>

        <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
          {industry.shortDescription}
        </p>

        {/* Industry Metrics Pill */}
        <div className="pt-2 flex flex-wrap gap-2">
          {industry.metrics.map((m, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded bg-black/50 border border-kyp-teal/15 text-[10px] font-mono text-gray-300"
            >
              {m.label}: <strong className="text-kyp-lime">{m.value}</strong>
            </span>
          ))}
        </div>

        <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-kyp-teal group-hover:text-kyp-lime transition-colors">
          <span>Explore sector solution</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
