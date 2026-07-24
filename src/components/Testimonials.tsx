import { Marquee, Reveal } from "./ui";

const ROW_A = [
  "Digital foundations that scale",
  "Built to integrate with your operations",
  "Minimal ongoing technical management",
  "A reliable partner",
];

const ROW_B = [
  "Rescued projects others couldn't finish",
  "Malware cleaned & restored",
  "Zero-downtime migrations",
  "Lightning-fast loading speeds",
];

function Phrase({ t }: { t: string }) {
  return (
    <span className="flex items-center gap-10 pr-10">
      <span className="whitespace-nowrap font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {t}
      </span>
      <span className="text-white/25" aria-hidden>
        ✦
      </span>
    </span>
  );
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div
        aria-hidden
        className="absolute -left-40 top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-white/[0.04] blur-[120px]"
      />
      <div
        aria-hidden
        className="absolute -right-40 bottom-0 h-[380px] w-[380px] animate-drift rounded-full bg-white/[0.03] blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.34em] text-neutral-500">
            In his own words
          </p>
        </Reveal>
      </div>

      {/* kinetic phrase rows */}
      <div className="relative mt-12 space-y-5 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <Marquee speed={52}>
          {ROW_A.map((t) => (
            <Phrase key={t} t={t} />
          ))}
        </Marquee>
        <Marquee speed={58} reverse>
          {ROW_B.map((t) => (
            <span key={t} className="flex items-center gap-10 pr-10">
              <span className="text-stroke whitespace-nowrap font-display text-3xl font-semibold tracking-tight transition-colors duration-500 hover:text-white sm:text-4xl">
                {t}
              </span>
              <span className="text-white/25" aria-hidden>
                ✦
              </span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* the real quote */}
      <div className="relative mx-auto max-w-4xl px-5 pt-16 text-center sm:px-8">
        <Reveal>
          <span className="font-accent block text-7xl leading-none text-white/20" aria-hidden>
            “
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <blockquote className="font-display text-2xl font-medium leading-snug tracking-tight text-white sm:text-3xl lg:text-[2.6rem] lg:leading-[1.15]">
            The real value my clients experience is never having to worry about
            their websites breaking, getting hacked, or underperforming. They
            gain a reliable partner who keeps their digital presence strong —{" "}
            <span className="font-accent font-normal text-neutral-300">
              while they focus on growing their business.
            </span>
          </blockquote>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 font-display text-xs font-semibold text-white">
              JM
            </span>
            <span className="text-left">
              <span className="block font-display text-sm font-semibold text-white">
                John Raffael Mangubat
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                Web Developer & Digital Solutions Expert
              </span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
