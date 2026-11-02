import React from "react";
import { Metadata } from "next";
import { Sparkles, MapPin, Mail, Clock, ShieldCheck, Linkedin, ArrowRight } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import KYPLottie from "@/components/lottie/KYPLottie";

export const metadata: Metadata = {
  title: "Contact KYP | Book a Demo with Our Compliance Specialists",
  description:
    "Speak with the KYP team in London to discover how our AI-powered risk intelligence platform can monitor risks, simplify compliance, and reduce manual due diligence.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-white text-slate-900 relative overflow-hidden">
      
      {/* HERO */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/40 kyp-grid-pattern">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000000] border border-[#033653] text-xs font-mono text-white mb-6 font-bold shadow-sm">
            <span className="w-4 h-4 inline-flex items-center justify-center">
              <KYPLottie type="heroRadar" className="w-4 h-4" />
            </span>
            <span>BOOK A DEMO &bull; COMPLIANCE CONSULTATION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.1] font-heading">
            See the KYP Platform in Action.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Speak with our team to discover how KYP can help you monitor risk, simplify compliance and reduce manual due diligence.
          </p>
        </div>
      </section>

      {/* FORM & CONTACT DETAILS SPLIT */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
              <div className="mb-8">
                <span className="text-xs font-mono text-white uppercase tracking-widest font-bold">
                  Platform Demonstration Request
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  Schedule a Consultation
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Complete the form below and an enterprise compliance specialist will prepare a customized workflow review.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Right: Headquarters & Direct Touchpoints */}
            <div className="lg:col-span-5 space-y-6">
              {/* Location Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#000000] border border-emerald-200 flex items-center justify-center text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-white uppercase tracking-wider font-bold">Global Headquarters</div>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">London, United Kingdom</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    33 Queen St, London, EC4R 1AP, United Kingdom
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-mono">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>Mon – Fri: 08:00 – 18:00 GMT</span>
                </div>
              </div>

              {/* Direct Inquiries Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-sky-700 uppercase tracking-wider font-bold">Direct Communication</div>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">Institutional Desk</h3>
                  <div className="mt-2 space-y-1.5 text-xs">
                    <div>
                      <span className="text-slate-500">General Inquiries: </span>
                      <a href="mailto:hello@kyp.io" className="text-white font-semibold hover:underline">
                        hello@kyp.io
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-500">Security & Privacy: </span>
                      <a href="mailto:security@kyp.io" className="text-white font-semibold hover:underline">
                        security@kyp.io
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Assurance Card */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#033653] font-bold font-mono">
                  <ShieldCheck className="w-4 h-4" />
                  <span>ISO 27001 Certified Infrastructure</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  KYP operates under rigorous information security governance. Enterprise sandbox testing environments and compliance audits are hosted within dedicated tenant boundaries.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
