"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Practice Areas", href: "#practice-areas" },
  { name: "Our Team", href: "#team" },
  { name: "Why Choose Us", href: "#why-choose-us" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-deep/95 backdrop-blur-md shadow-xl py-3 border-b border-gold/25"
          : "bg-navy-primary py-4 border-b border-gold/15"
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Monogram */}
          <Link
            href="#home"
            className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-gold/80 rounded p-1"
            aria-label="IWAN ASSOCIATES - Home"
          >
            {/* Elegant "IA" Antique Gold Monogram */}
            <div className="relative flex items-center justify-center w-11 h-11 border border-gold/70 bg-navy-deep/90 shadow-inner group-hover:border-gold transition-colors duration-300">
              <span className="font-serif text-lg font-bold tracking-widest text-gold group-hover:text-gold-light transition-colors">
                IA
              </span>
              <div className="absolute inset-0.5 border border-gold/20 pointer-events-none" />
            </div>

            {/* Typography */}
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-ivory group-hover:text-gold-light transition-colors uppercase">
                IWAN ASSOCIATES
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.22em] text-gold-light/90 uppercase font-medium">
                Advocates &amp; Legal Consultants
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-ivory/80 hover:text-gold transition-colors duration-200 tracking-wide rounded hover:bg-white/5 focus:outline-none focus:ring-1 focus:ring-gold"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Consultation CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-navy-deep bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold transition-all duration-300 shadow-gold hover:shadow-gold-lg rounded-none focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy-deep font-sans group"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-ivory hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-[500px] border-b border-gold/20 opacity-100" : "max-h-0 opacity-0"
        } bg-navy-deep/98 backdrop-blur-lg`}
      >
        <div className="px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded text-base font-medium text-ivory/90 hover:text-gold hover:bg-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gold/20">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold uppercase tracking-widest text-navy-deep bg-gold hover:bg-gold-light transition-colors text-center"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
