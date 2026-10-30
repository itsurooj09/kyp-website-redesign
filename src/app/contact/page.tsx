import React from "react";
import { Metadata } from "next";
import { Sparkles, MapPin, Mail, Clock, ShieldCheck, Linkedin, ArrowRight } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact KYP | Book a Demo with Our Compliance Specialists",
  description:
    "Speak with the KYP team in London to discover how our AI-powered risk intelligence platform can monitor risks, simplify compliance, and reduce manual due diligence.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-black text-white relative overflow-hidden">
      
      {/* HERO */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-kyp-teal/15 kyp-grid-pattern">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-kyp-navy/35 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kyp-lime/10 border border-kyp-lime/30 text-xs font-mono text-kyp-lime mb-6 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            BOOK A DEMO &bull; COMPLIANCE CONSULTATION
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
            See the KYP Platform in Action.
          </h1>

          <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            Speak with our team to discover how KYP can help you monitor risk, simplify compliance and reduce manual due diligence.
          </p>
        </div>
      </section>

      {/* FORM & CONTACT DETAILS SPLIT */}
      <section className="py-16 lg:py-24 bg-kyp-charcoal/40 border-b border-kyp-teal/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 bg-kyp-navy-surface/90 p-6 sm:p-10 rounded-2xl border border-kyp-teal/25 shadow-2xl">
              <div className="mb-8">
                <span className="text-xs font-mono text-kyp-lime uppercase tracking-widest font-semibold">
                  Platform Demonstration Request
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  Schedule a Consultation
                </h2>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  Complete the form below and an enterprise compliance specialist will prepare a customized workflow review.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Right: Verified Company Details & Office */}
            <div className="lg:col-span-5 space-y-8">
              <div className="kyp-glass-card p-6 sm:p-8 rounded-2xl border border-kyp-teal/20 space-y-6">
                <div>
                  <span className="text-xs font-mono text-kyp-teal uppercase tracking-widest font-semibold">
                    Global Headquarters
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Cinnte Solutions Ltd (KYP)
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-gray-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-kyp-lime shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">London Office</div>
                      <div className="text-gray-400 mt-0.5 leading-relaxed">
                        33 Queen St, London, EC4R 1AP, United Kingdom
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-kyp-teal shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">General &amp; Demo Inquiries</div>
                      <a
                        href="mailto:hello@kyp.io"
                        className="text-kyp-mint hover:text-kyp-lime transition-colors block mt-0.5"
                      >
                        hello@kyp.io
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-kyp-mint shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">Operating Hours</div>
                      <div className="text-gray-400 mt-0.5">
                        Monday &ndash; Friday: 8:00 &ndash; 18:00 GMT
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-kyp-teal/15 flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-400">Professional Network</span>
                  <a
                    href="https://www.linkedin.com/company/know-your-partner/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-kyp-lime hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>KYP on LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Security & Confidentiality Box */}
              <div className="p-6 rounded-2xl bg-black border border-kyp-teal/20 space-y-3">
                <div className="flex items-center gap-2 text-kyp-lime text-xs font-mono font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>ISO 27001 Certified Security</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  KYP operates under strict institutional confidentiality agreements. All information submitted is protected by enterprise TLS 1.3 encryption and stored in ISO 27001-certified UK/EU data centers.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
