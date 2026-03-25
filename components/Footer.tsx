const footerLinks = [
  { label: "Services",    href: "#services" },
  { label: "About",       href: "#about" },
  { label: "How We Work", href: "#how" },
  { label: "Contact",     href: "#contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--c-footer)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        {/* Top row */}
        <div className="flex flex-wrap items-start justify-between gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-baseline leading-none mb-1">
              <span className="font-serif text-[1.25rem] font-bold text-white tracking-[0.06em]">
                LOY
              </span>
              <span className="font-serif text-[1.25rem] font-bold text-[#6A9CC8] tracking-[0.06em]">
                LEGAL
              </span>
              <span className="font-sans text-[0.72rem] font-semibold text-[#7A96A8] tracking-[0.08em] ml-0.5 align-super">
                PH
              </span>
            </div>
            <p className="font-serif italic text-[0.9rem] text-[rgba(255,255,255,0.5)] mb-0.5">
              Atty. Marilou S. Dumadag
            </p>
            <p className="text-[0.66rem] font-semibold tracking-[0.14em] uppercase text-[#6A9CC8] opacity-80">
              Attorney-at-Law &amp; Notary Public
            </p>
          </div>

          {/* Nav links */}
          <ul className="flex flex-wrap gap-6 items-center">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-[rgba(255,255,255,0.45)] hover:text-[rgba(255,255,255,0.85)] transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t border-[rgba(255,255,255,0.08)] pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[0.7rem] text-[rgba(255,255,255,0.35)] tracking-[0.05em]">
            &copy; 2026 LoyLegal PH. All rights reserved.
          </p>
          <p className="text-[0.7rem] text-[rgba(255,255,255,0.35)] tracking-[0.05em]">
            www.loylegal.ph
          </p>
        </div>
      </div>
    </footer>
  );
}
