"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { navigationData, MegaMenuCategory } from "@/data/navigation";
import { routes } from "@/lib/routes";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Scroll detection for sticky effect
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

  // Hover delay handling to prevent premature closing
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
    { key: "industries", label: "Industries" },
    { key: "useCases", label: "Use Cases" },
    { key: "resources", label: "Resources" },
    { key: "company", label: "Company" },
  ] as const;

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-kyp-teal/20 py-3 shadow-2xl"
          : "bg-black/60 backdrop-blur-md border-b border-kyp-teal/10 py-4"
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Official KYP Logo */}
          <Link href={routes.home} className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-kyp-lime/50 rounded-lg p-1">
            <div className="relative w-28 h-9 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logos/kyp-logo.webp"
                alt="KYP Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
            <div className="hidden sm:flex flex-col border-l border-kyp-teal/20 pl-3">
              <span className="text-[10px] font-mono tracking-widest text-kyp-teal uppercase font-semibold">
                Risk Intelligence
              </span>
              <span className="text-[9px] text-gray-400">Enterprise KYB</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
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
                    onClick={() => setActiveMenu(isOpen ? null : item.key)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isOpen
                        ? "text-kyp-lime bg-kyp-navy/40"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-kyp-teal/70 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-kyp-lime" : ""
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Right Action: Book a Demo Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href={routes.bookDemo}
              className="kyp-btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-lime-glow hover:shadow-lg transition-all"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href={routes.bookDemo}
              className="kyp-btn-primary px-3.5 py-1.5 rounded-md text-xs font-semibold"
            >
              Book a Demo
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-kyp-navy/40 border border-kyp-teal/20 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-kyp-lime" /> : <Menu className="w-5 h-5" />}
            </button>
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
