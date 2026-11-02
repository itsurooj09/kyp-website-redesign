import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { routes } from "@/lib/routes";
import FAQAccordion from "@/components/faq/FAQAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | KYP",
  description:
    "Explore answers to questions about KYP's AI onboarding, continuous monitoring, WebCompli card scheme surveillance, and enterprise compliance integration.",
};

export default function FAQPage() {
  return (
    <div className="w-full bg-white text-slate-900 relative overflow-hidden">
      
      {/* HERO */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/40 kyp-grid-pattern">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000000] border border-[#033653] text-xs font-mono text-white mb-6 font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#66cc00]" />
            <span>KNOWLEDGE BASE &bull; REGULATORY FAQ</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#000000] max-w-4xl mx-auto leading-[1.1] font-heading">
            Frequently Asked Questions.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about KYP&apos;s continuous monitoring, AI document verification, WebCompli website screening, and enterprise security standards.
          </p>
        </div>
      </section>

      {/* FAQ INTERACTIVE ACCORDION SECTION */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FAQAccordion />
        </div>
      </section>

      {/* Note: Per user explicit specification, final CTA banner is completely removed from all pages. */}
    </div>
  );
}
