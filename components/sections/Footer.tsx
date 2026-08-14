'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp, ArrowUpRight, Check, Send } from 'lucide-react';
import {
  dispatch,
  footerColumns,
  footerContact,
  footerStatement,
} from '../../data/destinations';
import FadeIn from '../animations/FadeIn';
import TextReveal from '../animations/TextReveal';
import Parallax from '../animations/Parallax';
import MagneticButton from '../ui/MagneticButton';

const RADIUS = 24;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [inFooter, setInFooter] = useState(false);

  const { scrollYProgress } = useScroll();
  const ringProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const el = footerRef.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInFooter(entry.isIntersecting),
      { rootMargin: '0px 0px -10% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const floatingVisible = showTop && !inFooter;

  return (
    <footer
      id="footer"
      ref={footerRef}
      className="relative overflow-hidden border-t border-cream/10 bg-ink"
    >
      {/* ── Closing statement ─────────────────────────────────── */}
      <div className="mx-auto max-w-[1600px] px-6 pt-24 md:px-12 md:pt-32">
        <FadeIn>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-lime" />
            <span className="text-xs font-mono tracking-[0.3em] text-cream/50 uppercase">
              {footerStatement.eyebrow}
            </span>
          </div>
        </FadeIn>

        <TextReveal
          as="h2"
          text={footerStatement.text}
          className="font-syne text-4xl font-bold leading-[1.05] tracking-tight text-cream sm:text-6xl md:text-7xl"
        />

        <FadeIn delay={0.25}>
          <p className="mt-6 font-serif-editorial text-xl italic text-lime/80 md:text-2xl">
            {footerStatement.subline}
          </p>
        </FadeIn>

        {/* ── Dispatch CTA band ───────────────────────────────── */}
        <FadeIn delay={0.1}>
          <div className="relative mt-16 overflow-hidden rounded-3xl border border-cream/10 bg-ink-100/40 p-8 sm:p-12 md:mt-20 md:p-16">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-lime/10 blur-[120px]" />
            <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <div className="flex items-center gap-3">
                  <Send className="h-4 w-4 text-lime" />
                  <span className="text-xs font-mono tracking-[0.3em] text-lime uppercase">
                    {dispatch.eyebrow}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-cream sm:text-4xl">
                  {dispatch.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/60">
                  {dispatch.subline}
                </p>
              </div>

              <div>
                {subscribed ? (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 rounded-2xl border border-lime/30 bg-lime/10 px-5 py-4 text-sm font-mono text-lime"
                  >
                    <Check className="h-4 w-4 shrink-0" />
                    <span>{dispatch.success}</span>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col gap-3 sm:flex-row"
                  >
                    <label htmlFor="dispatch-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="dispatch-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={dispatch.placeholder}
                      className="flex-1 rounded-full border border-cream/15 bg-ink/80 px-5 py-3.5 text-sm text-cream placeholder:text-cream/40 focus:border-lime focus:outline-none"
                    />
                    <MagneticButton>
                      <button
                        type="submit"
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-cream sm:w-auto"
                      >
                        {dispatch.cta}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </MagneticButton>
                  </form>
                )}
                <p className="mt-4 text-[11px] font-mono uppercase tracking-[0.2em] text-cream/35">
                  {dispatch.note}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── Navigation groups + contact ─────────────────────── */}
        <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-4 lg:grid-cols-12 lg:gap-x-12 md:mt-24">
          {footerColumns.map((col, ci) => (
            <FadeIn key={col.title} delay={ci * 0.08} className="lg:col-span-2">
              <div>
                <h4 className="text-xs font-mono tracking-[0.3em] text-cream/40 uppercase">
                  {col.title}
                </h4>
                <ul className="mt-7 space-y-4">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group relative inline-block text-sm text-cream/60 transition-colors hover:text-cream"
                      >
                        {link.label}
                        <span className="absolute -bottom-1 left-0 h-px w-0 bg-lime transition-all duration-300 group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={0.24} className="lg:col-span-6">
            <div>
              <h4 className="text-xs font-mono tracking-[0.3em] text-cream/40 uppercase">
                Say Hello
              </h4>
              <a
                href={footerContact.emailHref}
                className="mt-7 inline-block font-display text-2xl font-extrabold tracking-tight text-cream transition-colors hover:text-lime sm:text-3xl"
              >
                {footerContact.email}
              </a>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/50">
                {footerContact.note}
              </p>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {footerContact.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group relative text-sm text-cream/60 transition-colors hover:text-cream"
                  >
                    {social.label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-lime transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>

              <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/30">
                {footerContact.coordinates}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* ── Oversized brand wordmark ─────────────────────────── */}
        <Parallax speed={0.15} className="mt-24 md:mt-32">
          <FadeIn>
            <div className="mb-8 text-center">
              <span className="text-xs font-mono tracking-[0.35em] text-lime uppercase">
                {footerContact.tagline}
              </span>
            </div>
            <h2
              className="wander-outline select-none whitespace-nowrap text-center font-bold leading-[0.8] tracking-tighter text-[26vw] md:text-[21vw]"
              aria-label="WANDER"
            >
              WANDER<span className="text-lime">.</span>
            </h2>
          </FadeIn>
        </Parallax>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────── */}
      <div className="relative z-10 border-t border-cream/10">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row md:px-12">
          <span className="text-xs tracking-[0.2em] text-cream/40">
            © 2026 WANDER
          </span>
          <span className="text-center text-[11px] font-mono uppercase tracking-[0.25em] text-cream/40">
            {footerContact.closing}
          </span>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs tracking-[0.2em] text-cream/40 transition-colors hover:text-lime"
          >
            Back To Top
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>

      {/* ── Floating back-to-top with scroll progress ring ────── */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-cream/15 bg-ink/80 backdrop-blur-md transition-all duration-500 ${
          floatingVisible
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-6 opacity-0'
        }`}
      >
        <svg
          className="absolute inset-0 h-full w-full -rotate-90"
          viewBox="0 0 56 56"
          aria-hidden="true"
        >
          <circle
            cx="28"
            cy="28"
            r={RADIUS}
            fill="none"
            stroke="rgba(244,241,234,0.12)"
            strokeWidth="1.5"
          />
          <motion.circle
            cx="28"
            cy="28"
            r={RADIUS}
            fill="none"
            stroke="#D9FF5A"
            strokeWidth="1.5"
            strokeLinecap="round"
            pathLength={1}
            style={{ pathLength: ringProgress }}
          />
        </svg>
        <ArrowUp className="h-5 w-5 text-cream" />
      </button>
    </footer>
  );
}