'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8, 1],
    [0, 1, 1, 0.5]
  );

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink py-24"
    >
      {/* Background outline text */}
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <span className="wander-outline select-none text-[30vw] font-bold leading-none tracking-tighter">
          NEXT
        </span>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-12 bg-lime" />
          <span className="text-xs tracking-[0.3em] text-cream/50">
            YOUR JOURNEY AWAITS
          </span>
          <div className="h-px w-12 bg-lime" />
        </div>

        <h2 className="text-[14vw] font-bold leading-[0.85] tracking-tighter text-cream md:text-[8vw]">
          WHERE WILL
          <br />
          YOU GO NEXT?
        </h2>

        <div className="mt-12">
          <MagneticButton strength={0.5}>
            <a
              href="#destinations"
              className="group inline-flex items-center gap-3 rounded-full bg-lime px-10 py-5 text-lg font-medium text-ink transition-all hover:scale-105 hover:bg-cream"
            >
              START EXPLORING
              <span className="text-xl transition-transform group-hover:translate-x-2">
                →
              </span>
            </a>
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}
