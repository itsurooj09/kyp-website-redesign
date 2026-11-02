"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, UserCheck, ShieldAlert, CreditCard, Sliders, Globe, Activity, ShieldBan, Leaf, FileSearch, FileCheck } from "lucide-react";
import { UseCaseDetail } from "@/data/useCases";

const renderIcon = (name: string) => {
  switch (name) {
    case "UserCheck": return <UserCheck className="w-5 h-5 text-[#66cc00] group-hover:text-black transition-colors" />;
    case "ShieldAlert": return <ShieldAlert className="w-5 h-5 text-[#66cc00] group-hover:text-black transition-colors" />;
    case "CreditCard": return <CreditCard className="w-5 h-5 text-[#66cc00] group-hover:text-black transition-colors" />;
    case "Sliders": return <Sliders className="w-5 h-5 text-[#66cc00] group-hover:text-black transition-colors" />;
    case "Globe": return <Globe className="w-5 h-5 text-[#66cc00] group-hover:text-black transition-colors" />;
    case "Activity": return <Activity className="w-5 h-5 text-[#66cc00] group-hover:text-black transition-colors" />;
    case "ShieldBan": return <ShieldBan className="w-5 h-5 text-[#66cc00] group-hover:text-black transition-colors" />;
    case "Leaf": return <Leaf className="w-5 h-5 text-[#66cc00] group-hover:text-black transition-colors" />;
    case "FileSearch": return <FileSearch className="w-5 h-5 text-[#66cc00] group-hover:text-black transition-colors" />;
    case "FileCheck": return <FileCheck className="w-5 h-5 text-[#66cc00] group-hover:text-black transition-colors" />;
    default: return <UserCheck className="w-5 h-5 text-[#66cc00] group-hover:text-black transition-colors" />;
  }
};

export default function UseCaseCard({ useCase }: { useCase: UseCaseDetail }) {
  return (
    <Link
      href={useCase.href}
      className="group block p-7 rounded-3xl bg-white border border-slate-200/90 hover:bg-[#0c140e] hover:border-[#66cc00]/70 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6),0_0_30px_rgba(102,204,0,0.15)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 cursor-pointer"
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-13 h-13 rounded-2xl bg-slate-100 border border-slate-200 group-hover:bg-[#66cc00] group-hover:border-[#66cc00] flex items-center justify-center group-hover:scale-105 transition-all shadow-xs">
            {renderIcon(useCase.icon)}
          </div>
          {useCase.isImplemented ? (
            <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#000000] text-white border border-slate-800 font-bold group-hover:bg-[#111e13] group-hover:border-[#234327] group-hover:text-[#66cc00] transition-colors">
              Live Spec
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-slate-100 text-slate-600 border border-slate-200 group-hover:bg-[#111e13] group-hover:border-[#234327] group-hover:text-slate-400 transition-colors">
              Overview
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-[#000000] group-hover:text-white transition-colors leading-snug">
          {useCase.title}
        </h3>

        <p className="text-sm text-slate-600 group-hover:text-[#9db39d] mt-3 line-clamp-3 leading-relaxed transition-colors">
          {useCase.shortDescription}
        </p>

        {/* Dynamic Category Pill */}
        <div className="pt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 group-hover:bg-[#111e13] group-hover:border-[#234327] group-hover:text-[#66cc00] text-xs font-semibold transition-colors">
            {useCase.category}
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 group-hover:bg-[#111e13] group-hover:border-[#234327] group-hover:text-[#66cc00] text-xs font-semibold transition-colors">
            Continuous Risk
          </span>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 group-hover:border-[#1a2b1c] flex items-center justify-between text-xs transition-colors">
        <span className="font-bold text-[#033653] group-hover:text-[#66cc00] text-sm transition-colors">
          Talk to us
        </span>
        <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 group-hover:bg-[#66cc00] group-hover:border-[#66cc00] text-[#033653] group-hover:text-black flex items-center justify-center transition-all group-hover:scale-110 shadow-xs">
          <ArrowRight className="w-4 h-4 stroke-[2.8]" />
        </div>
      </div>
    </Link>
  );
}
