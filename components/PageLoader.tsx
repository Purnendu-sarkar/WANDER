'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TAGLINES = [
  'CALIBRATING ATMOSPHERIC MAPS',
  'MAPPING UNCHARTED TERRITORIES',
  'PREPARING MOUNTED EXPEDITIONS',
  'WELCOME TO WANDER',
];

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const duration = 2200;
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    const taglineTimer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % TAGLINES.length);
    }, 550);

    const exitTimer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => {
      clearInterval(timer);
      clearInterval(taglineTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <div className="fixed inset-0 z-[10001] pointer-events-none flex flex-col justify-between overflow-hidden bg-ink select-none">
          {/* Top Panel Reveal animation on exit */}
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-ink z-10 border-b border-cream/5 flex items-end justify-center pb-6"
            exit={{ y: '-100%' }}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
          >
            {/* Glowing Center Radial */}
            <div className="absolute inset-0 bg-radial from-lime/10 via-transparent to-transparent opacity-60 blur-3xl" />
            
            <div className="relative z-20 flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-3 mb-2"
              >
                <span className="h-2 w-2 rounded-full bg-lime animate-ping" />
                <span className="text-[10px] font-mono tracking-[0.4em] text-lime uppercase">
                  INITIALIZING EXPEDITION ENGINE
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-syne text-5xl sm:text-7xl font-extrabold tracking-[0.3em] text-cream"
              >
                WANDER
              </motion.h1>
            </div>
          </motion.div>

          {/* Bottom Panel Reveal animation on exit */}
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-ink z-10 border-t border-cream/5 flex flex-col items-center justify-start pt-6 px-6"
            exit={{ y: '100%' }}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
          >
            <div className="relative z-20 flex flex-col items-center max-w-md w-full">
              {/* Animated Rotating Tagline */}
              <div className="h-6 overflow-hidden mb-6 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={taglineIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs font-mono tracking-[0.25em] text-cream/60 uppercase text-center"
                  >
                    {TAGLINES[taglineIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Counter & Progress Bar */}
              <div className="w-full space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-cream/50 tracking-widest">
                  <span>LAT 27°59&apos;N</span>
                  <span className="text-lime font-bold text-sm">
                    {Math.floor(progress).toString().padStart(3, '0')}%
                  </span>
                  <span>LONG 86°55&apos;E</span>
                </div>

                <div className="relative h-1.5 w-full bg-cream/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-lime/50 via-lime to-white shadow-[0_0_15px_#D9FF5A]"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: 'linear' }}
                  />
                </div>
              </div>

              {/* Bottom Brand Stamp */}
              <div className="mt-8 flex items-center gap-6 text-[10px] font-mono tracking-[0.3em] text-cream/40 uppercase">
                <span>EST. 2026</span>
                <span>•</span>
                <span>VOL. 01</span>
                <span>•</span>
                <span>UNCHARTED ESSENCE</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
