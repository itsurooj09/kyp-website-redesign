import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Sparkles, HeartHandshake, Compass, Target, Trophy, Flame, Linkedin, Mail } from "lucide-react";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Careers at KYP | Build the Future of Risk Intelligence",
  description:
    "Join our high-performing team in London building the next generation of AI-powered risk intelligence and continuous compliance monitoring.",
};

export default function CareersPage() {
  const companyValues = [
    {
      title: "Lead from the front",
      desc: "Walk the talk – and get involved! Everyone is valuable and everyone’s contribution is important.",
      icon: <Compass className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: "Communicate challenges",
      desc: "A problem shared is a problem halved; look for support from team members, achieve as one.",
      icon: <HeartHandshake className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Own your work and targets",
      desc: "You decide on what's achievable for your quarterly targets; we empower you to deliver.",
      icon: <Target className="w-6 h-6 text-teal-600" />,
    },
    {
      title: "Be world class",
      desc: "We want to lead the industry. High expectations, high rewards.",
      icon: <Trophy className="w-6 h-6 text-amber-500" />,
    },
    {
      title: "Bring energy",
      desc: "Our team feeds on positivity and a can-do spirit.",
      icon: <Flame className="w-6 h-6 text-orange-500" />,
    },
  ];

  return (
    <div className="w-full bg-white text-slate-900 relative overflow-hidden">
      
      {/* HERO */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-200 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/40 kyp-grid-pattern">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 mb-6 font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>JOIN THE KYP TEAM &bull; LONDON HQ</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.08] font-heading">
            Build the Future of Risk Intelligence.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            KYP is always on the hunt for talented and passionate people. We celebrate innovation and forward thinking &ndash; our company is built on it. Exceed your potential&hellip;and join us!
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={routes.contact}
              className="kyp-btn-primary px-8 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://www.linkedin.com/company/know-your-partner/"
              target="_blank"
              rel="noopener noreferrer"
              className="kyp-btn-secondary px-8 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4 text-sky-600" />
              <span>KYP on LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* CULTURE & BENEFITS */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono text-emerald-700 uppercase tracking-widest font-bold">
                Life at KYP
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Great Career Opportunities with Exceptional Benefits.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We are a small but dynamic team at the forefront of our industry. Our company culture is fun and fast-paced. If you share our values and this sounds like the type of place you&apos;d like to work, we&apos;d love to hear from you.
              </p>
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Central London Headquarters: 33 Queen St, London, EC4R 1AP</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                  <span>Dynamic, collaborative, and innovation-led engineering &amp; compliance culture</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-teal-500" />
                  <span>Competitive compensation packages, equity incentives, and comprehensive benefits</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-slate-200 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 flex items-center justify-between">
                <span>Working in FinTech RegTech</span>
                <span className="text-xs font-mono text-emerald-700 font-bold">GROWTH</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                KYP is scaling fast across the UK, Europe, and international markets. Our engineers, data scientists, and risk architects solve challenging problems in graph computing, real-time registry ingestion, and agentic AI.
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-700 space-y-1">
                <div>HQ: City of London (EC4R 1AP)</div>
                <div>Industry: Enterprise Risk &bull; KYB Intelligence &bull; FinTech</div>
                <div>Status: Backed by London &amp; Partners, EY Alumni</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE COMPANY VALUES */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono text-emerald-700 uppercase tracking-widest font-bold">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mt-2 tracking-tight">
              Values That Drive Us
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              The fundamental tenets that guide how we build technology, support partners, and collaborate as one team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 hover:border-emerald-500/60 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{val.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-8">
          <div>
            <span className="text-xs font-mono text-emerald-700 uppercase tracking-widest font-bold">
              Current Vacancies
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 tracking-tight">
              Open Positions
            </h2>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mx-auto">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              No current vacancies. We&apos;re always interested in hearing from talented people.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              Check out our LinkedIn page for the latest job postings, or send your CV and portfolio to our team at hello@kyp.io.
            </p>
            <div className="pt-3 flex flex-wrap justify-center gap-4">
              <Link
                href={routes.contact}
                className="kyp-btn-primary px-6 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 shadow-sm hover:shadow"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="https://www.linkedin.com/company/know-your-partner/"
                target="_blank"
                rel="noopener noreferrer"
                className="kyp-btn-secondary px-6 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-600" />
                <span>Follow on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
