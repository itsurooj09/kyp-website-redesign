"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, X } from "lucide-react";
import { navigationData } from "@/data/navigation";
import { routes } from "@/lib/routes";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleAccordion = (key: string) => {
    setActiveSection(activeSection === key ? null : key);
  };

  const navKeys = ["platform", "useCases", "industries", "resources", "company"] as const;

  return (
    <div className="fixed inset-0 top-24 bg-white/98 backdrop-blur-2xl z-40 overflow-y-auto px-6 py-6 border-t border-slate-200 lg:hidden shadow-2xl">
      <div className="flex flex-col space-y-4">
        {navKeys.map((key) => {
          const navItem = navigationData[key as keyof typeof navigationData];
          if (!navItem) return null;
          const isExpanded = activeSection === key;

          return (
            <div key={key} className="border-b border-slate-100 pb-3">
              <button
                type="button"
                onClick={() => toggleAccordion(key)}
                className="w-full flex items-center justify-between text-left py-2 font-medium text-slate-900 hover:text-emerald-700 transition-colors"
                aria-expanded={isExpanded}
              >
                <span className="text-base font-semibold">{navItem.title}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    isExpanded ? "rotate-180 text-emerald-600" : ""
                  }`}
                />
              </button>

              {isExpanded && (
                <div className="mt-3 pl-3 space-y-3 border-l-2 border-emerald-500">
                  {navItem.sections.map((section, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="text-[10px] font-mono text-slate-400 tracking-wider uppercase font-semibold">
                        {section.title}
                      </div>
                      {section.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          href={item.href}
                          onClick={onClose}
                          className="block py-1.5 text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span>{item.title}</span>
                            {item.badge && (
                              <span className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          {item.description && (
                            <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                              {item.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Mobile Action Buttons */}
        <div className="pt-4 space-y-3">
          <Link
            href={routes.contact}
            onClick={onClose}
            className="w-full py-3 px-6 rounded-full border border-slate-300 text-sm font-semibold text-slate-800 text-center block hover:bg-slate-50 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href={routes.bookDemo}
            onClick={onClose}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3.5 px-6 rounded-full text-sm font-semibold flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <span>Speak with an expert</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
