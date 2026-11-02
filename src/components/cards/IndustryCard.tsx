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
      className="group block p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-500/60 transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-md"
    >
      <div className="relative z-10 space-y-4">
        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-all">
          {renderIcon(industry.icon)}
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
            {industry.name}
          </h3>
          <p className="text-xs text-emerald-700 font-mono mt-1 font-semibold">
            {industry.tagline}
          </p>
        </div>

        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
          {industry.shortDescription}
        </p>

        {/* Industry Metrics Pill */}
        <div className="pt-2 flex flex-wrap gap-2">
          {industry.metrics.map((m, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-700 font-medium"
            >
              {m.label}: <strong className="text-emerald-700 font-bold">{m.value}</strong>
            </span>
          ))}
        </div>

        <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-700 group-hover:text-emerald-800 transition-colors">
          <span>Explore sector solution</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
