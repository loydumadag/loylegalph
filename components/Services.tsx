const services = [
  {
    title: "Corporate & Business Law",
    desc: "Formation, governance, compliance, and ongoing corporate legal support for businesses of all sizes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Contracts",
    desc: "Drafting, review, and negotiation of commercial and personal contracts to protect your interests and minimize risk.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Business Setup & Registration",
    desc: "End-to-end assistance with business registration, SEC filings, permits, and legal structuring for startups and enterprises.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
  },
  {
    title: "Regulatory Compliance",
    desc: "Guidance on applicable laws, government requirements, and industry-specific regulations to keep your business legally sound.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Family Law",
    desc: "Support on marriage, annulment, legal separation, child custody, adoption, and other family-related concerns.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "Real Estate Transactions",
    desc: "Legal review and documentation for property purchases, sales, leases, titles, and other real estate dealings.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Estate Planning",
    desc: "Preparation of wills, settlement of estates, and legal planning to protect assets and ensure orderly transfer of property.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Interim Legal Counsel",
    desc: "Flexible, short-term legal support for businesses during staff absences, peak demand, or transitional phases.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Notarial Services",
    desc: "Notarization of affidavits, deeds, contracts, and other instruments requiring notarial authentication.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    title: "Legal Consultations",
    desc: "Scheduled and remote consultations providing clear, practical advice on personal and business legal questions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white dark:bg-[#0D1B2A] py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 items-end mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-[1.5px] bg-[#1E3A5F]" />
              <p className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-[#1E3A5F] dark:text-[#6A9CC8]">
                Practice Areas
              </p>
            </div>
            <h2
              className="font-serif font-light leading-[1.14] text-[#0A1520] dark:text-[#E2EBF3]"
              style={{ fontSize: "clamp(2.1rem, 4.5vw, 3.4rem)" }}
            >
              Comprehensive{" "}
              <em className="italic text-[#1E3A5F] dark:text-[#6A9CC8]">Legal Coverage</em>
            </h2>
          </div>
          <p className="text-[#4A6070] dark:text-[#8BA4B8] font-light leading-[1.8] text-[0.97rem] md:pb-1">
            LoyLegal PH handles a broad range of personal and business legal
            matters — integrated support delivered with clarity, efficiency, and
            genuine care.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid gap-px bg-[#E2E8F0] dark:bg-white/10"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}
        >
          {services.map((s) => (
            <div
              key={s.title}
              className="relative bg-white dark:bg-[#162032] p-8 group hover:bg-[#F6F7F9] dark:hover:bg-white/5 transition-colors duration-200 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E2E8F0] dark:bg-white/10 group-hover:bg-[#1E3A5F] transition-colors duration-300" />

              {/* Icon block */}
              <div className="w-16 h-16 border-2 border-[rgba(30,58,95,0.14)] dark:border-white/10 bg-[#F6F7F9] dark:bg-white/5 flex items-center justify-center mb-6 mt-2 text-[#1E3A5F] dark:text-[#6A9CC8] group-hover:bg-[#1E3A5F] group-hover:border-[#1E3A5F] group-hover:text-white transition-all duration-300">
                <span className="w-7 h-7 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                  {s.icon}
                </span>
              </div>

              <h3 className="font-serif font-semibold text-[1.15rem] text-[#0A1520] dark:text-[#E2EBF3] mb-2.5 tracking-[0.01em]">
                {s.title}
              </h3>
              <p className="text-[0.86rem] font-light leading-[1.75] text-[#4A6070] dark:text-[#8BA4B8]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
