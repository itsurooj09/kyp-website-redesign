import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Sparkles, BookOpen, Download } from "lucide-react";
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 mb-6 font-bold shadow-sm">
            <span className="w-4 h-4 inline-flex items-center justify-center">
              <KYPLottie type="docScanner" className="w-4 h-4" />
            </span>
            <span>COMPLIANCE PAPERS &bull; REGULATORY RESEARCH</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.1] font-heading">
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

      {/* CUSTOM RESEARCH BRIEFING CTA */}
      <section className="py-20 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white text-center border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Need Custom Portfolio Risk Benchmarking?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Our compliance intelligence team can conduct a complimentary scan of your merchant portfolio to identify hidden BRAM risk or ownership exposure.
          </p>
          <div className="pt-2">
            <Link
              href={routes.contact}
              className="kyp-btn-primary px-8 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <span>Schedule a Research Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
