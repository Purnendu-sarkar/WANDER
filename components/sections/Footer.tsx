'use client';

import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'X', href: '#' },
  { label: 'Email', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-cream/10 bg-ink py-16">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[16vw] font-bold leading-[0.85] tracking-tighter text-cream md:text-[8vw]"
            >
              WANDER
            </motion.h2>
            <p className="mt-3 text-sm tracking-[0.2em] text-cream/50">
              GO BEYOND PLACES.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-6">
              {socials.map((social) => (
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
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs tracking-[0.2em] text-cream/40 md:flex-row">
          <span>© 2026 WANDER</span>
          <span>TRAVEL ISN&apos;T A DESTINATION. IT&apos;S A FEELING.</span>
        </div>
      </div>
    </footer>
  );
}
