import React from "react";
import Image from "next/image";
import { ArrowUpRight, Calendar } from "lucide-react";
import { NewsArticle } from "@/data/news";

export default function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-500/60 overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
    >
      <div>
        {/* Featured Image */}
        <div className="relative w-full h-48 bg-slate-100 overflow-hidden border-b border-slate-100">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md border border-slate-200 text-[10px] font-mono text-emerald-800 font-bold shadow-sm">
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{article.date}</span>
          </div>

          <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-0">
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700 group-hover:text-emerald-800 transition-colors">
          <span>Read official article</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </a>
  );
}
