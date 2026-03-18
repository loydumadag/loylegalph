const areas = [
  {
    icon: "⚖️",
    title: "Civil Litigation",
    description:
      "Representing clients in civil cases before trial and appellate courts, including collection suits, damages claims, and injunctions.",
  },
  {
    icon: "🏠",
    title: "Real Property Law",
    description:
      "Legal assistance for land disputes, title verification, property transfers, ejectment cases, and agrarian matters.",
  },
  {
    icon: "🏢",
    title: "Corporate & Business Law",
    description:
      "Business registration, drafting of contracts and MOAs, corporate compliance, and legal advisory for MSMEs and corporations.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Law",
    description:
      "Handling annulment, legal separation, adoption, custody disputes, support cases, and declaration of nullity of marriage.",
  },
  {
    icon: "👷",
    title: "Labor & Employment",
    description:
      "Assisting employees and employers in illegal dismissal cases, labor standards compliance, and NLRC proceedings.",
  },
  {
    icon: "📋",
    title: "Notarial Services",
    description:
      "As a commissioned Notary Public, we authenticate documents, affidavits, deeds, contracts, and other legal instruments.",
  },
];

export default function PracticeAreas() {
  return (
    <section id="services" className="bg-[#f8f9fa] py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#b94a1a] uppercase mb-4">
            What We Handle
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a2332] leading-tight mb-6">
            Our <span className="italic text-[#2557a7]">Practice Areas</span>
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto leading-relaxed">
            We offer comprehensive legal services across a wide range of
            practice areas, tailored to meet the needs of each individual client.
          </p>
        </div>

        {/* Cards grid */}
        <div className="border border-[#e5e7eb] rounded-sm bg-white">
          <div className="grid md:grid-cols-2 divide-y divide-[#e5e7eb] md:divide-y-0">
            {areas.map((area, i) => (
              <div
                key={area.title}
                className={`p-8 ${
                  i % 2 === 0 ? "md:border-r border-[#e5e7eb]" : ""
                } ${i >= 2 ? "border-t border-[#e5e7eb]" : ""}`}
              >
                <div className="text-3xl mb-4">{area.icon}</div>
                <h3 className="font-serif text-xl text-[#2557a7] mb-3">
                  {area.title}
                </h3>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
