"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { MegaMenuCategory } from "@/data/navigation";

interface MegaMenuProps {
  category: MegaMenuCategory;
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaMenu({ category, isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute left-0 right-0 top-full w-full bg-black/95 backdrop-blur-2xl border-b border-kyp-teal/20 shadow-2xl py-8 transition-all duration-200 z-50 kyp-grid-pattern"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Main Navigation Links */}
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-[11px] font-mono tracking-widest text-kyp-teal uppercase font-semibold border-b border-kyp-navy-light/40 pb-2 flex items-center justify-between">
                  <span>{section.title}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-kyp-lime animate-pulse" />
                </div>
                <div className="space-y-2">
                  {section.items.map((item, itemIdx) => {
                    const isHash = item.href === "#";
                    return (
                      <Link
                        key={itemIdx}
                        href={item.href}
                        onClick={onClose}
                        className={`group block p-3 rounded-lg transition-all duration-200 ${
                          isHash
                            ? "hover:bg-kyp-navy/30 opacity-80 hover:opacity-100"
                            : "hover:bg-kyp-navy/60 hover:border-kyp-teal/30"
                        } border border-transparent`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-white group-hover:text-kyp-lime transition-colors flex items-center gap-2">
                            {item.title}
                            {item.badge && (
                              <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-kyp-lime/10 text-kyp-lime border border-kyp-lime/30">
                                {item.badge}
                              </span>
                            )}
                          </span>
                          {!isHash && (
                            <ArrowRight className="w-3.5 h-3.5 text-kyp-teal/40 group-hover:text-kyp-lime group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                          )}
                        </div>
                        {item.description && (
                          <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed group-hover:text-gray-300">
                            {item.description}
                          </p>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Preview Card on Right (SEON / Itemize inspired) */}
          {category.featured && (
            <div className="col-span-12 lg:col-span-4 border-l border-kyp-teal/15 pl-0 lg:pl-8">
              <div className="kyp-glass-card p-6 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-kyp-navy/40 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-kyp-lime/10 border border-kyp-lime/30 text-[10px] font-mono text-kyp-lime uppercase tracking-wider font-semibold">
                    <Sparkles className="w-3 h-3" />
                    {category.featured.tag}
                  </span>
                </div>
                <h4 className="text-base font-semibold text-white group-hover:text-kyp-mint transition-colors">
                  {category.featured.title}
                </h4>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  {category.featured.description}
                </p>

                {category.featured.image && (
                  <div className="mt-4 rounded-lg overflow-hidden border border-kyp-teal/20 relative h-32 bg-kyp-black">
                    <Image
                      src={category.featured.image}
                      alt={category.featured.title}
                      fill
                      className="object-cover object-top opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                )}

                <div className="mt-4 pt-3 border-t border-kyp-teal/10">
                  <Link
                    href={category.featured.href}
                    onClick={onClose}
                    className="inline-flex items-center gap-2 text-xs font-medium text-kyp-lime hover:text-white transition-colors"
                  >
                    <span>Explore capability</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
