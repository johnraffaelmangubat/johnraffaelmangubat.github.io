import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/*  Reveal — scroll-triggered entrance                                 */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  className,
  delay = 0,
  y = 30,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Kicker + SectionHead                                               */
/* ------------------------------------------------------------------ */

export function Kicker({
  children,
  dark = false,
  className,
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] font-medium uppercase tracking-[0.32em]",
        dark ? "text-neutral-500" : "text-neutral-400",
        "flex items-center gap-3",
        className
      )}
    >
      <span
        className={cn(
          "inline-block h-px w-8",
          dark ? "bg-neutral-600" : "bg-neutral-500"
        )}
        aria-hidden
      />
      {children}
    </p>
  );
}

export function SectionHead({
  kicker,
  title,
  desc,
  dark = false,
  align = "left",
  className,
}: {
  kicker: string;
  title: ReactNode;
  desc?: ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <Kicker dark={dark} className={align === "center" ? "justify-center" : ""}>
          {kicker}
        </Kicker>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-5 font-display text-4xl font-semibold leading-[1.04] tracking-tight text-balance sm:text-5xl lg:text-6xl",
            dark ? "text-white" : "text-ink-900"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-6 max-w-2xl text-base leading-relaxed sm:text-lg",
              align === "center" && "mx-auto",
              dark ? "text-neutral-400" : "text-neutral-600"
            )}
          >
            {desc}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Marquee                                                            */
/* ------------------------------------------------------------------ */

export function Marquee({
  children,
  className,
  speed = 44,
  reverse = false,
  trackClassName,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
  reverse?: boolean;
  trackClassName?: string;
}) {
  const style: CSSProperties = {
    ["--marquee-duration" as string]: `${speed}s`,
    animationDirection: reverse ? "reverse" : "normal",
  };
  return (
    <div
      className={cn(
        "marquee-hover relative flex overflow-hidden",
        className
      )}
    >
      <div className="marquee-track" style={style}>
        <div className={cn("flex shrink-0 items-center", trackClassName)}>{children}</div>
        <div
          className={cn("flex shrink-0 items-center", trackClassName)}
          aria-hidden
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  CountUp                                                            */
/* ------------------------------------------------------------------ */

export function CountUp({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.8,
  className,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVal(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(2, -10 * p);
      setVal(to * (p === 1 ? 1 : eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Magnetic wrapper                                                   */
/* ------------------------------------------------------------------ */

export function Magnetic({
  children,
  strength = 0.32,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 160, damping: 14, mass: 0.2 });
  const sy = useSpring(y, { stiffness: 160, damping: 14, mass: 0.2 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={cn("inline-block", className)}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Spotlight card — cursor-following radial glow                      */
/* ------------------------------------------------------------------ */

export function Spotlight({
  children,
  className,
  light = false,
  glow = 560,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
  glow?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [active, setActive] = useState(false);

  return (
    <div
      ref={ref}
      className={cn("group relative overflow-hidden", className)}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-500",
          active ? "opacity-100" : "opacity-0"
        )}
        style={{
          background: `radial-gradient(${glow}px circle at ${pos.x}px ${pos.y}px, ${
            light ? "rgba(10,10,10,0.055)" : "rgba(255,255,255,0.07)"
          }, transparent 65%)`,
        }}
      />
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

export const ArrowUpRight = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const ArrowRight = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="M4 12h16" />
    <path d="m14 6 6 6-6 6" />
  </svg>
);

export const Star = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
    <path d="M10 1.5l2.47 5.29 5.8.69-4.29 3.98 1.13 5.72L10 14.35l-5.11 2.83 1.13-5.72L1.73 7.48l5.8-.69L10 1.5z" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Buttons                                                            */
/* ------------------------------------------------------------------ */

export function BtnPrimary({
  href,
  children,
  dark = true,
  className,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Magnetic strength={0.22}>
      <a
        href={href}
        className={cn(
          "group inline-flex items-center gap-3 rounded-full px-7 py-4 font-display text-sm font-semibold tracking-wide transition-all duration-300",
          dark
            ? "bg-white text-ink-900 hover:bg-neutral-200 hover:shadow-[0_0_44px_rgba(255,255,255,0.28)]"
            : "bg-ink-900 text-white hover:bg-neutral-800 hover:shadow-[0_18px_44px_-14px_rgba(0,0,0,0.5)]",
          className
        )}
      >
        {children}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </a>
    </Magnetic>
  );
}

export function BtnGhost({
  href,
  children,
  dark = true,
  className,
  external = false,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full border px-7 py-4 font-display text-sm font-semibold tracking-wide transition-all duration-300",
        dark
          ? "border-white/25 text-white hover:border-white hover:bg-white hover:text-ink-900"
          : "border-ink-900/25 text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-white",
        className
      )}
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
