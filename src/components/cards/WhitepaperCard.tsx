import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Download } from "lucide-react";
import { Whitepaper } from "@/data/whitepapers";

export default function WhitepaperCard({ whitepaper }: { whitepaper: Whitepaper }) {
  return (
    <div className="group rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-500/60 overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md">
      <div>
        {/* Cover visual */}
        <div className="relative w-full h-44 bg-slate-100 overflow-hidden border-b border-slate-100">
          <Image
            src={whitepaper.coverImage}
            alt={whitepaper.title}
            fill
            className="object-cover object-top group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md border border-slate-200 text-[10px] font-mono text-emerald-800 font-bold shadow-sm">
              {whitepaper.category}
            </span>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center gap-4 text-[11px] font-mono text-slate-500">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {whitepaper.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
              {whitepaper.pages}
            </span>
          </div>

          <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
            {whitepaper.title}
          </h3>

          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
            {whitepaper.description}
          </p>

          {/* Highlights */}
          <div className="space-y-1.5 pt-2">
            <div className="text-[10px] font-mono text-emerald-700 uppercase font-bold">Key Findings</div>
            {whitepaper.highlights.slice(0, 2).map((h, i) => (
              <div key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <span className="line-clamp-1">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link
          href={whitepaper.downloadUrl}
          className="w-full kyp-btn-secondary py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 group-hover:border-slate-900 group-hover:text-slate-900 transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Request Whitepaper Copy</span>
        </Link>
      </div>
    </div>
  );
}
