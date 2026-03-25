"use client";

import { useState, useRef, useEffect } from "react";

const practiceAreas = [
  "Corporate & Business Law",
  "Contracts",
  "Business Setup & Registration",
  "Regulatory Compliance",
  "Family Law",
  "Estate Planning",
  "Real Estate Transactions",
  "Interim Legal Counsel",
  "Notarial Services",
  "Legal Consultations",
  "Other",
];

const channels = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "info@loylegal.ph",
    href: "mailto:info@loylegal.ph",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Phone / Viber",
    value: "+63 917 701 2235",
    href: "tel:+639177012235",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Office Hours",
    value: "Mon – Fri, 9:00 AM – 6:00 PM PHT",
    href: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Office Address",
    value: "Unit 1, Inocencia Row, Guinoyuran Road\nP4A-Poblacion, Valencia City, Bukidnon 8709\nPhilippines",
    href: null,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState("");
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", area: "", description: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-28" style={{ background: "var(--c-bg2)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Left: info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-[1.5px] bg-[#1E3A5F]" />
            <p className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-[#1E3A5F] dark:text-[#6A9CC8]">
              Get in Touch
            </p>
          </div>
          <h2
            className="font-serif font-light leading-[1.14] text-[#0A1520] dark:text-[#E2EBF3] mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Start a{" "}
            <em className="italic text-[#1E3A5F] dark:text-[#6A9CC8]">Conversation</em>
          </h2>
          <p className="text-[0.97rem] font-light leading-[1.8] text-[#4A6070] dark:text-[#8BA4B8] mb-10 max-w-[440px]">
            Ready to discuss your legal needs? Reach out to schedule a
            consultation — remote or in-person. We typically respond within
            24 hours.
          </p>

          <div className="flex flex-col gap-0">
            {channels.map((ch, i) => (
              <div
                key={ch.label}
                className={`flex items-start gap-4 py-5 ${
                  i < channels.length - 1 ? "border-b border-[#E2E8F0] dark:border-white/10" : ""
                }`}
              >
                <div className="w-9 h-9 border border-[rgba(30,58,95,0.18)] dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center flex-shrink-0 text-[#1E3A5F] dark:text-[#6A9CC8]">
                  {ch.icon}
                </div>
                <div>
                  <p className="text-[0.66rem] font-semibold tracking-[0.1em] uppercase text-[#7A96A8] mb-0.5">
                    {ch.label}
                  </p>
                  {ch.href ? (
                    <a
                      href={ch.href}
                      className="text-[0.9rem] font-medium text-[#0A1520] dark:text-[#E2EBF3] hover:text-[#1E3A5F] dark:hover:text-[#6A9CC8] transition-colors"
                    >
                      {ch.value}
                    </a>
                  ) : (
                    <p className="text-[0.9rem] font-medium text-[#0A1520] dark:text-[#E2EBF3] whitespace-pre-line leading-[1.6]">
                      {ch.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div>
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-20 px-8 bg-white dark:bg-[#162032] border border-[#E2E8F0] dark:border-white/10">
              <div className="w-14 h-14 bg-[#1E3A5F] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-[1.6rem] font-light text-[#0A1520] dark:text-[#E2EBF3] mb-3">
                Inquiry Sent
              </h3>
              <p className="text-[0.87rem] font-light text-[#4A6070] dark:text-[#8BA4B8] max-w-xs leading-relaxed">
                Thank you for reaching out. We will review your inquiry and get
                back to you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ firstName: "", lastName: "", email: "", area: "", description: "" });
                }}
                className="mt-8 text-[0.78rem] font-semibold tracking-[0.1em] uppercase text-[#1E3A5F] dark:text-[#6A9CC8] hover:underline"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white dark:bg-[#162032] border border-[#E2E8F0] dark:border-white/10 p-8 flex flex-col gap-5">
              <p className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-[#1E3A5F] dark:text-[#6A9CC8] mb-1">
                Consultation Request
              </p>

              {/* Name row */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "firstName", label: "First Name", placeholder: "Juan" },
                  { name: "lastName",  label: "Last Name",  placeholder: "dela Cruz" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-[0.66rem] font-semibold tracking-[0.12em] uppercase text-[#4A6070] dark:text-[#8BA4B8] mb-2">
                      {f.label}
                    </label>
                    <input
                      type="text"
                      name={f.name}
                      value={form[f.name as keyof typeof form]}
                      onChange={handleChange}
                      placeholder={f.placeholder}
                      required
                      className="w-full border border-[#E2E8F0] dark:border-white/10 px-4 py-3 text-[0.9rem] text-[#0A1520] dark:text-[#E2EBF3] font-light placeholder-[#7A96A8] focus:outline-none focus:border-[#1E3A5F] transition-colors bg-white dark:bg-white/5"
                    />
                  </div>
                ))}
              </div>

              {/* Email */}
              <div>
                <label className="block text-[0.66rem] font-semibold tracking-[0.12em] uppercase text-[#4A6070] dark:text-[#8BA4B8] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="juan@example.com"
                  required
                  className="w-full border border-[#E2E8F0] dark:border-white/10 px-4 py-3 text-[0.9rem] text-[#0A1520] dark:text-[#E2EBF3] font-light placeholder-[#7A96A8] focus:outline-none focus:border-[#1E3A5F] transition-colors bg-white dark:bg-white/5"
                />
              </div>

              {/* Practice area — custom dropdown */}
              <div ref={dropdownRef}>
                <label className="block text-[0.66rem] font-semibold tracking-[0.12em] uppercase text-[#4A6070] dark:text-[#8BA4B8] mb-2">
                  Practice Area
                </label>
                <div className="relative">
                  {/* Trigger button */}
                  <button
                    type="button"
                    onClick={() => setDropdownOpen((o) => !o)}
                    className={`w-full flex items-center justify-between px-4 py-3 border bg-white dark:bg-white/5 text-[0.9rem] text-left transition-colors duration-200 ${
                      dropdownOpen
                        ? "border-[#1E3A5F]"
                        : "border-[#E2E8F0] dark:border-white/10 hover:border-[#7A96A8]"
                    }`}
                  >
                    <span className={form.area ? "text-[#0A1520] dark:text-[#E2EBF3]" : "text-[#7A96A8] font-light"}>
                      {form.area || "Select a practice area"}
                    </span>
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      className={`w-4 h-4 text-[#4A6070] dark:text-[#8BA4B8] flex-shrink-0 transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 8l5 5 5-5" />
                    </svg>
                  </button>

                  {/* Dropdown list */}
                  {dropdownOpen && (
                    <div className="absolute z-20 top-full left-0 right-0 bg-white dark:bg-[#162032] border border-[#1E3A5F] border-t-0 shadow-lg max-h-64 overflow-y-auto">
                      {practiceAreas.map((a, i) => (
                        <button
                          key={a}
                          type="button"
                          onClick={() => {
                            setForm({ ...form, area: a });
                            setDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 text-[0.88rem] transition-colors duration-150 flex items-center gap-3 ${
                            form.area === a
                              ? "bg-[#1E3A5F] text-white font-medium"
                              : "text-[#253545] dark:text-[#B8C9D8] hover:bg-[#F6F7F9] dark:hover:bg-white/5"
                          } ${i < practiceAreas.length - 1 ? "border-b border-[#E2E8F0] dark:border-white/10" : ""}`}
                        >
                          {form.area === a && (
                            <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 flex-shrink-0">
                              <path d="M13.354 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 01.708-.708L6 10.293l6.646-6.647a.5.5 0 01.708 0z"/>
                            </svg>
                          )}
                          <span className={form.area === a ? "" : "ml-[1.1rem]"}>{a}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {/* Hidden input for form validation */}
                <input type="hidden" name="area" value={form.area} required />
              </div>

              {/* Description */}
              <div>
                <label className="block text-[0.66rem] font-semibold tracking-[0.12em] uppercase text-[#4A6070] dark:text-[#8BA4B8] mb-2">
                  Brief Description of Your Matter
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Please briefly describe your legal concern..."
                  required
                  className="w-full border border-[#E2E8F0] dark:border-white/10 px-4 py-3 text-[0.9rem] text-[#0A1520] dark:text-[#E2EBF3] font-light placeholder-[#7A96A8] focus:outline-none focus:border-[#1E3A5F] transition-colors resize-y bg-white dark:bg-white/5"
                />
              </div>

              {error && (
                <p className="text-[0.82rem] text-red-600">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#1E3A5F] text-white text-[0.76rem] font-semibold tracking-[0.14em] uppercase hover:bg-[#2E5080] transition-colors duration-200 disabled:opacity-60 mt-1"
              >
                {loading ? "Sending…" : "Send Inquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
