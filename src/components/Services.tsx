import type { ReactNode } from "react";
import { ArrowUpRight, Reveal, SectionHead, Spotlight } from "./ui";
import { cn } from "../utils/cn";

function Card({
  index,
  title,
  desc,
  tags,
  className,
  dark = false,
  children,
}: {
  index: string;
  title: string;
  desc: string;
  tags: string[];
  className?: string;
  dark?: boolean;
  children?: ReactNode;
}) {
  return (
    <Reveal delay={Number(index) * 0.05} className="h-full">
      <Spotlight
        light={!dark}
        className={cn(
          "flex h-full flex-col rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 sm:p-8",
          dark
            ? "border border-ink-900 bg-ink-900 text-white hover:shadow-[0_28px_60px_-20px_rgba(10,10,10,0.5)]"
            : "border border-ink-900/10 bg-white hover:border-ink-900/25 hover:shadow-[0_28px_60px_-24px_rgba(10,10,10,0.28)]",
          className
        )}
      >
        <div className="flex items-start justify-between">
          <span className={cn("font-mono text-[10px] tracking-[0.3em]", dark ? "text-neutral-500" : "text-neutral-400")}>
            /{index}
          </span>
          <span
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-500 group-hover:rotate-45",
              dark
                ? "border-white/20 text-white group-hover:bg-white group-hover:text-ink-900"
                : "border-ink-900/15 text-ink-900 group-hover:bg-ink-900 group-hover:text-white"
            )}
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
        <h3 className={cn("mt-6 font-display text-2xl font-semibold tracking-tight", dark ? "text-white" : "text-ink-900")}>
          {title}
        </h3>
        <p className={cn("mt-3 text-sm leading-relaxed", dark ? "text-neutral-400" : "text-neutral-600")}>{desc}</p>
        {children}
        <div className="mt-auto flex flex-wrap gap-2 pt-7">
          {tags.map((t) => (
            <span
              key={t}
              className={cn(
                "rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors duration-300",
                dark
                  ? "border-white/15 text-neutral-400 group-hover:border-white/40 group-hover:text-white"
                  : "border-ink-900/12 text-neutral-500 group-hover:border-ink-900/30 group-hover:text-ink-900"
              )}
            >
              {t}
            </span>
          ))}
        </div>
      </Spotlight>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-paper text-ink-900">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            kicker="Expertise"
            title={
              <>
                From basic fixes to{" "}
                <span className="font-accent font-normal">complete rebuilds.</span>
              </>
            }
            desc="Full-stack capability across WordPress, Webflow and Wix — so you never have to coordinate with multiple vendors or technical teams."
          />
          <Reveal delay={0.2} className="hidden pb-2 lg:block">
            <p className="max-w-[210px] border-l border-ink-900/15 pl-5 font-mono text-[10px] uppercase leading-loose tracking-[0.22em] text-neutral-500">
              Capabilities
              <br />
              01 — 07
              <br />
              One accountable developer
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid auto-rows-auto gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* signature card — rescue operations */}
          <Card
            index="01"
            dark
            className="lg:row-span-2"
            title="Rescue operations"
            desc="The go-to problem solver for complex challenges: critical bugs that were costing sales, emergency repairs to get businesses back online fast, and malware-infected websites cleaned and restored to full functionality — including projects other developers couldn't complete."
            tags={["Emergency repairs", "Malware cleanup", "Lost projects rescued"]}
          >
            <div className="mt-7 space-y-2.5 rounded-2xl border border-white/10 p-5" aria-hidden>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 animate-pulse-dot rounded-full bg-white" />
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-neutral-400">
                  Site down → back online
                </span>
              </div>
              {[100, 78, 58].map((w, i) => (
                <div key={i} className="h-2 rounded bg-white/10" style={{ width: `${w}%` }}>
                  <div className="eq-bar h-full rounded bg-white/60" style={{ animationDelay: `${i * 0.2}s` }} />
                </div>
              ))}
              <p className="pt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                Reputation protected · sales recovered
              </p>
            </div>
          </Card>

          <Card
            index="02"
            className="lg:col-span-2"
            title="Complete website development"
            desc="Full websites from concept to launch — homepage to every subpage — with cohesive user journeys that convert, and accurate project timelines you can count on for business planning and launch dates."
            tags={["Concept to launch", "User journeys that convert", "Accurate timelines"]}
          >
            <div className="flex h-14 items-end gap-1.5 sm:w-64" aria-hidden>
              {[35, 48, 42, 60, 55, 74, 68, 88, 80, 100].map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-sm bg-ink-900/15 transition-all duration-500 group-hover:bg-ink-900"
                  style={{ height: `${h}%`, transitionDelay: `${i * 45}ms` }}
                />
              ))}
            </div>
          </Card>

          <Card
            index="03"
            title="E-commerce & WooCommerce"
            desc="Sophisticated stores that handle complex product catalogs and high-volume transactions — seamless shopping experiences with secure payment processing."
            tags={["WooCommerce", "Complex catalogs", "Secure payments"]}
          >
            <div className="mt-6 grid grid-cols-4 gap-2" aria-hidden>
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className="h-7 rounded-md border border-ink-900/15 bg-ink-900/[0.04] transition-all duration-500 group-hover:border-ink-900/40 group-hover:bg-ink-900/10"
                  style={{ transitionDelay: `${i * 55}ms` }}
                />
              ))}
            </div>
          </Card>

          <Card
            index="04"
            title="Security & maintenance"
            desc="Bulletproof security measures, ongoing maintenance, and comprehensive protocols that prevent costly downtime and data breaches — so you focus on running the business, not worrying about it."
            tags={["Hardening", "Ongoing maintenance", "Breach prevention"]}
          >
            <div className="mt-6 flex items-center gap-3" aria-hidden>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/25 text-ink-900 transition-all duration-500 group-hover:border-ink-900 group-hover:bg-ink-900 group-hover:text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
                  <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
                  <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                Business continuity
                <br />
                protected
              </span>
            </div>
          </Card>

          <Card
            index="05"
            title="Performance & SEO"
            desc="Rigorous testing before launch, lightning-fast loading speeds that keep visitors engaged and improve Google rankings, strategic SEO foundations, and continuous monitoring after go-live."
            tags={["Speed", "Google rankings", "SEO foundations"]}
          >
            <div className="mt-6 flex items-center gap-3" aria-hidden>
              <span className="relative flex h-14 w-14 items-center justify-center">
                <svg viewBox="0 0 56 56" className="h-14 w-14 -rotate-90">
                  <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(10,10,10,0.12)" strokeWidth="4" />
                  <circle
                    cx="28"
                    cy="28"
                    r="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="150.8"
                    strokeDashoffset="12"
                    className="text-ink-900"
                  />
                </svg>
                <span className="absolute font-display text-xs font-bold">FAST</span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500">
                Tested rigorously
                <br />
                before launch
              </span>
            </div>
          </Card>

          <Card
            index="06"
            className="md:col-span-2"
            title="Multi-platform builds & migrations"
            desc="The perfect tech stack — WordPress, Wix or Webflow — selected around your specific business needs. Complex website migrations handled without downtime or data loss, with AI tools integrated to automate processes and enhance user experience."
            tags={["WordPress", "Wix", "Webflow", "Zero-downtime migrations", "AI tools"]}
          >
            <div className="flex h-14 items-center gap-2" aria-hidden>
              {["WP", "WF", "WX"].map((p, i) => (
                <span
                  key={p}
                  className="flex h-10 w-12 items-center justify-center rounded-lg border border-ink-900/20 bg-ink-900/[0.04] font-display text-xs font-bold text-ink-900 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:bg-ink-900 group-hover:text-white"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  {p}
                </span>
              ))}
              <span className="ml-3 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400">
                Stack selected around your needs
              </span>
            </div>
          </Card>

          <Card
            index="07"
            title="Strategy & planning"
            desc="Detailed estimates and timelines so you can budget confidently, roadblocks eliminated before they cost you time and money, and strategy calls that align your website with your business objectives."
            tags={["Estimates", "Strategy calls", "Roadblock removal"]}
          >
            <div className="mt-6 space-y-2" aria-hidden>
              {[88, 64, 76].map((w, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="h-4 w-4 rounded-full border border-ink-900/30 transition-colors duration-500 group-hover:border-ink-900 group-hover:bg-ink-900" />
                  <span className="h-2 rounded bg-ink-900/12" style={{ width: `${w}%` }} />
                </div>
              ))}
              <p className="pt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400">
                Budget confidently · plan launches
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
