export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section relative min-h-screen flex items-center pt-[68px] overflow-hidden"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,58,95,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,95,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] max-w-[640px] max-h-[640px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(30,58,95,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Gold accent line — far left */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C9A84C] opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-24 w-full">
        {/* Attorney name + title */}
        <p className="font-serif italic text-[clamp(1rem,1.8vw,1.25rem)] text-[#253545] dark:text-[#B8C9D8] mb-0.5">
          Atty. Marilou{" "}
          <span className="not-italic text-[#1E3A5F] dark:text-[#6A9CC8] font-semibold">&ldquo;Loy&rdquo;</span>{" "}
          S. Dumadag
        </p>

        <div className="flex items-center gap-3 mb-8">
          <span className="block w-8 h-[1.5px] bg-[#C9A84C]" />
          <p className="text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-[#C9A84C]">
            Attorney-at-Law &amp; Notary Public
          </p>
        </div>

        {/* Headline */}
        <h1
          className="font-serif font-light leading-[1.07] text-[#0A1520] dark:text-[#E2EBF3] mb-6"
          style={{ fontSize: "clamp(3rem, 7vw, 5.8rem)" }}
        >
          Legal Support,
          <br />
          <em className="italic text-[#1E3A5F] dark:text-[#6A9CC8]">When You Need It.</em>
        </h1>

        {/* Sub */}
        <p
          className="font-sans font-light leading-[1.8] text-[#4A6070] dark:text-[#8BA4B8] mb-10 max-w-[540px]"
          style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.08rem)" }}
        >
          LoyLegal PH is a broad-practice law office providing reliable,
          accessible, and practical legal support to individuals and businesses
          across the Philippines and beyond.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="#contact"
            className="inline-block px-9 py-4 bg-[#1E3A5F] text-white text-[0.76rem] font-semibold tracking-[0.14em] uppercase hover:bg-[#2E5080] transition-all duration-200 hover:-translate-y-0.5"
          >
            Request a Consultation
          </a>
          <a
            href="#services"
            className="inline-block px-9 py-4 border-[1.5px] border-[rgba(30,58,95,0.22)] dark:border-white/20 text-[#1E3A5F] dark:text-[#6A9CC8] text-[0.76rem] font-semibold tracking-[0.14em] uppercase hover:border-[#1E3A5F] dark:hover:border-[#6A9CC8] hover:bg-[rgba(30,58,95,0.05)] dark:hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
          >
            Our Practice Areas
          </a>
        </div>

        {/* Stats */}
        <div className="border-t border-[#E2E8F0] dark:border-white/10 pt-8 flex flex-wrap gap-10">
          {[
            { num: "10+",  label: "Practice Areas" },
            { num: "25+",  label: "Years of Experience" },
            { num: "1:1",  label: "Direct Lawyer Access" },
            { num: "IBP",  label: "Member in Good Standing" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-serif text-[2rem] font-semibold text-[#1E3A5F] dark:text-[#6A9CC8] leading-none mb-1">
                {s.num}
              </p>
              <p className="text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-[#4A6070] dark:text-[#8BA4B8]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
