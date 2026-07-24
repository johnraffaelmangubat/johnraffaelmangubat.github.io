import { ArrowRight, ArrowUpRight, Marquee } from "./ui";
import { CONTACT } from "../content/contact";

const SITEMAP = [
  ["Expertise", "#services"],
  ["Journey", "#journey"],
  ["Process", "#process"],
  ["Why me", "#why"],
  ["Engagement", "#engagement"],
  ["FAQ", "#faq"],
] as const;

const EXPERTISE = [
  ["Complete builds", "#services"],
  ["Rescue operations", "#services"],
  ["E-commerce & WooCommerce", "#services"],
  ["Security & maintenance", "#services"],
  ["Migrations & AI tools", "#services"],
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border border-white/30 font-display text-xs font-bold text-white transition-all duration-300 hover:rotate-90 hover:bg-white hover:text-ink-900">
                JM
              </span>
              <span className="font-display text-sm font-semibold tracking-[0.22em] text-white">
                MANGUBAT<span className="text-neutral-500">®</span>
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-400">
              {CONTACT.title}. Complete builds, rescue operations, security and
              performance — for international clients, across every time zone.
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
              {EXPERTISE.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {label}
                    <ArrowUpRight className="h-3 w-3 text-neutral-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact details */}
          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="link-slide text-neutral-300 transition-colors hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="link-slide text-neutral-300 transition-colors hover:text-white"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="text-neutral-400">{CONTACT.location}</li>
              <li>
                <a
                  href={CONTACT.portfolio}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-2 text-neutral-300 transition-colors hover:text-white"
                >
                  Portfolio
                  <ArrowUpRight className="h-3 w-3 text-neutral-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-2 text-neutral-300 transition-colors hover:text-white"
                >
                  LinkedIn
                  <ArrowUpRight className="h-3 w-3 text-neutral-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </a>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-white hover:text-ink-900"
            >
              Start a project
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
          <p>© 2026 {CONTACT.name} · All rights reserved</p>
          <p>{CONTACT.title}</p>
        </div>
      </div>
    </footer>
  );
}
