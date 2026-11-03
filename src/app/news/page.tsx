import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { routes } from "@/lib/routes";
import { newsArticlesData } from "@/data/news";
import NewsCard from "@/components/cards/NewsCard";
import KYPLottie from "@/components/lottie/KYPLottie";

export const metadata: Metadata = {
  title: "KYP News & Insights | Press, Partnerships & Perspectives",
  description:
    "Official news, client announcements, regulatory analysis, and updates from the KYP team.",
};

export default function NewsPage() {
  const featuredNews = newsArticlesData.slice(0, 3);
  const remainingNews = newsArticlesData.slice(3);

  return (
    <div className="w-full bg-white text-slate-900 relative overflow-hidden">
      
      {/* HERO */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24  bg-gradient-to-b from-slate-50/80 via-white to-slate-50/40 kyp-grid-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000000] border border-[#033653] text-xs font-mono text-white mb-6 font-bold shadow-xs">
            <span className="w-4 h-4 inline-flex items-center justify-center">
              <KYPLottie type="heroRadar" className="w-4 h-4" />
            </span>
            <span>OFFICIAL PRESS &bull; ANNOUNCEMENTS &bull; INSIGHTS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#000000] max-w-4xl mx-auto leading-[1.1] font-heading">
            KYP News &amp; Insights.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Updates, partnerships and perspectives on risk intelligence and compliance monitoring.
          </p>
        </div>
      </section>

      {/* FEATURED STORIES */}
      <section className="py-16 lg:py-20 bg-slate-50 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono bg-[#000000] text-white px-3.5 py-1 rounded-full border border-[#033653] uppercase tracking-widest font-bold">
              Top Announcements
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000000] mt-2">
              Featured Coverage &amp; Key Milestones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredNews.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* ALL ARTICLES GRID */}
      <section className="py-16 lg:py-24 bg-white ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono bg-[#000000] text-white px-3.5 py-1 rounded-full border border-[#033653] uppercase tracking-widest font-bold">
              Archive &amp; Industry Releases
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000000] mt-2">
              Recent Dispatches
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {remainingNews.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Note: Per user explicit specification, final CTA banner is completely removed from all pages. */}
    </div>
  );
}
