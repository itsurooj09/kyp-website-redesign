import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Download } from "lucide-react";
import { Whitepaper } from "@/data/whitepapers";

export default function WhitepaperCard({ whitepaper }: { whitepaper: Whitepaper }) {
  return (
    <div className="group rounded-2xl bg-kyp-navy-surface/80 border border-kyp-teal/20 hover:border-kyp-lime/50 overflow-hidden transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Cover visual */}
        <div className="relative w-full h-44 bg-black overflow-hidden border-b border-kyp-teal/15">
          <Image
            src={whitepaper.coverImage}
            alt={whitepaper.title}
            fill
            className="object-cover object-top opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-md bg-black/85 backdrop-blur-md border border-kyp-teal/30 text-[10px] font-mono text-kyp-lime font-semibold">
              {whitepaper.category}
            </span>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center gap-4 text-[11px] font-mono text-gray-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-kyp-teal" />
              {whitepaper.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-kyp-mint" />
              {whitepaper.pages}
            </span>
          </div>

          <h3 className="text-lg font-bold text-white group-hover:text-kyp-mint transition-colors leading-snug">
            {whitepaper.title}
          </h3>

          <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
            {whitepaper.description}
          </p>

          {/* Highlights */}
          <div className="space-y-1.5 pt-2">
            <div className="text-[10px] font-mono text-kyp-teal uppercase font-semibold">Key Findings</div>
            {whitepaper.highlights.slice(0, 2).map((h, i) => (
              <div key={i} className="text-xs text-gray-300 flex items-start gap-1.5">
                <span className="w-1 h-1 rounded-full bg-kyp-lime mt-1.5 shrink-0" />
                <span className="line-clamp-1">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link
          href={whitepaper.downloadUrl}
          className="w-full kyp-btn-secondary py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 group-hover:border-kyp-lime group-hover:text-kyp-lime transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Request Whitepaper Copy</span>
        </Link>
      </div>
    </div>
  );
}
