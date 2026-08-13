'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

const navLinks = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Journal', href: '#journal' },
  { label: 'About', href: '#about' },
];

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
        transition={{ duration: 0.8, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
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
            <a href="#" className="text-lg font-bold tracking-[0.2em] text-cream">
              WANDER
            </a>

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
                  href="#destinations"
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
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-ink md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-lg font-bold tracking-[0.2em] text-cream">
                WANDER
              </span>
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
                href="#destinations"
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
