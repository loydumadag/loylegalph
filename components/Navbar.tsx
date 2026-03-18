"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About",    href: "#about" },
  { label: "How We Work", href: "#how" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = links.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F6F7F9]/97 backdrop-blur-lg shadow-[0_1px_20px_rgba(10,21,32,0.08)] border-b border-[#E2E8F0]"
          : "bg-[#F6F7F9]/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-baseline leading-none">
          <span className="font-serif text-[1.35rem] font-bold tracking-[0.06em] text-[#0A1520]">
            LOY
          </span>
          <span className="font-serif text-[1.35rem] font-bold tracking-[0.06em] text-[#1E3A5F]">
            LEGAL
          </span>
          <span className="font-sans text-[0.72rem] font-semibold text-[#7A96A8] tracking-[0.08em] ml-0.5 align-super">
            PH
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative text-[0.72rem] font-semibold tracking-[0.14em] uppercase transition-colors duration-200 after:absolute after:bottom-[-3px] after:left-0 after:right-0 after:h-[1.5px] after:bg-[#1E3A5F] after:transition-transform after:duration-200 after:origin-left ${
                active === l.href
                  ? "text-[#1E3A5F] after:scale-x-100"
                  : "text-[#4A6070] after:scale-x-0 hover:text-[#1E3A5F] hover:after:scale-x-100"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2.5 bg-[#1E3A5F] text-white text-[0.72rem] font-semibold tracking-[0.12em] uppercase hover:bg-[#2E5080] transition-colors duration-200"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[#253545]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#F6F7F9]/98 backdrop-blur-lg border-t border-[#E2E8F0] overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[340px] py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="px-6 flex flex-col gap-0">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-[#4A6070] hover:text-[#1E3A5F] border-b border-[#E2E8F0] last:border-b-0 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-5 py-3 bg-[#1E3A5F] text-white text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-center hover:bg-[#2E5080] transition-colors"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </nav>
  );
}
