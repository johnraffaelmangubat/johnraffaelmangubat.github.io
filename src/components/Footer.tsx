import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, BtnGhost, BtnPrimary, Marquee, Reveal } from "./ui";

const LINKEDIN =
  "https://www.linkedin.com/in/john-raffael-mangubat-96376223b/";

const SITEMAP = [
  ["Expertise", "#services"],
  ["Journey", "#journey"],
  ["Process", "#process"],
  ["Why me", "#why"],
  ["Engagement", "#engagement"],
  ["FAQ", "#faq"],
] as const;

const EXPERTISE = [
  "Complete builds",
  "Rescue operations",
  "E-commerce & WooCommerce",
  "Security & maintenance",
  "Migrations & AI tools",
] as const;

export default function Footer() {
  return (
    <>
      {/* ================= CTA ================= */}
      <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-ink-900">
        <div
          aria-hidden
          className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,black,transparent)]"
        />
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[560px] w-[860px] -translate-x-1/2 -translate-y-1/2 animate-drift rounded-full bg-white/[0.05] blur-[130px]"
        />
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-dashed border-white/10"
        />

        <div className="relative mx-auto max-w-5xl px-5 py-28 text-center sm:px-8 lg:py-40">
          <Reveal>
            <p className="glass-chip mx-auto mb-8 inline-flex items-center gap-3 rounded-full px-5 py-2 font-mono text-[10px] uppercase tracking-[0.26em] text-neutral-300">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-white" aria-hidden />
              Strategy call first · detailed estimate second
            </p>
          </Reveal>

          <motion.h2
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.8rem,8vw,6.5rem)] font-semibold leading-[1.02] tracking-tight text-white"
          >
            Let's build your
            <br />
            <span className="font-accent font-normal text-neutral-300">digital foundation.</span>
          </motion.h2>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
              Tell me about your business and your goals. You'll get a detailed
              estimate and timeline — accurate enough to budget confidently and
              plan your launch around.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <BtnPrimary href={LINKEDIN}>Message me on LinkedIn</BtnPrimary>
              <BtnGhost href="#journey">Review the experience first</BtnGhost>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.26em] text-neutral-500">
              WordPress · WooCommerce · Webflow · Wix — global clients, across time zones
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 bg-ink-950">
        <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* brand */}
            <div className="lg:col-span-5">
              <a href="#top" className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center border border-white/30 font-display text-xs font-bold text-white transition-all duration-300 hover:rotate-90 hover:bg-white hover:text-ink-900">
                  JM
                </span>
                <span className="font-display text-sm font-semibold tracking-[0.22em] text-white">
                  MANGUBAT<span className="text-neutral-500">®</span>
                </span>
              </a>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-400">
                Web Developer & Digital Solutions Expert. Complete builds,
                rescue operations, security and performance — for international
                clients, across every time zone.
              </p>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-500">
                GoCrayons Digital Inc · Growmodo GmbH · 2021 — present
              </p>
            </div>

            {/* sitemap */}
            <nav aria-label="Footer" className="lg:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                Sitemap
              </p>
              <ul className="mt-5 space-y-3">
                {SITEMAP.map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="link-slide text-sm text-neutral-300 transition-colors hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* expertise */}
            <div className="lg:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                Expertise
              </p>
              <ul className="mt-5 space-y-3">
                {EXPERTISE.map((label) => (
                  <li key={label}>
                    <a
                      href="#services"
                      className="group inline-flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-white"
                    >
                      {label}
                      <ArrowUpRight className="h-3 w-3 text-neutral-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* start here */}
            <div className="lg:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                Start here
              </p>
              <p className="mt-5 text-sm leading-relaxed text-neutral-400">
                One project at a time. Detailed estimate before anything begins.
              </p>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-white hover:text-ink-900"
              >
                Connect
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* giant wordmark marquee */}
        <Marquee speed={50} className="border-t border-white/10 py-6 opacity-70">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-10 pr-10" aria-hidden>
              <span className="text-stroke whitespace-nowrap font-display text-6xl font-semibold uppercase tracking-tight sm:text-7xl">
                John Raffael Mangubat
              </span>
              <span className="text-white/25">✦</span>
            </span>
          ))}
        </Marquee>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500 sm:flex-row sm:px-8">
            <p>© 2026 John Raffael Mangubat · All rights reserved</p>
            <p>Web Developer & Digital Solutions Expert</p>
          </div>
        </div>
      </footer>
    </>
  );
}
