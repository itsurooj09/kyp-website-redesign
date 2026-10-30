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
      icon: <Compass className="w-6 h-6 text-kyp-lime" />,
    },
    {
      title: "Communicate challenges",
      desc: "A problem shared is a problem halved; look for support from team members, achieve as one.",
      icon: <HeartHandshake className="w-6 h-6 text-kyp-teal" />,
    },
    {
      title: "Own your work and targets",
      desc: "You decide on what's achievable for your quarterly targets; we empower you to deliver.",
      icon: <Target className="w-6 h-6 text-kyp-mint" />,
    },
    {
      title: "Be world class",
      desc: "We want to lead the industry. High expectations, high rewards.",
      icon: <Trophy className="w-6 h-6 text-kyp-lime" />,
    },
    {
      title: "Bring energy",
      desc: "Our team feeds on positivity and a can-do spirit.",
      icon: <Flame className="w-6 h-6 text-yellow-400" />,
    },
  ];

  return (
    <div className="w-full bg-black text-white relative overflow-hidden">
      
      {/* HERO */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-kyp-teal/15 kyp-grid-pattern">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-kyp-navy/35 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kyp-lime/10 border border-kyp-lime/30 text-xs font-mono text-kyp-lime mb-6 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            JOIN THE KYP TEAM &bull; LONDON HQ
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.08]">
            Build the Future of Risk Intelligence.
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
            KYP is always on the hunt for talented and passionate people. We celebrate innovation and forward thinking &ndash; our company is built on it. Exceed your potential&hellip;and join us!
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={routes.contact}
              className="kyp-btn-primary px-8 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-lime-glow"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://www.linkedin.com/company/know-your-partner/"
              target="_blank"
              rel="noopener noreferrer"
              className="kyp-btn-secondary px-8 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4 text-kyp-teal" />
              <span>KYP on LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* CULTURE & BENEFITS */}
      <section className="py-20 lg:py-28 bg-kyp-charcoal/40 border-b border-kyp-teal/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono text-kyp-lime uppercase tracking-widest font-semibold">
                Life at KYP
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Great Career Opportunities with Exceptional Benefits.
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                We are a small but dynamic team at the forefront of our industry. Our company culture is fun and fast-paced. If you share our values and this sounds like the type of place you&apos;d like to work, we&apos;d love to hear from you.
              </p>
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-gray-300">
                <div className="p-3.5 rounded-xl bg-kyp-navy-surface border border-kyp-teal/20 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-kyp-lime" />
                  <span>Central London Headquarters: 33 Queen St, London, EC4R 1AP</span>
                </div>
                <div className="p-3.5 rounded-xl bg-kyp-navy-surface border border-kyp-teal/20 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-kyp-teal" />
                  <span>Dynamic, collaborative, and innovation-led engineering &amp; compliance culture</span>
                </div>
                <div className="p-3.5 rounded-xl bg-kyp-navy-surface border border-kyp-teal/20 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-kyp-mint" />
                  <span>Competitive compensation packages, equity incentives, and comprehensive benefits</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-kyp-navy-surface/80 p-8 rounded-2xl border border-kyp-teal/25 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center justify-between">
                <span>Working in FinTech RegTech</span>
                <span className="text-xs font-mono text-kyp-lime">GROWTH</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                KYP is scaling fast across the UK, Europe, and international markets. Our engineers, data scientists, and risk architects solve challenging problems in graph computing, real-time registry ingestion, and agentic AI.
              </p>
              <div className="p-4 rounded-xl bg-black border border-kyp-teal/20 font-mono text-xs text-kyp-mint space-y-1">
                <div>HQ: City of London (EC4R 1AP)</div>
                <div>Industry: Enterprise Risk &bull; KYB Intelligence &bull; FinTech</div>
                <div>Status: Backed by London &amp; Partners, EY Alumni</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE COMPANY VALUES */}
      <section className="py-20 lg:py-28 border-b border-kyp-teal/15 kyp-grid-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono text-kyp-teal uppercase tracking-widest font-semibold">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2 tracking-tight">
              Values That Drive Us
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mt-3">
              The fundamental tenets that guide how we build technology, support partners, and collaborate as one team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyValues.map((val, idx) => (
              <div
                key={idx}
                className="kyp-glass-card p-6 sm:p-7 rounded-2xl border border-kyp-teal/20 space-y-4 hover:border-kyp-lime/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-kyp-navy border border-kyp-teal/30 flex items-center justify-center">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{val.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-20 lg:py-28 bg-kyp-charcoal/40 border-b border-kyp-teal/15">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-8">
          <div>
            <span className="text-xs font-mono text-kyp-lime uppercase tracking-widest font-semibold">
              Current Vacancies
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
              Open Positions
            </h2>
          </div>

          <div className="p-8 sm:p-12 rounded-2xl bg-kyp-navy-surface border border-kyp-teal/20 space-y-4">
            <div className="w-12 h-12 rounded-full bg-kyp-navy flex items-center justify-center text-kyp-lime mx-auto">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">
              No current vacancies. We&apos;re always interested in hearing from talented people.
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto leading-relaxed">
              Check out our LinkedIn page for the latest job postings, or send your CV and portfolio to our team at hello@kyp.io.
            </p>
            <div className="pt-3 flex flex-wrap justify-center gap-4">
              <Link
                href={routes.contact}
                className="kyp-btn-primary px-6 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 shadow-lime-glow"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="https://www.linkedin.com/company/know-your-partner/"
                target="_blank"
                rel="noopener noreferrer"
                className="kyp-btn-secondary px-6 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2"
              >
                <Linkedin className="w-3.5 h-3.5 text-kyp-teal" />
                <span>Follow on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
