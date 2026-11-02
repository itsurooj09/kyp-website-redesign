"use client";

import React, { useState } from "react";
import { ChevronDown, Search, HelpCircle, Sparkles } from "lucide-react";
import { faqsData, faqCategories } from "@/data/faq";

export default function FAQAccordion() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIds, setOpenIds] = useState<string[]>([faqsData[0].id, faqsData[4].id]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCat =
      selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full space-y-8">
      {/* Category Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 items-center">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions or keywords..."
            className="w-full pl-9 pr-4 py-2.5 rounded-full bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 shadow-xs"
          />
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center text-slate-500 rounded-2xl bg-white border border-slate-200">
            <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-60" />
            <p className="text-sm font-semibold text-slate-800">No questions matched your search.</p>
            <p className="text-xs text-slate-500 mt-1">Try searching for other compliance terms or select &apos;All&apos;.</p>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200 hover:border-emerald-500/60 shadow-sm"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 group focus:outline-none cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                    <div>
                      <span className="text-[10px] font-mono uppercase text-emerald-700 font-bold block mb-0.5">
                        {faq.category}
                      </span>
                      <h4 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {faq.question}
                      </h4>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 pl-10 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1 animate-fadeIn">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
