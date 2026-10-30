"use client";

import React, { useState } from "react";
import { ShieldCheck, AlertTriangle, ArrowUpRight, Search, Filter, CheckCircle, Clock, Eye, Download, Building } from "lucide-react";

interface MerchantRecord {
  id: string;
  name: string;
  sector: string;
  country: string;
  ubo: string;
  riskScore: number;
  status: "Compliant" | "Requires Review" | "High Alert";
  lastCheck: string;
  alertType?: string;
}

const SAMPLE_MERCHANTS: MerchantRecord[] = [
  {
    id: "M-4891",
    name: "Apex Velocity Payments Ltd",
    sector: "Fintech / PSP",
    country: "United Kingdom",
    ubo: "Marcus Vance (38.5%)",
    riskScore: 24,
    status: "Compliant",
    lastCheck: "6 mins ago",
  },
  {
    id: "M-3829",
    name: "Aura Gaming Services Ltd",
    sector: "iGaming Platform",
    country: "Malta",
    ubo: "Elena Rostova (26.0%)",
    riskScore: 68,
    status: "Requires Review",
    lastCheck: "14 mins ago",
    alertType: "Affiliate URL Redirect Warning",
  },
  {
    id: "M-5902",
    name: "Solstice Cloud Solutions",
    sector: "SaaS / B2B",
    country: "Ireland",
    ubo: "Sean O'Connor (51.0%)",
    riskScore: 12,
    status: "Compliant",
    lastCheck: "28 mins ago",
  },
  {
    id: "M-1029",
    name: "Kronos Logistics Global",
    sector: "Marketplace Freight",
    country: "Cyprus",
    ubo: "Nikolai Voronov (30.0%)",
    riskScore: 82,
    status: "High Alert",
    lastCheck: "42 mins ago",
    alertType: "Sanctioned Entity Co-Directorship",
  },
  {
    id: "M-7714",
    name: "OmniCart Digital Store",
    sector: "E-Commerce",
    country: "United Kingdom",
    ubo: "David Thorne (100%)",
    riskScore: 19,
    status: "Compliant",
    lastCheck: "1 hour ago",
  },
];

export default function DashboardMockup() {
  const [selectedTab, setSelectedTab] = useState<"all" | "review" | "compliant">("all");
  const [search, setSearch] = useState("");

  const filtered = SAMPLE_MERCHANTS.filter((m) => {
    if (selectedTab === "review" && m.status === "Compliant") return false;
    if (selectedTab === "compliant" && m.status !== "Compliant") return false;
    if (search && !m.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="w-full bg-black/95 rounded-2xl border border-kyp-teal/25 overflow-hidden shadow-2xl kyp-grid-pattern">
      {/* Top Console Bar */}
      <div className="p-4 sm:p-6 border-b border-kyp-teal/15 bg-kyp-navy-surface/80 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-kyp-lime animate-pulse" />
            <h3 className="text-base sm:text-lg font-bold text-white">
              Portfolio Risk Intelligence Command
            </h3>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-kyp-lime/10 text-kyp-lime border border-kyp-lime/30">
              Live Feed
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-0.5">
            Real-time entity health, continuous monitoring alerts & audit trails.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-2 text-xs">
          <div className="flex items-center rounded-lg bg-kyp-black border border-kyp-teal/20 p-0.5">
            <button
              onClick={() => setSelectedTab("all")}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                selectedTab === "all" ? "bg-kyp-navy text-white font-medium" : "text-gray-400 hover:text-white"
              }`}
            >
              All Records ({SAMPLE_MERCHANTS.length})
            </button>
            <button
              onClick={() => setSelectedTab("review")}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                selectedTab === "review" ? "bg-kyp-navy text-yellow-400 font-medium" : "text-gray-400 hover:text-white"
              }`}
            >
              Requires Review (2)
            </button>
            <button
              onClick={() => setSelectedTab("compliant")}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                selectedTab === "compliant" ? "bg-kyp-navy text-kyp-lime font-medium" : "text-gray-400 hover:text-white"
              }`}
            >
              Compliant (3)
            </button>
          </div>
        </div>
      </div>

      {/* KPI Ribbon */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 bg-kyp-black/40 border-b border-kyp-teal/15">
        <div className="p-3.5 rounded-xl bg-kyp-navy-surface border border-kyp-teal/15">
          <div className="text-[11px] font-mono text-gray-400 uppercase">Monitored Portfolio</div>
          <div className="text-xl font-bold text-white mt-1">1,248 Entities</div>
          <div className="text-[10px] text-kyp-lime font-mono mt-0.5">100% Continuous Coverage</div>
        </div>
        <div className="p-3.5 rounded-xl bg-kyp-navy-surface border border-kyp-teal/15">
          <div className="text-[11px] font-mono text-gray-400 uppercase">Active Risk Flags</div>
          <div className="text-xl font-bold text-yellow-400 mt-1">14 Pending Review</div>
          <div className="text-[10px] text-gray-400 font-mono mt-0.5">Triage Time: &lt;15 Mins</div>
        </div>
        <div className="p-3.5 rounded-xl bg-kyp-navy-surface border border-kyp-teal/15">
          <div className="text-[11px] font-mono text-gray-400 uppercase">WebCompli Status</div>
          <div className="text-xl font-bold text-kyp-mint mt-1">Zero BRAM Fines</div>
          <div className="text-[10px] text-kyp-lime font-mono mt-0.5">Automated Sweep: Pass</div>
        </div>
        <div className="p-3.5 rounded-xl bg-kyp-navy-surface border border-kyp-teal/15">
          <div className="text-[11px] font-mono text-gray-400 uppercase">Audit Dossiers</div>
          <div className="text-xl font-bold text-kyp-teal mt-1">60-Sec Generator</div>
          <div className="text-[10px] text-kyp-mint font-mono mt-0.5">FCA & Scheme Compliant</div>
        </div>
      </div>

      {/* Table Interface */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-kyp-teal/20 bg-black/60 text-kyp-teal font-mono uppercase text-[10px] tracking-wider">
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
            {filtered.map((m) => (
              <tr key={m.id} className="hover:bg-kyp-navy/30 transition-colors group">
                <td className="py-3.5 px-4 sm:px-6">
                  <div className="font-semibold text-white group-hover:text-kyp-mint transition-colors">
                    {m.name}
                  </div>
                  <div className="text-[10px] font-mono text-gray-400">
                    ID: {m.id} • Checked {m.lastCheck}
                  </div>
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
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase ${
                      m.status === "Compliant"
                        ? "bg-kyp-lime/10 text-kyp-lime border border-kyp-lime/30"
                        : m.status === "Requires Review"
                        ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30"
                        : "bg-red-500/10 text-red-400 border border-red-500/30"
                    }`}
                  >
                    {m.status === "Compliant" ? (
                      <CheckCircle className="w-3 h-3 text-kyp-lime" />
                    ) : (
                      <AlertTriangle className="w-3 h-3" />
                    )}
                    {m.status}
                  </span>
                  {m.alertType && (
                    <div className="text-[10px] text-red-400 mt-1 font-mono">
                      {m.alertType}
                    </div>
                  )}
                </td>
                <td className="py-3.5 px-4 text-right">
                  <button className="inline-flex items-center gap-1 text-[11px] font-mono text-kyp-teal hover:text-kyp-lime transition-colors p-1.5 rounded bg-kyp-black border border-kyp-teal/20">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Dossier</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Notice */}
      <div className="p-3 bg-black/80 border-t border-kyp-teal/15 text-center text-[10px] font-mono text-gray-500">
        Illustrative mock records showing KYP multi-dimensional risk index and automated compliance feed.
      </div>
    </div>
  );
}
