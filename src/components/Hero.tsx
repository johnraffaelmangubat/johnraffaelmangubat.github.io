import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { BtnGhost, BtnPrimary, Marquee } from "./ui";

const EASE = [0.22, 1, 0.36, 1] as const;

const RESCUE_ROWS = [
  ["Critical bugs", "Fixed"],
  ["Malware", "Cleaned"],
  ["Loading speed", "Optimized"],
  ["Security", "Hardened"],
] as const;

function Chip({
  className,
  label,
  value,
  float = "animate-float",
  delay = "0s",
}: {
  className?: string;
  label: string;
  value: string;
  float?: string;
  delay?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.15, duration: 0.7, ease: EASE }}
      className={`absolute z-20 ${className ?? ""}`}
    >
      <div
        className={`glass-chip rounded-2xl px-4 py-3 shadow-[0_18px_50px_-16px_rgba(0,0,0,0.7)] ${float}`}
        style={{ animationDelay: delay }}
      >
        <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-neutral-400">
          {label}
        </p>
        <p className="mt-0.5 font-display text-sm font-semibold text-white">{value}</p>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const consoleY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden bg-ink-900">
      {/* ambient layers */}
      <div
        aria-hidden
        className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]"
      />
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-[130px]"
      />
      <div
        aria-hidden
        className="absolute -right-40 top-1/3 h-[420px] w-[420px] animate-drift rounded-full bg-white/[0.05] blur-[110px]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 pb-16 pt-36 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-44">
        {/* ---- identity ---- */}
        <div className="relative z-10 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="glass-chip inline-flex items-center gap-3 rounded-full py-2 pl-3 pr-5">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-white" aria-hidden />
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.26em] text-neutral-300">
                Open to international projects
              </span>
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.26em] text-neutral-500 sm:block">
              Web Developer & Digital Solutions Expert
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
            className="mt-8 font-display font-semibold leading-[0.99] tracking-tight text-white"
          >
            <span className="block text-[clamp(2.7rem,7.8vw,6rem)]">Digital</span>
            <span className="block text-[clamp(2.7rem,7.8vw,6rem)]">
              foundations<span className="text-white/30">,</span>
            </span>
            <span className="block text-[clamp(2.7rem,7.8vw,6rem)]">
              <span className="font-accent font-normal text-neutral-300">designed to scale</span>
            </span>
            <span className="text-stroke block text-[clamp(2.7rem,7.8vw,6rem)]">
              with your growth.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: EASE }}
            className="mt-8 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg"
          >
            I'm <span className="font-semibold text-white">John Raffael Mangubat</span> — a
            WordPress, Webflow and Wix developer. Since 2021 I've built complete
            websites from concept to launch, rescued projects other developers
            couldn't finish, and kept businesses online, secure and fast — for
            clients across every time zone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.42, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <BtnPrimary href="#contact">Start a project</BtnPrimary>
            <BtnGhost href="#journey">My development journey</BtnGhost>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-500"
          >
            <span className="text-neutral-300">WordPress</span>
            <span aria-hidden>·</span>
            <span>WooCommerce</span>
            <span aria-hidden>·</span>
            <span>Webflow</span>
            <span aria-hidden>·</span>
            <span>Wix</span>
            <span className="ml-2 hidden text-neutral-600 sm:inline">— global clients, across time zones</span>
          </motion.div>
        </div>

        {/* ---- rescue console ---- */}
        <div className="relative lg:col-span-5">
          <motion.div
            style={{ y: consoleY }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
            className="relative mx-auto max-w-sm lg:max-w-none"
          >
            <div
              aria-hidden
              className="absolute -inset-6 animate-spin-slow rounded-[2.5rem] border border-dashed border-white/15"
            />
            <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-white/[0.04] blur-2xl" />

            <div className="group relative overflow-hidden rounded-[2rem] border border-white/12 bg-ink-800 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
              {/* browser chrome */}
              <div className="flex items-center gap-3 border-b border-white/8 bg-ink-900/80 px-5 py-4">
                <div className="flex gap-1.5" aria-hidden>
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                </div>
                <div className="flex-1 rounded-md border border-white/8 bg-white/5 px-3 py-1 font-mono text-[10px] text-neutral-400">
                  https://your-business.com
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-neutral-500">
                    Site status report
                  </p>
                  <span className="rounded-full border border-white/15 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-400">
                    Rescue op
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {RESCUE_ROWS.map(([issue, state], i) => (
                    <motion.div
                      key={issue}
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.75 + i * 0.22, duration: 0.55, ease: EASE }}
                      className="flex items-center gap-4 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3.5 transition-colors duration-300 group-hover:border-white/15"
                    >
                      <span className="font-mono text-[9px] tracking-[0.24em] text-neutral-500">
                        0{i + 1}
                      </span>
                      <span className="text-sm text-neutral-300">{issue}</span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.05 + i * 0.22, duration: 0.4 }}
                        className="ml-auto inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white"
                      >
                        {state}
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] text-ink-900">
                          ✓
                        </span>
                      </motion.span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 0.6, ease: EASE }}
                  className="mt-6 flex items-center justify-between rounded-2xl bg-white px-5 py-4"
                >
                  <span className="font-display text-sm font-semibold text-ink-900">
                    Back online. Ready to convert.
                  </span>
                  <span className="h-2 w-2 animate-pulse-dot rounded-full bg-ink-900" aria-hidden />
                </motion.div>
              </div>
            </div>

            <Chip className="-left-4 top-10 sm:-left-10" label="Rescue" value="Projects others couldn't finish" />
            <Chip
              className="-right-3 top-1/2 sm:-right-8"
              label="Migrations"
              value="Zero downtime · zero data loss"
              float="animate-float-slow"
              delay="1.2s"
            />
            <Chip
              className="-bottom-6 left-8"
              label="E-commerce"
              value="High-volume WooCommerce"
              float="animate-float"
              delay="2.1s"
            />
          </motion.div>
        </div>
      </div>

      {/* ---- marquee strip ---- */}
      <div className="relative border-t border-white/10 py-6 sm:py-8">
        <Marquee speed={36}>
          {[
            "Complete builds",
            "Rescue operations",
            "Malware cleanup",
            "Security & maintenance",
            "Zero-downtime migrations",
            "AI-powered automation",
          ].map((t) => (
            <span
              key={t}
              className="flex items-center gap-8 pr-8 font-display text-4xl font-semibold uppercase tracking-tight sm:text-6xl"
            >
              <span className="text-stroke whitespace-nowrap transition-colors duration-500 hover:text-white">
                {t}
              </span>
              <span className="text-lg text-white/30" aria-hidden>
                ✦
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
