import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Sparkles, Newspaper } from "lucide-react";
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
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/40 kyp-grid-pattern">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 mb-6 font-bold shadow-sm">
            <span className="w-4 h-4 inline-flex items-center justify-center">
              <KYPLottie type="heroRadar" className="w-4 h-4" />
            </span>
            <span>OFFICIAL PRESS &bull; ANNOUNCEMENTS &bull; INSIGHTS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.1] font-heading">
            KYP News &amp; Insights.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Updates, partnerships and perspectives on risk intelligence and compliance monitoring.
          </p>
        </div>
      </section>

      {/* FEATURED STORIES */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-mono text-emerald-700 uppercase tracking-widest font-bold">
              Top Announcements
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
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
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-mono text-emerald-700 uppercase tracking-widest font-bold">
              Archive &amp; Industry Releases
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white text-center border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Stay Ahead of Emerging Compliance Risks
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Speak with our risk intelligence specialists to see how KYP can protect your organization from regulatory non-compliance.
          </p>
          <div className="pt-2">
            <Link
              href={routes.bookDemo}
              className="kyp-btn-primary px-8 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
