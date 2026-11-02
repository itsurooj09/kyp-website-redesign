"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, UserCheck, ShieldAlert, CreditCard, Sliders, Globe, Activity, ShieldBan, Leaf, FileSearch, FileCheck } from "lucide-react";
import { UseCaseDetail } from "@/data/useCases";

const renderIcon = (name: string) => {
  switch (name) {
    case "UserCheck": return <UserCheck className="w-5 h-5 text-kyp-lime" />;
    case "ShieldAlert": return <ShieldAlert className="w-5 h-5 text-red-400" />;
    case "CreditCard": return <CreditCard className="w-5 h-5 text-kyp-teal" />;
    case "Sliders": return <Sliders className="w-5 h-5 text-kyp-mint" />;
    case "Globe": return <Globe className="w-5 h-5 text-kyp-lime" />;
    case "Activity": return <Activity className="w-5 h-5 text-kyp-teal" />;
    case "ShieldBan": return <ShieldBan className="w-5 h-5 text-yellow-400" />;
    case "Leaf": return <Leaf className="w-5 h-5 text-kyp-lime" />;
    case "FileSearch": return <FileSearch className="w-5 h-5 text-kyp-mint" />;
    case "FileCheck": return <FileCheck className="w-5 h-5 text-kyp-teal" />;
    default: return <UserCheck className="w-5 h-5 text-kyp-lime" />;
  }
};

export default function UseCaseCard({ useCase }: { useCase: UseCaseDetail }) {
  const isHash = useCase.href === "#";

  return (
    <Link
      href={useCase.href}
      className={`group block p-6 rounded-2xl bg-white border border-slate-200/90 transition-all duration-300 relative overflow-hidden ${
        useCase.isImplemented
          ? "hover:border-emerald-500/70 shadow-sm hover:shadow-md"
          : "hover:border-slate-300 shadow-sm hover:shadow"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
          {renderIcon(useCase.icon)}
        </div>
        {useCase.isImplemented ? (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
            Live Spec
          </span>
        ) : (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-600 border border-slate-200">
            Overview
          </span>
        )}
      </div>

      <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
        {useCase.title}
      </h3>

      <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed group-hover:text-slate-700">
        {useCase.shortDescription}
      </p>

      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className={`font-semibold ${useCase.isImplemented ? "text-emerald-600 font-bold" : "text-slate-500"}`}>
          {useCase.isImplemented ? "Explore use case" : "Learn overview"}
        </span>
        <ArrowRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-1 ${useCase.isImplemented ? "text-emerald-600" : "text-slate-400"}`} />
      </div>
    </Link>
  );
}
