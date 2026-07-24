import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../utils/cn";

const LINKS = [
  { label: "Expertise", href: "#services" },
  { label: "Journey", href: "#journey" },
  { label: "Why me", href: "#why" },
  { label: "Engagement", href: "#engagement" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "glass-dark py-3 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)]" : "bg-transparent py-5"
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8"
        >
          {/* logo */}
          <a href="#top" className="group flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center border border-white/30 font-display text-xs font-bold tracking-tight text-white transition-all duration-300 group-hover:rotate-90 group-hover:bg-white group-hover:text-ink-900">
              JM
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-[0.22em] text-white sm:block">
              MANGUBAT<span className="text-neutral-500">®</span>
            </span>
          </a>

          {/* desktop links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="link-slide font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-neutral-300 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink-900 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] sm:inline-flex"
            >
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-ink-900" aria-hidden />
              Start a project
            </a>

            {/* mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-white/20 lg:hidden"
            >
              <span
                className={cn(
                  "h-px w-4 bg-white transition-all duration-300",
                  open && "translate-y-[3.5px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-px w-4 bg-white transition-all duration-300",
                  open && "-translate-y-[3.5px] -rotate-45"
                )}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink-950 px-6 pb-10 pt-28 lg:hidden"
          >
            <div className="grid-lines absolute inset-0 opacity-60" aria-hidden />
            <ul className="relative space-y-2">
              {LINKS.concat([{ label: "Contact", href: "#contact" }]).map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 border-b border-white/10 py-4"
                  >
                    <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-500">
                      0{i + 1}
                    </span>
                    <span className="font-display text-4xl font-semibold text-white transition-transform duration-300 group-hover:translate-x-2">
                      {l.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative font-mono text-[11px] uppercase tracking-[0.28em] text-neutral-500"
            >
              Worldwide · Remote · Async-first
              <br />
              <a href="#contact" onClick={() => setOpen(false)} className="link-slide text-neutral-300">
                Start a project ↓
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
