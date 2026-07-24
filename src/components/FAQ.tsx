import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";
import { CONTACT } from "../content/contact";

const ITEMS: [string, string][] = [
  [
    "Which platforms do you work with?",
    "WordPress, Webflow and Wix — plus WooCommerce for e-commerce. The stack is never chosen for convenience: it's selected around your specific business needs during a strategy call, so the website aligns with your business objectives from day one.",
  ],
  [
    "Can you rescue a broken, hacked, or underperforming site?",
    "Yes — that's a specialty. Critical bugs fixed fast, emergency repairs to get businesses back online, malware-infected websites cleaned and restored to full functionality, and projects rescued that other developers couldn't complete. After the rescue comes hardening, so it doesn't happen again.",
  ],
  [
    "How are timelines and budgets handled?",
    "You get a detailed estimate and timeline in writing before anything begins — accurate enough to plan your business launch around. Roadblocks are identified and eliminated before they cost you time and money, so you can budget confidently.",
  ],
  [
    "What about migrating from my current website?",
    "Complex website migrations are handled without downtime or data loss. Your business stays online and your customers never notice anything except the improvement.",
  ],
  [
    "I'm based in another country. Will that work?",
    "That's the normal case, not the exception. I collaborate across time zones every day for global clients and mentor international team members — delivery stays seamless wherever you are.",
  ],
  [
    "What happens after launch?",
    "The work doesn't stop at go-live: continuous monitoring and performance improvement, ongoing maintenance and security, and strategic recommendations that keep driving growth — so your business never suffers from technical issues while you focus on running it.",
  ],
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 border-t border-ink-900/10 bg-paper text-ink-900">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHead
              kicker="FAQ"
              title={
                <>
                  Answers, <span className="font-accent font-normal">upfront.</span>
                </>
              }
              desc="The questions international clients usually ask first — answered before you have to ask."
            />
            <Reveal delay={0.2}>
              <div className="mt-10 rounded-3xl border border-ink-900/12 bg-white p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-neutral-500">
                  Fastest reply
                </p>
                <p className="mt-3 font-display text-xl font-semibold">
                  Send the project brief — reply within one business day.
                </p>
                <div className="mt-5 flex flex-col items-start gap-3">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-900"
                  >
                    <span className="link-slide">Go to the project form</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="font-mono text-[11px] tracking-[0.08em] text-neutral-500 transition-colors hover:text-ink-900"
                  >
                    or email {CONTACT.email}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          {ITEMS.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <Reveal key={q} delay={i * 0.04}>
                <div className="border-t border-ink-900/12 last:border-b">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-neutral-500"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-400">
                        0{i + 1}
                      </span>
                      <span className="font-display text-lg font-semibold tracking-tight sm:text-xl">
                        {q}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
                        isOpen
                          ? "rotate-45 border-ink-900 bg-ink-900 text-white"
                          : "border-ink-900/25"
                      )}
                      aria-hidden
                    >
                      <span className="absolute h-3 w-px bg-current" />
                      <span className="absolute h-px w-3 bg-current" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 pl-[52px] text-sm leading-relaxed text-neutral-600 sm:text-base">
                          {a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
