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
      <div className="p-8 sm:p-10 rounded-2xl bg-kyp-navy-surface border border-kyp-lime/40 text-center space-y-4 shadow-lime-glow animate-fadeIn">
        <div className="w-14 h-14 rounded-full bg-kyp-lime/10 border border-kyp-lime flex items-center justify-center text-kyp-lime mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          Demo Request Confirmed
        </h3>
        <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
          Thank you for getting in touch. An enterprise risk specialist from our London team will review your requirements and reach out within 1 business day.
        </p>
        <div className="pt-2">
          <button
            onClick={() => setStatus("idle")}
            className="kyp-btn-secondary px-6 py-2.5 rounded-xl text-xs font-semibold"
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
        <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Name & Organisation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-mono text-gray-300 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-kyp-teal" />
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
            className="w-full px-4 py-3 rounded-xl bg-black border border-kyp-teal/20 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-kyp-lime focus:ring-1 focus:ring-kyp-lime transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="organisation" className="text-xs font-mono text-gray-300 flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-kyp-teal" />
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
            className="w-full px-4 py-3 rounded-xl bg-black border border-kyp-teal/20 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-kyp-lime focus:ring-1 focus:ring-kyp-lime transition-colors"
          />
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-mono text-gray-300 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-kyp-teal" />
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
            className="w-full px-4 py-3 rounded-xl bg-black border border-kyp-teal/20 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-kyp-lime focus:ring-1 focus:ring-kyp-lime transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-xs font-mono text-gray-300 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-kyp-teal" />
            <span>Phone (Optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+44 20 7946 0991"
            className="w-full px-4 py-3 rounded-xl bg-black border border-kyp-teal/20 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-kyp-lime focus:ring-1 focus:ring-kyp-lime transition-colors"
          />
        </div>
      </div>

      {/* Challenge Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs font-mono text-gray-300 flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5 text-kyp-teal" />
          <span>What compliance or risk challenge are you trying to overcome?</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="e.g. We are looking to replace manual 3-week periodic merchant reviews with always-on continuous monitoring and automated KYB onboarding..."
          className="w-full px-4 py-3 rounded-xl bg-black border border-kyp-teal/20 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-kyp-lime focus:ring-1 focus:ring-kyp-lime transition-colors"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full kyp-btn-primary py-3.5 px-6 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lime-glow disabled:opacity-50"
        >
          {status === "loading" ? (
            <>
              <span className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
              <span>Submitting Request...</span>
            </>
          ) : (
            <>
              <span>Book a Demo with Our Compliance Team</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      <div className="pt-2 flex items-center justify-center gap-2 text-[11px] font-mono text-gray-500">
        <ShieldCheck className="w-3.5 h-3.5 text-kyp-lime" />
        <span>Enterprise Confidentiality &bull; ISO 27001 Certified &bull; No Spam</span>
      </div>
    </form>
  );
}
