import { ArrowRight, Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";

const TIERS = [
  {
    name: "Rescue & repair",
    tag: "For broken, hacked, or stuck sites",
    price: "Custom quote",
    unit: "emergency response available",
    featured: false,
    cta: "Describe the problem",
    features: [
      "Critical bug fixes — fast",
      "Emergency repairs to get you back online",
      "Malware cleaning & full restoration",
      "Security hardening against future attacks",
      "Improvement recommendations that recover lost sales",
    ],
  },
  {
    name: "Complete build",
    tag: "From concept to launch",
    price: "Custom quote",
    unit: "detailed estimate before kickoff",
    featured: true,
    cta: "Plan your build",
    features: [
      "Full website — homepage to every subpage",
      "WordPress, Wix or Webflow, matched to your needs",
      "E-commerce with secure payment processing",
      "Migrations with zero downtime or data loss",
      "AI tools to automate processes and enhance UX",
      "Rigorous testing — every function, before launch",
    ],
  },
  {
    name: "Ongoing partner",
    tag: "Maintenance, security & growth",
    price: "Custom quote",
    unit: "arranged around your business",
    featured: false,
    cta: "Discuss your site",
    features: [
      "Ongoing maintenance — zero technical worry",
      "Security monitoring & breach prevention",
      "Continuous performance & SEO improvement",
      "Strategic recommendations that drive growth",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="engagement" className="scroll-mt-24 bg-paper text-ink-900">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHead
          align="center"
          kicker="Ways to work together"
          title={
            <>
              Three ways to <span className="font-accent font-normal">begin.</span>
            </>
          }
          desc="Every engagement starts with a detailed estimate and timeline, so you can budget confidently and plan your launch. These are the shapes projects usually take."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} className="h-full">
              <div
                className={cn(
                  "group relative flex h-full flex-col rounded-3xl p-8 transition-all duration-500",
                  t.featured
                    ? "bg-ink-900 text-white shadow-[0_36px_80px_-28px_rgba(10,10,10,0.55)] lg:-my-4 lg:py-12 hover:shadow-[0_48px_100px_-28px_rgba(10,10,10,0.7)]"
                    : "border border-ink-900/12 bg-white hover:-translate-y-1.5 hover:border-ink-900/30 hover:shadow-[0_24px_60px_-24px_rgba(10,10,10,0.25)]"
                )}
              >
                {t.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/20 bg-white px-4 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-ink-900">
                    Concept to launch
                  </span>
                )}

                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {t.name}
                  </h3>
                  <span
                    className={cn(
                      "font-display text-4xl font-light",
                      t.featured ? "text-white/15" : "text-ink-900/12"
                    )}
                    aria-hidden
                  >
                    0{i + 1}
                  </span>
                </div>
                <p
                  className={cn(
                    "mt-1 font-mono text-[10px] uppercase tracking-[0.24em]",
                    t.featured ? "text-neutral-400" : "text-neutral-500"
                  )}
                >
                  {t.tag}
                </p>

                <div className="mt-8">
                  <p className="font-display text-4xl font-semibold tracking-tight">
                    {t.price}
                  </p>
                  <p
                    className={cn(
                      "mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em]",
                      t.featured ? "text-neutral-400" : "text-neutral-500"
                    )}
                  >
                    {t.unit}
                  </p>
                </div>

                <ul className="mt-8 flex-1 space-y-3.5">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span
                        className={cn(
                          "mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border text-[9px]",
                          t.featured
                            ? "border-white/30 text-white"
                            : "border-ink-900/25 text-ink-900"
                        )}
                        aria-hidden
                      >
                        ✓
                      </span>
                      <span className={t.featured ? "text-neutral-300" : "text-neutral-600"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    "mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-display text-sm font-semibold transition-all duration-300",
                    t.featured
                      ? "bg-white text-ink-900 hover:shadow-[0_0_36px_rgba(255,255,255,0.3)]"
                      : "border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-white"
                  )}
                >
                  {t.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 text-center font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-500">
            Detailed estimates & timelines in writing · Accurate enough to plan your launch around
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mt-8 text-center">
          <a
            href="#contact"
            className="link-slide font-mono text-[11px] uppercase tracking-[0.22em] text-ink-900"
          >
            Not sure which fits? Describe it in the project form ↓
          </a>
        </Reveal>
      </div>
    </section>
  );
}
