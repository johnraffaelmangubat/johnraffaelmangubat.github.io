import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Reveal } from "./ui";
import { CONTACT, FORM_ENDPOINT } from "../content/contact";
import { cn } from "../utils/cn";

const PROJECT_TYPES = [
  "Rescue & repair — my site is broken or hacked",
  "Complete website build",
  "E-commerce / WooCommerce",
  "Migration to a new platform",
  "Ongoing maintenance & support",
  "Something else",
];

const BUDGETS = ["Not sure yet", "Under $1,000", "$1,000 – $5,000", "$5,000 – $15,000", "$15,000+"];

function LocalClock() {
  const [now, setNow] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: CONTACT.timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums text-neutral-300">{now}</span>;
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-400"
      >
        {label}
        {optional && <span className="tracking-[0.14em] text-neutral-600">optional</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            role="alert"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden pt-1.5 text-xs text-neutral-200"
          >
            ⚠ {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 transition-all duration-300 focus:border-white focus:bg-white/[0.07] focus:outline-none";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    location: "",
    type: "",
    budget: "",
    message: "",
    website: "", // honeypot
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const set = (k: string) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: "" }));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (form.website) return; // bot

    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please tell me your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "A valid email lets me reply — please check it.";
    if (!form.type) errs.type = "Choose the closest match — 'Something else' works too.";
    if (form.message.trim().length < 20) errs.message = "A couple more sentences help me prepare a real estimate (20+ characters).";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("sending");
    try {
      if (FORM_ENDPOINT) {
        await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...form, _subject: `Project inquiry — ${form.type}` }),
        });
      } else {
        await new Promise((r) => setTimeout(r, 1100));
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-ink-900">
      <div
        aria-hidden
        className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"
      />
      <div
        aria-hidden
        className="absolute -left-40 top-24 h-[460px] w-[460px] animate-drift rounded-full bg-white/[0.05] blur-[130px]"
      />
      <div
        aria-hidden
        className="absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-white/[0.04] blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* ================= details ================= */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-neutral-400">
                <span className="inline-block h-px w-8 bg-neutral-500" aria-hidden />
                Start a project
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl">
                Let's build your{" "}
                <span className="font-accent font-normal text-neutral-300">digital foundation.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-neutral-400">
                Tell me about your business and your goals. You'll get a detailed
                estimate and timeline in writing — accurate enough to budget
                confidently and plan your launch around.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <dl className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/12 bg-white/[0.03]">
                {/* email */}
                <div className="flex items-center gap-4 p-5">
                  <dt className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-500">
                    Email
                  </dt>
                  <dd className="flex min-w-0 flex-1 items-center justify-between gap-3">
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="link-slide truncate text-sm text-white"
                    >
                      {CONTACT.email}
                    </a>
                    <button
                      onClick={copyEmail}
                      className={cn(
                        "shrink-0 rounded-full border px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] transition-all duration-300",
                        copied
                          ? "border-white bg-white text-ink-900"
                          : "border-white/20 text-neutral-300 hover:border-white hover:text-white"
                      )}
                    >
                      {copied ? "Copied ✓" : "Copy"}
                    </button>
                  </dd>
                </div>
                {/* phone */}
                <div className="flex items-center gap-4 p-5">
                  <dt className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-500">
                    Phone
                  </dt>
                  <dd>
                    <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="link-slide text-sm text-white">
                      {CONTACT.phone}
                    </a>
                  </dd>
                </div>
                {/* location */}
                <div className="flex items-center gap-4 p-5">
                  <dt className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-500">
                    Based in
                  </dt>
                  <dd className="text-sm text-white">
                    {CONTACT.location}
                    <span className="ml-2 font-mono text-[10px] tracking-[0.18em] text-neutral-500">
                      · local time <LocalClock />
                    </span>
                  </dd>
                </div>
                {/* portfolio */}
                <div className="flex items-center gap-4 p-5">
                  <dt className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-500">
                    Portfolio
                  </dt>
                  <dd>
                    <a
                      href={CONTACT.portfolio}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group inline-flex items-center gap-2 text-sm text-white"
                    >
                      <span className="link-slide">dev-johnraffael.pantheonsite.io</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-neutral-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                    </a>
                  </dd>
                </div>
                {/* availability */}
                <div className="flex items-center gap-4 p-5">
                  <dt className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-500">
                    Status
                  </dt>
                  <dd className="flex items-center gap-3 text-sm text-white">
                    <span className="h-2 w-2 animate-pulse-dot rounded-full bg-white" aria-hidden />
                    {CONTACT.availability}
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.32}>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-500">
                Reply within 1 business day · NDA-friendly · No obligation
              </p>
            </Reveal>
          </div>

          {/* ================= form ================= */}
          <div className="lg:col-span-7">
            <Reveal delay={0.12}>
              <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-ink-800/80 p-6 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)] backdrop-blur-sm sm:p-10">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/[0.05] blur-3xl"
                />
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="flex min-h-[480px] flex-col items-center justify-center py-10 text-center"
                      aria-live="polite"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 18 }}
                        className="flex h-20 w-20 items-center justify-center rounded-full bg-white"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
                          <motion.path
                            d="m5 13 4 4L19 7"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
                          />
                        </svg>
                      </motion.span>
                      <h3 className="mt-8 font-display text-3xl font-semibold text-white">
                        Message received{form.name ? `, ${form.name.split(" ")[0]}` : ""}.
                      </h3>
                      <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-400">
                        Thanks for the brief — your{" "}
                        <span className="text-neutral-200">{form.type.split(" — ")[0].toLowerCase()}</span>{" "}
                        inquiry is in. Expect a reply at{" "}
                        <span className="text-neutral-200">{form.email}</span> within one
                        business day, with a detailed estimate and timeline in writing.
                      </p>
                      <button
                        onClick={() => {
                          setForm({ name: "", email: "", company: "", location: "", type: "", budget: "", message: "", website: "" });
                          setStatus("idle");
                        }}
                        className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-display text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-ink-900"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      noValidate
                      onSubmit={onSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.4 }}
                      className="relative grid gap-5 sm:grid-cols-2"
                    >
                      {/* honeypot */}
                      <input
                        type="text"
                        name="website"
                        value={form.website}
                        onChange={set("website")}
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        className="absolute -left-[9999px] h-0 w-0 opacity-0"
                      />

                      <Field label="Your name" htmlFor="cf-name" error={errors.name}>
                        <input
                          id="cf-name"
                          type="text"
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={set("name")}
                          aria-invalid={!!errors.name}
                          className={cn(inputCls, errors.name && "border-white/60")}
                        />
                      </Field>

                      <Field label="Email" htmlFor="cf-email" error={errors.email}>
                        <input
                          id="cf-email"
                          type="email"
                          placeholder="jane@company.com"
                          value={form.email}
                          onChange={set("email")}
                          aria-invalid={!!errors.email}
                          className={cn(inputCls, errors.email && "border-white/60")}
                        />
                      </Field>

                      <Field label="Company" htmlFor="cf-company" optional>
                        <input
                          id="cf-company"
                          type="text"
                          placeholder="Company or brand"
                          value={form.company}
                          onChange={set("company")}
                          className={inputCls}
                        />
                      </Field>

                      <Field label="Country / time zone" htmlFor="cf-location" optional>
                        <input
                          id="cf-location"
                          type="text"
                          placeholder="e.g. United States, EST"
                          value={form.location}
                          onChange={set("location")}
                          className={inputCls}
                        />
                      </Field>

                      <Field label="What do you need?" htmlFor="cf-type" error={errors.type}>
                        <select
                          id="cf-type"
                          value={form.type}
                          onChange={set("type")}
                          aria-invalid={!!errors.type}
                          className={cn(inputCls, "appearance-none", !form.type && "text-neutral-600", errors.type && "border-white/60")}
                        >
                          <option value="" disabled className="bg-ink-900 text-neutral-500">
                            Select a project type…
                          </option>
                          {PROJECT_TYPES.map((t) => (
                            <option key={t} value={t} className="bg-ink-900 text-white">
                              {t}
                            </option>
                          ))}
                        </select>
                      </Field>

                      <Field label="Budget range" htmlFor="cf-budget" optional>
                        <select
                          id="cf-budget"
                          value={form.budget}
                          onChange={set("budget")}
                          className={cn(inputCls, "appearance-none", !form.budget && "text-neutral-600")}
                        >
                          <option value="" disabled className="bg-ink-900 text-neutral-500">
                            Select a range…
                          </option>
                          {BUDGETS.map((b) => (
                            <option key={b} value={b} className="bg-ink-900 text-white">
                              {b}
                            </option>
                          ))}
                        </select>
                      </Field>

                      <div className="sm:col-span-2">
                        <Field label="About the project" htmlFor="cf-message" error={errors.message}>
                          <textarea
                            id="cf-message"
                            rows={5}
                            placeholder="What are you building, what's broken, or what's the goal? Current site link, deadlines and anything else that helps."
                            value={form.message}
                            onChange={set("message")}
                            aria-invalid={!!errors.message}
                            className={cn(inputCls, "resize-none", errors.message && "border-white/60")}
                          />
                        </Field>
                      </div>

                      {status === "error" && (
                        <p role="alert" className="text-sm text-neutral-200 sm:col-span-2">
                          ⚠ Something went wrong sending your message — please try again, or email{" "}
                          <a href={`mailto:${CONTACT.email}`} className="link-slide text-white">
                            {CONTACT.email}
                          </a>{" "}
                          directly.
                        </p>
                      )}

                      <div className="flex flex-wrap items-center justify-between gap-4 sm:col-span-2">
                        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-600">
                          Your details stay private. No lists, no spam.
                        </p>
                        <button
                          type="submit"
                          disabled={status === "sending"}
                          className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-display text-sm font-semibold tracking-wide text-ink-900 transition-all duration-300 hover:shadow-[0_0_44px_rgba(255,255,255,0.28)] disabled:cursor-wait disabled:opacity-70"
                        >
                          {status === "sending" ? (
                            <>
                              <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink-900/25 border-t-ink-900" aria-hidden />
                              Sending…
                            </>
                          ) : (
                            <>
                              Send the brief
                              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                            </>
                          )}
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
