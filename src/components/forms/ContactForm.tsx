"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, ShieldCheck, Mail, Building, User, Phone, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Client-side quick check
    if (!formData.name.trim() || !formData.organisation.trim() || !formData.email.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Organisation, Business Email).");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit demo request.");
      }

      setStatus("success");
      setFormData({ name: "", organisation: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to submit. Please reach out to hello@kyp.io directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-4 shadow-sm animate-fadeIn">
        <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          Demo Request Confirmed
        </h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Thank you for getting in touch. An enterprise risk specialist from our London team will review your requirements and reach out within 1 business day.
        </p>
        <div className="pt-2">
          <button
            onClick={() => setStatus("idle")}
            className="kyp-btn-secondary px-6 py-2.5 rounded-full text-xs font-semibold"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left" noValidate>
      {status === "error" && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Name & Organisation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-mono text-slate-700 flex items-center gap-1.5 font-bold">
            <User className="w-3.5 h-3.5 text-emerald-700" />
            <span>Full Name *</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Marcus Vance"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="organisation" className="text-xs font-mono text-slate-700 flex items-center gap-1.5 font-bold">
            <Building className="w-3.5 h-3.5 text-emerald-700" />
            <span>Organisation *</span>
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            required
            value={formData.organisation}
            onChange={handleChange}
            placeholder="e.g. Apex Payments Ltd"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
          />
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-mono text-slate-700 flex items-center gap-1.5 font-bold">
            <Mail className="w-3.5 h-3.5 text-emerald-700" />
            <span>Company Email *</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. mvance@apexpayments.com"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-xs font-mono text-slate-700 flex items-center gap-1.5 font-bold">
            <Phone className="w-3.5 h-3.5 text-emerald-700" />
            <span>Phone (Optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +44 20 7946 0912"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
          />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs font-mono text-slate-700 flex items-center gap-1.5 font-bold">
          <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
          <span>Operational Scope or Portfolio Overview</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your portfolio volume, regulatory environment (e.g. FCA, MGA, Curacao), or key compliance pain points..."
          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors resize-none"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Strict NDAs honored • ISO 27001 Certified Handling</span>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto kyp-btn-primary px-8 py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
        >
          <span>{status === "loading" ? "Submitting..." : "Schedule Platform Demo"}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
