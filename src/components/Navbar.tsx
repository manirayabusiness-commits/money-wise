"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Our Impact", href: "#impact" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Calculator", href: "#calculator" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(6,13,31,0.85)] backdrop-blur-xl border-b border-[rgba(79,142,247,0.12)] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4f8ef7] to-[#2dd4a0] flex items-center justify-center shadow-[0_0_12px_rgba(79,142,247,0.5)] group-hover:shadow-[0_0_20px_rgba(79,142,247,0.75)] transition-shadow duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M2 17L7 12L11 16L17 9L22 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 9H22V13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-base font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
            Money Wise <span className="gradient-text">Foundation</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[--muted] hover:text-white transition-colors duration-200 font-medium tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#volunteer" className="text-sm text-[--muted] hover:text-white transition-colors duration-200 font-medium px-4 py-2">
            Volunteer
          </a>
          <a
            href="#donate"
            className="btn-primary text-sm font-semibold text-white px-5 py-2.5 rounded-xl"
          >
            Donate
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-btn"
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[rgba(6,13,31,0.95)] backdrop-blur-xl border-b border-[rgba(79,142,247,0.1)] ${
          mobileOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[--muted] hover:text-white transition-colors font-medium py-1"
            >
              {link.label}
            </a>
          ))}
          <a href="#donate" className="btn-primary text-center text-sm font-semibold text-white px-5 py-3 rounded-xl mt-2">
            Donate
          </a>
        </div>
      </div>
    </header>
  );
}
