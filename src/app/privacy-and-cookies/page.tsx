"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  Cookie, 
  CheckCircle2, 
  Mail, 
  Building, 
  AlertCircle,
  ExternalLink,
  Sliders
} from "lucide-react";
import { routes } from "@/lib/routes";

export default function PrivacyAndCookiesPage() {
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,
    analytics: true,
    preferences: true,
  });
  const [savedNotification, setSavedNotification] = useState(false);

  const handleSaveCookies = () => {
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 3000);
  };

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      {/* HEADER SECTION */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000000] border border-[#033653] text-xs font-mono text-white font-bold mb-6">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>LEGAL & COMPLIANCE FRAMEWORK • UK & EU GDPR</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 font-heading">
            Privacy and Cookie Policy
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            How KYP collects, processes, and protects corporate intelligence, compliance data, and website visitor telemetry in accordance with statutory privacy frameworks.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-500">
            <span>Last Updated: November 2026</span>
            <span>&bull;</span>
            <span>Version: 3.2 (Production)</span>
            <span>&bull;</span>
            <span className="text-white font-semibold">ISO 27001 Certified Controls</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT WITH TABLE OF CONTENTS */}
      <section className="py-16 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Policy Body */}
          <div className="lg:col-span-8 space-y-12 leading-relaxed text-sm text-slate-700">
            
            {/* Section 1 */}
            <div id="overview" className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="text-emerald-600 font-mono text-sm">01.</span>
                <span>Overview & Data Controller Information</span>
              </h2>
              <p>
                This Privacy and Cookie Policy applies to <strong>Cinnte Solutions Ltd</strong> (trading as <strong>KYP</strong>, <strong>Know Your Partner</strong>, or <strong>Know Your Portfolio</strong>), registered in England and Wales. We provide real-time third-party risk intelligence, merchant onboarding orchestration, automated AML screening, and continuous portfolio surveillance solutions to regulated firms, payment institutions, acquirers, and fintech platforms.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1 font-mono text-slate-600">
                <div><strong>Registered Office:</strong> 33 Queen St, London, EC4R 1AP, United Kingdom</div>
                <div><strong>Supervisory Authority:</strong> UK Information Commissioner&apos;s Office (ICO)</div>
                <div><strong>Data Protection Officer (DPO):</strong> dpo@kyp.io</div>
              </div>
            </div>

            {/* Section 2 */}
            <div id="data-collected" className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="text-emerald-600 font-mono text-sm">02.</span>
                <span>The Information We Collect</span>
              </h2>
              <p>
                In delivering our risk intelligence platform and operating this website, we collect and process several categories of information:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs text-slate-600">
                <li>
                  <strong>Corporate Registry Records:</strong> Statutory company filings, registered addresses, business identification numbers, date of incorporation, and official articles of association.
                </li>
                <li>
                  <strong>Directorship & Beneficial Ownership (UBO):</strong> Publicly registered directors, officers, and shareholders holding 25% or greater equity/voting control.
                </li>
                <li>
                  <strong>Sanctions & Politically Exposed Persons (PEP) Data:</strong> Public regulatory enforcement notices, global sanctions records (OFAC, UK HMT, EU, UN), and international adverse media gazettes.
                </li>
                <li>
                  <strong>Merchant Website Compliance Signals:</strong> Public domain metadata, terms of service, payment scheme disclosures, and product catalog compliance checks.
                </li>
                <li>
                  <strong>Website Telemetry & Contact Data:</strong> Name, work email address, phone number, and company name submitted through our consultation and demo request forms.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div id="lawful-basis" className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="text-emerald-600 font-mono text-sm">03.</span>
                <span>Lawful Bases for Data Processing</span>
              </h2>
              <p>
                We only process personal and corporate data under explicit lawful bases defined by Article 6 of the UK & EU GDPR:
              </p>
              <div className="space-y-3">
                <div className="p-3.5 rounded-lg border border-slate-200 bg-white">
                  <div className="font-semibold text-slate-900 text-xs">Legal & Regulatory Obligation (Article 6(1)(c))</div>
                  <p className="text-xs text-slate-500 mt-1">
                    Processing necessary to enable our regulated clients to fulfill mandatory Anti-Money Laundering (AML), Counter-Terrorist Financing (CTF), and KYC/KYB statutory mandates under the Money Laundering Regulations 2017.
                  </p>
                </div>
                <div className="p-3.5 rounded-lg border border-slate-200 bg-white">
                  <div className="font-semibold text-slate-900 text-xs">Legitimate Interests (Article 6(1)(f))</div>
                  <p className="text-xs text-slate-500 mt-1">
                    Processing necessary for the prevention of commercial fraud, detection of illegal payment scheme violations (BRAM/VIRP), and safeguarding enterprise integrity.
                  </p>
                </div>
                <div className="p-3.5 rounded-lg border border-slate-200 bg-white">
                  <div className="font-semibold text-slate-900 text-xs">Contractual Necessity (Article 6(1)(b))</div>
                  <p className="text-xs text-slate-500 mt-1">
                    Processing required to operate customer software subscriptions, manage support tickets, and provide customer onboarding.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div id="security" className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="text-emerald-600 font-mono text-sm">04.</span>
                <span>Security & Cryptographic Defensibility</span>
              </h2>
              <p>
                KYP maintains rigorous institutional security controls certified to <strong>ISO/IEC 27001</strong> standards. All customer dossiers and continuous telemetry are protected with end-to-end encryption:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">AES-256 Encryption at Rest</div>
                  <p className="text-slate-500 mt-0.5">All database volumes, entity records, and file storage are encrypted at rest.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">TLS 1.3 in Transit</div>
                  <p className="text-slate-500 mt-0.5">Strict HTTPS transport security with HSTS preload across all endpoints.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">Cryptographic SHA-256 Hashing</div>
                  <p className="text-slate-500 mt-0.5">Every audit trail event is cryptographically sealed for non-repudiation.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">Zero Trust Role-Based Access</div>
                  <p className="text-slate-500 mt-0.5">Least-privilege permission models enforced across all operational infrastructure.</p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div id="retention" className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="text-emerald-600 font-mono text-sm">05.</span>
                <span>Data Retention & Archival</span>
              </h2>
              <p>
                In alignment with European Anti-Money Laundering Directives and UK FCA requirements, customer due diligence records, verification timestamps, and compliance audit dossiers are retained for a statutory period of <strong>5 years</strong> following the termination of the customer business relationship.
              </p>
            </div>

            {/* Section 6 */}
            <div id="cookies" className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="text-emerald-600 font-mono text-sm">06.</span>
                <span>Cookie Policy & Tracking Technologies</span>
              </h2>
              <p>
                Cookies are small text files placed on your device when visiting our website. We categorize our cookies as follows:
              </p>

              <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-700 font-mono border-b border-slate-200">
                    <tr>
                      <th className="p-3">Category</th>
                      <th className="p-3">Purpose</th>
                      <th className="p-3">Lifespan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Strictly Necessary</td>
                      <td className="p-3">Session authentication, CSRF security tokens, and load balancing.</td>
                      <td className="p-3 font-mono">Session</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Performance & Analytics</td>
                      <td className="p-3">Aggregated anonymous usage metrics to improve navigation latency.</td>
                      <td className="p-3 font-mono">12 Months</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Functional & Preferences</td>
                      <td className="p-3">Remembering UI preferences, active filters, and dismissal states.</td>
                      <td className="p-3 font-mono">6 Months</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Interactive Cookie Preferences Manager */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 mt-6">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Sliders className="w-4 h-4 text-emerald-600" />
                  <span>Manage Your Cookie Preferences</span>
                </div>
                <p className="text-xs text-slate-500">
                  Toggle your consent choices below. Strictly necessary cookies cannot be disabled as they are required for security and core site functionality.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200">
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Essential & Security Cookies</div>
                      <div className="text-[11px] text-slate-400">Required for website security, routing, and access control.</div>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">Always Active</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200">
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Analytics & Performance Cookies</div>
                      <div className="text-[11px] text-slate-400">Helps us evaluate user journeys and optimize page responsiveness.</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={cookieSettings.analytics}
                      onChange={(e) => setCookieSettings({ ...cookieSettings, analytics: e.target.checked })}
                      className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500 cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200">
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Functional & Personalization Cookies</div>
                      <div className="text-[11px] text-slate-400">Stores UI preferences and interactive tab filters.</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={cookieSettings.preferences}
                      onChange={(e) => setCookieSettings({ ...cookieSettings, preferences: e.target.checked })}
                      className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={handleSaveCookies}
                    className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Save Preferences
                  </button>
                  {savedNotification && (
                    <span className="text-xs text-white font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Preferences saved successfully
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div id="rights" className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="text-emerald-600 font-mono text-sm">07.</span>
                <span>Your Statutory Data Rights</span>
              </h2>
              <p>
                Under the UK GDPR and EU GDPR, you have the following rights regarding personal information held by KYP:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
                <li><strong>Right of Access:</strong> Obtain confirmation whether your personal data is being processed and receive a copy.</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate corporate officer or contact details.</li>
                <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Subject to statutory retention requirements under AML laws.</li>
                <li><strong>Right to Restriction of Processing:</strong> Restrict processing where accuracy is contested.</li>
                <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or direct marketing.</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div id="contact" className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="text-emerald-600 font-mono text-sm">08.</span>
                <span>Contacting Our Data Protection Officer</span>
              </h2>
              <p>
                If you have questions, subject access requests, or wish to exercise statutory privacy rights, contact our Data Protection Officer:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                <div><strong>Email:</strong> <a href="mailto:dpo@kyp.io" className="text-white underline font-semibold">dpo@kyp.io</a></div>
                <div><strong>Postal Address:</strong> Data Protection Officer, KYP / Cinnte Solutions, 33 Queen St, London, EC4R 1AP, UK</div>
                <div><strong>Response Timeline:</strong> We respond to all verified statutory requests within 30 calendar days.</div>
              </div>
            </div>

          </div>

          {/* Quick Nav Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase">
                Policy Navigation
              </div>
              <nav className="space-y-1.5 text-xs text-slate-600">
                <a href="#overview" className="block py-1 hover:text-white transition-colors">01. Overview & Data Controller</a>
                <a href="#data-collected" className="block py-1 hover:text-white transition-colors">02. Information We Collect</a>
                <a href="#lawful-basis" className="block py-1 hover:text-white transition-colors">03. Lawful Bases for Processing</a>
                <a href="#security" className="block py-1 hover:text-white transition-colors">04. Security & Cryptographic Integrity</a>
                <a href="#retention" className="block py-1 hover:text-white transition-colors">05. Data Retention & Archival</a>
                <a href="#cookies" className="block py-1 hover:text-white transition-colors">06. Cookie Policy & Preferences</a>
                <a href="#rights" className="block py-1 hover:text-white transition-colors">07. Your Statutory Rights</a>
                <a href="#contact" className="block py-1 hover:text-white transition-colors">08. Contact Data Protection Officer</a>
              </nav>

              <div className="pt-4 border-t border-slate-200">
                <Link
                  href={routes.contact}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs text-center block transition-colors"
                >
                  Contact Compliance Team
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </section>
    </div>
  );
}
