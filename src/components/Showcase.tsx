import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Kicker, Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";

const LINKEDIN =
  "https://www.linkedin.com/in/john-raffael-mangubat-96376223b/";

type Group = { title: string; items: string[] };
type Role = {
  period: string;
  company: string;
  role: string;
  summary: string;
  groups: Group[];
};

const ROLES: Role[] = [
  {
    period: "2021 — 2023",
    company: "GoCrayons Digital Inc",
    role: "Senior WordPress Developer",
    summary: "The problem-solver years — became the go-to developer for rescue operations, malware cleanup, and projects no one else could finish.",
    groups: [
      {
        title: "Complete website development",
        items: [
          "Full websites from concept to launch — homepage to every subpage",
          "Cohesive user journeys that convert",
          "Sophisticated WooCommerce stores — complex catalogs, high-volume transactions",
          "Accurate project timelines clients could count on",
        ],
      },
      {
        title: "Problem-solving & rescue operations",
        items: [
          "Fixed critical bugs that were costing clients sales",
          "Emergency site repairs — businesses back online fast",
          "Malware-infected websites cleaned and restored",
          "Rescued projects other developers couldn't complete",
        ],
      },
      {
        title: "Security & maintenance excellence",
        items: [
          "Bulletproof security measures against future attacks",
          "Ongoing maintenance — clients focus on business, not tech",
          "Protocols that prevented costly downtime and data breaches",
        ],
      },
      {
        title: "Strategic website optimization",
        items: [
          "Improvement recommendations that turned underperformers into conversion machines",
          "Best practices applied consistently across client projects",
          "Mentored team members on complex solutions",
        ],
      },
    ],
  },
  {
    period: "2023 — Present",
    company: "Growmodo GmbH",
    role: "WordPress · Webflow · Wix Developer",
    summary: "Multi-platform delivery for global clients — strategy calls, complete builds, migrations and AI-powered automation, across time zones.",
    groups: [
      {
        title: "Strategic project planning & setup",
        items: [
          "Detailed estimates and timelines — budget confidently",
          "Roadblocks identified and eliminated before they cost you",
          "The perfect stack — WordPress, Wix or Webflow — for your needs",
          "Strategy calls aligning your website with business objectives",
        ],
      },
      {
        title: "Complete multi-platform development",
        items: [
          "Comprehensive websites across WordPress, Wix and Webflow",
          "E-commerce with seamless shopping and secure payments",
          "Complex migrations — no downtime, no data loss",
          "AI tools to automate processes and enhance UX",
        ],
      },
      {
        title: "Performance & optimization excellence",
        items: [
          "Rigorous testing — every function flawless before launch",
          "Lightning-fast speeds that engage visitors and improve rankings",
          "Strategic SEO foundations that get you found",
          "Continuous monitoring and improvement post-launch",
        ],
      },
      {
        title: "Security & maintenance mastery",
        items: [
          "Ongoing maintenance — your business never suffers from tech issues",
          "Malware cleaning and protection of reputation and customer data",
          "Robust measures that ensure business continuity",
        ],
      },
      {
        title: "Team leadership & problem-solving",
        items: [
          "Mentoring international team members on complex challenges",
          "Solving problems other developers can't — projects never get stuck",
          "Collaborating across time zones for seamless global delivery",
        ],
      },
    ],
  },
];

const PROCESS = [
  ["01", "Strategy call", "Your website aligned with your business objectives."],
  ["02", "Estimate & timeline", "Detailed, written — so you can budget confidently."],
  ["03", "Stack selection", "WordPress, Wix or Webflow, chosen around your needs."],
  ["04", "Build & test", "Every function tested rigorously before launch."],
  ["05", "Launch & improve", "Monitored and improved continuously, post-launch."],
];

export default function Showcase() {
  const [active, setActive] = useState(0);
  const role = ROLES[active];

  return (
    <section id="journey" className="relative scroll-mt-24 overflow-hidden bg-ink-900">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.045] blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHead
          dark
          kicker="My development journey"
          title={
            <>
              Every possible website disaster —{" "}
              <span className="font-accent font-normal text-neutral-300">already encountered.</span>
            </>
          }
          desc="Two roles, one consistent record: websites that stay online, load fast, convert, and never hold a business hostage."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          {/* role tabs */}
          <div className="lg:col-span-4">
            <div role="tablist" aria-label="Professional roles" className="flex flex-col gap-3">
              {ROLES.map((r, i) => (
                <Reveal key={r.company} delay={i * 0.08}>
                  <button
                    role="tab"
                    aria-selected={active === i}
                    onClick={() => setActive(i)}
                    className={cn(
                      "relative w-full rounded-2xl border p-6 text-left transition-all duration-500",
                      active === i
                        ? "border-white/25 bg-white text-ink-900"
                        : "border-white/10 text-white hover:border-white/30 hover:bg-white/[0.04]"
                    )}
                  >
                    <span
                      className={cn(
                        "font-mono text-[9px] uppercase tracking-[0.26em]",
                        active === i ? "text-neutral-500" : "text-neutral-400"
                      )}
                    >
                      {r.period}
                    </span>
                    <p className="mt-2 font-display text-xl font-semibold tracking-tight">
                      {r.company}
                    </p>
                    <p
                      className={cn(
                        "mt-1 font-mono text-[10px] uppercase tracking-[0.2em]",
                        active === i ? "text-neutral-500" : "text-neutral-400"
                      )}
                    >
                      {r.role}
                    </p>
                    <span
                      aria-hidden
                      className={cn(
                        "absolute right-5 top-5 h-2 w-2 rounded-full transition-colors duration-500",
                        active === i ? "animate-pulse-dot bg-ink-900" : "bg-white/25"
                      )}
                    />
                  </button>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer noopener"
                className="group mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-neutral-300 transition-colors hover:text-white"
              >
                Full record on LinkedIn
                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </Reveal>
          </div>

          {/* role detail */}
          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-white/12 bg-ink-800 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="p-6 sm:p-9"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <p className="font-display text-2xl font-semibold text-white">
                        {role.company}
                      </p>
                      <span className="rounded-full border border-white/15 px-4 py-1.5 font-mono text-[9px] uppercase tracking-[0.22em] text-neutral-400">
                        {role.period}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                      {role.role}
                    </p>
                    <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base">
                      {role.summary}
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      {role.groups.map((g, gi) => (
                        <motion.div
                          key={g.title}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.12 + gi * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.06]"
                        >
                          <p className="font-display text-sm font-semibold text-white">
                            {g.title}
                          </p>
                          <ul className="mt-3.5 space-y-2.5">
                            {g.items.map((it) => (
                              <li key={it} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-neutral-400">
                                <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-white/60" aria-hidden />
                                {it}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ---- process ---- */}
        <div id="process" className="mt-28 scroll-mt-28">
          <div className="flex items-end justify-between gap-6">
            <Reveal>
              <Kicker dark>How every project runs</Kicker>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-500">
                Strategy call → launch → continuous improvement
              </p>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 0.07} className="h-full">
                <div className="group flex h-full flex-col bg-ink-900 p-6 transition-colors duration-500 hover:bg-white hover:text-ink-900">
                  <span className="font-display text-3xl font-light text-white/20 transition-colors duration-500 group-hover:text-ink-900/20">
                    {n}
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold">{t}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-neutral-400 transition-colors duration-500 group-hover:text-neutral-600">
                    {d}
                  </p>
                  <span className="mt-auto pt-5" aria-hidden>
                    <ArrowRight className="h-4 w-4 -translate-x-2 text-white/0 transition-all duration-500 group-hover:translate-x-0 group-hover:text-ink-900" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
