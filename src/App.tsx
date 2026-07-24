import { useEffect, useState } from "react";
import { MotionConfig, motion, useScroll, useSpring } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-white"
    />
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.a
      href="#top"
      aria-label="Back to top"
      initial={false}
      animate={{
        opacity: show ? 1 : 0,
        y: show ? 0 : 20,
        pointerEvents: show ? ("auto" as const) : ("none" as const),
      }}
      transition={{ duration: 0.35 }}
      className="fixed bottom-6 right-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-ink-950/80 text-white backdrop-blur-md transition-colors duration-300 hover:bg-white hover:text-ink-900"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden
      >
        <path d="M12 20V4" />
        <path d="m6 10 6-6 6 6" />
      </svg>
    </motion.a>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink-900"
      >
        Skip to content
      </a>
      <ScrollProgress />
      {/* film grain */}
      <div
        aria-hidden
        className="bg-noise pointer-events-none fixed inset-0 z-[65] opacity-[0.05] mix-blend-overlay"
      />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Showcase />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </MotionConfig>
  );
}
