const reasons = [
  {
    num: "01",
    title: "Direct Access",
    desc: "You work directly with Atty. Loy — no associates, no hand-offs, no intermediaries. Your matter gets her full personal attention from day one.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Full-Service Coverage",
    desc: "Personal, property, and business legal matters handled under one roof — integrated expertise across all practice areas without switching firms.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Clear, Plain Advice",
    desc: "Legal guidance in plain language — no unnecessary jargon, no ambiguity. You always know exactly where you stand and what your options are.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Flexible Engagement",
    desc: "One-time consultations, project-based work, or ongoing retainers — structured to fit your situation, your timeline, and your budget.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Cost-Efficient",
    desc: "Strategic legal support without the overhead of a large firm or the long-term cost of in-house counsel — quality representation at fair, transparent rates.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Broad Reach",
    desc: "Serving clients across the Philippines and beyond. Remote-first delivery means geography is never a barrier to getting quality legal support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3.284 14.253A8.959 8.959 0 013 12c0-1.348.294-2.628.818-3.776" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" style={{ background: "#0F2440" }} className="py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="block w-8 h-[1.5px] bg-[#C9A84C]" />
            <p className="text-[0.68rem] font-semibold tracking-[0.22em] uppercase text-[#C9A84C]">
              Why LoyLegal PH
            </p>
            <span className="block w-8 h-[1.5px] bg-[#C9A84C]" />
          </div>
          <h2
            className="font-serif leading-[1.14] text-white mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Your Matter. One Lawyer.{" "}
            <em className="italic" style={{ color: "#C9A84C" }}>Full Commitment.</em>
          </h2>
          <p className="text-[1rem] font-light leading-[1.85] text-[rgba(255,255,255,0.72)] max-w-[560px] mx-auto">
            Clients choose LoyLegal PH because they get a lawyer who is genuinely
            engaged — one who knows their case, understands their goals, and
            delivers results without unnecessary delay or overhead.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div
              key={r.num}
              className="group relative rounded-sm border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.09)] hover:border-[rgba(201,168,76,0.35)] transition-all duration-300 p-7 flex flex-col gap-5"
            >
              {/* Top row: icon + number */}
              <div className="flex items-start justify-between">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] text-[rgba(255,255,255,0.75)] group-hover:border-[#C9A84C] group-hover:text-[#C9A84C] transition-all duration-300 flex-shrink-0">
                  <span className="w-5 h-5 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                    {r.icon}
                  </span>
                </div>
                {/* Ghost number */}
                <span
                  className="font-serif text-[2.8rem] font-bold leading-none select-none"
                  style={{ color: "rgba(255,255,255,0.07)" }}
                >
                  {r.num}
                </span>
              </div>

              {/* Text */}
              <div>
                <h3 className="font-serif font-semibold text-[1.15rem] text-white mb-2 leading-snug">
                  {r.title}
                </h3>
                <p className="text-[0.88rem] font-light leading-[1.8] text-[rgba(255,255,255,0.68)]">
                  {r.desc}
                </p>
              </div>

              {/* Gold bottom accent on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
