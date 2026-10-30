import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";
import { routes } from "@/lib/routes";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-black text-white px-6 kyp-grid-pattern">
      <div className="max-w-md mx-auto text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-kyp-navy-surface border border-kyp-teal/30 flex items-center justify-center text-kyp-lime mx-auto font-mono text-xl font-bold">
          404
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Entity Route Not Found
        </h1>
        <p className="text-sm text-gray-400 leading-relaxed">
          The compliance page or report you requested does not exist or has been relocated within the KYP network.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <Link
            href={routes.home}
            className="kyp-btn-primary px-6 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href={routes.platform}
            className="kyp-btn-secondary px-6 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>Explore Platform</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
