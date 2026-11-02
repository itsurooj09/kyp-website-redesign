import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { routes } from "@/lib/routes";
import { whitepapersData } from "@/data/whitepapers";
import WhitepaperCard from "@/components/cards/WhitepaperCard";
import KYPLottie from "@/components/lottie/KYPLottie";

export const metadata: Metadata = {
  title: "Whitepapers & Research | KYP",
  description:
    "Explore KYP whitepapers and research reports on continuous third-party risk intelligence, Mastercard BRAM/VIRP compliance, and graph entity resolution.",
};

export default function WhitepapersPage() {
  return (
    <div className="w-full bg-white text-slate-900 relative overflow-hidden">
      
      {/* HERO */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/40 kyp-grid-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000000] border border-[#033653] text-xs font-mono text-white mb-6 font-bold shadow-xs">
            <span className="w-4 h-4 inline-flex items-center justify-center">
              <KYPLottie type="docScanner" className="w-4 h-4" />
            </span>
            <span>COMPLIANCE PAPERS &bull; REGULATORY RESEARCH</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#000000] max-w-4xl mx-auto leading-[1.1] font-heading">
            Research. Insights. Better Risk Decisions.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Explore KYP resources designed to help compliance teams understand emerging risks and strengthen portfolio oversight.
          </p>
        </div>
      </section>

      {/* WHITEPAPERS GRID */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whitepapersData.map((wp) => (
              <WhitepaperCard key={wp.id} whitepaper={wp} />
            ))}
          </div>
        </div>
      </section>

      {/* Note: Per user explicit specification, final CTA banner is completely removed from all pages. */}
    </div>
  );
}
