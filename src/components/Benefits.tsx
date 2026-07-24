import { ArrowRight, Reveal, SectionHead } from "./ui";

const ROWS = [
  [
    "Every possible website disaster — already encountered",
    "Throughout my career I've seen every way a website can break, and developed the expertise to fix problems fast when they arise.",
  ],
  [
    "From basic fixes to complete rebuilds",
    "Full-stack capability means one developer handles it all — without you coordinating multiple vendors or technical teams.",
  ],
  [
    "Proven leadership on complex, multi-developer projects",
    "Having led complex, multi-developer initiatives, your project benefits from proven project management and coordination skills.",
  ],
  [
    "Quality assurance before it impacts your business",
    "QA is built into every aspect of my process — catching problems before they impact your business is far more valuable than fixing them after.",
  ],
  [
    "Recommendations, not just execution",
    "I don't just build what you ask for — I actively recommend improvements that drive business growth and enhance user engagement.",
  ],
  [
    "Never worry about breaking, hacks, or downtime again",
    "The real value my clients experience: a reliable partner who keeps their digital presence strong while they focus on growing the business.",
  ],
  [
    "A developer who thinks like a business owner",
    "I build digital foundations designed to scale with your growth, integrate with your existing operations, and require minimal ongoing technical management.",
  ],
];

export default function Benefits() {
  return (
    <section id="why" className="scroll-mt-24 bg-paper text-ink-900">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:py-32">
        {/* sticky visual */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHead
              kicker="Why this experience matters to you"
              title={
                <>
                  A developer who thinks like a{" "}
                  <span className="font-accent font-normal">business owner.</span>
                </>
              }
              desc="Not just a technical implementer. Digital foundations designed to scale with your growth, integrate seamlessly with your existing operations, and require minimal ongoing technical management from your team."
            />
            <Reveal delay={0.2}>
              <figure className="group relative mt-10 overflow-hidden rounded-3xl border border-ink-900/10">
                <img
                  src="https://images.pexels.com/photos/34803969/pexels-photo-34803969.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="A laptop displaying work in a dimly lit room — rigorous testing, every function, before launch"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:contrast-125"
                />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-ink-900 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.22em] text-white">
                  Rigorous testing · every function · before launch
                </figcaption>
                <div className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 font-mono text-[9px] uppercase tracking-[0.22em] text-ink-900 shadow-lg">
                  WordPress · Webflow · Wix
                </div>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* rows */}
        <div className="lg:col-span-7">
          {ROWS.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.05}>
              <div className="group flex gap-6 border-t border-ink-900/12 py-8 transition-all duration-500 last:border-b hover:pl-4 sm:gap-10">
                <span className="pt-1 font-mono text-[11px] tracking-[0.3em] text-neutral-400 transition-colors duration-500 group-hover:text-ink-900">
                  0{i + 1}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                      {t}
                    </h3>
                    <ArrowRight className="h-5 w-5 -translate-x-2 text-ink-900 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                  </div>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
