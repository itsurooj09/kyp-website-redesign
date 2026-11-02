import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  BookOpen,
  ChevronRight
} from "lucide-react";
import { newsArticlesData } from "@/data/news";
import { routes } from "@/lib/routes";
import NewsCard from "@/components/cards/NewsCard";

interface Props {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return newsArticlesData.map((article) => ({
    id: article.id,
  }));
}

export default function ArticleDetailPage({ params }: Props) {
  const article = newsArticlesData.find((a) => a.id === params.id);

  if (!article) {
    notFound();
  }

  // Related articles (exclude current)
  const relatedArticles = newsArticlesData
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      {/* BREADCRUMB & BACK NAVIGATION */}
      <div className="border-b border-slate-200 bg-slate-50/70 py-4">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 flex items-center justify-between text-xs font-mono">
          <Link
            href={routes.news}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-[#000000] font-semibold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#66cc00]" />
            <span>Back to All News & Analysis</span>
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-slate-400">
            <span>News Hub</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#033653] font-bold">{article.category}</span>
          </div>
        </div>
      </div>

      {/* ARTICLE HEADER & HERO */}
      <article className="max-w-4xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        {/* Meta Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#000000] text-white border border-[#033653] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#66cc00] animate-pulse" />
            <span>{article.category}</span>
          </span>
          <span className="text-slate-400 text-xs font-mono flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            {article.date}
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-400 text-xs font-mono flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#66cc00]" />
            {article.readTime || "5 min read"}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#000000] leading-tight font-heading mb-6">
          {article.title}
        </h1>

        {/* Author / Source Bar */}
        <div className="flex items-center justify-between border-y border-slate-200 py-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#000000] border border-[#033653] flex items-center justify-center text-[#66cc00] font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-[#66cc00]" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">{article.author || "KYP Intelligence Bureau"}</div>
              <div className="text-xs text-slate-500 font-mono">Enterprise Risk & Compliance Practice</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">KYP Research Verified</span>
            <span className="w-2 h-2 rounded-full bg-[#66cc00]" />
          </div>
        </div>

        {/* Hero Featured Image */}
        <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-md mb-10 bg-slate-900">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Executive Summary / Key Takeaways Box */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm mb-10 space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#66cc00]" />
              <h2 className="text-sm font-bold font-mono uppercase tracking-wider text-[#000000]">
                Executive Takeaways
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {article.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#66cc00] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Body Content */}
        <div className="prose prose-slate max-w-none space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
          {article.content ? (
            article.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="leading-relaxed">{article.excerpt}</p>
          )}

          {/* Pull Quote */}
          {article.quote && (
            <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#000000] border border-[#033653] text-white space-y-4 shadow-xl">
              <div className="text-3xl font-serif text-[#66cc00] leading-none">“</div>
              <p className="text-base sm:text-lg font-medium text-slate-200 italic leading-relaxed">
                {article.quote.text}
              </p>
              <div className="pt-2 border-t border-[#033653]/60 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="font-bold text-white">{article.quote.author}</span>
                  <span className="text-slate-400"> — {article.quote.role}</span>
                </div>
                <span className="text-[#66cc00]">KYP Verified</span>
              </div>
            </div>
          )}

          {/* Regulatory Context Paragraph */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 mt-8">
            <h3 className="text-sm font-bold text-[#000000] font-mono uppercase tracking-wider">
              Strategic Implications for Regulated Compliance Officers
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              As regulatory bodies increase enforcement under consumer protection, AMLD5/AMLD6, and payments scheme standards, financial institutions must document clear, continuous audit trails. Point-in-time files no longer establish adequate operational defense.
            </p>
          </div>
        </div>

        {/* Post Actions & Share */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <Link
            href={routes.news}
            className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#66cc00]" />
            <span>Return to Newsroom</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href={routes.bookDemo}
              className="px-6 py-2.5 rounded-full bg-[#66cc00] hover:bg-[#52a600] text-[#000000] text-xs font-extrabold flex items-center gap-2 shadow-sm transition-all"
            >
              <span>Schedule Strategic Briefing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>

      {/* RELATED ARTICLES SECTION */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono bg-[#000000] text-white px-3 py-1 rounded-full border border-[#033653] uppercase tracking-widest font-bold">
                  Recommended Reading
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000000] mt-2">
                  Related Intelligence Briefings
                </h2>
              </div>
              <Link
                href={routes.news}
                className="text-xs font-mono font-bold text-[#033653] hover:text-[#66cc00] flex items-center gap-1 transition-colors"
              >
                <span>View all articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <NewsCard key={rel.id} article={rel} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
