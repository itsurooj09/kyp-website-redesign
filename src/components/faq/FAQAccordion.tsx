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
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-kyp-lime text-black font-semibold shadow-lime-glow"
                  : "bg-kyp-navy-surface text-gray-300 hover:text-white hover:bg-kyp-navy/60 border border-kyp-teal/15"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-kyp-teal absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions or keywords..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-black border border-kyp-teal/25 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-kyp-lime focus:ring-1 focus:ring-kyp-lime"
          />
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center text-gray-400 rounded-xl bg-kyp-navy-surface border border-kyp-teal/15">
            <HelpCircle className="w-8 h-8 text-kyp-teal mx-auto mb-2 opacity-60" />
            <p className="text-sm font-semibold text-white">No questions matched your search.</p>
            <p className="text-xs text-gray-400 mt-1">Try searching for other compliance terms or select &apos;All&apos;.</p>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="rounded-xl border border-kyp-teal/15 bg-kyp-navy-surface/80 overflow-hidden transition-all duration-200 hover:border-kyp-teal/40"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 group focus:outline-none focus:ring-1 focus:ring-kyp-lime"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-kyp-teal mt-2 shrink-0 group-hover:bg-kyp-lime transition-colors" />
                    <div>
                      <span className="text-[10px] font-mono uppercase text-kyp-teal/80 block mb-0.5">
                        {faq.category}
                      </span>
                      <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-kyp-mint transition-colors">
                        {faq.question}
                      </h4>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-kyp-teal shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-kyp-lime" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 pl-10 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-kyp-teal/10 mt-1 animate-fadeIn">
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
