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
  Plus,
  Edit3,
  Trash2,
  Save,
  RotateCcw,
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

const DEFAULT_MERCHANTS: MerchantRecord[] = [
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
  const [merchants, setMerchants] = useState<MerchantRecord[]>(DEFAULT_MERCHANTS);
  const [activeTab, setActiveTab] = useState<"all" | "review" | "compliant">("all");
  const [selectedMerchant, setSelectedMerchant] = useState<MerchantRecord | null>(null);
  const [search, setSearch] = useState("");
  
  // Edit mode state inside dossier
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<Partial<MerchantRecord>>({});
  
  // Add new merchant modal state
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newForm, setNewForm] = useState<Partial<MerchantRecord>>({
    name: "",
    sector: "Fintech / PSP",
    country: "United Kingdom",
    ubo: "",
    riskScore: 25,
    status: "Compliant",
    registryNum: "REG-" + Math.floor(100000 + Math.random() * 900000),
    bramVirpStatus: "Clear",
  });

  // Notification feedback
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const filtered = merchants.filter((m) => {
    if (activeTab === "review") {
      if (m.status === "Compliant") return false;
    } else if (activeTab === "compliant") {
      if (m.status !== "Compliant") return false;
    }
    if (
      search &&
      !m.name.toLowerCase().includes(search.toLowerCase()) &&
      !m.country.toLowerCase().includes(search.toLowerCase()) &&
      !m.sector.toLowerCase().includes(search.toLowerCase()) &&
      !m.ubo.toLowerCase().includes(search.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const reviewCount = merchants.filter((m) => m.status !== "Compliant").length;
  const compliantCount = merchants.filter((m) => m.status === "Compliant").length;

  const handleOpenDossier = (m: MerchantRecord) => {
    setSelectedMerchant(m);
    setEditForm({ ...m });
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    if (!selectedMerchant) return;
    const updated = merchants.map((m) =>
      m.id === selectedMerchant.id ? ({ ...m, ...editForm } as MerchantRecord) : m
    );
    setMerchants(updated);
    setSelectedMerchant({ ...selectedMerchant, ...editForm } as MerchantRecord);
    setIsEditing(false);
    showToast(`✓ Updated record for ${editForm.name || selectedMerchant.name}`);
  };

  const handleDeleteMerchant = (id: string) => {
    setMerchants((prev) => prev.filter((m) => m.id !== id));
    setSelectedMerchant(null);
    showToast("✓ Record removed from monitored portfolio");
  };

  const handleAddNewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newForm.name) return;
    const newRecord: MerchantRecord = {
      id: `M-${Math.floor(1000 + Math.random() * 9000)}`,
      name: newForm.name,
      sector: newForm.sector || "Fintech",
      country: newForm.country || "United Kingdom",
      ubo: newForm.ubo || "Pending Disclosure",
      riskScore: Number(newForm.riskScore) || 20,
      status: (newForm.status as any) || "Compliant",
      lastCheck: "Just now",
      registryNum: newForm.registryNum || "UK-" + Math.floor(10000000 + Math.random() * 90000000),
      bramVirpStatus: newForm.bramVirpStatus || "Clear",
      alertType: newForm.alertType,
    };
    setMerchants([newRecord, ...merchants]);
    setIsAddingNew(false);
    setNewForm({
      name: "",
      sector: "Fintech / PSP",
      country: "United Kingdom",
      ubo: "",
      riskScore: 25,
      status: "Compliant",
      registryNum: "REG-" + Math.floor(100000 + Math.random() * 900000),
      bramVirpStatus: "Clear",
    });
    showToast(`✓ Added ${newRecord.name} to portfolio`);
  };

  return (
    <div className="w-full bg-black/95 rounded-2xl border border-[#033653] overflow-hidden shadow-2xl kyp-grid-pattern relative">
      {/* Toast Alert */}
      {toastMsg && (
        <div className="absolute top-4 right-4 z-50 bg-kyp-lime text-black px-4 py-2 rounded-xl font-mono text-xs font-bold shadow-lime-glow flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-black" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Top Console Bar */}
      <div className="p-4 sm:p-6 border-b border-[#033653] bg-kyp-navy-surface/90 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-kyp-lime animate-ping" />
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Portfolio Risk Intelligence Command
            </h3>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-kyp-lime/10 text-kyp-lime border border-kyp-lime/30 font-semibold">
              Live Feed • Editable
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Real-time entity health, continuous monitoring alerts &amp; editable audit trails. Click any record to inspect or edit.
          </p>
        </div>

        {/* Action Controls: Search, Tabs, Add */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Live Search Bar */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filter company, country, UBO..."
              className="pl-8 pr-3 py-1.5 rounded-xl bg-black/80 border border-[#033653] text-xs font-mono text-white placeholder-gray-500 focus:outline-none focus:border-kyp-lime transition-colors w-48 sm:w-56"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs"
              >
                &times;
              </button>
            )}
          </div>

          {/* Filter Tabs with Clear Active Feedback */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-black/80 border border-[#033653] text-xs font-mono">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeTab === "all"
                  ? "bg-kyp-lime text-black font-bold shadow-lime-glow"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>All Records</span>
              <span className={`px-1.5 py-0.2 rounded text-[10px] ${activeTab === "all" ? "bg-black/20 text-black font-bold" : "bg-kyp-navy text-[#66cc00]"}`}>
                {merchants.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("review")}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeTab === "review"
                  ? "bg-yellow-400 text-black font-bold shadow-md"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>Requires Review</span>
              <span className={`px-1.5 py-0.2 rounded text-[10px] ${activeTab === "review" ? "bg-black/20 text-black font-bold" : "bg-yellow-400/20 text-yellow-400"}`}>
                {reviewCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("compliant")}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeTab === "compliant"
                  ? "bg-[#66cc00] text-black font-bold shadow-md"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>Compliant</span>
              <span className={`px-1.5 py-0.2 rounded text-[10px] ${activeTab === "compliant" ? "bg-black/20 text-black font-bold" : "bg-[#66cc00]/15 text-[#66cc00]"}`}>
                {compliantCount}
              </span>
            </button>
          </div>

          {/* Add New Entity Button */}
          <button
            type="button"
            onClick={() => setIsAddingNew(true)}
            className="px-3 py-1.5 rounded-xl bg-kyp-lime/10 border border-kyp-lime/40 text-kyp-lime hover:bg-kyp-lime hover:text-black transition-all text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Entity</span>
          </button>
        </div>
      </div>

      {/* KPI Ribbon */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-4 sm:p-5 bg-kyp-black/60 border-b border-[#033653] text-xs">
        <div className="p-3 rounded-xl bg-kyp-navy-surface/80 border border-[#033653]">
          <div className="text-[10px] font-mono text-gray-400 uppercase">Monitored Portfolio</div>
          <div className="text-lg font-bold text-white mt-0.5">{1243 + merchants.length} Entities</div>
          <div className="text-[10px] text-kyp-lime font-mono mt-0.5">100% Continuous Coverage</div>
        </div>
        <div className="p-3 rounded-xl bg-kyp-navy-surface/80 border border-[#033653]">
          <div className="text-[10px] font-mono text-gray-400 uppercase">Active Risk Flags</div>
          <div className="text-lg font-bold text-yellow-400 mt-0.5">{reviewCount} In Active Scope</div>
          <div className="text-[10px] text-gray-400 font-mono mt-0.5">Triage Time: &lt;15 Mins</div>
        </div>
        <div className="p-3 rounded-xl bg-kyp-navy-surface/80 border border-[#033653]">
          <div className="text-[10px] font-mono text-gray-400 uppercase">WebCompli Status</div>
          <div className="text-lg font-bold text-kyp-mint mt-0.5">Zero BRAM Fines</div>
          <div className="text-[10px] text-kyp-lime font-mono mt-0.5">Automated Sweep: Pass</div>
        </div>
        <div className="p-3 rounded-xl bg-kyp-navy-surface/80 border border-[#033653]">
          <div className="text-[10px] font-mono text-gray-400 uppercase">Audit Dossiers</div>
          <div className="text-lg font-bold text-[#66cc00] mt-0.5">60-Sec Generator</div>
          <div className="text-[10px] text-kyp-mint font-mono mt-0.5">FCA &amp; Scheme Compliant</div>
        </div>
      </div>

      {/* Table Interface with Guaranteed Full Width and Scroll Safety */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse min-w-[760px]">
          <thead>
            <tr className="border-b border-[#033653] bg-black/80 text-[#66cc00] font-mono uppercase text-[10px] tracking-wider">
              <th className="py-3 px-4 sm:px-6">Merchant / Partner</th>
              <th className="py-3 px-4">Sector</th>
              <th className="py-3 px-4">Jurisdiction</th>
              <th className="py-3 px-4">Key Controller / UBO</th>
              <th className="py-3 px-4">Risk Index</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-kyp-navy-light/20">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-10 text-gray-400 font-mono">
                  No matching merchant records found for &quot;{search}&quot;.
                </td>
              </tr>
            ) : (
              filtered.map((m) => {
                const isAlert = m.status === "High Alert";
                const isReview = m.status === "Requires Review";
                const isCompliant = m.status === "Compliant";

                return (
                  <tr
                    key={m.id}
                    onClick={() => handleOpenDossier(m)}
                    className="hover:bg-kyp-navy/40 transition-colors cursor-pointer group"
                  >
                    <td className="py-3.5 px-4 sm:px-6">
                      <div className="font-semibold text-white group-hover:text-kyp-lime transition-colors flex items-center gap-2">
                        <span>{m.name}</span>
                        <Edit3 className="w-3 h-3 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                            style={{ width: `${Math.min(100, m.riskScore)}%` }}
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
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenDossier(m);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-kyp-navy-surface border border-[#033653] hover:border-kyp-lime hover:text-kyp-lime text-[11px] font-mono text-kyp-mint transition-all cursor-pointer"
                        >
                          Dossier &rarr;
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Footer Info Strip */}
      <div className="p-3 bg-black/90 border-t border-[#033653] flex flex-wrap items-center justify-between text-[11px] font-mono text-gray-400 px-4 sm:px-6 gap-2">
        <div>
          Showing {filtered.length} of {merchants.length} merchant records &bull; Click any record or Dossier button to view &amp; edit
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              setMerchants(DEFAULT_MERCHANTS);
              showToast("✓ Reset portfolio to default dataset");
            }}
            className="text-gray-400 hover:text-white flex items-center gap-1 cursor-pointer"
            title="Reset data"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Dataset</span>
          </button>
          <div className="text-[#66cc00]">Filter: {activeTab.toUpperCase()}</div>
        </div>
      </div>

      {/* Modal / Slide-over Dossier Inspector with FULL EDITABILITY */}
      {selectedMerchant && (
        <div className="absolute inset-0 z-40 bg-black/95 backdrop-blur-md p-4 sm:p-6 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4 max-w-4xl mx-auto w-full">
            <div className="flex items-center justify-between border-b border-[#033653] pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-kyp-lime uppercase font-semibold">
                    Entity Compliance Dossier #{selectedMerchant.id}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#66cc00]/15 text-[#66cc00] border border-[#033653]">
                    {isEditing ? "EDITING MODE" : "VIEW MODE"}
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.name || ""}
                      onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                      className="bg-black/80 border border-kyp-lime rounded px-2 py-1 text-white text-lg font-bold w-full focus:outline-none"
                    />
                  ) : (
                    selectedMerchant.name
                  )}
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(!isEditing)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer ${
                    isEditing
                      ? "bg-yellow-400 text-black border-yellow-400"
                      : "bg-kyp-navy-surface border-[#033653] text-kyp-mint hover:border-kyp-lime"
                  }`}
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>{isEditing ? "Cancel Edit" : "Edit Details"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedMerchant(null)}
                  className="p-2 rounded-lg bg-kyp-navy-surface border border-[#033653] text-gray-300 hover:text-white hover:border-kyp-lime cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Editable Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-3 rounded-lg bg-kyp-navy-surface border border-[#033653]">
                <span className="text-gray-400">Jurisdiction / Country:</span>
                {isEditing ? (
                  <input
                    type="text"
                    value={editForm.country || ""}
                    onChange={(e) => setEditForm({ ...editForm, country: e.target.value })}
                    className="w-full mt-1 bg-black/80 border border-[#033653] rounded px-2 py-1 text-white text-xs focus:outline-none focus:border-kyp-lime"
                  />
                ) : (
                  <p className="text-white font-semibold mt-1">{selectedMerchant.country}</p>
                )}
              </div>

              <div className="p-3 rounded-lg bg-kyp-navy-surface border border-[#033653]">
                <span className="text-gray-400">Sector / Category:</span>
                {isEditing ? (
                  <input
                    type="text"
                    value={editForm.sector || ""}
                    onChange={(e) => setEditForm({ ...editForm, sector: e.target.value })}
                    className="w-full mt-1 bg-black/80 border border-[#033653] rounded px-2 py-1 text-white text-xs focus:outline-none focus:border-kyp-lime"
                  />
                ) : (
                  <p className="text-white font-semibold mt-1">{selectedMerchant.sector}</p>
                )}
              </div>

              <div className="p-3 rounded-lg bg-kyp-navy-surface border border-[#033653]">
                <span className="text-gray-400">Risk Score &amp; Status:</span>
                {isEditing ? (
                  <div className="mt-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={editForm.riskScore ?? selectedMerchant.riskScore}
                        onChange={(e) => setEditForm({ ...editForm, riskScore: Number(e.target.value) })}
                        className="w-full"
                      />
                      <span className="text-white font-bold">{editForm.riskScore}</span>
                    </div>
                    <select
                      value={editForm.status || selectedMerchant.status}
                      onChange={(e) => setEditForm({ ...editForm, status: e.target.value as any })}
                      className="w-full bg-black/80 border border-[#033653] rounded px-2 py-1 text-white text-xs focus:outline-none focus:border-kyp-lime"
                    >
                      <option value="Compliant">Compliant</option>
                      <option value="Requires Review">Requires Review</option>
                      <option value="High Alert">High Alert</option>
                    </select>
                  </div>
                ) : (
                  <p className={`font-semibold mt-1 ${selectedMerchant.riskScore < 30 ? "text-kyp-lime" : selectedMerchant.riskScore < 70 ? "text-yellow-400" : "text-red-400"}`}>
                    {selectedMerchant.riskScore}/100 ({selectedMerchant.status})
                  </p>
                )}
              </div>
            </div>

            {/* Verification Details */}
            <div className="p-4 rounded-xl bg-kyp-navy/60 border border-[#033653] space-y-3 text-xs">
              <div className="font-semibold text-kyp-mint flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4 text-kyp-lime" />
                  <span>Verified Ownership &amp; Surveillance Checks</span>
                </div>
                <span className="text-[10px] font-mono text-gray-400">Registration: {selectedMerchant.registryNum}</span>
              </div>

              <div>
                <span className="text-gray-400 block mb-1">Key Controller / Ultimate Beneficial Owner:</span>
                {isEditing ? (
                  <input
                    type="text"
                    value={editForm.ubo || ""}
                    onChange={(e) => setEditForm({ ...editForm, ubo: e.target.value })}
                    className="w-full bg-black/80 border border-[#033653] rounded px-2 py-1 text-white text-xs focus:outline-none focus:border-kyp-lime"
                  />
                ) : (
                  <p className="text-white font-semibold">{selectedMerchant.ubo}</p>
                )}
              </div>

              <div>
                <span className="text-gray-400 block mb-1">Alert or Compliance Note:</span>
                {isEditing ? (
                  <textarea
                    rows={2}
                    value={editForm.alertType || ""}
                    onChange={(e) => setEditForm({ ...editForm, alertType: e.target.value })}
                    placeholder="Describe any active scheme flags, sanctions note, or leave empty if clear..."
                    className="w-full bg-black/80 border border-[#033653] rounded px-2 py-1 text-white text-xs focus:outline-none focus:border-kyp-lime"
                  />
                ) : selectedMerchant.alertType ? (
                  <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/30 text-red-200">
                    <strong className="text-red-400">Active Alert Flag:</strong> {selectedMerchant.alertType}
                  </div>
                ) : (
                  <div className="p-2.5 rounded-lg bg-kyp-lime/10 border border-kyp-lime/20 text-kyp-lime text-[11px] font-mono">
                    ✓ Clean dossier. Zero card scheme, BRAM, or VIRP violations detected.
                  </div>
                )}
              </div>
            </div>

            {/* Quick Status Modifiers */}
            {isEditing && (
              <div className="flex flex-wrap items-center gap-2 p-3 rounded-xl bg-black/60 border border-[#033653] text-xs font-mono">
                <span className="text-gray-400">Quick Status Presets:</span>
                <button
                  type="button"
                  onClick={() => setEditForm({ ...editForm, status: "Compliant", riskScore: 15, alertType: "" })}
                  className="px-2 py-1 rounded bg-kyp-lime/10 text-kyp-lime border border-kyp-lime/30 hover:bg-kyp-lime hover:text-black cursor-pointer"
                >
                  Mark Compliant (Score 15)
                </button>
                <button
                  type="button"
                  onClick={() => setEditForm({ ...editForm, status: "Requires Review", riskScore: 65, alertType: "Periodic audit review pending" })}
                  className="px-2 py-1 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 hover:bg-yellow-400 hover:text-black cursor-pointer"
                >
                  Flag for Review (Score 65)
                </button>
                <button
                  type="button"
                  onClick={() => setEditForm({ ...editForm, status: "High Alert", riskScore: 88, alertType: "Sanctioned Entity Co-Directorship Triggered" })}
                  className="px-2 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500 hover:text-white cursor-pointer"
                >
                  Trigger High Alert (Score 88)
                </button>
              </div>
            )}
          </div>

          {/* Footer Bar with Save / Export / Delete */}
          <div className="pt-4 border-t border-[#033653] flex flex-wrap items-center justify-between gap-3 max-w-4xl mx-auto w-full">
            <span className="text-[11px] font-mono text-gray-400">
              SHA-256 Audit Seal: 8f9b2d...c3a4 &bull; Defensible Regulator Trail
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {isEditing ? (
                <>
                  <button
                    type="button"
                    onClick={() => handleDeleteMerchant(selectedMerchant.id)}
                    className="px-3 py-2 rounded-lg bg-red-950/60 border border-red-500/40 text-xs font-mono text-red-400 hover:bg-red-900 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete Record</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveEdit}
                    className="kyp-btn-primary px-5 py-2 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer shadow-lime-glow"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Changes</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setSelectedMerchant(null)}
                    className="px-4 py-2 rounded-lg bg-kyp-navy-surface border border-[#033653] text-xs font-mono text-white hover:border-kyp-lime cursor-pointer"
                  >
                    Close Inspector
                  </button>
                  <button
                    type="button"
                    onClick={() => showToast(`✓ Generating PDF dossier for ${selectedMerchant.name}...`)}
                    className="kyp-btn-primary px-4 py-2 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export Audit Dossier (PDF)</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Add New Merchant Modal */}
      {isAddingNew && (
        <div className="absolute inset-0 z-50 bg-black/95 backdrop-blur-md p-6 flex items-center justify-center overflow-y-auto">
          <form
            onSubmit={handleAddNewSubmit}
            className="w-full max-w-md bg-kyp-navy-surface border border-kyp-lime/40 rounded-2xl p-6 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-[#033653] pb-3">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Plus className="w-5 h-5 text-kyp-lime" />
                <span>Add Monitored Entity</span>
              </h4>
              <button
                type="button"
                onClick={() => setIsAddingNew(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div>
                <label className="block text-gray-300 mb-1">Company / Merchant Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Nexus Global FinTech Ltd"
                  value={newForm.name || ""}
                  onChange={(e) => setNewForm({ ...newForm, name: e.target.value })}
                  className="w-full bg-black/80 border border-[#033653] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-kyp-lime"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 mb-1">Sector</label>
                  <input
                    type="text"
                    value={newForm.sector || ""}
                    onChange={(e) => setNewForm({ ...newForm, sector: e.target.value })}
                    className="w-full bg-black/80 border border-[#033653] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-kyp-lime"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">Country</label>
                  <input
                    type="text"
                    value={newForm.country || ""}
                    onChange={(e) => setNewForm({ ...newForm, country: e.target.value })}
                    className="w-full bg-black/80 border border-[#033653] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-kyp-lime"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-1">Key Controller / UBO</label>
                <input
                  type="text"
                  placeholder="e.g. Alexander Cole (45%)"
                  value={newForm.ubo || ""}
                  onChange={(e) => setNewForm({ ...newForm, ubo: e.target.value })}
                  className="w-full bg-black/80 border border-[#033653] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-kyp-lime"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 mb-1">Initial Risk Score (0-100)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={newForm.riskScore ?? 25}
                    onChange={(e) => setNewForm({ ...newForm, riskScore: Number(e.target.value) })}
                    className="w-full bg-black/80 border border-[#033653] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-kyp-lime"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">Status</label>
                  <select
                    value={newForm.status || "Compliant"}
                    onChange={(e) => setNewForm({ ...newForm, status: e.target.value as any })}
                    className="w-full bg-black/80 border border-[#033653] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-kyp-lime"
                  >
                    <option value="Compliant">Compliant</option>
                    <option value="Requires Review">Requires Review</option>
                    <option value="High Alert">High Alert</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#033653] flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsAddingNew(false)}
                className="px-4 py-2 rounded-lg bg-black/60 border border-[#033653] text-xs font-mono text-gray-300 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="kyp-btn-primary px-5 py-2 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Record</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
