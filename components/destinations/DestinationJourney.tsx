'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { destinations } from '../../data/destinations';

export default function DestinationJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const total = destinations.length;

  return (
    <section
      id="destinations"
      ref={containerRef}
      className="relative bg-ink"
      style={{ height: `${total * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {destinations.map((dest, i) => {
          const start = i / total;
          const end = (i + 1) / total;
          const mid = (start + end) / 2;

          const opacity = useTransform(
            scrollYProgress,
            [start, mid, end],
            [0, 1, 0]
          );
          const scale = useTransform(
            scrollYProgress,
            [start, mid, end],
            [1.15, 1, 1.1]
          );
          const textY = useTransform(
            scrollYProgress,
            [start, mid, end],
            [80, 0, -80]
          );
          const imageClip = useTransform(
            scrollYProgress,
            [start, mid, end],
            ['inset(100% 0 0 0)', 'inset(0% 0 0 0)', 'inset(0 0 100% 0)']
          );

          return (
            <div
              key={dest.number}
              className="absolute inset-0 grid grid-cols-1 items-center gap-8 px-6 md:grid-cols-2 md:px-12 lg:px-20"
            >
              {/* Text side */}
              <motion.div
                style={{ opacity, y: textY }}
                className="order-2 md:order-1"
              >
                <div className="mb-4 flex items-center gap-4">
                  <span className="text-sm tracking-[0.3em] text-lime">
                    {dest.number}
                  </span>
                  <div className="h-px w-12 bg-cream/20" />
                  <span className="text-xs tracking-[0.2em] text-cream/50">
                    {dest.category.toUpperCase()}
                  </span>
                </div>

                <h2 className="text-[14vw] font-bold leading-[0.85] tracking-tighter text-cream md:text-[7vw]">
                  {dest.name}
                </h2>

                <p className="mt-4 text-lg text-cream/60 md:text-2xl">
                  {dest.description}
                </p>

                <div className="mt-8 flex items-center gap-6">
                  <div className="text-xs tracking-[0.2em] text-cream/40">
                    {dest.country.toUpperCase()}
                  </div>
                  <div className="text-xs tracking-[0.2em] text-cream/40">
                    {dest.coordinates}
                  </div>
                  <a
                    href="#explore"
                    className="group ml-auto inline-flex items-center gap-2 text-sm text-cream transition-colors hover:text-lime md:ml-0"
                  >
                    Explore
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </motion.div>

              {/* Image side */}
              <motion.div
                style={{ opacity }}
                className="order-1 h-[35vh] w-full overflow-hidden md:order-2 md:h-[70vh]"
              >
                <motion.div
                  style={{ clipPath: imageClip }}
                  className="h-full w-full overflow-hidden"
                >
                  <motion.img
                    src={dest.image}
                    alt={dest.name}
                    style={{ scale }}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>
            </div>
          );
        })}

        {/* Progress indicator */}
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
          <DestinationProgress scrollYProgress={scrollYProgress} total={total} />
        </div>
      </div>
    </section>
  );
}

function DestinationProgress({
  scrollYProgress,
  total,
}: {
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  total: number;
}) {
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs tracking-[0.2em] text-cream/40">JOURNEY</span>
      <div className="h-px w-32 bg-cream/20">
        <motion.div className="h-full bg-lime" style={{ width }} />
      </div>
      <span className="text-xs tracking-[0.2em] text-cream/40">
        {String(total).padStart(2, '0')}
      </span>
    </div>
  );
}
