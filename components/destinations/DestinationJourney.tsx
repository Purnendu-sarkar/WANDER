'use client';

import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { destinations } from '../../data/destinations';

const EASE = [0.23, 1, 0.32, 1] as const;
const journey = destinations.slice(0, 4);

/**
 * The spine of the page: one sticky frame where scrolling swaps the
 * destination rather than moving the layout — the journey happens in place.
 */
export function DestinationJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const next = Math.min(journey.length - 1, Math.floor(value * journey.length));
    setActive(next < 0 ? 0 : next);
  });

  const current = journey[active];

  return (
    <section
      id="destinations"
      ref={containerRef}
      className="relative bg-ink"
      style={{ height: `${journey.length * 100}vh` }}
      aria-label="Destination journey"
    >
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        {/* Giant outline name in the background field */}
        <span
          className="outline-type pointer-events-none absolute -right-6 top-1/2 hidden -translate-y-1/2 font-display text-[16vw] font-extrabold leading-none tracking-tightest lg:block"
          aria-hidden="true"
        >
          {current.category.toUpperCase()}
        </span>

        <div className="relative mx-auto grid w-full max-w-[1600px] gap-10 px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20 lg:px-10">
          {/* Typography side */}
          <div className="pt-24 lg:pt-0">
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.28em] text-bone/40">
              <span>Destination</span>
              <span className="h-px w-8 bg-bone/20" />
              <span className="text-acid">{current.number}</span>
              <span>/ 0{journey.length}</span>
            </div>

            <div className="mt-6 h-[13vw] min-h-[76px] overflow-hidden lg:h-[9vw]">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={current.name}
                  className="font-display text-[13vw] font-extrabold leading-[0.85] tracking-tightest text-bone lg:text-[9vw]"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  exit={{ y: '-110%' }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  {current.name}
                </motion.h2>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${current.name}-meta`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: EASE, delay: 0.05 }}
              >
                <p className="mt-6 max-w-sm font-display text-2xl font-light leading-snug text-bone/80 lg:text-3xl">
                  {current.description}
                </p>
                <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-[11px] uppercase tracking-[0.2em]">
                  <div>
                    <dt className="text-bone/35">Region</dt>
                    <dd className="mt-1 text-bone/85">{current.country}</dd>
                  </div>
                  <div>
                    <dt className="text-bone/35">Category</dt>
                    <dd className="mt-1 text-bone/85">{current.category}</dd>
                  </div>
                  <div>
                    <dt className="text-bone/35">Coordinates</dt>
                    <dd className="mt-1 text-bone/85">{current.coordinates}</dd>
                  </div>
                </dl>
              </motion.div>
            </AnimatePresence>

            <a
              href="#explore"
              className="group mt-10 inline-flex items-center gap-3 border-b border-bone/25 pb-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-bone transition-colors duration-200 ease-expo hover:border-acid hover:text-acid"
            >
              Explore
              <ArrowRightIcon
                className="h-4 w-4 transition-transform duration-200 ease-expo group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Image side — masked reveal between destinations */}
          <div className="relative aspect-[4/5] w-full overflow-hidden lg:aspect-[4/5]">
            {journey.map((destination, index) => (
              <motion.div
                key={destination.name}
                className="absolute inset-0"
                initial={false}
                animate={{
                  opacity: index === active ? 1 : 0,
                  scale: index === active ? 1 : 1.06,
                  clipPath:
                    index === active ? 'inset(0% 0 0% 0)' : 'inset(18% 0 18% 0)',
                }}
                transition={{ duration: 0.3, ease: EASE }}
                aria-hidden={index !== active}
              >
                <img
                  src={destination.image}
                  alt={`${destination.name}, ${destination.country}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            ))}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-bone/10" />
          </div>
        </div>

        {/* Progress rail */}
        <div className="absolute bottom-6 left-6 right-6 flex gap-2 lg:left-10 lg:right-10">
          {journey.map((destination, index) => (
            <div key={destination.name} className="h-px flex-1 bg-bone/15">
              <motion.div
                className="h-px bg-acid"
                initial={false}
                animate={{ scaleX: index <= active ? 1 : 0 }}
                style={{ originX: 0 }}
                transition={{ duration: 0.25, ease: EASE }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DestinationJourney;
