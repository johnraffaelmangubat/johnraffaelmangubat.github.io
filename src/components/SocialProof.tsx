import { ArrowUpRight, Reveal, SectionHead, Spotlight } from "./ui";

const LINKEDIN =
  "https://www.linkedin.com/in/john-raffael-mangubat-96376223b/";

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

const PROOFS = [
  {
    n: "01",
    title: "Experience",
    desc: "Roles, responsibilities and timelines — listed in full, in order, on the record.",
  },
  {
    n: "02",
    title: "Recommendations",
    desc: "Written by real clients and colleagues, attached to profiles you can inspect.",
  },
  {
    n: "03",
    title: "Skills & endorsements",
    desc: "Endorsed by the people who've actually seen the work done.",
  },
  {
    n: "04",
    title: "Education & credentials",
    desc: "Issued by institutions, displayed exactly as awarded.",
  },
];

export default function SocialProof() {
  return (
    <>
      {/* ---- experience record (dark) ---- */}
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
            desc="From senior WordPress work at a digital agency to multi-platform delivery for global clients — the full record, in order."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {ROLES.map((r, i) => (
              <Reveal key={r.company} delay={i * 0.12} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/[0.06] sm:p-10">
                  <span
                    aria-hidden
                    className="absolute -right-4 -top-8 font-display text-[7rem] font-semibold leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-white/[0.08]"
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
                    href={LINKEDIN}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-300 transition-colors hover:text-white"
                  >
                    Verify on LinkedIn
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- proof cards (light) ---- */}
      <section className="bg-paper text-ink-900">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-neutral-500">
                  <span className="inline-block h-px w-8 bg-neutral-400" aria-hidden />
                  Proof, not promises
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl">
                  Don't take a landing page's{" "}
                  <span className="font-accent font-normal">word</span> for anything.
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 text-neutral-600">
                  Anyone can write a testimonial. Mine sit on LinkedIn, signed by
                  real profiles with real working histories — one click away and
                  on the record. Before we ever talk, you can audit the whole
                  story yourself.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-900"
                >
                  <span className="link-slide">Open the profile</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-900/12 bg-ink-900/12 sm:grid-cols-2 lg:col-span-7">
              {PROOFS.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.08} className="h-full">
                  <Spotlight light className="h-full">
                    <a
                      href={LINKEDIN}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex h-full flex-col justify-between gap-10 bg-paper p-8 transition-colors duration-500 hover:bg-ink-900"
                    >
                      <span className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500 transition-colors duration-500 group-hover:text-neutral-400">
                        {p.n}
                        <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 translate-y-1 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                      </span>
                      <div>
                        <p className="font-display text-2xl font-semibold tracking-tight text-ink-900 transition-colors duration-500 group-hover:text-white">
                          {p.title}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-600 transition-colors duration-500 group-hover:text-neutral-400">
                          {p.desc}
                        </p>
                        <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.24em] text-neutral-400 transition-colors duration-500 group-hover:text-neutral-500">
                          View on LinkedIn ↗
                        </p>
                      </div>
                    </a>
                  </Spotlight>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
