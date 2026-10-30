"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  AlertTriangle,
  ArrowUpRight,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Eye,
  Download,
  Building,
  Check,
  ExternalLink,
  ChevronRight,
  X,
  FileCheck2,
} from "lucide-react";

export interface MerchantRecord {
  id: string;
  name: string;
  sector: string;
  country: string;
  ubo: string;
  riskScore: number;
  status: "Compliant" | "Requires Review" | "High Alert";
  lastCheck: string;
  alertType?: string;
  registryNum: string;
  bramVirpStatus: "Clear" | "Under Review";
}

const ALL_MERCHANTS: MerchantRecord[] = [
  {
    id: "M-4891",
    name: "Apex Velocity Payments Ltd",
    sector: "Fintech / PSP",
    country: "United Kingdom",
    ubo: "Marcus Vance (38.5%)",
    riskScore: 24,
    status: "Compliant",
    lastCheck: "4 mins ago",
    registryNum: "UK-09823411",
    bramVirpStatus: "Clear",
  },
  {
    id: "M-3829",
    name: "Aura Gaming Services Ltd",
    sector: "iGaming Platform",
    country: "Malta",
    ubo: "Elena Rostova (26.0%)",
    riskScore: 68,
    status: "Requires Review",
    lastCheck: "12 mins ago",
    alertType: "Affiliate URL Redirect Warning (Card Scheme)",
    registryNum: "MT-C94812",
    bramVirpStatus: "Under Review",
  },
  {
    id: "M-5902",
    name: "Solstice Cloud Solutions",
    sector: "SaaS / B2B",
    country: "Ireland",
    ubo: "Sean O'Connor (51.0%)",
    riskScore: 12,
    status: "Compliant",
    lastCheck: "25 mins ago",
    registryNum: "IE-589210",
    bramVirpStatus: "Clear",
  },
  {
    id: "M-1029",
    name: "Kronos Logistics Global",
    sector: "Marketplace Freight",
    country: "Cyprus",
    ubo: "Nikolai Voronov (30.0%)",
    riskScore: 82,
    status: "High Alert",
    lastCheck: "38 mins ago",
    alertType: "Sanctioned Entity Co-Directorship Triggered",
    registryNum: "CY-HE381920",
    bramVirpStatus: "Under Review",
  },
  {
    id: "M-7714",
    name: "OmniCart Digital Store",
    sector: "E-Commerce",
    country: "United Kingdom",
    ubo: "David Thorne (100%)",
    riskScore: 19,
    status: "Compliant",
    lastCheck: "55 mins ago",
    registryNum: "UK-12849102",
    bramVirpStatus: "Clear",
  },
];

export default function DashboardMockup() {
  const [activeTab, setActiveTab] = useState<"all" | "review" | "compliant">("all");
  const [selectedMerchant, setSelectedMerchant] = useState<MerchantRecord | null>(null);
  const [search, setSearch] = useState("");

  const filtered = ALL_MERCHANTS.filter((m) => {
    if (activeTab === "review") {
      if (m.status === "Compliant") return false;
    } else if (activeTab === "compliant") {
      if (m.status !== "Compliant") return false;
    }
    if (search && !m.name.toLowerCase().includes(search.toLowerCase()) && !m.country.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    return true;
  });

  const reviewCount = ALL_MERCHANTS.filter((m) => m.status !== "Compliant").length;
  const compliantCount = ALL_MERCHANTS.filter((m) => m.status === "Compliant").length;

  return (
    <div className="w-full bg-black/95 rounded-2xl border border-kyp-teal/30 overflow-hidden shadow-2xl kyp-grid-pattern relative">
      {/* Top Console Bar */}
      <div className="p-4 sm:p-6 border-b border-kyp-teal/15 bg-kyp-navy-surface/90 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-kyp-lime animate-ping" />
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Portfolio Risk Intelligence Command
            </h3>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-kyp-lime/10 text-kyp-lime border border-kyp-lime/30 font-semibold">
              Live Feed
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Real-time entity health, continuous monitoring alerts &amp; audit trails.
          </p>
        </div>

        {/* Filter Tabs with Clear Active Feedback */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/80 border border-kyp-teal/25 text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
              activeTab === "all"
                ? "bg-kyp-lime text-black font-bold shadow-lime-glow"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <span>All Records</span>
            <span className={`px-1.5 py-0.2 rounded text-[10px] ${activeTab === "all" ? "bg-black/20 text-black" : "bg-kyp-navy text-kyp-teal"}`}>
              {ALL_MERCHANTS.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("review")}
            className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
              activeTab === "review"
                ? "bg-yellow-400 text-black font-bold shadow-md"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <span>Requires Review</span>
            <span className={`px-1.5 py-0.2 rounded text-[10px] ${activeTab === "review" ? "bg-black/20 text-black" : "bg-yellow-400/20 text-yellow-400"}`}>
              {reviewCount}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("compliant")}
            className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
              activeTab === "compliant"
                ? "bg-kyp-teal text-black font-bold shadow-md"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <span>Compliant</span>
            <span className={`px-1.5 py-0.2 rounded text-[10px] ${activeTab === "compliant" ? "bg-black/20 text-black" : "bg-kyp-teal/20 text-kyp-teal"}`}>
              {compliantCount}
            </span>
          </button>
        </div>
      </div>

      {/* KPI Ribbon */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-4 sm:p-5 bg-kyp-black/60 border-b border-kyp-teal/15 text-xs">
        <div className="p-3 rounded-xl bg-kyp-navy-surface/80 border border-kyp-teal/20">
          <div className="text-[10px] font-mono text-gray-400 uppercase">Monitored Portfolio</div>
          <div className="text-lg font-bold text-white mt-0.5">1,248 Entities</div>
          <div className="text-[10px] text-kyp-lime font-mono mt-0.5">100% Continuous Coverage</div>
        </div>
        <div className="p-3 rounded-xl bg-kyp-navy-surface/80 border border-kyp-teal/20">
          <div className="text-[10px] font-mono text-gray-400 uppercase">Active Risk Flags</div>
          <div className="text-lg font-bold text-yellow-400 mt-0.5">14 Pending Review</div>
          <div className="text-[10px] text-gray-400 font-mono mt-0.5">Triage Time: &lt;15 Mins</div>
        </div>
        <div className="p-3 rounded-xl bg-kyp-navy-surface/80 border border-kyp-teal/20">
          <div className="text-[10px] font-mono text-gray-400 uppercase">WebCompli Status</div>
          <div className="text-lg font-bold text-kyp-mint mt-0.5">Zero BRAM Fines</div>
          <div className="text-[10px] text-kyp-lime font-mono mt-0.5">Automated Sweep: Pass</div>
        </div>
        <div className="p-3 rounded-xl bg-kyp-navy-surface/80 border border-kyp-teal/20">
          <div className="text-[10px] font-mono text-gray-400 uppercase">Audit Dossiers</div>
          <div className="text-lg font-bold text-kyp-teal mt-0.5">60-Sec Generator</div>
          <div className="text-[10px] text-kyp-mint font-mono mt-0.5">FCA &amp; Scheme Compliant</div>
        </div>
      </div>

      {/* Table Interface with Guaranteed Full Width and Scroll Safety */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse min-w-[760px]">
          <thead>
            <tr className="border-b border-kyp-teal/20 bg-black/80 text-kyp-teal font-mono uppercase text-[10px] tracking-wider">
              <th className="py-3 px-4 sm:px-6">Merchant / Partner</th>
              <th className="py-3 px-4">Sector</th>
              <th className="py-3 px-4">Jurisdiction</th>
              <th className="py-3 px-4">Key Controller / UBO</th>
              <th className="py-3 px-4">Risk Index</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Audit Dossier</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-kyp-navy-light/20">
            {filtered.map((m) => {
              const isAlert = m.status === "High Alert";
              const isReview = m.status === "Requires Review";
              const isCompliant = m.status === "Compliant";

              return (
                <tr
                  key={m.id}
                  onClick={() => setSelectedMerchant(m)}
                  className="hover:bg-kyp-navy/40 transition-colors cursor-pointer group"
                >
                  <td className="py-3.5 px-4 sm:px-6">
                    <div className="font-semibold text-white group-hover:text-kyp-lime transition-colors">
                      {m.name}
                    </div>
                    <div className="text-[10px] font-mono text-gray-400">
                      ID: {m.id} &bull; Reg: {m.registryNum} &bull; Checked {m.lastCheck}
                    </div>
                    {m.alertType && (
                      <div className="text-[10px] text-red-400 font-mono mt-0.5 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 text-red-400" />
                        <span>{m.alertType}</span>
                      </div>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-gray-300">{m.sector}</td>
                  <td className="py-3.5 px-4 text-gray-300">{m.country}</td>
                  <td className="py-3.5 px-4 font-mono text-gray-400">{m.ubo}</td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-white">{m.riskScore}</span>
                      <div className="w-16 bg-gray-800 h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            m.riskScore < 30 ? "bg-kyp-lime" : m.riskScore < 70 ? "bg-yellow-400" : "bg-red-500"
                          }`}
                          style={{ width: `${m.riskScore}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border ${
                        isCompliant
                          ? "bg-kyp-lime/10 text-kyp-lime border-kyp-lime/30"
                          : isReview
                          ? "bg-yellow-400/10 text-yellow-400 border-yellow-400/30"
                          : "bg-red-500/10 text-red-400 border-red-500/30"
                      }`}
                    >
                      {isCompliant ? (
                        <Check className="w-3 h-3 text-kyp-lime" />
                      ) : (
                        <AlertTriangle className="w-3 h-3 text-yellow-400" />
                      )}
                      <span>{m.status.toUpperCase()}</span>
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedMerchant(m);
                      }}
                      className="px-2.5 py-1 rounded-lg bg-kyp-navy-surface border border-kyp-teal/30 hover:border-kyp-lime hover:text-kyp-lime text-[11px] font-mono text-kyp-mint transition-all"
                    >
                      Dossier &rarr;
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer Info Strip */}
      <div className="p-3 bg-black/90 border-t border-kyp-teal/15 flex items-center justify-between text-[11px] font-mono text-gray-400 px-4 sm:px-6">
        <div>Showing {filtered.length} of {ALL_MERCHANTS.length} merchant records &bull; Click any row for dossier view</div>
        <div className="text-kyp-teal">Filter: {activeTab.toUpperCase()}</div>
      </div>

      {/* Modal / Slide-over Dossier Inspector */}
      {selectedMerchant && (
        <div className="absolute inset-0 z-30 bg-black/90 backdrop-blur-md p-6 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-kyp-teal/20 pb-4">
              <div>
                <span className="text-xs font-mono text-kyp-lime uppercase font-semibold">
                  Entity Compliance Dossier #{selectedMerchant.id}
                </span>
                <h4 className="text-xl font-bold text-white mt-1">{selectedMerchant.name}</h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedMerchant(null)}
                className="p-2 rounded-lg bg-kyp-navy-surface border border-kyp-teal/20 text-gray-300 hover:text-white hover:border-kyp-lime"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-3 rounded-lg bg-kyp-navy-surface border border-kyp-teal/20">
                <span className="text-gray-400">Jurisdiction:</span>
                <p className="text-white font-semibold mt-1">{selectedMerchant.country}</p>
              </div>
              <div className="p-3 rounded-lg bg-kyp-navy-surface border border-kyp-teal/20">
                <span className="text-gray-400">Registry File:</span>
                <p className="text-white font-semibold mt-1">{selectedMerchant.registryNum}</p>
              </div>
              <div className="p-3 rounded-lg bg-kyp-navy-surface border border-kyp-teal/20">
                <span className="text-gray-400">Risk Index:</span>
                <p className={`font-semibold mt-1 ${selectedMerchant.riskScore < 30 ? "text-kyp-lime" : selectedMerchant.riskScore < 70 ? "text-yellow-400" : "text-red-400"}`}>
                  {selectedMerchant.riskScore}/100 ({selectedMerchant.status})
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-kyp-navy/60 border border-kyp-teal/25 space-y-2 text-xs">
              <div className="font-semibold text-kyp-mint flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4 text-kyp-lime" />
                Verified Ownership &amp; Surveillance Checks
              </div>
              <p className="text-gray-300">
                Key Controller: <strong className="text-white">{selectedMerchant.ubo}</strong>
              </p>
              <p className="text-gray-300">
                WebCompli Status: <strong className="text-kyp-lime">{selectedMerchant.bramVirpStatus}</strong> &bull; Zero BRAM / VIRP scheme violations detected.
              </p>
              {selectedMerchant.alertType && (
                <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/30 text-red-200">
                  <strong className="text-red-400">Active Alert Flag:</strong> {selectedMerchant.alertType}. Escalate to compliance officer for enhanced due diligence review.
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-kyp-teal/20 flex flex-wrap items-center justify-between gap-3">
            <span className="text-[11px] font-mono text-gray-400">
              SHA-256 Audit Seal: 8f9b2d...c3a4 &bull; FCA Defensible
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedMerchant(null)}
                className="px-4 py-2 rounded-lg bg-kyp-navy-surface border border-kyp-teal/30 text-xs font-mono text-white hover:border-kyp-lime"
              >
                Close Inspector
              </button>
              <button
                type="button"
                onClick={() => alert(`Exporting 60-Second Audit Dossier for ${selectedMerchant.name}...`)}
                className="kyp-btn-primary px-4 py-2 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Audit Dossier (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
