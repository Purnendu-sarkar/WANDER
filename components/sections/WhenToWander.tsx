'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Flower2, Sun, Leaf, Snowflake } from 'lucide-react';
import Image from 'next/image';
import { seasons } from '../../data/destinations';
import FadeIn from '../animations/FadeIn';
import TextReveal from '../animations/TextReveal';

const EASE = [0.23, 1, 0.32, 1] as const;

const seasonIcons = {
  spring: Flower2,
  summer: Sun,
  autumn: Leaf,
  winter: Snowflake,
} as const;

export default function WhenToWander() {
  const [active, setActive] = useState(0);
  const season = seasons[active];

  return (
    <section
      id="seasons"
      className="relative overflow-hidden border-t border-cream/10 bg-ink py-28 md:py-40"
    >
      {/* Background giant season name */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={season.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="wander-outline select-none text-[26vw] font-bold leading-none tracking-tighter"
          >
            {season.name}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-lime" />
                <span className="text-xs font-mono tracking-[0.3em] text-cream/60 uppercase">
                  Field Notes · Timing Is Everything
                </span>
              </div>
            </FadeIn>
            <TextReveal
              as="h2"
              text={'RIGHT PLACE.\nRIGHT SEASON.'}
              className="font-syne text-4xl font-bold leading-[1.02] tracking-tight text-cream sm:text-6xl md:text-7xl"
            />
          </div>

          {/* Season selector */}
          <FadeIn delay={0.15}>
            <div className="flex flex-wrap gap-2">
              {seasons.map((s, i) => {
                const Icon = seasonIcons[s.icon];
                const isActive = i === active;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActive(i)}
                    className={`relative flex items-center gap-2 rounded-full px-5 py-3 text-xs font-mono tracking-widest transition-colors ${
                      isActive
                        ? 'text-ink'
                        : 'text-cream/60 hover:text-cream'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="seasonTab"
                        className="absolute inset-0 rounded-full bg-lime"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    <Icon className="relative z-10 h-4 w-4" />
                    <span className="relative z-10">{s.name}</span>
                  </button>
                );
              })}
            </div>
          </FadeIn>
        </div>

        {/* Season panel */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-cream/15 lg:col-span-7 lg:aspect-[16/10]">
            <AnimatePresence mode="wait">
              <motion.div
                key={season.id}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.7, ease: EASE }}
                className="absolute inset-0"
              >
                <Image
                  src={season.image}
                  alt={`${season.name} travel`}
                  width={1200}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <span className="absolute bottom-6 left-6 rounded-full border border-cream/15 bg-ink/70 px-4 py-2 text-xs font-mono tracking-widest text-cream/80 backdrop-blur-md">
              {season.months} — {season.mood}
            </span>
          </div>

          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${season.id}-info`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
              >
                <h3 className="font-display text-3xl font-extrabold tracking-tight text-cream md:text-4xl">
                  What <span className="font-serif-editorial italic font-normal text-lime">{season.name.toLowerCase()}</span> feels like.
                </h3>
                <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-cream/80 md:text-xl">
                  {season.blurb}
                </p>

                <p className="mt-8 border-l-2 border-lime pl-5 text-sm leading-relaxed text-cream/60">
                  {season.fieldNote}
                </p>

                <div className="mt-10">
                  <h4 className="text-xs font-mono tracking-[0.3em] text-cream/50 uppercase">
                    Best travelled now
                  </h4>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {season.best.map((place) => (
                      <span
                        key={place}
                        className="rounded-full border border-cream/15 bg-ink-100/60 px-4 py-2 text-xs font-mono tracking-widest text-cream/80"
                      >
                        {place}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}