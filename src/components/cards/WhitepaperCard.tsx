"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Clock, Download, FileText, Sparkles } from "lucide-react";
import { Whitepaper } from "@/data/whitepapers";

export default function WhitepaperCard({ whitepaper }: { whitepaper: Whitepaper }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group rounded-2xl bg-white hover:bg-[#000000] border border-slate-200 hover:border-[#033653] overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer">
      <div>
        {/* Cover visual with error handling */}
        <div className="relative w-full h-44 bg-slate-900 overflow-hidden border-b border-slate-100 group-hover:border-slate-800">
          {!imgError ? (
            <Image
              src={whitepaper.coverImage}
              alt={whitepaper.title}
              fill
              onError={() => setImgError(true)}
              className="object-cover object-center group-hover:scale-105 transition-all duration-500"
            />
          ) : (
            <div className="w-full h-full bg-[#11161d] p-6 flex flex-col justify-between text-white kyp-grid-pattern">
              <div className="flex items-center justify-between">
                <FileText className="w-6 h-6 text-[#66cc00]" />
                <span className="text-[10px] font-mono text-slate-400">KYP RESEARCH</span>
              </div>
              <div className="text-xs font-mono text-[#66cc00] font-bold">DEFENSIBLE INTELLIGENCE DOSSIER</div>
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 rounded-md bg-[#000000]/90 backdrop-blur-md border border-[#033653] text-[10px] font-mono text-[#66cc00] font-bold shadow-sm transition-colors">
              {whitepaper.category}
            </span>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center gap-4 text-[11px] font-mono text-slate-500 group-hover:text-slate-400 transition-colors">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#66cc00]" />
              {whitepaper.readTime}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-[#66cc00] stroke-[2.5]" />
              {whitepaper.pages}
            </span>
          </div>

          <h3 className="text-lg font-bold text-[#000000] group-hover:text-white transition-colors leading-snug">
            {whitepaper.title}
          </h3>

          <p className="text-xs text-slate-600 group-hover:text-slate-300 leading-relaxed line-clamp-3 transition-colors">
            {whitepaper.description}
          </p>

          {/* Highlights */}
          <div className="space-y-1.5 pt-2">
            <div className="text-[10px] font-mono text-[#033653] group-hover:text-[#66cc00] uppercase font-bold transition-colors">
              Key Findings
            </div>
            {whitepaper.highlights.slice(0, 2).map((h, i) => (
              <div key={i} className="text-xs text-slate-600 group-hover:text-slate-300 flex items-start gap-1.5 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#66cc00] mt-1.5 shrink-0" />
                <span className="line-clamp-1">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link
          href={whitepaper.downloadUrl}
          className="w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 bg-slate-100 group-hover:bg-[#66cc00] border border-slate-200 group-hover:border-[#66cc00] text-[#033653] group-hover:text-[#000000] transition-all"
        >
          <Download className="w-3.5 h-3.5 text-[#66cc00] group-hover:text-[#000000]" />
          <span>Request Whitepaper Copy</span>
        </Link>
      </div>
    </div>
  );
}
