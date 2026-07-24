import { ArrowUpRight, Reveal, SectionHead } from "./ui";
import { CONTACT } from "../content/contact";

const ROLES = [
  {
    period: "2021 — 2023",
    company: "GoCrayons Digital Inc",
    role: "Senior WordPress Developer",
    points: [
      "Complete websites from concept to launch — user journeys that convert",
      "Sophisticated WooCommerce stores with complex catalogs and high-volume transactions",
      "Emergency repairs, malware cleanup, and projects rescued from other developers",
      "Mentored team members on complex solutions across client projects",
    ],
  },
  {
    period: "2023 — Present",
    company: "Growmodo GmbH",
    role: "WordPress · Webflow · Wix Developer",
    points: [
      "Complete multi-platform builds — WordPress, Wix and Webflow",
      "Strategy calls, detailed estimates and timelines clients can budget against",
      "Complex migrations with zero downtime or data loss, plus AI tool integration",
      "Mentoring international team members and delivering across time zones",
    ],
  },
];

const SNAPSHOT = [
  ["2021", "career start"],
  ["3", "platforms — WP · Wix · Webflow"],
  ["2", "companies, one record"],
  ["24h", "max reply time"],
] as const;

export default function SocialProof() {
  return (
    <section aria-label="Professional experience" className="border-y border-white/10 bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
        <SectionHead
          dark
          kicker="Professional experience"
          title={
            <>
              Two companies.{" "}
              <span className="font-accent font-normal text-neutral-300">Every kind of</span>{" "}
              website challenge.
            </>
          }
          desc="From senior WordPress work at a digital agency to multi-platform delivery for global clients — the full record, on this page, in order."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {ROLES.map((r, i) => (
            <Reveal key={r.company} delay={i * 0.12} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/[0.06] sm:p-10">
                <span
                  aria-hidden
                  className="absolute -right-1 -top-1 font-display text-[7rem] font-semibold leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-white/[0.08]"
                >
                  0{i + 1}
                </span>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 font-mono text-[9px] uppercase tracking-[0.24em] text-neutral-300">
                  <span className="h-1 w-1 rounded-full bg-white" aria-hidden />
                  {r.period}
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {r.company}
                </h3>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-400">
                  {r.role}
                </p>
                <ul className="mt-7 flex-1 space-y-3.5">
                  {r.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-neutral-400">
                      <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border border-white/25 text-[9px] text-white" aria-hidden>
                        ✓
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={CONTACT.portfolio}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-300 transition-colors hover:text-white"
                >
                  Same record on my portfolio site
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        {/* snapshot strip */}
        <Reveal delay={0.15}>
          <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {SNAPSHOT.map(([v, l]) => (
              <div
                key={l}
                className="group flex items-baseline gap-4 bg-ink-950 px-7 py-6 transition-colors duration-500 hover:bg-white"
              >
                <span className="font-display text-3xl font-semibold tracking-tight text-white transition-colors duration-500 group-hover:text-ink-900">
                  {v}
                </span>
                <span className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-neutral-500 transition-colors duration-500 group-hover:text-neutral-600">
                  {l}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
