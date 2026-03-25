const engagements = [
  "One-time legal consultations — remote or in-person",
  "Project-based engagements for specific transactions or matters",
  "Retainer agreements for ongoing legal advisory and support",
  "Interim counsel arrangements for temporary organizational needs",
];

export default function HowWeWork() {
  return (
    <section id="how" className="bg-white dark:bg-[#0D1B2A] py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-8 h-[1.5px] bg-[#1E3A5F]" />
          <p className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-[#1E3A5F] dark:text-[#6A9CC8]">
            Our Approach
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: headline */}
          <div>
            <h2
              className="font-serif font-light leading-[1.14] text-[#0A1520] dark:text-[#E2EBF3] mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Remote-First.{" "}
              <em className="italic text-[#1E3A5F] dark:text-[#6A9CC8]">Available In-Person.</em>
            </h2>
            <p className="text-[0.97rem] font-light leading-[1.8] text-[#4A6070] dark:text-[#8BA4B8] max-w-[480px]">
              The practice operates primarily through secure digital platforms,
              enabling fast, efficient legal support with no geographical
              barriers. In-person engagements are available by appointment.
            </p>

            {/* Commitment note */}
            <div className="mt-8 pl-5 border-l-[3px] border-[#1E3A5F] bg-[#F6F7F9] dark:bg-white/5 p-5">
              <p className="text-[0.87rem] font-light leading-[1.72] text-[#253545] dark:text-[#B8C9D8]">
                Every client engagement is handled with the same standard of
                care. You will always work directly with Loy — not a junior
                associate or support staff. Every matter receives her personal
                attention, from initial consultation through resolution.
              </p>
            </div>
          </div>

          {/* Right: engagement types */}
          <div>
            <p className="text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-[#4A6070] dark:text-[#8BA4B8] mb-5">
              Engagement Options
            </p>
            <ul className="flex flex-col gap-4">
              {engagements.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 text-[0.92rem] font-light leading-[1.65] text-[#253545] dark:text-[#B8C9D8]"
                >
                  <span className="mt-[0.1rem] text-[#1E3A5F] dark:text-[#6A9CC8] font-semibold flex-shrink-0">
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Divider quote */}
            <div className="mt-10 pt-8 border-t border-[#E2E8F0] dark:border-white/10">
              <blockquote className="font-serif italic text-[1.15rem] text-[#253545] dark:text-[#B8C9D8] leading-relaxed mb-3">
                &ldquo;Clear communication, realistic timelines, and honest
                counsel are the foundation of every client relationship at
                LoyLegal PH.&rdquo;
              </blockquote>
              <p className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-[#7A96A8]">
                — Atty. Marilou S. Dumadag
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
