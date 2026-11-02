"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { navigationData, MegaMenuCategory } from "@/data/navigation";
import { routes } from "@/lib/routes";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import KYPLogo from "@/components/common/KYPLogo";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change or Escape
  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const navItems = [
    { key: "platform", label: "Platform" },
    { key: "useCases", label: "Solutions" },
    { key: "industries", label: "Industries" },
    { key: "resources", label: "Resources" },
    { key: "company", label: "Company" },
  ] as const;

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      onMouseLeave={handleMouseLeave}
    >
      {/* SEON-Style Top Announcement Banner (Image 2) */}
      {showBanner && (
        <div className="bg-blue-600 text-white text-xs py-2 px-4 flex items-center justify-center relative transition-all">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center text-center">
            <span className="font-medium">
              AI can fake an identity with one prompt. It can&apos;t fake 1,100+ real signals.
            </span>
            <Link
              href={routes.onboarding}
              className="px-2.5 py-0.5 rounded bg-white text-blue-700 font-bold hover:bg-blue-50 transition-colors inline-flex items-center gap-1 text-[11px] shadow-sm"
            >
              <span>See what AI can&apos;t fake</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setShowBanner(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-1"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-md"
            : "bg-white/90 backdrop-blur-md border-b border-slate-200/70 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: KYP Logo */}
            <Link
              href={routes.home}
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded-lg p-1"
            >
              <div className="transition-transform duration-300 group-hover:scale-105">
                <KYPLogo className="h-8 w-auto" theme="light" />
              </div>
              <div className="hidden sm:flex flex-col border-l border-slate-200 pl-3">
                <span className="text-[10px] font-mono tracking-widest text-emerald-700 uppercase font-bold">
                  Risk Intelligence
                </span>
                <span className="text-[9px] text-slate-500 font-medium">Enterprise KYB</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isOpen = activeMenu === item.key;
                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.key)}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveMenu(isOpen ? null : item.key)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                        isOpen
                          ? "text-emerald-700 bg-emerald-50"
                          : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                      }`}
                      aria-expanded={isOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-emerald-600" : ""
                        }`}
                      />
                    </button>
                  </div>
                );
              })}
            </nav>

            {/* Right Action: Sign In + Speak with an Expert (SEON Style Image 2) */}
            <div className="hidden lg:flex items-center gap-5">
              <Link
                href={routes.contact}
                className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
              >
                Login
              </Link>
              <Link
                href={routes.bookDemo}
                className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all flex items-center gap-2 group"
              >
                <span>Speak with an expert</span>
                <ArrowRight className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href={routes.bookDemo}
                className="bg-slate-900 text-white px-3 py-1.5 rounded-full text-xs font-semibold"
              >
                Speak with an expert
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 border border-slate-200 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mega Menus Render */}
      {navItems.map((item) => {
        const categoryData = navigationData[item.key as keyof typeof navigationData] as MegaMenuCategory;
        if (!categoryData) return null;
        return (
          <MegaMenu
            key={item.key}
            category={categoryData}
            isOpen={activeMenu === item.key}
            onClose={() => setActiveMenu(null)}
          />
        );
      })}

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
