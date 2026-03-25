"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

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
  const { theme, toggle }         = useTheme();

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
          ? "bg-[#F6F7F9]/97 dark:bg-[#0D1B2A]/97 backdrop-blur-lg shadow-[0_1px_20px_rgba(10,21,32,0.08)] dark:shadow-[0_1px_20px_rgba(0,0,0,0.4)] border-b border-[#E2E8F0] dark:border-white/10"
          : "bg-[#F6F7F9]/90 dark:bg-[#0D1B2A]/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-baseline leading-none">
          <span className="font-serif text-[1.35rem] font-bold tracking-[0.06em] text-[#0A1520] dark:text-white">
            LOY
          </span>
          <span className="font-serif text-[1.35rem] font-bold tracking-[0.06em] text-[#1E3A5F] dark:text-[#6A9CC8]">
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
              className={`relative text-[0.72rem] font-semibold tracking-[0.14em] uppercase transition-colors duration-200 after:absolute after:bottom-[-3px] after:left-0 after:right-0 after:h-[1.5px] after:bg-[#1E3A5F] dark:after:bg-[#6A9CC8] after:transition-transform after:duration-200 after:origin-left ${
                active === l.href
                  ? "text-[#1E3A5F] dark:text-[#6A9CC8] after:scale-x-100"
                  : "text-[#4A6070] dark:text-[#8BA4B8] after:scale-x-0 hover:text-[#1E3A5F] dark:hover:text-[#6A9CC8] hover:after:scale-x-100"
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

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="ml-1 p-1.5 text-[#4A6070] dark:text-[#8BA4B8] hover:text-[#1E3A5F] dark:hover:text-[#6A9CC8] transition-colors duration-200"
          >
            {theme === "dark" ? (
              /* Sun */
              <svg className="w-[1.1rem] h-[1.1rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364-.707.707M6.343 17.657l-.707.707M17.657 17.657l.707.707M6.343 6.343l.707.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
              </svg>
            ) : (
              /* Moon */
              <svg className="w-[1.1rem] h-[1.1rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-1">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 text-[#253545] dark:text-[#B8C9D8]"
          >
            {theme === "dark" ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364-.707.707M6.343 17.657l-.707.707M17.657 17.657l.707.707M6.343 6.343l.707.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>
          <button
            className="p-2 text-[#253545] dark:text-[#B8C9D8]"
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
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#F6F7F9]/98 dark:bg-[#0D1B2A]/98 backdrop-blur-lg border-t border-[#E2E8F0] dark:border-white/10 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[340px] py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="px-6 flex flex-col gap-0">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-[#4A6070] dark:text-[#8BA4B8] hover:text-[#1E3A5F] dark:hover:text-[#6A9CC8] border-b border-[#E2E8F0] dark:border-white/10 last:border-b-0 transition-colors"
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
