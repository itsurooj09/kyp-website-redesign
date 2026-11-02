"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Search, 
  FileText, 
  Newspaper, 
  ArrowRight, 
  BookOpen, 
  Clock, 
  Calendar, 
  Download, 
  ExternalLink,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  Layers
} from "lucide-react";
import { whitepapersData } from "@/data/whitepapers";
import { newsArticlesData } from "@/data/news";
import { routes } from "@/lib/routes";
import KYPLottie from "@/components/lottie/KYPLottie";

export default function InsightsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "whitepapers" | "news">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    const whitepaperItems = whitepapersData.map((wp) => ({
      id: wp.id,
      title: wp.title,
      type: "Whitepaper" as const,
      category: wp.category,
      date: wp.date,
      meta: `${wp.pages} • ${wp.readTime}`,
      description: wp.description,
      href: wp.downloadUrl || routes.contact,
      isExternal: false,
      highlights: wp.highlights,
    }));

    const newsItems = newsArticlesData.map((article) => ({
      id: article.id,
      title: article.title,
      type: "News & Analysis" as const,
      category: article.category,
      date: article.date,
      meta: "4 min read",
      description: article.excerpt,
      href: article.url,
      isExternal: true,
      highlights: [],
    }));

    let combined = [];
    if (activeTab === "all") {
      combined = [...whitepaperItems, ...newsItems];
    } else if (activeTab === "whitepapers") {
      combined = whitepaperItems;
    } else {
      combined = newsItems;
    }

    if (!q) return combined;

    return combined.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [activeTab, searchQuery]);

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 font-bold mb-6 shadow-sm">
            <span className="w-4 h-4 inline-flex items-center justify-center">
              <KYPLottie type="heroRadar" className="w-4 h-4" />
            </span>
            <span>KYP INSIGHTS & REGULATORY INTELLIGENCE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight font-heading">
            Compliance Research, Scheme Insights & Regulatory Briefings
          </h1>

          <p className="text-lg text-slate-600 mt-5 max-w-3xl mx-auto leading-relaxed">
            In-depth whitepapers, merchant risk analyses, Mastercard BRAM & Visa VIRP violation prevention guides, and partnership intelligence from the KYP risk engineering team.
          </p>

          {/* Quick Stats Bar */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-2xl font-extrabold text-emerald-600 font-mono">100%</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Defensible Audit Trail Research</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-2xl font-extrabold text-sky-600 font-mono">Zero</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">BRAM & VIRP Scheme Penalty Model</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-2xl font-extrabold text-purple-600 font-mono">1,100+</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Real-Time Risk Signal Frameworks</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-2xl font-extrabold text-slate-800 font-mono">60s</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Automated Dossier Generation</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SPOTLIGHT ARTICLE */}
      <section className="py-12 bg-slate-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>FEATURED STRATEGIC WHITEPAPER</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Moving From Periodic Reviews to Continuous Risk Intelligence: The 2026 KYP Paradigm
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                  An in-depth analysis of why annual KYC reviews leave regulated institutions exposed to multi-million-pound regulatory fines, and how continuous third-party risk intelligence establishes real-time operational resilience.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 pt-2 font-mono">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Calendar className="w-4 h-4 text-emerald-400" /> Q3 2024
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <BookOpen className="w-4 h-4 text-sky-400" /> 24 Pages
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Clock className="w-4 h-4 text-purple-400" /> 12 min read
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                <Link
                  href={routes.contact}
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-center text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Request Full Whitepaper</span>
                </Link>
                <Link
                  href={routes.whitepapers}
                  className="w-full py-3 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-center text-xs transition-colors flex items-center justify-center gap-2 border border-white/10"
                >
                  <span>Browse All Whitepapers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH HUB */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl w-full md:w-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Insights ({whitepapersData.length + newsArticlesData.length})
            </button>
            <button
              onClick={() => setActiveTab("whitepapers")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "whitepapers"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Whitepapers ({whitepapersData.length})
            </button>
            <button
              onClick={() => setActiveTab("news")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "news"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              News & Updates ({newsArticlesData.length})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search reports, articles, regulations..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* RESULTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                    item.type === "Whitepaper"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-sky-50 text-sky-700 border border-sky-200"
                  }`}>
                    {item.type}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{item.date}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-500 mt-2.5 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Key Highlights:
                    </span>
                    {item.highlights.slice(0, 2).map((hl, hIdx) => (
                      <div key={hIdx} className="text-xs text-slate-600 flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold shrink-0">•</span>
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">{item.meta}</span>
                {item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    <span>Read Article</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    <span>Download Report</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 mt-8">
            <FileText className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No matching insights found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search terms or switch tabs to view all available whitepapers and articles.
            </p>
          </div>
        )}
      </section>

      {/* REGULATORY BRIEFING SUBSCRIPTION */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Receive The KYP Monthly Regulatory & Merchant Risk Briefing
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Direct briefings on FCA policy changes, card scheme BRAM/VIRP penalty updates, sanctions additions, and merchant portfolio fraud trends.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing to KYP Regulatory Briefings."); }} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
            <input
              type="email"
              required
              placeholder="Enter compliance work email"
              className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 flex-1"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md transition-all shrink-0 cursor-pointer"
            >
              Subscribe Free
            </button>
          </form>
          <p className="text-[11px] text-slate-400">
            Zero spam. Unsubscribe anytime. View our <Link href={routes.privacy} className="underline hover:text-emerald-300">Privacy & Cookies Policy</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
