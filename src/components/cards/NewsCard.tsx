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
      className="group block rounded-2xl bg-kyp-navy-surface/80 border border-kyp-teal/20 hover:border-kyp-lime/50 overflow-hidden transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Featured Image */}
        <div className="relative w-full h-48 bg-black overflow-hidden border-b border-kyp-teal/15">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-kyp-teal/30 text-[10px] font-mono text-kyp-mint font-semibold">
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
            <Calendar className="w-3.5 h-3.5 text-kyp-teal" />
            <span>{article.date}</span>
          </div>

          <h3 className="text-base font-bold text-white group-hover:text-kyp-mint transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h3>

          <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-0">
        <div className="pt-3 border-t border-kyp-teal/15 flex items-center justify-between text-xs font-semibold text-kyp-teal group-hover:text-kyp-lime transition-colors">
          <span>Read official article</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </a>
  );
}
