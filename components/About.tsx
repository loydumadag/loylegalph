const credentials = [
  {
    title: "Juris Doctor",
    detail: "Ateneo de Manila University School of Law",
  },
  {
    title: "Member in Good Standing",
    detail: "Integrated Bar of the Philippines · since 1996",
  },
  {
    title: "Certifications and Training",
    details: [
      "Equal Employment Opportunity Commission (EEOC) (2012)",
      "Harvard Law School (2005)",
      "Asian Institute of Management (1999)",
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28"
      style={{ background: "var(--c-bg2)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left: photo block */}
        <div className="relative">
          {/* Decorative corner frame */}
          <div className="absolute -top-4 -right-4 w-20 h-20 border border-[rgba(30,58,95,0.18)] dark:border-white/10 pointer-events-none" />

          {/* Attorney photo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/attorney-profile.jpg"
            alt="Atty. Marilou &quot;Loy&quot; S. Dumadag"
            className="w-full aspect-[3/4] max-h-[540px] object-cover object-top border border-[#E2E8F0] dark:border-white/10"
            style={{ filter: "grayscale(8%)" }}
          />

          {/* Gold bar at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1E3A5F]" />
        </div>

        {/* Right: content */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-[1.5px] bg-[#1E3A5F]" />
            <p className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-[#1E3A5F] dark:text-[#6A9CC8]">
              About the Attorney
            </p>
          </div>

          <h2
            className="font-serif font-light leading-[1.14] text-[#0A1520] dark:text-[#E2EBF3] mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Nearly Three Decades of{" "}
            <em className="italic text-[#1E3A5F] dark:text-[#6A9CC8]">Legal Excellence</em>
          </h2>

          <div className="space-y-5 text-[0.94rem] font-light leading-[1.85] text-[#253545] dark:text-[#B8C9D8] mb-8">
            <p>
              Atty. Marilou &ldquo;Loy&rdquo; S. Dumadag is a seasoned legal
              professional with close to three decades of experience spanning
              corporate law, commercial litigation, regulatory compliance, data
              privacy, and legal strategy. Her career has taken her across the
              full breadth of Philippine legal practice — from complex corporate
              transactions and governance work to cross-border legal operations
              serving multinational clients.
            </p>
            <p>
              Throughout her career, Loy has served in senior legal and executive
              roles across diverse industries. She has advised boards, led legal
              departments, managed complex litigation, and guided organizations
              through regulatory change — always with a commitment to sound
              governance and practical, business-aligned counsel.
            </p>
            <p>
              Her international exposure — including work with U.S.-based legal
              teams and global compliance frameworks — complements her deep
              grounding in Philippine law, giving clients access to a lawyer with
              both local authority and a global perspective.
            </p>
            <p>
              LoyLegal PH is the expression of that career — a practice built on
              direct, personal service, where every client benefits from her full
              expertise, without the overhead or distance of a large firm.
            </p>
          </div>

          {/* Credentials */}
          <div className="border-t border-[#E2E8F0] dark:border-white/10 pt-6 flex flex-col gap-4">
            {credentials.map((c) => (
              <div key={c.title} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1E3A5F] flex-shrink-0" />
                <div className="text-[0.85rem] text-[#253545] dark:text-[#B8C9D8] leading-[1.5] font-normal">
                  <strong className="font-semibold text-[#0A1520] dark:text-[#E2EBF3]">{c.title}</strong>
                  {"detail" in c && (
                    <span className="text-[#4A6070] dark:text-[#8BA4B8]"> — {c.detail}</span>
                  )}
                  {"details" in c && c.details && (
                    <ul className="mt-1 flex flex-col gap-0.5">
                      {c.details.map((d) => (
                        <li key={d} className="flex gap-2 text-[#4A6070] dark:text-[#8BA4B8]">
                          <span className="flex-shrink-0">—</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
