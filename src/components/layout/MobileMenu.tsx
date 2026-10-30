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

  const navKeys = ["platform", "industries", "useCases", "resources", "company"] as const;

  return (
    <div className="fixed inset-0 top-20 bg-black/98 backdrop-blur-3xl z-40 overflow-y-auto px-6 py-6 border-t border-kyp-teal/20 lg:hidden">
      <div className="flex flex-col space-y-4">
        {navKeys.map((key) => {
          const navItem = navigationData[key];
          const isExpanded = activeSection === key;

          return (
            <div key={key} className="border-b border-kyp-teal/15 pb-3">
              <button
                onClick={() => toggleAccordion(key)}
                className="w-full flex items-center justify-between text-left py-2 font-medium text-white hover:text-kyp-lime transition-colors"
                aria-expanded={isExpanded}
              >
                <span className="text-base font-semibold">{navItem.title}</span>
                <ChevronDown
                  className={`w-4 h-4 text-kyp-teal transition-transform duration-200 ${
                    isExpanded ? "rotate-180 text-kyp-lime" : ""
                  }`}
                />
              </button>

              {isExpanded && (
                <div className="mt-3 pl-3 space-y-3 border-l-2 border-kyp-navy-light animate-fadeIn">
                  {navItem.sections.map((section, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="text-[10px] font-mono text-kyp-teal tracking-wider uppercase">
                        {section.title}
                      </div>
                      {section.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          href={item.href}
                          onClick={onClose}
                          className="block py-1.5 text-sm text-gray-300 hover:text-kyp-lime transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span>{item.title}</span>
                            {item.badge && (
                              <span className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-kyp-lime/10 text-kyp-lime border border-kyp-lime/30">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          {item.description && (
                            <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
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

        {/* Mobile Book a Demo CTA */}
        <div className="pt-6">
          <Link
            href={routes.bookDemo}
            onClick={onClose}
            className="w-full kyp-btn-primary py-3.5 px-6 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-lime-glow"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
