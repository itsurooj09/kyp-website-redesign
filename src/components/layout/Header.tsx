"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { routes } from "@/lib/routes";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import KYPLogo from "@/components/common/KYPLogo";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  // Exactly the Scope Categories
  const dropdownNavItems = [
    { key: "useCases", label: "Use Cases" },
    { key: "resources", label: "Resources" },
    { key: "company", label: "Company" },
  ] as const;

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-300 relative ${
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
              className="flex items-center gap-3 group focus:outline-none rounded-lg p-1"
            >
              <div className="transition-transform duration-300 group-hover:scale-105">
                <KYPLogo className="h-8 w-auto" theme="light" />
              </div>
              <div className="hidden sm:flex flex-col border-l border-slate-200 pl-3">
                <span className="text-[10px] font-mono tracking-widest text-[#033653] uppercase font-bold">
                  Risk Intelligence
                </span>
                <span className="text-[9px] text-slate-500 font-medium">Enterprise Platform</span>
              </div>
            </Link>

            {/* Desktop Navigation Links matching Image 4 */}
            <nav className="hidden lg:flex items-center space-x-2" aria-label="Main Navigation">
              {/* Direct Platform Link */}
              <Link
                href={routes.platform}
                className="relative px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#033653] transition-colors"
                onMouseEnter={() => setActiveMenu(null)}
              >
                Platform
              </Link>

              {/* MegaMenu Dropdown Items */}
              {dropdownNavItems.map((item) => {
                const isOpen = activeMenu === item.key;
                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.key)}
                  >
                    {/* Active teal top indicator bar matching Image 4 */}
                    {isOpen && (
                      <span className="absolute -top-4 sm:-top-5 left-1 right-1 h-0.5 bg-[#66cc00] rounded-full" />
                    )}

                    <button
                      type="button"
                      onClick={() => setActiveMenu(isOpen ? null : item.key)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                        isOpen
                          ? "text-[#033653] bg-slate-50"
                          : "text-slate-700 hover:text-[#033653] hover:bg-slate-50"
                      }`}
                      aria-expanded={isOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#66cc00]" : "text-slate-400"
                        }`}
                      />
                    </button>
                  </div>
                );
              })}
            </nav>

            {/* Right Action: Contact + Book a Demo */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href={routes.contact}
                className="text-sm font-semibold text-slate-700 hover:text-[#033653] transition-colors"
              >
                Contact
              </Link>
              <Link
                href={routes.contact}
                className="bg-[#66cc00] hover:bg-[#55b300] text-[#000000] px-5 py-2.5 rounded-full text-xs font-extrabold shadow-sm hover:shadow-md transition-all flex items-center gap-2 group"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#000000] group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href={routes.contact}
                className="bg-[#66cc00] text-[#000000] px-3 py-1.5 rounded-full text-xs font-bold"
              >
                Book Demo
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

      {/* Mega Menus Render for Use Cases, Resources, Company */}
      {dropdownNavItems.map((item) => (
        <MegaMenu
          key={item.key}
          category={{ title: item.label, href: "#" }}
          isOpen={activeMenu === item.key}
          onClose={() => setActiveMenu(null)}
        />
      ))}

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
