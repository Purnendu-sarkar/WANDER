'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';
import { testimonials } from '../../data/destinations';
import FadeIn from '../animations/FadeIn';
import TextReveal from '../animations/TextReveal';

const EASE = [0.23, 1, 0.32, 1] as const;
const AUTO_MS = 7000;

export default function TravelerVoices() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = testimonials[active];

  const next = useCallback(
    () => setActive((i) => (i + 1) % testimonials.length),
    []
  );
  const prev = useCallback(
    () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTO_MS);
    return () => clearInterval(id);
  }, [next, paused]);

  return (
    <section
      id="voices"
      className="relative overflow-hidden border-t border-cream/10 bg-ink py-28 md:py-40"
    >
      {/* Background: soft radial accent + giant outline word */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-lime/5 blur-[160px]" />
        <div className="flex h-full items-center justify-center">
          <span className="wander-outline select-none text-[26vw] font-bold leading-none tracking-tighter">
            VOICES
          </span>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="text-center">
          <FadeIn>
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-lime" />
              <span className="text-xs font-mono tracking-[0.3em] text-cream/60 uppercase">
                From The Road
              </span>
              <span className="h-px w-10 bg-lime" />
            </div>
          </FadeIn>
          <TextReveal
            as="h2"
            text={'TRAVELERS, IN THEIR\nOWN WORDS.'}
            className="font-syne text-4xl font-bold leading-[1.02] tracking-tight text-cream sm:text-6xl md:text-7xl"
          />
        </div>

        <div
          className="mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="mx-auto h-10 w-10 text-lime" />

          <div className="relative mt-8 min-h-[240px] md:min-h-[210px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="text-center"
              >
                <p className="mx-auto max-w-3xl font-display text-xl font-light leading-snug text-cream/90 md:text-3xl">
                  {current.quote}
                </p>
                <footer className="mt-10 flex items-center justify-center gap-4">
                  <span className="relative h-12 w-12 overflow-hidden rounded-full border border-lime/40">
                    <Image
                      src={current.avatar}
                      alt={current.name}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <span className="text-left">
                    <span className="block text-sm font-semibold text-cream">
                      {current.name}
                    </span>
                    <span className="mt-0.5 block text-[11px] font-mono uppercase tracking-[0.2em] text-cream/40">
                      {current.origin} · {current.route}
                    </span>
                  </span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Controls: arrows + journal-style progress rails */}
          <div className="mt-12 flex items-center justify-center gap-8">
            <button
              onClick={prev}
              aria-label="Previous story"
              className="rounded-full border border-cream/15 p-2.5 text-cream/60 transition-colors hover:border-lime/40 hover:text-lime"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setActive(i)}
                  aria-label={`Story ${i + 1}`}
                  className="h-px w-10 overflow-hidden bg-cream/15 md:w-14"
                >
                  {i === active &&
                    (paused ? (
                      <span className="block h-px w-full bg-lime" />
                    ) : (
                      <motion.span
                        key={active}
                        className="block h-px w-full bg-lime"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        style={{ transformOrigin: 'left' }}
                        transition={{
                          duration: AUTO_MS / 1000,
                          ease: 'linear',
                        }}
                      />
                    ))}
                </button>
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next story"
              className="rounded-full border border-cream/15 p-2.5 text-cream/60 transition-colors hover:border-lime/40 hover:text-lime"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}