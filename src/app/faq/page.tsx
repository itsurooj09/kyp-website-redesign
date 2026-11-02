import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Sparkles, HelpCircle, Mail } from "lucide-react";
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 mb-6 font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KNOWLEDGE BASE &bull; REGULATORY FAQ</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.1] font-heading">
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

      {/* FINAL BOOK A DEMO CTA */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white text-center border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Still Have Questions About KYP?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Our compliance engineering team is on hand to review your specific partner monitoring workflow and demonstrate live capabilities.
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
