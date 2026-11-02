import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";
import { routes } from "@/lib/routes";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white text-slate-900 px-6 kyp-grid-pattern">
      <div className="max-w-md mx-auto text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-white mx-auto font-mono text-xl font-bold shadow-sm">
          404
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 font-heading">
          Entity Route Not Found
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          The compliance page or report you requested does not exist or has been relocated within the KYP network.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <Link
            href={routes.home}
            className="kyp-btn-primary px-6 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href={routes.platform}
            className="kyp-btn-secondary px-6 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>Explore Platform</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
