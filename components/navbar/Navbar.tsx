'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

const navLinks = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Experiences', href: '/#experiences' },
  { label: 'Journal', href: '/#journal' },
  { label: 'About', href: '/#about' },
];

const logoLetters = 'WANDER'.split('');

const EASE = [0.22, 1, 0.36, 1] as const;

const logoVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.055 },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 16, rotateX: -70 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

function WanderWordmark({ delay = 0.2, asLink = true }: { delay?: number; asLink?: boolean }) {
  const content = (
    <>
      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden border border-lime/50 bg-ink/40 shadow-[0_0_24px_rgba(217,255,90,0.14)] backdrop-blur-sm transition-colors duration-300 group-hover:border-lime">
        <span className="absolute inset-x-1 top-1 h-px bg-cream/25" />
        <span className="absolute inset-y-1 right-1 w-px bg-lime/60" />
        <span className="font-syne text-[15px] font-extrabold leading-none tracking-[-0.04em] text-lime">W</span>
      </span>
      <span className="flex items-end gap-[0.16em] font-syne text-[18px] font-extrabold uppercase leading-none tracking-[0.16em] text-cream sm:text-[20px]">
        {logoLetters.map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            variants={letterVariants}
            className="inline-block origin-bottom transition-colors duration-300 group-hover:text-lime"
          >
            {letter}
          </motion.span>
        ))}
      </span>
      <span className="hidden -translate-y-px font-mono text-[9px] uppercase tracking-[0.28em] text-cream/45 lg:inline">
        Field Co.
      </span>
    </>
  );

  const className = "group inline-flex items-center gap-3 text-cream outline-none focus-visible:ring-2 focus-visible:ring-lime/70";

  if (!asLink) {
    return (
      <motion.div
        className={className}
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay }}
      >
        {content}
      </motion.div>
    );
  }

  return (
    <motion.a
      href="/"
      className={className}
      variants={logoVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      aria-label="WANDER home"
    >
      {content}
    </motion.a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? 'bg-[#0B0B0B]/70 backdrop-blur-md border-b border-cream/10 py-3'
              : 'bg-transparent py-5'
          }`}
        >
          <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-12">
            <WanderWordmark delay={0.2} />

            <div className="hidden items-center gap-10 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group relative text-sm tracking-wide text-cream/70 transition-colors hover:text-cream"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-lime transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <MagneticButton>
                <a
                  href="/#destinations"
                  className="group inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-lime"
                >
                  Explore
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </MagneticButton>
            </div>

            <button
              className="text-cream md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-[60] bg-ink md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <WanderWordmark delay={0.08} asLink={false} />
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="text-cream"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-2 px-6 pt-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="border-b border-cream/10 py-5 text-3xl font-bold tracking-tight text-cream"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="/#destinations"
                onClick={() => setMenuOpen(false)}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-4 text-base font-medium text-ink"
              >
                Explore →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
